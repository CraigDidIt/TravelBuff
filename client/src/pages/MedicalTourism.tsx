import { ArrowLeft, Check, Heart, Shield, Award, MapPin, Calendar, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import medicalImage from "@assets/stock_images/medical_consultation_4bfd952c.jpg";
import caribbeanBeach from "@assets/stock_images/caribbean_beach_trop_c77c5893.jpg";

export default function MedicalTourism() {
  const [, setLocation] = useLocation();

  const scrollToConsultation = () => {
    setLocation("/#contact");
  };

  const features = [
    "JCI-accredited medical facilities across Latin America & Caribbean",
    "Board-certified specialists fluent in your language",
    "Comprehensive pre-travel medical assessments",
    "Coordinated appointment scheduling with minimal wait times",
    "Recovery accommodations with 24/7 concierge support",
    "Airport transfers and medical transport included",
    "Follow-up care coordination with your home physicians",
    "Transparent pricing with no hidden costs"
  ];

  const specialties = [
    { icon: Heart, title: "Cardiac Care", description: "Advanced cardiovascular procedures and rehabilitation" },
    { icon: Users, title: "Cosmetic Surgery", description: "World-class aesthetic and reconstructive procedures" },
    { icon: Shield, title: "Dental Excellence", description: "Full-mouth restorations, implants, and smile design" },
    { icon: Award, title: "Orthopedics", description: "Joint replacements and sports medicine" }
  ];

  const destinations = [
    { name: "Costa Rica", procedures: "Dental, Cosmetic, Wellness", savings: "50-70%" },
    { name: "Dominican Republic", procedures: "Cardiac, Orthopedic", savings: "40-60%" },
    { name: "Colombia", procedures: "Cosmetic, Dental", savings: "50-65%" },
    { name: "Mexico", procedures: "Bariatric, Dental, Cancer Treatment", savings: "45-70%" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <a className="text-2xl font-serif text-navy-900" data-testid="button-back">
              Travelbuff Concierge Services
            </a>
          </Link>
          <Button 
            onClick={scrollToConsultation}
            className="bg-gold-600 hover:bg-gold-700 text-white"
            data-testid="button-book-nav"
          >
            Book Consultation
          </Button>
        </div>
      </nav>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img 
            src={medicalImage} 
            alt="Professional medical consultation in Latin America"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-coral-500 uppercase tracking-[2px] text-sm mb-4" data-testid="text-eyebrow">
            SERVICE 01
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6" data-testid="heading-hero">
            Medical Tourism Excellence
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-cream-100" data-testid="text-subtitle">
            Access world-class healthcare in stunning Caribbean and Latin American destinations—save 40-70% without compromising quality.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={scrollToConsultation}
              className="bg-gold-600 hover:bg-gold-700 text-white"
              data-testid="button-consultation-hero"
            >
              Request Consultation
            </Button>
            <Link href="/" data-testid="link-back">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-coral-500 uppercase tracking-[2px] text-sm mb-4" data-testid="text-features-eyebrow">
              COMPREHENSIVE CARE
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6" data-testid="heading-features">
              Why Choose Medical Tourism with Travelbuff Concierge Services?
            </h2>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto" data-testid="text-features-desc">
              We eliminate the complexity and risk from international medical travel. Every detail is managed by our trilingual team with decades of healthcare coordination experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-600 flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-navy-700 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6" data-testid="heading-specialties">
              Medical Specialties We Coordinate
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow" data-testid={`specialty-${index}`}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-gold-600" />
                  </div>
                  <h3 className="font-serif text-xl text-navy-900 mb-2">{specialty.title}</h3>
                  <p className="text-navy-600">{specialty.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6" data-testid="heading-destinations">
              Premier Destinations
            </h2>
            <p className="text-xl text-cream-100 max-w-2xl mx-auto">
              We partner with JCI-accredited facilities in the most beautiful and accessible locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((dest, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur border-white/20" data-testid={`destination-${index}`}>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gold-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl mb-2">{dest.name}</h3>
                    <p className="text-cream-100 mb-2">
                      <strong>Specialties:</strong> {dest.procedures}
                    </p>
                    <p className="text-gold-400 font-semibold">
                      Average Savings: {dest.savings}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Calendar className="h-16 w-16 text-gold-600 mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6" data-testid="heading-cta">
            Ready to Transform Your Health Journey?
          </h2>
          <p className="text-xl text-navy-700 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your medical needs, review facility options, and receive a personalized treatment plan with transparent pricing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white text-lg px-8"
              data-testid="button-consultation-cta"
            >
              Request Free Consultation
            </Button>
            <Link href="/" data-testid="link-home-cta">
              <Button variant="outline" size="lg">
                Explore Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden" id="contact">
        <div className="absolute inset-0">
          <img 
            src={caribbeanBeach} 
            alt="Caribbean recovery destination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/75" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-gold-400 uppercase tracking-[2px] text-sm mb-4">
            TRUSTED BY HUNDREDS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Your Recovery Deserves Paradise
          </h2>
          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Combine your medical procedure with recovery in a luxury Caribbean setting. Our concierge team manages every detail from arrival to departure.
          </p>
          <Button 
            onClick={() => setLocation("/")}
            className="bg-gold-600 hover:bg-gold-700 text-white"
            data-testid="button-return-home"
          >
            Return to Homepage
          </Button>
        </div>
      </section>
    </div>
  );
}
