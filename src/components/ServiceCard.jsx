import React from 'react';
import { CONTACT } from '../data/contacts';

export default function ServiceCard({ service }) {
  const { title, badge, badgeType, icon, iconTheme, description, features, price, ctaText } = service;

  return (
    <div className="group bg-surface-container-lowest rounded-2xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
              iconTheme === 'secondary'
                ? 'bg-secondary text-on-secondary'
                : 'bg-primary-container text-surface'
            }`}
          >
            <span
              className={`material-symbols-outlined text-2xl ${
                iconTheme === 'secondary' ? '' : 'text-secondary-container'
              }`}
            >
              {icon}
            </span>
          </div>

          <span
            className={`px-2.5 py-1 rounded-full font-label-sm text-xs font-bold ${
              badgeType === 'neutral'
                ? 'bg-surface-container-high text-on-surface'
                : 'bg-secondary-fixed text-on-secondary-fixed'
            }`}
          >
            {badge}
          </span>
        </div>

        <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-1.5 group-hover:text-secondary transition-colors">
          {title}
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm">
          {description}
        </p>

        <ul className="space-y-1.5 text-xs font-label-md text-on-surface mb-space-md">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary-fixed-variant text-base">check</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-space-sm border-t border-surface-container flex items-center justify-between">
        <span className="font-label-sm text-xs text-on-surface-variant font-bold">{price}</span>
        <a
          className="font-label-md text-label-md text-primary font-bold hover:text-secondary flex items-center gap-1 transition-colors"
          href={`tel:${CONTACT.primaryPhone}`}
        >
          {ctaText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
