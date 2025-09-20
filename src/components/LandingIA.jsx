export default function LandingIA() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500" />
            <span className="font-semibold">VoiceAI para Peluquerías</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#precios" className="hover:text-white">Precios</a>
            <a href="#agenda" className="hover:text-white">Agendar reunión</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
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

      <section id="precios" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Planes que se adaptan a tu negocio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">€129</span>
              <span className="text-white/50 ml-1">/mes</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> Chatbot WhatsApp o Instagram
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> FAQ + catálogo básico
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> Agenda conectada
              </li>
            </ul>
            <button className="w-full px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">
              Empezar
            </button>
          </div>
          
          <div className="rounded-xl border border-emerald-500/50 bg-zinc-900/60 p-6 ring-1 ring-emerald-500/30">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-white">Voz + Chat</h3>
              <span className="px-2 py-1 rounded-full bg-emerald-500 text-black text-xs font-medium">Más elegido</span>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">€249</span>
              <span className="text-white/50 ml-1">/mes</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> Asistente de voz para llamadas
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> WhatsApp + Instagram
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> Recordatorios automáticos
              </li>
            </ul>
            <button className="w-full px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors">
              Probar gratis
            </button>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Pro Salón</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">€449</span>
              <span className="text-white/50 ml-1">/mes</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> Integración con software de salón
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> Flujos personalizados
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <span className="w-4 h-4 mt-0.5 bg-emerald-400 rounded-full" /> SLA prioritario
              </li>
            </ul>
            <button className="w-full px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">
              Contactar ventas
            </button>
          </div>
        </div>
      </section>

      <section id="agenda" className="max-w-3xl mx-auto px-4 py-20">
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Agendar reunión</h3>
          <p className="text-white/80 mb-4 text-sm">Reserva una reunión conmigo para hablar a fondo y hacer pruebas reales:</p>
          <div className="w-full h-[600px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="https://calendly.com/saidjniah/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Agenda una reunión"
            />
          </div>
        </div>
      </section>

      <section id="contacto" className="max-w-3xl mx-auto px-4 pb-24">
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Solicita presupuesto o demo</h3>
          <form className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Nombre</label>
              <input 
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-white/20 bg-black/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Email</label>
              <input 
                type="email"
                className="w-full px-3 py-2 rounded-lg border border-white/20 bg-black/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Teléfono</label>
              <input 
                type="tel"
                className="w-full px-3 py-2 rounded-lg border border-white/20 bg-black/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="+34 600 000 000"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Nombre del salón</label>
              <input 
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-white/20 bg-black/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Mi Salón"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-white/70 mb-2">¿Qué necesitas?</label>
              <textarea 
                rows={4}
                className="w-full px-3 py-2 rounded-lg border border-white/20 bg-black/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                placeholder="Ej: Quiero WhatsApp + voz, horarios de 10-20h, servicios: corte, color, peinados…"
              />
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-colors"
              >
                Quiero una demo
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} VoiceAI para Peluquerías
      </footer>
    </div>
  );
}