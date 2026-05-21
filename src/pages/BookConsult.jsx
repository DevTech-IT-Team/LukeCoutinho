import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ConsultFlowShell from '../components/consult/ConsultFlowShell';
import WaitlistInlineForm from '../components/forms/WaitlistInlineForm';
import { consultEntryPaths } from '../data/consultServices';
import { trackFunnelStep } from '../lib/analytics';
import { REVENUE_STREAMS } from '../config/revenueStreams';

const BookConsult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedPathId, setSelectedPathId] = useState(null);

  const pathParam = searchParams.get('path');

  useEffect(() => {
    if (pathParam === 'waitlist') {
      setSelectedPathId('waitlist');
      return;
    }
    if (pathParam === 'expert' || pathParam === 'instant') {
      const path = consultEntryPaths.find((p) => p.id === pathParam);
      if (path) navigate('/book-consult/service', { state: { pathId: pathParam, path }, replace: true });
    }
  }, [pathParam, navigate]);

  const selectedPath = consultEntryPaths.find((p) => p.id === selectedPathId);
  const isWaitlist = selectedPathId === 'waitlist';

  const goNext = () => {
    if (!selectedPathId || isWaitlist) return;
    const path = consultEntryPaths.find((p) => p.id === selectedPathId);
    trackFunnelStep(REVENUE_STREAMS.consults, 1, 'path_selected', { path_id: selectedPathId });
    navigate('/book-consult/service', { state: { pathId: selectedPathId, path } });
  };

  const handlePathSelect = (pathId) => {
    setSelectedPathId(pathId);
    trackFunnelStep(REVENUE_STREAMS.consults, 1, 'path_option_click', { path_id: pathId });
  };

  if (isWaitlist) {
    return (
      <ConsultFlowShell
        step={1}
        title="Join Luke's exclusive waitlist"
        subtitle="Interested in a personalised online consultation with Luke? Share your details — our team will find the earliest available slot."
        backTo="/"
        backLabel="Back"
        footer={null}
      >
        <WaitlistInlineForm onCancel={() => setSelectedPathId(null)} />
      </ConsultFlowShell>
    );
  }

  return (
    <ConsultFlowShell
      step={1}
      title="Choose a consultation option that's best for you"
      subtitle="Your first step toward understanding and rebooting your health. Pick how you'd like to begin — we help you find a way from knowledge to action."
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
          onClick={() => handlePathSelect(path.id)}
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
