import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"
            style={{ background: "var(--gradient-primary)" }}
          ></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold gradient-text mb-4">
          ASK CONNECT
        </h2>
        <p className="text-muted-foreground mb-6">
          KI-Agenten der Zukunft werden geladen...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full transition-all duration-300 ease-out"
            style={{ 
              width: `${progress}%`,
              background: "var(--gradient-primary)"
            }}
          ></div>
        </div>

        {/* Progress Percentage */}
        <div className="mt-2 text-sm text-muted-foreground">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};