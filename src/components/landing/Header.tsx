import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="font-cal-sans font-bold text-5xl text-foreground">One</span>
        </Link>
        <nav className="flex items-center gap-8">
          <a href="#features" className="text-base text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#screenshots" className="text-base text-muted-foreground hover:text-foreground transition-colors">
            Screenshots
          </a>
          <Link to="/premium" className="text-base text-muted-foreground hover:text-foreground transition-colors">
            Premium
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
