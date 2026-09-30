import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldAlert,
  Layers,
  FileCheck2,
  Building2,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050b14] border-t border-slate-800 text-slate-300 font-body relative overflow-hidden">
      {/* Background CAD grid accents */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <BrandLogo size="md" showText={true} showTagline={true} />

            <div className="text-xs text-cyan-400 font-mono-spec font-medium">
              “PEB Design | Structural Engineering | Detailing | Estimation”
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized Pre-Engineered Building design and structural engineering consultancy providing practical,
              accurate and fabrication-friendly engineering solutions across India.
            </p>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1 font-mono-spec">
              <div>Legal Name: <span className="text-slate-200">{COMPANY_INFO.legalName}</span></div>
              <div>Contact Person: <span className="text-slate-200">{COMPANY_INFO.contactPerson}</span></div>
              <div>GST No: <span className="text-cyan-300 font-bold">{COMPANY_INFO.gstNumber}</span></div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-500" />
                  <span>All Services</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('fabricators')}
                  className="hover:text-amber-400 text-amber-300 font-medium transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                  <span>PEB Support for Fabricators</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('projects')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-500" />
                  <span>Projects & Design Samples</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('industries')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-500" />
                  <span>Industries We Serve</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('insights')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-medium text-cyan-300"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                  <span>Industry Insights & Blog</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('why-us')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-500" />
                  <span>Why Work With YS PEB?</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('faq')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-500" />
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-cyan-500" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Engineering Services */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('peb-design')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  PEB Structural Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('structural-design')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Structural Analysis & Load Calculation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('detailing')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  PEB Detailing & GA Drawings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('detailing')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Shop Fabrication Drawings & Part Cuts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('foundation-design')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Foundation & Pedestal Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('estimation')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Material Quantity & Steel Estimation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('stability-certificate')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Stability Certificate Support
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Design Consultancy & Coordination
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office & Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Registered Office
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-relaxed font-body">
                  {COMPANY_INFO.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-slate-200 hover:text-cyan-400 font-semibold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-200 hover:text-cyan-400 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Focus Regions */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="text-[10px] font-mono-spec uppercase text-slate-400 mb-1.5 font-bold">
                Primary Regional Markets:
              </div>
              <div className="flex flex-wrap gap-1">
                {['Delhi NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan', 'Gujarat'].map((r) => (
                  <span
                    key={r}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="pt-2">
              <div className="text-[11px] text-slate-300 uppercase font-mono-spec mb-2.5 font-bold tracking-wider">
                Connect
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[45px] h-[45px] rounded-xl bg-[#0077b5] hover:bg-[#0288d1] text-white border border-sky-300/50 shadow-[0_0_18px_rgba(0,119,181,0.7)] hover:shadow-[0_0_26px_rgba(56,189,248,0.95)] transition-all duration-300 hover:scale-110 inline-flex items-center justify-center flex-shrink-0"
                  title="Connect on LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[45px] h-[45px] rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white border border-pink-300/50 shadow-[0_0_18px_rgba(220,39,67,0.7)] hover:shadow-[0_0_26px_rgba(236,72,153,0.95)] transition-all duration-300 hover:scale-110 inline-flex items-center justify-center flex-shrink-0"
                  title="Follow on Instagram"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-[#091220] border border-slate-800/90 text-xs text-slate-400 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[11px]">
            <strong className="text-slate-300">Engineering Disclaimer:</strong> Final structural design and certification
            requirements depend on project-specific information, applicable codes, site conditions and the requirements of
            the responsible engineer/client. Foundation design depends on structural reactions, soil conditions, building
            configuration, and applicable design requirements.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <span className="text-slate-200 font-semibold">YS PEB DESIGN STUDIO & CONSULTANTS</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Designed for PEB Fabricators & Contractors</span>
            <span>•</span>
            <span className="text-cyan-400 font-mono-spec">From Design to Fabrication Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
