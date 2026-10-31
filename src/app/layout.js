import { Cairo } from 'next/font/google';
import "./globals.css";

export const metadata = {
  title: "MenuFQ | منصة المنيو الإلكتروني الذكي للمطاعم والكافيهات",
  description: "حوّل قائمة طعام مطعمك إلى منيو إلكتروني تفاعلي فائق السرعة عبر كود QR واستقبل الطلبات مباشرة على الواتساب بدون عمولات.",
};

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${cairo.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-surface text-on-surface">{children}</body>
    </html>
  );
}