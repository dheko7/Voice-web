import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      salon: "Salón María",
      location: "Madrid",
      rating: 5,
      text: "Desde que implementé el asistente de IA, mis citas han aumentado un 45%. Los clientes están encantados con la rapidez de respuesta y yo puedo enfocarme en lo que más me gusta: cortar y peinar.",
      avatar: "MG"
    },
    {
      name: "Carlos Ruiz",
      salon: "Estilo & Tendencias",
      location: "Barcelona",
      rating: 5,
      text: "Increíble. Ahora atiendo llamadas las 24 horas sin estar presente. El sistema es tan natural que mis clientes no se dan cuenta de que hablan con una IA. ROI del 300% en 3 meses.",
      avatar: "CR"
    },
    {
      name: "Ana Martín",
      salon: "Belleza Ana",
      location: "Valencia",
      rating: 5,
      text: "La integración con WhatsApp ha sido un cambio total. Mis clientes pueden agendar citas a cualquier hora y reciben recordatorios automáticos. Mi negocio nunca había funcionado tan bien.",
      avatar: "AM"
    },
    {
      name: "David López",
      salon: "Hair Studio David",
      location: "Sevilla",
      rating: 5,
      text: "El asistente de voz es impresionante. Maneja perfectamente las consultas de precios, horarios y servicios. Mis clientes están sorprendidos de lo profesional que suena.",
      avatar: "DL"
    },
    {
      name: "Laura Sánchez",
      salon: "Salón Laura",
      location: "Bilbao",
      rating: 5,
      text: "Antes perdía muchas citas por no poder atender el teléfono. Ahora nunca pierdo una oportunidad. El sistema se paga solo con las primeras 3 citas del mes.",
      avatar: "LS"
    },
    {
      name: "Roberto García",
      salon: "García Hair",
      location: "Málaga",
      rating: 5,
      text: "La implementación fue súper fácil y el soporte técnico excelente. En una semana ya tenía todo funcionando. Mis ingresos han crecido un 35% este trimestre.",
      avatar: "RG"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">clientes</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Más de 500 peluquerías ya han transformado su negocio con nuestra tecnología.
            Descubre sus historias de éxito.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover className="h-full relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                  
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.salon}</div>
                      <div className="text-sm text-emerald-400">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Estadísticas de satisfacción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <Card className="card-glass border-emerald-500/20">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">4.9/5</div>
                  <div className="text-white/70">Satisfacción promedio</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
                  <div className="text-white/70">Peluquerías activas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                  <div className="text-white/70">Clientes satisfechos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
                  <div className="text-white/70">Soporte técnico</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
