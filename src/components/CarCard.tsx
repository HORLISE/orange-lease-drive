import { Link } from "react-router-dom";
import { Fuel, Users, Gauge, CarFront } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarCardProps {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  fuelType: string;
  featured?: boolean;
}

export const CarCard = ({
  id,
  name,
  type,
  price,
  image,
  seats,
  transmission,
  fuelType,
  featured = false,
}: CarCardProps) => {
  // Calculate monthly price (price * 30 days)
  const monthlyPrice = price * 30;
  
  return (
    <Link
      to={`/cars/${id}`}
      className={cn(
        "group block rounded-3xl overflow-hidden bg-card shadow-card hover-lift transition-all duration-500",
        featured && "md:col-span-2"
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-secondary/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 bg-foreground text-primary-foreground rounded-full px-4 py-1.5 text-sm font-semibold flex items-center gap-1.5">
          <CarFront size={14} />
          {type}
        </div>
        
        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-lg">
          <span className="font-bold text-lg">${monthlyPrice.toLocaleString()}</span>
          <span className="text-primary-foreground/80 text-sm"> / month</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-3 border-t border-border">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users size={16} />
            <span className="text-sm">{seats} seats</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Gauge size={16} />
            <span className="text-sm">{transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Fuel size={16} />
            <span className="text-sm">{fuelType}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
