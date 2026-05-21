import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Video, ChevronRight, Phone } from 'lucide-react';
import {
  headNutritionistService,
  expertCategories,
  specialtyServices,
  buildConsultSelection,
  attachScheduling,
} from '../data/consultServices';
import ConsultBookingCalendar from './ConsultBookingCalendar';
import './Hero.css';

/**
 * Streamlined consult booking — target ≤3 clicks:
 * 1. Open drawer (header CTA)
 * 2. Select service / mode (prices visible upfront)
 * 3. Continue to secure checkout
 */
const ConsultBookingDrawer = ({ isOpen = false, onClose = () => {}, variant = 'drawer' }) => {
  const navigate = useNavigate();
  const [selectedOptionId, setSelectedOptionId] = React.useState(null);
  const [activeCategoryId, setActiveCategoryId] = React.useState(null);
  const [selectedExpertId, setSelectedExpertId] = React.useState(null);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = React.useState(null);
  const [preferredDate, setPreferredDate] = React.useState(undefined);
  const [preferredTime, setPreferredTime] = React.useState(null);

  const activeCategory = expertCategories.find((c) => c.id === activeCategoryId);
  const selectedExpert = activeCategory?.experts.find((e) => e.id === selectedExpertId);
  const selectedSpecialty = specialtyServices.find((s) => s.id === selectedSpecialtyId);
  const selectedNutritionistOption = headNutritionistService.options.find(
    (o) => o.id === selectedOptionId,
  );

  const hasSelection =
    selectedNutritionistOption || selectedExpert || selectedSpecialty;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSelectedOptionId(null);
      setActiveCategoryId(null);
      setSelectedExpertId(null);
      setSelectedSpecialtyId(null);
      setPreferredDate(undefined);
      setPreferredTime(null);
    }
  }, [isOpen]);

  const clearOtherSelections = (type) => {
    if (type !== 'nutritionist') setSelectedOptionId(null);
    if (type !== 'expert') {
      setActiveCategoryId(null);
      setSelectedExpertId(null);
    }
    if (type !== 'specialty') setSelectedSpecialtyId(null);
  };

  const resetScheduling = () => {
    setPreferredDate(undefined);
    setPreferredTime(null);
  };

  const pickNutritionistOption = (optionId) => {
    clearOtherSelections('nutritionist');
    resetScheduling();
    setSelectedOptionId(optionId);
  };

  const pickCategory = (categoryId) => {
    clearOtherSelections('expert');
    resetScheduling();
    setActiveCategoryId(categoryId);
    setSelectedExpertId(null);
  };

  const pickExpert = (expertId) => {
    resetScheduling();
    setSelectedExpertId(expertId);
    setSelectedOptionId(null);
    setSelectedSpecialtyId(null);
  };

  const pickSpecialty = (id) => {
    clearOtherSelections('specialty');
    resetScheduling();
    setSelectedSpecialtyId(id);
  };

  const buildPayload = () => {
    if (selectedNutritionistOption) {
      return buildConsultSelection({
        serviceId: headNutritionistService.id,
        serviceTitle: headNutritionistService.title,
        optionId: selectedNutritionistOption.id,
        optionTitle: selectedNutritionistOption.title,
        duration: selectedNutritionistOption.duration,
        price: selectedNutritionistOption.price,
        priceValue: selectedNutritionistOption.priceValue,
        mode: selectedNutritionistOption.mode,
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
    if (selectedSpecialty) {
      const numeric = parseInt(selectedSpecialty.price.replace(/\D/g, ''), 10) || null;
      return buildConsultSelection({
        serviceId: selectedSpecialty.id,
        serviceTitle: selectedSpecialty.title,
        optionTitle: selectedSpecialty.title,
        duration: selectedSpecialty.duration,
        price: selectedSpecialty.price,
        priceValue: numeric,
        mode: 'As scheduled',
      });
    }
    return null;
  };

  const selection = buildPayload();
  const scheduledSelection =
    selection && preferredDate && preferredTime
      ? attachScheduling(selection, preferredDate, preferredTime)
      : selection;

  const schedulingComplete = Boolean(preferredDate && preferredTime);

  const handleCheckout = () => {
    if (!selection || !preferredDate || !preferredTime) return;
    const finalConsult = attachScheduling(selection, preferredDate, preferredTime);
    onClose();
    navigate('/payment', { state: { consult: finalConsult } });
  };

  const panel = (
    <>
      <header className="consult-head">
        <div>
          <p className="consult-eyebrow">Select service</p>
          <h2 className="consult-title">Book a Consultation</h2>
          <p className="consult-steps-hint">
            Pick a service, then choose date and time on the calendar before checkout.
          </p>
        </div>
        {variant === 'drawer' && (
          <button
            type="button"
            className="consult-close"
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        )}
      </header>

      <div className="consult-booking-body">
        <section className="consult-booking-section" aria-labelledby="consult-head-nutritionist">
          <h3 id="consult-head-nutritionist" className="consult-section-label">
            {headNutritionistService.title}
          </h3>
          <p className="consult-section-desc">{headNutritionistService.description}</p>
          <ul className="consult-option-list">
            {headNutritionistService.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const ModeIcon = opt.mode === 'Virtual' ? Video : MapPin;
              return (
                <li key={opt.id}>
                  <button
                    type="button"
                    className={`consult-option-card${isSelected ? ' is-selected' : ''}`}
                    onClick={() => pickNutritionistOption(opt.id)}
                    aria-pressed={isSelected}
                  >
                    <div className="consult-option-main">
                      <span className="consult-option-title">{opt.title}</span>
                      <span className="consult-option-meta">
                        <ModeIcon size={12} aria-hidden />
                        {opt.mode} · <Clock size={12} aria-hidden /> {opt.duration}
                      </span>
                    </div>
                    <span className="consult-option-price">{opt.price}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="consult-booking-section" aria-labelledby="consult-experts">
          <h3 id="consult-experts" className="consult-section-label">
            Experts by Category
          </h3>
          <div className="consult-category-tabs" role="tablist">
            {expertCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategoryId === cat.id}
                className={`consult-category-tab${
                  activeCategoryId === cat.id ? ' is-active' : ''
                }`}
                onClick={() => pickCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {activeCategory && (
            <ul className="consult-expert-list">
              {activeCategory.experts.map((expert) => {
                const isSelected = selectedExpertId === expert.id;
                return (
                  <li key={expert.id}>
                    <button
                      type="button"
                      className={`consult-expert-card${isSelected ? ' is-selected' : ''}`}
                      onClick={() => pickExpert(expert.id)}
                      aria-pressed={isSelected}
                    >
                      <div>
                        <span className="consult-expert-name">{expert.name}</span>
                        <span className="consult-expert-role">{expert.role}</span>
                      </div>
                      <span className="consult-expert-cta">
                        Request Consult <ChevronRight size={14} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section className="consult-booking-section" aria-labelledby="consult-specialty">
          <h3 id="consult-specialty" className="consult-section-label">
            More Consultation Services
          </h3>
          <ul className="consult-specialty-list">
            {specialtyServices.map((svc) => {
              const isSelected = selectedSpecialtyId === svc.id;
              return (
                <li key={svc.id}>
                  <button
                    type="button"
                    className={`consult-specialty-row${isSelected ? ' is-selected' : ''}`}
                    onClick={() => pickSpecialty(svc.id)}
                    aria-pressed={isSelected}
                  >
                    <span className="consult-specialty-title">{svc.title}</span>
                    <span className="consult-specialty-meta">{svc.duration}</span>
                    <span className="consult-specialty-price">{svc.price}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        {hasSelection && (
          <section
            className="consult-booking-section consult-booking-section--calendar"
            aria-labelledby="consult-schedule-heading"
          >
            <ConsultBookingCalendar
              selectedDate={preferredDate}
              onSelectDate={(d) => {
                setPreferredDate(d);
                setPreferredTime(null);
              }}
              selectedTime={preferredTime}
              onSelectTime={setPreferredTime}
            />
          </section>
        )}

        <p className="consult-fineprint consult-booking-note">
          Consultations focus on lifestyle guidance — not meal plans or medical prescriptions.
          Upload reports before your session. Changes require 24-hour notice.
        </p>
      </div>

      <footer className="consult-booking-footer">
        {hasSelection && scheduledSelection && (
          <div className="consult-selection-summary" role="status">
            <p className="consult-summary-label">Your selection</p>
            <p className="consult-summary-value">
              {scheduledSelection.label}
              {scheduledSelection.price &&
                scheduledSelection.price !== 'Confirmed on booking' && (
                  <span className="consult-summary-price"> · {scheduledSelection.price}</span>
                )}
            </p>
            {!schedulingComplete && (
              <p className="consult-summary-pending">Select a date and time slot to continue.</p>
            )}
          </div>
        )}
        <button
          type="button"
          className="consult-submit"
          disabled={!hasSelection || !schedulingComplete}
          onClick={handleCheckout}
        >
          Continue to Secure Checkout
        </button>
        <a href="tel:18001020253" className="consult-hotline">
          <Phone size={14} aria-hidden />
          Need help? 1800 102 0253
        </a>
      </footer>
    </>
  );

  if (variant === 'page') {
    return <div className="consult-booking-page">{panel}</div>;
  }

  return (
    <div
      id="consult-drawer"
      className={`consult-drawer${isOpen ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={isOpen ? 'false' : 'true'}
      aria-label="Book a consultation"
    >
      <button
        type="button"
        className="consult-scrim"
        aria-label="Close booking panel"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />
      <aside className="consult-panel consult-panel--booking">{panel}</aside>
    </div>
  );
};

export default ConsultBookingDrawer;
