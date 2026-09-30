import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Globe,
  FileCheck2,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { PageId } from '../../types';
import { BrandLogo } from '../BrandLogo';
import { StateSelect } from '../StateSelect';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('PEB Structural Design + GA Drawings');
  const [location, setLocation] = useState('Delhi / Delhi NCR');
  const [otherLocationDetail, setOtherLocationDetail] = useState('');
  const [span, setSpan] = useState('');
  const [length, setLength] = useState('');
  const [eaveHeight, setEaveHeight] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const finalLocation =
      location === 'Other' && otherLocationDetail.trim()
        ? `Other (${otherLocationDetail.trim()})`
        : location;

    const dimensions = [
      span ? `Span: ${span}m` : null,
      length ? `Length: ${length}m` : null,
      eaveHeight ? `Eave Ht: ${eaveHeight}m` : null,
    ].filter(Boolean).join(', ') || 'Not specified';

    const text = `*New Contact Enquiry - YS PEB Design Studio*
*Name:* ${name || 'Not provided'}
*Company:* ${company || 'Not provided'}
*Phone:* ${phone || 'Not provided'}
*Email:* ${email || 'Not provided'}
*Service Required:* ${service}
*Project Location / State:* ${finalLocation}
*Building Dimensions:* ${dimensions}
*Project Details / Notes:* ${message || 'Please contact me regarding PEB design consultation'}`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 font-body text-slate-200">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-b from-[#09172e] to-[#07111e] border border-cyan-500/40 p-8 sm:p-12 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative max-w-3xl space-y-4">
          <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
            Direct Engineering Consultation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
            Contact YS PEB Design Studio & Consultants
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
            Get in touch directly with our structural engineering team for project quotes, preliminary
            tonnage estimation, tender assistance, or shop drawing queries.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Direct Contact Details & Location */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#091527] border border-slate-800 space-y-6">
            {/* Transparent Glowing Vector PEB Logo Emblem */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-[#071324] to-slate-900/60 border border-cyan-500/30 shadow-lg shadow-cyan-950/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none"></div>
              <BrandLogo size="lg" layout="horizontal" showText={true} showTagline={true} />
            </div>

            <h3 className="text-xl font-heading font-bold text-white">Studio Office & Contact</h3>

            <div className="space-y-5 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-mono-spec text-[11px] uppercase">Registered Studio Office</div>
                  <div className="text-white font-medium mt-0.5 leading-relaxed">
                    {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-mono-spec text-[11px] uppercase">Phone / Consultation Line</div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-cyan-300 hover:text-white font-mono-spec font-bold text-sm block mt-0.5"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-400">Direct technical calls with lead consultant</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-mono-spec text-[11px] uppercase">WhatsApp Drawing Desk</div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                      'Hello YS PEB Design Studio, I would like to discuss a PEB design project.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-mono-spec font-bold text-sm block mt-0.5"
                  >
                    +91 8810616535 (Instant Chat)
                  </a>
                  <span className="text-[11px] text-slate-400">Send PDF drawings or tender inquiries directly</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-mono-spec text-[11px] uppercase">Official Email</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-cyan-300 hover:text-white font-mono-spec block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-mono-spec text-[11px] uppercase">Working Hours</div>
                  <div className="text-white mt-0.5 font-medium">{COMPANY_INFO.workingHours}</div>
                </div>
              </div>
            </div>

            {/* Regional Focus Badge */}
            <div className="p-4 rounded-xl bg-[#081324] border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono-spec text-cyan-400 uppercase font-bold">
                Primary Core Focus Regions:
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                Delhi NCR • Uttar Pradesh (Ghaziabad, Greater Noida, Kanpur, Lucknow) • Haryana (Faridabad, Gurugram, Sonipat) • Rajasthan (Bhiwadi, Jaipur) • Gujarat (Ahmedabad, Surat, Sanand) • Pan India Remote Consulting
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#091527] border border-cyan-500/40 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-mono-spec text-cyan-400 uppercase font-bold">Project Inquiry Desk</span>
              <h2 className="text-2xl font-heading font-bold text-white mt-1">
                Send Project Details for Design Quotation
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#08172c] border border-emerald-500/60 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-heading font-bold text-white">Thank You for Reaching Out!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  We have received your PEB design enquiry. A structural engineer will review your
                  specifications and contact you within 4-6 business hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono-spec flex items-center gap-2 mx-auto"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Copy to WhatsApp for Faster Response</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Rajesh Sharma"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1">
                      Company / Fabricator Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g., Apex Steel Structures Pvt Ltd"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98XXXXXXXX"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="PEB Structural Design + GA Drawings">PEB Structural Design + GA Drawings</option>
                    <option value="Full Detailing & Shop Drawings with BOM">Full Detailing & Shop Drawings with BOM</option>
                    <option value="Preliminary Tonnage Estimation for Tenders">Preliminary Tonnage Estimation for Tenders</option>
                    <option value="RCC Foundation & Anchor Bolt Design">RCC Foundation & Anchor Bolt Design</option>
                    <option value="Structural Stability Certificate Support">Structural Stability Certificate Support</option>
                    <option value="Value Engineering / Steel Weight Optimization">Value Engineering / Steel Weight Optimization</option>
                  </select>
                </div>

                {/* Project Location / State Dropdown */}
                <div>
                  <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1">
                    Project Location / State <span className="text-cyan-400">*</span>
                  </label>
                  <StateSelect
                    value={location}
                    onChange={(loc) => setLocation(loc)}
                    placeholder="Search or select State / UT"
                    required
                  />
                  {location === 'Other' && (
                    <input
                      type="text"
                      value={otherLocationDetail}
                      onChange={(e) => setOtherLocationDetail(e.target.value)}
                      placeholder="Specify your city / district / international location"
                      className="mt-2 w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  )}
                </div>

                {/* Separate Input Fields for Building Span, Length, and Eave Height */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold">
                      Building Dimensions (Meters)
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono-spec">Optional / Approx</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-300 font-medium mb-1">
                        Building Span (Width)
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        value={span}
                        onChange={(e) => setSpan(e.target.value)}
                        placeholder="e.g. 24 m"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 font-medium mb-1">
                        Building Length
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="e.g. 60 m"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 font-medium mb-1">
                        Eave Height
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        value={eaveHeight}
                        onChange={(e) => setEaveHeight(e.target.value)}
                        placeholder="e.g. 8.5 m"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1">
                    Additional Project Notes & Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter crane capacity (e.g. 10MT EOT), mezzanine floor requirements, preferred steel grade, or specific design codes..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-950 font-mono-spec"
                  >
                    Submit Project Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono-spec flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
