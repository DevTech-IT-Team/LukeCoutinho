import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildConsultSelection } from '../../data/consultServices';

export default function WaitlistInlineForm({ onCancel }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const consult = buildConsultSelection({
      serviceId: 'luke-waitlist',
      serviceTitle: "Join Luke's Exclusive Waitlist",
      optionTitle: 'Waitlist request',
      duration: 'As available',
      price: 'Confirmed by team',
      priceValue: null,
      mode: 'Online',
    });
    setTimeout(() => {
      navigate('/payment-success', {
        state: {
          submissionType: 'waitlist',
          consult,
          contact: { ...form },
        },
      });
    }, 800);
  };

  return (
    <form className="bcf-inline-form" onSubmit={handleSubmit}>
      <p className="bcf-inline-form-lead">
        Share your details — our team will reach out at the earliest available slot for a personalised
        consultation with Luke. No payment required now.
      </p>
      <div className="bcf-inline-form-grid">
        <label className="bcf-field">
          <span>Full name</span>
          <input type="text" name="name" required value={form.name} onChange={update('name')} />
        </label>
        <label className="bcf-field">
          <span>Email</span>
          <input type="email" name="email" required value={form.email} onChange={update('email')} />
        </label>
        <label className="bcf-field">
          <span>Phone</span>
          <input type="tel" name="phone" required value={form.phone} onChange={update('phone')} />
        </label>
        <label className="bcf-field bcf-field-full">
          <span>What would you like support with?</span>
          <textarea name="message" rows={3} value={form.message} onChange={update('message')} />
        </label>
      </div>
      <div className="bcf-inline-form-actions">
        {onCancel && (
          <button type="button" className="bcf-btn-back" onClick={onCancel}>
            Choose another option
          </button>
        )}
        <button type="submit" className="bcf-btn-next" disabled={status === 'sending'}>
          {status === 'sending' ? 'Submitting…' : 'Join waitlist'}
        </button>
      </div>
    </form>
  );
}
