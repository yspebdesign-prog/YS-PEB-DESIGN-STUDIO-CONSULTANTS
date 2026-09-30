import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Plus,
  Filter,
  Tag,
  BookOpen,
  FileText,
  Building2,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Layers,
  ChevronRight,
  Award,
} from 'lucide-react';
import { InsightArticle, InsightCategory, InsightType, PageId } from '../../types';
import { INITIAL_INSIGHTS } from '../../data/insightsData';
import { CreateInsightModal } from '../CreateInsightModal';
import { InsightReaderModal } from '../InsightReaderModal';

interface InsightsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (service?: string) => void;
}

const STORAGE_KEY = 'ys_peb_custom_insights';

const CATEGORIES: InsightCategory[] = [
  'All',
  'PEB Optimization',
  'Structural Engineering',
  'IS Code Standards',
  'Case Studies',
  'Fabrication & Detailing',
  'Foundation Design',
];

const TYPES: (InsightType | 'All Types')[] = [
  'All Types',
  'Case Study',
  'Technical Discussion',
  'Code Guide',
  'Article',
];

export const InsightsView: React.FC<InsightsViewProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [articles, setArticles] = useState<InsightArticle[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge custom with initial, avoiding duplicates by id
          const ids = new Set(parsed.map((p) => p.id));
          const initialsNotIncluded = INITIAL_INSIGHTS.filter((init) => !ids.has(init.id));
          return [...parsed, ...initialsNotIncluded];
        }
      }
    } catch (err) {
      console.error('Error reading saved insights:', err);
    }
    return INITIAL_INSIGHTS;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<InsightCategory>('All');
  const [selectedType, setSelectedType] = useState<InsightType | 'All Types'>('All Types');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Save custom articles to localStorage whenever state changes
  const handleSaveArticle = (newArticle: InsightArticle) => {
    const updated = [newArticle, ...articles];
    setArticles(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to persist articles in localStorage', err);
    }
    setActiveArticle(newArticle);
    setIsReaderOpen(true);
  };

  // Collect all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [articles]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      // Category filter
      if (selectedCategory !== 'All' && art.category !== selectedCategory) {
        return false;
      }
      // Type filter
      if (selectedType !== 'All Types' && art.type !== selectedType) {
        return false;
      }
      // Tag filter
      if (selectedTag && !art.tags.includes(selectedTag)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = art.title.toLowerCase().includes(q);
        const matchSubtitle = art.subtitle.toLowerCase().includes(q);
        const matchExcerpt = art.excerpt.toLowerCase().includes(q);
        const matchTag = art.tags.some((t) => t.toLowerCase().includes(q));
        const matchBody = art.contentSections.some(
          (s) =>
            s.heading.toLowerCase().includes(q) ||
            s.body.some((p) => p.toLowerCase().includes(q))
        );
        if (!matchTitle && !matchSubtitle && !matchExcerpt && !matchTag && !matchBody) {
          return false;
        }
      }
      return true;
    });
  }, [articles, selectedCategory, selectedType, selectedTag, searchQuery]);

  const featuredArticle = useMemo(() => {
    return articles.find((a) => a.featured) || articles[0];
  }, [articles]);

  const handleOpenArticle = (art: InsightArticle) => {
    setActiveArticle(art);
    setIsReaderOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-body text-slate-200">
      {/* Header Banner */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#091629] to-[#07111e] border border-cyan-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono-spec text-xs font-bold uppercase tracking-wider">
              Technical Authority & Code Research
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
              Industry Insights & PEB Engineering
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body">
              In-depth technical articles, structural case studies, IS code guides, and shop-floor
              fabrication discussions for steel fabricators, structural consultants, and industrial builders.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-cyan-950/60 font-mono-spec transition-all transform hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Article / Case Study</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Article Spotlight (Only shown when no search or specific filter is active) */}
      {!searchQuery && selectedCategory === 'All' && selectedType === 'All Types' && !selectedTag && featuredArticle && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono-spec text-cyan-400 font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Featured Technical Case Study</span>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-[#08152a] via-[#0a1b36] to-[#071324] border border-cyan-500/50 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950 border border-cyan-500/60 text-cyan-300 font-mono-spec text-xs font-bold uppercase">
                  {featuredArticle.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-500/50 text-amber-300 font-mono-spec text-xs font-bold">
                  {featuredArticle.type}
                </span>
                <span className="text-xs text-slate-400 font-mono-spec ml-auto flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{featuredArticle.readTime}</span>
                </span>
              </div>

              <div>
                <h2
                  onClick={() => handleOpenArticle(featuredArticle)}
                  className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {featuredArticle.title}
                </h2>
                <p className="text-sm sm:text-base text-cyan-200/90 font-medium mt-2">
                  {featuredArticle.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 max-w-4xl font-body">
                  {featuredArticle.excerpt}
                </p>
              </div>

              {/* Case Study Metrics Chips */}
              {featuredArticle.projectMetrics && (
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {featuredArticle.projectMetrics.span && (
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs text-slate-200 font-mono-spec">
                      Span: <strong className="text-white">{featuredArticle.projectMetrics.span}</strong>
                    </span>
                  )}
                  {featuredArticle.projectMetrics.savings && (
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-600/50 text-xs text-emerald-300 font-mono-spec font-bold">
                      Savings: {featuredArticle.projectMetrics.savings}
                    </span>
                  )}
                  {featuredArticle.projectMetrics.location && (
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs text-slate-300 font-mono-spec">
                      Location: {featuredArticle.projectMetrics.location}
                    </span>
                  )}
                </div>
              )}

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono-spec">
                  <span className="text-slate-200 font-bold font-heading">{featuredArticle.author.name}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenArticle(featuredArticle)}
                  className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider font-mono-spec flex items-center gap-2 shadow-lg transition-all transform hover:translate-x-0.5"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search Toolbar */}
      <section className="space-y-4 p-5 sm:p-6 rounded-2xl bg-[#081324] border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, IS code, or building span (e.g. IS 800, wind, crane, foundation)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none placeholder:text-slate-500 font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Type Filter Select */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as InsightType | 'All Types')}
              className="px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none font-mono-spec"
            >
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? articles.length
                : articles.filter((a) => a.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-spec font-medium transition-all ${
                  isSelected
                    ? 'bg-cyan-600 text-white border border-cyan-400 shadow-lg shadow-cyan-950'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1.5 text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Tag Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
          <span className="text-[11px] font-mono-spec text-slate-400 flex items-center gap-1 mr-1">
            <Tag className="w-3 h-3 text-cyan-400" />
            <span>Popular Tags:</span>
          </span>
          {allTags.slice(0, 10).map((t) => {
            const isTagActive = selectedTag === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTag(isTagActive ? null : t)}
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono-spec transition-colors ${
                  isTagActive
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-slate-900/80 text-slate-400 hover:text-cyan-300 border border-slate-800'
                }`}
              >
                #{t}
              </button>
            );
          })}
          {selectedTag && (
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className="text-[10px] text-rose-400 hover:underline ml-2 font-mono-spec"
            >
              Reset Tag [x]
            </button>
          )}
        </div>
      </section>

      {/* Results Count & Filter Status */}
      <div className="flex items-center justify-between text-xs font-mono-spec text-slate-400 px-1">
        <div>
          Showing <strong className="text-cyan-400">{filteredArticles.length}</strong> technical articles
          {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
          {selectedType !== 'All Types' && ` (${selectedType})`}
          {selectedTag && ` tagged with #${selectedTag}`}
        </div>

        {(searchQuery || selectedCategory !== 'All' || selectedType !== 'All Types' || selectedTag) && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedType('All Types');
              setSelectedTag(null);
            }}
            className="text-cyan-400 hover:text-white underline text-xs"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl bg-[#091527] border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all group shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Meta Top Line */}
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono-spec">
                  <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 uppercase font-bold">
                    {article.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3
                    onClick={() => handleOpenArticle(article)}
                    className="text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 cursor-pointer"
                  >
                    {article.title}
                  </h3>
                  <div className="text-xs text-cyan-400/90 font-medium mt-1 line-clamp-1">
                    {article.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-body line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Case Study Metrics Chip if present */}
                {article.projectMetrics && (
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono-spec space-y-1">
                    {article.projectMetrics.span && (
                      <div className="text-slate-300">
                        Span: <span className="text-white font-bold">{article.projectMetrics.span}</span>
                      </div>
                    )}
                    {article.projectMetrics.savings && (
                      <div className="text-emerald-400 font-bold">
                        Savings: {article.projectMetrics.savings}
                      </div>
                    )}
                  </div>
                )}

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {article.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-mono-spec border border-slate-800"
                    >
                      #{t}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="text-[10px] text-slate-500 font-mono-spec">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-[11px] text-slate-400 font-mono-spec">
                  {article.date}
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenArticle(article)}
                  className="text-xs font-bold text-cyan-400 group-hover:text-white flex items-center gap-1 font-mono-spec transition-colors"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-[#091527] border border-slate-800 space-y-4">
          <BookOpen className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-lg font-heading font-bold text-white">No Technical Articles Found</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto font-body">
            No articles match your current search criteria. Try clearing search filters or create a new
            technical article directly.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedType('All Types');
                setSelectedTag(null);
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono-spec"
            >
              Reset Filters
            </button>
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold font-mono-spec"
            >
              + Create Article Now
            </button>
          </div>
        </div>
      )}

      {/* SEO & Knowledge Hub Footer Card */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/20 to-slate-950/40 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-mono-spec text-xs uppercase font-bold tracking-wider">
          <Award className="w-4 h-4" />
          <span>Why YS PEB Publishes Open Engineering Insights</span>
        </div>
        <h3 className="text-xl font-heading font-bold text-white">
          Bridging the Gap Between Code Formulations & Workshop Fabrication
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body max-w-4xl">
          At YS PEB Design Studio & Consultants, we believe structural safety and steel economy begin
          with transparent engineering principles. By sharing practical design procedures, detailing
          tolerances, wind speed derivations as per IS 875, and tonnage optimization methods under IS 800:2007,
          we empower steel fabricators and contractors across Delhi NCR, UP, Haryana, Rajasthan, Gujarat,
          and Pan India to bid accurately, build safely, and eliminate expensive site rework.
        </p>
      </section>

      {/* Bottom Navigation & CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono-spec"
        >
          <span>Next: Contact Us</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onOpenQuoteModal('Engineering Consultation')}
          className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg"
        >
          Discuss Your Project
        </button>
      </div>

      {/* Modals */}
      <CreateInsightModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSaveArticle={handleSaveArticle}
      />

      <InsightReaderModal
        article={activeArticle}
        isOpen={isReaderOpen}
        onClose={() => {
          setIsReaderOpen(false);
          setActiveArticle(null);
        }}
        onOpenQuoteModal={onOpenQuoteModal}
        onSelectTag={(tag) => setSelectedTag(tag)}
      />
    </div>
  );
};
