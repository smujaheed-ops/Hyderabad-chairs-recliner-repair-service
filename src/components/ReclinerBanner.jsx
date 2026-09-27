import React from 'react';
import { CONTACT } from '../data/contacts';

export default function ReclinerBanner() {
  return (
    <div className="mt-space-md rounded-2xl bg-primary text-surface p-space-md sm:p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md relative overflow-hidden">
      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-on-secondary text-xs font-bold uppercase tracking-wider mb-2">
          <span className="material-symbols-outlined text-sm">chair</span> Recliner Specialization
        </div>
        <h3 className="font-headline-md text-headline-md text-surface font-bold">
          Motorized &amp; Manual Recliner Sofas Repaired At Home
        </h3>
        <p className="font-body-sm text-body-sm text-on-primary-container mt-1">
          Don't drag a heavy 3-seater or single recliner downstairs. Our technician repairs stuck footrests, faulty remote switches, burnt adaptors, and broken springs in your living room.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
        <a
          className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-[#25D366] text-on-tertiary font-label-md text-label-md font-bold shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
          href={CONTACT.reclinerWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          Share Recliner Video
        </a>
        <a
          className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md font-bold shadow-md hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center gap-2"
          href={`tel:${CONTACT.primaryPhone}`}
        >
          <span className="material-symbols-outlined text-xl">call</span>
          Call Recliner Expert
        </a>
      </div>
    </div>
  );
}
