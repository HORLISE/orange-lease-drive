import { Link } from "react-router-dom";
import { MapPin, Star, Bed, Bath, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApartmentCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  rating: number;
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
  sqft,
  rating,
  featured = false,
}: ApartmentCardProps) => {
  return (
    <Link
      to={`/apartments/${id}`}
      className={cn(
        "group block rounded-3xl overflow-hidden bg-card shadow-card hover-lift transition-all duration-500",
        featured && "md:col-span-2 md:row-span-2"
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-soft">
          <Star size={14} className="text-primary fill-primary" />
          <span className="text-sm font-semibold text-foreground">{rating}</span>
        </div>
        
        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="font-bold text-lg">${price}</span>
          <span className="text-primary-foreground/80 text-sm">/night</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
            <MapPin size={14} className="text-primary" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-3 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bed size={16} />
            <span className="text-sm">{bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Bath size={16} />
            <span className="text-sm">{bathrooms} bath</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Square size={16} />
            <span className="text-sm">{sqft} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
