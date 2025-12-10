import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  MapPin, Star, Bed, Bath, Square, Wifi, Car, Tv, 
  Wind, Coffee, Utensils, ArrowLeft, Calendar, Check
} from "lucide-react";
import { useState } from "react";

import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const apartmentData: Record<string, any> = {
  "downtown-plaza": {
    name: "Downtown Plaza Suite",
    location: "Downtown Plaza, Central City",
    price: 189,
    images: [apartment1, apartment2, apartment3],
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    rating: 4.9,
    reviews: 127,
    description: "Experience luxury urban living in our stunning Downtown Plaza Suite. This spacious apartment offers panoramic city views, modern amenities, and is steps away from the best restaurants, shops, and entertainment venues the city has to offer.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Car, label: "Free Parking" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Coffee, label: "Coffee Machine" },
      { icon: Utensils, label: "Fully Equipped Kitchen" },
    ],
    terms: [
      "Minimum stay: 2 nights",
      "Check-in: 3:00 PM - 10:00 PM",
      "Check-out: 11:00 AM",
      "No smoking",
      "No parties or events",
      "Pets allowed (with prior approval)",
    ],
  },
  "oceanview-heights": {
    name: "Oceanview Heights",
    location: "Coastal District, Seaside",
    price: 249,
    images: [apartment2, apartment1, apartment3],
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    rating: 4.8,
    reviews: 94,
    description: "Wake up to breathtaking ocean views in our premium Oceanview Heights apartment. Featuring a spacious balcony, modern design, and direct beach access, this is the ultimate coastal getaway for those seeking relaxation and luxury.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Car, label: "Free Parking" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Coffee, label: "Coffee Machine" },
      { icon: Utensils, label: "Fully Equipped Kitchen" },
    ],
    terms: [
      "Minimum stay: 3 nights",
      "Check-in: 3:00 PM - 9:00 PM",
      "Check-out: 10:00 AM",
      "No smoking",
      "No parties or events",
      "No pets",
    ],
  },
  "green-valley": {
    name: "Green Valley Residence",
    location: "Green Valley, Suburban Heights",
    price: 159,
    images: [apartment3, apartment1, apartment2],
    bedrooms: 1,
    bathrooms: 1,
    sqft: 850,
    rating: 4.7,
    reviews: 78,
    description: "Escape to tranquility in our cozy Green Valley Residence. Surrounded by lush greenery and natural beauty, this eco-friendly apartment offers a peaceful retreat while still being conveniently close to city amenities.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Car, label: "Free Parking" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Coffee, label: "Coffee Machine" },
      { icon: Utensils, label: "Fully Equipped Kitchen" },
    ],
    terms: [
      "Minimum stay: 1 night",
      "Check-in: 2:00 PM - 11:00 PM",
      "Check-out: 12:00 PM",
      "No smoking",
      "Quiet hours after 10 PM",
      "Pets welcome",
    ],
  },
};

const ApartmentDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const apartment = apartmentData[id || "downtown-plaza"];

  if (!apartment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Apartment not found</h1>
          <Link to="/apartments">
            <Button>Back to Apartments</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <Link to="/apartments" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={20} />
            Back to Apartments
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <AnimatedSection>
                <div className="space-y-4">
                  <div className="aspect-[16/9] rounded-3xl overflow-hidden">
                    <img
                      src={apartment.images[selectedImage]}
                      alt={apartment.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {apartment.images.map((img: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-video rounded-xl overflow-hidden ring-2 transition-all ${
                          selectedImage === index ? "ring-primary" : "ring-transparent hover:ring-primary/50"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Details */}
              <AnimatedSection delay={100}>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <MapPin size={16} />
                      {apartment.location}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">{apartment.name}</h1>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <Star size={18} className="text-primary fill-primary" />
                        <span className="font-semibold">{apartment.rating}</span>
                        <span className="text-muted-foreground">({apartment.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-6 py-6 border-y border-border">
                    <div className="flex items-center gap-2">
                      <Bed size={20} className="text-primary" />
                      <span>{apartment.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath size={20} className="text-primary" />
                      <span>{apartment.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square size={20} className="text-primary" />
                      <span>{apartment.sqft} sqft</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">About this space</h2>
                    <p className="text-muted-foreground leading-relaxed">{apartment.description}</p>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {apartment.amenities.map((amenity: any) => (
                        <div key={amenity.label} className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                          <amenity.icon size={20} className="text-primary" />
                          <span className="text-sm">{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rental Terms */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Rental Terms</h2>
                    <ul className="space-y-2">
                      {apartment.terms.map((term: string) => (
                        <li key={term} className="flex items-center gap-2 text-muted-foreground">
                          <Check size={16} className="text-primary" />
                          {term}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={200}>
                <div className="sticky top-28 bg-card rounded-3xl shadow-card p-6 space-y-6">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-foreground">${apartment.price}</span>
                    <span className="text-muted-foreground">/night</span>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Check-in</label>
                        <div className="relative">
                          <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-secondary border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Check-out</label>
                        <div className="relative">
                          <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-secondary border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Guests</label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Book This Apartment
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    You won't be charged yet
                  </p>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">${apartment.price} x 3 nights</span>
                      <span className="text-foreground">${apartment.price * 3}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Cleaning fee</span>
                      <span className="text-foreground">$50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="text-foreground">$35</span>
                    </div>
                    <div className="flex justify-between font-bold pt-3 border-t border-border">
                      <span>Total</span>
                      <span>${apartment.price * 3 + 50 + 35}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApartmentDetail;
