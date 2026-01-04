import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Car, Building2, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/apartments", label: "Apartments", icon: Building2 },
  { href: "/cars", label: "Cars", icon: Car },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Pages that need dark navbar text on initial load (no dark hero background)
  const needsDarkText = ["/apartments", "/cars", "/contact"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Mighty Love Inn" className="w-10 h-10 object-contain" />
            <span className={cn(
              "font-bold text-xl transition-colors duration-300",
              scrolled 
                ? "text-foreground" 
                : needsDarkText 
                  ? "text-foreground" 
                  : "text-primary-foreground"
            )}>
              Mighty Love Inn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative font-medium transition-colors duration-300 hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary"
                    : scrolled
                    ? "text-foreground"
                    : needsDarkText
                      ? "text-foreground"
                      : "text-primary-foreground"
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className={cn(
                "relative font-medium transition-colors duration-300 hover:text-primary",
                location.pathname === "/contact"
                  ? "text-primary"
                  : scrolled
                  ? "text-foreground"
                  : needsDarkText
                    ? "text-foreground"
                    : "text-primary-foreground"
              )}
            >
              Contact
              {location.pathname === "/contact" && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant={scrolled ? "default" : "heroOutline"} size="default">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-300",
              scrolled 
                ? "text-foreground" 
                : needsDarkText 
                  ? "text-foreground" 
                  : "text-primary-foreground"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500",
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-card rounded-2xl shadow-card p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl transition-all duration-300",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                <link.icon size={20} />
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl transition-all duration-300",
                location.pathname === "/contact"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              <Phone size={20} />
              Contact
            </Link>
            <Button variant="hero" className="w-full mt-4">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
