import Image from "next/image";
import QrCode from "../ui/QrCode";
import { HiRocketLaunch, HiArrowLeft, HiCheckCircle } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiFire } from "react-icons/hi2";

const WA_HERO_LINK =
  "https://wa.me/201112678648?text=" +
  encodeURIComponent("مرحباً MenuFQ، أريد امتلاك منيو الآن مجاناً");

const trustItems = [
  { label: "تجربة مجانية 7 أيام" },
  { label: "تفعيل فوري خلال ساعات" },
  { label: "0% عمولة على المبيعات" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#00687a] py-14 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Text Column - Logo Teal Background with Crisp White Typography */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-right">
            {/* Title in Pure White with Logo Amber Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.25] tracking-tight">
              منصتك الذكية لقوائم الطعام الرقمية
              <span className="block text-amber-300 mt-2 font-extrabold">
                والطلب المباشر عبر واتساب
              </span>
            </h1>

            {/* Clear, soft white copy */}
            <p className="text-base sm:text-lg text-cyan-50/90 leading-relaxed max-w-xl font-normal">
              حوّل قائمة طعام مطعمك إلى منيو إلكتروني تفاعلي فائق السرعة عبر مسح رمز QR، واستقبل طلبات زبائنك مباشرة على الواتساب مفصلة بالكامل بدون أي عمولات خفية.
            </p>

            {/* Action Buttons with Reduced Radius & Button Shimmer */}
            <div className="flex flex-wrap items-center gap-3.5 w-full pt-2">
              <a
                href={WA_HERO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-900 text-base font-bold shadow-lg shadow-black/15 transition-all group cursor-pointer"
              >
                {/* Continuous Shimmer Light Animation */}
                <span className="button-shimmer-effect" />
                <HiRocketLaunch className="w-5 h-5 shrink-0 text-slate-900" />
                <span>امتلك منيو الآن مجاناً</span>
              </a>

              <a
                href="https://menufq.vercel.app/menu/burger-station"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white text-base font-bold backdrop-blur-xs transition-all cursor-pointer"
              >
                <span>معاينة المنيو التجريبي</span>
                <HiArrowLeft className="w-4 h-4 text-white/80" />
              </a>
            </div>

            {/* Clean Trust Checklist */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-cyan-50 text-xs sm:text-sm">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2 font-medium">
                  <HiCheckCircle className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* QR Visual Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center text-center relative z-20">
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 text-xs font-bold">
                    طاولة رقم 08
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    متاح للطلب الآن
                  </span>
                </div>

                <div className="w-20 h-20 rounded-full p-0.5 border-2 border-slate-100 shadow-sm mb-3 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.jpg"
                    alt="MenuFQ Logo"
                    width={80}
                    height={80}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <h2 className="text-lg font-bold text-slate-800">امسح الرمز لتصفح المنيو</h2>
                <p className="text-xs text-slate-500 mt-1">
                  واطلب وجبتك المفضلة فوراً عبر الواتساب
                </p>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100 relative group cursor-pointer">
                  <QrCode className="w-44 h-44" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-xl backdrop-blur-xs">
                    <span className="text-xs font-bold text-[#00687a]">جرّب المسح الآن</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Image src="/logo.jpg" alt="MenuFQ" width={20} height={20} className="w-5 h-5 rounded-full object-cover" />
                  <span>مدعوم بالكامل بواسطة</span>
                  <span className="font-bold text-slate-800">MenuFQ</span>
                </div>
              </div>

              {/* Floating badge WhatsApp */}
              <div className="absolute -top-3 -left-3 z-30 bg-white py-2 px-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-xs">
                  <IoLogoWhatsapp className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-slate-800">طلب مباشر للواتساب</span>
                  <span className="block text-[11px] text-emerald-600 font-semibold">بضغطة واحدة من الزبون</span>
                </div>
              </div>

              {/* Floating badge Best Seller */}
              <div className="absolute -bottom-4 -right-3 z-30 bg-white py-2 px-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white shadow-xs">
                  <HiFire className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-slate-800">زيادة المبيعات</span>
                  <span className="block text-[11px] text-amber-600 font-semibold">+35% في متوسط الطلب</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}