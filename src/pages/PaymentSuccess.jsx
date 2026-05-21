import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import CrossSellRail from '../components/conversion/CrossSellRail';
import { trackCheckoutCompleted } from '../lib/analytics';
import { resolveStreamFromCheckoutState } from '../config/revenueStreams';

const PaymentSuccess = () => {
  const location = useLocation();
  const course = location.state?.course || null;
  const consult = location.state?.consult || null;
  const submissionType = location.state?.submissionType || (course ? 'course' : consult ? 'consult' : 'default');

  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const isWaitlist = submissionType === 'waitlist';
  const isEnquiry = submissionType === 'enquiry';
  const isCourse = Boolean(course);

  const eyebrow = isWaitlist
    ? 'Waitlist'
    : isEnquiry
      ? 'Enquiry received'
      : isCourse
        ? `Self-Paced · ${course.level}`
        : 'Consultation';

  const headline = isWaitlist
    ? "You're on the list."
    : isEnquiry
      ? 'Thank you — we received your enquiry.'
      : 'Welcome, your journey begins.';

  const subcopy = isWaitlist
    ? 'Our team will contact you at the earliest available slot for a personalised consultation with Luke. A confirmation email is on its way.'
    : isEnquiry
      ? 'A member of our corporate wellness team will respond within 24–48 hours.'
      : isCourse
        ? 'A confirmation has been sent to your email. Your course is now in your library — return whenever you are ready.'
        : 'A confirmation has been sent to your email. Our integrative team will follow up within 24–48 hours.';

  const orderTitle = isCourse
    ? course.title
    : isWaitlist
      ? "Luke's Exclusive Waitlist"
      : isEnquiry
        ? 'Corporate Wellness Enquiry'
        : consult?.label || 'Individual Consultation';

  const orderPrice = isCourse ? course.price : isWaitlist || isEnquiry ? 'No payment due' : consult?.price || '—';
  const statusLabel = isWaitlist || isEnquiry ? 'Submitted' : 'Confirmed';
  const heroTag = isWaitlist || isEnquiry ? 'Request received' : 'Payment confirmed';

  const continueHref = isCourse
    ? `/course/${course.id}`
    : isEnquiry
      ? '/Workshop/CorporateTalks/Home'
      : '/book-consult';
  const continueLabel = isCourse
    ? 'Begin learning'
    : isEnquiry
      ? 'Back to corporate wellness'
      : 'Book another consult';

  const successStream =
    resolveStreamFromCheckoutState(location.state) ||
    (isCourse ? 'lms' : isEnquiry ? 'corporate' : 'consults');

  useEffect(() => {
    if (!isWaitlist && !isEnquiry) {
      const productId = course?.id || consult?.serviceId || 'consult';
      trackCheckoutCompleted(successStream, productId);
    }
  }, [successStream, course, consult, isWaitlist, isEnquiry]);

  return (
    <div className="bg-[#FDFAF5] text-[#1A1410]">
      <section className="relative bg-[#1A1410] text-[#FDFAF5] overflow-hidden">
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 pt-28 lg:pt-32 pb-16 lg:pb-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#E8640A]/40 mb-8">
            <Check size={24} className="text-[#E8640A]" strokeWidth={1.5} />
          </div>

          <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-5">
            {heroTag}
          </p>
          <h1 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(40px,5vw,72px)] leading-[1] tracking-[0.005em]">
            {headline}
          </h1>

          <p className="mt-7 font-[Arial] text-[14px] leading-[1.85] text-white/65 max-w-[520px] mx-auto">
            {subcopy}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-16 lg:py-20">
          <div className="border border-[rgba(26,20,16,0.1)] bg-white p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#E8640A]" />
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                {eyebrow}
              </p>
            </div>

            <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(28px,2.8vw,38px)] leading-[1.1] mb-8">
              {orderTitle}
            </h2>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8 pt-6 border-t border-[rgba(26,20,16,0.08)]">
              <div>
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)] mb-2">
                  {isWaitlist || isEnquiry ? 'Fee' : 'Amount'}
                </p>
                <p className="font-['EB_Garamond',Georgia,serif] italic text-[24px] leading-none">
                  {orderPrice}
                </p>
              </div>
              <div>
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)] mb-2">
                  Date
                </p>
                <p className="font-['EB_Garamond',Georgia,serif] italic text-[20px] leading-none">
                  {today}
                </p>
              </div>
              <div>
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)] mb-2">
                  Status
                </p>
                <p className="inline-flex items-center gap-2 font-[Arial] text-[11px] uppercase tracking-[0.32em] text-[#1A1410]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8640A]" />
                  {statusLabel}
                </p>
              </div>
            </div>
          </div>

          <CrossSellRail currentStream={successStream} />
        </div>
      </section>

      <section className="bg-[#1A1410] text-[#FDFAF5]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-16 lg:py-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-[Arial] text-[14px] text-white/65 max-w-[400px]">
            Move from struggle to strength — our integrative team is here when you are ready for the next step.
          </p>
          <Link
            to={continueHref}
            className="group inline-flex items-center gap-4 bg-[#E8640A] hover:bg-white hover:text-[#1A1410] text-white px-8 py-4 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-all duration-500 shrink-0"
          >
            {continueLabel}
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PaymentSuccess;
