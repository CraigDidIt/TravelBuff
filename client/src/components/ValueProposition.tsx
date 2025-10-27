import { useEffect, useRef, useState } from "react";
import { Languages, Handshake, Sparkles } from "lucide-react";
import valueImage from "@assets/stock_images/cooking_kitchen_cult_67978ff0.jpg";

export function ValueProposition() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-20 lg:py-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Side */}
          <div 
            className={`relative h-64 lg:h-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="h-full lg:min-h-[600px]">
              <img
                src={valueImage}
                alt="Cultural cooking experience"
                className="w-full h-full object-cover lg:rounded-r-2xl shadow-2xl"
                data-testid="img-value-proposition"
              />
            </div>
          </div>

          {/* Content Side */}
          <div 
            className={`px-8 lg:px-20 py-12 lg:py-20 flex flex-col justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Eyebrow */}
            <p className="text-coral uppercase text-sm tracking-[0.15em] font-semibold mb-4" data-testid="text-eyebrow-value">
              WHY TRAVELBUFF EXISTS
            </p>

            {/* Headline */}
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-6 leading-tight" data-testid="heading-value-proposition">
              Travel Beyond Transactions.<br />
              Experience Cultural Connection.
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-navy/80 text-lg lg:text-xl leading-relaxed max-w-xl mb-10" data-testid="text-body-value">
              <p>
                Travelbuff isn't a booking platform—it's your cultural bridge to the world.
              </p>
              <p>
                Whether you're seeking world-class medical care in Latin America, planning
                an unforgettable romantic escape, or discovering Caribbean life through local
                eyes, we curate every detail with white-glove precision and authentic expertise.
              </p>
              <p className="font-semibold text-navy">
                Because the best journeys aren't found online. They're crafted through relationships,
                cultural fluency, and genuine care.
              </p>
            </div>

            {/* Three-Icon Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center sm:text-left" data-testid="feature-trilingual">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-4">
                  <Languages className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-sans font-bold text-navy text-base mb-1">
                  Trilingual Expertise
                </h3>
                <p className="text-navy/60 text-sm">
                  English, Spanish & French
                </p>
              </div>

              <div className="text-center sm:text-left" data-testid="feature-partners">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-4">
                  <Handshake className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-sans font-bold text-navy text-base mb-1">
                  Vetted Partners
                </h3>
                <p className="text-navy/60 text-sm">
                  25+ trusted connections
                </p>
              </div>

              <div className="text-center sm:text-left" data-testid="feature-personalized">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-4">
                  <Sparkles className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-sans font-bold text-navy text-base mb-1">
                  Personalized Curation
                </h3>
                <p className="text-navy/60 text-sm">
                  Zero cookie-cutter packages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
