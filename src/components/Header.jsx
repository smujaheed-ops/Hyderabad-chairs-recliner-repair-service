import React, { useState } from 'react';
import { CONTACT } from '../data/contacts';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Types of Chairs', href: '#types-of-chairs' },
    { name: 'Spare Parts & Repairs', href: '#spare-parts-and-repairs' },
    { name: 'Pricing/Process', href: '#pricing-and-process' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Book Doorstep Visit', href: '#book-doorstep-visit' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="h-20 w-full max-w-[1200px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-sm">
        {/* Brand */}
        <div className="flex items-center gap-space-sm">
          <div className="flex flex-col">
            <a href="#" className="flex items-center gap-space-xs group">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight whitespace-nowrap group-hover:text-secondary transition-colors">
                {CONTACT.brandName}
              </span>
            </a>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold tracking-wide uppercase">
                Doorstep Service Across Hyderabad
              </span>
              <span className="hidden sm:inline-block text-[11px] font-body-sm text-on-surface-variant font-medium">
                • 60 Min Response
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / Hotline & Profile */}
        <div className="flex items-center gap-space-sm">
          <div className="hidden md:flex flex-col items-end">
            <span className="font-label-sm text-[10px] uppercase tracking-wider text-secondary font-bold">
              Emergency Hotline
            </span>
            <div className="flex items-center gap-2">
              <a
                className="font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors"
                href={`tel:${CONTACT.primaryPhone}`}
              >
                {CONTACT.primaryPhone}
              </a>
              <span className="text-outline-variant font-bold">|</span>
              <a
                className="font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors"
                href={`tel:${CONTACT.secondaryPhone}`}
              >
                {CONTACT.secondaryPhone}
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366] text-on-tertiary font-label-md text-label-md shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:opacity-95 transition-all whitespace-nowrap"
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline font-bold">WhatsApp Quote</span>
            <span className="sm:hidden font-bold">WhatsApp</span>
          </a>

          {/* Avatar Profile */}
          <img
            alt="Hyderabad Chair Repair Technician"
            className="w-8 h-8 rounded-full object-cover shadow-sm hidden xs:block"
            src="/images/profile.jpg"
            onError={(e) => {
              e.currentTarget.src = "https://lh3.googleusercontent.com/aida/AEtjO1USNc_2-8vwKGblorojCSePjeOZs8IBsvPaiFlB-j6WJDNei4XVLy8cJ5aopZ5Ux_dumETdZzVDHKaZqUQ1fiFveIwASoNwwGPMGo8gOkJ8dbZ4-B-cfbrZur9TrzwUYXDm3O1aAwh5jPxCpcYsNoxQ00zICpTAuuGAKSJsAV2YNSnPpg2KNxAuSjdQ1X4DOit3RJPuxZN9KIyVkiawXWD6XkJIJ5eLdITe-SScNtU0JbYkAN8Y8IKZm2bhQ0wTZZpYHmt84P7zIg";
            }}
          />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container-high px-margin-mobile py-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 pb-3 border-b border-surface-container">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-label-md text-label-md text-on-surface hover:text-secondary py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 flex flex-col gap-2">
            <span className="text-[11px] font-label-sm uppercase tracking-wider text-secondary font-bold">
              Call Hotline:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${CONTACT.primaryPhone}`}
                className="inline-flex items-center gap-1.5 text-body-sm font-bold text-primary hover:text-secondary"
              >
                <span className="material-symbols-outlined text-sm text-secondary">call</span>
                {CONTACT.primaryPhone}
              </a>
              <span className="text-outline-variant font-bold">|</span>
              <a
                href={`tel:${CONTACT.secondaryPhone}`}
                className="inline-flex items-center gap-1.5 text-body-sm font-bold text-primary hover:text-secondary"
              >
                <span className="material-symbols-outlined text-sm text-secondary">call</span>
                {CONTACT.secondaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
