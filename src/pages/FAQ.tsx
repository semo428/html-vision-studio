import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Plus } from "lucide-react";

import { Particles } from "@/components/Particles";
import { Navigation } from "@/components/Navigation";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

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
      answer: "Wir entwickeln und implementieren KI-Agenten und RAG-Bots (Chatbots & Automatisierungslösungen), die Geschäftsprozesse smarter, effizienter und kundenfreundlicher machen.",
      highlight: "KI-Agenten und RAG-Bots"
    },
    {
      id: "q2",
      category: "general",
      question: "Was ist ein RAG-Chatbot?",
      answer: "Ein RAG-Chatbot (Retrieval-Augmented Generation) ist ein KI-gestützter Chatbot, der zusätzlich auf externe Wissensquellen (z. B. eine Vektordatenbank) zugreifen kann. Dadurch beantwortet er Fragen deutlich präziser, aktueller und kontextbezogener.",
      highlight: "RAG-Chatbot (Retrieval-Augmented Generation)"
    },
    {
      id: "q3",
      category: "general",
      question: "Was sind KI-Agenten und was können diese in meinem Unternehmen leisten?",
      answer: "KI-Agenten sind smarte Systeme, die eigenständig Tools nutzen und Entscheidungen treffen können. Sie übernehmen repetitive Aufgaben, führen komplexe Workflows aus und können Prozesse automatisieren, die bislang manuell durchgeführt wurden.",
      highlight: "smarte Systeme, die eigenständig Tools nutzen"
    },
    {
      id: "q4",
      category: "benefits",
      question: "Für wen eignen sich eure Lösungen?",
      answer: "Unsere KI-Agenten sind flexibel einsetzbar – von Startups über Mittelständler bis zu größeren Unternehmen. Besonders wertvoll sind sie für Firmen, die wiederkehrende Prozesse oder Kundenanfragen automatisieren möchten. Insbesondere in der Hotellerie und Gastronomie gibt es diesbezüglich großes Optimierungspotenzial.",
      highlight: "Startups über Mittelständler bis zu größeren Unternehmen"
    },
    {
      id: "q5",
      category: "benefits",
      question: "Welche Probleme können KI-Agenten und RAG-Chatbots lösen?",
      answer: "KI-Agenten und RAG-Chatbots lösen vielfältige Probleme: Automatisierte Beantwortung von Kundenanfragen, Entlastung des Kundenservice, Unterstützung bei Prozessanalyse und -optimierung, Effizienzsteigerung durch Automatisierung manueller Aufgaben.",
      highlight: "Automatisierte Beantwortung"
    },
    {
      id: "q6",
      category: "benefits",
      question: "Können Chatbots auch mehrsprachig eingesetzt werden?",
      answer: "Ja! Die von uns genutzten Systeme sind in der Regel bereits mehrsprachig. Falls Sie Wert auf besonders hochwertige Übersetzungen legen, können zusätzliche Übersetzungstools mit eingebunden werden.",
      highlight: "mehrsprachig"
    },
    {
      id: "q7",
      category: "technical",
      question: "Wie lange dauert die Umsetzung?",
      answer: "Das hängt vom Umfang und Komplexität des Projektes ab. Erste Prototypen können innerhalb weniger Wochen stehen, komplexere Systeme brauchen entsprechend länger. In einem unverbindlichen Erstgespräch klären wir mit Ihnen gemeinsam ab, wie schnell eine passende Lösung umgesetzt werden kann.",
      highlight: "Erste Prototypen können innerhalb weniger Wochen"
    },
    {
      id: "q8",
      category: "technical",
      question: "Brauchen wir IT-Know-how im Unternehmen?",
      answer: "Nein! Sie müssen kein eigenes Fachwissen mitbringen – wir kümmern uns um die technische Umsetzung. Wichtig ist nur, dass Sie offen für digitale und moderne Prozesse sind.",
      highlight: "Nein!"
    },
    {
      id: "q9",
      category: "technical",
      question: "Wie sicher sind die Daten?",
      answer: "Datenschutz und Sicherheit haben bei uns höchste Priorität. Wir arbeiten DSGVO-konform und setzen auf geprüfte Technologien.",
      highlight: "höchste Priorität"
    },
    {
      id: "q10",
      category: "costs",
      question: "Was kostet ein KI-Agent?",
      answer: "Die Kosten hängen von der Komplexität des Projekts ab. Im Erstgespräch zeigen wir transparente Optionen auf und finden ein Modell, das zu Ihrem Budget passt. Beispiel: KI Agent mit 3 Anbindungen und starkem LLM ab 600€. Laufende Kosten halbjährig: Betrieb/Token 30€ (5€/Monat), Hosting 30€ (5€/Monat), Support 30€ (5€/Monat).",
      highlight: "KI Agent"
    },
    {
      id: "q11",
      category: "costs",
      question: "Kann man klein starten und die KI später erweitern?",
      answer: "Ja! Wir legen Wert auf flexible Lösungen, die mit Ihrem Unternehmen mitwachsen. Unsere Lösungen sind skalierbar und können jederzeit an neue Anforderungen angepasst werden.",
      highlight: "Ja!"
    },
    {
      id: "q12",
      category: "costs",
      question: "Gibt es Mindestvertragslaufzeiten?",
      answer: "Nein. Wir möchten, dass Sie von unseren Lösungen überzeugt sind. Unser Ziel ist es, Sie mit Kundenzufriedenheit zu binden, nicht mit Verträgen.",
      highlight: "Nein."
    },
    {
      id: "q13",
      category: "costs",
      question: "Bietet ihr auch Schulungen oder Support an?",
      answer: "Ja! Wir begleiten Sie nicht nur bei der Entwicklung und Implementierung, sondern auch beim Training Ihres Teams sowie mit laufendem Support. Insbesondere bei Problemen sind wir jederzeit erreichbar und priorisieren die Überprüfung und Behebung.",
      highlight: "Ja!"
    }
  ];

  const filteredFaq = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Particles />
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center relative pt-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Häufige Fragen (FAQ)
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zu unseren KI-Lösungen und Services.
              Hier finden Sie alles, was Sie über KI-Agenten und RAG-Chatbots wissen müssen.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* FAQ Categories */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
                {faqCategories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`cursor-pointer px-4 md:px-6 py-2 text-xs md:text-sm transition-all duration-300 ${
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
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-center justify-between">
                            <h4 className="text-base md:text-lg font-semibold text-foreground pr-4 text-left">
                              {faq.question}
                            </h4>
                            <Plus 
                              className={`w-4 h-4 md:w-5 md:h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                                openFaq === faq.id ? 'rotate-45' : ''
                              }`}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2">
                      <Card className="border-primary/10 bg-card/30 backdrop-blur-sm">
                        <CardContent className="p-4 md:p-6 pt-4">
                          <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {faq.highlight ? (
                              faq.answer.split(faq.highlight).map((part, i, arr) => (
                                <span key={i}>
                                  {part}
                                  {i < arr.length - 1 && (
                                    <span className="text-primary font-semibold">{faq.highlight}</span>
                                  )}
                                </span>
                              ))
                            ) : (
                              <p>{faq.answer}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;