import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ScreenshotsSection from "@/components/landing/ScreenshotsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure page has rendered
        setTimeout(() => {
          const headerOffset = 80; // Approximate height of fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location.hash]);

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
