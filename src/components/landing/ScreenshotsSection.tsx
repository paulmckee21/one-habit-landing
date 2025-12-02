import PhoneMockup from "./PhoneMockup";

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See <span className="text-primary">One</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clean, focused design that helps you build habits without distractions.
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <PhoneMockup variant="main" />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <PhoneMockup variant="secondary" className="opacity-100" />
          </div>
          <div className="hidden lg:block transform hover:scale-105 transition-transform duration-300">
            <PhoneMockup variant="main" />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-primary">50K+</div>
            <div className="text-muted-foreground mt-1">Downloads</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">4.9</div>
            <div className="text-muted-foreground mt-1">App Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">1M+</div>
            <div className="text-muted-foreground mt-1">Habits Tracked</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">89%</div>
            <div className="text-muted-foreground mt-1">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
