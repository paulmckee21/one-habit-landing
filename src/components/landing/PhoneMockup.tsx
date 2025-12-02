import { Star, Settings, Flame, Calendar, TrendingUp, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  variant?: "main" | "secondary";
  className?: string;
}

const PhoneMockup = ({ variant = "main", className }: PhoneMockupProps) => {
  return (
    <div className={cn(
      "relative w-[200px] md:w-[260px] h-[420px] md:h-[520px] rounded-[2.5rem] bg-card border-4 border-border/50 shadow-2xl overflow-hidden card-glow",
      variant === "secondary" && "scale-90 opacity-80",
      className
    )}>
      {/* Status bar */}
      <div className="h-6 bg-background/50 flex items-center justify-between px-4 text-xs text-muted-foreground">
        <span>5:40</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-muted-foreground/50 rounded-sm" />
          <div className="w-3 h-3 bg-muted-foreground/50 rounded-sm" />
        </div>
      </div>

      {/* App content */}
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">One</span>
          <Settings className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Main habit card */}
        <div className="bg-secondary/50 rounded-2xl p-4 border border-border/30">
          <div className="flex flex-col items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              {variant === "main" ? "Drink Water" : "Read 20 mins"}
            </h3>
            <span className="text-sm text-muted-foreground bg-secondary/80 px-3 py-1 rounded-full">
              {variant === "main" ? "2 liters" : "Daily goal"}
            </span>
          </div>
        </div>

        {/* Welcome message */}
        <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-3 border border-border/20">
          <Flame className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Welcome to your journey!</span>
        </div>

        {/* Done button */}
        <div className="flex justify-center py-2">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-success flex flex-col items-center justify-center shadow-lg">
            <Check className="w-10 h-10 text-success-foreground" strokeWidth={3} />
            <span className="text-success-foreground font-semibold mt-1">Done!</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-secondary/30 rounded-xl p-3 border border-border/20 text-center">
            <Flame className="w-5 h-5 text-primary mx-auto mb-1" />
            <span className="text-xl font-bold text-foreground">{variant === "main" ? "7" : "3"}</span>
            <p className="text-xs text-muted-foreground">Daily Streak</p>
          </div>
          <div className="bg-secondary/30 rounded-xl p-3 border border-border/20 text-center">
            <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
            <span className="text-xl font-bold text-foreground">{variant === "main" ? "5" : "2"}</span>
            <p className="text-xs text-muted-foreground">This Week</p>
          </div>
        </div>

        {/* Progress button */}
        <div className="flex items-center justify-center gap-2 bg-secondary/30 rounded-xl p-3 border border-border/20">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-sm text-primary font-medium">View Progress</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
