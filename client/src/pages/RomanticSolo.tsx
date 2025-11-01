import { ArrowLeft, Check, Heart, Sparkles, Camera, Wine, Plane, Star } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import romanticImage from "@assets/stock_images/couple_romantic_dinn_e4b7c36e.jpg";
import mountainSunset from "@assets/stock_images/mountain_sunset_trav_de65896a.jpg";

export default function RomanticSolo() {
  const [, setLocation] = useLocation();

  const scrollToConsultation = () => {
    setLocation("/#contact");
  };

  const romanticFeatures = [
    "Private sunset experiences at exclusive Caribbean locations",
    "Intimate dining at chef-curated restaurants with local specialties",
    "Couples spa treatments and wellness retreats",
    "Photography sessions capturing your journey together",
    "Wine tasting and culinary experiences with local experts",
    "Personalized anniversary and proposal planning",
    "Luxury accommodations with ocean or mountain views",
    "Dedicated concierge for every romantic detail"
  ];

  const soloFeatures = [
    "Carefully curated small group experiences for solo travelers",
    "Safe, culturally-rich destinations perfect for solo exploration",
    "Local guides who become cultural ambassadors and friends",
    "Flexible itineraries that balance group activities and personal time",
    "Connections with like-minded travelers",
    "Women-focused safety protocols and accommodation options",
    "Photography support to capture your adventure",
    "24/7 concierge access for spontaneous discoveries"
  ];

  const experiences = [
    { 
      icon: Heart, 
      title: "Romantic Escapes", 
      description: "Couples retreat to Caribbean paradise",
      price: "From $3,500",
      duration: "5-7 days"
    },
    { 
      icon: Sparkles, 
      title: "Solo Adventures", 
      description: "Cultural immersion for independent travelers",
      price: "From $2,800",
      duration: "7-10 days"
    },
    { 
      icon: Wine, 
      title: "Culinary Journeys", 
      description: "Food and wine experiences across Latin America",
      price: "From $4,200",
      duration: "6-8 days"
    },
    { 
      icon: Camera, 
      title: "Photography Retreats", 
      description: "Capture stunning moments with professional guidance",
      price: "From $3,200",
      duration: "5-7 days"
    }
  ];

  const testimonials = [
    {
      quote: "Our 10th anniversary trip to St. Lucia was absolutely magical. Every detail was perfect—from the private beach dinner to the couples massage overlooking the Pitons. Travelbuff Concierge Services made it effortless.",
      author: "Michael & Sarah Chen",
      trip: "Romantic Escape • St. Lucia"
    },
    {
      quote: "As a solo female traveler, I was nervous about exploring the Caribbean alone. The Travelbuff Concierge Services team connected me with amazing local guides and fellow travelers. I felt safe, empowered, and truly immersed in the culture.",
      author: "Elena Rodriguez",
      trip: "Solo Adventure • Trinidad & Tobago"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
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
            src={romanticImage} 
            alt="Romantic dinner at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-coral-500 uppercase tracking-[2px] text-sm mb-4" data-testid="text-eyebrow">
            SERVICE 02
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6" data-testid="heading-hero">
            Romantic Escapes & Solo Adventures
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-cream-100" data-testid="text-subtitle">
            Whether celebrating love or discovering yourself, experience transformative journeys crafted for couples and independent explorers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={scrollToConsultation}
              className="bg-gold-600 hover:bg-gold-700 text-white"
              data-testid="button-consultation-hero"
            >
              Plan Your Journey
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-10 w-10 text-coral-500" />
                <h2 className="font-serif text-3xl md:text-4xl text-navy-900" data-testid="heading-romantic">
                  For Couples
                </h2>
              </div>
              <p className="text-lg text-navy-700 mb-8">
                Celebrate your love story with unforgettable romantic experiences across the Caribbean and Latin America.
              </p>
              <div className="space-y-4">
                {romanticFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`romantic-feature-${index}`}>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-coral-500 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-navy-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-10 w-10 text-gold-600" />
                <h2 className="font-serif text-3xl md:text-4xl text-navy-900" data-testid="heading-solo">
                  For Solo Travelers
                </h2>
              </div>
              <p className="text-lg text-navy-700 mb-8">
                Embark on transformative solo adventures with the safety, support, and cultural depth you deserve.
              </p>
              <div className="space-y-4">
                {soloFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`solo-feature-${index}`}>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-600 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-navy-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-coral-500 uppercase tracking-[2px] text-sm mb-4" data-testid="text-experiences-eyebrow">
              CURATED EXPERIENCES
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6" data-testid="heading-experiences">
              Popular Packages
            </h2>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              Our signature experiences combine cultural immersion, luxury accommodations, and authentic local connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow" data-testid={`experience-${index}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-gold-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-navy-900 mb-2">{experience.title}</h3>
                      <p className="text-navy-600 mb-4">{experience.description}</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="text-gold-600 font-semibold text-lg">{experience.price}</span>
                        <span className="text-navy-500">{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-navy-600 mb-6">
              All packages include trilingual concierge support, airport transfers, and cultural orientation.
            </p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-gold-600 hover:bg-gold-700 text-white"
              data-testid="button-view-packages"
            >
              Request Custom Package Pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Star className="h-12 w-12 text-gold-600 mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6" data-testid="heading-testimonials">
              Traveler Stories
            </h2>
          </div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-cream-50" data-testid={`testimonial-${index}`}>
                <p className="text-lg text-navy-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-navy-600">{testimonial.trip}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={mountainSunset} 
            alt="Solo traveler at scenic mountain sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Plane className="h-16 w-16 text-gold-400 mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl mb-6" data-testid="heading-cta">
            Your Journey Awaits
          </h2>
          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Share your travel dreams with us. Whether it's a romantic celebration or a solo adventure, we'll craft an experience that exceeds your expectations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white text-lg px-8"
              data-testid="button-consultation-cta"
            >
              Start Planning
            </Button>
            <Link href="/" data-testid="link-home-cta">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
