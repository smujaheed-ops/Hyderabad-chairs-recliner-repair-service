import React, { useState } from 'react';
import { faqList } from '../data/faq';

export default function FAQSection() {
  const [openId, setOpenId] = useState(1); // First item open by default

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full py-space-xl bg-surface-container-low scroll-mt-20">
      <div className="max-w-[800px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight mt-1">
            Got Questions? We Have Answers
          </h2>
        </div>

        <div className="space-y-3">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 font-label-lg text-label-lg font-bold text-primary cursor-pointer flex items-center justify-between gap-3 hover:text-secondary transition-colors"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 animate-in fade-in duration-200">
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
