import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  Users, Fuel, Gauge, ArrowLeft, Calendar, Check,
  Snowflake, Radio, Shield, Navigation
} from "lucide-react";
import { useState } from "react";

import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";

const carData: Record<string, any> = {
  "executive-sedan": {
    name: "Executive Sedan",
    type: "Luxury",
    pricePerDay: 89,
    pricePerWeek: 499,
    images: [car1, car2, car3],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    description: "The Executive Sedan combines elegance with performance. Perfect for business trips or special occasions, this luxury vehicle offers premium comfort, advanced technology, and a smooth, powerful ride.",
    features: [
      { icon: Snowflake, label: "Climate Control" },
      { icon: Radio, label: "Premium Sound System" },
      { icon: Shield, label: "Advanced Safety" },
      { icon: Navigation, label: "GPS Navigation" },
    ],
    specs: [
      { label: "Engine", value: "3.0L V6" },
      { label: "Power", value: "350 HP" },
      { label: "0-60 mph", value: "5.2 sec" },
      { label: "Fuel Economy", value: "28 mpg" },
    ],
  },
  "premium-suv": {
    name: "Premium SUV",
    type: "SUV",
    pricePerDay: 129,
    pricePerWeek: 699,
    images: [car2, car1, car4],
    seats: 7,
    transmission: "Automatic",
    fuelType: "Hybrid",
    description: "Our Premium SUV offers the perfect blend of space, comfort, and efficiency. With seating for seven and hybrid technology, it's ideal for family adventures or group travels while being environmentally conscious.",
    features: [
      { icon: Snowflake, label: "Tri-Zone Climate" },
      { icon: Radio, label: "Premium Sound System" },
      { icon: Shield, label: "360° Camera" },
      { icon: Navigation, label: "GPS Navigation" },
    ],
    specs: [
      { label: "Engine", value: "2.5L Hybrid" },
      { label: "Power", value: "295 HP" },
      { label: "0-60 mph", value: "6.8 sec" },
      { label: "Fuel Economy", value: "38 mpg" },
    ],
  },
  "sport-coupe": {
    name: "Sport Coupe",
    type: "Sports",
    pricePerDay: 199,
    pricePerWeek: 999,
    images: [car3, car1, car2],
    seats: 2,
    transmission: "Manual",
    fuelType: "Petrol",
    description: "Feel the thrill of pure performance with our Sport Coupe. This head-turning machine delivers exhilarating acceleration, precise handling, and an unforgettable driving experience for those who crave excitement.",
    features: [
      { icon: Snowflake, label: "Sport Climate" },
      { icon: Radio, label: "Bose Sound System" },
      { icon: Shield, label: "Track Mode" },
      { icon: Navigation, label: "Racing Display" },
    ],
    specs: [
      { label: "Engine", value: "4.0L Twin-Turbo" },
      { label: "Power", value: "500 HP" },
      { label: "0-60 mph", value: "3.4 sec" },
      { label: "Top Speed", value: "198 mph" },
    ],
  },
  "electric-cruiser": {
    name: "Electric Cruiser",
    type: "Electric",
    pricePerDay: 99,
    pricePerWeek: 549,
    images: [car4, car2, car1],
    seats: 5,
    transmission: "Automatic",
    fuelType: "Electric",
    description: "Experience the future of driving with our Electric Cruiser. Zero emissions, instant torque, and cutting-edge technology make every journey smooth, quiet, and environmentally responsible.",
    features: [
      { icon: Snowflake, label: "Heat Pump Climate" },
      { icon: Radio, label: "Immersive Audio" },
      { icon: Shield, label: "Autopilot Ready" },
      { icon: Navigation, label: "Smart Navigation" },
    ],
    specs: [
      { label: "Range", value: "350 miles" },
      { label: "Power", value: "400 HP" },
      { label: "0-60 mph", value: "4.2 sec" },
      { label: "Charging", value: "30 min (80%)" },
    ],
  },
};

const CarDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [rentalType, setRentalType] = useState<"daily" | "weekly">("daily");

  const car = carData[id || "executive-sedan"];

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle not found</h1>
          <Link to="/cars">
            <Button>Back to Cars</Button>
          </Link>
        </div>
      </div>
    );
  }

  const price = rentalType === "daily" ? car.pricePerDay : car.pricePerWeek;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <Link to="/cars" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={20} />
            Back to Cars
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <AnimatedSection>
                <div className="space-y-4">
                  <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-secondary">
                    <img
                      src={car.images[selectedImage]}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {car.images.map((img: string, index: number) => (
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
                    <span className="inline-block px-4 py-1 rounded-full bg-foreground text-primary-foreground text-sm font-semibold mb-3">
                      {car.type}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">{car.name}</h1>
                  </div>

                  {/* Quick Specs */}
                  <div className="flex flex-wrap gap-6 py-6 border-y border-border">
                    <div className="flex items-center gap-2">
                      <Users size={20} className="text-primary" />
                      <span>{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge size={20} className="text-primary" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel size={20} className="text-primary" />
                      <span>{car.fuelType}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">About this vehicle</h2>
                    <p className="text-muted-foreground leading-relaxed">{car.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Features</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {car.features.map((feature: any) => (
                        <div key={feature.label} className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                          <feature.icon size={20} className="text-primary" />
                          <span className="text-sm">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Specifications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {car.specs.map((spec: any) => (
                        <div key={spec.label} className="text-center p-4 rounded-xl bg-secondary">
                          <div className="text-2xl font-bold text-primary">{spec.value}</div>
                          <div className="text-sm text-muted-foreground mt-1">{spec.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={200}>
                <div className="sticky top-28 bg-card rounded-3xl shadow-card p-6 space-y-6">
                  {/* Price Toggle */}
                  <div className="flex bg-secondary rounded-xl p-1">
                    <button
                      onClick={() => setRentalType("daily")}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                        rentalType === "daily" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      Daily
                    </button>
                    <button
                      onClick={() => setRentalType("weekly")}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                        rentalType === "weekly" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      Weekly
                    </button>
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-foreground">${price}</span>
                    <span className="text-muted-foreground">/{rentalType === "daily" ? "day" : "week"}</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Pick-up Date</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="date"
                          value={pickupDate}
                          onChange={(e) => setPickupDate(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-secondary border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">Return Date</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-secondary border-0 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Rent This Car
                  </Button>

                  <div className="space-y-2 pt-4 border-t border-border">
                    {[
                      "Free cancellation up to 24h",
                      "Unlimited mileage",
                      "Full insurance included",
                      "24/7 roadside assistance",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary" />
                        {item}
                      </div>
                    ))}
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

export default CarDetail;
