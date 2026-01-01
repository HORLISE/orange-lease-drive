import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  // Static WhatsApp deep link - NO API, just a plain URL
  const whatsappUrl = "https://wa.me/250780399998?text=Hello%20Mighty%20Love%20Inn%2C%20I%20am%20interested%20in%20your%20apartments%20or%20car%20rentals.";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold">Get in Touch</span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-2 mb-4">
                Contact
                <span className="text-gradient"> Us</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Have questions about our apartments or vehicles? We're here to help.
                Reach out via WhatsApp for instant support.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h2>
                  <p className="text-muted-foreground">
                    Whether you're looking to book a luxury apartment, rent a premium vehicle, 
                    or have any questions, our team is ready to assist you 24/7.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "WhatsApp",
                      content: "+250 780 399 998",
                      subtitle: "Instant replies • Available 24/7",
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      content: "123 Business Avenue",
                      subtitle: "Central City, CC 10001",
                    },
                    {
                      icon: Clock,
                      title: "Working Hours",
                      content: "24/7 Customer Support",
                      subtitle: "Always here for you",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-foreground">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* WhatsApp CTA Section */}
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-3xl shadow-card p-8 md:p-12 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6 animate-pulse-soft">
                    <MessageCircle className="w-10 h-10 text-[#25D366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Chat with us on WhatsApp</h2>
                  <p className="text-muted-foreground mb-2">+250 780 399 998</p>
                  <p className="text-sm text-muted-foreground">
                    Instant support for apartments & car rentals
                  </p>
                </div>

                {/* Static anchor link - NO API */}
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="w-full whatsapp-cta-pulse group"
                  >
                    <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    Start WhatsApp Chat
                  </Button>
                </a>

                <p className="text-xs text-muted-foreground mt-4">
                  Opens WhatsApp directly in a new tab
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button - Static link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      <Footer />
    </div>
  );
};

export default Contact;
