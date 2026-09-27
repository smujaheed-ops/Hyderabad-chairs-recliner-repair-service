import React from 'react';
import { CONTACT } from '../data/contacts';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      badgeBg: "bg-primary text-surface",
      title: "Share Details & Photos",
      description: (
        <>
          Call <a className="text-secondary font-bold hover:underline" href={`tel:${CONTACT.primaryPhone}`}>{CONTACT.primaryPhone}</a> or send chair photos / short video on WhatsApp showing the damaged wheel, hydraulic, or recliner handle.
        </>
      ),
      icon: "photo_camera",
      meta: "WhatsApp 24/7"
    },
    {
      num: "02",
      badgeBg: "bg-secondary text-on-secondary",
      title: "Instant Upfront Estimate",
      description: "Our expert assesses the required spare part (Class-4 hydraulic, metal base, or recliner switch) and quotes exact, transparent pricing before dispatch.",
      icon: "receipt_long",
      meta: "No hidden charges"
    },
    {
      num: "03",
      badgeBg: "bg-primary text-surface",
      title: "Rapid Technician Dispatch",
      description: "A trained technician arrives at your home or workplace equipped with factory-sealed replacement parts and professional precision tools.",
      icon: "schedule",
      meta: "45-60 min arrival"
    },
    {
      num: "04",
      badgeBg: "bg-primary-container text-surface",
      title: "On-The-Spot Fix & Test",
      description: "Repairs completed within 30 to 45 minutes right in front of you. Test sitting comfort thoroughly before payment via UPI, cash, or card.",
      icon: "verified",
      meta: "90-Day guarantee"
    }
  ];

  return (
    <section id="pricing-and-process" className="w-full py-space-xl bg-surface-container-lowest scroll-mt-20">
      <div id="pricing-process" className="scroll-mt-24"></div>
      <div className="max-w-[1200px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Hassle-Free Restoration
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight mt-1">
            How Our Doorstep Repair Works
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
            Zero transportation effort. You relax while our technician finishes the job right before your eyes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-background rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-full ${step.badgeBg} font-headline-sm flex items-center justify-center font-bold mb-4 shadow`}
                >
                  {step.num}
                </div>
                <h3 className="font-headline-sm text-[18px] text-primary font-bold mb-2">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-surface-container-high/60 flex items-center gap-1.5 text-xs font-label-md text-secondary font-semibold">
                <span className="material-symbols-outlined text-sm">{step.icon}</span>
                <span>{step.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
