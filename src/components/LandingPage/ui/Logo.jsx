import Image from "next/image";

export default function Logo({ size = "h-12 w-12", textSize = "text-headline-sm" }) {
  return (
    <a href="#" className="flex items-center gap-space-sm group">
      <Image
        src="/logo.jpg"
        alt="MenuFQ Logo"
        width={48}
        height={48}
        className={`${size} rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300`}
      />
      <span className={`font-headline-sm ${textSize} font-extrabold text-on-surface tracking-tight flex items-center`}>
        Menu
        <span className="bg-gradient-to-r from-primary-container to-secondary-container bg-clip-text text-transparent">
          FQ
        </span>
      </span>
    </a>
  );
}