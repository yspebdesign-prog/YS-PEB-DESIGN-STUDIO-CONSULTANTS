import React from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  FileText,
  Building2,
} from 'lucide-react';
import { PageId } from '../../types';

interface StabilityCertificateViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const StabilityCertificateView: React.FC<StabilityCertificateViewProps> = ({
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
            Regulatory & Verification Support
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Structural Stability Certificate Support
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Technical structural analysis dossiers, code verification reports, calculation packages, and
            coordination support for statutory building approval processes across Indian states.
          </p>
        </div>
      </div>

      {/* Transparent Professional Stance */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#081528] border border-cyan-500/40 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-mono-spec font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <span>Professional & Regulatory Process</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
          How Stability Documentation & Certification Is Handled
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed font-body">
          Stability certificate requirements vary depending on the project, municipal authority, state
          industrial development corporations (such as UPSIDA, HSIIDC, RIICO, GIDC), and applicable
          regulations. Where required, certification can be coordinated with the appropriate qualified
          and authorized structural engineer.
        </p>
      </section>

      {/* Deliverables Suite */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-bold text-white">
          Documentation Provided for Stability Assessment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Complete Design Calculation Book</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Step-by-step structural calculations demonstrating section adequacy, unity checks (&le; 1.0),
              deflection limits, and shear/moment capacities as per IS 800:2007.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>3D Finite Element Model Files</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Full analysis input files and node/beam stress outputs for peer review or vetting by
              government engineering institutes (such as IITs, NITs, or municipal panels).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Wind & Seismic Proof Documentation</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Detailed site-specific wind speed derivations (IS 875 Part 3) and seismic zone parameters
              (IS 1893) matching the building geographic coordinates.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Connection Integrity Reports</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              HSFG bolt shear and tension capacity checks, end plate bending verification, and weld throat
              dimension calculations for critical frame joints.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Foundation Interface Verification</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Safe bearing capacity checks, factor of safety against overturning and sliding, and pedestal
              rebar confirmation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
            <h3 className="font-heading font-bold text-sm text-white text-cyan-300 flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-cyan-400" />
              <span>Peer Review Coordination</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Assisting client representatives and technical vetting agencies by promptly resolving design
              queries, code interpretations, and verification questions.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Engineering Disclaimer */}
      <section className="p-5 sm:p-6 rounded-xl bg-amber-950/20 border border-amber-500/40 text-xs text-amber-200/90 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-heading font-bold text-amber-300 text-sm">
            Engineering Disclaimer
          </div>
          <p className="leading-relaxed font-body">
            Final structural design and certification requirements depend on project-specific information,
            applicable codes, site conditions and the requirements of the responsible engineer/client.
            Any formal statutory stability certificate required for occupancy or local authority sanction
            is issued in accordance with applicable state regulations.
          </p>
        </div>
      </section>

      {/* Action CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('projects')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono-spec"
        >
          <span>Next: Projects & Design Samples</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal('Stability Certificate Support')}
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Request Documentation Support
        </button>
      </div>
    </div>
  );
};
