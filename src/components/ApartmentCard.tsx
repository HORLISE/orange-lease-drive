import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Wifi, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ApartmentCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  amenities?: string[];
  featured?: boolean;
}

export const ApartmentCard = ({
  id,
  name,
  location,
  price,
  image,
  bedrooms,
  bathrooms,
  amenities = [],
  featured = false,
}: ApartmentCardProps) => {
  // Calculate monthly price (price * 30 days)
  const monthlyPrice = price * 30;
  
  return (
    <div
      className={cn(
        "group rounded-3xl overflow-hidden bg-card shadow-card hover-lift transition-all duration-500",
        featured && "md:col-span-2 md:row-span-2"
      )}
    >
      {/* Image */}
      <Link to={`/apartments/${id}`} className="block relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg">
          <span className="font-bold text-lg">${monthlyPrice.toLocaleString()}</span>
          <span className="text-primary-foreground/80 text-sm"> / month</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
            <MapPin size={14} className="text-primary" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground"
              >
                {amenity === "Free WiFi" && <Wifi size={14} />}
                {amenity}
              </span>
            ))}
          </div>
        )}

        {/* Features */}
        <div className="flex items-center gap-4 pt-3 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bed size={18} />
            <span className="text-sm">{bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bath size={18} />
            <span className="text-sm">{bathrooms} bath</span>
          </div>
        </div>

        {/* View Details Button */}
        <Link to={`/apartments/${id}`} className="block pt-2">
          <Button variant="outline" className="w-full group/btn">
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
