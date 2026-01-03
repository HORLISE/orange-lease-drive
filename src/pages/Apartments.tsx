import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin, Bed, Bath, Wifi, Building2, Users, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import apartmentProfile1 from "@/assets/apartment-profile-1.jpg";
import apartmentProfile2 from "@/assets/apartment-profile-2.jpg";

const apartments = [
  {
    id: "downtown-plaza",
    name: "Downtown Plaza Suite",
    location: "Downtown Plaza",
    price: 189,
    image: apartmentProfile1,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Free WiFi", "Balcony"],
    units: 12,
    description: "Modern suites in the heart of downtown with stunning city views and premium finishes.",
  },
  {
    id: "chateau-mignon",
    name: "Château Mignon",
    location: "Coastal District",
    price: 249,
    image: apartmentProfile2,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Free WiFi", "Balcony"],
    units: 8,
    description: "Elegant coastal living with breathtaking ocean views and French-inspired architecture.",
  },
];

const highlights = [
  { icon: Building2, label: "2 Premium Properties" },
  { icon: Users, label: "20+ Available Units" },
  { icon: Star, label: "5-Star Amenities" },
  { icon: CheckCircle, label: "Flexible Booking" },
];

const Apartments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Premium Rentals
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-6">
                Find Your Perfect
                <span className="text-gradient block mt-2">Home Away From Home</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose from our two exclusive properties, each offering multiple beautifully designed units 
                with premium amenities and prime locations.
              </p>
            </div>
          </AnimatedSection>

          {/* Highlights Bar */}
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Properties
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Two distinctive buildings, each with its own character and multiple units to choose from.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {apartments.map((apartment, index) => (
              <AnimatedSection key={apartment.id} delay={index * 150}>
                <Link
                  to={`/apartments/${apartment.id}`}
                  className="group block rounded-3xl overflow-hidden bg-card shadow-card hover-lift transition-all duration-500"
                >
                  {/* Large Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={apartment.image}
                      alt={apartment.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-2 text-primary-foreground/90 mb-2">
                        <MapPin size={16} />
                        <span className="text-sm">{apartment.location}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                        {apartment.name}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm md:text-base mb-4 max-w-md">
                        {apartment.description}
                      </p>
                      
                      {/* Stats Row */}
                      <div className="flex flex-wrap items-center gap-4 text-primary-foreground/90">
                        <div className="flex items-center gap-1.5">
                          <Bed size={16} />
                          <span className="text-sm">{apartment.bedrooms} beds</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bath size={16} />
                          <span className="text-sm">{apartment.bathrooms} bath</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Building2 size={16} />
                          <span className="text-sm">{apartment.units} units available</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price Tag */}
                    <div className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-lg">
                      <span className="text-sm">From </span>
                      <span className="font-bold text-xl">${(apartment.price * 30).toLocaleString()}</span>
                      <span className="text-primary-foreground/80 text-sm"> / month</span>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="p-6 flex items-center justify-between bg-card border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {apartment.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground"
                        >
                          {amenity === "Free WiFi" && <Wifi size={14} />}
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <Button variant="default" className="group-hover:bg-primary/90">
                      View Details
                    </Button>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Book Your Stay?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact us via WhatsApp to check availability and secure your perfect apartment today.
              </p>
              <a
                href="https://wa.me/250780399998"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 text-lg px-8 py-6 rounded-2xl pulse">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contact Us on WhatsApp
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apartments;
