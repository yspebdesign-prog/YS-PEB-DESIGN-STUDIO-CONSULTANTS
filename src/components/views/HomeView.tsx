import React from 'react';
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Building2,
  FileText,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ChevronRight,
  Compass,
  Calculator,
  Download,
  ShieldAlert,
  Boxes,
  Cpu,
  Hammer,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import {
  COMPANY_INFO,
  TRUST_CARDS,
  SERVICES_LIST,
  DESIGN_TO_FABRICATION_STEPS,
  WORK_PROCESS_6_STEPS,
  DESIGN_SAMPLES,
  INDUSTRIES_SERVED,
  WHY_CHOOSE_US_POINTS,
  FAQS,
} from '../../data/companyData';
import { INITIAL_INSIGHTS } from '../../data/insightsData';
import { TechnicalCADDiagram } from '../TechnicalCADDiagrams';
import { PEBCalculatorTool } from '../PEBCalculatorTool';
import { PageId } from '../../types';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
  onApplyDimensionsToQuote: (dimensions: { length: string; width: string; height: string }) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onApplyDimensionsToQuote,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#081324] via-[#09182f] to-[#0a1528]">
        {/* Architectural Steel Grid Background with Blueprint Overlay */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none"></div>

        {/* Diagonal Technical CAD Graphic Overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
          <svg className="absolute w-[1200px] h-[700px] -right-40 -top-20" viewBox="0 0 1200 700" fill="none">
            {/* Tapered portal rafters */}
            <line x1="100" y1="650" x2="600" y2="200" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6,4" />
            <line x1="600" y1="200" x2="1100" y2="650" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6,4" />
            <line x1="100" y1="650" x2="1100" y2="650" stroke="#38bdf8" strokeWidth="2" />
            <line x1="200" y1="650" x2="200" y2="560" stroke="#60a5fa" strokeWidth="1" />
            <line x1="400" y1="650" x2="400" y2="380" stroke="#60a5fa" strokeWidth="1" />
            <line x1="600" y1="200" x2="600" y2="650" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
            <line x1="800" y1="650" x2="800" y2="380" stroke="#60a5fa" strokeWidth="1" />
            <line x1="1000" y1="650" x2="1000" y2="560" stroke="#60a5fa" strokeWidth="1" />
            {/* Concentric coordinate rings */}
            <circle cx="600" cy="200" r="120" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="4,4" />
            <circle cx="600" cy="200" r="240" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="2,4" />
          </svg>
        </div>

        {/* Hero Content Container - Modern Center-Aligned Layout */}
        <div className="relative max-w-4xl mx-auto w-full text-center space-y-7 z-10 py-6 sm:py-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono-spec text-xs tracking-wider uppercase font-semibold shadow-inner mx-auto">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>PEB Structural Design • Detailing • Estimation</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.14]">
            Professional PEB Design & Structural Engineering Solutions
          </h1>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-cyan-400 tracking-wide max-w-3xl mx-auto">
            {COMPANY_INFO.secondaryTagline}
          </p>

          {/* Hero Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-body">
            {COMPANY_INFO.name} provides professional Pre-Engineered Building design, structural
            engineering, detailing, estimation and foundation design solutions for PEB fabricators,
            contractors and industrial projects across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              id="hero-get-quote-btn"
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-cyan-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-services-btn"
              type="button"
              onClick={() => onNavigate('services')}
              className="px-7 py-3.5 sm:py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
            >
              OUR SERVICES
            </button>

            <a
              id="hero-whatsapp-btn"
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                COMPANY_INFO.whatsappDefaultMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-950/90 border border-emerald-500/60 hover:bg-emerald-900 text-emerald-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Trust Badges */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-slate-400 font-mono-spec">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>GST Registered: {COMPANY_INFO.gstNumber}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct Contact: Yash Singh</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Delhi NCR • UP • Haryana • Rajasthan • Gujarat</span>
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST / HIGHLIGHT SECTION (4 Cards Immediately Below Hero) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-[#091526] border border-cyan-900/40 hover:border-cyan-500/60 transition-all shadow-xl shadow-black/50 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                {idx === 0 && <Building2 className="w-5 h-5" />}
                {idx === 1 && <FileText className="w-5 h-5" />}
                {idx === 2 && <Activity className="w-5 h-5" />}
                {idx === 3 && <ShieldCheck className="w-5 h-5" />}
              </div>
              <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-body">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT US SNAPSHOT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-2xl bg-[#081528] border border-slate-800 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono-spec text-xs uppercase font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                About The Consultancy
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
                Practical, Accurate & Fabrication-Friendly PEB Engineering
              </h2>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed font-body">
                <p>
                  YS PEB Design Studio & Consultants is a specialized Pre-Engineered Building design
                  and structural engineering consultancy focused on providing practical, accurate and
                  fabrication-friendly engineering solutions.
                </p>
                <p>
                  We support PEB fabricators, contractors and industrial clients with structural
                  design, detailing, estimation, foundation design and engineering documentation.
                </p>
                <p>
                  Our objective is to make the complete design process more efficient, accurate and
                  suitable for fabrication and site execution.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  <span>Read Detailed About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-slate-600">•</span>
                <button
                  type="button"
                  onClick={() => onNavigate('fabricators')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  <span>Special Support for Fabricators</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/90 border border-cyan-900/50 space-y-3 font-mono-spec text-xs">
              <div className="text-cyan-400 font-bold border-b border-slate-800 pb-2">
                VERIFIED REGISTRATION:
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Trade Name:</span>
                <span className="text-slate-200 text-right font-bold">YS PEB Design Studio</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Legal Name:</span>
                <span className="text-slate-200">{COMPANY_INFO.legalName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Contact Person:</span>
                <span className="text-slate-200">{COMPANY_INFO.contactPerson}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">GSTIN:</span>
                <span className="text-cyan-300 font-bold">{COMPANY_INFO.gstNumber}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">HQ Location:</span>
                <span className="text-slate-200">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES SECTION (Grid of all 9 services) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono-spec text-xs uppercase font-bold tracking-wider">
            <span>Specialized Engineering Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">
            Comprehensive PEB Structural Engineering Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-body">
            From preliminary frame optimization and load assessment to fabrication-ready shop drawings
            and foundation interface coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={srv.id}
              className="rounded-xl bg-[#091526] border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {srv.id === 'peb-structural-design' && <Building2 className="w-5 h-5" />}
                    {srv.id === 'peb-detailing' && <Compass className="w-5 h-5" />}
                    {srv.id === 'ga-drawings' && <Layers className="w-5 h-5" />}
                    {srv.id === 'fabrication-drawings' && <Hammer className="w-5 h-5" />}
                    {srv.id === 'foundation-design' && <Layers className="w-5 h-5" />}
                    {srv.id === 'load-calculation' && <Cpu className="w-5 h-5" />}
                    {srv.id === 'quantity-estimation' && <Calculator className="w-5 h-5" />}
                    {srv.id === 'stability-certificate' && <ShieldCheck className="w-5 h-5" />}
                    {srv.id === 'design-consultancy' && <Boxes className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono-spec px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Service 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-body">
                    {srv.description}
                  </p>
                </div>

                {/* Key Deliverables Highlights */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                  <div className="text-[10px] font-mono-spec text-cyan-400 font-bold uppercase">
                    Deliverables Include:
                  </div>
                  {srv.keyDeliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => onNavigate(srv.pageId)}
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Technical Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(srv.title)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-cyan-950 text-slate-200 hover:text-cyan-300 text-[11px] font-medium border border-slate-700 transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DESIGN-TO-FABRICATION SECTION (5-Step Horizontal Process) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl bg-gradient-to-b from-[#08152a] to-[#06101f] border border-cyan-900/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono-spec text-[11px] uppercase tracking-wider font-bold">
              Engineering Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              From Design to Fabrication
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              “We focus on practical engineering solutions that help bridge the gap between structural
              design and fabrication.”
            </p>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {DESIGN_TO_FABRICATION_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-xl bg-[#091527] border border-slate-800 p-4 sm:p-5 flex flex-col justify-between group hover:border-cyan-500/60 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-mono-spec font-black text-cyan-400">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-mono-spec text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-mono-spec text-cyan-400/90 mb-2.5 font-medium">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-[13px] text-white leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-800/80">
                  <div className="text-cyan-300 font-bold uppercase font-mono-spec text-[11px] tracking-wider mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>OUTPUT:</span>
                  </div>
                  <div className="space-y-1.5 text-[11px] sm:text-xs text-slate-200">
                    {step.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 leading-snug">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SPECIAL SECTION FOR FABRICATORS (Very Important Callout) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#181d28] to-slate-900 border-2 border-amber-500/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/60 text-amber-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
                <Hammer className="w-3.5 h-3.5" />
                <span>Dedicated B2B Support for Fabricators</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Need PEB Design Support for Your Fabrication Business?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
                If you are a PEB fabricator or contractor looking for reliable external design and
                detailing support, YS PEB Design Studio & Consultants can support your projects from
                structural design through fabrication-ready documentation.
              </p>

              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 font-mono-spec">
                ✓ Flexible support for project-based and regular requirements.
                <br />
                ✓ High-precision part drawings, bolt lists, and plate cutting dimensions formatted for your shop.
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('fabricators')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-950 transition-all flex items-center gap-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                    'Hello Yash Singh, I am a PEB fabricator looking for reliable external design and detailing support. Let’s discuss.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-950/90 border border-emerald-500/60 hover:bg-emerald-900 text-emerald-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/90 border border-amber-500/40 space-y-2.5 text-xs">
              <div className="font-heading font-bold text-white border-b border-slate-800 pb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Outsourcing Advantages:</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Zero full-time designer payroll overhead</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Standardized plate sizes to minimize scrap</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Fast turnaround for pre-bid tender estimates</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Direct coordination with founder Yash Singh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE PEB CALCULATOR & TONNAGE ESTIMATOR */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <PEBCalculatorTool onApplyToQuote={onApplyDimensionsToQuote} />
      </section>

      {/* ========================================================================= */}
      {/* 8. SAMPLE DRAWINGS & PORTFOLIO SHOWCASE PREVIEW */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono-spec text-xs uppercase font-bold tracking-wider">
              <span>Technical Demonstrations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
              Engineering Design Samples
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-body max-w-xl">
              Preview our drawing standards and detailing methodology. Clearly labeled as sample /
              demonstration material.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="self-start sm:self-auto px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-300 text-xs font-bold font-mono-spec flex items-center gap-1.5 transition-colors"
          >
            <span>View All 5 Samples</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_SAMPLES.slice(0, 3).map((sample) => (
            <div
              key={sample.id}
              className="rounded-xl bg-[#091526] border border-slate-800 hover:border-cyan-500/50 overflow-hidden group flex flex-col justify-between transition-all"
            >
              <div className="p-4 bg-[#07111e] border-b border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono-spec text-cyan-400 font-bold uppercase">
                    {sample.category}
                  </span>
                  <div className="text-xs font-bold text-white font-heading">{sample.title}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono-spec">
                  Demo Sample
                </span>
              </div>

              {/* Sample Diagram Preview */}
              <div className="p-3 bg-[#050b14]">
                <TechnicalCADDiagram type={sample.svgType} interactive={false} />
              </div>

              <div className="p-4 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed font-body">
                  {sample.description}
                </p>

                <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] font-mono-spec text-slate-400 space-y-0.5">
                  <div>DWG: {sample.drawingNumber}</div>
                  <div>Scale: {sample.scale}</div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="w-full py-2 rounded-lg bg-slate-800 hover:bg-cyan-950 text-slate-200 hover:text-cyan-300 text-xs font-bold border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Inspect Drawing Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WORK PROCESS (6-Step Detailed Workflow) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold tracking-wider">
            Execution Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Professional 6-Step Work Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-body">
            A transparent, responsive collaboration framework ensuring design accuracy and on-time
            delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORK_PROCESS_6_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#091527] border border-slate-800 hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-mono-spec font-black text-cyan-400">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono-spec px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  Step 0{idx + 1}
                </span>
              </div>

              <h3 className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h3>
              <div className="text-[11px] font-mono-spec text-cyan-400/80 mb-2">
                {step.subtitle}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-body">
                {step.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1 text-[10px] text-slate-300 font-mono-spec">
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. INDUSTRIES WE SERVE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold tracking-wider">
              Target Building Sectors
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
              Industries We Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-body">
              Engineered structural steel framing tailored for specific operational workflows.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('industries')}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 font-mono-spec"
          >
            <span>Explore All 9 Industrial Sectors</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES_SERVED.slice(0, 6).map((ind) => (
            <div
              key={ind.id}
              className="p-5 rounded-xl bg-[#091526] border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                  {ind.title}
                </h3>
                <div className="text-[11px] font-mono-spec text-cyan-400 mt-0.5 mb-2">
                  Span: {ind.typicalSpan}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-body">
                  {ind.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                <span className="text-slate-300 font-semibold">Ideal For:</span> {ind.idealFor}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. WHY WORK WITH YS PEB? (8 Factual Points) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-2xl bg-[#081528] border border-slate-800 p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold tracking-wider">
              Engineering Integrity
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Why Work With YS PEB?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-body">
              Factual, transparent and technically focused engineering practice without inflated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE_US_POINTS.map((pt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-8 h-8 rounded-md bg-blue-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xs font-mono-spec font-bold mb-2.5">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-sm text-white">{pt.title}</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-body">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11.5. INDUSTRY INSIGHTS & ENGINEERING CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Industry Insights & Technical Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-body max-w-2xl">
              Practical PEB structural analysis, IS 800/875 code guidelines, tonnage optimization case studies,
              and shop-floor detailing rules of thumb written by practicing structural engineers.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('insights')}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-white text-xs font-mono-spec font-bold flex items-center gap-2 border border-slate-700 transition-colors"
          >
            <span>Explore All Insights & Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_INSIGHTS.slice(0, 3).map((art) => (
            <div
              key={art.id}
              className="rounded-2xl bg-[#091526] border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all group shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono-spec">
                  <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 uppercase font-bold">
                    {art.category}
                  </span>
                  <span className="text-slate-400">{art.readTime}</span>
                </div>

                <div>
                  <h3
                    onClick={() => onNavigate('insights')}
                    className="text-base font-heading font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 cursor-pointer"
                  >
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed font-body">
                    {art.excerpt}
                  </p>
                </div>

                {art.projectMetrics?.savings && (
                  <div className="p-2 rounded bg-emerald-950/60 border border-emerald-700/50 text-[11px] font-mono-spec text-emerald-300 font-bold">
                    Result: {art.projectMetrics.savings}
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono-spec">{art.date}</span>
                <button
                  type="button"
                  onClick={() => onNavigate('insights')}
                  className="text-xs text-cyan-400 font-mono-spec font-bold flex items-center gap-1 group-hover:text-white"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold tracking-wider">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-body">
            Everything you need to know about our PEB design and detailing support.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 5).map((faq, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-xl bg-[#091526] border border-slate-800">
              <h3 className="text-sm sm:text-base font-heading font-bold text-white flex items-start gap-2.5">
                <span className="text-cyan-400 font-mono-spec text-xs mt-0.5">Q{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2.5 pl-6 leading-relaxed font-body">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => onNavigate('faq')}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 font-mono-spec inline-flex items-center gap-1.5"
          >
            <span>View All Frequently Asked Questions</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FINAL HOME CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="rounded-2xl bg-gradient-to-r from-blue-950 via-[#0a1e38] to-cyan-950 border border-cyan-500/50 p-8 sm:p-12 text-center space-y-5 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold tracking-wider">
              Ready to Accelerate Your Fabrication?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white">
              Let’s Discuss Your Next PEB Structure.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-body">
              Submit your project layout, or send your building length, span, and height directly to
              our engineering team for a transparent quotation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              REQUEST A QUOTE
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                COMPANY_INFO.whatsappDefaultMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Details</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
