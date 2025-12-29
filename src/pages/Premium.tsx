import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import StoreButtons from "@/components/landing/StoreButtons";
import { Palette, BarChart3, TrendingUp, History, Download, Upload, Sparkles } from "lucide-react";

const premiumFeatures = [
  {
    icon: Palette,
    title: "Premium Themes",
    description: "Pastel, AMOLED Black, Minimal, and more beautiful themes to personalize your experience",
  },
  {
    icon: BarChart3,
    title: "Advanced Statistics",
    description: "Completion rate, consistency score, best streak, and detailed insights to understand your progress",
  },
  {
    icon: TrendingUp,
    title: "Habit Trends & Insights",
    description: "Discover patterns and optimize your routine with trend analysis and actionable insights",
  },
  {
    icon: History,
    title: "Habit History",
    description: "View all your past habits and achievements in one comprehensive history",
  },
  {
    icon: Download,
    title: "Export Data",
    description: "Download your data in CSV or JSON format for backup or analysis",
  },
  {
    icon: Upload,
    title: "Import Data",
    description: "Seamlessly transfer your data when switching devices or restoring backups",
  },
];

const Premium = () => {
  return (
    <main className="dark min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium</span>
          </div>
          <h1 className="font-cal-sans text-4xl md:text-6xl font-bold text-foreground mb-6">
            Unlock Your <span className="text-primary">Full Potential</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take your habit tracking to the next level with powerful premium features designed to help you build lasting habits and gain deeper insights into your journey.
          </p>
          <StoreButtons />
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cal-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium <span className="text-primary">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to track, analyze, and optimize your habit-building journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  Premium
                </div>
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

      {/* Screenshots Section - Placeholder for future screenshots */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cal-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Premium <span className="text-primary">In Action</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the premium experience through screenshots of the app.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 border border-border/50 rounded-2xl p-12 text-center">
              <p className="text-muted-foreground">
                Premium screenshots coming soon...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-cal-sans text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Go <span className="text-primary">Premium?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Unlock all premium features and take your habit tracking to the next level.
          </p>
          <StoreButtons />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Premium;

