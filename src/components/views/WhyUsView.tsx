import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Compass,
  FileCheck2,
  Award,
  ArrowRight,
  Layers,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';

interface WhyUsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const WhyUsView: React.FC<WhyUsViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 font-body text-slate-200">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-b from-[#09172e] to-[#07111e] border border-cyan-500/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-4">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Engineering Precision & Fabricator Trust
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Why Choose YS PEB Design Studio & Consultants?
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Unlike generic civil design firms, our core focus is 100% Pre-Engineered Steel Buildings.
            We combine rigorous mathematical limit-state analysis with practical workshop fabrication logic.
          </p>
        </div>
      </div>

      {/* 6 Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: TrendingUp,
            title: 'Tonnage Economy (10-15% Savings)',
            desc: 'Every kilogram of steel saved directly increases your profit margin. Our tapered frame optimization ensures maximum steel efficiency while passing all IS 800:2007 checks.',
          },
          {
            icon: FileCheck2,
            title: '100% Workshop-Ready Detailing',
            desc: 'We do not generate vague conceptual sketches. Our shop drawings include exact bolt hole patterns, part mark stamps, cut lengths, and welding details so technicians fabricate without confusion.',
          },
          {
            icon: ShieldCheck,
            title: 'Strict Indian Standards Compliance',
            desc: 'Engineered strictly in accordance with IS 800:2007 (Limit State), IS 875 (Part 1, 2, 3): 2015 wind loads, and IS 1893:2016 seismic provisions for North and West India.',
          },
          {
            icon: Clock,
            title: 'Fast Turnaround for Tenders',
            desc: 'We understand competitive bid deadlines. Get preliminary structural sizing and tonnage estimates in 24 to 48 hours to quote prospective warehouse and factory tenders confidently.',
          },
          {
            icon: Compass,
            title: 'Integrated Superstructure & Foundation',
            desc: 'We design both the steel superstructure and reinforced concrete foundations, providing anchor bolt settings, pedestal sizing, and tie beams coordinated as one complete system.',
          },
          {
            icon: MapPin,
            title: 'Deep Regional Expertise',
            desc: 'Special focus on Delhi NCR, Uttar Pradesh, Haryana, Rajasthan, and Gujarat. We understand local wind zones (Vb 47-50 m/s), soil characteristics, and local fabrication ecosystem habits.',
          },
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-[#091527] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white">{item.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Comparison Table: Traditional Design Firm vs YS PEB Design Studio */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#081324] border border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold">The Practical Difference</span>
          <h2 className="text-2xl font-heading font-bold text-white mt-1">
            General Civil Consultants vs. YS PEB Specialists
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-body">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono-spec uppercase">
                <th className="py-3 px-4">Feature / Deliverable</th>
                <th className="py-3 px-4">Generic Structural Consultant</th>
                <th className="py-3 px-4 text-cyan-400">YS PEB Design Studio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              <tr>
                <td className="py-3 px-4 font-bold text-white">PEB Tapered Frame Sizing</td>
                <td className="py-3 px-4 text-slate-400">Often uses heavy uniform I-sections (higher tonnage)</td>
                <td className="py-3 px-4 text-cyan-300 font-bold">Sculpted tapered built-up plates (10-15% lighter)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">Fabrication Drawings</td>
                <td className="py-3 px-4 text-slate-400">Basic GA only; fabricator must hire separate detailer</td>
                <td className="py-3 px-4 text-cyan-300 font-bold">Complete shop drawings, piece marks & bolt templates included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">Wind Load Modeling</td>
                <td className="py-3 px-4 text-slate-400">Default conservative static estimates</td>
                <td className="py-3 px-4 text-cyan-300 font-bold">Comprehensive IS 875:2015 wind pressure with local verge/eave suction</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">Shop-Floor Interaction</td>
                <td className="py-3 px-4 text-slate-400">Slow communication; theoretical design mindset</td>
                <td className="py-3 px-4 text-cyan-300 font-bold">Direct WhatsApp/phone support with active project engineers</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">Tender Estimation Speed</td>
                <td className="py-3 px-4 text-slate-400">5 to 10 days wait time</td>
                <td className="py-3 px-4 text-cyan-300 font-bold">Fast preliminary sizing in 24 to 48 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-[#0a1a36] to-slate-950 border border-cyan-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-heading font-bold text-white">
            Have an Upcoming PEB Project to Review?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Send us your architectural plan or warehouse dimensions. We will review structural feasibility
            and provide a competitive design proposal.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenQuoteModal()}
          className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-950 font-mono-spec"
        >
          Request Project Consultation
        </button>
      </div>
    </div>
  );
};
