import { Target, TrendingUp, Focus, Bell, BarChart3, BookOpen, Palette, History, Download, Smartphone, Award, Upload } from "lucide-react";

const features = [
  {
    icon: Focus,
    title: "Single Habit Focus",
    description: "Build one meaningful habit at a time without distractions",
    isPremium: false
  },
  {
    icon: Target,
    title: "Simple Daily Check-In",
    description: "Mark your habit as done with a single tap. No complex interfaces, just you and your goal.",
    isPremium: false
  },
  {
    icon: TrendingUp,
    title: "Streak Tracking",
    description: "Visualize your progress and maintain your momentum with beautiful streak displays",
    isPremium: false
  },
  {
    icon: Award,
    title: "Milestone Trophies",
    description: "Earn achievement badges at 1, 7, 30, 66, and 100 day milestones",
    isPremium: false
  },
  {
    icon: BookOpen,
    title: "Micro-Journaling",
    description: "Optional one-sentence reflections after each check-in",
    isPremium: false
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Daily notifications to help you stay consistent",
    isPremium: false
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your completion rate and habit history",
    isPremium: false
  },
  {
    icon: Palette,
    title: "Premium Themes",
    description: "Pastel, AMOLED Black, Minimal, and more beautiful themes",
    isPremium: true
  },
  {
    icon: BarChart3,
    title: "Advanced Statistics",
    description: "Completion rate, consistency score, best streak, and detailed insights",
    isPremium: true
  },
  {
    icon: TrendingUp,
    title: "Habit Trends & Insights",
    description: "Discover patterns and optimize your routine with trend analysis",
    isPremium: true
  },
  {
    icon: Smartphone,
    title: "Home Screen Widgets",
    description: "Track your progress at a glance right from your home screen",
    isPremium: true
  },
  {
    icon: History,
    title: "Habit History",
    description: "View all your past habits and achievements",
    isPremium: true
  },
  {
    icon: Download,
    title: "Export Data",
    description: "Download your data in CSV or JSON format",
    isPremium: true
  },
  {
    icon: Upload,
    title: "Import Data",
    description: "Seamlessly transfer your data when switching devices",
    isPremium: true
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cal-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
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
              className="group bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.isPremium && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  Premium
                </div>
              )}
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
