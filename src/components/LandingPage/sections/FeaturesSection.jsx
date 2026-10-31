import SectionBadge from "../ui/SectionBadge";
import { HiBolt, HiPaintBrush, HiBanknotes } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";

const features = [
  {
    icon: HiBolt,
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "سرعة فائقة",
    desc: "تصفح فوري وسلس للغاية بدون أي انتظار للزبائن، يفتح في أقل من ثانية وبدون الحاجة لتحميل أي تطبيقات ثقيلة على الهاتف.",
    foot: "تصفح فوري 100%",
    footColor: "text-primary",
  },
  {
    icon: HiPaintBrush,
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    title: "تصميم مخصص",
    desc: "تصميمات فريدة وعصرية تعكس هوية وألوان كل مطعم، مع صور احترافية للأطباق وأقسام واضحة وليست قوالب تكرارية جامدة.",
    foot: "هوية بصرية خاصة بمطعمك",
    footColor: "text-secondary",
  },
  {
    icon: IoLogoWhatsapp,
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    title: "طلب مباشر للواتساب",
    desc: "تصلك الطلبات كرسائل واتساب منظمة ومفصلة تشمل تفاصيل الأصناف، الإضافات المختارة، العنوان، ورقم الطاولة مع السعر الإجمالي فوراً.",
    foot: "دقة وسهولة في التحضير",
    footColor: "text-tertiary",
  },
  {
    icon: HiBanknotes,
    iconBg: "bg-surface-variant",
    iconColor: "text-on-surface",
    title: "بدون أي عمولات",
    desc: "احتفظ بـ 100% من أرباحك ومبيعاتك. لا نأخذ أي نسب مئوية من طلبات زبائنك مهما كبر حجم مبيعاتك اليومية والشهرية.",
    foot: "أرباحك كاملة لك دائماً",
    footColor: "text-primary",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface" id="features">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <SectionBadge>مميزات لا غنى عنها</SectionBadge>
          <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-on-surface tracking-tight">
            كل ما تحتاجه لإدارة وتطوير مبيعات مطعمك بذكاء
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3">
            صممنا منصة MenuFQ بأحدث المعايير التقنية ليحصل زبائنك على أسرع تجربة تصفح وطلب، دون أي تعقيد تقني أو
            استقطاعات مالية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const IconComponent = f.icon;
            return (
              <div
                key={f.title}
                className="group bg-surface-container-lowest p-8 rounded-2xl border border-surface-container shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${f.iconBg} flex items-center justify-center ${f.iconColor} mb-6 group-hover:scale-110 transition-transform shadow-sm`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">{f.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
                </div>
                <div className={`mt-6 pt-4 border-t border-surface-container flex items-center text-xs font-bold ${f.footColor}`}>
                  {f.foot}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}