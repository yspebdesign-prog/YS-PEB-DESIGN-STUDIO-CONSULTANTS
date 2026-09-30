import React from 'react';
import {
  Calculator,
  Layers,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  TrendingDown,
  Scale,
} from 'lucide-react';
import { PEBCalculatorTool } from '../PEBCalculatorTool';
import { PageId } from '../../types';

interface EstimationViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
  onApplyDimensionsToQuote: (dimensions: { length: string; width: string; height: string }) => void;
}

export const EstimationView: React.FC<EstimationViewProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onApplyDimensionsToQuote,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 font-body text-slate-200">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Pre-Bid & Material Planning
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            PEB Steel Quantity & Material Estimation
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Accurate preliminary and detailed steel takeoffs, component-wise weight breakdowns, and
            transparent material schedules to support competitive tender bids and precise procurement.
          </p>
        </div>
      </div>

      {/* Embedded Interactive PEB Calculator */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <span>Interactive PEB Geometry & Tonnage Calculator</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Calculate your building footprint, roof slope area, internal cubic volume and indicative steel tonnage.
          </p>
        </div>

        <PEBCalculatorTool onApplyToQuote={onApplyDimensionsToQuote} />
      </section>

      {/* Scope of Quantity Estimation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-bold text-white">
          Component-Wise Estimation Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">01. Primary Steel</div>
            <h3 className="text-sm font-heading font-bold text-white">Built-Up Frames</h3>
            <p className="text-slate-400 leading-relaxed">
              Main portal columns, rafters, interior columns, crane runway beams, endwall rafters, and base plates.
            </p>
            <div className="text-[11px] text-cyan-400 font-mono-spec">~60-70% total weight</div>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">02. Secondary Steel</div>
            <h3 className="text-sm font-heading font-bold text-white">Cold-Formed Sections</h3>
            <p className="text-slate-400 leading-relaxed">
              Galvanized / painted Z and C purlins, wall girts, eave struts, door jambs, and framing headers.
            </p>
            <div className="text-[11px] text-cyan-400 font-mono-spec">~15-22% total weight</div>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">03. Bracing & Hardware</div>
            <h3 className="text-sm font-heading font-bold text-white">Stability & Fasteners</h3>
            <p className="text-slate-400 leading-relaxed">
              Cross-bracing rods/angles, pipe struts, sag rods, HSFG bolts, anchor bolts, and connection hardware.
            </p>
            <div className="text-[11px] text-cyan-400 font-mono-spec">~4-7% total weight</div>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-mono-spec font-bold uppercase">04. Sheeting & Accessories</div>
            <h3 className="text-sm font-heading font-bold text-white">Envelopes & Trim</h3>
            <p className="text-slate-400 leading-relaxed">
              Roof profile sheets, wall cladding, ridge caps, corner trims, gutters, downspouts, and skylights.
            </p>
            <div className="text-[11px] text-cyan-400 font-mono-spec">Area-based takeoff (m²)</div>
          </div>
        </div>
      </section>

      {/* Why Estimators Value YS PEB Takeoffs */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#081528] border border-slate-800 space-y-6">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
          Why Fabricators Rely on Our Estimation Support
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="flex items-start gap-2.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Pre-Bid Tender Speed:</strong> Rapid turnaround of tonnage estimates to help you submit tenders before competitor deadlines.
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Steel Weight Optimization:</strong> Avoid over-designing that inflates your bid price or under-designing that leads to execution losses.
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Transparent BOM Format:</strong> Itemized spreadsheets compatible with your workshop inventory and procurement workflows.
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('foundation-design')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono-spec"
        >
          <span>Next: Foundation & Pedestal Design</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal('Steel Quantity Estimation')}
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Request Estimation Support
        </button>
      </div>
    </div>
  );
};
