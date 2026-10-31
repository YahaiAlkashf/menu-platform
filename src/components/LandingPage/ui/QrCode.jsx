export default function QrCode({ className = "w-44 h-44" }) {
  return (
    <svg className={`${className} text-on-surface`} fill="currentColor" viewBox="0 0 100 100">
      <rect fill="currentColor" height="28" rx="4" width="28" x="10" y="10" />
      <rect fill="#ffffff" height="16" rx="2" width="16" x="16" y="16" />
      <rect fill="currentColor" height="8" rx="1" width="8" x="20" y="20" />

      <rect fill="currentColor" height="28" rx="4" width="28" x="62" y="10" />
      <rect fill="#ffffff" height="16" rx="2" width="16" x="68" y="16" />
      <rect fill="currentColor" height="8" rx="1" width="8" x="72" y="20" />

      <rect fill="currentColor" height="28" rx="4" width="28" x="10" y="62" />
      <rect fill="#ffffff" height="16" rx="2" width="16" x="16" y="68" />
      <rect fill="currentColor" height="8" rx="1" width="8" x="20" y="72" />

      <rect fill="#00687a" height="6" rx="1" width="6" x="44" y="14" />
      <rect fill="#fea619" height="6" rx="1" width="6" x="52" y="22" />
      <rect fill="#1bbd85" height="6" rx="1" width="6" x="44" y="30" />
      <rect fill="currentColor" height="12" rx="2" width="12" x="44" y="44" />
      <rect fill="#00687a" height="6" rx="1" width="6" x="62" y="44" />
      <rect fill="currentColor" height="8" rx="1" width="8" x="74" y="52" />
      <rect fill="#fea619" height="6" rx="1" width="6" x="84" y="64" />
      <rect fill="currentColor" height="8" rx="1" width="8" x="44" y="64" />
      <rect fill="#1bbd85" height="6" rx="1" width="6" x="56" y="74" />
      <rect fill="currentColor" height="6" rx="1" width="14" x="70" y="76" />
      <rect fill="#00687a" height="6" rx="1" width="6" x="44" y="84" />
    </svg>
  );
}