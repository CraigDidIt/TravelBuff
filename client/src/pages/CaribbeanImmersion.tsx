import { ArrowLeft, Check, Utensils, Music, Palette, Users, Globe, BookOpen } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import cookingImage from "@assets/stock_images/cooking_kitchen_cult_67978ff0.jpg";
import caribbeanBeach from "@assets/stock_images/caribbean_beach_trop_c77c5893.jpg";

export default function CaribbeanImmersion() {
  const [, setLocation] = useLocation();

  const scrollToConsultation = () => {
    setLocation("/#contact");
  };

  const features = [
    "Authentic cooking classes with local chefs using traditional methods",
    "Private access to cultural festivals and community celebrations",
    "Artisan workshop experiences (pottery, weaving, music)",
    "Homestay options with carefully selected local families",
    "Language immersion sessions (Spanish, French Creole, Papiamento)",
    "Historical walking tours led by indigenous historians",
    "Traditional dance and music lessons",
    "Market tours with local food experts"
  ];

  const experiences = [
    { 
      icon: Utensils, 
      title: "Culinary Immersion", 
      description: "Learn authentic Caribbean cooking techniques from local chefs. Visit spice plantations, fish markets, and family-run restaurants.",
      destinations: "Trinidad, Martinique, Jamaica"
    },
    { 
      icon: Music, 
      title: "Music & Dance", 
      description: "Experience the rhythms of the Caribbean through steelpan workshops, calypso sessions, and traditional dance classes.",
      destinations: "Trinidad & Tobago, Barbados"
    },
    { 
      icon: Palette, 
      title: "Artisan Crafts", 
      description: "Work alongside master craftspeople creating traditional pottery, textiles, and artwork using ancestral techniques.",
      destinations: "St. Lucia, Grenada, Dominican Republic"
    },
    { 
      icon: BookOpen, 
      title: "Language & History", 
      description: "Deep dive into Caribbean languages and colonial history with local scholars and storytellers.",
      destinations: "Haiti, Martinique, Curaçao"
    }
  ];

  const itinerarySample = [
    { day: "Day 1-2", activity: "Arrival & Cultural Orientation", description: "Meet your local guide, settle into accommodations, explore neighborhood markets" },
    { day: "Day 3-4", activity: "Culinary Deep Dive", description: "Morning market tours, cooking classes, farm visits, traditional family dinners" },
    { day: "Day 5-6", activity: "Artisan Workshops", description: "Pottery making, textile weaving, wood carving with local masters" },
    { day: "Day 7-8", activity: "Music & Dance Immersion", description: "Steelpan lessons, calypso history, traditional dance workshops" },
    { day: "Day 9-10", activity: "Community Integration", description: "Attend local festivals, church services, community gatherings, farewell celebration" }
  ];

  const destinations = [
    {
      name: "Trinidad & Tobago",
      highlights: ["Steelpan birthplace", "Carnival culture", "Indian-African fusion cuisine"],
      bestFor: "Music & culinary enthusiasts"
    },
    {
      name: "Martinique",
      highlights: ["French Creole language", "Rum distilleries", "Colonial architecture"],
      bestFor: "Language learners & history buffs"
    },
    {
      name: "St. Lucia",
      highlights: ["Creole cooking", "Traditional fishing", "Piton climbing"],
      bestFor: "Culinary & adventure seekers"
    },
    {
      name: "Grenada",
      highlights: ["Spice plantations", "Chocolate making", "Traditional boat building"],
      bestFor: "Agricultural & craft experiences"
    }
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
            src={cookingImage} 
            alt="Traditional Caribbean cooking class"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-coral-500 uppercase tracking-[2px] text-sm mb-4" data-testid="text-eyebrow">
            SERVICE 03
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6" data-testid="heading-hero">
            Caribbean Cultural Immersion
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-cream-100" data-testid="text-subtitle">
            Go beyond tourism. Live, learn, and connect with authentic Caribbean culture through hands-on experiences with local communities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={scrollToConsultation}
              className="bg-gold-600 hover:bg-gold-700 text-white"
              data-testid="button-consultation-hero"
            >
              Start Your Immersion
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
            <p className="text-coral-500 uppercase tracking-[2px] text-sm mb-4" data-testid="text-what-eyebrow">
              AUTHENTIC CONNECTIONS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6" data-testid="heading-what">
              What Cultural Immersion Means
            </h2>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              This isn't observation from a distance—it's participation, learning, and genuine connection with Caribbean communities. Our local partners welcome you as a cultural student, not just a tourist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6" data-testid="heading-experiences">
              Immersion Experiences
            </h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Choose your cultural focus or combine multiple experiences for a comprehensive journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow" data-testid={`experience-${index}`}>
                  <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-gold-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy-900 mb-3">{experience.title}</h3>
                  <p className="text-navy-700 mb-4 leading-relaxed">{experience.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-navy-500">
                      <strong className="text-navy-700">Available in:</strong> {experience.destinations}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6" data-testid="heading-itinerary">
              Sample 10-Day Itinerary
            </h2>
            <p className="text-xl text-cream-100 max-w-2xl mx-auto">
              A typical cultural immersion journey (fully customizable to your interests).
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {itinerarySample.map((item, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur border-white/20" data-testid={`itinerary-${index}`}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gold-400 text-sm mb-1">{item.day}</p>
                    <h3 className="font-serif text-xl mb-2">{item.activity}</h3>
                    <p className="text-cream-100">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-cream-100 mb-6">
              Pricing: From $3,800 per person (10 days, all-inclusive with accommodations, experiences, meals, and trilingual guide)
            </p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-gold-600 hover:bg-gold-700 text-white"
              data-testid="button-customize-itinerary"
            >
              Customize Your Itinerary
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Globe className="h-12 w-12 text-gold-600 mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6" data-testid="heading-destinations">
              Featured Destinations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((dest, index) => (
              <Card key={index} className="p-8" data-testid={`destination-${index}`}>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">{dest.name}</h3>
                <div className="mb-4">
                  <p className="text-sm text-navy-500 uppercase tracking-wide mb-2">Cultural Highlights</p>
                  <div className="space-y-2">
                    {dest.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                        <p className="text-navy-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-navy-500">
                    <strong className="text-navy-700">Best for:</strong> {dest.bestFor}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={caribbeanBeach} 
            alt="Caribbean cultural celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Users className="h-16 w-16 text-gold-400 mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl mb-6" data-testid="heading-cta">
            Become Part of the Story
          </h2>
          <p className="text-xl text-cream-100 mb-8 max-w-2xl mx-auto">
            Cultural immersion changes how you see the world—and yourself. Let us connect you with the vibrant communities, traditions, and wisdom of the Caribbean.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white text-lg px-8"
              data-testid="button-consultation-cta"
            >
              Begin Your Cultural Journey
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
