import React from 'react';
import { CONTACT } from '../data/contacts';

export default function LiveSpeedBar() {
  return (
    <div className="w-full bg-secondary-fixed text-on-secondary-fixed py-space-sm px-margin-mobile lg:px-margin">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-md text-label-md">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary font-bold">electric_meter</span>
          <span className="font-bold">
            Average Arrival Window:{' '}
            <span className="underline decoration-secondary">45 to 60 Minutes</span> anywhere in Cyberabad and Old City
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-label-sm text-xs bg-surface-container-lowest/80 px-2.5 py-1 rounded text-primary font-bold">
            7 Days: 8 AM - 9 PM
          </span>
          <a
            className="font-bold text-secondary hover:text-on-secondary-fixed flex items-center gap-1 transition-colors"
            href={`tel:${CONTACT.primaryPhone}`}
          >
            <span className="material-symbols-outlined text-base">support_agent</span>
            Direct Dispatch: {CONTACT.primaryPhone}
          </a>
        </div>
      </div>
    </div>
  );
}
