import React from 'react';

interface BrandLogoProps {
  /** Size variant or specific height */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to show the accompanying brand typography */
  showText?: boolean;
  /** Whether to show the engineering tagline */
  showTagline?: boolean;
  /** Custom additional className */
  className?: string;
  /** Orientation for card vs navbar */
  layout?: 'horizontal' | 'vertical';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = true,
  className = '',
  layout = 'horizontal',
}) => {
  // Height / scale dimensions based on size
  const iconDimensions = {
    sm: { width: 36, height: 32 },
    md: { width: 48, height: 42 },
    lg: { width: 62, height: 54 },
    xl: { width: 88, height: 76 },
  }[size];

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  }[size];

  const subSizes = {
    sm: 'text-[8px] sm:text-[9px]',
    md: 'text-[9px] sm:text-[10px] md:text-[11px]',
    lg: 'text-[11px] sm:text-xs',
    xl: 'text-xs sm:text-sm',
  }[size];

  return (
    <div
      className={`inline-flex ${
        layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center text-left'
      } gap-3 select-none ${className}`}
    >
      {/* Sharp Steel PEB Portal Frame Vector / SVG Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        {/* Ambient Electric Cyan Glow Backdrop */}
        <div
          className="absolute -inset-1 rounded-full blur-md opacity-60 pointer-events-none transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 229, 255, 0.45) 0%, rgba(0, 229, 255, 0.1) 60%, transparent 80%)',
          }}
        />

        <svg
          width={iconDimensions.width}
          height={iconDimensions.height}
          viewBox="0 0 72 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Electric Cyan / Blue Gradient */}
            <linearGradient id="peb-cyan-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="50%" stopColor="#00b4d8" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* Metallic Steel / Chrome Gradient for Portal Flanges */}
            <linearGradient id="peb-flange-metallic" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e2e8f0" />
              <stop offset="65%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>

            {/* Glowing Apex Filter */}
            <filter id="neon-glow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Blueprint CAD Grid Subtle Background Lines */}
          <line x1="8" y1="56" x2="64" y2="56" stroke="#00e5ff" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="36" y1="4" x2="36" y2="56" stroke="#00e5ff" strokeWidth="0.6" strokeDasharray="2 2" strokeOpacity="0.35" />

          {/* Left Column Base Plate & Foundation Pin */}
          <rect x="7" y="54.5" width="10" height="2.5" rx="0.5" fill="#00e5ff" />
          <circle cx="9.5" cy="55.8" r="0.8" fill="#050b14" />
          <circle cx="14.5" cy="55.8" r="0.8" fill="#050b14" />

          {/* Right Column Base Plate & Foundation Pin */}
          <rect x="55" y="54.5" width="10" height="2.5" rx="0.5" fill="#00e5ff" />
          <circle cx="57.5" cy="55.8" r="0.8" fill="#050b14" />
          <circle cx="62.5" cy="55.8" r="0.8" fill="#050b14" />

          {/* Main Tapered PEB Rigid Frame Solid Web Shell (Translucent Steel Blue Fill) */}
          <path
            d="M10 54 L9 18 L36 7 L63 18 L62 54 L57 54 L58 22 L36 13 L14 22 L15 54 Z"
            fill="rgba(0, 229, 255, 0.08)"
            stroke="url(#peb-cyan-glow)"
            strokeWidth="1.6"
            strokeLinejoin="round"
            filter="url(#neon-glow)"
          />

          {/* Outer Steel Flange Outline (Bright Electric Cyan #00e5ff) */}
          <path
            d="M8.5 54.5 L7.5 17.5 L36 6 L64.5 17.5 L63.5 54.5"
            stroke="#00e5ff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Tapered Flange Outline (Showing Clear Span Tapered Knee Geometry) */}
          <path
            d="M16 54.5 L15.2 23 L36 14.5 L56.8 23 L56 54.5"
            stroke="#00e5ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
          />

          {/* Knee Joint / Haunch Gusset Reinforcement Plates (Left & Right) */}
          <path
            d="M7.5 17.5 L15.2 23 M10.5 28 L15.2 23"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeOpacity="0.75"
          />
          <path
            d="M64.5 17.5 L56.8 23 M61.5 28 L56.8 23"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeOpacity="0.75"
          />

          {/* Apex / Ridge Splice Connection Plate */}
          <line x1="36" y1="5.5" x2="36" y2="15" stroke="#ffffff" strokeWidth="1.8" />
          <circle cx="36" cy="8" r="1.2" fill="#00e5ff" />
          <circle cx="36" cy="12.5" r="1.2" fill="#00e5ff" />

          {/* Internal Structural Bracing / Tie & EOT Crane Girder Brackets */}
          {/* Crane Bracket Left */}
          <path d="M15.5 32 L20.5 32 L15.7 37 Z" fill="#00e5ff" fillOpacity="0.8" />
          {/* Crane Bracket Right */}
          <path d="M56.5 32 L51.5 32 L56.3 37 Z" fill="#00e5ff" fillOpacity="0.8" />

          {/* Centerline Cross-Bracing Silhouette (Classic PEB Elevation) */}
          <line x1="20" y1="32" x2="52" y2="32" stroke="#00e5ff" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7" />

          {/* Center Structural Engineering Node Star */}
          <circle cx="36" cy="32" r="2.2" fill="#00e5ff" filter="url(#neon-glow)" />
          <circle cx="36" cy="32" r="1" fill="#ffffff" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className={layout === 'vertical' ? 'mt-1' : ''}>
          {/* 'YS PEB' in Bold Modern Metallic Typography */}
          <div className="leading-none flex items-baseline gap-1.5 justify-center sm:justify-start">
            <span
              className={`font-heading font-black ${titleSizes} tracking-wider inline-block text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(0,229,255,0.35)]`}
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #ffffff 0%, #f1f5f9 25%, #cbd5e1 50%, #94a3b8 75%, #ffffff 100%)',
              }}
            >
              YS <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">PEB</span>
            </span>
          </div>

          {/* Subtitle: DESIGN STUDIO & CONSULTANTS */}
          <div
            className={`${subSizes} font-bold tracking-[0.16em] uppercase text-slate-300 group-hover:text-cyan-300 transition-colors mt-0.5 sm:mt-1 font-mono-spec`}
          >
            DESIGN STUDIO & CONSULTANTS
          </div>

          {/* Engineering Motto */}
          {showTagline && (
            <div className="flex items-center gap-1.5 text-[9px] text-amber-400 font-medium italic mt-0.5">
              <span className="w-2.5 h-px bg-amber-400/60 inline-block"></span>
              <span>From Design to Fabrication Support</span>
              <span className="w-2.5 h-px bg-amber-400/60 inline-block"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
