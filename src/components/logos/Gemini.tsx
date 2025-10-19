export function Gemini() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="25%" stopColor="#9B72CB" />
          <stop offset="50%" stopColor="#D96570" />
          <stop offset="75%" stopColor="#F2A65A" />
          <stop offset="100%" stopColor="#FBBC04" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="6" r="3" fill="url(#gemini-gradient)" />
      <circle cx="6" cy="18" r="3" fill="url(#gemini-gradient)" />
      <circle cx="18" cy="18" r="3" fill="url(#gemini-gradient)" />
      <path 
        d="M12 9L6 15M12 9L18 15" 
        stroke="url(#gemini-gradient)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
}
