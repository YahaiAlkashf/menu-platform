import Image from "next/image";
import SectionBadge from "../ui/SectionBadge";
import QrCode from "../ui/QrCode";
import { HiPlus, HiShoppingBag, HiQrCode, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaBurger } from "react-icons/fa6";

const categories = ["🔥 الأكثر مبيعاً", "🍔 سندوتشات البرجر", "🍟 الأطباق الجانبية", "🥤 المشروبات والعصائر"];

const products = [
  {
    name: "دبل سموك بيكون برجر",
    desc: "قطعتان من اللحم البقري المشوي مع صوص الشواء والجبن الشيدر المدخن.",
    price: "185 ج.م",
    img: "/images/burger.jpg",
  },
  {
    name: "لودد تكساس فرايز",
    desc: "بطاطس مقرمشة ذهبية مغطاة بجبنة الشيدر الساخنة وقطع الهالبينو اللذيذة.",
    price: "85 ج.م",
    img: "/images/fries.jpg",
  },
];

const WA_DEMO_LINK =
  "https://wa.me/201112678648?text=" +
  encodeURIComponent("مرحباً، أريد معاينة المنيو التجريبي Burger Station");

export default function LiveDemoSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="live-demo-section">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <SectionBadge variant="secondary">شاهد بنفسك كيف سيبدو مطعمك</SectionBadge>
          <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-on-surface">
            المعرض التجريبي الحي: تجربة تفاعلية حقيقية
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            استكشف نموذجاً حياً لمطعم تجريبي واختبر سرعة تصفح الأصناف وإرسال الطلب إلى الواتساب
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mockup Card */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-3xl border border-surface-container shadow-xl overflow-hidden">
            <div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
              <Image src="/images/banner.jpg" alt="Burger & Grill Station" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent" />
              <div className="absolute bottom-4 right-6 left-6 flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-lowest p-1 shadow-lg flex items-center justify-center">
                    <img src="/images/logo.jpg" alt="Burger Station Logo" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-primary">برجر أند جريل ستيشن</h3>
                    <p className="font-body-sm text-body-sm text-surface-variant">برجر فاخر ومشاوي طازجة على الفحم</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary text-xs font-bold shadow-sm">
                  مفتوح للطلبات
                </span>
              </div>
            </div>

            <div className="px-6 py-4 flex items-center gap-2 overflow-x-auto bg-surface-container-lowest border-b border-surface-container">
              {categories.map((c, i) => (
                <button
                  key={c}
                  className={
                    i === 0
                      ? "px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold whitespace-nowrap shadow-sm"
                      : "px-4 py-2 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high transition-colors"
                  }
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="flex gap-4 p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-surface-container/60 transition-colors"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-surface-container-high relative">
                    <Image src={p.img} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-title text-title font-bold text-on-surface">{p.name}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">{p.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-title text-title font-bold text-primary">{p.price}</span>
                      <button 
                        type="button"
                        aria-label="إضافة الصنف"
                        className="p-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center cursor-pointer shadow-sm"
                      >
                        <HiPlus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary-container">
                  <HiShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-label-md text-label-md font-bold text-on-surface block">سلة الطلب الفورية متصلة بالواتساب</span>
                  <span className="block font-body-sm text-body-sm text-on-surface-variant">الزبون يحدد اختياراته وتصلك جاهزة ومحسوبة بالكامل</span>
                </div>
              </div>
              <a
                href={WA_DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary hover:bg-primary/90 font-label-md text-label-md font-bold transition-all shadow-md"
              >
                <span>معاينة المنيو الحقيقي</span>
                <HiArrowTopRightOnSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QR Card */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-3xl border border-surface-container shadow-xl flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary mb-4 shadow-sm">
              <HiQrCode className="w-8 h-8" />
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">جرّب التجربة على جوالك الآن</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-6">
              وجّه كاميرا هاتفك لتجربة المنيو الحي ومحاكاة إرسال طلب حقيقي إلى الواتساب في ثوانٍ.
            </p>

            <div className="p-4 rounded-2xl bg-surface-container-high border border-surface-container shadow-inner">
              <QrCode className="w-48 h-48" />
            </div>

            <div className="mt-6 flex flex-col gap-2 w-full">
              <span className="text-xs font-bold text-primary bg-primary-fixed/50 py-2 px-3 rounded-xl">
                ✨ لا يتطلب تنزيل أي تطبيق إطلاقاً
              </span>
              <span className="text-xs text-on-surface-variant">يعمل بسلاسة على جميع الهواتف الذكية (آيفون وأندرويد)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}