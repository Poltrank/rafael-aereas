
import React, { useState } from 'react';
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
  Image as ImageIcon,
  Info
} from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceCard from './components/ServiceCard';

/**
 * CONFIGURAÇÃO GLOBAL: 
 * O link da sua foto foi inserido abaixo.
 * Agora ela aparecerá para TODOS os seus clientes que acessarem o site.
 */
const GLOBAL_PROFILE_IMAGE = "https://i.postimg.cc/zDL2Jc6S/69f24fcb-0b14-449e-a5a5-d2eaa2700c16.jpg"; 

const App: React.FC = () => {
  const PHONE_NUMBER = "5522998163863";
  const ADMIN_PASSWORD = "sempiramide";

  // Inicializa com a foto global. O localStorage pode ser usado para testes de novos links antes de oficializar no código.
  const [photoUrl, setPhotoUrl] = useState<string>(
    GLOBAL_PROFILE_IMAGE || localStorage.getItem('rafael_areas_photo') || ''
  );
  
  const [isAdminOpen, setIsAdminOpen] = useState(false);
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
    // Salva localmente para preview imediato no navegador atual
    localStorage.setItem('rafael_areas_photo', tempPhotoUrl);
    setPhotoUrl(tempPhotoUrl);
    setIsAdminOpen(false);
    alert("Preview atualizado com sucesso!");
  };

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-between py-6 sm:justify-center relative bg-slate-950 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full flex flex-col items-center">
        {/* Profile Section */}
        <div className="w-full max-w-md flex flex-col items-center mb-6 sm:mb-8 animate-fade-in">
          <div className="relative mb-4 group">
            {/* Formato Quadrado Arredondado (estilo Tech Moderno) */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 animate-glow transition-all group-hover:scale-105 group-hover:rotate-2 duration-500 shadow-2xl">
              <div className="w-full h-full rounded-[2.2rem] bg-slate-900 flex items-center justify-center overflow-hidden">
                 {photoUrl ? (
                   <img src={photoUrl} alt="Rafael Areas" className="w-full h-full object-cover" />
                 ) : (
                   <div className="flex flex-col items-center">
                      <span className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tighter">RA</span>
                      <span className="text-[10px] text-blue-400 font-mono mt-1 opacity-50">TECH</span>
                   </div>
                 )}
              </div>
            </div>
            {/* Status Online Indicator */}
            <div className="absolute bottom-2 right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-slate-950 shadow-lg"></div>
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
        
        <button 
          onClick={handleAdminAccess}
          className="opacity-5 hover:opacity-100 transition-opacity duration-1000 text-slate-700 hover:text-blue-400 py-2 px-4"
          title="Acesso ADM"
        >
          <Lock size={14} />
        </button>
      </div>

      {/* Admin Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fade-in">
          <div className="glass w-full max-w-sm p-8 rounded-[2.5rem] relative border-blue-500/20 shadow-2xl">
            <button 
              onClick={() => setIsAdminOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                <ImageIcon size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Configurações</h2>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Painel do Especialista</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex gap-3">
                <Info size={20} className="text-blue-400 shrink-0" />
                <p className="text-[11px] text-blue-200/80 leading-relaxed">
                  A imagem global já foi configurada no sistema. Use este campo para testar novos links antes de pedir a atualização definitiva.
                </p>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">
                  URL da Foto na Nuvem (Teste Local)
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={tempPhotoUrl}
                    onChange={(e) => setTempPhotoUrl(e.target.value)}
                    placeholder="https://link-da-foto.com/perfil.jpg"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>

              <button 
                onClick={savePhoto}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-900/20"
              >
                <Save size={20} />
                Visualizar no meu celular
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Action */}
      <WhatsAppButton phoneNumber={PHONE_NUMBER} />

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 rounded-full"></div>
    </div>
  );
};

export default App;
