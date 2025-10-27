import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { ServiceSection } from "@/components/ServiceSection";
import { StatsSection } from "@/components/StatsSection";
import { PartnerShowcase } from "@/components/PartnerShowcase";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import medicalImage from "@assets/stock_images/medical_consultation_4bfd952c.jpg";
import romanticImage from "@assets/stock_images/couple_romantic_dinn_e4b7c36e.jpg";
import caribbeanImage from "@assets/stock_images/caribbean_beach_trop_c77c5893.jpg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Travelbuff Concierge Services | Premium Travel Experiences & Cultural Immersion";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Transform your travel dreams into lifelong memories. Expert concierge services for medical tourism, romantic escapes, and authentic Caribbean cultural experiences. Trilingual support across Caribbean, Latin America & Europe."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Transform your travel dreams into lifelong memories. Expert concierge services for medical tourism, romantic escapes, and authentic Caribbean cultural experiences. Trilingual support across Caribbean, Latin America & Europe.";
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = "Travelbuff Concierge Services | Premium Travel Experiences";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = "Your cultural bridge to the world. Curated travel experiences from medical tourism to Caribbean immersion.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      
      <div id="services">
        <ServiceSection
          sectionNumber="01"
          eyebrow="MEDICAL TRAVEL CONCIERGE"
          eyebrowColor="navy"
          headline={["WORLD-CLASS", "CARE", "", "with complete", "peace of mind"]}
          body="Access JCI-accredited medical facilities in Colombia, Costa Rica, and Mexico—for a fraction of Caribbean costs. We coordinate every detail: pre-screened surgeons, appointments, accommodations, transportation, translation, and post-procedure support."
          features={[
            "Pre-screened JCI-accredited facilities across Latin America",
            "Complete coordination: medical, travel, lodging & cultural support",
            "Post-procedure recovery assistance and follow-up care",
            "Transparent pricing with no hidden fees or surprises",
          ]}
          ctaText="Explore Medical Tourism →"
          ctaLink="/medical-tourism"
          trustBadge="🏥 25+ Vetted Medical Partners"
          image={medicalImage}
          imageAlt="Medical consultation in modern facility"
          imagePosition="right"
          background="white"
        />

        <ServiceSection
          sectionNumber="02"
          eyebrow="CURATED EXPERIENCES"
          eyebrowColor="coral"
          headline={["FROM", "FIRST-CLASS", "ROMANCE", "", "to unforgettable", "solo journeys"]}
          body="Whether you're celebrating love or embracing adventure alone, we design itineraries that reflect your unique personality. Hidden gems. Local experiences. Authentic cultural moments across Europe, Latin America, and beyond."
          features={[
            "Personalized itineraries matching your exact travel style",
            "Boutique accommodations and authentic local experiences",
            "Off-the-beaten-path destinations and cultural immersion",
            "Solo-friendly or romance-optimized trip design",
          ]}
          ctaText="Plan Your Getaway →"
          ctaLink="/romantic-solo"
          trustBadge="🌍 Europe • Latin America • Caribbean"
          image={romanticImage}
          imageAlt="Romantic couple dining experience"
          imagePosition="left"
          background="cream"
        />

        <ServiceSection
          sectionNumber="03"
          eyebrow="INBOUND EXPERIENCES"
          eyebrowColor="teal"
          headline={["DISCOVER", "CARIBBEAN", "PARADISE", "", "through local eyes"]}
          body="For European and Latin American travelers seeking authenticity beyond resorts. Live like a native with vetted local hosts, traditional cuisine experiences, artisan workshops, and hidden destinations across Barbados, Trinidad, St. Lucia, Grenada, and Jamaica."
          features={[
            '"Live Like a Native" experiences with trusted local guides',
            "Traditional cuisine, artisan workshops & cultural activities",
            "Off-resort destinations showcasing authentic Caribbean life",
            "Multilingual support for seamless cultural exchange",
          ]}
          ctaText="Experience Caribbean Culture →"
          ctaLink="/caribbean-immersion"
          trustBadge="🏝️ 5 Caribbean Islands • Authentic Experiences"
          image={caribbeanImage}
          imageAlt="Caribbean beach paradise"
          imagePosition="right"
          background="white"
        />
      </div>

      <StatsSection />
      <PartnerShowcase />
      <ConsultationForm />
      <Footer />
    </div>
  );
}
