import AnimatedSlogan from "./AnimatedSlogan";
import StoreButtons from "./StoreButtons";
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
        <div className="flex flex-col items-center justify-center">
          {/* Content */}
          <div className="text-center max-w-3xl">
            <AnimatedSlogan />
            
            <p className="mt-8 text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up" 
               style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              Focus on building one powerful habit that transforms your life. 
              Simple, effective, and beautifully designed.
            </p>
            
            <div className="mt-10 opacity-0 animate-fade-up" 
                 style={{ animationDelay: '2.3s', animationFillMode: 'forwards' }}>
              <StoreButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
