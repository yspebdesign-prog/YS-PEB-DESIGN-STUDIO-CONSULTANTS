import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, MapPin, X } from 'lucide-react';
import { INDIAN_STATES_AND_UTS, IndianRegion } from '../data/indianStates';

interface StateSelectProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  name?: string;
  required?: boolean;
  className?: string;
  buttonClassName?: string;
  placeholder?: string;
}

export const StateSelect: React.FC<StateSelectProps> = ({
  value,
  onChange,
  id = 'project-location-state',
  name = 'location',
  required = false,
  className = '',
  buttonClassName = '',
  placeholder = 'Select Project State / UT',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Filter items based on query
  // "Other" should be retained at the end
  const filteredRegions = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return INDIAN_STATES_AND_UTS;
    }
    return INDIAN_STATES_AND_UTS.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.label.toLowerCase().includes(query) ||
        (item.type === 'ut' && query.includes('ut')) ||
        (item.type === 'state' && query.includes('state'))
    );
  }, [searchQuery]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setHighlightedIndex(0);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Scroll active item into view
  useEffect(() => {
    if (isOpen && listRef.current) {
      const activeEl = listRef.current.children[highlightedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (item: IndianRegion) => {
    onChange(item.name);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < filteredRegions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredRegions[highlightedIndex]) {
        handleSelect(filteredRegions[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  const selectedRegion = INDIAN_STATES_AND_UTS.find((r) => r.name === value);

  return (
    <div className={`relative ${className}`} ref={containerRef} onKeyDown={handleKeyDown}>
      {/* Hidden input for form validation / submission compatibility */}
      <input
        type="hidden"
        id={id}
        name={name}
        value={value}
        required={required}
      />

      {/* Main trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full ${
          buttonClassName || 'px-3.5 py-2 rounded-xl'
        } bg-slate-900 border text-left text-xs transition-colors flex items-center justify-between gap-2 focus:outline-none ${
          isOpen
            ? 'border-cyan-500 ring-1 ring-cyan-500/50'
            : 'border-slate-700 hover:border-slate-600 text-slate-100'
        }`}
      >
        <span className="flex items-center gap-2 truncate">
          <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
          {selectedRegion ? (
            <span className="text-slate-100 font-medium">
              {selectedRegion.name}
              {selectedRegion.type === 'ut' && (
                <span className="ml-1.5 px-1.5 py-0.2 rounded bg-cyan-950 border border-cyan-800/80 text-[10px] text-cyan-300 font-mono-spec">
                  UT
                </span>
              )}
            </span>
          ) : value ? (
            <span className="text-slate-100 font-medium">{value}</span>
          ) : (
            <span className="text-slate-400">{placeholder}</span>
          )}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-cyan-400' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-1 rounded-xl bg-[#0c182c] border border-cyan-500/50 shadow-2xl shadow-black/80 backdrop-blur-md overflow-hidden text-xs animate-in fade-in zoom-in-95 duration-150">
          {/* Search / Filter Input */}
          <div className="p-2 border-b border-slate-800 bg-[#081222] sticky top-0 z-10 flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 ml-1" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setHighlightedIndex(0);
              }}
              placeholder="Type to search state or UT..."
              className="w-full bg-transparent border-0 text-slate-100 placeholder-slate-400 text-xs focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 hover:text-white text-slate-400"
                title="Clear filter"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* States & UTs List */}
          <ul
            ref={listRef}
            role="listbox"
            className="max-h-56 overflow-y-auto py-1 divide-y divide-slate-800/40 text-slate-200"
          >
            {filteredRegions.length > 0 ? (
              filteredRegions.map((region, index) => {
                const isSelected = value === region.name;
                const isHighlighted = index === highlightedIndex;

                return (
                  <li
                    key={region.id}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(region)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={`px-3 py-2 cursor-pointer flex items-center justify-between gap-2 transition-colors ${
                      isSelected
                        ? 'bg-cyan-950/80 text-cyan-300 font-semibold'
                        : isHighlighted
                        ? 'bg-slate-800/80 text-white'
                        : 'hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span className="truncate">{region.name}</span>
                      {region.type === 'ut' && (
                        <span className="px-1.5 py-0.5 rounded bg-cyan-950/90 border border-cyan-700/60 text-[9px] text-cyan-300 font-mono-spec font-medium flex-shrink-0">
                          Union Territory
                        </span>
                      )}
                      {region.type === 'other' && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[9px] text-amber-300 font-mono-spec flex-shrink-0">
                          Other / Outside
                        </span>
                      )}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 ml-2" />
                    )}
                  </li>
                );
              })
            ) : (
              <li className="px-3 py-4 text-center text-slate-400 text-xs">
                No matching state found.
                <button
                  type="button"
                  onClick={() => {
                    const otherItem = INDIAN_STATES_AND_UTS.find((r) => r.type === 'other');
                    if (otherItem) handleSelect(otherItem);
                  }}
                  className="block mt-1 text-cyan-400 hover:underline mx-auto font-medium"
                >
                  Select &quot;Other&quot; instead
                </button>
              </li>
            )}
          </ul>

          {/* Quick info footer */}
          <div className="px-3 py-1.5 bg-[#070f1c] border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span>28 States • 8 Union Territories</span>
            <span>Alphabetical</span>
          </div>
        </div>
      )}
    </div>
  );
};
