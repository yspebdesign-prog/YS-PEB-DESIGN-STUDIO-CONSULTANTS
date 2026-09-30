import React, { useState, useMemo } from 'react';
import {
  Building2,
  MapPin,
  CheckCircle2,
  Camera,
  Ruler,
  Layers,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Factory,
  Warehouse,
  Truck,
  Wheat,
  FileCheck2,
  FileText,
  SlidersHorizontal,
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/companyData';
import { PageId, FeaturedProject } from '../../types';

interface ProjectsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedSector, setSelectedSector] = useState<string>('all');

  const sectors = useMemo(() => {
    return [
      { id: 'all', label: 'All Projects', count: FEATURED_PROJECTS.length },
      { id: 'logistics', label: 'Logistics & Warehousing', count: 2 },
      { id: 'manufacturing', label: 'Heavy Manufacturing', count: 2 },
      { id: 'agro', label: 'Agro & Processing', count: 1 },
      { id: 'textiles', label: 'Textile & Factory', count: 1 },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedSector === 'all') return FEATURED_PROJECTS;
    if (selectedSector === 'logistics') {
      return FEATURED_PROJECTS.filter(
        (p) => p.id === 'proj-logistics-warehouse' || p.id === 'proj-multi-bay-godown'
      );
    }
    if (selectedSector === 'manufacturing') {
      return FEATURED_PROJECTS.filter(
        (p) => p.id === 'proj-heavy-manufacturing' || p.id === 'proj-auto-press-shop'
      );
    }
    if (selectedSector === 'agro') {
      return FEATURED_PROJECTS.filter((p) => p.id === 'proj-agro-processing');
    }
    if (selectedSector === 'textiles') {
      return FEATURED_PROJECTS.filter((p) => p.id === 'proj-textile-spinning');
    }
    return FEATURED_PROJECTS;
  }, [selectedSector]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-body text-slate-200">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Engineering Portfolio • From Design to Fabrication</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Recent Featured Projects
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Examine our structural engineering, connection design, and detailed fabrication shop drawing packages executed for diverse industrial buildings across India. Every structure is engineered to Indian & International standards (IS 800:2007, IS 875, MBMA).
          </p>
        </div>
      </div>

      {/* Filter and Quick Stats Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-[#081526] border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-mono-spec text-slate-400">
          <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
          <span className="uppercase tracking-wider font-semibold text-slate-300">Filter by Sector:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {sectors.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => setSelectedSector(sec.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all flex items-center gap-1.5 ${
                selectedSector === sec.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950 border border-cyan-400'
                  : 'bg-[#09172c] hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <span>{sec.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono-spec ${
                selectedSector === sec.id ? 'bg-cyan-800 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {sec.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects Portfolio Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div>
            <div className="text-xs font-mono-spec text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>Project Deliverables & Case Details</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-white mt-1">
              Engineered Pre-Engineered Building Structures
            </h2>
          </div>
          <div className="text-xs font-mono-spec text-slate-400">
            Showing <strong className="text-white">{filteredProjects.length}</strong> of {FEATURED_PROJECTS.length} Key Projects
          </div>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#081324] border border-slate-800 hover:border-cyan-500/50 shadow-xl overflow-hidden group flex flex-col justify-between transition-all duration-300"
            >
              {/* Top: Photo/Cad Blueprint Placeholder Area */}
              <div>
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-[#091c36] via-[#071325] to-[#040914] border-b border-slate-800/90 overflow-hidden flex flex-col justify-between p-4 sm:p-5">
                  {/* Blueprint Grid Watermark */}
                  <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>

                  {/* Structural Portal Frame Blueprint Graphic Background */}
                  <svg
                    className="absolute right-3 bottom-0 w-64 h-36 opacity-15 pointer-events-none text-cyan-400"
                    viewBox="0 0 400 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {/* Tapered Frame Outline */}
                    <path d="M 40 180 L 70 60 L 200 20 L 330 60 L 360 180 Z" strokeDasharray="4 4" />
                    <line x1="70" y1="60" x2="330" y2="60" strokeDasharray="3 3" />
                    <line x1="200" y1="20" x2="200" y2="180" strokeDasharray="2 2" />
                    <line x1="40" y1="180" x2="360" y2="180" strokeWidth="3" />
                    <circle cx="70" cy="60" r="4" fill="currentColor" />
                    <circle cx="200" cy="20" r="4" fill="currentColor" />
                    <circle cx="330" cy="60" r="4" fill="currentColor" />
                  </svg>

                  {/* Top Bar inside image placeholder */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    {/* Status Badge: Design & Detailing Completed */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 font-mono-spec font-bold text-[11px] shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{project.status}</span>
                    </div>

                    {/* Drawing Reference */}
                    <span className="px-2.5 py-1 rounded-md bg-[#09182d]/90 border border-cyan-500/30 text-cyan-300 font-mono-spec text-[10px] font-semibold tracking-wider">
                      {project.drawingRef}
                    </span>
                  </div>

                  {/* Center/Bottom: Subtle Site Photo Archive Readiness Indicator */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-slate-700/60 text-slate-300">
                      <Camera className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <div className="text-[11px] font-mono-spec">
                        <span className="text-white font-semibold">Site Photo Archive:</span>{' '}
                        <span className="text-slate-400">Documentation & Erection Ready</span>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-blue-950/80 border border-blue-600/40 text-blue-300 text-[10px] font-mono-spec uppercase">
                      {project.buildingType.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Project Header Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-cyan-400 font-mono-spec text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <span className="text-[11px] font-mono-spec px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {project.sector}
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mt-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono-spec mt-1">
                      Typology: {project.buildingType}
                    </p>
                  </div>

                  {/* Key Specifications Grid */}
                  <div className="rounded-xl bg-[#060e1b] border border-slate-800 p-4 space-y-2.5">
                    <div className="text-[11px] font-mono-spec uppercase font-bold text-cyan-400 flex items-center gap-1.5 tracking-wider">
                      <Ruler className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Key Engineering Specifications:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-spec">
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800/80">
                        <span className="text-slate-400 block text-[10px] uppercase">Span & Height:</span>
                        <span className="text-white font-medium">{project.specs.spanAndHeight}</span>
                      </div>

                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800/80">
                        <span className="text-slate-400 block text-[10px] uppercase">Bay Spacing:</span>
                        <span className="text-white font-medium">{project.specs.baySpacing}</span>
                      </div>

                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800/80">
                        <span className="text-slate-400 block text-[10px] uppercase">Crane / Utility:</span>
                        <span className="text-amber-300 font-medium">{project.specs.craneCapacity}</span>
                      </div>

                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800/80">
                        <span className="text-slate-400 block text-[10px] uppercase">Design Standard:</span>
                        <span className="text-cyan-300 font-medium">{project.specs.designStandard}</span>
                      </div>
                    </div>

                    {(project.specs.steelTonnage || project.specs.builtUpArea) && (
                      <div className="flex flex-wrap items-center justify-between text-[11px] font-mono-spec text-slate-400 pt-1 border-t border-slate-800/60">
                        <span>Area: <strong className="text-white">{project.specs.builtUpArea}</strong></span>
                        <span>Estimated Steel: <strong className="text-cyan-300">{project.specs.steelTonnage}</strong></span>
                      </div>
                    )}
                  </div>

                  {/* Scope of Work Deliverables */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono-spec uppercase font-bold text-cyan-300 tracking-wider flex items-center gap-1.5">
                      <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Scope of Work Delivered:</span>
                    </div>
                    <div className="space-y-1.5">
                      {project.scopeOfWork.map((scope, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{scope}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="p-4 sm:p-6 bg-[#060e1b] border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] font-mono-spec text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Fabrication-Ready Drawing Set Delivered</span>
                </span>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(`Project Inquiry: ${project.title}`)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-cyan-950 flex items-center justify-center gap-1.5"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transparent Project Portfolio Coming Soon Notice */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#091527] border border-cyan-500/40 space-y-3">
        <div className="flex items-center gap-2 text-cyan-400 font-mono-spec font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Transparent Engineering Documentation & Confidentiality Policy</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
          Client Privacy & Non-Disclosure Compliance
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl font-body">
          To protect our clients&apos; commercial advantages, architectural copyrights, and proprietary manufacturing layouts, published project details reflect general technical parameters and engineering deliverables. Complete calculation packages, certified STAAD models, and detailed drawing archives are made accessible during formal project consultations.
        </p>
      </section>

      {/* Bottom CTA Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('industries')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 font-mono-spec font-medium"
        >
          <span>Next: Industries We Serve</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal()}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-950 transition-all"
        >
          Get a Project Quote
        </button>
      </div>
    </div>
  );
};
