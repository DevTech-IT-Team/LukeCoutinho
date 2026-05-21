import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import ConsultFlowShell from '../components/consult/ConsultFlowShell';
import ConsultBookingCalendar from '../components/ConsultBookingCalendar';
import { attachScheduling } from '../data/consultServices';

const BookConsultSchedule = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const consult = location.state?.consult;
  const pathId = location.state?.pathId;

  useEffect(() => {
    if (!consult) navigate('/book-consult', { replace: true });
  }, [consult, navigate]);

  const [preferredDate, setPreferredDate] = useState(undefined);
  const [preferredTime, setPreferredTime] = useState(null);

  useEffect(() => {
    if (!consult) return;
    if (consult.preferredDateIso) {
      setPreferredDate(parseISO(consult.preferredDateIso));
      setPreferredTime(consult.preferredTime ?? null);
    }
  }, [consult]);

  if (!consult) return null;

  const ready = Boolean(preferredDate && preferredTime);

  const goCheckout = () => {
    if (!ready) return;
    const finalConsult = attachScheduling(consult, preferredDate, preferredTime);
    navigate('/payment', { state: { consult: finalConsult, pathId } });
  };

  return (
    <ConsultFlowShell
      step={3}
      title="Pick your preferred date & time"
      subtitle="Choose an available slot for your consultation. Times are shown in your local timezone."
      backTo="/book-consult/service"
      backLabel="Back"
      footer={
        <>
          <Link
            to="/book-consult/service"
            state={{ pathId }}
            className="bcf-btn-back"
          >
            Back
          </Link>
          <button
            type="button"
            className="bcf-btn-next"
            disabled={!ready}
            onClick={goCheckout}
          >
            Confirm booking
            <ArrowRight size={14} />
          </button>
        </>
      }
    >
      <div className="bcf-schedule-wrap">
        <ConsultBookingCalendar
          selectedDate={preferredDate}
          onSelectDate={(d) => {
            setPreferredDate(d);
            setPreferredTime(null);
          }}
          selectedTime={preferredTime}
          onSelectTime={setPreferredTime}
        />
      </div>
    </ConsultFlowShell>
  );
};

export default BookConsultSchedule;
