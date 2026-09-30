import React from 'react';
import {
  Building2,
  ShieldCheck,
  Compass,
  CheckCircle2,
  MapPin,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  Layers,
  Award,
  Users,
  Hammer,
} from 'lucide-react';
import { COMPANY_INFO, WHY_CHOOSE_US_POINTS } from '../../data/companyData';
import { PageId } from '../../types';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 font-body text-slate-200">
      {/* Page Header */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            <span>Engineering Consultancy Profile</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            About YS PEB Design Studio & Consultants
          </h1>
          <p className="text-lg text-cyan-400 font-heading font-semibold">
            “{COMPANY_INFO.tagline}”
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            YS PEB DESIGN STUDIO & CONSULTANTS is a specialized Pre-Engineered Building design and
            structural engineering consultancy based in New Delhi, providing practical, accurate and
            fabrication-friendly engineering solutions across India.
          </p>
        </div>
      </div>

      {/* Main Philosophy & Capability Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
          {/* Section 1: Who We Are */}
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-cyan-400" />
              <span>Who We Are & What We Do</span>
            </h2>
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
              <p>
                YS PEB DESIGN STUDIO & CONSULTANTS was established to deliver focused, high-precision
                structural engineering and detailing support for the pre-engineered metal building sector.
                We bridge the gap between initial architectural concepts and shop-floor fabrication execution.
              </p>
              <p>
                Whether designing a high-bay industrial shed with overhead cranes or a multi-span logistics
                warehouse, our engineering team handles the complete structural lifecycle: 3D frame modeling,
                IS/AISC code compliance, connection engineering, fabrication detailing, and foundation design.
              </p>
            </div>
          </section>

          {/* Section 2: Transparent Engineering Ethics */}
          <section className="p-6 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono-spec font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Our Professional Ethics & Transparency</span>
            </div>
            <h3 className="text-lg font-heading font-bold text-white">
              Engineering Integrity First — No Inflated Claims
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We do not believe in exaggerating years in business or claiming unrealistic project counts.
              Our value lies in demonstrable structural engineering knowledge, transparent Indian Standard
              and AISC code application, practical fabrication-friendly detailing, and dedicated personal
              accountability on every single project.
            </p>
          </section>

          {/* Section 3: Core Capabilities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-cyan-400" />
              <span>Core Technical Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
                <h4 className="font-heading font-bold text-white text-sm text-cyan-300">
                  PEB Structural Design
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Rigorous primary frame analysis, tapered column and rafter optimization, wind and
                  seismic load assessment, and code compliance (IS 800:2007, IS 875, AISC).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
                <h4 className="font-heading font-bold text-white text-sm text-cyan-300">
                  Fabrication & Shop Detailing
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Comprehensive assembly drawings, part sheets, plate cut diagrams, bolt schedules, and
                  detailed Bills of Materials (BOM) prepared directly for shop fabrication.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
                <h4 className="font-heading font-bold text-white text-sm text-cyan-300">
                  Material & Steel Estimation
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Accurate preliminary and final steel tonnage takeoffs across primary framing, secondary
                  purlins/girts, sheeting, and hardware for confident bidding.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#091526] border border-slate-800 space-y-2">
                <h4 className="font-heading font-bold text-white text-sm text-cyan-300">
                  Foundation & Interface Design
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  Accurate column base reaction matrices, anchor bolt setting plans, pedestal detailing,
                  and isolated/combined footing structural drawings.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Target Sectors */}
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2.5">
              <Users className="w-6 h-6 text-cyan-400" />
              <span>Who We Work With</span>
            </h2>
            <div className="p-5 rounded-xl bg-[#091526] border border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  'PEB Fabricators & Manufacturers',
                  'Steel Structure Fabricators',
                  'Industrial Civil & EPC Contractors',
                  'Warehouse Developers & 3PL Logistics',
                  'Factory Owners & Plant Engineers',
                  'Infrastructure & EPC Companies',
                  'Small/Medium PEB firms needing outsourced design',
                  'Commercial & Agricultural Shed Builders',
                ].map((client, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar: Legal & Contact Profile */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-[#081526] border border-cyan-900/60 p-6 space-y-4 font-mono-spec text-xs shadow-xl">
            {/* Registered Business Header with Verification Shield */}
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/90 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-inner flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                  Registered Business Details
                </h3>
                <div className="text-[10px] text-cyan-400/90 font-mono-spec font-medium flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Verified Engineering Firm</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-[10px] text-slate-400 uppercase">Consultancy Name</div>
                <div className="text-slate-200 font-bold">{COMPANY_INFO.name}</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase">Legal Entity Name</div>
                <div className="text-slate-200">{COMPANY_INFO.legalName}</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase">Contact Person / Engineer</div>
                <div className="text-cyan-300 font-bold">{COMPANY_INFO.contactPerson}</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase">Goods and Services Tax (GSTIN)</div>
                <div className="text-cyan-300 font-bold">{COMPANY_INFO.gstNumber}</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase">Phone & Direct WhatsApp</div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-white hover:text-cyan-300 font-bold block"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 uppercase">Email Address</div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:text-cyan-300 break-all block"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase mb-1">Registered Address</div>
                <p className="text-slate-300 text-[11px] leading-relaxed font-body">
                  {COMPANY_INFO.address.full}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                REQUEST DESIGN QUOTE
              </button>
            </div>
          </div>

          {/* Regional Focus */}
          <div className="rounded-xl bg-[#091527] border border-slate-800 p-5 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Primary Regional Markets</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-body">
              While we serve projects nationwide, our structural designs are heavily deployed across the
              industrial belts of:
            </p>
            <div className="space-y-1 text-xs font-mono-spec">
              <div className="text-slate-300">• Delhi NCR (Noida, Greater Noida, Ghaziabad, Gurugram)</div>
              <div className="text-slate-300">• Uttar Pradesh (Kanpur, Lucknow, Meerut, Aligarh)</div>
              <div className="text-slate-300">• Haryana (Faridabad, Manesar, Panipat, Sonipat)</div>
              <div className="text-slate-300">• Rajasthan (Jaipur, Bhiwadi, Neemrana, Alwar)</div>
              <div className="text-slate-300">• Gujarat (Ahmedabad, Surat, Vadodara, Rajkot)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
