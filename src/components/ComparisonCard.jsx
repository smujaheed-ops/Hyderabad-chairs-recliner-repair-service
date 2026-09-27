import React from 'react';

export default function ComparisonCard() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg shadow-xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-surface-container">
        <span className="font-label-md text-label-md font-bold text-primary">
          Repair vs Replacement Matrix
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold">
          Saves Up to 80% Cost
        </span>
      </div>

      <div className="space-y-3 font-body-sm text-body-sm">
        {/* New Chair */}
        <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
          <div>
            <span className="block font-bold text-primary">Brand New Ergonomic Chair</span>
            <span className="text-xs text-on-surface-variant">High quality mesh with Class-4 lift</span>
          </div>
          <span className="font-headline-sm text-headline-sm font-bold text-error">
            ₹14,000+
          </span>
        </div>

        {/* New Recliner */}
        <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
          <div>
            <span className="block font-bold text-primary">Brand New Recliner Sofa</span>
            <span className="text-xs text-on-surface-variant">Single seat motorized or manual</span>
          </div>
          <span className="font-headline-sm text-headline-sm font-bold text-error">
            ₹25,000+
          </span>
        </div>

        {/* Doorstep Repair Highlight */}
        <div className="p-4 rounded-xl bg-secondary-fixed text-on-secondary-fixed shadow-inner flex items-center justify-between">
          <div>
            <span className="block font-headline-sm text-[18px] font-extrabold text-on-secondary-fixed">
              Our Doorstep Repair &amp; Spares
            </span>
            <span className="text-xs opacity-90">Class 4 gas lift / mechanism / wheels / handles</span>
          </div>
          <div className="text-right">
            <span className="block font-headline-md text-headline-md font-extrabold text-secondary">
              ₹399 - ₹1,499
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Save Over 85%
            </span>
          </div>
        </div>
      </div>

      {/* Customer Proof Quote */}
      <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-container text-surface flex items-center justify-center font-bold text-sm shrink-0">
          RK
        </div>
        <div>
          <p className="font-body-sm text-xs italic text-on-surface">
            "Technician reached our Madhapur IT office within 40 minutes and replaced 8 sinking hydraulics effortlessly."
          </p>
          <span className="block text-[11px] font-label-sm font-bold text-secondary mt-0.5">
            Raghav K., IT Admin • Cyber Towers
          </span>
        </div>
      </div>
    </div>
  );
}
