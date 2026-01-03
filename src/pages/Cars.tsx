import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CarCard } from "@/components/CarCard";
import { Search, SlidersHorizontal, CarFront } from "lucide-react";
import { useState } from "react";

import kiaSorentoBlack from "@/assets/kia-sorento-black.jpg";
import kiaSorentoGrey from "@/assets/kia-sorento-grey.jpg";
import kiaSorentoSilver from "@/assets/kia-sorento-silver.jpg";

const cars = [
  {
    id: "kia-sorento-black",
    name: "Kia Sorento 2012 Black",
    type: "SUV",
    price: 75,
    image: kiaSorentoBlack,
    seats: 7,
    transmission: "Auto",
    fuelType: "Petrol",
  },
  {
    id: "kia-sorento-grey",
    name: "Kia Sorento 2012 Grey",
    type: "SUV",
    price: 75,
    image: kiaSorentoGrey,
    seats: 7,
    transmission: "Auto",
    fuelType: "Petrol",
  },
  {
    id: "kia-sorento-silver",
    name: "Kia Sorento 2012 Silver",
    type: "SUV",
    price: 75,
    image: kiaSorentoSilver,
    seats: 7,
    transmission: "Auto",
    fuelType: "Petrol",
  },
];

const carTypes = ["All Types", "SUV"];

const Cars = () => {
  const [selectedType, setSelectedType] = useState("All Types");

  const filteredCars = cars.filter((car) => {
    return selectedType === "All Types" || car.type === selectedType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold">Our Fleet</span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">
                Choose Your
                <span className="text-gradient"> Perfect Ride</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                From luxury sedans to eco-friendly electric vehicles, 
                find the perfect car for your journey.
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
                    placeholder="Search vehicles..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Type Filter */}
                <div className="relative">
                  <CarFront className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="pl-12 pr-8 py-3 rounded-xl bg-secondary border-0 text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {carTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
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

      {/* Cars Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredCars.length}</span> vehicles
            </p>
            <select className="px-4 py-2 rounded-lg bg-secondary border-0 text-foreground text-sm focus:outline-none">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <AnimatedSection key={car.id} delay={index * 100}>
                <CarCard {...car} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cars;
