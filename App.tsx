
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Check, 
  Smartphone, 
  MessageCircle, 
  ArrowRight, 
  TrendingUp,
  Clock,
  ShieldCheck
} from 'lucide-react';

// --- Shared Components ---

const FadeInUp: React.FC<{ children?: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const GlassCard: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Utils ---

const WHATSAPP_NUMBER = "51929932210";

const handleWhatsAppRedirect = (message: string) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

const handlePlanSelection = (planName: string, price: string) => {
  let message = "";
  if (planName === "Mensual") {
    message = `¡Hola VendeMass! ⚡ Estoy interesado en el Plan Mensual (S/ ${price}). Quiero automatizar mi catálogo hoy mismo.`;
  } else if (planName === "Trimestral") {
    message = `¡Hola VendeMass! ⚡ Vengo por la oferta del Plan Trimestral (S/ ${price}). Es la que mejor me conviene, ¿cómo empezamos?`;
  } else if (planName === "Anual") {
    message = `¡Hola VendeMass! ⚡ Quiero el Plan Anual (S/ ${price}) para mi negocio. Deseo configurar mi catálogo por todo un año.`;
  } else {
    message = "Hola VendeMass, me gustaría recibir más información sobre el sistema de pedidos por WhatsApp.";
  }
  handleWhatsAppRedirect(message);
};

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className="p-2 bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">
          <Zap className="w-5 h-5 text-white fill-current" />
        </div>
        <span className="text-xl font-black tracking-tighter text-white uppercase">VendeMass</span>
      </div>
      <motion.button 
        onClick={() => handleWhatsAppRedirect("Hola VendeMass, me gustaría recibir más información sobre el sistema de pedidos por WhatsApp.")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all backdrop-blur-md"
      >
        Contactar
      </motion.button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
    
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <FadeInUp>
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">Automatización Premium</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
          Deja de recibir mensajes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">desordenados.</span> Empieza a recibir pedidos.
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
          VendeMass convierte tu catálogo de WhatsApp en una máquina de ventas automática. 
          <span className="text-white"> Sin comisiones, sin enredos, solo resultados.</span>
        </p>
        
        <motion.button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(37,99,235,0.5)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex relative group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-2xl font-black text-xl items-center gap-3 overflow-hidden shadow-2xl transition-all"
        >
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
          Quiero mi catálogo ahora
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <motion.div 
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(37,99,235,0.7)] border border-white/20 bg-slate-900/40">
            <img 
              src="https://i.ibb.co/C5RPFrNK/persusivo-enlace.png" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop" }}
              alt="VendeMass Persuasive Product View" 
              className="w-full h-auto object-contain min-h-[450px] scale-[1.01]"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/30 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-400/30 blur-[100px] rounded-full" />
        </motion.div>
      </FadeInUp>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <FadeInUp>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white/5 backdrop-blur-2xl border border-blue-500/50 rounded-[2.5rem] p-8 md:p-14 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Zap className="w-64 h-64 text-blue-500" />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="flex-shrink-0 p-4 bg-blue-500/20 rounded-2xl">
                  <ShieldCheck className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-4">
                    ¡Tu catálogo listo hoy mismo, sin costo inicial! 🚀
                  </h2>
                  <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-medium">
                    Creemos tanto en nuestro sistema que no te pedimos dinero por adelantado. Nosotros nos encargamos de diseñar y configurar tu catálogo con tus productos y fotos totalmente gratis.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-xl">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-semibold">
                  Úsalo, pruébalo y mira cómo llegan tus pedidos. Solo pagas para activarlo y lanzarlo a tu dominio propio cuando estés 100% satisfecho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInUp>
    </div>
  </section>
);

