import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Servicios", href: "#servicios" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Precios", href: "#precios" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div>
              <div className="font-bold text-white text-lg">VoiceAI</div>
              <div className="text-xs text-white/60">para Peluquerías</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-white transition-colors font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection("#contacto")}
            >
              Contactar
            </Button>
            <Button
              size="sm"
              onClick={() => window.open("https://calendly.com/saidjniah/30min", "_blank")}
            >
              Demo gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-white/10">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white/80 hover:text-white transition-colors py-2"
              >
                {item.name}
              </motion.button>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={() => scrollToSection("#contacto")}
              >
                Contactar
              </Button>
              <Button
                size="sm"
                className="w-full"
                onClick={() => window.open("https://calendly.com/saidjniah/30min", "_blank")}
              >
                Demo gratis
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
