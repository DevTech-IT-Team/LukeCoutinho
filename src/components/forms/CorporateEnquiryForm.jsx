import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CorporateEnquiryForm() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({
    org: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      navigate('/payment-success', {
        state: { submissionType: 'enquiry', enquiry: { type: 'corporate', ...form } },
      });
    }, 800);
  };

  return (
    <form id="corporate-enquiry" className="bcf-inline-form" onSubmit={handleSubmit}>
      <p className="bcf-inline-form-lead">
        Tell us about your organisation — we will respond within 24–48 hours to design a corporate wellness
        experience for your team.
      </p>
      <div className="bcf-inline-form-grid">
        <label className="bcf-field">
          <span>Organisation</span>
          <input type="text" required value={form.org} onChange={update('org')} />
        </label>
        <label className="bcf-field">
          <span>Contact name</span>
          <input type="text" required value={form.name} onChange={update('name')} />
        </label>
        <label className="bcf-field">
          <span>Work email</span>
          <input type="email" required value={form.email} onChange={update('email')} />
        </label>
        <label className="bcf-field">
          <span>Phone</span>
          <input type="tel" required value={form.phone} onChange={update('phone')} />
        </label>
        <label className="bcf-field bcf-field-full">
          <span>How can we support your team?</span>
          <textarea rows={4} value={form.message} onChange={update('message')} />
        </label>
      </div>
      <button type="submit" className="bcf-btn-next w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
      </button>
    </form>
  );
}
