import { IoLogoWhatsapp } from "react-icons/io5";

export default function WhatsAppFloatButton() {
  return (
    <a
      aria-label="تواصل عبر الواتساب"
      href="https://wa.me/201112678648"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-space-lg left-space-lg z-50 flex items-center gap-2.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary px-5 py-3 rounded-full shadow-[0_4px_20px_0_rgba(27,189,133,0.4)] hover:shadow-[0_6px_25px_0_rgba(27,189,133,0.6)] transition-all font-bold hover:scale-105"
    >
      <IoLogoWhatsapp className="w-6 h-6 text-white shrink-0" />
      <span className="font-label-md text-label-md font-bold hidden sm:inline" dir="ltr">
        +20 111 267 8648
      </span>
    </a>
  );
}