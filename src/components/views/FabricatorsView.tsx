import React from 'react';
import {
  Layers,
  Hammer,
  FileCheck2,
  Clock,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Compass,
  AlertCircle,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { PageId } from '../../types';

interface FabricatorsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const FabricatorsView: React.FC<FabricatorsViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 font-body text-slate-200">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-b from-[#0a1830] to-[#07111e] border border-amber-500/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/80 border border-amber-500/50 text-amber-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            <span>Special B2B Engineering Partnership</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            PEB Design & Detailing Support for Fabricators
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Empowering steel fabricators and industrial contractors across India with reliable,
            outsourced structural engineering, optimized tapered framing, precise shop drawings,
            and competitive tender estimation.
          </p>
        </div>
      </div>

      {/* Value Proposition Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#091527] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Hammer className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-bold text-white">Fabrication-Friendly Detailing</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Drawings designed for the shop floor: standardized plate widths to minimize scrap, clear weld
            symbols, unambiguous part marks, and hole coordinates ready for manual or CNC execution.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#091527] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-bold text-white">Fast Turnaround for Bidding</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Need preliminary tonnage estimates in 24-48 hours to quote your client’s tender? We provide
            fast preliminary structural sizing so you bid accurately without losing margins.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#091527] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Calculator className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-heading font-bold text-white">Tonnage Optimization</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We sculpt tapered I-beam web depths along bending moment profiles as per IS 800:2007, saving
            10% to 15% raw steel compared to conservative hot-rolled designs.
          </p>
        </div>
      </div>

      {/* Deliverables Checklist for Fabricators */}
      <section className="p-8 rounded-2xl bg-[#081324] border border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold">Standard Fabricator Package</span>
          <h2 className="text-2xl font-heading font-bold text-white mt-1">
            Everything Your Workshop & Site Erection Team Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {[
            'Anchor Bolt Setting Plans & Cluster Templates',
            'General Arrangement (GA) Plans for Client Sign-off',
            'Shop Assembly Drawings for Tapered Columns & Rafters',
            'Individual Component Part Drawings with Hole Coordinates',
            'Complete Bill of Materials (BOM) with Cut Lengths',
            'Roof & Wall Sheeting Layouts with Trim Details',
            'Hardware Summary (HSFG Bolts, Sag Rods, Bracing Pins)',
            'Base Plate & Knee Splice Connection Calculations',
            'Prompt Technical Clarifications during Workshop Cutting',
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#09172c] border border-slate-800 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#0a1b36] to-slate-950 border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-amber-400 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Ready to Partner With YS PEB?
          </div>
          <h3 className="text-2xl font-heading font-bold text-white">
            Let Us Be Your Dedicated Outsourced Design Department
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            Focus on steel fabrication and erection; let our specialized engineering team handle the
            analysis models, load calculations, GA approvals, and shop fabrication sheets.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onOpenQuoteModal('Fabricator Partnership')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            Start a Fabricator Partnership
          </button>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
              'Hello YS PEB Design Studio, I am a steel fabricator interested in outsourced design and detailing support.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-600/60 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('insights')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono-spec"
        >
          <span>Explore Industry Insights & Technical Guides</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal()}
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Request Project Quote
        </button>
      </div>
    </div>
  );
};
