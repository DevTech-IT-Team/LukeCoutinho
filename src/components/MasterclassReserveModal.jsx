import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import MasterclassReserveForm from './MasterclassReserveForm';
import './consult/book-consult-flow.css';

export default function MasterclassReserveModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (form) => {
    setStatus('sending');
    setTimeout(() => {
      onClose();
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

  return createPortal(
    <div
      className="lc-mc-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Reserve your masterclass spot"
    >
      <button type="button" className="lc-mc-modal__scrim" aria-label="Close" onClick={onClose} />
      <div className="lc-mc-modal__panel">
        <button type="button" className="lc-mc-modal__close" aria-label="Close" onClick={onClose}>
          <X size={18} />
        </button>
        <p className="lc-mc-eyebrow text-[10px] uppercase tracking-[0.35em] text-[#ff8f00] mb-3">
          Save your spot
        </p>
        <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.05] text-[#1a3c34] mb-2">
          Reserve your seat
        </h2>
        <p className="lc-mc-body text-[14px] leading-[1.85] text-[rgba(26,20,16,0.65)] mb-6">
          Complete your details — you will continue to secure your place and complete payment on the
          next screen.
        </p>
        <MasterclassReserveForm
          onSubmit={handleSubmit}
          status={status}
          submitLabel="Continue to payment"
          submitIcon={<ArrowRight size={14} />}
        />
      </div>
    </div>,
    document.body,
  );
}
