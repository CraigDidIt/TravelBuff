import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@assets/stock_images/mountain_sunset_trav_de65896a.jpg";

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] lg:h-screen overflow-hidden" id="home">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40" />
      </div>


      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p 
            className="text-white/90 uppercase text-sm md:text-base tracking-[0.2em] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
            data-testid="text-eyebrow"
          >
            {t.hero.eyebrow}
          </p>

          {/* Main Headline */}
          <h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
            data-testid="heading-hero"
          >
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p 
            className="font-sans text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
            data-testid="text-subheadline"
          >
            {t.hero.subheadline}
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s" }}
          >
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-white font-semibold text-base px-8 py-6 rounded-lg shadow-xl transition-all hover:scale-105"
              onClick={scrollToContact}
              data-testid="button-consultation"
            >
              {t.hero.primaryCta}
            </Button>
            <button 
              onClick={scrollToServices}
              className="text-white font-sans text-base hover:text-gold transition-colors underline-offset-4 hover:underline"
              data-testid="link-explore"
            >
              {t.hero.secondaryCta}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-0 animate-fade-up"
          style={{ animationDelay: "1.4s" }}
          onClick={scrollToServices}
          data-testid="button-scroll-indicator"
        >
          <p className="text-white/80 text-sm font-sans">Discover Your Journey</p>
          <ChevronDown className="w-6 h-6 text-white/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
