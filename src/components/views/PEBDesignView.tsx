import React from 'react';
import {
  Building2,
  CheckCircle2,
  Layers,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Compass,
  Cpu,
} from 'lucide-react';
import { TechnicalCADDiagram } from '../TechnicalCADDiagrams';
import { PageId } from '../../types';

interface PEBDesignViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const PEBDesignView: React.FC<PEBDesignViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 font-body text-slate-200">
      {/* Page Title */}
      <div className="rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Primary Engineering Service
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            PEB Structural Design & Analysis
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Engineering optimized primary framing systems, tapered built-up sections, secondary cold-formed
            members, and complete structural load resistance in accordance with Indian and International codes.
          </p>
        </div>
      </div>

      {/* Interactive Portal Frame Viewer & Structural Breakdown */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>Interactive PEB Primary Frame CAD Model</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Click on the interactive markers (A, B, C, D, E) below to inspect critical framing components.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteModal('PEB Structural Design')}
            className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            Request PEB Design Quote
          </button>
        </div>

        <div className="rounded-2xl bg-[#091527] border border-slate-800 p-4 sm:p-6 shadow-xl">
          <TechnicalCADDiagram type="portal-frame" interactive={true} />
        </div>
      </section>

      {/* Structural Framing Components Breakdown */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-bold text-white">
          Key Components of Our PEB Design Engineering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono-spec font-bold text-xs uppercase">01. Building Configuration</div>
            <h3 className="text-base font-heading font-bold text-white">Framing Geometry</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Selection of optimal structural frames: Clear Span, Multi-Span with interior columns,
              Lean-to extensions, Monoslope roofs, and high-bay crane layouts.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono-spec font-bold text-xs uppercase">02. Primary Framing</div>
            <h3 className="text-base font-heading font-bold text-white">Tapered Built-up Sections</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Design of variable depth tapered I-sections with optimized flange and web plate thickness
              matching actual bending moment diagrams to minimize steel consumption.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono-spec font-bold text-xs uppercase">03. Secondary Framing</div>
            <h3 className="text-base font-heading font-bold text-white">Cold-Formed Z & C Purlins</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Continuous and overlap purlin and girt design, sag rod configurations, flange braces, and
              eave gutters engineered for live loads and suction pressures.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono-spec font-bold text-xs uppercase">04. Lateral Stability</div>
            <h3 className="text-base font-heading font-bold text-white">Bracing Systems</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rod bracing, angle cross bracing, portal frames, and pipe struts designed to transfer
              longitudinal wind, seismic forces, and crane surge loads safely to foundations.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono-spec font-bold text-xs uppercase">05. Crane Support</div>
            <h3 className="text-base font-heading font-bold text-white">Crane Girders & Brackets</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Step column and bracket design, crane runway beams, surge girder calculations, and rail
              fastening details for 3 MT to 50 MT overhead EOT cranes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-3">
            <div className="text-cyan-400 font-mono-spec font-bold text-xs uppercase">06. Connections</div>
            <h3 className="text-base font-heading font-bold text-white">Bolted Splices & Base Plates</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              High-strength friction grip (HSFG / Grade 8.8) bolted moment connections, rafter splices,
              shear plates, and pinned or fixed base plate arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="rounded-xl bg-gradient-to-r from-blue-950 to-slate-900 border border-cyan-800/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-heading font-bold text-white">
            Have a PEB Building Project Requiring Design & Analysis?
          </h3>
          <p className="text-xs text-slate-400">
            Share your plot dimensions, eave height, and location for a structural design proposal.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onOpenQuoteModal('PEB Structural Design')}
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex-shrink-0"
        >
          Request Design Quote
        </button>
      </div>
    </div>
  );
};
