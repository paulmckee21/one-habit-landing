import { useEffect, useState } from "react";

const AnimatedSlogan = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  
  const lines = [
    "One Habit.",
    "One Goal.",
    "One Step at a Time."
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    lines.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, (index + 1) * 600);
      timers.push(timer);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4">
      {lines.map((line, index) => (
        <h1
          key={index}
          className={`text-3xl md:text-5xl lg:text-6xl font-bold transition-all duration-700 ease-out ${
            visibleLines.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } ${index === 2 ? "text-primary text-glow" : "text-foreground"}`}
        >
          {line}
        </h1>
      ))}
    </div>
  );
};

export default AnimatedSlogan;
