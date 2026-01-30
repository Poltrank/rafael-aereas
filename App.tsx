
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
    <div className="h-screen w-full flex flex-col items-center justify-center relative bg-slate-950 overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* Profile Section */}
      <div className="w-full max-w-md flex flex-col items-center mb-8 animate-[fadeIn_0.6s_ease-out]">
        <div className="relative mb-4 group">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 animate-glow transition-transform group-hover:scale-105 duration-500">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
               <span className="text-3xl font-bold text-white font-mono tracking-tighter">RA</span>
            </div>
          </div>
          <div className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-950"></div>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Rafael Areas</h1>
        <p className="text-slate-400 text-sm font-mono flex items-center gap-2">
          <ShieldCheck size={14} className="text-blue-400" />
          Especialista & Soluções
        </p>
      </div>

      {/* Services Section */}
      <div className="w-full max-w-md flex flex-col gap-4 z-10">
        <ServiceCard 
          title="Assistência Técnica"
          subtitle="Computadores, Impressoras e Redes"
          icon={<Cpu size={24} className="text-blue-400" />}
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
          icon={<Car size={24} className="text-cyan-400" />}
          services={[
            { name: "Viagens & Traslados", icon: <Smartphone size={14} /> },
            { name: "Serviço Executivo", icon: <ShieldCheck size={14} /> }
          ]}
          color="cyan"
          onClick={() => handleWhatsAppRedirect("Motorista Particular")}
        />
      </div>

      {/* Footer Text */}
      <div className="mt-10 text-center">
        <p className="text-slate-500 text-xs tracking-[0.2em] uppercase font-mono animate-pulse">
          Soluções rápidas e eficientes
        </p>
      </div>

      {/* WhatsApp Action */}
      <WhatsAppButton phoneNumber={PHONE_NUMBER} />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-600 rounded-t-full shadow-[0_-4px_20px_rgba(37,99,235,0.4)]"></div>
    </div>
  );
};

export default App;
