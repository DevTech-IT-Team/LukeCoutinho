import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Check, ArrowRight, Calendar, Phone, Mail } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const course = location.state?.course || null;

  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const orderTitle = course ? course.title : 'Individual Consultation';
  const orderEyebrow = course ? `Self-Paced · ${course.level}` : 'Consultation';
  const orderPrice = course ? course.price : '₹4,999';
  const continueHref = course ? `/course/${course.id}` : '/learn/learninghub/home';
  const continueLabel = course ? 'Begin Learning' : 'Browse Courses';

  return (
    <div className="bg-[#FDFAF5] text-[#1A1410]">
      {/* ============== HERO ============== */}
      <section className="relative bg-[#1A1410] text-[#FDFAF5] overflow-hidden">
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 pt-28 lg:pt-32 pb-16 lg:pb-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#E8640A]/40 mb-8">
            <Check size={24} className="text-[#E8640A]" strokeWidth={1.5} />
          </div>

          <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-5">
            Payment Confirmed
          </p>
          <h1 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(40px,5vw,72px)] leading-[1] tracking-[0.005em]">
            Welcome,
            <br />
            <span className="text-white/55">your journey begins.</span>
          </h1>

          <p className="mt-7 font-[Arial] text-[14px] leading-[1.85] text-white/65 max-w-[520px] mx-auto">
            A confirmation has been sent to your email. {course ? 'Your course is now in your library — return to it whenever you need.' : 'Our team will call you within 24 hours to schedule your consultation.'}
          </p>
        </div>
      </section>

      {/* ============== ORDER SUMMARY ============== */}
      <section>
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-16 lg:py-20">
          <div className="border border-[rgba(26,20,16,0.1)] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {course && (
                <div className="relative md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden bg-[#1A1410]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className={`p-8 lg:p-10 ${course ? 'md:col-span-3' : 'md:col-span-5'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="block w-8 h-px bg-[#E8640A]" />
                  <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                    {orderEyebrow}
                  </p>
                </div>

                <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(28px,2.8vw,38px)] leading-[1.1] mb-8">
                  {orderTitle}
                </h2>

                <div className="grid grid-cols-2 gap-y-6 gap-x-8 pt-6 border-t border-[rgba(26,20,16,0.08)]">
                  <div>
                    <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)] mb-2">
                      Amount Paid
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
                      Transaction ID
                    </p>
                    <p className="font-[Arial] text-[13px] tracking-[0.18em] text-[#1A1410]">
                      TXN-{Math.floor(Math.random() * 9_000_000_000) + 1_000_000_000}
                    </p>
                  </div>
                  <div>
                    <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)] mb-2">
                      Status
                    </p>
                    <p className="inline-flex items-center gap-2 font-[Arial] text-[11px] uppercase tracking-[0.32em] text-[#1A1410]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8640A]" />
                      Confirmed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHAT'S NEXT ============== */}
      <section className="bg-[#FAF6EE] border-y border-[rgba(26,20,16,0.08)]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-16 lg:py-20">
          <div className="text-center mb-12">
            <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-4">
              What's next
            </p>
            <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(30px,3.4vw,44px)] leading-[1.05]">
              Three quiet steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                Icon: Mail,
                title: 'Email Confirmation',
                copy: 'A detailed receipt with your booking reference is on its way to your inbox.',
              },
              {
                Icon: Phone,
                title: course ? 'Onboarding Call' : 'Phone Call',
                copy: course
                  ? 'Our concierge will call within 24 hours to walk you through the platform.'
                  : 'Our team will call within 24 hours to schedule your consultation.',
              },
              {
                Icon: Calendar,
                title: course ? 'Begin Anytime' : 'Consultation',
                copy: course
                  ? 'Open your library whenever you are ready — your access is lifetime.'
                  : 'Attend your personalised consultation at the scheduled time.',
              },
            ].map(({ Icon, title, copy }, i) => (
              <div key={title} className="border-t border-[rgba(26,20,16,0.12)] pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon size={20} className="text-[#E8640A]" strokeWidth={1.25} />
                  <span className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[rgba(26,20,16,0.4)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[22px] leading-[1.15] mb-2">
                  {title}
                </h3>
                <p className="font-[Arial] text-[13px] leading-[1.8] text-[rgba(26,20,16,0.65)]">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="bg-[#1A1410] text-[#FDFAF5]">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
            <div className="lg:col-span-7">
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-5">
                Need a hand?
              </p>
              <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(30px,3.4vw,48px)] leading-[1.05]">
                We're here, quietly.
              </h2>
              <p className="mt-5 font-[Arial] text-[14px] leading-[1.85] text-white/65 max-w-[480px]">
                Questions about your booking, your access or your next step? Our team responds within the day.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to={continueHref}
                className="group inline-flex items-center justify-between bg-[#E8640A] hover:bg-white hover:text-[#1A1410] text-white px-6 py-4 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-all duration-500"
              >
                {continueLabel}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
              <a
                href="mailto:consult@lukecoutinho.com"
                className="inline-flex items-center justify-between border border-white/15 hover:border-white text-white px-6 py-4 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-colors duration-500"
              >
                Email Support
                <Mail size={14} />
              </a>
              <a
                href="tel:+911287433472"
                className="inline-flex items-center justify-between border border-white/15 hover:border-white text-white px-6 py-4 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-colors duration-500"
              >
                Call Support
                <Phone size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentSuccess;
