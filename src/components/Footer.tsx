import { Link } from "react-router-dom";
import { Building2, Car, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">Mighty Love Inn</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium apartments and vehicles for your perfect stay. Experience luxury living and seamless mobility under one roof.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Browse Apartments", href: "/apartments", icon: Building2 },
                { label: "Rent a Car", href: "/cars", icon: Car },
                { label: "About Us", href: "/about", icon: null },
                { label: "Contact", href: "/contact", icon: null },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.icon && <link.icon size={16} />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Locations</h4>
            <ul className="space-y-3">
              {["Downtown Plaza", "Oceanview Heights", "Green Valley"].map((location) => (
                <li key={location} className="flex items-center gap-2 text-primary-foreground/70">
                  <MapPin size={16} className="text-primary" />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors duration-300">
                  <Phone size={16} className="text-primary" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:hello@mightyloveinn.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors duration-300">
                  <Mail size={16} className="text-primary" />
                  hello@mightyloveinn.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Mighty Love Inn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
