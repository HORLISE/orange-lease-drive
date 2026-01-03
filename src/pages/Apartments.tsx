import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ApartmentCard } from "@/components/ApartmentCard";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import { useState } from "react";

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
    amenities: ["Free WiFi", "Balcony", "Terrace"],
  },
  {
    id: "chateau-mignon",
    name: "Château Mignon",
    location: "Coastal District",
    price: 249,
    image: apartmentProfile2,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Free WiFi", "Balcony", "Terrace"],
  },
];

const locations = ["All Locations", "Downtown Plaza", "Coastal District", "Green Valley"];

const Apartments = () => {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [priceRange, setPriceRange] = useState([0, 500]);

  const filteredApartments = apartments.filter((apt) => {
    const locationMatch = selectedLocation === "All Locations" || apt.location === selectedLocation;
    const priceMatch = apt.price >= priceRange[0] && apt.price <= priceRange[1];
    return locationMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold">Our Properties</span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">
                Find Your Perfect
                <span className="text-gradient"> Apartment</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Explore our collection of premium apartments across three prime locations. 
                Each property offers unique amenities and stunning views.
              </p>
            </div>
          </AnimatedSection>

          {/* Search & Filters */}
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-3xl shadow-card p-6 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search apartments..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Location Filter */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-12 pr-8 py-3 rounded-xl bg-secondary border-0 text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                {/* Filter Button */}
                <Button variant="default" className="gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredApartments.length}</span> apartments
            </p>
            <select className="px-4 py-2 rounded-lg bg-secondary border-0 text-foreground text-sm focus:outline-none">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApartments.map((apartment, index) => (
              <AnimatedSection key={apartment.id} delay={index * 100}>
                <ApartmentCard {...apartment} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apartments;
