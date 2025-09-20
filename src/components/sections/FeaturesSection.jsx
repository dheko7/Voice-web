import { motion } from "framer-motion";
import { 
  MicVocal, 
  MessageSquare, 
  Calendar, 
  Shield, 
  Zap, 
  Clock,
  Smartphone,
  Headphones,
  Bot,
  BarChart3,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: MicVocal,
      title: "Asistente de Voz IA",
      description: "Atiende llamadas telefónicas con voz natural, responde preguntas y agenda citas automáticamente.",
      benefits: ["Voz humana realista", "Disponible 24/7", "Maneja múltiples llamadas"]
    },
    {
      icon: MessageSquare,
      title: "Chat WhatsApp & Instagram",
      description: "Responde mensajes automáticamente, envía catálogos y gestiona reservas por chat.",
      benefits: ["Respuestas instantáneas", "Catálogo interactivo", "Recordatorios automáticos"]
    },
    {
      icon: Calendar,
      title: "Agenda Inteligente",
      description: "Sincroniza con tu calendario, evita conflictos y envía confirmaciones automáticas.",
      benefits: ["Sincronización automática", "Sin conflictos", "Confirmaciones SMS/WhatsApp"]
    },
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Datos encriptados, cumplimiento GDPR y respaldo automático de conversaciones.",
      benefits: ["Encriptación end-to-end", "Cumplimiento GDPR", "Respaldo automático"]
    },
    {
      icon: Zap,
      title: "Respuesta Instantánea",
      description: "Responde en menos de 1 segundo, nunca pierdas una oportunidad de venta.",
      benefits: ["< 1 segundo respuesta", "Sin esperas", "Máxima conversión"]
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzados",
      description: "Reportes detallados de conversaciones, conversiones y ROI de tu inversión.",
      benefits: ["Reportes mensuales", "Métricas de conversión", "ROI tracking"]
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
            Todo lo que necesitas para{" "}
            <span className="text-gradient">automatizar</span> tu salón
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Una solución completa que transforma tu peluquería en un negocio digital 
            que nunca duerme y siempre convierte.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </div>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-emerald-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de beneficios adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <Card className="card-glass border-emerald-500/20">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Ahorra 20h/semana</h3>
                  <p className="text-white/70">Tiempo que puedes dedicar a tus clientes y a crecer tu negocio</p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">+40% más citas</h3>
                  <p className="text-white/70">Nunca más pierdas una oportunidad por no estar disponible</p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Clientes felices</h3>
                  <p className="text-white/70">Respuesta instantánea y servicio 24/7 que tus clientes adoran</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
