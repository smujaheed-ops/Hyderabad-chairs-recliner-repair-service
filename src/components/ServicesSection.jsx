import React from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-space-xl bg-background scroll-mt-20">
      {/* Target anchor for spare-parts-and-repairs as well */}
      <div id="spare-parts-and-repairs" className="scroll-mt-24"></div>
      
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Engineered For Longevity
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight mt-1">
              Complete Chair &amp; Recliner Restoration Services
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Don't discard high-end furniture over failing mechanical parts. Our certified technicians carry factory-grade replacement components directly to your premises.
          </p>
        </div>

        {/* Bento-style 6 Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
