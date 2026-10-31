"use client";

import { useState } from "react";
import Logo from "../ui/Logo";
import { HiSparkles, HiBars3, HiXMark } from "react-icons/hi2";

const navLinks = [
  { href: "#features", label: "المميزات" },
  { href: "#live-demo-section", label: "المعرض التجريبي" },
  { href: "#pricing-section", label: "الأسعار" },
  { href: "#faq-section", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "اتصل بنا" },
];

const WA_HEADER_LINK =
  "https://wa.me/201112678648?text=" +
  encodeURIComponent("مرحباً MenuFQ، أريد إنشاء منيو إلكتروني لمطعمي");

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-container/60 shadow-[0_2px_12px_rgba(30,41,59,0.03)]">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1 px-space-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-container/80 transition-all font-semibold text-body-sm rounded-xl"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WA_HEADER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-primary-container to-primary hover:brightness-105 text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-xl shadow-md shadow-primary/20 transition-all duration-300 font-bold hover:scale-[1.02]"
          >
            <HiSparkles className="w-4 h-4" />
            <span>أنشئ منيو مطعمك</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-on-surface font-semibold hover:bg-surface-container-low transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-surface-container mt-2">
              <a
                href={WA_HEADER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-bold py-3 px-4 rounded-xl shadow-md"
              >
                <HiSparkles className="w-5 h-5" />
                <span>أنشئ منيو مطعمك الآن</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}