import React from 'react';
import { CONTACT } from '../data/contacts';
import BookingForm from './BookingForm';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary pb-space-xl pt-space-lg lg:pt-space-xl">
      {/* Subtle architectural mesh glow */}
      <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] bg-primary-container/80 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="relative w-full max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
        {/* Top Eyebrow / Trust Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface">
              Hyderabad #1 On-Demand Furniture Repair
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-on-primary-container font-label-md text-label-md">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary-container text-base">verified</span>
              Afzal Gunj Central Workshop
            </span>
            <span className="opacity-40">•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary-container text-base">local_shipping</span>
              12 Rapid Mobile Vans Active
            </span>
          </div>
        </div>

        {/* Main Hero Split (Content + Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Left: Copy & Phone Triggers */}
          <div className="lg:col-span-7 space-y-space-md">
            <h1 className="font-headline-xl text-headline-xl lg:text-[52px] lg:leading-[58px] text-surface font-extrabold tracking-tight">
              Professional Office Chair &amp; Luxury Recliner Repair{' '}
              <span className="text-secondary-container">At Your Doorstep</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl leading-relaxed">
              Fast, reliable, and affordable repairs across all areas in Hyderabad. Class-4 heavy duty hydraulics, original mechanism fixes, and luxury recliner motor servicing with 90-day warranty &amp; 60-minute quick technician arrival.
            </p>

            {/* Badges cluster */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 pb-1">
              <div className="flex flex-col p-2.5 rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm">
                <span className="material-symbols-outlined text-secondary-container text-xl mb-1">bolt</span>
                <span className="font-label-sm text-label-sm text-surface font-bold">Same-Day</span>
                <span className="font-body-sm text-[11px] text-on-primary-container">60-Min Dispatch</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm">
                <span className="material-symbols-outlined text-secondary-container text-xl mb-1">verified_user</span>
                <span className="font-label-sm text-label-sm text-surface font-bold">100% Genuine</span>
                <span className="font-body-sm text-[11px] text-on-primary-container">Original Spares</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm">
                <span className="material-symbols-outlined text-secondary-container text-xl mb-1">price_check</span>
                <span className="font-label-sm text-label-sm text-surface font-bold">Best Price</span>
                <span className="font-body-sm text-[11px] text-on-primary-container">Zero Visiting Fee*</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm">
                <span className="material-symbols-outlined text-secondary-container text-xl mb-1">task_alt</span>
                <span className="font-label-sm text-label-sm text-surface font-bold">5,000+ Fixed</span>
                <span className="font-body-sm text-[11px] text-on-primary-container">Trusted Across Hyd</span>
              </div>
            </div>

            {/* Dual Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
              <a
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-secondary text-on-secondary font-label-lg text-label-lg shadow-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all text-center"
                href={`tel:${CONTACT.primaryPhone}`}
              >
                <span className="material-symbols-outlined text-2xl">call</span>
                <div className="text-left">
                  <span className="block text-[11px] uppercase tracking-wider opacity-85 font-medium">Direct Call Hotline</span>
                  <span className="block text-headline-sm font-bold leading-tight">{CONTACT.primaryPhone}</span>
                </div>
              </a>

              <a
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] text-on-tertiary font-label-lg text-label-lg shadow-xl hover:opacity-95 transition-all text-center"
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-2xl">chat</span>
                <div className="text-left">
                  <span className="block text-[11px] uppercase tracking-wider font-semibold opacity-90">Send Photos on WhatsApp</span>
                  <span className="block text-headline-sm font-bold leading-tight">Instant Photo Quote</span>
                </div>
              </a>
            </div>

            {/* Secondary note */}
            <div className="flex items-center gap-2 text-xs font-body-sm text-on-primary-container pt-1">
              <span className="material-symbols-outlined text-tertiary-fixed text-base">check_circle</span>
              <span>
                Secondary backup line:{' '}
                <a className="text-surface font-bold hover:underline" href={`tel:${CONTACT.secondaryPhone}`}>
                  {CONTACT.secondaryPhone}
                </a>{' '}
                • No need to carry heavy chairs anywhere.
              </span>
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="lg:col-span-5">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
