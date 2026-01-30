
import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Printer, 
  Network, 
  Car, 
  Cpu,
  ShieldCheck,
  Smartphone,
  Lock,
  X,
  Save,
  Image as ImageIcon
} from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceCard from './components/ServiceCard';

const App: React.FC = () => {
  const PHONE_NUMBER = "5522998163863";
  const ADMIN_PASSWORD = "sempiramide";

  // Estados para Admin e Foto
  const [photoUrl, setPhotoUrl] = useState<string>(localStorage.getItem('rafael_areas_photo') || '');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [tempPhotoUrl, setTempPhotoUrl] = useState(photoUrl);
  const [isLogged, setIsLogged] = useState(false);

  const handleWhatsAppRedirect = (serviceName: string) => {
    const message = encodeURIComponent(`Olá Rafael, vi seu site e gostaria de solicitar informações sobre: ${serviceName}`);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const handleAdminAccess = () => {
    if (isLogged) {
      setIsAdminOpen(true);
    } else {
      const pass = window.prompt("Acesso Restrito. Digite a senha:");
      if (pass === ADMIN_PASSWORD) {
        setIsLogged(true);
        setIsAdminOpen(true);
      } else if (pass !== null) {
        alert("Senha incorreta!");
      }
    }
  };

  const savePhoto = () => {
    localStorage.setItem('rafael_areas_photo', tempPhotoUrl);
    setPhotoUrl(tempPhotoUrl);
    setIsAdminOpen(false);
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
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 animate-glow transition-transform group-hover:scale-105 duration-500 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                 {photoUrl ? (
                   <img src={photoUrl} alt="Rafael Areas" className="w-full h-full object-cover" />
                 ) : (
                   <span className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tighter">RA</span>
                 )}
              </div>
            </div>
            <div className="absolute bottom-1 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-950"></div>
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

      {/* Footer & Hidden Admin Trigger */}
      <div className="w-full flex flex-col items-center gap-4 mt-6 sm:mt-10 mb-2">
        <p className="text-slate-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-mono animate-pulse">
          Soluções rápidas e eficientes
        </p>
        
        {/* Hidden Lock Icon */}
        <button 
          onClick={handleAdminAccess}
          className="opacity-10 hover:opacity-100 transition-opacity duration-500 text-slate-400"
          title="Acesso ADM"
        >
          <Lock size={12} />
        </button>
      </div>

      {/* Admin Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="glass w-full max-w-sm p-6 rounded-3xl relative">
            <button 
              onClick={() => setIsAdminOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <ImageIcon size={20} />
              </div>
              <h2 className="text-xl font-bold text-white">Configurações</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                  Link da Foto de Perfil
                </label>
                <input 
                  type="text" 
                  value={tempPhotoUrl}
                  onChange={(e) => setTempPhotoUrl(e.target.value)}
                  placeholder="https://link-da-sua-foto.com/imagem.jpg"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <button 
                onClick={savePhoto}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
              >
                <Save size={18} />
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Action */}
      <WhatsAppButton phoneNumber={PHONE_NUMBER} />

      {/* Bottom accent line for Desktop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-600 rounded-t-full shadow-[0_-4px_20px_rgba(37,99,235,0.4)] hidden sm:block"></div>
    </div>
  );
};

export default App;
