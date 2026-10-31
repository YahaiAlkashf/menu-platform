import { IoLogoWhatsapp } from "react-icons/io5";

const WA_CTA =
  "https://wa.me/201112678648?text=" +
  encodeURIComponent("مرحباً MenuFQ، أريد الاستفسار عن اشتراك المنيو الإلكتروني لمطعمي");

export default function CtaBanner() {
  return (
    <section className="w-full py-16 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-on-primary-container p-10 lg:p-16 text-on-primary shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-right">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/20 blur-2xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg font-extrabold tracking-tight">
              هل أنت جاهز لنقل مطعمك إلى العصر الرقمي وزيادة مبيعاتك؟
            </h2>
            <p className="font-body-lg text-body-lg text-surface-variant mt-3 leading-relaxed">
              انضم إلى مئات المطاعم والكافيهات التي وفرت تكاليف الطباعة وسرّعت تجربة زبائنها مع MenuFQ. ابدأ أسبوعك
              المجاني الآن.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-tertiary-container hover:bg-tertiary text-on-tertiary font-headline-sm text-title font-bold shadow-lg shadow-tertiary-container/30 hover:scale-[1.02] transition-all duration-300"
            >
              <IoLogoWhatsapp className="w-6 h-6 text-white shrink-0" />
              <span>تواصل معنا فوراً عبر واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}