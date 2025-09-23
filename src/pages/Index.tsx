import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Bot, 
  Zap, 
  BarChart, 
  Target, 
  Shield, 
  Rocket, 
  Clock, 
  TrendingUp,
  DollarSign,
  Users,
  RotateCcw,
  BookOpen,
  Plus,
  ChevronUp,
  Linkedin,
  Instagram
} from "lucide-react";

import { LoadingScreen } from "@/components/LoadingScreen";
import { Particles } from "@/components/Particles";
import { Navigation } from "@/components/Navigation";
import { AIBot } from "@/components/AIBot";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
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

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "RAG-Chatbot Entwicklung",
      description: "Intelligente Chatbots für Kundenservice, Sales und Support mit natürlicher Sprachverarbeitung"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligente Prozessautomatisierung mit AI",
      description: "Automatisiere wiederkehrende Aufgaben und steigere deine Effizienz um bis zu 300%"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Datenanalyse",
      description: "KI-gestützte Analysen für bessere Geschäftsentscheidungen und Markteinblicke"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalisierung",
      description: "Individuelle KI-Lösungen, perfekt zugeschnitten auf deine Business-Anforderungen"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sicherheit & Compliance",
      description: "DSGVO-konforme KI-Lösungen mit höchsten Sicherheitsstandards"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Integration, Deployment & Support",
      description: "Nahtlose Integration in bestehende Systeme, schnelle Implementierung und priorisierte Problembehandlung"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Verfügbarkeit",
      description: "Ihre KI-Agenten arbeiten rund um die Uhr, auch an Wochenenden und Feiertagen - ohne Pausen oder Urlaub",
      highlight: "rund um die Uhr"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Blitzschnelle Antworten",
      description: "Sofortige Reaktionszeiten statt stundenlanger Wartezeiten - Ihre Kunden erhalten Antworten in Sekunden",
      highlight: "Sofortige Reaktionszeiten"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Erhebliche Kostenersparnis",
      description: "Reduzieren Sie Personalkosten und steigern Sie die Effizienz - ROI oft bereits nach wenigen Monaten",
      highlight: "ROI oft bereits nach wenigen Monaten"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Steigende Kundenzufriedenheit",
      description: "Konsistente, präzise Antworten und keine schlechten Tage - zufriedenere Kunden durch besseren Service",
      highlight: "Konsistente, präzise Antworten"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Skalierbare Kapazität",
      description: "Bewältigen Sie beliebig viele Anfragen gleichzeitig ohne zusätzliche Personalkosten oder Wartezeiten",
      highlight: "beliebig viele Anfragen gleichzeitig"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Umfassendes Wissen",
      description: "Zugriff auf Ihr gesamtes Unternehmenswissen durch RAG-Technologie - nie wieder \"Das weiß ich nicht\"",
      highlight: "RAG-Technologie"
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Erstgespräch & Bedarfsanalyse",
      description: "Wir starten mit einem unverbindlichen Kennenlerngespräch. Dabei analysieren wir gemeinsam Ihre aktuelle Situation, bestehende Prozesse und mögliche Pain Points.",
      highlight: "unverbindlichen Kennenlerngespräch"
    },
    {
      number: 2,
      title: "Identifikation von Anwendungsfällen",
      description: "Im nächsten Schritt stellen wir mögliche Einsatzgebiete vor - von internen Support- und Wissensmanagement-Lösungen bis hin zu externen Kunden-Chatbots.",
      highlight: "mögliche Einsatzgebiete"
    },
    {
      number: 3,
      title: "Nutzenbewertung & Strategie",
      description: "Anhand Ihrer Anforderungen bewerten wir gemeinsam den Mehrwert: Effizienzsteigerung, Kostensenkung, Qualitätsverbesserung oder neue Geschäftsmodelle.",
      highlight: "Mehrwert"
    },
    {
      number: 4,
      title: "Individuelle Umsetzung",
      description: "Unsere Experten setzen die Lösung für Sie um - von der Datenintegration über die Modellanbindung bis hin zur Automatisierung.",
      highlight: "Datenintegration"
    },
    {
      number: 5,
      title: "Testing & Optimierung",
      description: "Vor dem Rollout testen wir die Lösung intensiv, sammeln Feedback aus der Praxis und nehmen Anpassungen vor.",
      highlight: "intensiv"
    },
    {
      number: 6,
      title: "Review und Weiterentwicklung",
      description: "Nach der Einführung lassen wir das Projekt gemeinsam Revue passieren und besprechen kontinuierliche Optimierungen.",
      highlight: "Revue passieren"
    }
  ];

  const teamMembers = [
    {
      name: "Alexander",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHjXuptSPqOwA/profile-displayphoto-shrink_200_200/B56ZSt6YGfGUAY-/0/1738084549517?e=2147483647&v=beta&t=XJ_JFVA22sOPzLnGG2OMXZPrKEFXK-VlGkF8BuT4NKM",
      bio: "Alex studiert Wirtschaftsingenieurwesen im 7. Semester an der Hochschule Albstadt-Sigmaringen und schreibt seine Bachelorarbeit über das Potenzial und Etablieren von KI-Agenten in einem Globalplayer."
    },
    {
      name: "Semih",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHg-0XjOIFD7w/profile-displayphoto-scale_400_400/B4EZltXtwUIMAg-/0/1758476558201?e=1761177600&v=beta&t=oMkp-uhT3oIDEoIJnHSUXdcgsFFvgttm6c2MnFJbtBw",
      bio: "Semih befindet sich im 7. Semester des Wirtschaftsingenieurwesens an der Hochschule Albstadt-Sigmaringen und verfasst seine Bachelorarbeit rund um die Chancen und Herausforderungen von KI-Agenten."
    }
  ];

  const faqCategories = [
    { id: "all", label: "Alle" },
    { id: "general", label: "Allgemeines" },
    { id: "benefits", label: "Nutzen & Einsatz" },
    { id: "technical", label: "Technik & Sicherheit" },
    { id: "costs", label: "Kosten & Support" }
  ];

  const faqItems = [
    {
      id: "q1",
      category: "general",
      question: "Was genau macht ASK CONNECT?",
      answer: "Wir entwickeln und implementieren KI-Agenten und RAG-Bots (Chatbots & Automatisierungslösungen), die Geschäftsprozesse smarter, effizienter und kundenfreundlicher machen."
    },
    {
      id: "q2",
      category: "general",
      question: "Was ist ein RAG-Chatbot?",
      answer: "Ein RAG-Chatbot (Retrieval-Augmented Generation) ist ein KI-gestützter Chatbot, der zusätzlich auf externe Wissensquellen (z. B. eine Vektordatenbank) zugreifen kann."
    },
    {
      id: "q3",
      category: "benefits",
      question: "Für wen eignen sich eure Lösungen?",
      answer: "Unsere KI-Agenten sind flexibel einsetzbar – von Startups über Mittelständler bis zu größeren Unternehmen. Besonders wertvoll sind sie für Firmen, die wiederkehrende Prozesse automatisieren möchten."
    },
    {
      id: "q4",
      category: "technical",
      question: "Wie lange dauert die Umsetzung?",
      answer: "Das hängt vom Umfang ab. Erste Prototypen können innerhalb weniger Wochen stehen, komplexere Systeme brauchen entsprechend länger."
    },
    {
      id: "q5",
      category: "costs",
      question: "Was kostet ein KI-Agent?",
      answer: "Die Kosten hängen von der Komplexität ab. Beispiel: KI Agent mit 3 Anbindungen ab 600€. Laufende Kosten halbjährig: Betrieb 30€, Hosting 30€, Support 30€."
    }
  ];

  const filteredFaq = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

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
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              KI-Agenten der Zukunft
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Revolutioniere dein Business mit intelligenten KI-Agenten und RAG-Chatbots, 
              die 24/7 für dich arbeiten!
            </p>
            
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="animate-pulse-glow"
            >
              Jetzt starten
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                Unsere Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Entdecke die Macht der KI-Automatisierung
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="glow-on-hover group cursor-pointer bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 px-4 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                Wieso Sie einen KI-Agenten /RAG-Chatbot benötigen
              </h2>
              <p className="text-xl text-muted-foreground">
                Entdecken Sie die Vorteile intelligenter Automatisierung
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glow-on-hover group cursor-pointer bg-card/50 backdrop-blur-sm border-secondary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-secondary group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg text-foreground">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description.split(benefit.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-secondary font-semibold">{benefit.highlight}</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                Unser Ablauf
              </h2>
              <p className="text-xl text-muted-foreground">
                Von der ersten Idee bis zur erfolgreichen Implementierung
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start mb-12 group">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description.split(step.highlight).map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-primary font-semibold">{step.highlight}</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                Über uns
              </h2>
              <p className="text-xl text-muted-foreground">
                Lernen Sie das Team hinter ASK CONNECT kennen
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="glow-on-hover bg-card/50 backdrop-blur-sm border-accent/20">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-2 border-primary/30"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {member.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                Häufige Fragen (FAQ)
              </h2>
              <p className="text-xl text-muted-foreground">
                Antworten auf die wichtigsten Fragen zu unseren KI-Lösungen
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* FAQ Categories */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {faqCategories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`cursor-pointer px-6 py-2 text-sm transition-all duration-300 ${
                      activeCategory === category.id 
                        ? "glow-primary" 
                        : "hover:border-primary/50"
                    }`}
                    style={activeCategory === category.id ? { background: "var(--gradient-primary)" } : {}}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </Badge>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {filteredFaq.map((faq) => (
                  <Collapsible
                    key={faq.id}
                    open={openFaq === faq.id}
                    onOpenChange={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 glow-on-hover">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-foreground pr-4">
                              {faq.question}
                            </h4>
                            <Plus 
                              className={`w-5 h-5 text-primary transition-transform duration-300 ${
                                openFaq === faq.id ? 'rotate-45' : ''
                              }`}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2">
                      <Card className="border-primary/10 bg-card/30 backdrop-blur-sm">
                        <CardContent className="p-6 pt-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                Kontaktiere uns
              </h2>
              <p className="text-xl text-muted-foreground">
                Bereit für die KI-Revolution? Lass uns sprechen!
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20 glow-on-hover">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Dein Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Deine E-Mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      placeholder="Unternehmen (optional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background/50 border-primary/30 focus:border-primary"
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
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Datenschutz | Impressum | AGB</p>
          </div>
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