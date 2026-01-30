import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50",
          "max-w-4xl w-[calc(100%-3rem)]",
          "bg-white/80 backdrop-blur-xl",
          "border border-border/50",
          "rounded-full px-4 md:px-6 py-3",
          "transition-all duration-300",
          isScrolled ? "shadow-lg" : "shadow-md"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border border-border/30 p-1 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="Tashi Technologies"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-foreground hidden sm:block">
              Tashi Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Link to="/sign-in" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="rounded-full">
                <LogIn className="w-4 h-4 mr-1" />
                Sign In
              </Button>
            </Link>
            <Link to="/book-meeting" className="hidden sm:block">
              <Button variant="hero" size="sm" className="rounded-full">
                Book a Meeting
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-muted/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-24 z-40 px-6 md:hidden animate-fade-in-down">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg p-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.label}
                </Link>
                ))}
              <Link to="/sign-in" className="mt-2">
                <Button variant="outline" className="w-full rounded-xl">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link to="/book-meeting">
                <Button variant="hero" className="w-full rounded-xl">
                  Book a Meeting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
