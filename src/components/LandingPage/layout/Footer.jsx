import Logo from "../ui/Logo";
import { HiPhone, HiEnvelope, HiMapPin, HiGlobeAlt, HiShare } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";

const quickLinks = [
  { href: "#features", label: "المميزات والخصائص" },
  { href: "#live-demo-section", label: "المعرض التجريبي الحي" },
  { href: "#pricing-section", label: "خطط الأسعار والاشتراكات" },
  { href: "#faq-section", label: "مركز المساعدة والأسئلة الشائعة" },
];

const socialLinks = [
  { icon: HiGlobeAlt, label: "الموقع الإلكتروني", href: "#" },
  { icon: IoLogoWhatsapp, label: "واتساب", href: "https://wa.me/201112678648" },
  { icon: HiShare, label: "مشاركة", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface mt-space-xl border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl pb-space-lg">
          <div className="md:col-span-1 flex flex-col gap-space-sm">
            <Logo size="h-12 w-12" />
            <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed mt-space-xs">
              المنصة السحابية الرائدة لتحويل قوائم الطعام إلى تجربة رقمية تفاعلية بتقنية رمز QR والطلب المباشر عبر
              واتساب.
            </p>
            <div className="flex items-center gap-space-xs mt-space-sm text-on-surface-variant">
              {socialLinks.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    aria-label={s.label}
                    className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high hover:text-primary transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-space-xs">
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-space-xs">روابط سريعة</h4>
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-on-surface-variant hover:text-primary font-body-sm text-body-sm py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-space-xs">
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-space-xs">تواصل معنا</h4>
            <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm py-1">
              <HiPhone className="w-4 h-4 text-primary shrink-0" />
              <span dir="ltr" className="font-medium">+20 111 267 8648</span>
            </div>
            <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm py-1">
              <HiEnvelope className="w-4 h-4 text-primary shrink-0" />
              <span className="font-medium">support@menufq.com</span>
            </div>
            <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm py-1">
              <HiMapPin className="w-4 h-4 text-primary shrink-0" />
              <span>القاهرة، جمهورية مصر العربية</span>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm bg-surface-container rounded-2xl p-space-md border border-surface-container-high">
            <span className="font-label-md text-label-md font-bold text-on-surface">جاهز لرقمنة منيو مطعمك؟</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              ابدأ تجربتك المجانية اليوم واجعل زبائنك يطلبون بنقرة واحدة.
            </p>
            <a
              href="https://wa.me/201112678648?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20MenuFQ%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D8%AF%D8%A1%20%D9%85%D8%AC%D8%A7%D9%86%D8%A7%D9%8B"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-primary text-on-primary hover:bg-primary/90 font-label-md text-label-md py-space-sm px-space-md rounded-xl transition-all font-bold shadow-sm"
            >
              ابدأ الآن مجاناً
            </a>
          </div>
        </div>

        <div className="pt-space-md border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
          <p>© 2025 MenuFQ (menufq.com). جميع الحقوق محفوظة لرواد الضيافة الرقمية.</p>
          <div className="flex items-center gap-space-md">
            <a href="#" className="hover:text-on-surface transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-on-surface transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}