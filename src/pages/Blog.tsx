import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="dark min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cal-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Insights, tips, and stories about building lasting habits.
          </p>
          
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Coming soon! We're working on bringing you valuable content about habit building.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Blog;
