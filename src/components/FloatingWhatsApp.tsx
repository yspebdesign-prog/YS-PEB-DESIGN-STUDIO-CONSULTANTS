import React, { useState } from 'react';
import { MessageSquare, Phone, X, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(
    'Hello YS PEB Design Studio & Consultants, I am interested in your PEB design / detailing services. I would like to discuss my project.'
  );

  const handleSendWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(customMsg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* WhatsApp Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#091424] border border-emerald-500/40 shadow-2xl shadow-black/80 overflow-hidden font-body animate-in fade-in slide-in-from-bottom-3 duration-200 z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-emerald-950 border border-emerald-400/40 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-emerald-300" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#091424]"></span>
              </div>
              <div>
                <div className="text-sm font-bold">{COMPANY_INFO.name}</div>
                <div className="text-[10px] text-emerald-200 font-mono-spec">
                  Yash Singh • Usually replies promptly
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#070f1c] space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-800/80 text-slate-200 border border-slate-700/60 leading-relaxed">
              <p className="font-medium text-emerald-400 mb-1">
                👋 Welcome to YS PEB Design Studio & Consultants!
              </p>
              <p className="text-slate-300 text-[11px]">
                Need PEB structural design, GA drawings, fabrication detailing or estimation? Send your building size and specifications directly on WhatsApp.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Your Project Message:
              </label>
              <textarea
                rows={3}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none font-body"
              />
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open WhatsApp Chat</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call Directly: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="px-4 py-2 bg-[#050b14] border-t border-slate-800 text-[10px] text-slate-400 text-center font-mono-spec">
            Direct Line: +91 8810616535 • New Delhi
          </div>
        </div>
      )}

      {/* Floating Trigger Buttons */}
      <div className="flex items-center gap-2">
        <a
          id="floating-call-btn"
          href={`tel:${COMPANY_INFO.phone}`}
          className="sm:hidden p-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-950/80 border border-blue-400/40 transition-transform active:scale-95 flex items-center justify-center"
          title="Call Now"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          id="floating-whatsapp-btn"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-emerald-950/80 border border-emerald-400/50 transition-all transform hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
          </div>
          <span className="hidden sm:inline font-bold">Chat on WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
