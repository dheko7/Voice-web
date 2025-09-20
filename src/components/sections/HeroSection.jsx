import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Clock, TrendingUp } from "lucide-react";
import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HeroSection() {
  const stats = [
    { icon: Users, value: "500+", label: "Peluquerías" },
    { icon: Clock, value: "24/7", label: "Disponibilidad" },
    { icon: TrendingUp, value: "+40%", label: "Más citas" },
    { icon: Star, value: "4.9/5", label: "Satisfacción" }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium"
            >
              <Star className="w-4 h-4 mr-2" />
              #1 en automatización para peluquerías
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Revoluciona tu{" "}
              <span className="text-gradient">peluquería</span>{" "}
              con IA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              Asistentes de voz y chat que atienden 24/7, agendan citas automáticamente 
              y aumentan tus ingresos en un{" "}
              <span className="text-emerald-400 font-semibold">40%</span>.
            </motion.p>
          </div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                  <stat.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              Ver demo en vivo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="group">
              <Play className="w-5 h-5 mr-2" />
              Ver video (2 min)
            </Button>
          </motion.div>
        </motion.div>

        {/* Card de demostración */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Card className="card-glass border-emerald-500/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                Demo en vivo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">IA</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Asistente IA</div>
                    <div className="text-emerald-400 text-sm">En línea</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-emerald-500 text-black px-4 py-2 rounded-2xl rounded-br-sm max-w-xs">
                      ¡Hola! ¿En qué puedo ayudarte hoy?
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-white px-4 py-2 rounded-2xl rounded-bl-sm max-w-xs">
                      Quiero agendar una cita para mañana
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-emerald-500 text-black px-4 py-2 rounded-2xl rounded-br-sm max-w-xs">
                      Perfecto, ¿qué servicio necesitas?
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm text-white/60 text-center">
                  Respuesta automática en <span className="text-emerald-400">0.3 segundos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
