import React, { useState } from 'react';
import { CONTACT } from '../data/contacts';

export default function Footer() {
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    const clean = callbackPhone.replace(/\D/g, '');
    if (clean.length === 10) {
      setCallbackSubmitted(true);
      setCallbackPhone('');
    }
  };

  return (
    <footer className="w-full bg-primary-container text-surface py-space-xl pb-24 md:pb-space-xl">
      <div className="w-full max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-lg">
          {/* Col 1 */}
          <div className="space-y-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-surface font-bold tracking-tight">
              {CONTACT.brandName}
            </h3>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Premium doorstep hydraulic chair, mesh ergonomic, executive seating, and recliner sofa restoration across Hyderabad &amp; Secunderabad.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest/10 text-tertiary-fixed text-xs font-semibold">
              <span className="material-symbols-outlined text-sm">verified</span>
              Genuine Spares • 90-Day Warranty
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-space-sm">
            <h4 className="font-label-lg text-label-lg text-surface font-bold">
              Working Hours &amp; Coverage
            </h4>
            <div className="flex items-start gap-2 text-on-primary-container">
              <span className="material-symbols-outlined text-secondary-container text-base mt-0.5">
                schedule
              </span>
              <div>
                <p className="font-body-sm text-body-sm text-surface font-semibold">
                  {CONTACT.hours}
                </p>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  {CONTACT.days}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 text-on-primary-container">
              <span className="material-symbols-outlined text-secondary-container text-base mt-0.5">
                location_on
              </span>
              <p className="font-body-sm text-body-sm leading-snug">
                Madhapur, Hitec City, Gachibowli, Kondapur, Banjara Hills, Jubilee Hills, Kukatpally &amp; all Greater Hyderabad areas.
              </p>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-space-sm">
            <h4 className="font-label-lg text-label-lg text-surface font-bold">
              Direct Support
            </h4>
            <div className="space-y-2">
              <a
                className="flex items-center gap-2 text-surface hover:text-secondary-fixed transition-colors"
                href={`tel:${CONTACT.primaryPhone}`}
              >
                <span className="material-symbols-outlined text-secondary-container text-base">call</span>
                <span className="font-label-md text-label-md font-bold">+91 {CONTACT.primaryPhone}</span>
              </a>
              <a
                className="flex items-center gap-2 text-surface hover:text-secondary-fixed transition-colors"
                href={`tel:${CONTACT.secondaryPhone}`}
              >
                <span className="material-symbols-outlined text-secondary-container text-base">phone_in_talk</span>
                <span className="font-label-md text-label-md font-bold">+91 {CONTACT.secondaryPhone}</span>
              </a>
              <a
                className="flex items-center gap-2 text-[#25D366] hover:underline"
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span className="font-label-md text-label-md font-bold">Instant WhatsApp Help</span>
              </a>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-space-sm">
            <h4 className="font-label-lg text-label-lg text-surface font-bold">
              Instant Callback
            </h4>
            <p className="font-body-sm text-body-sm text-on-primary-container">
              Enter your phone number for an immediate technician dispatch call.
            </p>
            {callbackSubmitted ? (
              <div className="p-2.5 rounded-lg bg-surface-container-lowest/15 text-tertiary-fixed text-xs font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>Callback registered! Calling in 10 mins.</span>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="flex gap-1.5">
                <input
                  className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Enter 10-digit number"
                  type="tel"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  pattern="[0-9]{10}"
                  required
                />
                <button
                  className="px-3 py-2 rounded-lg bg-secondary text-on-secondary font-label-sm text-xs font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-colors whitespace-nowrap cursor-pointer"
                  type="submit"
                >
                  Call Me
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-space-md border-t border-surface-container-lowest/15 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-xs font-body-sm text-on-primary-container">
          <p>© 2025 Hyderabad Chair &amp; Recliner Repair Service. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-surface transition-colors" href="#booking-section">
              Doorstep Guarantee
            </a>
            <span className="opacity-40">•</span>
            <a className="hover:text-surface transition-colors" href="tel:7088193928">
              7088193928
            </a>
            <span className="opacity-40">•</span>
            <a className="hover:text-surface transition-colors" href="tel:7731069328">
              7731069328
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
