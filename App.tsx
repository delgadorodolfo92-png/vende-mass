
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
  Star
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

// --- Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="p-2 bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">
          <Zap className="w-5 h-5 text-white fill-current" />
        </div>
        <span className="text-xl font-black tracking-tighter text-white uppercase">VendeMass</span>
      </div>
      <motion.a 
        href="https://wa.me/51929932210"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all backdrop-blur-md"
      >
        Contactar
      </motion.a>
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
        
        <motion.a 
          href="https://wa.me/51929932210"
          target="_blank"
          whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(37,99,235,0.5)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex relative group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-2xl font-black text-xl items-center gap-3 overflow-hidden shadow-2xl transition-all"
        >
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
          Quiero mi catálogo ahora
          <ArrowRight className="w-6 h-6" />
        </motion.a>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <motion.div 
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(37,99,235,0.7)] border border-white/20 bg-slate-900/40">
            {/* Updated Hero Image with the new persuasive link provided */}
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
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-6xl font-black text-white">S/ {plan.price}</span>
                  <span className="text-slate-500 font-bold">/ {plan.period}</span>
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

                <motion.a 
                  href="https://wa.me/51929932210"
                  target="_blank"
                  className={`w-full py-4 rounded-xl font-black text-center transition-all ${plan.featured ? 'bg-cyan-400 text-black hover:bg-cyan-300' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}
                >
                  Seleccionar
                </motion.a>
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
      
      <motion.a 
        href="https://wa.me/51929932210"
        target="_blank"
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
      </motion.a>
      
      <p className="mt-10 text-slate-500 font-bold uppercase tracking-[0.3em] text-sm">Respuesta inmediata por WhatsApp</p>
    </FadeInUp>
  </section>
);

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/51929932210"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer group"
  >
    <MessageCircle className="w-8 h-8 fill-current" />
    <motion.span 
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 rounded-full bg-[#25D366]"
    />
    <div className="absolute right-full mr-4 bg-slate-900 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
      ¡Hablemos por WhatsApp!
    </div>
  </motion.a>
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

      <Pricing />
      <CTAFinal />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
