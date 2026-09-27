import React, { useState } from 'react';

export default function DetailedBookingForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    locality: '',
    category: 'Office Hydraulic High-Back Chair',
    issues: ['Hydraulic Sinking'],
    preferredDate: '',
    timeWindow: 'Earliest Possible (Within 60 Mins)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const issueOptions = [
    'Hydraulic Sinking',
    'Broken Wheel Castors',
    'Tilt Mechanism Stuck',
    'Recliner Not Opening',
    'Seat Foam / Fabric Torn',
    'Cracked Star Base'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleIssueToggle = (issue) => {
    setFormData((prev) => {
      const exists = prev.issues.includes(issue);
      if (exists) {
        return { ...prev, issues: prev.issues.filter((i) => i !== issue) };
      } else {
        return { ...prev, issues: [...prev.issues, issue] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customerName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.locality.trim()) {
      setError('Please enter your Hyderabad locality or landmark.');
      return;
    }
    if (formData.issues.length === 0) {
      setError('Please select at least one issue you are facing.');
      return;
    }

    setSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setFormData({
      customerName: '',
      phone: '',
      locality: '',
      category: 'Office Hydraulic High-Back Chair',
      issues: ['Hydraulic Sinking'],
      preferredDate: '',
      timeWindow: 'Earliest Possible (Within 60 Mins)'
    });
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="book-doorstep-visit" className="w-full py-space-xl bg-background scroll-mt-20">
      <div id="booking-section" className="scroll-mt-24"></div>
      <div className="max-w-[1000px] mx-auto px-margin-mobile lg:px-margin">
        <div className="bg-surface-container-lowest rounded-3xl p-space-md sm:p-space-xl shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Priority Scheduling
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight mt-1">
              Schedule Your Doorstep Repair Visit
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
              Select your chair problem below for a guaranteed fast technician arrival.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-tertiary-fixed/30 border border-tertiary-fixed text-on-surface space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-on-tertiary-container">
                  check_circle
                </span>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">
                  Booking Request Received!
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                Thank you, <strong className="text-primary">{formData.customerName}</strong>! Our technician in{' '}
                <strong className="text-primary">{formData.locality}</strong> has been notified for your{' '}
                <strong className="text-primary">{formData.category}</strong>. We will call you at{' '}
                <strong className="text-primary">{formData.phone}</strong> within 15 minutes to confirm the exact arrival slot (
                {formData.timeWindow}).
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-container transition-all"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-space-md" onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 rounded-xl bg-error-container text-error text-body-sm font-label-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">error</span>
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-md text-label-md text-primary font-bold mb-1.5">
                    Customer Name *
                  </label>
                  <input
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="Enter your full name"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-primary font-bold mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    required
                    type="tel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-md text-label-md text-primary font-bold mb-1.5">
                    Hyderabad Locality / Landmark *
                  </label>
                  <input
                    name="locality"
                    value={formData.locality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="e.g. Near Inorbit Mall, Madhapur"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-primary font-bold mb-1.5">
                    Chair / Furniture Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                  >
                    <option value="Office Hydraulic High-Back Chair">Office Hydraulic High-Back Chair</option>
                    <option value="Ergonomic Mesh Chair">Ergonomic Mesh Chair</option>
                    <option value="Motorized Electric Recliner Sofa">Motorized Electric Recliner Sofa</option>
                    <option value="Manual Push-Back Recliner">Manual Push-Back Recliner</option>
                    <option value="Gaming Chair">Gaming Chair</option>
                    <option value="Multiple Chairs (Office / Corporate Bulk)">Multiple Chairs (Office / Corporate Bulk)</option>
                  </select>
                </div>
              </div>

              {/* Problem Selector Badges */}
              <div>
                <label className="block font-label-md text-label-md text-primary font-bold mb-2">
                  What issue are you facing? (Multiple Select)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {issueOptions.map((issue) => {
                    const isChecked = formData.issues.includes(issue);
                    return (
                      <label
                        key={issue}
                        className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-secondary-fixed/40 border border-secondary text-primary font-semibold'
                            : 'bg-surface-container-low hover:bg-surface-container text-on-surface'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="accent-secondary w-4 h-4 cursor-pointer"
                          checked={isChecked}
                          onChange={() => handleIssueToggle(issue)}
                        />
                        <span className="text-xs font-label-md">{issue}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-md text-label-md text-primary font-bold mb-1.5">
                    Preferred Visit Date
                  </label>
                  <input
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    type="date"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-primary font-bold mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    name="timeWindow"
                    value={formData.timeWindow}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                  >
                    <option value="Earliest Possible (Within 60 Mins)">Earliest Possible (Within 60 Mins)</option>
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <button
                className="w-full py-4 px-6 rounded-2xl bg-secondary text-on-secondary font-headline-sm text-headline-sm font-extrabold shadow-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center gap-3 cursor-pointer"
                type="submit"
              >
                <span>Confirm &amp; Schedule Doorstep Visit</span>
                <span className="material-symbols-outlined text-2xl">arrow_forward</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
