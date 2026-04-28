import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Shield,
  Lock,
  Check,
  Calendar,
  User,
  Mail,
  Phone,
} from 'lucide-react';

const consultationPlans = [
  {
    id: 'individual',
    name: 'Individual Consultation',
    price: '₹4,999',
    duration: '60 minutes',
    features: [
      'One-on-one session',
      'Personalised health plan',
      'Follow-up support',
      'Nutrition guidance',
    ],
  },
  {
    id: 'family',
    name: 'Family Wellness',
    price: '₹7,999',
    duration: '90 minutes',
    features: [
      'Family health assessment',
      'Group consultation',
      'Customised family plan',
      'Ongoing support',
    ],
  },
  {
    id: 'corporate',
    name: 'Corporate Program',
    price: 'Custom Quote',
    duration: 'Custom',
    features: [
      'Team assessment',
      'Corporate wellness plan',
      'On-site sessions',
      'Progress tracking',
    ],
  },
];

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const course = location.state?.course || null;

  const [selectedPlan, setSelectedPlan] = useState('individual');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
  });

  const activePlan = consultationPlans.find((p) => p.id === selectedPlan);
  const orderLabel = course ? course.title : activePlan?.name;
  const orderPrice = course ? course.price : activePlan?.price;
  const orderEyebrow = course ? `Self-Paced · ${course.level}` : 'Consultation';
  const backHref = course ? `/course/${course.id}` : '/book-consult';
  const backLabel = course ? 'Back to Course' : 'Back to Consultation';

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate('/payment-success', { state: course ? { course } : undefined });
    }, 1200);
  };

  const updateField = (key) => (e) =>
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const labelClass =
    'block font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)] mb-2';
  const inputBase =
    'w-full bg-transparent border-b border-[rgba(26,20,16,0.18)] focus:border-[#E8640A] focus:outline-none py-3 font-[Arial] text-[14px] text-[#1A1410] placeholder:text-[rgba(26,20,16,0.3)] transition-colors';
  const inputWithIcon = `${inputBase} pl-7`;

  return (
    <div className="bg-[#FDFAF5] text-[#1A1410]">
      {/* ============== HERO ============== */}
      <section className="relative bg-[#1A1410] text-[#FDFAF5] overflow-hidden">
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 pt-28 lg:pt-32 pb-14 lg:pb-16">
          <Link
            to={backHref}
            className="inline-flex items-center gap-2 font-[Arial] text-[10px] uppercase tracking-[0.4em] text-white/65 hover:text-[#E8640A] transition-colors mb-10"
          >
            <ArrowLeft size={14} /> {backLabel}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-5">
                <span className="block w-8 h-px bg-[#E8640A]" />
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                  Secure Checkout
                </p>
              </div>
              <h1 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,4.6vw,64px)] leading-[1.02] tracking-[0.005em]">
                Complete your
                <br />
                <span className="text-white/55">enrolment.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-center gap-3 lg:justify-end font-[Arial] text-[10px] uppercase tracking-[0.4em] text-white/55">
              <Lock size={14} className="text-[#E8640A]" />
              256-bit Encrypted
            </div>
          </div>
        </div>
      </section>

      {/* ============== BODY ============== */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* ===== Order summary (left) ===== */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-5">
                {course ? 'Your Course' : 'Select a Plan'}
              </p>

              {course ? (
                <div className="border border-[rgba(26,20,16,0.1)] bg-white">
                  <div className="aspect-[4/3] overflow-hidden bg-[#1A1410]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-4">
                      {orderEyebrow}
                    </p>
                    <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[26px] leading-[1.15] tracking-[0.005em] mb-1.5">
                      {course.title}
                    </h3>
                    <p className="font-['EB_Garamond',Georgia,serif] italic text-[15px] leading-snug text-[rgba(26,20,16,0.55)] mb-7">
                      {course.subtitle}
                    </p>

                    <ul className="pb-6 border-b border-[rgba(26,20,16,0.08)] font-[Arial] text-[12.5px] leading-[1.5] text-[rgba(26,20,16,0.75)] space-y-2.5">
                      <li className="flex items-start gap-3">
                        <Check size={14} className="text-[#E8640A] shrink-0 mt-[3px]" strokeWidth={1.75} />
                        <span>{course.lessons} modules · {course.duration}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={14} className="text-[#E8640A] shrink-0 mt-[3px]" strokeWidth={1.75} />
                        <span>Lifetime access on web & mobile</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={14} className="text-[#E8640A] shrink-0 mt-[3px]" strokeWidth={1.75} />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>

                    <div className="pt-6 flex items-end justify-between">
                      <div>
                        <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.55)] mb-1">
                          Total
                        </p>
                        <p className="font-['EB_Garamond',Georgia,serif] italic text-[40px] leading-none">
                          {course.price}
                        </p>
                      </div>
                      <p className="font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[rgba(26,20,16,0.5)] pb-1">
                        GST included
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {consultationPlans.map((plan) => {
                    const isActive = selectedPlan === plan.id;
                    return (
                      <button
                        type="button"
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`w-full text-left p-6 border transition-all duration-500 ${
                          isActive
                            ? 'bg-[#1A1410] text-white border-[#1A1410]'
                            : 'bg-white text-[#1A1410] border-[rgba(26,20,16,0.1)] hover:border-[#1A1410]/40'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <p
                              className={`font-[Arial] text-[10px] uppercase tracking-[0.4em] mb-2 ${
                                isActive ? 'text-[#E8640A]' : 'text-[rgba(26,20,16,0.5)]'
                              }`}
                            >
                              {plan.duration}
                            </p>
                            <h3 className="font-['EB_Garamond',Georgia,serif] italic text-[24px] leading-[1.1]">
                              {plan.name}
                            </h3>
                          </div>
                          <span
                            className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isActive ? 'border-[#E8640A]' : 'border-[rgba(26,20,16,0.25)]'
                            }`}
                          >
                            {isActive && <span className="w-2 h-2 rounded-full bg-[#E8640A]" />}
                          </span>
                        </div>

                        <p className="font-['EB_Garamond',Georgia,serif] italic text-[28px] leading-none mb-5">
                          {plan.price}
                        </p>

                        <ul
                          className={`space-y-2 font-[Arial] text-[12px] ${
                            isActive ? 'text-white/70' : 'text-[rgba(26,20,16,0.65)]'
                          }`}
                        >
                          {plan.features.map((f) => (
                            <li key={f} className="flex items-center gap-2">
                              <Check size={12} className="text-[#E8640A]" strokeWidth={2} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </button>
                    );
                  })}
                </div>
              )}
            </aside>

            {/* ===== Form (right) ===== */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Personal */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="block w-8 h-px bg-[#E8640A]" />
                    <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                      Your Details
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <div className="relative">
                        <User
                          size={14}
                          className="absolute left-0 top-1/2 -translate-y-1/2 text-[rgba(26,20,16,0.4)]"
                        />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={updateField('name')}
                          className={inputWithIcon}
                          placeholder="Anaya Mehra"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Email Address</label>
                      <div className="relative">
                        <Mail
                          size={14}
                          className="absolute left-0 top-1/2 -translate-y-1/2 text-[rgba(26,20,16,0.4)]"
                        />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={updateField('email')}
                          className={inputWithIcon}
                          placeholder="anaya@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <div className="relative">
                        <Phone
                          size={14}
                          className="absolute left-0 top-1/2 -translate-y-1/2 text-[rgba(26,20,16,0.4)]"
                        />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={updateField('phone')}
                          className={inputWithIcon}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {!course && (
                      <div>
                        <label className={labelClass}>Preferred Date</label>
                        <div className="relative">
                          <Calendar
                            size={14}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-[rgba(26,20,16,0.4)]"
                          />
                          <input type="date" required className={inputWithIcon} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Method */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="block w-8 h-px bg-[#E8640A]" />
                    <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                      Payment Method
                    </p>
                  </div>

                  <div className="grid grid-cols-3 border border-[rgba(26,20,16,0.1)] mb-8">
                    {[
                      { id: 'card', label: 'Card', Icon: CreditCard },
                      { id: 'upi', label: 'UPI', Icon: Shield },
                      { id: 'netbanking', label: 'Net Banking', Icon: Lock },
                    ].map(({ id, label, Icon }, i) => {
                      const isActive = paymentMethod === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setPaymentMethod(id)}
                          className={`relative py-5 flex flex-col items-center gap-2 transition-all duration-500 ${
                            i > 0 ? 'border-l border-[rgba(26,20,16,0.1)]' : ''
                          } ${
                            isActive
                              ? 'bg-[#1A1410] text-white'
                              : 'bg-white text-[#1A1410] hover:bg-[#FAF6EE]'
                          }`}
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.25}
                            className={isActive ? 'text-[#E8640A]' : 'text-[#1A1410]/60'}
                          />
                          <span className="font-[Arial] text-[10px] uppercase tracking-[0.32em]">
                            {label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
                      <div className="md:col-span-2">
                        <label className={labelClass}>Card Number</label>
                        <input
                          type="text"
                          required
                          value={formData.cardNumber}
                          onChange={updateField('cardNumber')}
                          className={inputBase}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Expiry</label>
                        <input
                          type="text"
                          required
                          value={formData.expiry}
                          onChange={updateField('expiry')}
                          className={inputBase}
                          placeholder="MM / YY"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>CVV</label>
                        <input
                          type="text"
                          required
                          value={formData.cvv}
                          onChange={updateField('cvv')}
                          className={inputBase}
                          placeholder="123"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div>
                      <label className={labelClass}>UPI ID</label>
                      <input
                        type="text"
                        required
                        value={formData.upiId}
                        onChange={updateField('upiId')}
                        className={inputBase}
                        placeholder="yourname@upi"
                      />
                    </div>
                  )}

                  {paymentMethod === 'netbanking' && (
                    <p className="font-['EB_Garamond',Georgia,serif] italic text-[18px] text-[rgba(26,20,16,0.7)]">
                      Continue to select your bank on the next step.
                    </p>
                  )}
                </div>

                {/* Total + submit */}
                <div className="bg-[#1A1410] text-white p-8 lg:p-10">
                  <div className="flex items-end justify-between mb-8 gap-6">
                    <div>
                      <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-2">
                        {course ? 'Course' : 'Plan'}
                      </p>
                      <p className="font-['EB_Garamond',Georgia,serif] italic text-[24px] leading-[1.15]">
                        {orderLabel}
                      </p>
                    </div>
                    <p className="font-['EB_Garamond',Georgia,serif] italic text-[44px] leading-none whitespace-nowrap">
                      {orderPrice}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 bg-[#E8640A] hover:bg-white hover:text-[#1A1410] text-white py-5 font-[Arial] text-[10px] uppercase tracking-[0.4em] transition-all duration-500"
                  >
                    Process Payment
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </button>

                  <div className="mt-5 flex items-center justify-center gap-2 font-[Arial] text-[10px] uppercase tracking-[0.32em] text-white/45">
                    <Shield size={12} className="text-[#E8640A]" />
                    Encrypted & secure
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
