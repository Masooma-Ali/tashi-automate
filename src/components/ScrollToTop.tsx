import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls to the top of the page whenever the route changes.
 * This ensures that when users navigate between pages, they always start
 * from the top of the new page rather than maintaining their previous scroll position.
 * 
 * Usage: Place this component inside the Router component in App.tsx
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior for better UX
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use 'instant' to prevent jarring animation between pages
    });
  }, [pathname]);

  return null;
}
