
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export const LogoIcon: React.FC<{ size?: string; variant?: 'dark' | 'light'; className?: string }> = ({ 
  size = "w-10 h-10", 
  variant = 'dark',
  className = ""
}) => {
  const colorClass = variant === 'dark' ? 'text-black' : 'text-white';
  const borderClass = variant === 'dark' ? 'border-black' : 'border-white';
  
  return (
    <div className={`relative flex items-center justify-center ${size} border hairline-border ${borderClass} rotate-45 transition-transform duration-700 ${className}`}>
      <span className={`font-cinzel font-bold -rotate-45 block leading-none ${colorClass}`} style={{ fontSize: 'calc(100% * 0.5)' }}>
        B
      </span>
    </div>
  );
};

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark', showTagline = false }) => {
  const colorClass = variant === 'dark' ? 'text-black' : 'text-white';

  return (
    <div className={`flex flex-col items-center justify-center select-none overflow-visible ${className}`}>
      <div className="flex items-center space-x-3 mb-0.5">
        <LogoIcon variant={variant} className="group-hover:rotate-0" />
        
        <div className="flex flex-col items-start leading-none py-1">
          <span className={`font-cinzel text-xl md:text-3xl font-bold tracking-[0.2em] ${colorClass}`}>
            LE BARON
          </span>
          {showTagline && (
            <div className="h-4 flex items-end mt-1">
              <span className={`text-[7px] md:text-[8px] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-60 ${colorClass} whitespace-nowrap`}>
                Maison de Prestige
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;
