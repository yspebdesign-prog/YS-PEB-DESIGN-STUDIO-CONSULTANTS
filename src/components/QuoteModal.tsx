import React, { useState } from 'react';
import {
  X,
  Send,
  UploadCloud,
  FileText,
  CheckCircle2,
  Phone,
  MessageSquare,
  Building2,
  Calculator,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';
import { BrandLogo } from './BrandLogo';
import { StateSelect } from './StateSelect';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'PEB Structural Design + GA + Detailing',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: 'Delhi / Delhi NCR',
    buildingType: 'Clear Span Warehouse',
    length: '',
    width: '',
    eaveHeight: '',
    estimatedTonnage: '',
    serviceRequired: initialService,
    hasCrane: false,
    craneCapacity: '',
    message: '',
    fileName: '',
  });

  const [otherLocationDetail, setOtherLocationDetail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, fileName: file.name }));
        setIsUploading(false);
      }, 500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const finalLocation =
      formData.location === 'Other' && otherLocationDetail.trim()
        ? `Other (${otherLocationDetail.trim()})`
        : formData.location;

    const text = `*New PEB Project Enquiry - YS PEB Design Studio*
*Client Name:* ${formData.name || 'Not specified'}
*Company:* ${formData.company || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Location:* ${finalLocation}
*Building Type:* ${formData.buildingType}
*Dimensions:* L: ${formData.length || '-'} m, W (Span): ${formData.width || '-'} m, H (Eave): ${formData.eaveHeight || '-'} m
*Service Required:* ${formData.serviceRequired}
*Crane Provision:* ${formData.hasCrane ? `Yes (${formData.craneCapacity || 'TBD'} MT)` : 'No'}
*Estimated Tonnage:* ${formData.estimatedTonnage ? `${formData.estimatedTonnage} MT` : 'To be estimated'}
*Attached Drawing/Notes:* ${formData.fileName ? `File: ${formData.fileName}` : 'None'}
*Message:* ${formData.message || 'Please provide design quotation'}`;

    const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#091426] border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 overflow-hidden font-body text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-950 via-[#0a1e3b] to-slate-900 px-6 py-5 border-b border-cyan-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <BrandLogo size="sm" showText={false} showTagline={false} />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono-spec text-[10px] uppercase font-bold tracking-wider">
                  YS PEB CONSULTANTS
                </span>
                <span className="text-xs text-slate-400 font-mono-spec hidden sm:inline">
                  GSTIN: {COMPANY_INFO.gstNumber}
                </span>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white mt-0.5">
                Request Project-Specific PEB Quote & Estimation
              </h2>
              <p className="text-xs text-slate-300">
                From Design to Fabrication Support • Direct Engineering Coordination
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-white">
                Quote Request Received Successfully!
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Yash Singh from YS PEB Design Studio & Consultants will review your building parameters and contact you promptly.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 max-w-md mx-auto text-left text-xs font-mono-spec space-y-1.5">
              <div className="text-cyan-400 font-bold border-b border-slate-800 pb-1">
                SUMMARY OF SUBMITTED DETAILS:
              </div>
              <div>Company: {formData.company || 'N/A'}</div>
              <div>Phone: {formData.phone}</div>
              <div>Location: {formData.location}</div>
              <div>Building: {formData.buildingType}</div>
              <div>Dimensions: {formData.length}m (L) x {formData.width}m (W) x {formData.eaveHeight}m (H)</div>
              <div>Service: {formData.serviceRequired}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Project Details on WhatsApp Now</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-5 text-xs max-h-[80vh] overflow-y-auto">
            {/* Quick Contact / WhatsApp Banner */}
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-300">
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Need fast feedback on an upcoming tender or fabrication job?</span>
              </div>
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>Send via WhatsApp</span>
              </button>
            </div>

            {/* Section 1: Contact Information */}
            <div>
              <div className="text-[11px] font-mono-spec font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                01. Client & Contact Information
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Company / Fabrication Firm</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Steel Fabricators"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">
                    Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXXXXXXX"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Building Geometry & Location */}
            <div className="pt-2 border-t border-slate-800">
              <div className="text-[11px] font-mono-spec font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                02. Building Geometry & Location
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">
                    Project Location / State <span className="text-rose-400">*</span>
                  </label>
                  <StateSelect
                    value={formData.location}
                    onChange={(loc) => setFormData((prev) => ({ ...prev, location: loc }))}
                    placeholder="Search or select state/UT"
                    required
                  />
                  {formData.location === 'Other' && (
                    <input
                      type="text"
                      value={otherLocationDetail}
                      onChange={(e) => setOtherLocationDetail(e.target.value)}
                      placeholder="Specify city, district or international location"
                      className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Building Type</label>
                  <select
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-500 text-xs"
                  >
                    <option value="Clear Span Warehouse">Clear Span Warehouse</option>
                    <option value="Multi-Span Industrial Building">Multi-Span Industrial Building</option>
                    <option value="Manufacturing Facility with EOT Crane">Manufacturing Facility with EOT Crane</option>
                    <option value="Industrial Shed / Workshop">Industrial Shed / Workshop</option>
                    <option value="Factory with Mezzanine Floor">Factory with Mezzanine Floor</option>
                    <option value="Logistics Distribution Center">Logistics Distribution Center</option>
                    <option value="Agricultural / Utility Shed">Agricultural / Utility Shed</option>
                  </select>
                </div>
              </div>

              {/* Dimension Matrix */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Length (meters)</label>
                  <input
                    type="number"
                    step="0.5"
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    placeholder="e.g. 45"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Width / Span (meters)</label>
                  <input
                    type="number"
                    step="0.5"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="e.g. 24"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Eave Height (meters)</label>
                  <input
                    type="number"
                    step="0.5"
                    name="eaveHeight"
                    value={formData.eaveHeight}
                    onChange={handleChange}
                    placeholder="e.g. 8.5"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
              </div>

              {/* Crane & Tonnage Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 items-center">
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-300 font-medium">
                    <input
                      type="checkbox"
                      name="hasCrane"
                      checked={formData.hasCrane}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-cyan-500"
                    />
                    <span>Includes Overhead EOT Crane?</span>
                  </label>
                  {formData.hasCrane && (
                    <input
                      type="text"
                      name="craneCapacity"
                      value={formData.craneCapacity}
                      onChange={handleChange}
                      placeholder="e.g. 10 MT"
                      className="w-24 px-2 py-1 rounded bg-slate-800 border border-cyan-500/60 text-xs text-white"
                    />
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="estimatedTonnage"
                    value={formData.estimatedTonnage}
                    onChange={handleChange}
                    placeholder="Approx. Steel Tonnage if known (optional MT)"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Required Engineering Scope */}
            <div className="pt-2 border-t border-slate-800">
              <div className="text-[11px] font-mono-spec font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                03. Required Engineering Scope
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Required Service</label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-cyan-500 text-xs"
                  >
                    <option value="Full Package: Structural Design + GA + Fabrication Drawings">
                      Full Package: Structural Design + GA + Fabrication Drawings
                    </option>
                    <option value="PEB Structural Design & Load Analysis Only">
                      PEB Structural Design & Load Analysis Only
                    </option>
                    <option value="General Arrangement (GA) Drawings & Anchor Bolt Plan">
                      General Arrangement (GA) Drawings & Anchor Bolt Plan
                    </option>
                    <option value="Fabrication Ready Shop Drawings & BOM">
                      Fabrication Ready Shop Drawings & BOM
                    </option>
                    <option value="Foundation & Pedestal Design">Foundation & Pedestal Design</option>
                    <option value="Quantity / Material Steel Estimation">Quantity / Material Steel Estimation</option>
                    <option value="Stability Certificate Support Documentation">
                      Stability Certificate Support Documentation
                    </option>
                    <option value="Fabricator Outsource Support (Monthly / Regular)">
                      Fabricator Outsource Support (Monthly / Regular)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Upload Drawing / PDF / Sketch</label>
                  <label className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-dashed border-slate-700 hover:border-cyan-500/60 cursor-pointer flex items-center justify-between transition-colors">
                    <span className="text-slate-400 truncate">
                      {isUploading
                        ? 'Attaching file...'
                        : formData.fileName || 'Attach PDF, DWG or image (optional)'}
                    </span>
                    <UploadCloud className="w-4 h-4 text-cyan-400 flex-shrink-0 ml-2" />
                    <input
                      type="file"
                      accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-slate-300 mb-1 font-medium">
                  Additional Project Specifications / Special Instructions
                </label>
                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify roof sheeting profile, brick wall height, soil capacity, or any special customer constraints..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs font-body resize-none"
                />
              </div>
            </div>

            {/* Submit & WhatsApp Buttons */}
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-slate-400">
                Direct Contact: <strong className="text-slate-200">{COMPANY_INFO.phone}</strong>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-600/70 hover:bg-emerald-900 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Details</span>
                </button>

                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-950 transition-all flex items-center justify-center gap-2"
                >
                  <span>REQUEST A QUOTE</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
