import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "250780399998";
  const phoneDigits = whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappMessage = "Hello! I'm interested in your apartments and car rental services.";
  const encodedText = encodeURIComponent(whatsappMessage);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const whatsappLink = isMobile
    ? `https://wa.me/${phoneDigits}?text=${encodedText}`
    : `https://web.whatsapp.com/send?phone=${phoneDigits}&text=${encodedText}`;

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
                Reach out and we'll respond as soon as possible.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                      title: "Phone",
                      content: "+1 (234) 567-890",
                      subtitle: "Mon-Fri from 8am to 6pm",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "hello@primestay.com",
                      subtitle: "We'll respond within 24 hours",
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
                      subtitle: "Office: Mon-Fri 8am-6pm",
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

            {/* WhatsApp Contact */}
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-3xl shadow-card p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Chat with us on WhatsApp</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Get instant responses! Message us directly on WhatsApp for quick inquiries about apartments, car rentals, or any questions.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg" className="bg-green-500 hover:bg-green-600">
                    <MessageCircle className="w-5 h-5" />
                    Start WhatsApp Chat
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-6">
                  Available 24/7 • Usually replies within minutes
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
