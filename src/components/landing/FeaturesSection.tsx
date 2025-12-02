import { Target, TrendingUp, Focus, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Simple Daily Tracking",
    description: "Mark your habit as done with a single tap. No complex interfaces, just you and your goal."
  },
  {
    icon: TrendingUp,
    title: "Progress History & Streaks",
    description: "Watch your consistency grow with beautiful visualizations of your daily streaks."
  },
  {
    icon: Focus,
    title: "Focus on One Habit",
    description: "The science is clear: one habit at a time leads to lasting change. We help you stay focused."
  },
  {
    icon: Bell,
    title: "Gentle Reminders",
    description: "Non-intrusive notifications that nudge you at the right time, not annoy you."
  },
  {
    icon: BarChart3,
    title: "Visual Progress Charts",
    description: "See your journey unfold with elegant charts that motivate you to keep going."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need, <span className="text-primary">Nothing You Don't</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with intention. Every feature serves your goal of building lasting habits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
