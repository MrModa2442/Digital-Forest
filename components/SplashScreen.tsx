import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  const { t } = useTranslation();
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      // Wait for fade-out animation to finish before unmounting
      const timer = setTimeout(() => setShouldRender(false), 500); // Must match duration below
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) {
    return null;
  }

  const title = t('digital_forest') as string;

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-900 to-emerald-900 flex flex-col items-center justify-center text-white font-sans z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <style>{`
        @keyframes draw-path {
          to { stroke-dashoffset: 0; }
        }

        @keyframes grow-leaf {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .tree-path {
          stroke: #bef264; /* lime-300 */
          fill: none;
          stroke-linecap: round;
          /* A value large enough to cover the path length */
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-path 0.8s ease-out forwards;
        }

        .tree-leaf {
          transform-origin: center;
          opacity: 0;
          animation: grow-leaf 0.4s ease-out forwards;
        }

        @keyframes grow-and-glow {
          0% {
            opacity: 0;
            transform: scale(0.5);
            text-shadow: 0 0 4px rgba(220, 252, 231, 0.5);
          }
          70% {
            opacity: 1;
            transform: scale(1.1);
            text-shadow: 0 0 20px rgba(190, 242, 100, 0.9); /* lime-300 glow */
          }
          100% {
            opacity: 1;
            transform: scale(1);
            text-shadow: 0 0 10px rgba(190, 242, 100, 0.7); /* lime-300 glow */
          }
        }
        .animate-grow-and-glow {
          display: inline-block;
          animation: grow-and-glow 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
      
      <div className="text-center">
        <svg viewBox="0 0 100 100" className="w-40 h-40 mx-auto mb-4">
            {/* Paths for trunk and branches */}
            <path className="tree-path" d="M50 95 V 40" strokeWidth="9" style={{ animationDelay: '0s' }} />
            <path className="tree-path" d="M50 80 Q 25 70, 20 45" strokeWidth="7" style={{ animationDelay: '0.1s' }} />
            <path className="tree-path" d="M50 75 Q 75 65, 80 40" strokeWidth="7" style={{ animationDelay: '0.2s' }} />
            
            {/* Circles for leaves */}
            <g className="tree-leaf" style={{ animationDelay: '0.6s' }}><circle cx="18" cy="45" r="15" fill="#5a7a5a" /></g>
            <g className="tree-leaf" style={{ animationDelay: '0.65s' }}><circle cx="82" cy="40" r="15" fill="#5a7a5a" /></g>
            <g className="tree-leaf" style={{ animationDelay: '0.7s' }}><circle cx="30" cy="35" r="18" fill="#6a8a6a" /></g>
            <g className="tree-leaf" style={{ animationDelay: '0.75s' }}><circle cx="70" cy="30" r="18" fill="#6a8a6a" /></g>
            <g className="tree-leaf" style={{ animationDelay: '0.8s' }}><circle cx="50" cy="40" r="15" fill="#5a7a5a" /></g>
            <g className="tree-leaf" style={{ animationDelay: '0.85s' }}><circle cx="50" cy="25" r="20" fill="#4a644a" /></g>
        </svg>

        <h1 className="text-5xl font-bold tracking-wider text-white mb-4">
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="animate-grow-and-glow"
              style={{ animationDelay: `${1500 + index * 80}ms`, opacity: 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p
          className="text-lg text-emerald-200 animate-fade-in-fast"
          style={{ animationDelay: `3200ms`, opacity: 0 }}
        >
          {t('splash_creator_credit')}
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;