export function MagicUI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="magic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
        fill="url(#magic-gradient)"
      />
      <path
        d="M19 15L19.5 17.5L22 18L19.5 18.5L19 21L18.5 18.5L16 18L18.5 17.5L19 15Z"
        fill="url(#magic-gradient)"
      />
      <path
        d="M5 4L5.5 6L7 6.5L5.5 7L5 9L4.5 7L3 6.5L4.5 6L5 4Z"
        fill="url(#magic-gradient)"
      />
    </svg>
  );
}
