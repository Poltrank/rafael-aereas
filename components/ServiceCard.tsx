
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceItem {
  name: string;
  icon: React.ReactNode;
}

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  services: ServiceItem[];
  color: 'blue' | 'cyan';
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, icon, services, color, onClick }) => {
  const accentColor = color === 'blue' ? 'border-blue-500/30 hover:border-blue-500/60' : 'border-cyan-500/30 hover:border-cyan-500/60';
  const glowColor = color === 'blue' ? 'group-hover:shadow-blue-500/10' : 'group-hover:shadow-cyan-500/10';

  return (
    <div 
      onClick={onClick}
      className={`glass p-5 rounded-2xl w-full flex flex-col gap-3 group transition-all duration-300 border ${accentColor} ${glowColor} cursor-pointer active:scale-[0.98] transform-gpu`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl bg-slate-900/50 border border-slate-700/50 text-${color}-400 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </div>
        <ChevronRight size={18} className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </div>
      
      <div className="grid grid-cols-1 gap-2 mt-1">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-900/40 p-2 rounded-lg border border-slate-800/50 pointer-events-none">
            <span className={`text-${color}-400/70`}>{service.icon}</span>
            {service.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
