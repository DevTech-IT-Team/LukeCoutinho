import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { BD_ENQUIRY_TYPES } from '../../data/bdContent';

const INTENT_MAP = {
  speaker: 'speaker',
  corporate: 'corporate-wellness',
  wellness: 'corporate-wellness',
  retreat: 'retreat',
  partnership: 'partnership',
};

export default function BdLeadForm({ defaultType = 'corporate-wellness', id = 'enquire' }) {
  const [searchParams] = useSearchParams();
  const intent = searchParams.get('intent');
  const resolvedDefault = INTENT_MAP[intent] || defaultType;

  const [status, setStatus] = useState('idle');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    enquiryType: resolvedDefault,
    org: '',
    name: '',
    email: '',
    phone: '',
    teamSize: '',
    message: '',
  });

  useEffect(() => {
    if (intent && INTENT_MAP[intent]) {
      setForm((f) => ({ ...f, enquiryType: INTENT_MAP[intent] }));
    }
  }, [intent]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setSubmitted(true);
      setStatus('idle');
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bcf-inline-success" role="status" aria-live="polite">
        <Check size={28} className="bcf-inline-success__icon" aria-hidden />
        <h3>Thank you — we received your enquiry.</h3>
        <p>
          Our business development team will respond within 24–48 hours to understand your goals and
          design a tailored proposal.
        </p>
      </div>
    );
  }

  return (
    <form id={id} className="bcf-inline-form" onSubmit={handleSubmit}>
      <p className="bcf-inline-form-lead">
        Share a few details — every engagement is custom-built. No fixed packages; we design around your
        people, culture, and outcomes.
      </p>
      <div className="bcf-inline-form-grid">
        <label className="bcf-field bcf-field-full">
          <span>I am enquiring about</span>
          <select
            value={form.enquiryType}
            onChange={update('enquiryType')}
            className="border-0 border-b border-[rgba(26,20,16,0.18)] bg-transparent py-3 font-[Arial] text-[14px] w-full"
          >
            {BD_ENQUIRY_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
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
        <label className="bcf-field">
          <span>Team / audience size</span>
          <input
            type="text"
            placeholder="e.g. 500 employees"
            value={form.teamSize}
            onChange={update('teamSize')}
          />
        </label>
        <label className="bcf-field bcf-field-full">
          <span>Tell us about your event or goals</span>
          <textarea rows={4} value={form.message} onChange={update('message')} />
        </label>
      </div>
      <button type="submit" className="bcf-btn-next w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
      </button>
    </form>
  );
}
