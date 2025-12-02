import StoreButtons from "./StoreButtons";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-cal-sans text-3xl md:text-5xl font-bold text-foreground mb-6">
          Start Your <span className="text-primary text-glow">Journey</span> Today
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          It all begins with one habit. Download One and take the first step towards lasting change.
        </p>
        <StoreButtons />
      </div>
    </section>
  );
};

export default CTASection;
