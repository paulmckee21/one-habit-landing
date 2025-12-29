const ScreenshotsSection = () => {
  const screenshots = [
    "/screenshots/01.png",
    "/screenshots/02.png",
    "/screenshots/03.png",
    "/screenshots/04.png",
    "/screenshots/05.png",
    "/screenshots/06.png",
    "/screenshots/07.png",
  ];

  return (
    <section id="screenshots" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cal-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            See <span className="text-primary">One</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clean, focused design that helps you build habits without distractions.
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-300 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-border/50"
            >
              <img
                src={screenshot}
                alt={`One app screenshot ${index + 1}`}
                className="w-[200px] md:w-[260px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
