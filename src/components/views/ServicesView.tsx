import React from 'react';
import {
  Building2,
  Compass,
  Layers,
  Hammer,
  Cpu,
  Calculator,
  ShieldCheck,
  Boxes,
  ArrowRight,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';
import { SERVICES_LIST } from '../../data/companyData';
import { PageId } from '../../types';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 font-body text-slate-200">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Engineering Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Pre-Engineered Building Design Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Comprehensive structural engineering, analysis, detailing and estimation solutions
            engineered for steel fabricators, industrial contractors, and warehouse builders across India.
          </p>
        </div>
      </div>

      {/* Services List Grid */}
      <div className="space-y-10">
        {SERVICES_LIST.map((srv, idx) => (
          <div
            key={srv.id}
            id={srv.id}
            className="rounded-2xl bg-[#091527] border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-8 transition-all shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      {srv.title}
                    </h2>
                    <span className="text-[11px] font-mono-spec text-cyan-400">
                      Standard Code Compliance: IS 800:2007 • IS 875 • AISC / MBMA
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-body">
                  {srv.description}
                </p>

                {/* Scope & Deliverables */}
                <div className="pt-2">
                  <h3 className="text-xs font-mono-spec uppercase text-slate-400 font-bold mb-2">
                    Key Deliverables & Documentation:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {srv.keyDeliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="text-xs font-mono-spec text-slate-400 border-b border-slate-800 pb-2">
                  Ready to proceed with this service?
                </div>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => onNavigate(srv.pageId)}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                  >
                    <span>View Technical Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(srv.title)}
                    className="w-full py-2.5 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-950 transition-all"
                  >
                    <span>Request Quote for Service</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
