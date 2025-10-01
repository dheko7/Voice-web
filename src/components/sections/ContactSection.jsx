import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Video, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/button";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    salon: "", 
    message: "" 
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    try {
      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSent(true);
      setForm({ name: "", email: "", phone: "", salon: "", message: "" });
      
      // Resetear estado después de 3 segundos
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error("Error sending form:", err);
    } finally {
      setSending(false);
    }
  };

  const contactMethods = [
    {
      icon: Video,
      title: "Reunión virtual",
      description: "Agenda una demo personalizada",
      action: "Agendar ahora",
      href: "https://calendly.com/saidjniah/30min"
    },
    {
      icon: Phone,
      title: "Llamada directa",
      description: "Habla con nuestro equipo",
      action: "Llamar",
      href: "tel:+34600000000"
    },
    {
      icon: Mail,
      title: "Email directo",
      description: "Respuesta en menos de 2 horas",
      action: "Enviar email",
      href: "mailto:hola@voiceai-peluquerias.com"
    }
  ];

  return (
    <section id="contacto" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para{" "}
            <span className="text-gradient">transformar</span> tu salón?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Habla con nuestro equipo y descubre cómo podemos aumentar tus citas 
            y hacer crecer tu negocio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Send className="w-6 h-6 text-emerald-400" />
                  Solicita tu demo personalizada
                </CardTitle>
                <p className="text-white/70">
                  Completa el formulario y te contactaremos en menos de 2 horas
                </p>
              </CardHeader>
              <CardContent>
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-white/70">
                      Te contactaremos pronto para agendar tu demo personalizada.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Nombre completo *
                        </label>
                        <Input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Teléfono
                        </label>
                        <Input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+34 600 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Nombre del salón
                        </label>
                        <Input
                          name="salon"
                          value={form.salon}
                          onChange={handleChange}
                          placeholder="Mi Salón"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        ¿Qué necesitas? *
                      </label>
                      <Textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Cuéntanos sobre tu salón, horarios, servicios y qué te gustaría automatizar..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full"
                      size="lg"
                    >
                      {sending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Solicitar demo gratuita
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                    
                    <p className="text-sm text-white/50 text-center">
                      Al enviar este formulario, aceptas que te contactemos para ofrecerte nuestros servicios.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Métodos de contacto alternativos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Otras formas de contactarnos
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
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
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">
                              {method.title}
                            </h4>
                            <p className="text-white/70 text-sm mb-3">
                              {method.description}
                            </p>
                            <a
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : undefined}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors"
                            >
                              {method.action}
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Información adicional */}
            <Card className="card-glass border-emerald-500/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-white mb-4">
                  ¿Por qué elegirnos?
                </h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Setup gratuito incluido
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    7 días de prueba sin compromiso
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Soporte técnico 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Garantía de ROI o devolución
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
