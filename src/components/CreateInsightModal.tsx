import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  CheckCircle2,
  BookOpen,
  FileText,
  Building2,
  Sparkles,
  Layers,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { InsightArticle, InsightCategory, InsightSection, InsightType } from '../types';

interface CreateInsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveArticle: (article: InsightArticle) => void;
}

const CATEGORIES: Exclude<InsightCategory, 'All'>[] = [
  'PEB Optimization',
  'Structural Engineering',
  'IS Code Standards',
  'Case Studies',
  'Fabrication & Detailing',
  'Foundation Design',
];

const TYPES: InsightType[] = [
  'Case Study',
  'Technical Discussion',
  'Code Guide',
  'Article',
];

const SUGGESTED_TAGS = [
  'IS 800:2007',
  'IS 875',
  'Clear Span',
  'Steel Weight',
  'Tapered Rafter',
  'Wind Load',
  'Crane Design',
  'Base Plate',
  'Z-Purlin',
  'Shop Drawings',
  'Fabrication Errors',
  'Delhi NCR',
  'Value Engineering',
];

export const CreateInsightModal: React.FC<CreateInsightModalProps> = ({
  isOpen,
  onClose,
  onSaveArticle,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState<Exclude<InsightCategory, 'All'>>('PEB Optimization');
  const [type, setType] = useState<InsightType>('Technical Discussion');
  const [readTime, setReadTime] = useState('6 min read');
  const [authorName, setAuthorName] = useState('Yash Singh');
  const [authorRole, setAuthorRole] = useState('Lead PEB Structural Consultant, YS PEB Design Studio');

  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(['IS 800:2007', 'PEB Optimization']);

  const [codeRefInput, setCodeRefInput] = useState('');
  const [codeReferences, setCodeReferences] = useState<string[]>([
    'IS 800:2007 — General Construction in Steel',
  ]);

  // Case Study Metrics (optional)
  const [isCaseStudy, setIsCaseStudy] = useState(false);
  const [span, setSpan] = useState('');
  const [tonnage, setTonnage] = useState('');
  const [savings, setSavings] = useState('');
  const [location, setLocation] = useState('');
  const [crane, setCrane] = useState('');

  // Sections
  const [sections, setSections] = useState<InsightSection[]>([
    {
      heading: '1. Introduction & Structural Background',
      body: [
        'Describe the structural requirement, geometry specifications, client challenge, or design standard under discussion.',
      ],
      bullets: [],
    },
    {
      heading: '2. Analysis, Formulation & Engineering Calculations',
      body: [
        'Explain the mathematical or code-based derivation, load combinations, or structural member stress evaluations.',
      ],
      bullets: [],
    },
  ]);

  // Key Takeaways
  const [takeaways, setTakeaways] = useState<string[]>([
    'Key structural finding or optimization guideline.',
    'Code compliance check or detailing tolerance rule.',
  ]);

  if (!isOpen) return null;

  const handleAddTag = (tagToAdd?: string) => {
    const val = (tagToAdd || tagInput).trim();
    if (val && !tags.includes(val)) {
      setTags([...tags, val]);
      if (!tagToAdd) setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleAddCodeRef = () => {
    const val = codeRefInput.trim();
    if (val && !codeReferences.includes(val)) {
      setCodeReferences([...codeReferences, val]);
      setCodeRefInput('');
    }
  };

  const handleRemoveCodeRef = (refToRemove: string) => {
    setCodeReferences(codeReferences.filter((r) => r !== refToRemove));
  };

  const handleAddSection = () => {
    setSections([
      ...sections,
      {
        heading: `${sections.length + 1}. New Engineering Section`,
        body: ['Add detailed technical explanation here.'],
        bullets: [],
      },
    ]);
  };

  const handleUpdateSectionHeading = (index: number, val: string) => {
    const updated = [...sections];
    updated[index].heading = val;
    setSections(updated);
  };

  const handleUpdateSectionBody = (index: number, val: string) => {
    const updated = [...sections];
    updated[index].body = [val];
    setSections(updated);
  };

  const handleRemoveSection = (index: number) => {
    if (sections.length <= 1) return;
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleAddTakeaway = () => {
    setTakeaways([...takeaways, 'New technical takeaway']);
  };

  const handleUpdateTakeaway = (index: number, val: string) => {
    const updated = [...takeaways];
    updated[index] = val;
    setTakeaways(updated);
  };

  const handleRemoveTakeaway = (index: number) => {
    setTakeaways(takeaways.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim()) {
      alert('Please provide a title and summary for the article.');
      return;
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const newArticle: InsightArticle = {
      id: `custom-${Date.now()}`,
      slug,
      title: title.trim(),
      subtitle: subtitle.trim() || 'Technical Structural Engineering Insights',
      excerpt: excerpt.trim(),
      category,
      type,
      readTime,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      author: {
        name: authorName.trim() || 'Yash Singh',
        role: authorRole.trim() || 'Lead PEB Structural Consultant',
      },
      tags: tags.length > 0 ? tags : ['PEB Design'],
      codeReferences: codeReferences.length > 0 ? codeReferences : undefined,
      projectMetrics:
        isCaseStudy && (span || tonnage || savings || location || crane)
          ? {
              span: span || undefined,
              tonnage: tonnage || undefined,
              savings: savings || undefined,
              location: location || undefined,
              crane: crane || undefined,
            }
          : undefined,
      contentSections: sections.map((sec) => ({
        heading: sec.heading,
        body: sec.body,
        bullets: sec.bullets && sec.bullets.length > 0 ? sec.bullets : undefined,
        callout: sec.callout,
        diagramType: sec.diagramType,
      })),
      keyTakeaways: takeaways.filter((t) => t.trim().length > 0),
    };

    onSaveArticle(newArticle);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 rounded-2xl bg-[#091527] border border-cyan-500/40 shadow-2xl overflow-hidden font-body text-slate-200">
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0b1b36] to-[#081324] border-b border-cyan-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-white">
                Create Technical Insight / Article
              </h2>
              <p className="text-xs text-slate-400 font-mono-spec">
                Publish technical case studies, IS code reviews & PEB engineering discussions
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Article Title & Subtitle */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono-spec uppercase text-cyan-400 font-bold mb-1.5">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Seismic Drift vs. Wind Sway in 30m Clear-Span Industrial Sheds"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1.5">
                Subtitle / Technical Hook
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="e.g., A comparative evaluation of column base fixity and deflection envelopes under IS 1893:2016"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Classification & Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1.5">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Exclude<InsightCategory, 'All'>)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1.5">
                Article Type *
              </label>
              <select
                value={type}
                onChange={(e) => {
                  const val = e.target.value as InsightType;
                  setType(val);
                  if (val === 'Case Study') setIsCaseStudy(true);
                }}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold mb-1.5">
                Estimated Read Time
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="6 min read"
                className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Author Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <label className="block text-[11px] font-mono-spec uppercase text-slate-400 font-bold mb-1">
                Author Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono-spec uppercase text-slate-400 font-bold mb-1">
                Author Role / Title
              </label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Summary / Excerpt */}
          <div>
            <label className="block text-xs font-mono-spec uppercase text-cyan-400 font-bold mb-1.5">
              Summary / Excerpt (Shows in Card Preview & Meta) *
            </label>
            <textarea
              required
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief 2-3 sentence overview highlighting the engineering challenge, method and key outcome..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none resize-none leading-relaxed"
            />
          </div>

          {/* Tags & Suggestions */}
          <div className="space-y-2">
            <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold">
              Tags & Standards
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-spec flex items-center gap-1.5"
                >
                  <span>#{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-slate-400 hover:text-white"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
                placeholder="Add custom tag (e.g., #IS1893, #CraneBeams) and hit enter"
                className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleAddTag()}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold font-mono-spec"
              >
                Add Tag
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] text-slate-400 font-mono-spec">Suggestions:</span>
              {SUGGESTED_TAGS.filter((t) => !tags.includes(t))
                .slice(0, 6)
                .map((sug) => (
                  <button
                    key={sug}
                    type="button"
                    onClick={() => handleAddTag(sug)}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700 font-mono-spec"
                  >
                    +{sug}
                  </button>
                ))}
            </div>
          </div>

          {/* IS Code References */}
          <div className="space-y-2">
            <label className="block text-xs font-mono-spec uppercase text-slate-400 font-bold">
              Applicable Code Standards (IS / MBMA / AWS)
            </label>
            <div className="space-y-1.5">
              {codeReferences.map((ref) => (
                <div
                  key={ref}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs"
                >
                  <span className="font-mono-spec text-cyan-300">{ref}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCodeRef(ref)}
                    className="text-slate-400 hover:text-rose-400"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={codeRefInput}
                onChange={(e) => setCodeRefInput(e.target.value)}
                placeholder="e.g. IS 875 (Part 3): 2015 — Wind Loads on Buildings"
                className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleAddCodeRef}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold font-mono-spec"
              >
                Add Code
              </button>
            </div>
          </div>

          {/* Optional Case Study Metrics Section */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="case-study-check"
                  checked={isCaseStudy}
                  onChange={(e) => setIsCaseStudy(e.target.checked)}
                  className="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-700 focus:ring-cyan-500"
                />
                <label
                  htmlFor="case-study-check"
                  className="text-xs font-mono-spec uppercase font-bold text-white cursor-pointer"
                >
                  Include Case Study Project Metrics (Optional)
                </label>
              </div>
              <span className="text-[10px] text-slate-400 font-mono-spec">
                Shows comparative project stats
              </span>
            </div>

            {isCaseStudy && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="block text-[10px] font-mono-spec uppercase text-slate-400 mb-1">
                    Span / Dimensions
                  </label>
                  <input
                    type="text"
                    value={span}
                    onChange={(e) => setSpan(e.target.value)}
                    placeholder="36m Clear Span"
                    className="w-full px-2.5 py-1.5 rounded bg-slate-950 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono-spec uppercase text-slate-400 mb-1">
                    Steel Tonnage
                  </label>
                  <input
                    type="text"
                    value={tonnage}
                    onChange={(e) => setTonnage(e.target.value)}
                    placeholder="184 MT (Final)"
                    className="w-full px-2.5 py-1.5 rounded bg-slate-950 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono-spec uppercase text-slate-400 mb-1">
                    Savings / Improvement
                  </label>
                  <input
                    type="text"
                    value={savings}
                    onChange={(e) => setSavings(e.target.value)}
                    placeholder="14.8% Steel Saved"
                    className="w-full px-2.5 py-1.5 rounded bg-slate-950 border border-slate-700 text-xs text-emerald-400 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono-spec uppercase text-slate-400 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ghaziabad, UP"
                    className="w-full px-2.5 py-1.5 rounded bg-slate-950 border border-slate-700 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono-spec uppercase text-slate-400 mb-1">
                    Crane / Special Features
                  </label>
                  <input
                    type="text"
                    value={crane}
                    onChange={(e) => setCrane(e.target.value)}
                    placeholder="10 MT Crane Provision"
                    className="w-full px-2.5 py-1.5 rounded bg-slate-950 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Structured Article Sections */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-mono-spec uppercase text-cyan-400 font-bold">
                  Article Body Sections
                </h3>
                <p className="text-[11px] text-slate-400">
                  Structure your technical discussion with clear headings and paragraphs.
                </p>
              </div>
              <button
                type="button"
                onClick={handleAddSection}
                className="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/40 hover:bg-cyan-900 text-cyan-300 text-xs font-mono-spec font-bold flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Section</span>
              </button>
            </div>

            <div className="space-y-3">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      value={section.heading}
                      onChange={(e) => handleUpdateSectionHeading(idx, e.target.value)}
                      placeholder={`Section ${idx + 1} Heading`}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-bold focus:border-cyan-400 focus:outline-none"
                    />
                    {sections.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveSection(idx)}
                        className="text-slate-400 hover:text-rose-400 p-1"
                        title="Delete Section"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <textarea
                    rows={4}
                    value={section.body.join('\n\n')}
                    onChange={(e) => handleUpdateSectionBody(idx, e.target.value)}
                    placeholder="Enter detailed technical discussion, calculations, and engineering rationale for this section..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 text-xs focus:border-cyan-400 focus:outline-none resize-none leading-relaxed"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-mono-spec uppercase text-cyan-400 font-bold">
                  Key Technical Takeaways (Executive Summary)
                </h3>
                <p className="text-[11px] text-slate-400">
                  Concise bullet points summarizing the practical rule or design rule of thumb.
                </p>
              </div>
              <button
                type="button"
                onClick={handleAddTakeaway}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-mono-spec"
              >
                + Add Point
              </button>
            </div>

            <div className="space-y-2">
              {takeaways.map((takeaway, tIdx) => (
                <div key={tIdx} className="flex items-center gap-2">
                  <span className="text-cyan-400 font-mono-spec text-xs">{tIdx + 1}.</span>
                  <input
                    type="text"
                    value={takeaway}
                    onChange={(e) => handleUpdateTakeaway(tIdx, e.target.value)}
                    placeholder="Key structural rule of thumb or finding..."
                    className="flex-1 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                  {takeaways.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTakeaway(tIdx)}
                      className="text-slate-400 hover:text-rose-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] text-slate-400 font-mono-spec">
              * The published article will be saved and immediately viewable in the Industry Insights section.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold font-mono-spec"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-950 font-mono-spec"
              >
                Publish Article
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
