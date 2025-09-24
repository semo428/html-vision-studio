import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronUp,
  Linkedin,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";

import { LoadingScreen } from "@/components/LoadingScreen";
import { Particles } from "@/components/Particles";
import { Navigation } from "@/components/Navigation";
import { AIBot } from "@/components/AIBot";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihr Interesse. Wir melden uns bald bei Ihnen.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const teamMembers = [
    {
      name: "Alexander",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHjXuptSPqOwA/profile-displayphoto-shrink_200_200/B56ZSt6YGfGUAY-/0/1738084549517?e=2147483647&v=beta&t=XJ_JFVA22sOPzLnGG2OMXZPrKEFXK-VlGkF8BuT4NKM",
      bio: "Alex studiert Wirtschaftsingenieurwesen im 7. Semester an der Hochschule Albstadt-Sigmaringen und schreibt seine Bachelorarbeit über das Potenzial und Etablieren von KI-Agenten in einem Globalplayer. Neben dem Studium sammelte er in einem weltführenden Industrieunternehmen wertvolle Praxiserfahrung im Bereich Datenverarbeitung und -visualisierung."
    },
    {
      name: "Semih",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHg-0XjOIFD7w/profile-displayphoto-scale_400_400/B4EZltXtwUIMAg-/0/1758476558201?e=1761177600&v=beta&t=oMkp-uhT3oIDEoIJnHSUXdcgsFFvgttm6c2MnFJbtBw",
      bio: "Semih befindet sich im 7. Semester des Wirtschaftsingenieurwesens an der Hochschule Albstadt-Sigmaringen und verfasst seine Bachelorarbeit rund um die Chancen und Herausforderungen von KI-Agenten. Durch seine Tätigkeit in einem internationalen Großkonzern der Automobilbranche gewann er umfassende Erfahrung in Projektleitung und Entwicklung."
    }
  ];

  return (
    <>
      <LoadingScreen />
      <Particles />
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
          <div className="container mx-auto text-center">
            <AIBot />
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight px-4">
              KI-Agenten der Zukunft
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Revolutioniere dein Business mit intelligenten KI-Agenten und RAG-Chatbots, 
              die 24/7 für dich arbeiten!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="animate-pulse-glow-slow min-w-48"
              >
                Jetzt starten
              </Button>
              
              <Link to="/services">
                <Button 
                  variant="glassmorphism" 
                  size="xl"
                  className="min-w-48"
                >
                  Unsere Services
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                  <p className="text-muted-foreground">Verfügbarkeit</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">300%</div>
                  <p className="text-muted-foreground">Effizienzsteigerung</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">DSGVO</div>
                  <p className="text-muted-foreground">Konform & Sicher</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                Über uns
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Lernen Sie das Team hinter ASK CONNECT kennen. Wir sind Experten für 
                KI-Agenten und RAG-Chatbots mit umfassender Erfahrung in der Industrie.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="glow-on-hover bg-card/50 backdrop-blur-sm border-accent/20">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-primary/30 flex-shrink-0"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                          {member.name}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 md:mt-16">
              <p className="text-lg text-muted-foreground mb-6">
                Neugierig auf unsere Services und wie wir Ihnen helfen können?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <Button variant="gradient" size="lg" className="min-w-48">
                    Services entdecken
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="glassmorphism" size="lg" className="min-w-48">
                    FAQ ansehen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                Kontaktiere uns
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Bereit für die KI-Revolution? Lass uns sprechen!
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20 glow-on-hover">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Dein Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Deine E-Mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      placeholder="Unternehmen (optional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Beschreibe dein Projekt..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="gradient" size="lg" className="w-full">
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-foreground mb-2">&copy; 2025 ASK CONNECT. Alle Rechte vorbehalten.</p>
              <p className="text-muted-foreground mb-6">
                Entwickelt mit ❤️ und modernster KI-Technologie
              </p>
              
              <div className="text-center lg:text-left">
                <p className="mb-4 font-bold text-primary">Unsere Social Media Kanäle:</p>
                <div className="flex justify-center lg:justify-start gap-6">
                  <a
                    href="https://www.linkedin.com/in/ask-connect-70a197382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/askconnect.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-primary mb-4 font-bold text-lg">Impressum</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>ASK CONNECT</p>
                <p>Vertreten durch: Alexander & Semih</p>
                <p>E-Mail: info@askconnect.de</p>
                <p>Telefon: +49 (0) 123 456789</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary/20" />
          
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        variant="gradient"
        size="icon"
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={scrollToTop}
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    </>
  );
};

export default Index;