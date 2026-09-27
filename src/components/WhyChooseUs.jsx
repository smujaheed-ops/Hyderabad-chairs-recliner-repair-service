import React from 'react';
import ComparisonCard from './ComparisonCard';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: "verified_user",
      title: "100% Genuine Certified Spares",
      description: "We never install lightweight unbranded gas cylinders. Every hydraulic is heavy gauge Class-4 nitrogen filled for long-term safety."
    },
    {
      icon: "home_pin",
      title: "Zero Transport & Loading Hassle",
      description: "No calling auto-rickshaws or loading bulky chairs into your car trunk. Our technician comes directly to your floor or cabin."
    },
    {
      icon: "handshake",
      title: "Transparent Pricing & Pay Post-Satisfaction",
      description: "Clear estimates given prior to opening the chair. You only pay once the height adjustment, tilt lock, and wheels are fully tested."
    },
    {
      icon: "history_toggle_off",
      title: "Over 12 Years of Craftsmanship",
      description: "Our Afzal Gunj headquarters has serviced over 5,000+ commercial and residential seating setups throughout Hyderabad."
    }
  ];

  return (
    <section id="why-choose-us" className="w-full py-space-xl bg-background scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Left: Why Choose Us Value Pillars */}
          <div className="lg:col-span-6 space-y-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                Faheem Chair Repair Hyderabad
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight mt-1">
                Why Hyderabad Relies On Us Over Replacing Chairs
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Buying a brand new ergonomic chair or luxury recliner costs ₹12,000 to ₹45,000+. We restore them to like-new condition at 10% to 20% of the cost.
              </p>
            </div>

            <div className="space-y-space-sm">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="material-symbols-outlined text-secondary text-2xl mt-0.5 shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-label-lg text-label-lg text-primary font-bold">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Comparison Metric Table */}
          <div className="lg:col-span-6">
            <ComparisonCard />
          </div>
        </div>
      </div>
    </section>
  );
}
