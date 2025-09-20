import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "¿Cómo funciona el asistente de voz?",
      answer: "Nuestro asistente de voz utiliza tecnología de IA avanzada para responder llamadas telefónicas de forma natural. Puede responder preguntas sobre servicios, precios, horarios y agendar citas automáticamente. La voz es tan realista que tus clientes no notarán la diferencia."
    },
    {
      question: "¿Se integra con mi software de salón actual?",
      answer: "Sí, nos integramos con la mayoría de software de gestión de salones como Phorest, Salon Iris, Shortcuts, y muchos más. También sincronizamos con Google Calendar, Calendly y otras herramientas de agenda populares."
    },
    {
      question: "¿Qué pasa si el asistente no puede responder una pregunta?",
      answer: "El asistente está entrenado para manejar el 95% de las consultas comunes. Si no puede responder algo específico, puede transferir la llamada a ti o tomar un mensaje detallado. También aprende de cada conversación para mejorar continuamente."
    },
    {
      question: "¿Es seguro y cumple con la protección de datos?",
      answer: "Absolutamente. Cumplimos con GDPR y todas las regulaciones de protección de datos. Todas las conversaciones están encriptadas y almacenadas de forma segura. Puedes exportar o eliminar los datos de tus clientes en cualquier momento."
    },
    {
      question: "¿Cuánto tiempo tarda la implementación?",
      answer: "La configuración básica se completa en 24-48 horas. Para integraciones más complejas con software de salón, puede tomar hasta una semana. Incluimos setup gratuito y formación para ti y tu equipo."
    },
    {
      question: "¿Puedo personalizar las respuestas del asistente?",
      answer: "Sí, puedes personalizar completamente las respuestas, el tono de voz, los servicios ofrecidos y los precios. También puedes crear flujos personalizados para diferentes tipos de consultas y configurar horarios específicos."
    },
    {
      question: "¿Qué incluye el soporte técnico?",
      answer: "Ofrecemos soporte por email, chat y teléfono según tu plan. Incluye formación inicial, resolución de problemas, actualizaciones regulares y optimización continua del sistema para maximizar tu ROI."
    },
    {
      question: "¿Hay algún compromiso a largo plazo?",
      answer: "No, puedes cancelar en cualquier momento. Ofrecemos 7 días de prueba gratuita y puedes cambiar de plan o cancelar sin penalizaciones. Tu satisfacción es nuestra prioridad."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-emerald-400" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Preguntas{" "}
              <span className="text-gradient">frecuentes</span>
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestra tecnología y cómo puede 
            transformar tu peluquería.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  openIndex === index 
                    ? 'ring-2 ring-emerald-500/50 bg-emerald-500/5' 
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10 mt-4">
                          <p className="text-white/80 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className="card-glass border-emerald-500/20">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Tienes más preguntas?
              </h3>
              <p className="text-white/70 mb-6">
                Nuestro equipo está aquí para ayudarte. Agenda una llamada gratuita 
                y resolvemos todas tus dudas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/saidjniah/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all duration-300 hover:scale-105"
                >
                  Agendar llamada gratuita
                </a>
                <a 
                  href="mailto:hola@voiceai-peluquerias.com" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl glass text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Enviar email
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
