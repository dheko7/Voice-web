import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowRight,
  Shield,
  Award,
  Clock
} from "lucide-react";
import Button from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Servicios": [
      { name: "Asistente de Voz", href: "#servicios" },
      { name: "Chat WhatsApp", href: "#servicios" },
      { name: "Chat Instagram", href: "#servicios" },
      { name: "Agenda Automática", href: "#servicios" }
    ],
    "Empresa": [
      { name: "Sobre nosotros", href: "#" },
      { name: "Casos de éxito", href: "#testimonios" },
      { name: "Blog", href: "#" },
      { name: "Carreras", href: "#" }
    ],
    "Soporte": [
      { name: "Centro de ayuda", href: "#" },
      { name: "Documentación", href: "#" },
      { name: "Contacto", href: "#contacto" },
      { name: "Estado del sistema", href: "#" }
    ],
    "Legal": [
      { name: "Política de privacidad", href: "#" },
      { name: "Términos de servicio", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const certifications = [
    { icon: Shield, text: "GDPR Compliant" },
    { icon: Award, text: "ISO 27001" },
    { icon: Clock, text: "99.9% Uptime" }
  ];

  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-b border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Mantente al día con las últimas novedades
            </h3>
            <p className="text-white/70 mb-8">
              Recibe tips, actualizaciones y ofertas exclusivas para tu peluquería
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-black/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Button className="whitespace-nowrap">
                Suscribirse
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">V</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-xl">VoiceAI</div>
                    <div className="text-sm text-white/60">para Peluquerías</div>
                  </div>
                </div>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  La solución más avanzada de IA para automatizar tu peluquería. 
                  Aumenta tus citas, mejora la experiencia del cliente y haz crecer tu negocio.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white/70">
                    <Mail className="w-5 h-5 text-emerald-400" />
                    <span>hola@voiceai-peluquerias.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span>+34 600 000 000</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <span>Madrid, España</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-emerald-500/20 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 text-white/60">
                  <cert.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">{cert.text}</span>
                </div>
              ))}
            </div>
            
            <div className="text-white/60 text-sm">
              © {currentYear} VoiceAI para Peluquerías. Todos los derechos reservados.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
