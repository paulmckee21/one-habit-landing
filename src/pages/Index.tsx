import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ScreenshotsSection from "@/components/landing/ScreenshotsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="dark min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
