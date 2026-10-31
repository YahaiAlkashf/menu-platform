import {
  Header,
  Footer,
  WhatsAppFloatButton,
  HeroSection,
  FeaturesSection,
  LiveDemoSection,
  PricingSection,
  FaqSection,
  CtaBanner,
} from "@/components/LandingPage";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <HeroSection />
          <FeaturesSection />
          <LiveDemoSection />
          <PricingSection />
          <FaqSection />
          <CtaBanner />
        </div>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}