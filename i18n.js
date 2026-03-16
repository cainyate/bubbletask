/**
 * 任务泡泡 i18n 语言包
 * Task Bubble Internationalization
 */

const I18N = {

  /* ─────────────── 简体中文 ─────────────── */
  'zh-CN': {
    appName:          '任务泡泡',
    appDesc:          'ADHD 友好的可视化任务管理工具，用泡泡的方式管理你的任务',

    // 主界面
    bubbleCount:      '泡泡',
    bubbleCountOf:    '/',
    hintEmpty:        '点击右下角 + 添加任务泡泡',

    // 设置
    settings:         '设置',
    soundEffect:      '完成音效',

    // 模态框
    modalTitle:       '创建新泡泡',
    inputPlaceholder: '输入任务标签（≤5字）',
    sizeSmall:        '小',
    sizeMedium:       '中',
    sizeLarge:        '大',
    cancel:           '取消',
    create:           '创建',

    // 气泡菜单
    complete:         '完成',
    delete:           '删除',

    // Toast 提示
    toastMaxBubbles:  '已达最大数量（5个）',
    toastLabelTooLong:'标签不能超过5个字',

    // 教程
    tutorialWelcomeTitle: '欢迎使用任务泡泡',
    tutorialWelcomeText:  '这是一个轻松有趣的任务管理工具，点击下方按钮开始创建你的第一个任务泡泡吧！',
    tutorialWelcomeBtn:   '创建泡泡',
    tutorialSkip:         '跳过',
    tutorialTestTask:     '测试任务',
    tutorialPopTip:       '双击戳破泡泡',
    tutorialPopToast:     '双击泡泡可以戳破它~',
    tutorialDoneTitle:    '太棒了！',
    tutorialDoneText:     '你已经学会了基本操作！现在可以开始使用任务泡泡来管理你的任务啦~',
    tutorialDoneBtn:      '开始使用',

    // 语言切换
    langLabel:        '语言',
  },

  /* ─────────────── English ─────────────── */
  'en': {
    appName:          'Task Bubble',
    appDesc:          'ADHD-friendly visual task manager — handle your tasks with bubbles',

    bubbleCount:      'Bubbles',
    bubbleCountOf:    '/',
    hintEmpty:        'Tap + in the bottom right to add a task bubble',

    settings:         'Settings',
    soundEffect:      'Sound FX',

    modalTitle:       'New Bubble',
    inputPlaceholder: 'Task label (≤ 10 chars)',
    sizeSmall:        'S',
    sizeMedium:       'M',
    sizeLarge:        'L',
    cancel:           'Cancel',
    create:           'Create',

    complete:         'Done',
    delete:           'Delete',

    toastMaxBubbles:  'Maximum 5 bubbles reached',
    toastLabelTooLong:'Label too long (max 10 chars)',

    tutorialWelcomeTitle: 'Welcome to Task Bubble',
    tutorialWelcomeText:  'A fun and relaxed task manager. Tap the button below to create your first bubble!',
    tutorialWelcomeBtn:   'Create a Bubble',
    tutorialSkip:         'Skip',
    tutorialTestTask:     'Test Task',
    tutorialPopTip:       'Double-tap to pop!',
    tutorialPopToast:     'Double-tap a bubble to pop it~',
    tutorialDoneTitle:    'Awesome! 🎉',
    tutorialDoneText:     'You\'ve learned the basics. Start managing your tasks with bubbles now!',
    tutorialDoneBtn:      'Let\'s Go',

    langLabel:        'Language',
  },

  /* ─────────────── 日本語 ─────────────── */
  'ja': {
    appName:          'タスクバブル',
    appDesc:          'ADHDフレンドリーな視覚的タスク管理ツール。バブルでタスクを管理しよう',

    bubbleCount:      'バブル',
    bubbleCountOf:    '/',
    hintEmpty:        '右下の + をタップしてタスクバブルを追加',

    settings:         '設定',
    soundEffect:      '完了音',

    modalTitle:       '新しいバブル',
    inputPlaceholder: 'タスク名（10文字以内）',
    sizeSmall:        '小',
    sizeMedium:       '中',
    sizeLarge:        '大',
    cancel:           'キャンセル',
    create:           '作成',

    complete:         '完了',
    delete:           '削除',

    toastMaxBubbles:  '最大5個に達しました',
    toastLabelTooLong:'10文字以内で入力してください',

    tutorialWelcomeTitle: 'タスクバブルへようこそ',
    tutorialWelcomeText:  '楽しいタスク管理ツールです。下のボタンをタップして最初のバブルを作りましょう！',
    tutorialWelcomeBtn:   'バブルを作る',
    tutorialSkip:         'スキップ',
    tutorialTestTask:     'テストタスク',
    tutorialPopTip:       'ダブルタップで割る！',
    tutorialPopToast:     'バブルをダブルタップして割ってみよう~',
    tutorialDoneTitle:    'すばらしい！',
    tutorialDoneText:     '基本操作をマスターしました！タスクバブルを使ってタスクを管理しましょう~',
    tutorialDoneBtn:      '始める',

    langLabel:        '言語',
  },

  /* ─────────────── 한국어 ─────────────── */
  'ko': {
    appName:          '태스크 버블',
    appDesc:          'ADHD 친화적인 시각적 작업 관리 도구 — 버블로 할 일을 관리하세요',

    bubbleCount:      '버블',
    bubbleCountOf:    '/',
    hintEmpty:        '오른쪽 아래 + 를 눌러 버블 추가',

    settings:         '설정',
    soundEffect:      '완료 효과음',

    modalTitle:       '새 버블 만들기',
    inputPlaceholder: '작업 이름 입력 (10자 이내)',
    sizeSmall:        '소',
    sizeMedium:       '중',
    sizeLarge:        '대',
    cancel:           '취소',
    create:           '만들기',

    complete:         '완료',
    delete:           '삭제',

    toastMaxBubbles:  '최대 5개까지 가능합니다',
    toastLabelTooLong:'10자 이내로 입력해주세요',

    tutorialWelcomeTitle: '태스크 버블에 오신 것을 환영합니다',
    tutorialWelcomeText:  '즐겁고 가벼운 작업 관리 도구예요. 아래 버튼을 눌러 첫 버블을 만들어 보세요!',
    tutorialWelcomeBtn:   '버블 만들기',
    tutorialSkip:         '건너뛰기',
    tutorialTestTask:     '테스트 작업',
    tutorialPopTip:       '더블탭으로 터뜨리기!',
    tutorialPopToast:     '버블을 더블탭해서 터뜨려 보세요~',
    tutorialDoneTitle:    '잘 하셨어요! 🎉',
    tutorialDoneText:     '기본 사용법을 배웠어요! 이제 버블로 할 일을 관리해 보세요~',
    tutorialDoneBtn:      '시작하기',

    langLabel:        '언어',
  },

  /* ─────────────── Español ─────────────── */
  'es': {
    appName:          'Task Bubble',
    appDesc:          'Gestor visual de tareas amigable con TDAH — gestiona tus tareas con burbujas',

    bubbleCount:      'Burbujas',
    bubbleCountOf:    '/',
    hintEmpty:        'Toca + abajo a la derecha para agregar una burbuja',

    settings:         'Ajustes',
    soundEffect:      'Sonido',

    modalTitle:       'Nueva burbuja',
    inputPlaceholder: 'Nombre de tarea (máx. 15 car.)',
    sizeSmall:        'P',
    sizeMedium:       'M',
    sizeLarge:        'G',
    cancel:           'Cancelar',
    create:           'Crear',

    complete:         'Hecho',
    delete:           'Eliminar',

    toastMaxBubbles:  'Máximo 5 burbujas alcanzado',
    toastLabelTooLong:'El nombre es demasiado largo',

    tutorialWelcomeTitle: 'Bienvenido a Task Bubble',
    tutorialWelcomeText:  '¡Una herramienta de gestión de tareas divertida! Toca el botón para crear tu primera burbuja.',
    tutorialWelcomeBtn:   'Crear burbuja',
    tutorialSkip:         'Omitir',
    tutorialTestTask:     'Tarea de prueba',
    tutorialPopTip:       '¡Toca dos veces para reventar!',
    tutorialPopToast:     'Toca dos veces una burbuja para reventarla~',
    tutorialDoneTitle:    '¡Excelente! 🎉',
    tutorialDoneText:     '¡Has aprendido lo básico! Ahora gestiona tus tareas con burbujas~',
    tutorialDoneBtn:      'Empezar',

    langLabel:        'Idioma',
  },

  /* ─────────────── Français ─────────────── */
  'fr': {
    appName:          'Task Bubble',
    appDesc:          'Gestionnaire de tâches visuel adapté au TDAH — gérez vos tâches avec des bulles',

    bubbleCount:      'Bulles',
    bubbleCountOf:    '/',
    hintEmpty:        'Appuyez sur + en bas à droite pour ajouter une bulle',

    settings:         'Paramètres',
    soundEffect:      'Son',

    modalTitle:       'Nouvelle bulle',
    inputPlaceholder: 'Nom de la tâche (max. 15 car.)',
    sizeSmall:        'P',
    sizeMedium:       'M',
    sizeLarge:        'G',
    cancel:           'Annuler',
    create:           'Créer',

    complete:         'Terminé',
    delete:           'Supprimer',

    toastMaxBubbles:  '5 bulles maximum atteint',
    toastLabelTooLong:'Le nom est trop long',

    tutorialWelcomeTitle: 'Bienvenue dans Task Bubble',
    tutorialWelcomeText:  'Un outil de gestion de tâches fun et léger ! Appuyez sur le bouton pour créer votre première bulle.',
    tutorialWelcomeBtn:   'Créer une bulle',
    tutorialSkip:         'Passer',
    tutorialTestTask:     'Tâche test',
    tutorialPopTip:       'Double-clic pour éclater !',
    tutorialPopToast:     'Double-cliquez sur une bulle pour l\'éclater~',
    tutorialDoneTitle:    'Bravo ! 🎉',
    tutorialDoneText:     'Vous avez appris les bases ! Gérez maintenant vos tâches avec des bulles~',
    tutorialDoneBtn:      'Commencer',

    langLabel:        'Langue',
  },
};

