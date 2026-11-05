// Простые SVG-иконки на currentColor. Замените на экспорт из Figma (UI Kit → Icons), если нужна точность до пикселя.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export const ArrowRightIcon = () => (
  <svg {...base} strokeWidth="3">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const ShareIcon = () => (
  <svg {...base}>
    <path d="M14 5l7 6-7 6v-3.5c-5 0-8 1.5-10 5 .8-6 4-9.5 10-10.5V5z" />
  </svg>
);

export const MenuIcon = () => (
  <svg {...base}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon = () => (
  <svg {...base}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const VkIcon = () => (
  <svg {...base}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <path d="M7 9c.5 4 2.5 6 5 6M17 9c-.3 2-1.5 3.5-3 4M12 9v6" />
  </svg>
);

export const ZenIcon = () => (
  <svg {...base} fill="currentColor" stroke="none">
    <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z" />
  </svg>
);

export const TelegramIcon = () => (
  <svg {...base}>
    <path d="M21.5 3.5L2.8 10.8l5.4 2 2 6.3 3-3.8 4.6 3.4 3.7-15.2zM8.2 12.8l9.6-6" />
  </svg>
);

export const LogoMark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path d="M9.5 7l5 5-5 5" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
