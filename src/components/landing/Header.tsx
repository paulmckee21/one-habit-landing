import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">1</span>
          </div>
          <span className="font-bold text-xl text-foreground">One</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#screenshots" className="text-muted-foreground hover:text-foreground transition-colors">
            Screenshots
          </a>
          <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
        </nav>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Download
        </Button>
      </div>
    </header>
  );
};

export default Header;