/* ─────────────────────────────────────────
   语言检测与切换核心
───────────────────────────────────────── */

const SUPPORTED_LANGS = Object.keys(I18N);
const STORAGE_KEY = 'taskbubble_lang';

/**
 * 检测当前应使用的语言
 * 优先级：本地存储 > 浏览器语言 > 系统语言 > 默认(zh-CN)
 */
function detectLanguage() {
  // 1. 用户手动设置过
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && I18N[saved]) return saved;

  // 2. 浏览器/系统语言列表
  const candidates = navigator.languages
    ? [...navigator.languages]
    : [navigator.language || navigator.userLanguage || ''];

  for (const lang of candidates) {
    // 精确匹配，如 zh-CN
    if (I18N[lang]) return lang;
    // 语言前缀匹配，如 zh -> zh-CN, en-US -> en
    const prefix = lang.split('-')[0];
    const match = SUPPORTED_LANGS.find(l => l.startsWith(prefix) || l === prefix);
    if (match) return match;
  }

  return 'zh-CN';
}

/** 当前激活语言 */
let currentLang = detectLanguage();

/**
 * 获取当前语言的翻译字符串
 * @param {string} key
 * @returns {string}
 */
function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) ||
         (I18N['zh-CN'][key]) ||
         key;
}

/**
 * 将语言应用到所有带 data-i18n 属性的元素
 */
function applyI18n() {
  document.documentElement.lang = currentLang;

  // 文本内容
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // placeholder 属性
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  // title / aria-label
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  // <title> 标签
  document.title = t('appName') + ' – ADHD';
}

/**
 * 切换语言
 * @param {string} lang
 */
function switchLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  applyI18n();
  // 通知应用刷新动态文本
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

// 页面加载后立即应用
document.addEventListener('DOMContentLoaded', applyI18n);
