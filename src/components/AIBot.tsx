export const AIBot = () => {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8 animate-bot-float">
      {/* Bot Head */}
      <div className="relative w-20 h-16 mx-auto mb-2">
        {/* Head Base */}
        <div 
          className="w-full h-full rounded-t-2xl border-2 border-primary/50 shadow-lg"
          style={{ background: "var(--gradient-card)" }}
        >
          {/* Visor */}
          <div className="absolute inset-x-2 top-2 bottom-2 bg-primary/20 rounded-lg backdrop-blur-sm">
            {/* Eyes */}
            <div className="flex justify-center items-center h-full space-x-2">
              <div 
                className="w-3 h-3 rounded-full bg-primary animate-eye-blink"
                style={{ boxShadow: "0 0 10px hsl(var(--primary))" }}
              />
              <div 
                className="w-3 h-3 rounded-full bg-primary animate-eye-blink" 
                style={{ 
                  boxShadow: "0 0 10px hsl(var(--primary))",
                  animationDelay: "0.1s" 
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bot Body */}
      <div className="relative w-16 h-20 mx-auto">
        {/* Body Base */}
        <div 
          className="w-full h-full rounded-lg border-2 border-primary/50 shadow-lg"
          style={{ background: "var(--gradient-card)" }}
        >
          {/* Chest Panel */}
          <div className="absolute inset-x-2 top-2 bottom-8 bg-primary/10 rounded border border-primary/30">
            {/* Chest Light */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
          </div>
        </div>

        {/* Arms */}
        <div className="absolute -left-3 top-2 w-2 h-8 bg-primary/60 rounded-full" />
        <div className="absolute -right-3 top-2 w-2 h-8 bg-primary/60 rounded-full animate-robot-wave origin-bottom" />
        
        {/* Hands */}
        <div className="absolute -left-4 top-8 w-3 h-3 bg-primary/80 rounded-full animate-pulse" />
        <div className="absolute -right-4 top-8 w-3 h-3 bg-primary/80 rounded-full animate-pulse animate-robot-wave origin-bottom" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full opacity-30 animate-pulse-glow pointer-events-none">
        <div 
          className="w-full h-full rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 70%)",
            filter: "blur(10px)"
          }}
        />
      </div>
    </div>
  );
};