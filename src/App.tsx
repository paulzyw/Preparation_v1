/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Check, 
  RotateCcw, 
  Clipboard, 
  Play, 
  Pause, 
  BookOpen, 
  Award, 
  Sparkles, 
  Clock, 
  Target, 
  TrendingUp, 
  Gauge, 
  ChevronRight, 
  Info,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CHEATSHEET_DATA, CATEGORIES, CheatsheetItem } from './data';

const GROUP_COLORS: Record<number, { bg: string; hover: string; selected: string; textSelected: string; borderSelected: string; accentBg: string }> = {
  0: { 
    bg: 'bg-slate-100/70', 
    hover: 'hover:bg-slate-200/90', 
    selected: 'bg-slate-200/100',
    textSelected: 'text-slate-900 font-bold',
    borderSelected: 'border-slate-800',
    accentBg: 'bg-slate-200/60'
  },
  1: { 
    bg: 'bg-sky-100/70', 
    hover: 'hover:bg-sky-100/90', 
    selected: 'bg-sky-100',
    textSelected: 'text-sky-950 font-bold',
    borderSelected: 'border-sky-600',
    accentBg: 'bg-sky-100/50'
  },
  2: { 
    bg: 'bg-emerald-100/70', 
    hover: 'hover:bg-emerald-100/90', 
    selected: 'bg-emerald-100',
    textSelected: 'text-emerald-950 font-bold',
    borderSelected: 'border-emerald-600',
    accentBg: 'bg-emerald-100/50'
  },
  3: { 
    bg: 'bg-indigo-100/70', 
    hover: 'hover:bg-indigo-100/90', 
    selected: 'bg-indigo-100',
    textSelected: 'text-indigo-950 font-bold',
    borderSelected: 'border-indigo-600',
    accentBg: 'bg-indigo-100/50'
  },
  4: { 
    bg: 'bg-amber-100/70', 
    hover: 'hover:bg-amber-100/90', 
    selected: 'bg-amber-100',
    textSelected: 'text-amber-950 font-bold',
    borderSelected: 'border-amber-600',
    accentBg: 'bg-amber-100/50'
  },
  5: { 
    bg: 'bg-rose-100/70', 
    hover: 'hover:bg-rose-100/90', 
    selected: 'bg-rose-100',
    textSelected: 'text-rose-950 font-bold',
    borderSelected: 'border-rose-600',
    accentBg: 'bg-rose-100/50'
  },
  6: { 
    bg: 'bg-teal-100/70', 
    hover: 'hover:bg-teal-100/90', 
    selected: 'bg-teal-100',
    textSelected: 'text-teal-950 font-bold',
    borderSelected: 'border-teal-600',
    accentBg: 'bg-teal-100/50'
  }
};

interface Interval {
  start: number;
  end: number;
  type: 'search' | 'hovered' | 'tip';
  text: string;
}

