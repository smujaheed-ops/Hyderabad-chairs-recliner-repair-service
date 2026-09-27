import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    area: 'Hitec City / Madhapur',
    problem: 'Hydraulic sinking / not rising'
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Success response
    setSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      area: 'Hitec City / Madhapur',
      problem: 'Hydraulic sinking / not rising'
    });
    setSubmitted(false);
    setError('');
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg text-on-surface shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-secondary-container to-tertiary-fixed-dim"></div>
      
      <div className="flex items-center justify-between mb-space-sm">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
            Fast Doorstep Request
          </span>
          <h3 className="font-headline-sm text-headline-sm text-primary font-extrabold">
            Book Technician in 30 Sec
          </h3>
        </div>
        <span className="material-symbols-outlined text-secondary-container text-3xl">
          home_repair_service
        </span>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Need on-site gas lift, tilt lock, wheel or recliner mechanical fix today? Fill below:
      </p>

      {submitted ? (
        <div className="p-4 rounded-xl bg-secondary-fixed/30 border border-secondary-fixed text-on-surface space-y-3 animate-in fade-in duration-300">
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">
              check_circle
            </span>
            <div>
              <h4 className="font-headline-sm text-[18px] text-primary font-bold">
                Request Confirmed!
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                Thank you <strong className="text-primary">{formData.fullName}</strong>. Our mobile technician in <strong className="text-primary">{formData.area}</strong> is being dispatched and will call you at <strong className="text-primary">{formData.phone}</strong> within 15 minutes.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="w-full mt-2 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-xs font-bold hover:bg-primary-container transition-all"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form className="space-y-3" onSubmit={handleSubmit}>
          {error && (
            <div className="p-2.5 rounded-lg bg-error-container text-error text-xs font-label-md flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">error</span>
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
              Your Full Name *
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all"
              placeholder="e.g. Ramesh Reddy"
              required
              type="text"
            />
          </div>

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
              Phone Number (WhatsApp Active) *
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-sm focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all"
              pattern="[0-9]{10}"
              placeholder="10-digit mobile number"
              required
              type="tel"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                Hyderabad Area
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="Hitec City / Madhapur">Hitec City / Madhapur</option>
                <option value="Gachibowli / Kondapur">Gachibowli / Kondapur</option>
                <option value="Banjara / Jubilee Hills">Banjara / Jubilee Hills</option>
                <option value="Secunderabad / Begumpet">Secunderabad / Begumpet</option>
                <option value="Afzal Gunj / Charminar">Afzal Gunj / Charminar</option>
                <option value="Kukatpally / Miyapur">Kukatpally / Miyapur</option>
                <option value="Dilsukhnagar / LB Nagar">Dilsukhnagar / LB Nagar</option>
                <option value="Other Hyderabad Location">Other Hyderabad Location</option>
              </select>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                Primary Problem
              </label>
              <select
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="Hydraulic sinking / not rising">Hydraulic sinking / not rising</option>
                <option value="Broken wheel castor / 5-star base">Broken wheel castor / 5-star base</option>
                <option value="Tilting mechanism broken/loose">Tilting mechanism broken/loose</option>
                <option value="Recliner cable/handle stuck">Recliner cable/handle stuck</option>
                <option value="Recliner electric motor fault">Recliner electric motor fault</option>
                <option value="Foam cushion & mesh upholstery">Foam cushion & mesh upholstery</option>
              </select>
            </div>
          </div>

          <button
            className="w-full mt-2 py-3.5 px-4 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer"
            type="submit"
          >
            <span>Dispatch Technician to My Doorstep</span>
            <span className="material-symbols-outlined text-secondary-container">
              arrow_forward
            </span>
          </button>
        </form>
      )}

      <div className="mt-3 pt-3 border-t border-surface-container-high flex items-center justify-between text-[11px] text-on-surface-variant">
        <span className="flex items-center gap-1 font-medium">
          <span className="material-symbols-outlined text-xs text-secondary">security</span> No Advance Required
        </span>
        <span className="flex items-center gap-1 font-medium">
          <span className="material-symbols-outlined text-xs text-secondary">verified</span> Pay After Testing
        </span>
      </div>
    </div>
  );
}
