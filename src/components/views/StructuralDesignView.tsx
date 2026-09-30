import React from 'react';
import {
  Cpu,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Layers,
  FileSpreadsheet,
} from 'lucide-react';
import { PageId } from '../../types';

interface StructuralDesignViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const StructuralDesignView: React.FC<StructuralDesignViewProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 font-body text-slate-200">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Analysis & Code Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Structural Design & Analysis
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Full 3D finite element structural analysis, rigorous load assessments, and strict code
            adherence delivering safe, optimized and fabrication-efficient steel framing.
          </p>
        </div>
      </div>

      {/* Governing Design Codes */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <span>Applicable Design Codes & Standards</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#091526] border border-slate-800 space-y-1">
            <span className="text-xs font-mono-spec text-cyan-400 font-bold">IS 800:2007 / AISC</span>
            <div className="text-sm font-heading font-bold text-white">Steel Structural Code</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Limit state method for design of steel members, tapered built-ups, tension members, and bolted connections.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#091526] border border-slate-800 space-y-1">
            <span className="text-xs font-mono-spec text-cyan-400 font-bold">IS 875 (Part 1, 2, 3, 4, 5)</span>
            <div className="text-sm font-heading font-bold text-white">Design Loads for Buildings</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Dead load, live load, basic wind speed (Vb), terrain categories, wind pressure, and combination factors.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#091526] border border-slate-800 space-y-1">
            <span className="text-xs font-mono-spec text-cyan-400 font-bold">IS 1893:2016</span>
            <div className="text-sm font-heading font-bold text-white">Earthquake Design Code</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Seismic zone factors (Zone II to V), response reduction factors, soil types, and equivalent static / response spectrum checks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#091526] border border-slate-800 space-y-1">
            <span className="text-xs font-mono-spec text-cyan-400 font-bold">MBMA / AISC 360</span>
            <div className="text-sm font-heading font-bold text-white">Metal Building Guidelines</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              International pre-engineered metal building manufacturing association best practices for cold-formed steel and portal systems.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Load Assessment */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#081528] border border-slate-800 space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
            Comprehensive Load Assessments & Load Combinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Every PEB structure is modeled against worst-case critical load combinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">Dead Loads (DL)</div>
            <p className="text-slate-300 leading-relaxed">
              Self-weight of primary frames, purlins, sheeting, insulation, gutters, walkways, and lighting fixtures.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">Live Loads (LL)</div>
            <p className="text-slate-300 leading-relaxed">
              Roof live loads based on roof slope, maintenance loads, and mezzanine floor live loading (3.0 to 10.0 kN/m²).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">Wind Loads (WL)</div>
            <p className="text-slate-300 leading-relaxed">
              Basic wind speed (39 to 50 m/s), k1, k2, k3, k4 factors, external pressure coefficients (Cpe), and internal permeability (Cpi).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">Seismic Loads (SL)</div>
            <p className="text-slate-300 leading-relaxed">
              Design horizontal seismic coefficient (Ah), fundamental natural period calculations, and mass distribution.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">Crane Loads (CL)</div>
            <p className="text-slate-300 leading-relaxed">
              Vertical wheel loads with 25% dynamic impact, lateral surge (10% trolley weight), and longitudinal traction (5% wheel loads).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">Thermal & Collateral</div>
            <p className="text-slate-300 leading-relaxed">
              Temperature expansion for long continuous sheds (&gt;100m) and solar PV panel roof installation allowances.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Disclaimer Notice */}
      <section className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/40 text-xs text-amber-200/90 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-heading font-bold text-amber-300 text-sm">
            Structural Engineering Notice & Compliance
          </div>
          <p className="leading-relaxed font-body">
            Final structural design, calculations and stability certification requirements depend on
            project-specific parameters, local geotechnical conditions, applicable municipal building
            by-laws, and client requirements. Foundation designs require verified soil investigation
            reports (SBC).
          </p>
        </div>
      </section>

      {/* Action CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('detailing')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono-spec"
        >
          <span>Next: PEB Detailing & GA Drawings</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal('Structural Design & Analysis')}
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Request Analysis Quote
        </button>
      </div>
    </div>
  );
};
