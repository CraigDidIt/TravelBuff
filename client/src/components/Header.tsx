import { useState, useEffect } from "react";
import { Menu, X, Languages, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
    { label: t.nav.home, id: "home" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.about, id: "stats" },
    { label: t.nav.partners, id: "partners" },
    { label: t.nav.contact, id: "contact" },
  ];

  const languageLabels: Record<Language, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
  };

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
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors ${
                    isScrolled
                      ? "bg-cream/50 hover:bg-cream text-navy/70"
                      : "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                  }`}
                  data-testid="button-language-selector"
                >
                  <Languages className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase">{language}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" data-testid="menu-language-options">
                {Object.entries(languageLabels).map(([lang, label]) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang as Language)}
                    className={`cursor-pointer ${language === lang ? 'bg-gold/10 font-semibold' : ''}`}
                    data-testid={`option-language-${lang}`}
                  >
                    <span className="flex items-center gap-2">
                      {label}
                      {language === lang && <span className="text-gold">✓</span>}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gold hover:bg-gold/90 text-white font-semibold shadow-lg transition-all hover:scale-105"
              data-testid="button-header-cta"
            >
              {t.nav.bookConsultation}
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
              
              <div className="px-4 py-3">
                <p className="text-xs text-navy/60 mb-2 font-medium">Language / Idioma / Langue</p>
                <div className="flex gap-2">
                  {Object.entries(languageLabels).map(([lang, label]) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang as Language)}
                      className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        language === lang
                          ? 'bg-gold text-white'
                          : 'bg-cream hover:bg-cream/70 text-navy'
                      }`}
                      data-testid={`button-mobile-language-${lang}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gold hover:bg-gold/90 text-white font-semibold"
                  data-testid="button-mobile-cta"
                >
                  {t.nav.bookConsultation}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
