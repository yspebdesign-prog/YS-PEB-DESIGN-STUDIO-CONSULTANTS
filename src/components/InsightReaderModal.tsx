import React, { useState } from 'react';
import {
  X,
  ArrowLeft,
  Share2,
  Bookmark,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  FileCheck2,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Copy,
  Check,
  Printer,
  Compass,
} from 'lucide-react';
import { InsightArticle } from '../types';
import { TechnicalCADDiagram } from './TechnicalCADDiagrams';
import { COMPANY_INFO } from '../data/companyData';

interface InsightReaderModalProps {
  article: InsightArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: (service?: string) => void;
  onSelectTag?: (tag: string) => void;
}

export const InsightReaderModal: React.FC<InsightReaderModalProps> = ({
  article,
  isOpen,
  onClose,
  onOpenQuoteModal,
  onSelectTag,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !article) return null;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const text = `*${article.title}*\n${article.subtitle}\n\nRead technical insights from ${COMPANY_INFO.name}: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-6 bg-[#07111e] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden font-body text-slate-200">
        {/* Sticky Reader Top Bar */}
        <div className="sticky top-0 z-20 px-4 sm:px-6 py-3.5 bg-[#091629]/95 backdrop-blur-md border-b border-cyan-900/60 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono-spec text-cyan-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Industry Insights</span>
            <span className="sm:hidden">Back</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono-spec flex items-center gap-1.5 transition-colors"
              title="Copy Article Link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>

            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-950 border border-emerald-600/60 hover:bg-emerald-900 text-emerald-300 text-xs font-mono-spec flex items-center gap-1.5 transition-colors"
              title="Share on WhatsApp"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="hidden md:flex p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Print Article"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Article Reading Container */}
        <div className="p-5 sm:p-8 md:p-12 space-y-10 max-h-[85vh] overflow-y-auto font-body">
          {/* Article Header Metadata */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-500/50 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono-spec text-xs font-semibold">
                {article.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400 font-mono-spec ml-auto">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              {article.subtitle}
            </p>

            {/* Author & Date Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs font-mono-spec text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold">
                  YS
                </div>
                <div>
                  <div className="font-bold text-white text-sm font-heading">{article.author.name}</div>
                  <div className="text-[11px] text-cyan-400">{article.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{article.date}</span>
              </div>
            </div>

            {/* Applicable Code Standards */}
            {article.codeReferences && article.codeReferences.length > 0 && (
              <div className="p-3.5 rounded-xl bg-[#091526] border border-cyan-900/50 space-y-1.5">
                <div className="text-[10px] font-mono-spec text-cyan-400 uppercase font-bold tracking-wider">
                  Referenced Indian & International Standards:
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.codeReferences.map((ref, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono-spec"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Metrics Summary (For Case Studies) */}
          {article.projectMetrics && (
            <div className="p-6 rounded-2xl bg-[#09182d] border border-cyan-500/40 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono-spec text-xs uppercase font-bold tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Case Study Project Parameters & Results</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs">
                {article.projectMetrics.span && (
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono-spec uppercase block mb-1">
                      Building Geometry
                    </span>
                    <strong className="text-white text-sm font-heading">
                      {article.projectMetrics.span}
                    </strong>
                  </div>
                )}

                {article.projectMetrics.tonnage && (
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono-spec uppercase block mb-1">
                      Structural Tonnage
                    </span>
                    <strong className="text-cyan-300 text-sm font-heading">
                      {article.projectMetrics.tonnage}
                    </strong>
                  </div>
                )}

                {article.projectMetrics.savings && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/60">
                    <span className="text-[10px] text-emerald-300 font-mono-spec uppercase block mb-1">
                      Steel Weight Reduction
                    </span>
                    <strong className="text-emerald-400 text-sm font-heading">
                      {article.projectMetrics.savings}
                    </strong>
                  </div>
                )}

                {article.projectMetrics.location && (
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono-spec uppercase block mb-1">
                      Project Location
                    </span>
                    <strong className="text-slate-200 text-sm font-heading">
                      {article.projectMetrics.location}
                    </strong>
                  </div>
                )}

                {article.projectMetrics.crane && (
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 font-mono-spec uppercase block mb-1">
                      Crane Specification
                    </span>
                    <strong className="text-amber-300 text-xs font-mono-spec">
                      {article.projectMetrics.crane}
                    </strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Article Excerpt Card */}
          <div className="p-4 sm:p-6 rounded-xl bg-cyan-950/20 border-l-4 border-cyan-400 text-slate-200 text-sm sm:text-base leading-relaxed italic">
            "{article.excerpt}"
          </div>

          {/* Article Content Sections */}
          <div className="space-y-10">
            {article.contentSections.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>{sec.heading}</span>
                </h2>

                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Bullets */}
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className="space-y-2 pl-2 text-sm text-slate-300">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Callout */}
                {sec.callout && (
                  <div
                    className={`p-4 rounded-xl text-xs space-y-1.5 border ${
                      sec.callout.type === 'code-warning'
                        ? 'bg-amber-950/30 border-amber-500/50 text-amber-200'
                        : sec.callout.type === 'formula'
                        ? 'bg-blue-950/40 border-blue-500/50 text-cyan-200 font-mono-spec'
                        : 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                    }`}
                  >
                    <div className="font-heading font-bold text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{sec.callout.title}</span>
                    </div>
                    <p className="whitespace-pre-line leading-relaxed font-body">
                      {sec.callout.text}
                    </p>
                  </div>
                )}

                {/* Embedded CAD Diagram */}
                {sec.diagramType && (
                  <div className="my-6 rounded-xl bg-[#040812] border border-slate-800 overflow-hidden shadow-2xl">
                    <div className="p-3 bg-[#091527] border-b border-slate-800 flex items-center justify-between text-xs font-mono-spec">
                      <span className="text-cyan-400 font-bold uppercase">
                        Technical Detailing Diagram (Interactive CAD Preview)
                      </span>
                      <span className="text-[10px] text-slate-400">Scale 1:25 / 1:50</span>
                    </div>
                    <div className="p-4 sm:p-6">
                      <TechnicalCADDiagram type={sec.diagramType} interactive={true} />
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Key Takeaways Executive Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#09172f] to-[#07101f] border border-cyan-500/50 shadow-2xl space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono-spec text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5" />
                <span>Executive Engineering Takeaways</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Practical Guidelines for PEB Fabricators & Consultants
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800">
            <span className="text-xs font-mono-spec text-slate-400">Related Tags:</span>
            {article.tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  if (onSelectTag) {
                    onSelectTag(tag);
                    onClose();
                  }
                }}
                className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 text-xs font-mono-spec border border-slate-800 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Contextual CTA for Quote / Consultancy */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-[#091c38] to-slate-950 border border-cyan-500/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2">
              <div className="text-cyan-400 font-mono-spec text-xs uppercase font-bold tracking-wider">
                Require Engineering Assistance on a Similar Structure?
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                Get Your PEB Framing & Foundation Engineered by YS PEB Studio
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                We optimize tapered sections, calculate accurate IS 875 wind/seismic loads, and deliver
                fabrication-ready shop drawings with BOM.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenQuoteModal(`Technical Discussion on: ${article.title}`);
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-950 flex items-center gap-2 flex-shrink-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
