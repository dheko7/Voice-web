import { motion } from "framer-motion";
import { Video, Calendar, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalendlySection() {
  const benefits = [
    {
      icon: Video,
      title: "Demo personalizada",
      description: "Te mostramos exactamente cómo funcionaría en tu salón"
    },
    {
      icon: Calendar,
      title: "Setup incluido",
      description: "Configuración completa sin coste adicional"
    },
    {
      icon: Clock,
      title: "30 minutos",
      description: "Tiempo suficiente para resolver todas tus dudas"
    },
    {
      icon: CheckCircle,
      title: "Sin compromiso",
      description: "Solo información, sin presión comercial"
    }
  ];

  return (
    <section id="agenda" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Agenda tu{" "}
            <span className="text-gradient">demo personalizada</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Reserva 30 minutos con nuestro equipo y descubre cómo podemos 
            transformar tu peluquería con tecnología de IA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Beneficios */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              ¿Qué incluye la demo?
            </h3>
            
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="card-glass">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* CTA adicional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="card-glass border-emerald-500/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-white mb-2">
                    ¿Prefieres una llamada rápida?
                  </h4>
                  <p className="text-white/70 text-sm mb-4">
                    Si tienes prisa, también puedes llamarnos directamente
                  </p>
                  <a
                    href="tel:+34600000000"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl glass text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    Llamar ahora
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-glass border-emerald-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-emerald-400" />
                  Selecciona tu horario
                </CardTitle>
                <p className="text-white/70 text-sm">
                  Elige el día y hora que mejor te convenga. Te enviaremos un recordatorio.
                </p>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[600px] rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://calendly.com/saidjniah/30min"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Agenda una reunión"
                    className="bg-white"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Garantía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="card-glass border-emerald-500/20">
            <CardContent className="py-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Garantía de satisfacción
                </h3>
                <p className="text-white/70 mb-6">
                  Si después de la demo no estás 100% convencido de que podemos 
                  ayudarte a aumentar tus citas, no hay problema. No te cobraremos nada.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Sin compromiso
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Información transparente
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Respuesta en 24h
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
