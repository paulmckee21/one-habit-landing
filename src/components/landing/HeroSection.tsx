import AnimatedSlogan from "./AnimatedSlogan";
import StoreButtons from "./StoreButtons";
import PhoneMockup from "./PhoneMockup";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatedSlogan />
            
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-up" 
               style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              Focus on building one powerful habit that transforms your life. 
              Simple, effective, and beautifully designed.
            </p>
            
            <div className="mt-10 opacity-0 animate-fade-up" 
                 style={{ animationDelay: '2.3s', animationFillMode: 'forwards' }}>
              <StoreButtons />
            </div>
          </div>
          
          {/* Phone Mockups */}
          <div className="flex-1 flex justify-center items-center gap-4 md:gap-8 opacity-0 animate-fade-up"
               style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
            <PhoneMockup variant="main" />
            <PhoneMockup variant="secondary" className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
