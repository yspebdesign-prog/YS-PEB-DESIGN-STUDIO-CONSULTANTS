import React, { useState } from 'react';
import { Layers, ZoomIn, Info, Eye } from 'lucide-react';

interface DiagramProps {
  type: 'portal-frame' | 'knee-joint' | 'base-plate' | 'purlin-detail' | 'pedestal';
  showAnnotations?: boolean;
  interactive?: boolean;
}

export const TechnicalCADDiagram: React.FC<DiagramProps> = ({
  type,
  showAnnotations = true,
  interactive = true,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'blueprint' | 'cad-dark' | 'schematic'>('blueprint');

  // Colors based on viewMode
  const styles = {
    blueprint: {
      bg: 'bg-[#081b2e] border-cyan-500/30',
      grid: '#0e3153',
      gridDense: '#0a233b',
      steel: '#38bdf8',
      steelFill: 'rgba(56, 189, 248, 0.12)',
      dimension: '#f59e0b',
      text: '#93c5fd',
      accent: '#22d3ee',
      bolts: '#fbbf24',
    },
    'cad-dark': {
      bg: 'bg-[#050b14] border-slate-700/60',
      grid: '#111d2e',
      gridDense: '#09121f',
      steel: '#60a5fa',
      steelFill: 'rgba(37, 99, 235, 0.18)',
      dimension: '#e2e8f0',
      text: '#cbd5e1',
      accent: '#38bdf8',
      bolts: '#f59e0b',
    },
    schematic: {
      bg: 'bg-[#0c1626] border-blue-600/40',
      grid: '#132238',
      gridDense: '#0d1829',
      steel: '#93c5fd',
      steelFill: 'rgba(147, 197, 253, 0.10)',
      dimension: '#f97316',
      text: '#e2e8f0',
      accent: '#60a5fa',
      bolts: '#eab308',
    },
  }[viewMode];

  const hotspotsInfo: Record<string, { title: string; desc: string; spec: string }> = {
    haunch: {
      title: 'Haunch / Knee Moment Joint',
      desc: 'Deepened rafter section at column junction to resist maximum negative bending moment under gravity & wind load combinations.',
      spec: 'Extended end plate with Gr 8.8 / 10.9 HSFG bolts',
    },
    tapered_column: {
      title: 'Built-up Tapered Column',
      desc: 'Variable web depth matching the bending moment profile, significantly reducing steel weight compared to hot-rolled uniform sections.',
      spec: 'Submerged arc welded (SAW) built-up plate ASTM A572 / IS:2062',
    },
    apex_joint: {
      title: 'Ridge Apex Bolted Joint',
      desc: 'Rigid pitched frame connection engineered with precision shop-drilled end plates for rapid crane-assisted site bolting.',
      spec: 'Pre-torqued high strength fasteners with backing plates',
    },
    base_plate: {
      title: 'Pinned / Rigid Base Plate',
      desc: 'High-strength steel base plate transmitting vertical reactions and horizontal base shears into concrete foundation pedestals.',
      spec: 'Anchor bolts embedded in M30 concrete with non-shrink grout',
    },
    purlin_line: {
      title: 'Cold-Formed Z/C Purlin Framing',
      desc: 'Secondary cold-formed structural members transmitting roof sheet loads to primary rigid frames, with sag rods for lateral stability.',
      spec: 'High-tensile galvanized / pre-painted Z-profile steel',
    },
    crane_corbel: {
      title: 'Crane Runway Bracket (Corbel)',
      desc: 'Heavy-duty steel bracket welded to building column to support crane runway beams, rails, and dynamic surge loads.',
      spec: 'Designed for 5 MT - 50 MT overhead EOT cranes',
    },
  };

  return (
    <div className={`relative rounded-xl border ${styles.bg} p-4 transition-all duration-300 overflow-hidden font-mono-spec shadow-2xl`}>
      {/* CAD Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-slate-700/40 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-semibold uppercase tracking-wider text-[10px]">
            <Layers className="w-3 h-3" /> CAD VIEWPORT: {type.toUpperCase()}
          </span>
          <span className="hidden sm:inline text-slate-400 text-[11px]">
            SCALE: NOTED • COORD SYSTEM: WCS
          </span>
        </div>

        <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded border border-slate-700/60">
          <button
            type="button"
            onClick={() => setViewMode('blueprint')}
            className={`px-2 py-0.5 text-[10px] rounded transition-colors ${
              viewMode === 'blueprint' ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Blueprint
          </button>
          <button
            type="button"
            onClick={() => setViewMode('cad-dark')}
            className={`px-2 py-0.5 text-[10px] rounded transition-colors ${
              viewMode === 'cad-dark' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            CAD Dark
          </button>
          <button
            type="button"
            onClick={() => setViewMode('schematic')}
            className={`px-2 py-0.5 text-[10px] rounded transition-colors ${
              viewMode === 'schematic' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Schematic
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] min-h-[260px] max-h-[460px] flex items-center justify-center">
        {type === 'portal-frame' && (
          <svg viewBox="0 0 800 450" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid Pattern */}
            <defs>
              <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={styles.grid} strokeWidth="0.75" />
                <path d="M 20 0 L 20 40 M 0 20 L 40 20" fill="none" stroke={styles.gridDense} strokeWidth="0.4" strokeDasharray="2,2" />
              </pattern>
            </defs>
            <rect width="800" height="450" fill="url(#cadGrid)" />

            {/* Title Block & Coordinate Axes */}
            <g opacity="0.6" className="text-[10px]" fill={styles.text}>
              <line x1="25" y1="420" x2="65" y2="420" stroke={styles.dimension} strokeWidth="1.5" />
              <line x1="25" y1="420" x2="25" y2="380" stroke={styles.accent} strokeWidth="1.5" />
              <text x="70" y="423">X</text>
              <text x="22" y="375">Y</text>
              <text x="25" y="25" fill={styles.text}>DWG: YS-PEB-PORTAL-PRIMARY-FRAME</text>
              <text x="25" y="40" fill={styles.text}>SLOPE: 1:10 (5.71°) | CLEAR SPAN: 28.0m</text>
            </g>

            {/* Ground / Foundation Pedestals */}
            <rect x="100" y="350" width="60" height="40" fill="#1e293b" stroke={styles.steel} strokeWidth="1.5" />
            <rect x="640" y="350" width="60" height="40" fill="#1e293b" stroke={styles.steel} strokeWidth="1.5" />
            <line x1="70" y1="390" x2="730" y2="390" stroke="#475569" strokeWidth="2" strokeDasharray="8,4" />
            <text x="75" y="405" fill="#64748b" className="text-[9px]">GRADE LEVEL ±0.000</text>

            {/* Left Column (Tapered) */}
            <polygon
              points="120,350 140,350 160,180 100,180"
              fill={styles.steelFill}
              stroke={styles.steel}
              strokeWidth="2.5"
            />

            {/* Right Column (Tapered) */}
            <polygon
              points="660,350 680,350 700,180 640,180"
              fill={styles.steelFill}
              stroke={styles.steel}
              strokeWidth="2.5"
            />

            {/* Left Rafter (Tapered with Haunch) */}
            <polygon
              points="100,180 160,180 395,115 395,100"
              fill={styles.steelFill}
              stroke={styles.steel}
              strokeWidth="2.5"
            />

            {/* Right Rafter (Tapered with Haunch) */}
            <polygon
              points="700,180 640,180 405,115 405,100"
              fill={styles.steelFill}
              stroke={styles.steel}
              strokeWidth="2.5"
            />

            {/* Haunch Stiffeners / Moment knee gussets */}
            <line x1="120" y1="180" x2="160" y2="150" stroke={styles.accent} strokeWidth="1.5" strokeDasharray="3,2" />
            <line x1="680" y1="180" x2="640" y2="150" stroke={styles.accent} strokeWidth="1.5" strokeDasharray="3,2" />

            {/* Apex Ridge Connection Plate */}
            <line x1="400" y1="95" x2="400" y2="120" stroke={styles.dimension} strokeWidth="3" />
            <circle cx="400" cy="100" r="3" fill={styles.bolts} />
            <circle cx="400" cy="110" r="3" fill={styles.bolts} />

            {/* Knee Flange Bolts */}
            <line x1="100" y1="180" x2="160" y2="180" stroke={styles.dimension} strokeWidth="2.5" />
            <circle cx="115" cy="180" r="2.5" fill={styles.bolts} />
            <circle cx="145" cy="180" r="2.5" fill={styles.bolts} />

            <line x1="640" y1="180" x2="700" y2="180" stroke={styles.dimension} strokeWidth="2.5" />
            <circle cx="655" cy="180" r="2.5" fill={styles.bolts} />
            <circle cx="685" cy="180" r="2.5" fill={styles.bolts} />

            {/* Base Plates */}
            <rect x="110" y="346" width="40" height="5" fill={styles.dimension} stroke={styles.dimension} />
            <rect x="650" y="346" width="40" height="5" fill={styles.dimension} stroke={styles.dimension} />
            {/* Anchor Bolts */}
            <line x1="118" y1="335" x2="118" y2="365" stroke={styles.bolts} strokeWidth="2" />
            <line x1="142" y1="335" x2="142" y2="365" stroke={styles.bolts} strokeWidth="2" />
            <line x1="658" y1="335" x2="658" y2="365" stroke={styles.bolts} strokeWidth="2" />
            <line x1="682" y1="335" x2="682" y2="365" stroke={styles.bolts} strokeWidth="2" />

            {/* Roof Purlin Indicators */}
            {[140, 185, 230, 275, 320, 365, 435, 480, 525, 570, 615, 660].map((px, idx) => {
              // calculate approximate y on roof line
              const isLeft = px <= 400;
              const fraction = isLeft ? (px - 100) / 300 : (700 - px) / 300;
              const py = 180 - fraction * 80;
              return (
                <g key={idx}>
                  <rect x={px - 2} y={py - 10} width="4" height="10" fill={styles.accent} opacity="0.8" />
                  <line x1={px} y1={py - 10} x2={px + 4} y2={py - 10} stroke={styles.accent} strokeWidth="1" />
                </g>
              );
            })}

            {/* Crane Runway Bracket / Corbel (Optional industrial feature) */}
            <polygon points="150,260 175,260 155,280" fill={styles.dimension} stroke={styles.dimension} strokeWidth="1" />
            <rect x="165" y="248" width="16" height="12" fill="#475569" stroke={styles.steel} />
            <text x="185" y="258" fill={styles.text} className="text-[8px]">EOT CRANE BRACKET</text>

            {/* Dimensions Lines */}
            {/* Span Dimension */}
            <g stroke={styles.dimension} strokeWidth="1">
              <line x1="130" y1="425" x2="670" y2="425" />
              <line x1="130" y1="420" x2="130" y2="430" />
              <line x1="670" y1="420" x2="670" y2="430" />
              <text x="400" y="420" fill={styles.dimension} textAnchor="middle" className="text-[10px] font-bold">
                CLEAR SPAN = 28,000 mm (c/c)
              </text>
            </g>

            {/* Eave Height Dimension */}
            <g stroke={styles.dimension} strokeWidth="1">
              <line x1="735" y1="350" x2="735" y2="180" />
              <line x1="730" y1="350" x2="740" y2="350" />
              <line x1="730" y1="180" x2="740" y2="180" />
              <text x="745" y="270" fill={styles.dimension} className="text-[9px] font-bold" transform="rotate(90, 745, 270)" textAnchor="middle">
                EAVE HEIGHT = 9,500 mm
              </text>
            </g>

            {/* Ridge Height Dimension */}
            <g stroke={styles.dimension} strokeWidth="1">
              <line x1="400" y1="70" x2="400" y2="95" strokeDasharray="3,2" />
              <text x="400" y="65" fill={styles.accent} textAnchor="middle" className="text-[9px]">
                APEX LEVEL +12,300 mm
              </text>
            </g>

            {/* Interactive Hotspot Trigger Circles */}
            {interactive && (
              <>
                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(activeHotspot === 'haunch' ? null : 'haunch')}
                >
                  <circle cx="130" cy="180" r="14" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="1.5" className="animate-pulse" />
                  <circle cx="130" cy="180" r="4" fill="#f59e0b" />
                  <text x="130" y="160" fill="#f59e0b" textAnchor="middle" className="text-[9px] font-bold">KNEE MOMENT</text>
                </g>

                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(activeHotspot === 'tapered_column' ? null : 'tapered_column')}
                >
                  <circle cx="130" cy="270" r="14" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" strokeWidth="1.5" className="animate-pulse" />
                  <circle cx="130" cy="270" r="4" fill="#38bdf8" />
                  <text x="80" y="275" fill="#38bdf8" textAnchor="end" className="text-[9px] font-bold">TAPERED WEB</text>
                </g>

                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(activeHotspot === 'apex_joint' ? null : 'apex_joint')}
                >
                  <circle cx="400" cy="105" r="14" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="1.5" className="animate-pulse" />
                  <circle cx="400" cy="105" r="4" fill="#f59e0b" />
                  <text x="400" y="135" fill="#f59e0b" textAnchor="middle" className="text-[9px] font-bold">APEX SPLICE</text>
                </g>

                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(activeHotspot === 'base_plate' ? null : 'base_plate')}
                >
                  <circle cx="130" cy="350" r="14" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="1.5" className="animate-pulse" />
                  <circle cx="130" cy="350" r="4" fill="#22c55e" />
                  <text x="75" y="355" fill="#22c55e" textAnchor="end" className="text-[9px] font-bold">BASE PIN/FIXED</text>
                </g>

                <g
                  className="cursor-pointer group"
                  onClick={() => setActiveHotspot(activeHotspot === 'purlin_line' ? null : 'purlin_line')}
                >
                  <circle cx="275" cy="138" r="12" fill="rgba(168, 85, 247, 0.2)" stroke="#c084fc" strokeWidth="1.5" />
                  <circle cx="275" cy="138" r="3" fill="#c084fc" />
                  <text x="275" y="122" fill="#c084fc" textAnchor="middle" className="text-[9px] font-bold">Z-PURLIN</text>
                </g>
              </>
            )}
          </svg>
        )}

        {type === 'knee-joint' && (
          <svg viewBox="0 0 600 400" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="400" fill="#06121f" />
            <g opacity="0.3" stroke="#17314f" strokeWidth="1">
              {[...Array(15)].map((_, i) => (
                <line key={`x-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
              ))}
              {[...Array(10)].map((_, i) => (
                <line key={`y-${i}`} x1="0" y1={i * 40} x2="600" y2={i * 40} />
              ))}
            </g>

            {/* Column Section Top */}
            <polygon points="120,380 180,380 180,120 120,120" fill={styles.steelFill} stroke={styles.steel} strokeWidth="3" />
            <line x1="150" y1="120" x2="150" y2="380" stroke={styles.steel} strokeWidth="1" strokeDasharray="4,4" />

            {/* Extended End Plate */}
            <rect x="180" y="80" width="16" height="240" fill={styles.dimension} stroke={styles.dimension} strokeWidth="1.5" />

            {/* Rafter Haunch Section */}
            <polygon points="196,80 500,160 500,220 196,280" fill={styles.steelFill} stroke={styles.steel} strokeWidth="3" />
            <line x1="196" y1="280" x2="480" y2="215" stroke={styles.accent} strokeWidth="2" strokeDasharray="3,2" />

            {/* Internal Web Stiffeners */}
            <line x1="120" y1="150" x2="180" y2="150" stroke={styles.accent} strokeWidth="3" />
            <line x1="120" y1="260" x2="180" y2="260" stroke={styles.accent} strokeWidth="3" />
            <line x1="120" y1="260" x2="180" y2="150" stroke={styles.accent} strokeWidth="2" strokeDasharray="4,2" />

            {/* HSFG Bolt Rows */}
            {[100, 130, 160, 195, 230, 265, 295].map((by, i) => (
              <g key={i}>
                <rect x="174" y={by - 4} width="28" height="8" rx="2" fill={styles.bolts} stroke="#ffffff" strokeWidth="0.5" />
                <circle cx="188" cy={by} r="2.5" fill="#000" />
              </g>
            ))}

            {/* Technical Labels */}
            <text x="188" y="55" fill={styles.dimension} textAnchor="middle" className="text-[11px] font-bold">
              EXTENDED END PLATE (t=25mm)
            </text>
            <text x="320" y="110" fill={styles.text} className="text-[10px]">
              TAPERED RAFTER HAUNCH
            </text>
            <text x="60" y="240" fill={styles.accent} className="text-[10px]">
              DIAGONAL WEB STIFFENER
            </text>
            <text x="230" y="340" fill={styles.bolts} className="text-[10px]">
              7 ROWS GR 10.9 HSFG BOLTS (M24)
            </text>
          </svg>
        )}

        {type === 'base-plate' && (
          <svg viewBox="0 0 600 400" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="400" fill="#06121f" />
            {/* Concrete Pedestal */}
            <rect x="150" y="220" width="300" height="150" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
            {/* Rebar cage */}
            <line x1="170" y1="240" x2="170" y2="360" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,3" />
            <line x1="430" y1="240" x2="430" y2="360" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,3" />
            <line x1="170" y1="270" x2="430" y2="270" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="6,3" />
            <line x1="170" y1="320" x2="430" y2="320" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="6,3" />

            {/* Non-shrink Grout layer */}
            <rect x="170" y="205" width="260" height="15" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            <text x="445" y="217" fill="#94a3b8" className="text-[9px]">GROUT LAYER 30mm</text>

            {/* Base Plate */}
            <rect x="180" y="190" width="240" height="15" fill={styles.dimension} stroke="#ffffff" strokeWidth="1" />

            {/* Column profile landing */}
            <polygon points="260,190 280,190 290,40 250,40" fill={styles.steelFill} stroke={styles.steel} strokeWidth="3" />
            <polygon points="320,190 340,190 350,40 310,40" fill={styles.steelFill} stroke={styles.steel} strokeWidth="3" />
            {/* Base Gussets / Stiffeners */}
            <polygon points="220,190 260,190 260,120" fill="rgba(245, 158, 11, 0.2)" stroke={styles.dimension} strokeWidth="1.5" />
            <polygon points="380,190 340,190 340,120" fill="rgba(245, 158, 11, 0.2)" stroke={styles.dimension} strokeWidth="1.5" />

            {/* Anchor Bolts (with hooks/washers) */}
            <line x1="205" y1="165" x2="205" y2="340" stroke={styles.bolts} strokeWidth="3" />
            <line x1="205" y1="340" x2="225" y2="350" stroke={styles.bolts} strokeWidth="3" />
            <rect x="198" y="182" width="14" height="6" fill="#ffffff" />
            <rect x="198" y="174" width="14" height="6" fill="#facc15" />

            <line x1="395" y1="165" x2="395" y2="340" stroke={styles.bolts} strokeWidth="3" />
            <line x1="395" y1="340" x2="375" y2="350" stroke={styles.bolts} strokeWidth="3" />
            <rect x="388" y="182" width="14" height="6" fill="#ffffff" />
            <rect x="388" y="174" width="14" height="6" fill="#facc15" />

            <text x="300" y="30" fill={styles.steel} textAnchor="middle" className="text-[11px] font-bold">
              BUILT-UP COLUMN BASE (WELDED TO BASE PLATE)
            </text>
            <text x="300" y="300" fill="#e2e8f0" textAnchor="middle" className="text-[11px]">
              RCC PEDESTAL (M30 CONCRETE)
            </text>
            <text x="205" y="150" fill={styles.bolts} textAnchor="middle" className="text-[9px]">
              ANCHOR BOLT M30 Gr 8.8
            </text>
          </svg>
        )}

        {type === 'purlin-detail' && (
          <svg viewBox="0 0 600 400" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="400" fill="#06121f" />
            {/* Rafter Top Flange */}
            <rect x="80" y="240" width="440" height="20" fill={styles.steelFill} stroke={styles.steel} strokeWidth="2.5" />
            <text x="300" y="285" fill={styles.steel} textAnchor="middle" className="text-[10px]">
              PRIMARY RAFTER TOP FLANGE
            </text>

            {/* Purlin Cleat Angle */}
            <polygon points="260,240 260,140 280,140 280,240" fill={styles.dimension} stroke="#ffffff" strokeWidth="1" />

            {/* Z-Purlin Cross Section */}
            <path
              d="M 230,110 L 260,110 L 260,230 L 290,230 L 290,240 L 245,240 L 245,120 L 225,120 Z"
              fill="rgba(56, 189, 248, 0.4)"
              stroke={styles.accent}
              strokeWidth="2"
            />

            {/* Nested Continuous Lap Purlin (Lapped section) */}
            <path
              d="M 235,100 L 265,100 L 265,220 L 295,220 L 295,230 L 250,230 L 250,110 L 230,110 Z"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="4,2"
            />

            {/* Bolting */}
            <circle cx="270" cy="160" r="4" fill={styles.bolts} stroke="#ffffff" strokeWidth="1" />
            <circle cx="270" cy="200" r="4" fill={styles.bolts} stroke="#ffffff" strokeWidth="1" />

            {/* Sag Rod Attachment */}
            <circle cx="260" cy="175" r="3" fill="#ec4899" />
            <line x1="260" y1="175" x2="160" y2="130" stroke="#ec4899" strokeWidth="2" />
            <text x="140" y="125" fill="#ec4899" className="text-[9px] font-bold">
              SAG ROD (Ø12 mm)
            </text>

            {/* Metal Roof Sheeting Preview */}
            <path
              d="M 100,90 L 140,90 L 155,70 L 175,70 L 190,90 L 230,90 L 245,70 L 265,70 L 280,90 L 320,90 L 335,70 L 355,70 L 370,90 L 420,90"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            <text x="435" y="85" fill="#94a3b8" className="text-[9px]">
              0.5mm TCT CORRUGATED SHEETING
            </text>

            <text x="310" y="150" fill={styles.dimension} className="text-[10px] font-bold">
              Z-PURLIN CLEAT (t=6mm)
            </text>
            <text x="310" y="170" fill={styles.accent} className="text-[9px]">
              COLD FORMED Z-200x65x20x2.0mm
            </text>
            <text x="310" y="185" fill={styles.text} className="text-[8px]">
              CONTINUOUS 900mm LAP OVER RAFTERS
            </text>
          </svg>
        )}

        {type === 'pedestal' && (
          <svg viewBox="0 0 600 400" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="400" fill="#06121f" />
            {/* Foundation Soil Level */}
            <line x1="40" y1="180" x2="560" y2="180" stroke="#64748b" strokeWidth="2" strokeDasharray="8,4" />
            <text x="50" y="170" fill="#94a3b8" className="text-[9px]">GROUND LEVEL (NGL)</text>

            {/* RCC Footing */}
            <rect x="120" y="300" width="360" height="70" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
            {/* Footing Mesh */}
            <line x1="140" y1="350" x2="460" y2="350" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />

            {/* Pedestal */}
            <rect x="230" y="80" width="140" height="220" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />

            {/* Anchor Bolts inside Pedestal */}
            <line x1="260" y1="60" x2="260" y2="240" stroke={styles.bolts} strokeWidth="3" />
            <line x1="260" y1="240" x2="280" y2="250" stroke={styles.bolts} strokeWidth="3" />

            <line x1="340" y1="60" x2="340" y2="240" stroke={styles.bolts} strokeWidth="3" />
            <line x1="340" y1="240" x2="320" y2="250" stroke={styles.bolts} strokeWidth="3" />

            {/* Vertical Rebars & Stirrups */}
            <line x1="245" y1="100" x2="245" y2="330" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="355" y1="100" x2="355" y2="330" stroke="#f59e0b" strokeWidth="1.5" />
            {[110, 140, 170, 200, 230, 260, 290].map((sy, i) => (
              <line key={i} x1="245" y1={sy} x2="355" y2={sy} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" />
            ))}

            {/* Tie Beam interface */}
            <rect x="80" y="160" width="150" height="60" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4,2" />
            <text x="140" y="195" fill="#38bdf8" textAnchor="middle" className="text-[9px]">
              TIE / PLINTH BEAM
            </text>

            <text x="300" y="45" fill={styles.bolts} textAnchor="middle" className="text-[10px] font-bold">
              ANCHOR BOLTS TEMPLATE PROJECTION
            </text>
            <text x="300" y="340" fill="#e2e8f0" textAnchor="middle" className="text-[10px]">
              ISOLATED / COMBINED RAFT FOOTING
            </text>
          </svg>
        )}
      </div>

      {/* Interactive Element Detail Card */}
      {activeHotspot && hotspotsInfo[activeHotspot] && (
        <div className="mt-3 p-3 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <Info className="w-3.5 h-3.5 text-cyan-400" />
                {hotspotsInfo[activeHotspot].title}
              </div>
              <p className="mt-1 text-slate-300 text-[11px] leading-relaxed">
                {hotspotsInfo[activeHotspot].desc}
              </p>
              <div className="mt-1.5 inline-block px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-200 font-mono-spec text-[10px]">
                Specification: {hotspotsInfo[activeHotspot].spec}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveHotspot(null)}
              className="text-slate-400 hover:text-white text-xs px-1.5 py-0.5"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Bottom Status / Legend */}
      <div className="mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Primary Member
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Fastener / Anchor
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> Secondary Purlin
          </span>
        </div>
        <div className="text-slate-500 text-[10px]">
          Click glowing nodes on portal frame to inspect structural details
        </div>
      </div>
    </div>
  );
};
