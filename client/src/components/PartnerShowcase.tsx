import { useEffect, useRef, useState } from "react";

export function PartnerShowcase() {
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

  const partners = [
    { name: "JCI International", category: "Medical Accreditation" },
    { name: "Caribbean Tourism", category: "Official Partner" },
    { name: "Latin Medical Network", category: "Healthcare Provider" },
    { name: "Boutique Hotels Alliance", category: "Accommodations" },
    { name: "Cultural Guides Collective", category: "Local Experiences" },
    { name: "Medical Tourism Association", category: "Industry Member" },
  ];

  return (
    <section ref={sectionRef} id="partners" className="bg-gray-50 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p 
            className={`text-navy/60 uppercase text-sm tracking-[0.15em] font-semibold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            data-testid="text-eyebrow-partners"
          >
            TRUSTED BY LEADING ORGANIZATIONS
          </p>
          <h2 
            className={`font-serif text-3xl lg:text-4xl text-navy transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            data-testid="heading-partners"
          >
            Our Vetted Partner Network
          </h2>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`group flex flex-col items-center justify-center p-6 rounded-lg bg-white hover:bg-white/80 transition-all duration-300 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              data-testid={`partner-${idx}`}
            >
              {/* Partner Logo Placeholder */}
              <div className="w-32 h-20 mb-3 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-2xl text-navy/30 group-hover:text-navy/60 transition-colors mb-1">
                    {partner.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="font-sans text-xs text-navy/50 group-hover:text-navy/70 transition-colors">
                    {partner.category}
                  </div>
                </div>
              </div>
              <p className="text-navy/60 group-hover:text-navy transition-colors text-sm font-semibold text-center">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Statement */}
        <p 
          className={`text-center text-navy/70 text-base mt-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          data-testid="text-trust-statement"
        >
          All partners undergo rigorous vetting to ensure the highest standards of service,
          safety, and authentic cultural experiences.
        </p>
      </div>
    </section>
  );
}
