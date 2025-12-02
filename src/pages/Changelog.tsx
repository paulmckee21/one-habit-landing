import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Changelog = () => {
  return (
    <main className="dark min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cal-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            Change Log
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Track the evolution of One and see what's new.
          </p>
          
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-2xl border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-primary">v1.0.0</span>
                <span className="text-sm text-muted-foreground">Coming Soon</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Initial Release</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Single habit focus</li>
                <li>• Daily check-in system</li>
                <li>• Streak tracking</li>
                <li>• Milestone trophies</li>
                <li>• Micro-journaling</li>
                <li>• Smart reminders</li>
                <li>• Progress analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Changelog;
