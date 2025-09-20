import Logo from "@/components/ui/Logo";

export default function LandingIA() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size="md" className="text-emerald-400" />
            <div className="flex flex-col">
              <span className="font-bold text-emerald-400 text-lg">NEURASTYLE</span>
              <span className="text-xs text-white/60">VoiceAI para Peluquerías</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#ventajas" className="hover:text-white">Ventajas</a>
            <a href="#testimonios" className="hover:text-white">Testimonios</a>
            <a href="#agenda" className="hover:text-white">Agendar reunión</a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Consigue más citas con <span className="text-emerald-400">Asistentes de IA</span> para tu peluquería
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Bots de voz, WhatsApp e Instagram que atienden 24/7, responden dudas y <span className="text-white">agendan citas automáticamente</span>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors">
                Ver demo
              </button>
              <button className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">
                Habla con nosotros
              </button>
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">¿Qué puede hacer?</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-2xl p-3 bg-white/5 ring-1 ring-white/10">
                    <div className="w-6 h-6 bg-emerald-400 rounded" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Atiende llamadas</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Capta citas por teléfono y responde precios en segundos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-2xl p-3 bg-white/5 ring-1 ring-white/10">
                    <div className="w-6 h-6 bg-blue-400 rounded" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Chat 24/7</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Responde en WhatsApp e Instagram fuera de horario.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-2xl p-3 bg-white/5 ring-1 ring-white/10">
                    <div className="w-6 h-6 bg-purple-400 rounded" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Agenda automática</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Reserva y envía recordatorios por WhatsApp.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-2xl p-3 bg-white/5 ring-1 ring-white/10">
                    <div className="w-6 h-6 bg-green-400 rounded" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Seguro y privado</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Control de permisos y registro de conversaciones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section id="ventajas" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">¿Por qué implementar IA en tu peluquería?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Aumenta tus ingresos</h3>
            <p className="text-white/70">Nunca más pierdas una cita por no estar disponible. Atiende clientes 24/7 y aumenta tus ingresos hasta un 40%.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ahorra tiempo</h3>
            <p className="text-white/70">Dedica más tiempo a lo que realmente importa: tus clientes. La IA maneja consultas, precios y reservas automáticamente.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <span className="text-2xl">😊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Clientes más felices</h3>
            <p className="text-white/70">Respuesta instantánea y servicio profesional 24/7. Tus clientes estarán encantados con la rapidez y eficiencia.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-white/80 mb-4 italic">"Desde que implementé el chatbot de WhatsApp, mis citas han aumentado un 35%. Los clientes pueden reservar a cualquier hora y reciben confirmaciones automáticas. Es increíble."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <div>
                <div className="font-semibold text-white">María González</div>
                <div className="text-sm text-emerald-400">Salón María, Madrid</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-white/80 mb-4 italic">"El asistente de voz es impresionante. Atiende llamadas cuando no puedo y suena tan natural que mis clientes no notan la diferencia. He duplicado mis citas en 3 meses."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CR</span>
              </div>
              <div>
                <div className="font-semibold text-white">Carlos Ruiz</div>
                <div className="text-sm text-emerald-400">Estilo & Tendencias, Barcelona</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-white/80 mb-4 italic">"Antes perdía muchas citas por no poder atender el teléfono. Ahora el sistema responde inmediatamente y agenda automáticamente. Mis ingresos han crecido un 45%."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <div>
                <div className="font-semibold text-white">Ana Martín</div>
                <div className="text-sm text-emerald-400">Belleza Ana, Valencia</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-white/80 mb-4 italic">"La integración con Instagram ha sido un cambio total. Mis clientes pueden ver servicios, precios y agendar citas directamente desde mi perfil. Muy profesional."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DL</span>
              </div>
              <div>
                <div className="font-semibold text-white">David López</div>
                <div className="text-sm text-emerald-400">Hair Studio David, Sevilla</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-white/80 mb-4 italic">"Los recordatorios automáticos han reducido las cancelaciones a casi cero. Mis clientes reciben mensajes personalizados y siempre llegan a sus citas."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <div>
                <div className="font-semibold text-white">Laura Sánchez</div>
                <div className="text-sm text-emerald-400">Salón Laura, Bilbao</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <p className="text-white/80 mb-4 italic">"La implementación fue súper fácil y el soporte técnico excelente. En una semana ya tenía todo funcionando. Mis clientes están encantados con la rapidez."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">RG</span>
              </div>
              <div>
                <div className="font-semibold text-white">Roberto García</div>
                <div className="text-sm text-emerald-400">García Hair, Málaga</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDAR REUNIÓN - MEJORADO */}
      <section id="agenda" className="max-w-4xl mx-auto px-4 py-20">
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Agenda tu demo personalizada</h2>
            <p className="text-white/70 text-lg">Reserva 30 minutos con nuestro equipo y descubre cómo podemos transformar tu peluquería</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Beneficios de la demo */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">¿Qué incluye la demo?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Demo personalizada</h4>
                    <p className="text-sm text-white/70">Te mostramos exactamente cómo funcionaría en tu salón</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Setup incluido</h4>
                    <p className="text-sm text-white/70">Configuración completa sin coste adicional</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">30 minutos</h4>
                    <p className="text-sm text-white/70">Tiempo suficiente para resolver todas tus dudas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Sin compromiso</h4>
                    <p className="text-sm text-white/70">Solo información, sin presión comercial</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-white/60">
                  <strong className="text-emerald-400">Garantía:</strong> Si después de la demo no estás 100% convencido, no hay problema. No te cobraremos nada.
                </p>
              </div>
            </div>
            
            {/* Calendly Widget */}
            <div className="bg-white rounded-xl overflow-hidden">
              <iframe
                src="https://calendly.com/saidjniah/30min"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                title="Agenda una reunión"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>


      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Logo size="sm" className="text-emerald-400" />
          <span className="font-semibold text-emerald-400">NEURASTYLE</span>
        </div>
        <p>© {new Date().getFullYear()} NEURASTYLE - VoiceAI para Peluquerías</p>
      </footer>
    </div>
  );
}