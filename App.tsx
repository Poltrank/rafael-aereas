
import React from 'react';
import { 
  Monitor, 
  Printer, 
  Network, 
  Car, 
  Cpu,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceCard from './components/ServiceCard';

const App: React.FC = () => {
  const PHONE_NUMBER = "5522998163863";

  const handleWhatsAppRedirect = (serviceName: string) => {
    const message = encodeURIComponent(`Olá Rafael, vi seu site e gostaria de solicitar informações sobre: ${serviceName}`);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-between py-6 sm:justify-center relative bg-slate-950 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full flex flex-col items-center">
        {/* Profile Section */}
        <div className="w-full max-w-md flex flex-col items-center mb-6 sm:mb-8 animate-fade-in">
          <div className="relative mb-3 group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 animate-glow transition-transform group-hover:scale-105 duration-500">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                 <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tighter">RA</span>
              </div>
            </div>
            <div className="absolute bottom-1 right-1 bg-green-500 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-slate-950"></div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">Rafael Areas</h1>
          <p className="text-slate-400 text-xs sm:text-sm font-mono flex items-center gap-2">
            <ShieldCheck size={14} className="text-blue-400" />
            Especialista & Soluções
          </p>
        </div>

        {/* Services Section */}
        <div className="w-full max-w-md flex flex-col gap-3 sm:gap-4 z-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <ServiceCard 
            title="Assistência Técnica"
            subtitle="Computadores, Impressoras e Redes"
            icon={<Cpu size={20} className="sm:w-6 sm:h-6 text-blue-400" />}
            services={[
              { name: "Computadores & Notebooks", icon: <Monitor size={14} /> },
              { name: "Configuração de Redes", icon: <Network size={14} /> },
              { name: "Manutenção de Impressoras", icon: <Printer size={14} /> }
            ]}
            color="blue"
            onClick={() => handleWhatsAppRedirect("Assistência Técnica (Computadores/Redes)")}
          />

          <ServiceCard 
            title="Motorista Particular"
            subtitle="Conforto, Segurança e Pontualidade"
            icon={<Car size={20} className="sm:w-6 sm:h-6 text-cyan-400" />}
            services={[
              { name: "Viagens & Traslados", icon: <Smartphone size={14} /> },
              { name: "Serviço Executivo", icon: <ShieldCheck size={14} /> }
            ]}
            color="cyan"
            onClick={() => handleWhatsAppRedirect("Motorista Particular")}
          />
        </div>
      </div>

      {/* Footer Text - Usando flex-grow ou margin-top para empurrar para baixo mas manter visível */}
      <div className="w-full text-center mt-6 sm:mt-10 mb-2 sm:mb-0">
        <p className="text-slate-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-mono animate-pulse">
          Soluções rápidas e eficientes
        </p>
      </div>

      {/* WhatsApp Action */}
      <WhatsAppButton phoneNumber={PHONE_NUMBER} />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-600 rounded-t-full shadow-[0_-4px_20px_rgba(37,99,235,0.4)] hidden sm:block"></div>
    </div>
  );
};

export default App;
