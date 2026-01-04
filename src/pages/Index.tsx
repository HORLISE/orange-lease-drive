import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ApartmentCard } from "@/components/ApartmentCard";
import { CarCard } from "@/components/CarCard";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, CarFront, Shield, Clock, Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-main.jpg";
import apartmentProfile1 from "@/assets/apartment-profile-1.jpg";
import apartmentProfile2 from "@/assets/apartment-profile-2.jpg";
import kiaSorentoBlack from "@/assets/kia-sorento-black.jpg";
import kiaSorentoGrey from "@/assets/kia-sorento-grey.jpg";

const apartments = [
  {
    id: "chateau-mignon",
    name: "Château Mignon",
    location: "KK 5 Ave, Kigali",
    price: 249,
    image: apartmentProfile1,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Free WiFi", "Balcony", "Terrace"],
  },
  {
    id: "la-casa",
    name: "La Casa",
    location: "Downtown Plaza",
    price: 189,
    image: apartmentProfile2,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Free WiFi", "Balcony", "Terrace"],
  },
];

const cars = [
  {
    id: "kia-sorento-black",
    name: "Kia Sorento 2012",
    type: "SUV",
    price: 89,
    image: kiaSorentoBlack,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    featured: true,
  },
  {
    id: "kia-sorento-grey",
    name: "Kia Sorento 2012",
    type: "SUV",
    price: 89,
    image: kiaSorentoGrey,
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
  },
];

const features = [
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Every property and vehicle is verified for your safety and peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it, wherever you are.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Handpicked apartments and vehicles meeting the highest standards.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury apartment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-6 pt-24">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30 animate-fade-up">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary-foreground text-sm font-medium">Premium Living & Mobility</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up stagger-1">
                Welcome to
                <span className="block text-gradient">Mighty Love Inn</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/80 max-w-lg animate-fade-up stagger-2">
                Experience luxury apartments and premium vehicles, all in one seamless platform. Your journey to comfort starts here.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Link to="/apartments">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  <Building2 className="w-5 h-5" />
                  Browse Apartments
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/cars">
                <Button variant="heroOutline" size="xl" className="group w-full sm:w-auto">
                  <CarFront className="w-5 h-5" />
                  Rent a Car
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20 animate-fade-up stagger-4">
              {[
                { value: "2", label: "Premium Buildings" },
                { value: "2", label: "Luxury Vehicles" },
                { value: "100+", label: "Happy Guests" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-primary-foreground/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-8 rounded-3xl bg-card shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Apartments Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
              <div>
                <span className="text-primary font-semibold">Our Properties</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                  Premium Apartments
                </h2>
                <p className="text-muted-foreground mt-3 max-w-lg">
                  Discover our handpicked selection of luxury apartments.
                </p>
              </div>
              <Link to="/apartments">
                <Button variant="outline" className="group">
                  View All
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {apartments.map((apartment, index) => (
              <AnimatedSection key={apartment.id} delay={index * 100}>
                <ApartmentCard {...apartment} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
              <div>
                <span className="text-primary font-semibold">Our Fleet</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                  Luxury Vehicles
                </h2>
                <p className="text-muted-foreground mt-3 max-w-lg">
                  Reliable Kia Sorento 2012 SUVs for your comfortable travels.
                </p>
              </div>
              <Link to="/cars">
                <Button variant="outline" className="group">
                  View All
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {cars.map((car, index) => (
              <AnimatedSection key={car.id} delay={index * 100}>
                <CarCard {...car} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Experience
                <span className="text-primary"> Premium Living?</span>
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                Book your perfect apartment or vehicle today and enjoy a seamless, luxury experience from start to finish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apartments">
                  <Button variant="hero" size="lg" className="group">
                    <Building2 className="w-5 h-5" />
                    Browse Apartments
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/cars">
                  <Button variant="heroOutline" size="lg" className="group">
                    <CarFront className="w-5 h-5" />
                    Rent a Car
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
