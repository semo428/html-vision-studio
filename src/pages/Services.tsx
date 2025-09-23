import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  BookOpen
} from "lucide-react";

import { Particles } from "@/components/Particles";
import { Navigation } from "@/components/Navigation";

const Services = () => {
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

  return (
    <>
      <Particles />
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center relative pt-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Unsere Services & Vorteile
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Entdecke die Macht der KI-Automatisierung und erfahre, 
              wie unsere intelligenten Lösungen dein Business revolutionieren können.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 gradient-text">
                Unsere Services
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Entdecke die Macht der KI-Automatisierung
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="glow-on-hover group cursor-pointer bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                  <CardHeader className="pb-4">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-12 md:py-20 px-4 relative">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 gradient-text">
                Wieso Sie einen KI-Agenten /RAG-Chatbot benötigen
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Entdecken Sie die Vorteile intelligenter Automatisierung
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glow-on-hover group cursor-pointer bg-card/50 backdrop-blur-sm border-secondary/20 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-secondary group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg text-foreground">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-muted-foreground">
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
        <section id="process" className="py-12 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 gradient-text">
                Unser Ablauf
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Von der ersten Idee bis zur erfolgreichen Implementierung
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start mb-8 md:mb-12 group">
                  <div 
                    className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-0 md:mr-6 mb-4 md:mb-0 group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
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
      </main>
    </>
  );
};

export default Services;