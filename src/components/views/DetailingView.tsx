import React from 'react';
import {
  Compass,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  Layers,
  FileText,
  Hammer,
} from 'lucide-react';
import { TechnicalCADDiagram } from '../TechnicalCADDiagrams';
import { PageId } from '../../types';

interface DetailingViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const DetailingView: React.FC<DetailingViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 font-body text-slate-200">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Fabrication Documentation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            PEB Detailing & GA Drawings
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            High-precision shop drawings, anchor bolt setting plans, single-part cut sheets, assembly
            drawings and comprehensive bills of materials engineered directly for fabrication and erection.
          </p>
        </div>
      </div>

      {/* Interactive Detail Viewer: High-Strength Moment Connection */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>Interactive Connection & Detail Model</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Technical CAD representation of an engineered rafter-to-column eave moment connection.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenQuoteModal('PEB Detailing & GA Drawings')}
            className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            Request Detailing Support
          </button>
        </div>

        <div className="rounded-2xl bg-[#091527] border border-slate-800 p-4 sm:p-6 shadow-xl">
          <TechnicalCADDiagram type="knee-joint" interactive={true} />
        </div>
      </section>

      {/* 5-Stage Detailing Workflow */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#081528] border border-slate-800 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold tracking-wider">
            Execution Progression
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
            5-Stage Detailing Workflow
          </h2>
          <p className="text-xs text-slate-400">
            From initial design model to shop-floor fabrication and site erection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-mono-spec">
          {[
            {
              stage: '01',
              title: 'Design Validation',
              desc: 'Confirming loads, member profiles, clearance limits and connection reactions.',
            },
            {
              stage: '02',
              title: 'GA Drawings',
              desc: 'Roof plan, wall elevations, cross sections, and anchor bolt setting templates.',
            },
            {
              stage: '03',
              title: 'Shop Detailing',
              desc: 'Single part cuts, plate dimensions, hole punching coordinates, and weld symbols.',
            },
            {
              stage: '04',
              title: 'Fabrication BOM',
              desc: 'Itemized material takeoffs, hardware bolt lists, and shipping mark assignments.',
            },
            {
              stage: '05',
              title: 'Erection Plans',
              desc: 'Sequenced erection marking plans for crane rigging and bolt tightening on site.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition-colors"
            >
              <div className="text-cyan-400 font-bold text-base">Stage {item.stage}</div>
              <div className="text-white font-heading font-bold text-xs">{item.title}</div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Drawing Deliverables Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-bold text-white">
          Our Complete Detailing Deliverables Suite
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Anchor Bolt Setting Plan</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Base plate bolt centerlines, template drawings, projection heights, embedment depths, and
              tolerances for civil foundation execution before steel arrival.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>General Arrangement (GA)</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Complete layout plans, column grid systems, building cross sections, longitudinal side
              elevations, and architectural cladding interfaces.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Assembly Shop Drawings</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Fully marked columns, rafters, crane beams, and portal frames with welded stiffeners,
              gussets, and end-plates ready for workshop fit-up.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Single-Part Cut Sheets</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Individual plate cutting drawings with exact CNC/plasma burning dimensions, bevels, hole
              diameters, and corner snipes to eliminate shop scrap.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Roof & Wall Sheeting Layouts</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Purlin and girt framing layouts, sag rod schedules, skylight polycarbonate sheet positions,
              turbo-ventilator curbs, and flashing trims.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Bill of Materials (BOM)</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Complete shipping piece list, grade-wise steel weight summary, high-strength bolt lists
              (diameter, length, quantity), and cold-formed item schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('estimation')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono-spec"
        >
          <span>Next: Steel & Material Quantity Estimation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal('PEB Detailing & GA Drawings')}
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Request Detailing Quote
        </button>
      </div>
    </div>
  );
};
