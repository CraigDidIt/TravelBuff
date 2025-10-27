import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About", id: "stats" },
    { label: "Partners", id: "partners" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      data-testid="header-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
            data-testid="button-logo"
          >
            <span
              className={`font-serif text-2xl font-bold transition-colors ${
                isScrolled
                  ? "text-navy"
                  : "text-white drop-shadow-lg"
              }`}
            >
              Travelbuff
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-navy" : "text-white drop-shadow-lg"
                }`}
                data-testid={`link-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Language Indicator */}
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${
                isScrolled
                  ? "bg-cream/50 text-navy/70"
                  : "bg-white/20 backdrop-blur-sm text-white"
              }`}
              data-testid="badge-language-header"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs font-medium">EN • ES • FR</span>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gold hover:bg-gold/90 text-white font-semibold shadow-lg transition-all hover:scale-105"
              data-testid="button-header-cta"
            >
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-navy hover:bg-navy/10"
                : "text-white hover:bg-white/10"
            }`}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-navy hover:bg-navy/5 px-4 py-3 text-left font-sans font-medium transition-colors"
                  data-testid={`link-mobile-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="flex items-center gap-2 px-4 py-3 text-navy/70">
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">English • Español • Français</span>
              </div>

              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gold hover:bg-gold/90 text-white font-semibold"
                  data-testid="button-mobile-cta"
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
