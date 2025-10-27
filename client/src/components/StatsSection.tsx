import { useEffect, useRef, useState } from "react";

interface Stat {
  number: string;
  label: string;
  description: string;
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      number: "25+",
      label: "VETTED PARTNERS",
      description: "Medical facilities, hotels & cultural guides",
    },
    {
      number: "12",
      label: "DESTINATIONS",
      description: "Caribbean, Latin America & Europe",
    },
    {
      number: "3",
      label: "LANGUAGES",
      description: "English, Spanish & French fluency",
    },
    {
      number: "100%",
      label: "PERSONALIZED",
      description: "Every journey uniquely crafted for you",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      stat1: 25,
      stat2: 12,
      stat3: 3,
      stat4: 100,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        stat1: Math.floor(targets.stat1 * progress),
        stat2: Math.floor(targets.stat2 * progress),
        stat3: Math.floor(targets.stat3 * progress),
        stat4: Math.floor(targets.stat4 * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="stats" className="bg-white py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-8">
        {/* Eyebrow */}
        <p 
          className={`text-center text-navy/60 uppercase text-sm tracking-[0.15em] font-semibold mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          data-testid="text-eyebrow-stats"
        >
          TRUSTED CONNECTIONS ACROSS CONTINENTS
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              data-testid={`stat-${idx}`}
            >
              <div className="font-serif text-6xl lg:text-7xl xl:text-8xl text-navy mb-3">
                {idx === 0 && `${counts.stat1}+`}
                {idx === 1 && counts.stat2}
                {idx === 2 && counts.stat3}
                {idx === 3 && `${counts.stat4}%`}
              </div>
              <h3 className="font-sans font-bold text-navy text-sm tracking-wider mb-2">
                {stat.label}
              </h3>
              <p className="text-navy/60 text-sm leading-relaxed max-w-[200px] mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Statement */}
        <p 
          className={`text-center text-navy/80 text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          data-testid="text-supporting-statement"
        >
          Your journey is backed by carefully cultivated relationships with 
          JCI-accredited facilities, boutique accommodations, and authentic 
          cultural guides across three continents.
        </p>
      </div>
    </section>
  );
}
