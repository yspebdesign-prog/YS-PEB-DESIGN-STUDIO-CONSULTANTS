import React from 'react';
import {
  Building2,
  Boxes,
  Truck,
  Factory,
  Hammer,
  Store,
  Warehouse,
  Tractor,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../../data/companyData';
import { PageId } from '../../types';

interface IndustriesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 font-body text-slate-200">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Sectors & Building Types
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Industries We Serve
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Pre-Engineered Building structural design solutions tailored to the operational, spatial,
            and material-handling requirements of India's diverse industrial sectors.
          </p>
        </div>
      </div>

      {/* 9 Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES_SERVED.map((ind, idx) => (
          <div
            key={ind.id}
            className="rounded-2xl bg-[#091527] border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all group shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {ind.id === 'warehouses' && <Warehouse className="w-5 h-5" />}
                  {ind.id === 'manufacturing-units' && <Factory className="w-5 h-5" />}
                  {ind.id === 'industrial-buildings' && <Building2 className="w-5 h-5" />}
                  {ind.id === 'workshops' && <Hammer className="w-5 h-5" />}
                  {ind.id === 'factories' && <Factory className="w-5 h-5" />}
                  {ind.id === 'storage-buildings' && <Boxes className="w-5 h-5" />}
                  {ind.id === 'logistics-buildings' && <Truck className="w-5 h-5" />}
                  {ind.id === 'commercial-sheds' && <Store className="w-5 h-5" />}
                  {ind.id === 'agricultural-sheds' && <Tractor className="w-5 h-5" />}
                </div>
                <span className="text-[10px] font-mono-spec px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  Sector 0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {ind.title}
                </h3>
                <div className="text-xs font-mono-spec text-cyan-400 mt-0.5">
                  Typical Spans: {ind.typicalSpan}
                </div>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-body">
                  {ind.description}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                <span className="text-slate-400 font-mono-spec text-[10px] uppercase block mb-1">
                  Ideal Operational Applications:
                </span>
                <span className="text-slate-200">{ind.idealFor}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onOpenQuoteModal(`PEB Design for ${ind.title}`)}
                className="w-full py-2 rounded-lg bg-slate-800 hover:bg-cyan-950 text-slate-200 hover:text-cyan-300 text-xs font-bold border border-slate-700 transition-colors"
              >
                Request Design for {ind.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('why-us')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono-spec"
        >
          <span>Next: Why Choose YS PEB?</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal()}
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Discuss Your Industry Project
        </button>
      </div>
    </div>
  );
};
