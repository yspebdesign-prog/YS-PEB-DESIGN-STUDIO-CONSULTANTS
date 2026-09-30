import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck2,
} from 'lucide-react';
import { PageId } from '../../types';
import { FAQS, COMPANY_INFO } from '../../data/companyData';

interface FAQViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-body text-slate-200">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
          Frequently Asked Questions
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
          PEB Design & Engineering Queries Answered
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Clear answers on our PEB structural design deliverables, turnaround timelines, IS code standards,
          fabrication support, and preliminary estimation.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions (e.g. crane, wind load, timeline, foundation, codes)..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#091527] border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none placeholder:text-slate-500 font-medium"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#091527] border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-heading font-bold text-white text-sm sm:text-base flex items-center gap-3">
                    <span className="text-cyan-400 font-mono-spec text-xs">Q{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed font-body">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center text-slate-400 text-xs font-mono-spec">
            No questions matched your search query "{search}".
          </div>
        )}
      </div>

      {/* WhatsApp Assistance */}
      <div className="p-6 rounded-2xl bg-[#081324] border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-bold text-white text-base">Have a Project-Specific Technical Question?</h4>
          <p className="text-xs text-slate-400">
            Chat directly with our structural engineering team on WhatsApp for immediate guidance.
          </p>
        </div>

        <a
          href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
            'Hello YS PEB Design Studio, I have a question regarding PEB design deliverables for an upcoming building.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono-spec flex items-center gap-2 flex-shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
