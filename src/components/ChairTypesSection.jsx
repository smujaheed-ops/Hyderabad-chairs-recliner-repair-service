import React from 'react';
import { chairTypes } from '../data/chairTypes';
import ChairTypeCard from './ChairTypeCard';
import ReclinerBanner from './ReclinerBanner';

export default function ChairTypesSection() {
  return (
    <section id="types-of-chairs" className="w-full py-space-xl bg-surface-container-low scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Title with Overline */}
        <div className="text-center max-w-2xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            All Makes, Models &amp; Ergonomics
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight mt-1">
            Types Of Chairs &amp; Recliners We Repair Daily
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            From high-traffic IT office workstations in Hitec City to luxury leather recliners in Jubilee Hills, we service every model with tailor-fit spares.
          </p>
        </div>

        {/* Chair Visual Cards Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          {chairTypes.map((chair) => (
            <ChairTypeCard key={chair.id} chair={chair} />
          ))}
        </div>

        {/* Recliner Highlight Banner */}
        <ReclinerBanner />
      </div>
    </section>
  );
}
