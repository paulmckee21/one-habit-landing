import { Apple, Play } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">1</span>
              </div>
              <span className="font-bold text-xl text-foreground">One</span>
            </div>
            <p className="text-muted-foreground text-sm">
              One habit. One goal. One step at a time.
            </p>
          </div>
          
          {/* Download */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Download</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <Apple className="w-4 h-4" /> App Store
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm">
                  <Play className="w-4 h-4" fill="currentColor" /> Google Play
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Change Log
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} One Habit Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
