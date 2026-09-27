import React from 'react';
import { CONTACT } from '../data/contacts';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-t border-surface-container-high py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex items-center gap-2">
        <a
          className="flex-1 py-3 px-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold text-center flex items-center justify-center gap-1.5 shadow-md hover:bg-primary-container transition-colors"
          href={`tel:${CONTACT.primaryPhone}`}
        >
          <span className="material-symbols-outlined text-secondary-container text-lg">call</span>
          <span>Call {CONTACT.primaryPhone}</span>
        </a>
        <a
          className="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-on-tertiary font-label-md text-label-md font-bold text-center flex items-center justify-center gap-1.5 shadow-md hover:opacity-90 transition-opacity"
          href={CONTACT.mobileBottomWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </div>
  );
}
