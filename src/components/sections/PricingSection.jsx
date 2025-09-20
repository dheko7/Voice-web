import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Zap, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "€129",
      period: "mes",
      description: "Perfecto para empezar",
      icon: Zap,
      popular: false,
      features: [
        "Chatbot WhatsApp o Instagram",
        "FAQ + catálogo básico",
        "Agenda conectada (Google/Calendly)",
        "Plantillas y botones",
        "Hasta 100 conversaciones/mes",
        "Soporte por email"
      ],
      cta: "Empezar gratis",
      highlight: "7 días gratis"
    },
    {
      name: "Voz + Chat",
      price: "€249",
      period: "mes",
      description: "El más elegido",
      icon: Star,
      popular: true,
      features: [
        "Asistente de voz para llamadas",
        "WhatsApp + Instagram",
        "Recordatorios automáticos",
        "Informes mensuales",
        "Hasta 500 conversaciones/mes",
        "Soporte prioritario",
        "Integración con software de salón"
      ],
      cta: "Probar 7 días gratis",
      highlight: "Más popular"
    },
    {
      name: "Pro Salón",
      price: "€449",
      period: "mes",
      description: "Para salones grandes",
      icon: Crown,
      popular: false,
      features: [
        "Integración con tu software de salón",
        "Flujos personalizados",
        "Automatizaciones avanzadas",
        "SLA prioritario",
        "Conversaciones ilimitadas",
        "Soporte 24/7 por teléfono",
        "Analytics avanzados",
        "API personalizada"
      ],
      cta: "Contactar ventas",
      highlight: "Personalizado"
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
    <section id="precios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Planes que se adaptan a tu{" "}
            <span className="text-gradient">negocio</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Elige el plan perfecto para tu peluquería. Todos incluyen setup gratuito 
            y 7 días de prueba sin compromiso.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                hover 
                className={`h-full relative ${
                  plan.popular 
                    ? 'ring-2 ring-emerald-500/50 scale-105' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-black px-4 py-1">
                      {plan.highlight}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' 
                        : 'bg-white/10'
                    }`}>
                      <plan.icon className={`w-6 h-6 ${
                        plan.popular ? 'text-white' : 'text-white/70'
                      }`} />
                    </div>
                    <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  </div>
                  
                  <p className="text-white/60 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/50 ml-2">/{plan.period}</span>
                  </div>
                  
                  {!plan.popular && (
                    <Badge variant="secondary" className="mb-4">
                      {plan.highlight}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant={plan.popular ? "primary" : "secondary"} 
                    className="w-full group"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Garantía y beneficios adicionales */}
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
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Setup Gratuito</h3>
                  <p className="text-white/70">Configuración completa incluida sin coste adicional</p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">7 Días Gratis</h3>
                  <p className="text-white/70">Prueba sin compromiso, cancela cuando quieras</p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">ROI Garantizado</h3>
                  <p className="text-white/70">Si no aumentas tus citas en 30 días, te devolvemos el dinero</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
