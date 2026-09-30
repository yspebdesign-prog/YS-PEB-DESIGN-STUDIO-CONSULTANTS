import React from 'react';
import {
  Layers,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileCheck2,
} from 'lucide-react';
import { TechnicalCADDiagram } from '../TechnicalCADDiagrams';
import { PageId } from '../../types';

interface FoundationDesignViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const FoundationDesignView: React.FC<FoundationDesignViewProps> = ({
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
            Substructure Interface
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Foundation & Pedestal Design
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Engineering the critical interface between superstructure steel frames and reinforced concrete
            substructures: column base reaction analysis, anchor bolt layout, and footing detailing.
          </p>
        </div>
      </div>

      {/* Interactive Foundation & Base Plate Diagram */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>Interactive Column Base & Foundation CAD Detail</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Inspect RCC pedestal reinforcement, non-shrink grout bed, anchor bolt embedment and isolated footing geometry.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteModal('Foundation & Pedestal Design')}
            className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            Request Foundation Scope
          </button>
        </div>

        <div className="rounded-2xl bg-[#091527] border border-slate-800 p-4 sm:p-6 shadow-xl">
          <TechnicalCADDiagram type="base-plate" interactive={true} />
        </div>
      </section>

      {/* Foundation Engineering Scope */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-bold text-white">
          Key Elements of Our Foundation Design Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300">
              01. Column Reaction Data Matrix
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Exporting unfactored and factored reaction envelopes: Axial Compression (P), Uplift (Tension),
              Horizontal Shear (Vx, Vz), and Overturning Moments (Mx, Mz) for all load cases.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300">
              02. RCC Pedestal Detailing
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Sizing concrete pedestals to accommodate base plates and anchor bolt edge distances, with
              main vertical reinforcement and confining tie stirrups.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300">
              03. Anchor Bolt Embedment
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Design of high-strength anchor rods (Grade 4.6 / 8.8), embedment lengths, washer plates,
              hook details, and non-shrink grouting specifications (30mm to 50mm).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300">
              04. Isolated & Combined Footings
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Reinforced concrete pad footing sizing based on safe bearing capacity (SBC) of soil,
              checking for one-way shear, two-way punching shear, and soil pressure distribution.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300">
              05. Tie Beam & Plinth Beams
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Design of perimeter ground beams connecting pedestals to resist differential settlements,
              lateral earth thrust, and support exterior brick masonry walls.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300">
              06. Civil Coordination Drawings
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Issuing synchronized foundation GA plans and rebar schedules so civil contractors can cast
              foundations accurately ahead of steel arrival.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Engineering Disclaimer */}
      <section className="p-5 sm:p-6 rounded-xl bg-amber-950/20 border border-amber-500/40 text-xs text-amber-200/90 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-heading font-bold text-amber-300 text-sm">
            Geotechnical & Foundation Engineering Disclaimer
          </div>
          <p className="leading-relaxed font-body">
            Foundation design depends on structural reactions, soil conditions, building configuration,
            and applicable design requirements. Site-specific geotechnical soil investigation reports
            specifying Safe Bearing Capacity (SBC) and water table level must be provided for final RCC
            footing validation.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('stability-certificate')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono-spec"
        >
          <span>Next: Stability Certificate Support</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal('Foundation & Pedestal Design')}
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Request Foundation Proposal
        </button>
      </div>
    </div>
  );
};
