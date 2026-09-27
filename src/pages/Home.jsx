import React from 'react';
import Hero from '../components/Hero';
import LiveSpeedBar from '../components/LiveSpeedBar';
import ServicesSection from '../components/ServicesSection';
import ChairTypesSection from '../components/ChairTypesSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CoverageSection from '../components/CoverageSection';
import DetailedBookingForm from '../components/DetailedBookingForm';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <main className="w-full pt-20 bg-background overflow-x-hidden">
      <div className="flex flex-col w-full">
        {/* SECTION 1: HERO & IMMEDIATE RESPONSE HUB */}
        <Hero />

        {/* SECTION 2: LIVE SPEED BAR & CITYWIDE HUBS */}
        <LiveSpeedBar />

        {/* SECTION 3: COMPREHENSIVE REPAIR SERVICES GRID */}
        <ServicesSection />

        {/* SECTION 4: TYPES OF CHAIRS WE FIX (VISUAL CATALOG GRID & RECLINER BANNER) */}
        <ChairTypesSection />

        {/* SECTION 5: HOW IT WORKS (SIMPLE 4-STEP DOORSTEP PROCESS) */}
        <ProcessSection />

        {/* SECTION 6: WHY CHOOSE US & COMPARISON TABLE */}
        <WhyChooseUs />

        {/* SECTION 7: HYDERABAD COVERAGE AREAS & INTERACTIVE HUB */}
        <CoverageSection />

        {/* SECTION 8: FULL DETAILED BOOKING & DIAGNOSTIC FORM */}
        <DetailedBookingForm />

        {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />
      </div>
    </main>
  );
}
