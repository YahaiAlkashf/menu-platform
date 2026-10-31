"use client";

import { useState } from "react";
import SectionBadge from "../ui/SectionBadge";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
  {
    q: "هل يحتاج الزبون لتحميل أي تطبيق لتصفح المنيو؟",
    a: "لا على الإطلاق! يعمل المنيو مباشرة وبسرعة فائقة عبر أي متصفح هاتف (سواء آيفون أو أندرويد) بمجرد مسح كود QR بكاميرا الجوال بدون أي خطوات إضافية معقدة.",
  },
  {
    q: "كيف يتم استلام طلبات الزبائن؟",
    a: "تذهب الطلبات مباشرة وبشكل فوري كرسالة واتساب مرتبة ومفصلة ومنظمة بالأسعار والإجمالي، متضمنة اختيارات الزبون ورقم الطاولة أو عنوان التوصيل مباشرة إلى رقم واتساب مطعمك المخصص.",
  },
  {
    q: "هل توجد أي عمولات أو رسوم خفية على مبيعاتي؟",
    a: "لا نهائياً، 0% عمولة! جميع أرباح المبيعات تخص مطعمك بالكامل بنسبة 100% مهما زاد عدد طلباتك اليومية أو حجم مبيعاتك الشهرية.",
  },
  {
    q: "كيف أبدأ في تصميم وتفعيل منيو مطعمي؟",
    a: 'تواصل معنا مباشرة عبر زر الواتساب أو اضغط على "امتلك منيو الآن"، وسيقوم فريقنا بإعداد وتنسيق منيو مطعمك وتفعيله بالكامل ويكون جاهزاً للعمل واستقبال الزبائن خلال ساعات معدودة.',
  },
  {
    q: "هل يمكنني تعديل الأصناف والأسعار بسهولة لاحقاً؟",
    a: "نعم وبكل سهولة! يمكنك تحديث الأسعار، إضافة أصناف جديدة، أو إخفاء الأصناف غير المتوفرة فوراً وبدون الحاجة لإعادة طباعة أي باركود أو تغيير الأكواد في المطعم.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low" id="faq-section">
      <div className="max-w-4xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center mb-12">
          <SectionBadge>إجابات واضحة لأسئلتك</SectionBadge>
          <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-bold text-on-surface">
            الأسئلة الشائعة
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            كل ما تحتاج معرفته عن كيفية عمل نظام MenuFQ الذكي لمطعمك
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-surface-container-lowest rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary/30 shadow-md ring-1 ring-primary/20"
                    : "border-surface-container hover:border-outline-variant shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 font-title text-title font-bold text-on-surface focus:outline-none cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold shrink-0 transition-colors ${
                        isOpen
                          ? "bg-primary text-on-primary"
                          : "bg-primary-fixed text-primary"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-on-surface leading-snug">{item.q}</span>
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary/10 text-primary rotate-180"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    <HiChevronDown className="w-5 h-5" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-on-surface-variant font-body-md text-body-md leading-relaxed border-t border-surface-container-low/60">
                    <p className="pr-11">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}