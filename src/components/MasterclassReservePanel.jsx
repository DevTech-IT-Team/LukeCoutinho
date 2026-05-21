import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/** Inline spot reservation — optimised masterclass flow (no separate reserve page). */
export default function MasterclassReservePanel({ id = 'reserve-spot' }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', plan: 'standard' });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      navigate('/payment', {
        state: {
          consult: {
            serviceId: 'masterclass',
            serviceTitle: 'Masterclass',
            optionTitle: form.plan === 'exclusive' ? 'Premium seat' : 'Standard seat',
            label: 'Masterclass reservation',
            price: 'As per plan',
            priceValue: null,
            mode: 'Live event',
            duration: 'Single session',
          },
          contact: { ...form },
        },
      });
    }, 600);
  };

  return (
    <section id={id} className="bg-[#FAF6EE] border-y border-[rgba(26,20,16,0.08)] scroll-mt-24">
      <div className="mx-auto max-w-[720px] px-6 md:px-10 py-16 lg:py-20">
        <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-4 text-left">
          Save your spot
        </p>
        <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(28px,4vw,40px)] leading-[1.05] text-[#1A1410] mb-3 text-left">
          Reserve your seat
        </h2>
        <p className="font-[Arial] text-[14px] leading-[1.85] text-[rgba(26,20,16,0.65)] mb-8 text-left max-w-[52ch]">
          Complete your details below — you will continue to secure your place and complete payment on the next
          screen.
        </p>

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
            {status === 'sending' ? 'Saving…' : 'Continue to payment'}
            <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </section>
  );
}
