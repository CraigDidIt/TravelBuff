import { useEffect, useRef, useState } from "react";
import { Check, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceSectionProps {
  sectionNumber: string;
  eyebrow: string;
  eyebrowColor: "navy" | "coral" | "teal";
  headline: string[];
  body: string;
  features: string[];
  ctaText: string;
  ctaLink?: string;
  trustBadge: string;
  trustBadgeIcon?: LucideIcon;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  background: "white" | "cream";
  id?: string;
}

export function ServiceSection({
  sectionNumber,
  eyebrow,
  eyebrowColor,
  headline,
  body,
  features,
  ctaText,
  ctaLink,
  trustBadge,
  trustBadgeIcon: TrustBadgeIcon,
  image,
  imageAlt,
  imagePosition,
  background,
  id,
}: ServiceSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const eyebrowColorClass = {
    navy: "text-navy",
    coral: "text-coral",
    teal: "text-teal",
  }[eyebrowColor];

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative min-h-[80vh] ${background === "cream" ? "bg-cream" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-0 ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
          {/* Image Side */}
          <div
            className={`relative order-1 ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"} ${
              isVisible
                ? "opacity-100 translate-x-0"
                : imagePosition === "left"
                ? "opacity-0 -translate-x-12"
                : "opacity-0 translate-x-12"
            } transition-all duration-700`}
          >
            <div className="h-64 lg:h-full lg:min-h-[600px] relative overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
                data-testid={`img-service-${sectionNumber}`}
              />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`relative px-4 sm:px-6 md:px-12 lg:px-20 py-12 lg:py-20 flex flex-col justify-center order-2 ${
              imagePosition === "right" ? "lg:order-1" : "lg:order-2"
            } ${
              isVisible
                ? "opacity-100 translate-x-0"
                : imagePosition === "left"
                ? "opacity-0 translate-x-12"
                : "opacity-0 -translate-x-12"
            } transition-all duration-700 delay-300`}
          >
            {/* Large Section Number (Background) */}
            <div className="absolute top-8 left-4 lg:left-12 opacity-5 pointer-events-none">
              <span className="font-serif text-[180px] lg:text-[220px] font-bold text-navy leading-none">
                {sectionNumber}
              </span>
            </div>

            {/* Eyebrow */}
            <p className={`${eyebrowColorClass} uppercase text-sm tracking-[0.15em] font-semibold mb-4 relative z-10`} data-testid={`text-eyebrow-${sectionNumber}`}>
              {eyebrow}
            </p>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy mb-6 leading-tight relative z-10" data-testid={`heading-service-${sectionNumber}`}>
              {headline.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < headline.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Body Copy */}
            <p className="text-navy/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-8 relative z-10" data-testid={`text-body-${sectionNumber}`}>
              {body}
            </p>

            {/* Feature Bullets */}
            <ul className="space-y-3 mb-8 relative z-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3" data-testid={`feature-${sectionNumber}-${idx}`}>
                  <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-navy/80 text-base lg:text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {ctaLink ? (
              <Link 
                href={ctaLink} 
                className="text-navy font-sans text-base lg:text-lg font-semibold hover:text-gold transition-colors underline decoration-gold decoration-2 underline-offset-4 mb-6 inline-block relative z-10"
                data-testid={`link-cta-${sectionNumber}`}
              >
                {ctaText}
              </Link>
            ) : (
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-navy font-sans text-base lg:text-lg font-semibold hover:text-gold transition-colors underline decoration-gold decoration-2 underline-offset-4 mb-6 text-left relative z-10"
                data-testid={`link-cta-${sectionNumber}`}
              >
                {ctaText}
              </button>
            )}

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-navy/60 text-sm relative z-10" data-testid={`badge-trust-${sectionNumber}`}>
              {TrustBadgeIcon && <TrustBadgeIcon className="w-4 h-4 flex-shrink-0" />}
              <span>{trustBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
