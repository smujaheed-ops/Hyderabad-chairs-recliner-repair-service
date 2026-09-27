import React from 'react';
import { coverageAreas } from '../data/coverageAreas';
import { CONTACT } from '../data/contacts';

export default function CoverageSection() {
  return (
    <section className="w-full py-space-xl bg-primary text-on-primary">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/10 text-secondary-container text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-sm">explore</span> Citywide Express Footprint
            </div>
            <h2 className="font-headline-lg text-headline-lg text-surface font-extrabold tracking-tight">
              Doorstep Service Coverage Across Hyderabad &amp; Secunderabad
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-primary-container max-w-md">
            With mobile technicians stationed across the twin cities, your location is always within immediate reach.
          </p>
        </div>

        {/* Locality Badge Cloud */}
        <div className="flex flex-wrap gap-2.5 mb-space-lg">
          {coverageAreas.map((area, idx) => (
            <span
              key={idx}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-default ${
                area.isMainHub
                  ? 'bg-secondary text-on-secondary font-label-md text-label-md font-bold shadow-md'
                  : 'bg-surface-container-lowest/10 hover:bg-secondary text-surface font-label-md text-label-md'
              }`}
            >
              <span
                className={`material-symbols-outlined text-xs ${
                  area.isMainHub ? 'text-surface' : 'text-secondary-container'
                }`}
              >
                {area.isMainHub ? 'storefront' : 'location_on'}
              </span>
              <span>{area.name}</span>
            </span>
          ))}
        </div>

        {/* Workshop Location Address Box */}
        <div className="bg-surface-container-lowest/10 rounded-2xl p-space-md border border-surface-container-lowest/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0 mt-1">
              <span className="material-symbols-outlined text-xl">home_pin</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-surface font-bold text-[18px]">
                {CONTACT.workshopName}
              </h3>
              <p className="font-body-sm text-on-primary-container text-xs mt-0.5">
                {CONTACT.address}
              </p>
              <span className="inline-block mt-1 text-[11px] font-label-sm text-secondary-container font-semibold">
                Walk-ins welcome &amp; Mobile On-site Van Support Available Citywide
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-bold hover:bg-secondary-fixed transition-colors flex items-center gap-1.5 whitespace-nowrap"
              href={`tel:${CONTACT.primaryPhone}`}
            >
              <span className="material-symbols-outlined text-base">call</span> {CONTACT.primaryPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
