// 任务泡泡 Service Worker
// 版本号 - 更新资源时修改此值触发重新缓存
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `task-bubble-${CACHE_VERSION}`;

// 需要预缓存的核心资源
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500&display=swap'
];

// ---- 安装阶段：预缓存核心资源 ----
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // 分别缓存，避免单个失败导致整体失败
        return Promise.allSettled(
          PRECACHE_ASSETS.map(url =>
            cache.add(url).catch(err => console.warn('[SW] Failed to cache:', url, err))
          )
        );
      })
      .then(() => {
        console.log('[SW] Install complete');
        return self.skipWaiting();
      })
  );
});

// ---- 激活阶段：清理旧缓存 ----
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('task-bubble-') && key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      ))
      .then(() => {
        console.log('[SW] Activate complete');
        return self.clients.claim();
      })
  );
});

// ---- 请求拦截：缓存优先策略 ----
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // 只处理 GET 请求
  if (request.method !== 'GET') return;

  // 跳过 Chrome 扩展请求
  if (url.protocol === 'chrome-extension:') return;

  // 跳过非 http(s) 请求
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(request)
      .then(cached => {
        if (cached) {
          // 有缓存：返回缓存，同时后台更新
          const fetchPromise = fetch(request)
            .then(response => {
              if (response && response.status === 200 && response.type !== 'opaque') {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
              }
              return response;
            })
            .catch(() => {});
          return cached;
        }

        // 无缓存：从网络获取并缓存
        return fetch(request)
          .then(response => {
            if (!response || response.status !== 200) return response;

            // 只缓存同源资源和特定跨域资源（字体等）
            const shouldCache = url.origin === self.location.origin ||
              url.hostname.includes('fonts.googleapis.com') ||
              url.hostname.includes('fonts.gstatic.com');

            if (shouldCache) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
            }

            return response;
          })
          .catch(() => {
            // 离线且无缓存：返回离线页面
            if (request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// ---- 后台同步（可选，用于将来扩展） ----
self.addEventListener('sync', event => {
  if (event.tag === 'sync-tasks') {
    console.log('[SW] Background sync: sync-tasks');
  }
});

// ---- 推送通知（可选，用于将来扩展） ----
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  self.registration.showNotification(data.title || '任务泡泡', {
    body: data.body || '你有新的任务提醒',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200]
  });
});
