import { Globe, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy/95 text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4" data-testid="text-footer-brand">
              Travelbuff
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Globe className="w-4 h-4" />
              <span>English • Español • Français</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-sans font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-gold transition-colors"
                  data-testid="link-footer-medical"
                >
                  Medical Tourism
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-gold transition-colors"
                  data-testid="link-footer-romantic"
                >
                  Romantic Escapes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-gold transition-colors"
                  data-testid="link-footer-solo"
                >
                  Solo Adventures
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-gold transition-colors"
                  data-testid="link-footer-caribbean"
                >
                  Caribbean Cultural Immersion
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-sans font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:concierge@travelbuff.com" className="hover:text-gold transition-colors" data-testid="link-email">
                  concierge@travelbuff.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+18005551234" className="hover:text-gold transition-colors" data-testid="link-phone">
                  +1 (800) 555-1234
                </a>
              </li>
            </ul>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 text-gold font-semibold text-sm hover:underline underline-offset-4 transition-all"
              data-testid="button-footer-consultation"
            >
              Book Free Consultation →
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            {t.footer.copyright.replace('2025', new Date().getFullYear().toString())}
          </p>
          <div className="flex gap-6 text-white/50 text-sm">
            <button 
              onClick={scrollToTop}
              className="hover:text-gold transition-colors"
              data-testid="link-back-to-top"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
