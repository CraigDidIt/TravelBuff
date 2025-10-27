import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Stat {
  number: string;
  label: string;
  description: string;
}

export function StatsSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0, stat4: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    {
      number: "15+",
      label: t.stats.stat1Label,
      description: "",
    },
    {
      number: "12",
      label: t.stats.stat2Label,
      description: "",
    },
    {
      number: "3",
      label: t.stats.stat3Label,
      description: "",
    },
    {
      number: "98%",
      label: t.stats.stat4Label,
      description: "",
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
      stat1: 15,
      stat2: 12,
      stat3: 3,
      stat4: 98,
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
          {t.stats.eyebrow}
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
            </div>
          ))}
        </div>

        {/* Supporting Statement */}
        <div className="text-center mt-16">
          <h3 
            className={`font-serif text-3xl lg:text-4xl text-navy mb-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-testid="heading-stats"
          >
            {t.stats.headline}
          </h3>
          <p 
            className={`text-navy/80 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-testid="text-supporting-statement"
          >
            {t.stats.subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
