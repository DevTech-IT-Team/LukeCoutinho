import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ConsultFlowShell from '../components/consult/ConsultFlowShell';
import { consultEntryPaths } from '../data/consultServices';

const BookConsult = () => {
  const navigate = useNavigate();
  const [selectedPathId, setSelectedPathId] = useState(null);

  const goNext = () => {
    if (!selectedPathId) return;
    const path = consultEntryPaths.find((p) => p.id === selectedPathId);
    navigate('/book-consult/service', { state: { pathId: selectedPathId, path } });
  };

  return (
    <ConsultFlowShell
      step={1}
      title="Choose a consultation option that's best for you"
      subtitle="Booking a consultation is your first step towards understanding and rebooting your health. Pick how you'd like to begin."
      footer={
        <>
          <span />
          <button
            type="button"
            className="bcf-btn-next"
            disabled={!selectedPathId}
            onClick={goNext}
          >
            Next step
            <ArrowRight size={14} />
          </button>
        </>
      }
    >
      {consultEntryPaths.map((path) => (
        <button
          key={path.id}
          type="button"
          className={`bcf-path-card${selectedPathId === path.id ? ' is-selected' : ''}`}
          onClick={() => setSelectedPathId(path.id)}
          aria-pressed={selectedPathId === path.id}
        >
          <h3>{path.title}</h3>
          <p>{path.description}</p>
        </button>
      ))}
    </ConsultFlowShell>
  );
};

export default BookConsult;
