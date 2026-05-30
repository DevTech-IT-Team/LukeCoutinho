import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MasterclassReserveForm from './MasterclassReserveForm';

/** Inline spot reservation — optimised masterclass flow (no separate reserve page). */
export default function MasterclassReservePanel({ id = 'reserve-spot' }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');

  const handleSubmit = (form) => {
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
        <p className="lc-mc-eyebrow text-[10px] uppercase tracking-[0.35em] text-[#ff8f00] mb-4">
          Save your spot
        </p>
        <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.05] text-[#1a3c34] mb-3">
          Reserve your seat
        </h2>
        <p className="lc-mc-body text-[14px] leading-[1.85] text-[rgba(26,20,16,0.65)] mb-8 max-w-[52ch] mx-auto">
          Complete your details below — you will continue to secure your place and complete payment on the next
          screen.
        </p>

        <MasterclassReserveForm
          onSubmit={handleSubmit}
          status={status}
          submitLabel="Continue to payment"
          submitIcon={<ArrowRight size={14} />}
        />
      </div>
    </section>
  );
}
