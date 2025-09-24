import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services, Benefits & Ablauf" },
    { href: "/faq", label: "FAQ" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // If it's an anchor link on current page, scroll to element
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActiveRoute = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "backdrop-blur-md bg-background/80 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">A</span>
              </div>
              <span className="text-xl md:text-2xl font-bold gradient-text">ASK CONNECT</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`transition-colors duration-300 font-medium px-3 py-2 rounded-lg ${
                      isActiveRoute(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button - only show on non-home pages or scroll to contact on home */}
            {location.pathname === "/" ? (
              <Button
                variant="glassmorphism"
                size="sm"
                className="hidden md:flex"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Kontakt
              </Button>
            ) : (
              <Link to="/#contact">
                <Button variant="glassmorphism" size="sm" className="hidden md:flex">
                  Kontakt
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 left-0 w-64 h-full bg-card shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold gradient-text">ASK CONNECT</span>
            </div>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-left transition-colors duration-300 font-medium py-3 px-4 rounded-lg ${
                      isActiveRoute(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                {location.pathname === "/" ? (
                  <Button
                    variant="gradient"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                  >
                    Kontakt
                  </Button>
                ) : (
                  <Link to="/#contact" className="block w-full">
                    <Button 
                      variant="gradient" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Kontakt
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};