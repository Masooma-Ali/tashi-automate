import { cn } from "@/lib/utils";

interface BackgroundPatternProps {
  variant?: "dots" | "circuit" | "grid";
  className?: string;
}

export function BackgroundPattern({
  variant = "circuit",
  className,
}: BackgroundPatternProps) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Base pattern layer */}
      {variant === "dots" && <DotsPattern />}
      {variant === "circuit" && <CircuitPattern />}
      {variant === "grid" && <GridPattern />}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
    </div>
  );
}

function DotsPattern() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.08) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

function CircuitPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Horizontal lines */}
          <line
            x1="0"
            y1="50"
            x2="40"
            y2="50"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          <line
            x1="60"
            y1="50"
            x2="100"
            y2="50"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          {/* Vertical lines */}
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="40"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          <line
            x1="50"
            y1="60"
            x2="50"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          {/* Center node */}
          <circle
            cx="50"
            cy="50"
            r="4"
            fill="currentColor"
            className="text-primary"
          />
          {/* Corner nodes */}
          <circle cx="0" cy="0" r="2" fill="currentColor" className="text-primary" />
          <circle cx="100" cy="0" r="2" fill="currentColor" className="text-primary" />
          <circle cx="0" cy="100" r="2" fill="currentColor" className="text-primary" />
          <circle cx="100" cy="100" r="2" fill="currentColor" className="text-primary" />
          {/* Diagonal accents */}
          <line
            x1="50"
            y1="50"
            x2="75"
            y2="25"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <line
            x1="50"
            y1="50"
            x2="25"
            y2="75"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );
}

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid-pattern"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="60"
            height="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}