export default function App() {
  // --- Persistent & UI States ---
  const [selectedId, setSelectedId] = useState<string>("intro");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredTipText, setHoveredTipText] = useState<string | null>(null);
  
  // Track preparation progress (completed items master list)
  const [practicedMap, setPracticedMap] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('sandvik_practiced_map') || localStorage.getItem('aveva_practiced_map');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Checklist for individual tips in the current active item
  const [checkedTipsMap, setCheckedTipsMap] = useState<Record<string, boolean>>({});

  // FontSize options
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Active Category filter
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState<number | 'all'>('all');

  // Rehearsal timer states
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Copied alert state
  const [showCopied, setShowCopied] = useState<boolean>(false);

  // Sidebar hidden toggle on tablet screens to optimize view
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  // Resizable sidebar states
  const [sidebarWidth, setSidebarWidth] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('sandvik_sidebar_width');
      return saved ? parseInt(saved, 10) : 240;
    } catch {
      return 240;
    }
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Active view model for responsive devices (mobile viewport switching)
  const [activeMobileTab, setActiveMobileTab] = useState<'index' | 'script' | 'tips'>('script');

  // --- Effects ---
  // Save sidebar width preference
  useEffect(() => {
    localStorage.setItem('sandvik_sidebar_width', sidebarWidth.toString());
  }, [sidebarWidth]);

  // Handle global mouse move and mouse up for dragging sidebar
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      // Impose a professional min and max boundary limit for resizability
      const newWidth = Math.max(180, Math.min(480, e.clientX));
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Save progress changes
  useEffect(() => {
    localStorage.setItem('sandvik_practiced_map', JSON.stringify(practicedMap));
  }, [practicedMap]);

  // Reset checked tips map and timer when switching active item
  useEffect(() => {
    setCheckedTipsMap({});
    setIsTimerRunning(false);
    setElapsedTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [selectedId]);

  // Rehearsal timer tick
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  // --- Helpers & Computed Stats ---
  const activeItem = useMemo(() => {
    return CHEATSHEET_DATA.find(item => item.id === selectedId) || CHEATSHEET_DATA[0];
  }, [selectedId]);

  // Filter items in sidebar based on query and group filter
  const filteredItems = useMemo(() => {
    return CHEATSHEET_DATA.filter(item => {
      // Category filter check
      const matchesCategory = selectedCategoryGroup === 'all' || item.group === selectedCategoryGroup;
      
      // Search query check (fuzzy matching title, script or tips)
      if (!searchQuery.trim()) return matchesCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesTitle = item.title.toLowerCase().includes(query);
      const matchesScript = item.script.toLowerCase().includes(query);
      const matchesTips = item.tips.some(tip => tip.toLowerCase().includes(query));
      
      return matchesCategory && (matchesTitle || matchesScript || matchesTips);
    });
  }, [searchQuery, selectedCategoryGroup]);

  // Calculate overall preparation metrics
  const totalItemsCount = CHEATSHEET_DATA.length;
  const practicedCount = useMemo(() => {
    return Object.values(practicedMap).filter(Boolean).length;
  }, [practicedMap]);
  const preparationPercentage = Math.round((practicedCount / totalItemsCount) * 100);

  // Calculate reading parameters
  const characterCount = activeItem.script.replace(/\s+/g, '').length;
  const estimatedReadMinutes = Math.max(1, Math.ceil(characterCount / 220)); // Approx 220 CPM for professional Chinese delivery
  
  // Real-time rehearsal statistics
  const speakingPaceCPM = useMemo(() => {
    if (elapsedTime <= 2) return 0;
    const minutes = elapsedTime / 60;
    return Math.round(characterCount / minutes);
  }, [elapsedTime, characterCount]);

  const togglePracticed = (id: string) => {
    setPracticedMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleTipChecked = (tipText: string) => {
    setCheckedTipsMap(prev => ({
      ...prev,
      [tipText]: !prev[tipText]
    }));
  };

  const copyScriptToClipboard = () => {
    navigator.clipboard.writeText(activeItem.script);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- Substring Highlight Algorithm ---
  // Renders script text segmented by search hits, hovered tips, and default tips presence
  const renderScriptWithHighlights = (
    text: string, 
    tips: string[], 
    hovered: string | null, 
    query: string
  ) => {
    const intervals: Interval[] = [];

    // 1. Identify all occurrences of each tip string in the script to showcase key phrases
    tips.forEach((tip) => {
      const sanitizedTip = tip.trim();
      if (!sanitizedTip) return;
      
      // Clean up common connection characters to improve substring matching reliability
      let cleanedTip = sanitizedTip
        .replace(/<<<>>>/g, '')
        .trim();
      
      if (!cleanedTip) return;

      let index = 0;
      while (true) {
        const idx = text.indexOf(cleanedTip, index);
        if (idx === -1) break;
        intervals.push({
          start: idx,
          end: idx + cleanedTip.length,
          type: hovered === tip ? 'hovered' : 'tip',
          text: cleanedTip
        });
        index = idx + cleanedTip.length;
      }
    });

    // 2. Identify active search query intervals
    if (query && query.trim().length > 0) {
      const q = query.trim();
      let index = 0;
      while (true) {
        const idx = text.toLowerCase().indexOf(q.toLowerCase(), index);
        if (idx === -1) break;
        intervals.push({
          start: idx,
          end: idx + q.length,
          type: 'search',
          text: q
        });
        index = idx + q.length;
      }
    }

    // Sort intervals by starting index ascending
    intervals.sort((a, b) => {
      if (a.start !== b.start) return a.start - b.start;
      return b.end - a.end; // wider matches first
    });

    // Resolve overlaps beautifully, prioritizing: search match > hovered item > standard tip highlight
    const nonOverlapping: Interval[] = [];
    let curEnd = 0;

    for (const item of intervals) {
      if (item.start >= curEnd) {
        nonOverlapping.push(item);
        curEnd = item.end;
      } else {
        // Enforce priorities to keep text styling clean
        const prev = nonOverlapping[nonOverlapping.length - 1];
        if (prev) {
          const currentIsPremium = item.type === 'search' || item.type === 'hovered';
          const prevIsLesser = prev.type === 'tip';
          if (currentIsPremium && prevIsLesser) {
            // Overwrite previous low-priority overlap
            nonOverlapping.pop();
            nonOverlapping.push(item);
            curEnd = item.end;
          }
        }
      }
    }

    // Slice and render
    const segments: React.ReactNode[] = [];
    let pointer = 0;

    nonOverlapping.forEach((interval, idx) => {
      // Normal prefix text
      if (interval.start > pointer) {
        segments.push(<span key={`text-${pointer}`}>{text.substring(pointer, interval.start)}</span>);
      }

      const segmentText = text.substring(interval.start, interval.end);

      // Custom styles for highlights (Professional Polish Theme matching)
      if (interval.type === 'search') {
        segments.push(
          <mark 
            key={`mark-search-${idx}`} 
            className="bg-amber-100 text-amber-950 font-medium px-0.5 rounded shadow-xs border-b border-amber-300"
          >
            {segmentText}
          </mark>
        );
      } else if (interval.type === 'hovered') {
        segments.push(
          <motion.span 
            key={`mark-hover-${idx}`}
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900 text-white px-1.5 py-0.5 rounded font-medium border-b border-slate-950 shadow-sm inline-block"
          >
            {segmentText}
          </motion.span>
        );
      } else {
        segments.push(
          <span 
            key={`mark-tip-${idx}`}
            className="bg-slate-100 text-slate-900 px-1 py-px border-b border-slate-400 cursor-help transition-all duration-200 hover:bg-slate-200 font-medium"
            title="核心输出词汇 (Target Delivery Word)"
          >
            {segmentText}
          </span>
        );
      }

      pointer = interval.end;
    });

    if (pointer < text.length) {
      segments.push(<span key={`text-end`}>{text.substring(pointer)}</span>);
    }

    return segments.length > 0 ? segments : <span>{text}</span>;
  };

  return (
    <div 
      id="root-container" 
      className="w-full h-screen flex flex-col bg-[#f8fafc] text-[#1e293b] font-sans overflow-hidden select-none"
    >
      {/* Mobile Navigation Header Tabs Bar (Visible only on non-lg screens) */}
      <div id="mobile-navigation-bar" className="lg:hidden bg-white border-b border-[#e2e8f0] p-4 flex items-center justify-between shrink-0 select-none">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#0f172a]" />
          <span className="text-[11px] font-bold tracking-widest text-[#0f172a] font-mono">SANDVIK PREP</span>
        </div>
        
        {/* iOS-style slide pill switcher */}
        <div className="flex bg-[#f1f5f9] p-0.5 rounded-lg border border-[#e2e8f0]">
          <button
            id="mobile-tab-index"
            onClick={() => setActiveMobileTab('index')}
            className={`px-3 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${activeMobileTab === 'index' ? 'bg-[#0f172a] text-white shadow-xs font-bold' : 'text-[#64748b] hover:text-[#0f172a]'}`}
          >
            Outline ({totalItemsCount})
          </button>
          <button
            id="mobile-tab-script"
            onClick={() => setActiveMobileTab('script')}
            className={`px-3 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${activeMobileTab === 'script' ? 'bg-[#0f172a] text-white shadow-xs font-bold' : 'text-[#64748b] hover:text-[#0f172a]'}`}
          >
            Script
          </button>
          <button
            id="mobile-tab-tips"
            onClick={() => setActiveMobileTab('tips')}
            className={`px-3 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${activeMobileTab === 'tips' ? 'bg-[#0f172a] text-white shadow-xs font-bold' : 'text-[#64748b] hover:text-[#0f172a]'}`}
          >
            Tips ({activeItem.tips.length})
          </button>
        </div>
      </div>

      {/* Upper Main Layout Split */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* 1. LEFT SIDE - NAVIGATION SIDEBAR (Professional Minimalist layout) */}
        <aside 
          id="navigation-sidebar"
          className={`h-full bg-white border-r border-[#e2e8f0] flex flex-col shrink-0 relative z-30
            ${activeMobileTab === 'index' ? 'w-full flex' : 'hidden lg:flex'}
            ${!sidebarOpen ? 'lg:overflow-hidden' : ''}`}
          style={{
            width: activeMobileTab === 'index'
              ? '100%'
              : sidebarOpen
                ? `${sidebarWidth}px`
                : '64px'
          }}
        >
          {/* Sidebar Header Brand (Minimal Professional Style) */}
          <div id="sidebar-header" className="p-6 border-b border-[#e2e8f0]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">PREPARATION</div>
                <p className="text-[11px] text-[#64748b] mt-1">VP Midmarket Cheatsheet</p>
              </div>
              
              {/* Collapse toggle (Desktop view) */}
              <button 
                id="collapse-sidebar-button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1.5 hover:bg-[#f1f5f9] rounded-md text-[#64748b] transition-colors hidden lg:block cursor-pointer"
                title={sidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
              >
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Prep Readiness Progress bar (Premium Charcoal Styling) */}
            {sidebarOpen && (
              <div id="prep-readiness-panel" className="mt-4 pt-4 border-t border-[#f1f5f9]">
                <div className="flex justify-between items-center text-[11px] mb-1.5">
                  <span className="text-[#64748b] font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-slate-800" />
                    Mastery Rate
                  </span>
                  <span className="font-bold text-slate-900 font-mono">
                    {practicedCount} / {totalItemsCount} ({preparationPercentage}%)
                  </span>
                </div>
                <div className="w-full bg-[#f1f5f9] h-1 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#0f172a] h-full rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${preparationPercentage}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Search and Filter controls */}
          {sidebarOpen && (
            <div id="sidebar-controls" className="p-5 border-b border-[#e2e8f0] bg-white space-y-3">
              {/* Search Input */}
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#94a3b8]">
                  <Search className="w-3.5 h-3.5" />
                </span>
                <input 
                  id="cheatsheet-search-input"
                  type="text"
                  placeholder="Search scripts or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-[#f8fafc] border border-[#e2e8f0] text-xs rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-400 focus:ring-1 focus:ring-slate-300 transition-all font-sans"
                />
                {searchQuery && (
                  <button 
                    id="clear-search-button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-2.5 flex items-center text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category selection selector bar */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none select-none">
                <button
                  id="filter-category-all"
                  onClick={() => setSelectedCategoryGroup('all')}
                  className={`px-2.5 py-1 text-[10px] font-medium rounded-md whitespace-nowrap transition-all duration-200 border cursor-pointer
                    ${selectedCategoryGroup === 'all' 
                      ? 'bg-[#0f172a] text-white border-[#0f172a] font-bold shadow-xs' 
                      : 'bg-white text-slate-600 hover:bg-slate-50 border-[#e2e8f0]'}`}
                >
                  All
                </button>
                {Object.entries(CATEGORIES).map(([key, label]) => {
                  const groupIdx = parseInt(key, 10);
                  const isSelected = selectedCategoryGroup === groupIdx;
                  const shortLabel = label.split(' ')[0] || label;
                  return (
                    <button
                      id={`filter-category-${groupIdx}`}
                      key={groupIdx}
                      onClick={() => setSelectedCategoryGroup(groupIdx)}
                      className={`px-2.5 py-1 text-[10px] font-medium rounded-md whitespace-nowrap transition-all duration-200 border cursor-pointer
                        ${isSelected 
                          ? 'bg-[#0f172a] text-white border-[#0f172a] font-bold shadow-xs' 
                          : 'bg-white text-slate-600 hover:bg-slate-50 border-[#e2e8f0]'}`}
                    >
                      {shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sidebar Items List (Elegant Minimal layout matches design HTML exactly) */}
          <div id="sidebar-items-list" className="flex-1 overflow-y-auto p-3 bg-white divide-y divide-slate-100">
            {filteredItems.length === 0 ? (
              <div id="sidebar-empty-state" className="flex flex-col items-center justify-center p-8 text-center bg-[#f8fafc] rounded-xl border border-dashed border-slate-200 mx-2 mt-2">
                <p className="text-xs text-slate-400">No matching preparation items</p>
                {searchQuery && (
                  <button 
                    id="reset-search-link"
                    onClick={() => { setSearchQuery(""); setSelectedCategoryGroup('all'); }} 
                    className="mt-2 text-xs text-slate-800 underline font-semibold cursor-pointer"
                  >
                    Reset All
                  </button>
                )}
              </div>
            ) : (
              filteredItems.map((item) => {
                const isSelected = item.id === selectedId;
                const isPracticed = !!practicedMap[item.id];
                const colors = GROUP_COLORS[item.group] || GROUP_COLORS[0];
                return (
                  <button
                    id={`cheatsheet-item-button-${item.id}`}
                    key={item.id}
                    onClick={() => {
                      setSelectedId(item.id);
                      setActiveMobileTab('script');
                    }}
                    className={`w-full text-left py-2.5 px-4 text-xs font-sans transition-all duration-300 mb-1.5 flex items-center justify-between border border-transparent cursor-pointer group rounded-lg shadow-2xs
                      ${isSelected 
                        ? `${colors.selected} ${colors.textSelected} border-r-3 ${colors.borderSelected} ring-1 ring-black/5` 
                        : `${colors.bg} ${colors.hover} text-slate-700`}`}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      {/* Check dot instead of heavy box */}
                      <span 
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePracticed(item.id);
                        }}
                        className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300
                          ${isPracticed 
                            ? 'bg-emerald-500 scale-110' 
                            : 'bg-slate-300 hover:bg-slate-500'}`}
                        title={isPracticed ? "Mastered" : "Needs Practice"}
                      />
                      <span className="truncate tracking-wide text-[12.5px] font-medium">{item.title}</span>
                    </div>

                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm shrink-0 font-bold transition-colors ${isSelected ? 'bg-white/90 text-slate-800 shadow-3xs' : `${colors.accentBg} text-slate-700`}`}>
                      ({item.group})
                    </span>
                  </button>
                );
              })
            )}
          </div>

          {/* Sidebar Resize Drag Handle */}
          {sidebarOpen && (
            <div
              id="sidebar-drag-handle"
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              className={`absolute top-0 right-0 h-full w-1 cursor-col-resize hover:bg-slate-300 active:bg-[#0f172a] transition-all z-50 flex items-center justify-center group hidden lg:flex
                ${isDragging ? 'bg-[#0f172a] w-1.5' : 'bg-transparent'}`}
              title="Drag to resize sidebar"
            >
              <div className="w-px h-8 bg-slate-200 group-hover:bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity rounded" />
            </div>
          )}
        </aside>

        {/* Trigger to expand navigation if collapsed (Desktop) */}
        {!sidebarOpen && (
          <button 
            id="expand-sidebar-indicator-bar"
            onClick={() => setSidebarOpen(true)}
            className="hidden lg:flex flex-col items-center justify-start py-8 w-14 bg-white border-r border-[#e2e8f0] hover:bg-[#f1f5f9] transition-colors shrink-0 cursor-pointer text-slate-800 gap-6"
            title="Expand Sidebar"
          >
            <Layers className="w-5 h-5 text-slate-600" />
            <div className="text-[10px] tracking-widest uppercase font-bold text-slate-400 rotate-90 my-16 whitespace-nowrap">
              PREPARATION INDEX
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        )}

        {/* INTERACTIVE COMPANION VIEW WRAPPER */}
        <div 
          id="dashboard-split-layout"
          className={`flex-1 flex flex-col lg:flex-row h-full overflow-hidden ${activeMobileTab === 'index' ? 'hidden lg:flex' : 'flex'}`}
        >
          
          {/* 2. MIDDLE AREA - SCRIPT DISPLAY (Professional Executive visual style) */}
          <main 
            id="script-display-panel"
            className={`flex-1 flex flex-col h-full border-r border-[#e2e8f0] bg-white relative overflow-hidden
              ${activeMobileTab === 'script' ? 'flex w-full' : 'hidden lg:flex'}`}
          >
            {/* Script Plain Header Toolbar */}
            <div id="script-header-toolbar" className="p-4 sm:p-6 px-6 sm:px-10 border-b border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] bg-[#eff6ff] text-[#2563eb] px-2.5 py-0.5 rounded-full font-medium">
                    {activeItem.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[11px] text-[#64748b] font-mono flex items-center gap-1 bg-[#f8fafc] px-2 py-0.5 border border-[#e2e8f0] rounded-md">
                    <Clock className="w-3" />
                    Est. Read: {estimatedReadMinutes} min ({characterCount} words)
                  </span>
                </div>
                
                <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-[#0f172a] flex items-center gap-2.5">
                  {activeItem.title}
                  <button
                    id={`mark-practiced-inline-${activeItem.id}`}
                    onClick={() => togglePracticed(activeItem.id)}
                    className={`text-[10px] px-2 py-0.5 rounded-md border transition-all cursor-pointer flex items-center gap-1 font-normal
                      ${practicedMap[activeItem.id] 
                        ? 'bg-[#f1f5f9] border-[#e2e8f0] text-emerald-700 font-semibold' 
                        : 'bg-white border-slate-200 text-[#64748b] hover:border-slate-300'}`}
                  >
                    <Check className={`w-3 ${practicedMap[activeItem.id] ? 'text-emerald-600' : 'text-slate-400'}`} />
                    {practicedMap[activeItem.id] ? "Mastered" : "Needs Practice"}
                  </button>
                </h1>
              </div>

              {/* Top Typography Toolbar Control layout */}
              <div className="flex items-center gap-3">
                {/* FontSize selectors */}
                <div className="flex items-center bg-[#f8fafc] border border-[#e2e8f0] p-0.5 rounded-lg text-slate-700 shadow-xs">
                  <button 
                    id="font-size-decrease-button"
                    onClick={() => setFontSize('normal')}
                    className={`p-1 px-3 text-xs font-semibold rounded-md transition-colors cursor-pointer ${fontSize === 'normal' ? 'bg-[#0f172a] text-white shadow-xs' : 'hover:bg-slate-200/55'}`}
                    title="Standard Font Size"
                  >
                    A
                  </button>
                  <button 
                    id="font-size-medium-button"
                    onClick={() => setFontSize('large')}
                    className={`p-1 px-3 text-xs font-semibold rounded-md transition-colors cursor-pointer ${fontSize === 'large' ? 'bg-[#0f172a] text-white shadow-xs' : 'hover:bg-slate-200/55'}`}
                    title="Medium Font Size"
                  >
                    A+
                  </button>
                  <button 
                    id="font-size-large-button"
                    onClick={() => setFontSize('xlarge')}
                    className={`p-1 px-3 text-xs font-semibold rounded-md transition-colors cursor-pointer ${fontSize === 'xlarge' ? 'bg-[#0f172a] text-white shadow-xs' : 'hover:bg-slate-200/55'}`}
                    title="Large Font Size"
                  >
                    A++
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  id="copy-script-to-clipboard-button"
                  onClick={copyScriptToClipboard}
                  className="p-2 border border-[#e2e8f0] hover:bg-[#f1f5f9] rounded-lg text-slate-800 transition-colors cursor-pointer relative shadow-xs shrink-0"
                  title="Copy Script"
                >
                  <Clipboard className="w-4 h-4" />
                  {showCopied && (
                    <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 bg-[#0f172a] text-white text-[10px] py-1 px-2.5 rounded-md whitespace-nowrap shadow-lg">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Scrollable Script Body Area (Includes drop caps as requested by Professional Polish) */}
            <div id="script-scroll-body" className="flex-1 overflow-y-auto p-5 sm:p-8 lg:p-12 bg-white">
              
              {/* Highlight Legend Indicator block */}
              <div id="legend-pills-bar" className="mb-6 sm:mb-8 bg-[#f8fafc] border border-[#e2e8f0] p-3 px-4 rounded-xl flex flex-wrap gap-x-5 gap-y-2 items-center text-xs text-[#64748b] max-w-2xl mx-auto shadow-2xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5 shrink-0">
                  <Info className="w-3.5 h-3.5 text-[#0f172a]" />
                  Heatmap Legend
                </span>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-slate-900 inline-block" />
                  <span>Hover highlights</span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[#f0f9ff] border border-sky-300 inline-block" style={{ backgroundColor: '#f0f9ff' }} />
                  <span>Key Delivery Words</span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-amber-100 border border-amber-300 inline-block" />
                  <span>Search Highlight</span>
                </div>
              </div>

              {/* Master Responsive Script Frame with executive serif-style letter block */}
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`max-w-2.6xl mx-auto space-y-4 text-[#1e293b] font-sans tracking-wide leading-snug
                    ${fontSize === 'normal' ? 'text-[15px]' : ''}
                    ${fontSize === 'large' ? 'text-base lg:text-lg' : ''}
                    ${fontSize === 'xlarge' ? 'text-lg lg:text-xl' : ''}`}
                >
                  {/* Script paragraph rendering with professional drop caps on first child paragraph */}
                  <div id="script-main-content" className="space-y-4">
                    {activeItem.script.split('\n\n').map((paragraph, index) => (
                      <p 
                        key={index}
                        className={`script-paragraph text-[#334155] leading-snug text-left font-sans
                          ${index === 0 ? 'first-of-type:first-letter:text-4xl first-of-type:first-letter:font-bold first-of-type:first-letter:float-left first-of-type:first-letter:mr-2.5 first-of-type:first-letter:text-[#0f172a] first-of-type:first-letter:leading-none' : ''}`}
                      >
                        {renderScriptWithHighlights(
                          paragraph, 
                          activeItem.tips, 
                          hoveredTipText, 
                          searchQuery
                        )}
                      </p>
                    ))}
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>


          </main>

          {/* 3. RIGHT SIDE - TIP CONTENT DISPLAY (Professional Polish clean border & sidebar lists) */}
          <section 
            id="tips-display-panel"
            className={`w-full lg:w-80 bg-[#f8fafc] flex flex-col h-full relative overflow-hidden
              ${activeMobileTab === 'tips' ? 'flex w-full' : 'hidden lg:flex'}`}
          >
            {/* Header with bold side block */}
            <div id="tips-header" className="p-6 border-b border-[#e2e8f0] bg-white shrink-0 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase">Deliverables Checklist</span>
                <h2 className="text-sm font-bold text-[#0f172a] flex items-center gap-2 mt-0.5">
                  <span className="w-1 h-3.5 bg-[#0f172a] rounded-xs" />
                  Key Points / Delivery Keywords ({activeItem.tips.length})
                </h2>
              </div>
              
              {/* Quick reset checklist */}
              <button
                id="reset-tip-checklist-button"
                onClick={() => setCheckedTipsMap({})}
                className="text-[11px] text-[#0f172a] hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                Reset Checklist
              </button>
            </div>

            {/* Interactive instructions bar */}
            <div id="interactive-takeaway-banner" className="p-4 bg-white border-b border-[#e2e8f0] text-xs text-slate-700 leading-relaxed">
              <p>
                <strong>Interactive Synergy:</strong> Hover over a card below to <strong>highlight the corresponding script segment</strong>. Click to check off items you have mastered.
              </p>
            </div>

            {/* Solid minimalistic custom list items as in professional design HTML */}
            <div id="tips-items-list" className="flex-1 overflow-y-auto p-5 space-y-3">
              <AnimatePresence mode="popLayout">
                {activeItem.tips.map((tip, index) => {
                  const isChecked = !!checkedTipsMap[tip];
                  const cleanTipText = tip.replace(/<<<>>>/g, ' ➔ ');
                  
                  return (
                    <motion.div
                      id={`tip-card-${index}`}
                      key={`${activeItem.id}-tip-${index}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.15, delay: index * 0.02 }}
                      // Handle hovered action line map
                      onMouseEnter={() => setHoveredTipText(tip)}
                      onMouseLeave={() => setHoveredTipText(null)}
                      onClick={() => toggleTipChecked(tip)}
                      className={`p-3.5 rounded-lg border text-xs leading-relaxed select-none relative cursor-pointer transition-all duration-150 active:scale-[0.99]
                        ${isChecked 
                          ? 'bg-slate-100/65 border-slate-200 text-[#64748b] line-through decoration-slate-300 shadow-none' 
                          : 'bg-white border-[#e2e8f0] hover:border-[#0f172a] hover:shadow-2xs text-[#1e293b]'}`}
                    >
                      <div className="flex gap-3 items-start">
                        {/* Bullet symbol */}
                        <div 
                           id={`tip-check-bubble-${index}`}
                          className={`shrink-0 w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 transition-colors
                            ${isChecked 
                              ? 'bg-[#0f172a] border-[#0f172a] text-white' 
                              : 'border-slate-300 bg-slate-50'}`}
                        >
                          {isChecked && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                        </div>

                        {/* Bullet Text */}
                        <span className="flex-1 font-medium tracking-wide">
                          {cleanTipText}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </section>

        </div>
      </div>

      {/* 4. BASELINE LOGISTICS STATUS BAR (Professional Polish terminal accent strip) */}
      <footer 
        id="executive-status-bar"
        className="h-8 bg-[#0f172a] text-white flex items-center justify-between px-6 text-[10px] font-mono tracking-widest uppercase border-t border-[#1e293b] shrink-0 select-none relative z-40"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          <span>SYSTEM: INTERVIEW REHEARSAL ACTIVE</span>
        </div>
        <div className="flex items-center gap-6 text-[#94a3b8]">
          <span className="hidden sm:inline">CURRENT STATUS: PRACTICING "{activeItem.title}"</span>
          <span>SANDVIK • VP MIDMARKET CHINA • 2026</span>
        </div>
      </footer>

    </div>
  );
}
