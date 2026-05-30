import React, { useState } from 'react';

/** Shared masterclass reservation form — inline panel + modal */
export default function MasterclassReserveForm({
  onSubmit,
  status = 'idle',
  submitLabel = 'Continue to payment',
  submitIcon = null,
}) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', plan: 'standard' });
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="bcf-inline-form" onSubmit={handleSubmit}>
      <div className="bcf-inline-form-grid">
        <label className="bcf-field">
          <span>Full name</span>
          <input type="text" required value={form.name} onChange={update('name')} />
        </label>
        <label className="bcf-field">
          <span>Email</span>
          <input type="email" required value={form.email} onChange={update('email')} />
        </label>
        <label className="bcf-field">
          <span>Phone</span>
          <input type="tel" required value={form.phone} onChange={update('phone')} />
        </label>
        <label className="bcf-field">
          <span>Plan</span>
          <select
            value={form.plan}
            onChange={update('plan')}
            className="border-0 border-b border-[rgba(26,20,16,0.18)] bg-transparent py-3 font-[Arial] text-[14px]"
          >
            <option value="standard">Standard access</option>
            <option value="exclusive">Premium access</option>
          </select>
        </label>
      </div>
      <button type="submit" className="bcf-btn-next" disabled={status === 'sending'}>
        {status === 'sending' ? 'Saving…' : submitLabel}
        {submitIcon}
      </button>
    </form>
  );
}
