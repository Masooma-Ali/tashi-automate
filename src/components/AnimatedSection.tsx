import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-8 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0",
    "fade-down": "opacity-0 -translate-y-8 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0",
    "fade-in": "opacity-0 [&.is-visible]:opacity-100",
    "slide-left": "opacity-0 translate-x-8 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0",
    "slide-right": "opacity-0 -translate-x-8 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0",
    "scale": "opacity-0 scale-95 [&.is-visible]:opacity-100 [&.is-visible]:scale-100",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
}
