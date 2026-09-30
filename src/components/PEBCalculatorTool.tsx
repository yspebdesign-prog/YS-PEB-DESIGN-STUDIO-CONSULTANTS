import React, { useState } from 'react';
import { Calculator, ArrowRight, Layers, HelpCircle, CheckCircle, Info } from 'lucide-react';

interface CalculatorProps {
  onApplyToQuote: (dimensions: { length: string; width: string; height: string }) => void;
}

export const PEBCalculatorTool: React.FC<CalculatorProps> = ({ onApplyToQuote }) => {
  const [length, setLength] = useState<number>(45);
  const [width, setWidth] = useState<number>(24);
  const [eaveHeight, setEaveHeight] = useState<number>(8.5);
  const [baySpacing, setBaySpacing] = useState<number>(7.5);
  const [hasCrane, setHasCrane] = useState<boolean>(false);
  const [craneTonnage, setCraneTonnage] = useState<number>(10);

  // Calculations
  const floorAreaSqm = length * width;
  const floorAreaSqft = floorAreaSqm * 10.7639;
  const numberOfBays = Math.round(length / baySpacing);
  const actualBaySpacing = (length / numberOfBays).toFixed(2);
  const roofSlope = 0.1; // 1:10
  const ridgeHeight = eaveHeight + (width / 2) * roofSlope;
  const roofRafterLength = Math.sqrt(Math.pow(width / 2, 2) + Math.pow((width / 2) * roofSlope, 2)) * 2;
  const roofAreaSqm = length * roofRafterLength;
  const buildingVolume = floorAreaSqm * ((eaveHeight + ridgeHeight) / 2);

  // Indicative tonnage range based on industry heuristics (approx 22-38 kg/sqm without crane, 32-55 kg/sqm with crane)
  const baseRateMin = hasCrane ? 34 : 24;
  const baseRateMax = hasCrane ? 52 : 36;
  const approxSteelMinMT = (floorAreaSqm * baseRateMin) / 1000;
  const approxSteelMaxMT = (floorAreaSqm * baseRateMax) / 1000;

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#0b1b30] to-[#071322] border border-cyan-500/30 p-5 sm:p-7 shadow-2xl font-body text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono-spec text-[10px] uppercase font-bold tracking-wider">
              Engineering Utility
            </span>
            <span className="text-xs text-slate-400 font-mono-spec">For Fabricators & Estimators</span>
          </div>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-1 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <span>Interactive PEB Geometry & Tonnage Estimator</span>
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Test building dimensions, bay configurations, and generate initial planning metrics instantly.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            onApplyToQuote({
              length: length.toString(),
              width: width.toString(),
              height: eaveHeight.toString(),
            })
          }
          className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-950 transition-all flex items-center gap-1.5"
        >
          <span>Use in Quote Form</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Input Sliders & Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {/* Length */}
        <div className="space-y-2 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-300 font-medium">Building Length</span>
            <span className="font-mono-spec text-cyan-400 font-bold">{length} meters</span>
          </div>
          <input
            type="range"
            min="15"
            max="150"
            step="1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="text-[10px] text-slate-500 flex justify-between">
            <span>15m (~50ft)</span>
            <span>150m (~500ft)</span>
          </div>
        </div>

        {/* Width (Span) */}
        <div className="space-y-2 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-300 font-medium">Clear Span (Width)</span>
            <span className="font-mono-spec text-cyan-400 font-bold">{width} meters</span>
          </div>
          <input
            type="range"
            min="12"
            max="60"
            step="1"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="text-[10px] text-slate-500 flex justify-between">
            <span>12m (~40ft)</span>
            <span>60m (~200ft)</span>
          </div>
        </div>

        {/* Eave Height */}
        <div className="space-y-2 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-300 font-medium">Clear Eave Height</span>
            <span className="font-mono-spec text-cyan-400 font-bold">{eaveHeight} meters</span>
          </div>
          <input
            type="range"
            min="5"
            max="16"
            step="0.5"
            value={eaveHeight}
            onChange={(e) => setEaveHeight(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="text-[10px] text-slate-500 flex justify-between">
            <span>5m (~16ft)</span>
            <span>16m (~52ft)</span>
          </div>
        </div>

        {/* Bay Spacing & Crane */}
        <div className="space-y-2 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-300 font-medium">Bay Spacing Target</span>
            <span className="font-mono-spec text-cyan-400 font-bold">{baySpacing} meters</span>
          </div>
          <input
            type="range"
            min="6"
            max="9"
            step="0.5"
            value={baySpacing}
            onChange={(e) => setBaySpacing(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex items-center justify-between pt-1 text-[11px]">
            <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
              <input
                type="checkbox"
                checked={hasCrane}
                onChange={(e) => setHasCrane(e.target.checked)}
                className="w-3.5 h-3.5 rounded text-cyan-500 bg-slate-800 border-slate-700"
              />
              <span>EOT Crane?</span>
            </label>
            {hasCrane && (
              <select
                value={craneTonnage}
                onChange={(e) => setCraneTonnage(Number(e.target.value))}
                className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] border border-cyan-500/50 text-white font-mono-spec"
              >
                <option value={5}>5 MT</option>
                <option value={10}>10 MT</option>
                <option value={15}>15 MT</option>
                <option value={20}>20 MT</option>
                <option value={30}>30 MT</option>
              </select>
            )}
          </div>
        </div>
      </div>

      {/* Calculated Engineering Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] font-mono-spec uppercase text-slate-400">Footprint Area</div>
          <div className="text-base sm:text-lg font-heading font-bold text-white mt-0.5">
            {floorAreaSqm.toLocaleString()} <span className="text-xs font-normal text-slate-400">m²</span>
          </div>
          <div className="text-[10px] text-cyan-400 font-mono-spec">
            ~{Math.round(floorAreaSqft).toLocaleString()} sq.ft
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] font-mono-spec uppercase text-slate-400">Apex Height</div>
          <div className="text-base sm:text-lg font-heading font-bold text-white mt-0.5">
            {ridgeHeight.toFixed(2)} <span className="text-xs font-normal text-slate-400">m</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono-spec">Slope 1:10 (5.71°)</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] font-mono-spec uppercase text-slate-400">Frame Layout</div>
          <div className="text-base sm:text-lg font-heading font-bold text-cyan-300 mt-0.5">
            {numberOfBays} <span className="text-xs font-normal text-slate-400">bays</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono-spec">@{actualBaySpacing}m c/c</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] font-mono-spec uppercase text-slate-400">Roof Surface</div>
          <div className="text-base sm:text-lg font-heading font-bold text-white mt-0.5">
            {Math.round(roofAreaSqm).toLocaleString()} <span className="text-xs font-normal text-slate-400">m²</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono-spec">Sheeting area</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] font-mono-spec uppercase text-slate-400">Building Volume</div>
          <div className="text-base sm:text-lg font-heading font-bold text-white mt-0.5">
            {Math.round(buildingVolume).toLocaleString()} <span className="text-xs font-normal text-slate-400">m³</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono-spec">Clear usable space</div>
        </div>

        <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/40">
          <div className="text-[10px] font-mono-spec uppercase text-cyan-300">Indicative Tonnage</div>
          <div className="text-base sm:text-lg font-heading font-bold text-amber-300 mt-0.5">
            {Math.round(approxSteelMinMT)} – {Math.round(approxSteelMaxMT)} <span className="text-xs text-slate-300">MT</span>
          </div>
          <div className="text-[9px] text-slate-300 font-mono-spec">Pre-design estimate</div>
        </div>
      </div>

      {/* Note & Action */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-1.5 text-[11px]">
          <Info className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
          <span>
            Actual structural steel tonnage depends on local basic wind speed (IS:875 Pt 3), seismic zone, crane wheel loads, and framing scheme.
          </span>
        </div>

        <button
          type="button"
          onClick={() =>
            onApplyToQuote({
              length: length.toString(),
              width: width.toString(),
              height: eaveHeight.toString(),
            })
          }
          className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1 text-xs underline underline-offset-4"
        >
          <span>Request Accurate Structural Estimation</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
