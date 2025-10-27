import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { ServiceSection } from "@/components/ServiceSection";
import { StatsSection } from "@/components/StatsSection";
import { PartnerShowcase } from "@/components/PartnerShowcase";
import { WaitlistSection } from "@/components/WaitlistSection";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import medicalImage from "@assets/stock_images/medical_consultation_4bfd952c.jpg";
import romanticImage from "@assets/stock_images/couple_romantic_dinn_e4b7c36e.jpg";
import caribbeanImage from "@assets/stock_images/caribbean_beach_trop_c77c5893.jpg";
import { useEffect } from "react";
import { Hospital, Globe, Palmtree } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
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
          eyebrow={t.services.medical.eyebrow}
          eyebrowColor="navy"
          headline={t.services.medical.headline}
          body={t.services.medical.body}
          features={[
            t.services.medical.feature1,
            t.services.medical.feature2,
            t.services.medical.feature3,
            t.services.medical.feature4,
          ]}
          ctaText={t.services.medical.cta}
          ctaLink="/medical-tourism"
          trustBadge={t.services.medical.badge}
          trustBadgeIcon={Hospital}
          image={medicalImage}
          imageAlt="Medical consultation in modern facility"
          imagePosition="right"
          background="white"
        />

        <ServiceSection
          sectionNumber="02"
          eyebrow={t.services.romantic.eyebrow}
          eyebrowColor="coral"
          headline={t.services.romantic.headline}
          body={t.services.romantic.body}
          features={[
            t.services.romantic.feature1,
            t.services.romantic.feature2,
            t.services.romantic.feature3,
            t.services.romantic.feature4,
          ]}
          ctaText={t.services.romantic.cta}
          ctaLink="/romantic-solo"
          trustBadge={t.services.romantic.badge}
          trustBadgeIcon={Globe}
          image={romanticImage}
          imageAlt="Romantic couple dining experience"
          imagePosition="left"
          background="cream"
        />

        <ServiceSection
          sectionNumber="03"
          eyebrow={t.services.caribbean.eyebrow}
          eyebrowColor="teal"
          headline={t.services.caribbean.headline}
          body={t.services.caribbean.body}
          features={[
            t.services.caribbean.feature1,
            t.services.caribbean.feature2,
            t.services.caribbean.feature3,
            t.services.caribbean.feature4,
          ]}
          ctaText={t.services.caribbean.cta}
          ctaLink="/caribbean-immersion"
          trustBadge={t.services.caribbean.badge}
          trustBadgeIcon={Palmtree}
          image={caribbeanImage}
          imageAlt="Caribbean beach paradise"
          imagePosition="right"
          background="white"
        />
      </div>

      <StatsSection />
      <PartnerShowcase />
      <WaitlistSection />
      <ConsultationForm />
      <Footer />
    </div>
  );
}
