import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const StoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button
        size="lg"
        className="bg-foreground text-background hover:bg-foreground/90 gap-3 px-6 py-6 h-auto"
      >
        <Apple className="w-6 h-6" />
        <div className="flex flex-col items-start text-left">
          <span className="text-xs opacity-80">Download on the</span>
          <span className="text-base font-semibold">App Store</span>
        </div>
      </Button>
      
      <Button
        size="lg"
        className="bg-foreground text-background hover:bg-foreground/90 gap-3 px-6 py-6 h-auto"
      >
        <Play className="w-6 h-6" fill="currentColor" />
        <div className="flex flex-col items-start text-left">
          <span className="text-xs opacity-80">Get it on</span>
          <span className="text-base font-semibold">Google Play</span>
        </div>
      </Button>
    </div>
  );
};

export default StoreButtons;
