import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page
      navigate("/");
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="font-cal-sans font-bold text-5xl text-foreground">One</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/#features" className="text-base text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/#screenshots" className="text-base text-muted-foreground hover:text-foreground transition-colors">
            Screenshots
          </Link>
          <Link to="/premium" className="text-base text-muted-foreground hover:text-foreground transition-colors">
            Premium
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
