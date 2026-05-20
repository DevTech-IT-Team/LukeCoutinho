import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ConsultFlowShell from '../components/consult/ConsultFlowShell';
import {
  consultEntryPaths,
  headNutritionistService,
  expertCategories,
  buildConsultSelection,
} from '../data/consultServices';

const BookConsultService = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathId = location.state?.pathId;
  const path = consultEntryPaths.find((p) => p.id === pathId);

  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [selectedExpertId, setSelectedExpertId] = useState(null);

  useEffect(() => {
    if (!pathId) navigate('/book-consult', { replace: true });
  }, [pathId, navigate]);

  if (!path) return null;

  const activeCategory = expertCategories.find((c) => c.id === activeCategoryId);
  const selectedExpert = activeCategory?.experts.find((e) => e.id === selectedExpertId);
  const selectedOption = headNutritionistService.options.find((o) => o.id === selectedOptionId);

  const hasSelection =
    path.flow === 'waitlist' ||
    (path.flow === 'nutritionist' && selectedOption) ||
    (path.flow === 'expert' && selectedExpert);

  const buildPayload = () => {
    if (path.flow === 'waitlist') {
      return buildConsultSelection({
        serviceId: 'luke-waitlist',
        serviceTitle: path.title,
        optionTitle: 'Waitlist request',
        duration: 'As available',
        price: 'Confirmed by team',
        priceValue: null,
        mode: 'Online',
      });
    }
    if (selectedOption) {
      return buildConsultSelection({
        serviceId: headNutritionistService.id,
        serviceTitle: headNutritionistService.title,
        optionId: selectedOption.id,
        optionTitle: selectedOption.title,
        duration: selectedOption.duration,
        price: selectedOption.price,
        priceValue: selectedOption.priceValue,
        mode: selectedOption.mode,
      });
    }
    if (selectedExpert && activeCategory) {
      return buildConsultSelection({
        serviceId: `expert-${selectedExpert.id}`,
        serviceTitle: 'Request Consult',
        optionTitle: activeCategory.label,
        duration: '20–25 min',
        price: 'Confirmed on booking',
        priceValue: null,
        mode: 'Virtual or In-person',
        expertId: selectedExpert.id,
        expertName: selectedExpert.name,
        categoryLabel: activeCategory.label,
      });
    }
    return null;
  };

  const goNext = () => {
    const consult = buildPayload();
    if (!consult) return;
    if (path.needsSchedule) {
      navigate('/book-consult/schedule', { state: { pathId, consult } });
    } else {
      navigate('/payment', { state: { consult, pathId } });
    }
  };

  return (
    <ConsultFlowShell
      step={2}
      title="Select service"
      subtitle={
        path.flow === 'nutritionist'
          ? headNutritionistService.description
          : path.flow === 'expert'
            ? 'Choose a category, then your expert.'
            : 'Our team will reach out when a slot opens.'
      }
      backTo="/book-consult"
      backLabel="Back"
      footer={
        <>
          <Link to="/book-consult" className="bcf-btn-back">
            Back
          </Link>
          <button
            type="button"
            className="bcf-btn-next"
            disabled={!hasSelection}
            onClick={goNext}
          >
            {path.needsSchedule ? 'Next step' : 'Continue to checkout'}
            <ArrowRight size={14} />
          </button>
        </>
      }
    >
      {path.flow === 'nutritionist' && (
        <>
          <p className="bcf-section-title">{headNutritionistService.title}</p>
          {headNutritionistService.options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`bcf-service-row${selectedOptionId === opt.id ? ' is-selected' : ''}`}
              onClick={() => {
                setSelectedOptionId(opt.id);
                setSelectedExpertId(null);
              }}
              aria-pressed={selectedOptionId === opt.id}
            >
              <div className="bcf-service-row-main">
                <h4>{opt.title}</h4>
                <span>
                  {opt.mode} · {opt.duration}
                </span>
              </div>
              <span className="bcf-service-price">{opt.price}</span>
            </button>
          ))}
        </>
      )}

      {path.flow === 'expert' && (
        <>
          <p className="bcf-section-title">Experts by category</p>
          <div className="bcf-tabs" role="tablist">
            {expertCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                className={`bcf-tab${activeCategoryId === cat.id ? ' is-active' : ''}`}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSelectedExpertId(null);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {activeCategory?.experts.map((expert) => (
            <button
              key={expert.id}
              type="button"
              className={`bcf-service-row${selectedExpertId === expert.id ? ' is-selected' : ''}`}
              onClick={() => setSelectedExpertId(expert.id)}
              aria-pressed={selectedExpertId === expert.id}
            >
              <div className="bcf-service-row-main">
                <h4>{expert.name}</h4>
                <span>{expert.role}</span>
              </div>
              <span className="bcf-service-price">Request</span>
            </button>
          ))}
        </>
      )}

      {path.flow === 'waitlist' && (
        <div className="bcf-waitlist-box">
          <p>
            You are joining the waitlist for a personalised consultation with Luke. No payment
            is required now — our team will contact you at the earliest available slot.
          </p>
        </div>
      )}
    </ConsultFlowShell>
  );
};

export default BookConsultService;