const Pricing = () => {
  const plans = [
    { name: "Mensual", price: "19", period: "1 mes", featured: false },
    { name: "Trimestral", price: "29", period: "3 meses", featured: true },
    { name: "Anual", price: "89", period: "1 año", featured: false },
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <FadeInUp>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Inversión Directa</h2>
            <p className="text-slate-400 text-lg">Impulsa tu negocio con la tecnología más avanzada del mercado.</p>
          </FadeInUp>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <FadeInUp key={plan.name} delay={i * 0.1}>
              <GlassCard className={`relative p-10 flex flex-col h-full transition-all duration-500 ${plan.featured ? 'border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.15)] scale-105 z-10 bg-white/[0.08]' : ''}`}>
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-lg">
                    Recomendado
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-300 mb-6 tracking-tight uppercase">{plan.name}</h3>
                <div className="flex flex-col gap-1 mb-8">
                    <div className="flex items-baseline gap-2">
                        <span className="text-6xl font-black text-white">S/ {plan.price}</span>
                        <span className="text-slate-500 font-bold">/ {plan.period}</span>
                    </div>
                    <span className="text-[10px] text-cyan-400/80 font-bold uppercase tracking-wider mt-2">Redirección inmediata a WhatsApp</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Catálogo Digital Ilimitado",
                    "Pedidos Estructurados",
                    "Soporte Vía WhatsApp",
                    "Sin Comisiones por Venta",
                    plan.featured ? "Gestión Avanzada" : null
                  ].filter(Boolean).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-400 font-medium">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <motion.button 
                  onClick={() => handlePlanSelection(plan.name, plan.price)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-black text-center transition-all ${plan.featured ? 'bg-cyan-400 text-black hover:bg-cyan-300' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}
                >
                  Seleccionar
                </motion.button>
              </GlassCard>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => (
  <section className="py-32 px-6 relative overflow-hidden text-center">
    <div className="absolute inset-0 bg-blue-600/5 -z-10" />
    <FadeInUp>
      <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter">¿Listo para vender más?</h2>
      
      <motion.button 
        onClick={() => handleWhatsAppRedirect("Hola VendeMass, me gustaría recibir más información sobre el sistema de pedidos por WhatsApp.")}
        animate={{ 
          boxShadow: [
            "0 0 0 0px rgba(37, 211, 102, 0.4)", 
            "0 0 0 20px rgba(37, 211, 102, 0)",
            "0 0 0 0px rgba(37, 211, 102, 0)"
          ] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-4 bg-[#25D366] text-white px-12 py-8 rounded-[2.5rem] font-black text-3xl md:text-5xl shadow-2xl group transition-transform"
      >
        <MessageCircle className="w-10 h-10 md:w-14 md:h-14 group-hover:rotate-12 transition-transform" />
        EMPEZAR AHORA
      </motion.button>
      
      <p className="mt-10 text-slate-500 font-bold uppercase tracking-[0.3em] text-sm">Respuesta inmediata por WhatsApp</p>
    </FadeInUp>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 bg-black/20 text-center">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        <Zap className="w-6 h-6 text-blue-600 fill-current" />
        <span className="text-xl font-black tracking-tighter text-white uppercase">VendeMass</span>
      </div>
      <p className="text-slate-600 text-sm font-medium">
        &copy; 2024 VendeMass S.A.C. – Revolucionando el Delivery.
      </p>
      <div className="flex gap-8">
        <a href="#" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Términos</a>
        <a href="#" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Privacidad</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-cyan-400 selection:text-black">
      <Navbar />
      <Hero />
      
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <FadeInUp delay={0.1}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Catálogo Móvil</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Experiencia de compra fluida y rápida, optimizada para convertir cada visita en venta.</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-cyan-400/10 border border-cyan-400/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Sin Mensajes Largos</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Recibe la orden estructurada: dirección, pago y detalles sin preguntas infinitas.</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">Aumenta tu Ticket</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Vende más ofreciendo adicionales y complementos de forma visual y atractiva.</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <TrustSection />
      <Pricing />
      <CTAFinal />
      <Footer />
    </div>
  );
}
