import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  MapPin, Bed, Bath, Wifi, CarFront, Tv, 
  Utensils, ArrowLeft, Calendar, Check, Play
} from "lucide-react";
import { useState } from "react";

import apartmentProfile1 from "@/assets/apartment-profile-1.jpg";
import apartmentProfile2 from "@/assets/apartment-profile-2.jpg";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";

const apartmentData: Record<string, any> = {
  "chateau-mignon": {
    name: "Château Mignon",
    location: "KK 5 Ave, Kigali",
    pricePerDay: 50,
    pricePerWeek: 300,
    pricePerMonth: 1000,
    images: [apartmentProfile1, apartment1, apartment2],
    videoUrl: "https://player.vimeo.com/video/824804225?h=c4f3cd6b4f&autoplay=1&muted=1",
    bedrooms: 3,
    bathrooms: 2,
    description: "Experience luxury living in our stunning Château Mignon. This spacious apartment offers panoramic views, modern amenities, and is perfectly located in KK 5 Ave, Kigali.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: CarFront, label: "Free Parking" },
      { icon: Tv, label: "Smart TV" },
      { icon: Utensils, label: "Fully Equipped Kitchen" },
    ],
    terms: [
      "No smoking",
      "No parties or events",
      "Pets allowed (with prior approval)",
      "Quiet hours after 10 PM",
      "Valid ID required at check-in",
    ],
  },
  "la-casa": {
    name: "La Casa",
    location: "Downtown Plaza",
    pricePerDay: 40,
    pricePerWeek: 250,
    pricePerMonth: 800,
    images: [apartmentProfile2, apartment2, apartment3],
    videoUrl: "https://player.vimeo.com/video/824804225?h=c4f3cd6b4f&autoplay=1&muted=1",
    bedrooms: 2,
    bathrooms: 2,
    description: "A cozy and modern apartment in the heart of Downtown Plaza. Perfect for couples or small families looking for a stylish urban retreat with all the essentials.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: CarFront, label: "Free Parking" },
      { icon: Tv, label: "Smart TV" },
      { icon: Utensils, label: "Fully Equipped Kitchen" },
    ],
    terms: [
      "No smoking",
      "No parties or events",
      "Pets welcome",
      "Quiet hours after 10 PM",
      "Valid ID required at check-in",
    ],
  },
  "downtown-plaza": {
    name: "Downtown Plaza Suite",
    location: "Downtown Plaza",
    pricePerDay: 40,
    pricePerWeek: 250,
    pricePerMonth: 800,
    images: [apartmentProfile2, apartment1, apartment3],
    videoUrl: "https://player.vimeo.com/video/824804225?h=c4f3cd6b4f&autoplay=1&muted=1",
    bedrooms: 2,
    bathrooms: 2,
    description: "Experience luxury urban living in our stunning Downtown Plaza Suite. This spacious apartment offers city views, modern amenities, and is steps away from the best restaurants and shops.",
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: CarFront, label: "Free Parking" },
      { icon: Tv, label: "Smart TV" },
      { icon: Utensils, label: "Fully Equipped Kitchen" },
    ],
    terms: [
      "No smoking",
      "No parties or events",
      "Pets allowed (with prior approval)",
      "Quiet hours after 10 PM",
      "Valid ID required at check-in",
    ],
  },
};

type PricingPeriod = "day" | "week" | "month";

const ApartmentDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [showVideo, setShowVideo] = useState(false);
  const [pricingPeriod, setPricingPeriod] = useState<PricingPeriod>("day");

  const apartment = apartmentData[id || "chateau-mignon"];

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

  const getPriceForPeriod = () => {
    switch (pricingPeriod) {
      case "day":
        return apartment.pricePerDay;
      case "week":
        return apartment.pricePerWeek;
      case "month":
        return apartment.pricePerMonth;
      default:
        return apartment.pricePerDay;
    }
  };

  const getPeriodLabel = () => {
    switch (pricingPeriod) {
      case "day":
        return "day";
      case "week":
        return "week";
      case "month":
        return "month";
      default:
        return "day";
    }
  };

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
              {/* Video Section */}
              <AnimatedSection>
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-3xl overflow-hidden bg-secondary group">
                    {showVideo ? (
                      <iframe
                        src={apartment.videoUrl}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={apartment.images[0]}
                          alt={`${apartment.name} video thumbnail`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                          <button
                            onClick={() => setShowVideo(true)}
                            className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300"
                          >
                            <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
                          </button>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl px-4 py-2">
                          <span className="text-sm font-medium text-foreground">Watch Property Tour</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Image Gallery */}
              <AnimatedSection delay={100}>
                <div className="space-y-4">
                  <div className="aspect-[16/9] rounded-3xl overflow-hidden">
                    <img
                      src={apartment.images[selectedImage]}
                      alt={apartment.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {apartment.images.map((img: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-video rounded-xl overflow-hidden ring-2 transition-all duration-300 hover:scale-105 ${
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
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                      <MapPin size={16} />
                      {apartment.location}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">{apartment.name}</h1>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-6 py-6 border-y border-border">
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Bed size={20} className="text-primary" />
                      <span>{apartment.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Bath size={20} className="text-primary" />
                      <span>{apartment.bathrooms} Bathrooms</span>
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
                      {apartment.amenities.map((amenity: any, index: number) => (
                        <div 
                          key={amenity.label} 
                          className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-primary/10 transition-colors duration-300"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
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
                      {apartment.terms.map((term: string, index: number) => (
                        <li 
                          key={term} 
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
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
              <AnimatedSection delay={300}>
                <div className="sticky top-28 bg-card rounded-3xl shadow-card p-6 space-y-6">
                  {/* Pricing Period Tabs */}
                  <div className="flex rounded-xl bg-secondary p-1">
                    {(["day", "week", "month"] as PricingPeriod[]).map((period) => (
                      <button
                        key={period}
                        onClick={() => setPricingPeriod(period)}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          pricingPeriod === period
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {period.charAt(0).toUpperCase() + period.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-foreground">${getPriceForPeriod()}</span>
                    <span className="text-muted-foreground">/ {getPeriodLabel()}</span>
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
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-secondary border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
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
                            className="w-full pl-10 pr-3 py-3 rounded-xl bg-secondary border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Guests</label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/250788595534"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="hero" size="lg" className="w-full">
                      Book This Apartment
                    </Button>
                  </a>

                  <p className="text-center text-sm text-muted-foreground">
                    You won't be charged yet
                  </p>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">${getPriceForPeriod()} x 1 {getPeriodLabel()}</span>
                      <span className="text-foreground">${getPriceForPeriod()}</span>
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
                      <span>${getPriceForPeriod() + 50 + 35}</span>
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
