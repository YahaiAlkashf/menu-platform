import SectionBadge from "../ui/SectionBadge";
import {
  HiSparkles,
  HiCheckCircle,
  HiStar,
  HiTrophy,
  HiCheckBadge,
  HiBanknotes,
  HiBolt,
  HiCalendarDays,
} from "react-icons/hi2";

const WA_TRIAL =
  "https://wa.me/201112678648?text=" +
  encodeURIComponent("مرحباً MenuFQ، أريد بدء التجربة المجانية لمدة أسبوع");

const WA_ANNUAL =
  "https://wa.me/201112678648?text=" +
  encodeURIComponent("مرحباً MenuFQ، أريد الاشتراك في الباقة السنوية 999 ج.م");

const WA_MONTHLY =
  "https://wa.me/201112678648?text=" +
  encodeURIComponent("مرحباً MenuFQ، أريد الاشتراك في الباقة الشهرية 99 ج.م");

export default function PricingSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface" id="pricing-section">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <SectionBadge>أسعار واضحة وشفافة بدون مفاجآت</SectionBadge>
          <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-on-surface">
            خطط تناسب جميع أحجام المطاعم والكافيهات
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            اختر الباقة المناسبة لاحتياجك وابدأ باستقبال طلبات زبائنك الرقمية اليوم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Free Trial */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-surface-container shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                  باقة التجربة المجانية
                </span>
                <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                  <HiSparkles className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">تجربة كاملة</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">
                لاكتشاف سهولة وسرعة النظام بدون أي التزام مالي.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-display font-extrabold text-on-surface">مجاناً</span>
                <span className="font-body-md text-body-md text-on-surface-variant">/ لمدة أسبوع</span>
              </div>
              <ul className="space-y-4 font-body-sm text-body-sm text-on-surface">
                {[
                  "تفعيل فوري لكامل مميزات المنيو",
                  "إضافة حتى 20 صنف رئيسي",
                  "تكامل الطلب المباشر عبر الواتساب",
                  "رابط QR ذكي جاهز للاستخدام",
                ].map((li) => (
                  <li key={li} className="flex items-center gap-3">
                    <HiCheckCircle className="w-5 h-5 text-tertiary-container shrink-0" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8">
              <a
                href={WA_TRIAL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-bold transition-all shadow-sm"
              >
                ابدأ أسبوعك المجاني
              </a>
            </div>
          </div>

          {/* Annual VIP */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 border-2 border-secondary-container shadow-2xl flex flex-col justify-between relative transform lg:-translate-y-4">
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-secondary-container to-secondary text-on-primary px-4 py-1.5 rounded-full font-label-sm text-label-sm font-bold shadow-md flex items-center gap-1.5">
              <HiStar className="w-4 h-4 text-white" />
              <span>الأكثر طلباً وتوفيراً (وفر شهرين مجاناً)</span>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                  الباقة السنوية VIP
                </span>
                <div className="w-9 h-9 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
                  <HiTrophy className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">الشاملة المتكاملة</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">
                الحل الذهبي لإدارة وتطوير منيو مطعمك باحترافية طوال العام.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-display font-extrabold text-on-surface">999</span>
                <span className="font-title text-title font-bold text-on-surface">ج.م</span>
                <span className="font-body-md text-body-md text-on-surface-variant">/ سنوياً فقط</span>
              </div>
              <ul className="space-y-4 font-body-sm text-body-sm text-on-surface">
                {[
                  "منيو متكامل مفتوح الأصناف بلا حدود",
                  "تصميم هيدر مخصص وشعار مجاني لمطعمك",
                  "تحديثات وتعديلات مفتوحة للأسعار على مدار العام",
                  "تصميم ستاندات وكروت QR عالية الدقة للطباعة",
                  "أولوية دعم فني مخصص 24/7 عبر الواتساب",
                ].map((li, i) => (
                  <li key={li} className="flex items-center gap-3">
                    <HiCheckBadge className="w-5 h-5 text-tertiary-container shrink-0" />
                    <span className={i === 0 ? "font-bold text-on-surface" : ""}>{li}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3 bg-secondary-fixed/40 p-2.5 rounded-xl">
                  <HiBanknotes className="w-5 h-5 text-secondary shrink-0" />
                  <span className="font-bold text-secondary text-sm">0% عمولة على المبيعات دائماً</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a
                href={WA_ANNUAL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-secondary-container to-secondary hover:brightness-105 text-on-primary font-headline-sm text-title font-bold shadow-lg shadow-secondary/25 transition-all"
              >
                <HiBolt className="w-5 h-5" />
                <span>اشترك سنوياً ووفر الآن</span>
              </a>
            </div>
          </div>

          {/* Monthly */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 border border-surface-container shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                  الباقة الشهرية
                </span>
                <div className="w-9 h-9 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                  <HiCalendarDays className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">المرونة الشهرية</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">
                مناسبة للمطاعم الجديدة الراغبة في الدفع شهراً بشهر.
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-display text-display font-extrabold text-on-surface">99</span>
                <span className="font-title text-title font-bold text-on-surface">ج.م</span>
                <span className="font-body-md text-body-md text-on-surface-variant">/ شهرياً</span>
              </div>
              <ul className="space-y-4 font-body-sm text-body-sm text-on-surface">
                {[
                  "منيو إلكتروني متكامل لجميع الأصناف",
                  "تكامل الطلب المباشر عبر الواتساب",
                  "تحديثات قائمة الطعام والأسعار",
                  "دعم فني مستمر عبر الواتساب",
                ].map((li) => (
                  <li key={li} className="flex items-center gap-3">
                    <HiCheckCircle className="w-5 h-5 text-tertiary-container shrink-0" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8">
              <a
                href={WA_MONTHLY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md font-bold transition-all shadow-sm"
              >
                اختر الباقة الشهرية
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}