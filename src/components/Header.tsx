import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Building2,
  FileSpreadsheet,
  Layers,
  Calculator,
  ShieldCheck,
  Compass,
  ArrowRight,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#070e1a] border-b border-slate-800 text-xs py-1.5 px-4 sm:px-6 lg:px-8 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Contact Details */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6">
            <a
              id="topbar-phone-link"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-slate-200">{COMPANY_INFO.phone}</span>
            </a>

            <a
              id="topbar-email-link"
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-800/80 font-mono-spec text-[10px] font-medium">
                GSTIN: {COMPANY_INFO.gstNumber}
              </span>
            </div>
          </div>

          {/* Regional Market Presence */}
          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Focus: Delhi NCR, UP, Haryana, Rajasthan, Gujarat & Pan India
            </span>
            <a
              id="topbar-whatsapp-btn"
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                COMPANY_INFO.whatsappDefaultMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#091222]/95 backdrop-blur-md border-b border-cyan-900/40 shadow-xl shadow-black/40 py-2.5'
            : 'bg-[#0a1526] border-b border-slate-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Sleek Transparent Glowing Vector Logo */}
          <button
            id="brand-logo-btn"
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none transition-transform active:scale-[0.99] py-1"
            title="YS PEB Design Studio & Consultants"
          >
            <BrandLogo size="md" showText={true} showTagline={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-sm font-medium">
            <button
              id="nav-home-btn"
              type="button"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'home'
                  ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              HOME
            </button>

            <button
              id="nav-about-btn"
              type="button"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'about'
                  ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              ABOUT
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                id="nav-services-dropdown-btn"
                type="button"
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  [
                    'services',
                    'peb-design',
                    'structural-design',
                    'detailing',
                    'estimation',
                    'foundation-design',
                    'stability-certificate',
                  ].includes(currentPage)
                    ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>SERVICES</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 mt-1 bg-[#091322] border border-cyan-900/60 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-mono-spec font-semibold uppercase tracking-wider text-cyan-400 border-b border-slate-800 mb-1">
                    PEB Engineering Solutions
                  </div>
                  <div className="space-y-0.5">
                    <button
                      type="button"
                      onClick={() => handleNavClick('peb-design')}
                      className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors group"
                    >
                      <Building2 className="w-4 h-4 text-cyan-400 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                          PEB Structural Design
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Main rigid frame, tapered plates & secondary framing
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('structural-design')}
                      className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors group"
                    >
                      <Layers className="w-4 h-4 text-blue-400 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                          Structural Design & Loads
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Wind, seismic, live, and crane load analysis
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('detailing')}
                      className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors group"
                    >
                      <Compass className="w-4 h-4 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                          Detailing & Shop Drawings
                        </div>
                        <div className="text-[10px] text-slate-400">
                          GA, anchor bolt, part cuts, assembly & BOM
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('estimation')}
                      className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors group"
                    >
                      <Calculator className="w-4 h-4 text-amber-400 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                          Quantity & Estimation
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Primary steel, purlins & sheeting weight calculation
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('foundation-design')}
                      className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors group"
                    >
                      <FileSpreadsheet className="w-4 h-4 text-purple-400 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                          Foundation & Pedestal Design
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Footing sizing & anchor bolt coordination
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNavClick('stability-certificate')}
                      className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors group"
                    >
                      <ShieldCheck className="w-4 h-4 text-rose-400 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                          Stability Certificate Support
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Structural calculation reports & coordination
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Special For Fabricators Link */}
            <button
              id="nav-fabricators-btn"
              type="button"
              onClick={() => handleNavClick('fabricators')}
              className={`relative px-3 py-2 rounded-md transition-all ${
                currentPage === 'fabricators'
                  ? 'text-amber-400 bg-amber-950/40 font-semibold'
                  : 'text-amber-300 hover:text-amber-200 hover:bg-amber-950/20'
              }`}
            >
              <span>FOR FABRICATORS</span>
              <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-amber-400"></span>
            </button>

            <button
              id="nav-projects-btn"
              type="button"
              onClick={() => handleNavClick('projects')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'projects'
                  ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              PROJECTS & SAMPLES
            </button>

            <button
              id="nav-industries-btn"
              type="button"
              onClick={() => handleNavClick('industries')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'industries'
                  ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              INDUSTRIES
            </button>

            <button
              id="nav-insights-btn"
              type="button"
              onClick={() => handleNavClick('insights')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'insights'
                  ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              INSIGHTS
            </button>

            <button
              id="nav-why-us-btn"
              type="button"
              onClick={() => handleNavClick('why-us')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'why-us'
                  ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              WHY US
            </button>

            <button
              id="nav-faq-btn"
              type="button"
              onClick={() => handleNavClick('faq')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'faq'
                  ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              FAQ
            </button>

            <button
              id="nav-contact-btn"
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'contact'
                  ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-get-quote-btn"
              type="button"
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-cyan-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              id="mobile-quick-quote-btn"
              type="button"
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3 py-1.5 rounded-md bg-cyan-600 text-white text-xs font-bold uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              id="mobile-hamburger-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[96px] bottom-0 bg-[#081220]/98 backdrop-blur-xl border-t border-slate-800 z-40 overflow-y-auto p-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'home' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              HOME
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'about' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              ABOUT US
            </button>

            {/* Mobile Services Accordion */}
            <div className="py-1">
              <div className="px-4 py-2 text-xs font-mono-spec font-bold text-cyan-400 uppercase tracking-wider">
                Services & Engineering
              </div>
              <div className="pl-4 space-y-1">
                <button
                  type="button"
                  onClick={() => handleNavClick('peb-design')}
                  className="w-full text-left px-3 py-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                >
                  • PEB Structural Design
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('structural-design')}
                  className="w-full text-left px-3 py-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                >
                  • Structural Design & Load Calculations
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('detailing')}
                  className="w-full text-left px-3 py-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                >
                  • Detailing & Fabrication Drawings
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('estimation')}
                  className="w-full text-left px-3 py-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                >
                  • Quantity / Estimation
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('foundation-design')}
                  className="w-full text-left px-3 py-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                >
                  • Foundation & Pedestal Design
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('stability-certificate')}
                  className="w-full text-left px-3 py-2 rounded-md text-xs text-slate-300 hover:text-white hover:bg-slate-800/60"
                >
                  • Stability Certificate Support
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('fabricators')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                currentPage === 'fabricators'
                  ? 'bg-amber-950 text-amber-300'
                  : 'text-amber-300 bg-amber-950/20 hover:bg-amber-950/40'
              }`}
            >
              <span>PEB SUPPORT FOR FABRICATORS</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/30 text-amber-200 uppercase font-mono-spec font-bold">
                B2B Focus
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('projects')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'projects' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              PROJECTS / SAMPLES
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('industries')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'industries' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              INDUSTRIES WE SERVE
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('insights')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                currentPage === 'insights' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>INDUSTRY INSIGHTS & BLOG</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono-spec">
                Engineering Hub
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('why-us')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'why-us' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              WHY CHOOSE US
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('faq')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'faq' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              FAQ
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === 'contact' ? 'bg-cyan-950 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Bottom Quick Actions */}
          <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold uppercase tracking-wider text-sm text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>REQUEST PROJECT QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="py-2.5 px-3 rounded-lg bg-slate-800 text-slate-200 font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-emerald-950 border border-emerald-700/60 text-emerald-300 font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-center pt-2 text-[11px] text-slate-400">
              New Delhi • Yash Singh • {COMPANY_INFO.phone}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
