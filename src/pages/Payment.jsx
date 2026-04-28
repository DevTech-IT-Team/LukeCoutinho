import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Check, Calendar, User, Mail, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import lcLogo from '../assets/LClogoo.png';
import heroPoster from '../assets/wellness.jpg';
import '../components/Hero.css';

const navigationLinks = [
  { label: 'Heal from Within', to: '/about/approach' },
  { label: 'Wellness Programs', to: '/programs/signature-wellness' },
  { label: 'Masterclass', to: '/masterclass' },
  { label: 'Courses', to: '/learn/learninghub/home' },
  { label: 'Recipes', to: '/bharat/dish' },
  { label: 'Podcast', to: '/Podcast/Podcast' },
  { label: 'Consult', to: '/book-consult' },
];

const Payment = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [consultStatus, setConsultStatus] = useState('idle');
  const [selectedPlan, setSelectedPlan] = useState('individual');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: ''
  });

  const plans = [
    {
      id: 'individual',
      name: 'Individual Consultation',
      price: '₹4,999',
      duration: '60 minutes',
      descriptor: 'Private advisory',
      features: ['One-on-one session', 'Personalized health plan', 'Follow-up support', 'Nutrition guidance']
    },
    {
      id: 'family',
      name: 'Family Wellness',
      price: '₹7,999',
      duration: '90 minutes',
      descriptor: 'Shared care',
      features: ['Family health assessment', 'Group consultation', 'Customized family plan', 'Ongoing support']
    },
    {
      id: 'corporate',
      name: 'Corporate Program',
      price: 'Custom Quote',
      duration: 'Custom',
      descriptor: 'Enterprise wellness',
      features: ['Team assessment', 'Corporate wellness plan', 'On-site sessions', 'Progress tracking']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo payment processing
    setTimeout(() => {
      navigate('/payment-success');
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsConsultOpen(false);
      }
    };

    document.body.style.overflow = isMenuOpen || isConsultOpen ? 'hidden' : '';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isConsultOpen]);

  const handleConsultSubmit = (event) => {
    event.preventDefault();
    setConsultStatus('sending');

    setTimeout(() => {
      setConsultStatus('sent');
      event.target.reset();
    }, 900);
  };

  return (
    <>
      <header
        className={`hero-nav${isScrolled ? ' is-scrolled' : ''}${
          isMenuOpen ? ' is-menu-open' : ''
        }`}
      >
        <button
          className="menu-trigger"
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="menu-label">Menu</span>
        </button>

        <Link to="/" className="nav-logo" aria-label="Luke Coutinho home">
          <img src={lcLogo} alt="Luke Coutinho" />
        </Link>

        <button
          type="button"
          className="nav-utility"
          onClick={() => setIsConsultOpen(true)}
          aria-haspopup="dialog"
          aria-controls="consult-drawer"
          aria-expanded={isConsultOpen}
        >
          <span className="nav-utility-dot" aria-hidden="true" />
          <span>Book Your Consultation</span>
        </button>
      </header>

      <div className="relative min-h-screen overflow-hidden bg-[#0F1720] pt-32">
      <div className="absolute inset-0">
        <img src={heroPoster} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,32,0.78),rgba(7,20,32,0.72)_30%,rgba(245,248,250,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,180,210,0.22),transparent_28%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 md:px-8 md:py-12">
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(135deg,rgba(7,20,32,0.72),rgba(7,20,32,0.44))] p-8 text-white shadow-[0_35px_120px_rgba(7,20,32,0.28)] backdrop-blur-sm md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.38em] text-[#E8640A]">Secure Payment</p>
              <h1 className="mt-6 max-w-[12ch] font-['EB_Garamond',Georgia,serif] italic text-[clamp(40px,5.8vw,76px)] leading-[0.92]">
                Complete your
                <br />
                reservation.
              </h1>
              <p className="mt-6 max-w-[560px] font-[Arial] text-[14px] leading-[1.9] text-white/72">
                Choose the pathway that fits, enter your details, and confirm your place through a calmer, secure
                checkout experience.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-3">
              {[
                'Encrypted payment flow',
                'Guided plan selection',
                'Priority support after booking',
              ].map((item) => (
                <div key={item} className="bg-white/[0.06] p-5">
                  <p className="font-[Arial] text-[10px] uppercase tracking-[0.26em] text-white/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          
          {/* Plan Selection */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">Select Plan</p>
                <h2 className="mt-3 font-['EB_Garamond',Georgia,serif] italic text-[38px] leading-[0.96] text-white">
                  Choose your
                  <br />
                  payment pathway.
                </h2>
              </div>
              
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`group cursor-pointer overflow-hidden rounded-[28px] border p-6 transition-all duration-500 ${
                      selectedPlan === plan.id
                        ? 'border-[#E8640A] bg-[#FFF3E8] shadow-[0_22px_48px_rgba(232,100,10,0.12)]'
                        : 'border-white/30 bg-white/72 backdrop-blur-sm hover:border-[#E8640A]/40 hover:bg-white/88'
                    }`}
                  >
                    <div className="mb-4 flex justify-between items-start">
                      <div>
                        <p className="font-[Arial] text-[10px] uppercase tracking-[0.3em] text-[rgba(26,20,16,0.45)]">
                          {plan.descriptor}
                        </p>
                        <h3 className="mt-3 text-lg font-black text-slate-950 uppercase tracking-tight">
                          {plan.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">{plan.duration}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedPlan === plan.id ? 'border-orange-500' : 'border-slate-300'
                      }`}>
                        {selectedPlan === plan.id && <Check size={16} className="text-orange-500" />}
                      </div>
                    </div>
                    
                    <div className="mb-4 text-2xl font-black text-orange-500">
                      {plan.price}
                    </div>
                    
                    <div className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check size={14} className="text-green-500" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">Checkout Details</p>
                  <h2 className="mt-3 font-['EB_Garamond',Georgia,serif] italic text-[38px] leading-[0.96] text-white">
                    Payment details.
                  </h2>
                </div>
                <p className="font-[Arial] text-[11px] uppercase tracking-[0.28em] text-slate-500">
                  Secure and encrypted
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="rounded-[32px] border border-white/30 bg-white/82 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-md">
                  <h3 className="mb-6 text-lg font-black uppercase tracking-tight text-slate-950">
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-black text-slate-700 uppercase tracking-[0.1em] mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full rounded-2xl border border-slate-200 bg-white/80 py-4 pl-12 pr-4 text-black focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-black text-slate-700 uppercase tracking-[0.1em] mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full rounded-2xl border border-slate-200 bg-white/80 py-4 pl-12 pr-4 text-black focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-black text-slate-700 uppercase tracking-[0.1em] mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full rounded-2xl border border-slate-200 bg-white/80 py-4 pl-12 pr-4 text-black focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-black text-slate-700 uppercase tracking-[0.1em] mb-2">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="date"
                          required
                          className="w-full rounded-2xl border border-slate-200 bg-white/80 py-4 pl-12 pr-4 text-black focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="rounded-[32px] border border-white/30 bg-white/82 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-md">
                  <h3 className="mb-6 text-lg font-black uppercase tracking-tight text-slate-950">
                    Payment Method
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                        className={`rounded-2xl border-2 p-4 transition-all duration-300 ${
                        paymentMethod === 'card'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-slate-200 hover:border-orange-300'
                      }`}
                    >
                      <CreditCard size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-black uppercase tracking-[0.1em]">Card</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                        className={`rounded-2xl border-2 p-4 transition-all duration-300 ${
                        paymentMethod === 'upi'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-slate-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto mb-2" />
                      <span className="text-sm font-black uppercase tracking-[0.1em]">UPI</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('netbanking')}
                        className={`rounded-2xl border-2 p-4 transition-all duration-300 ${
                        paymentMethod === 'netbanking'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-slate-200 hover:border-orange-300'
                      }`}
                    >
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-black uppercase tracking-[0.1em]">Net Banking</span>
                    </button>
                  </div>

                  {/* Card Payment Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-black text-slate-700 uppercase tracking-[0.1em] mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                          className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-black focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-black text-slate-700 uppercase tracking-[0.1em] mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.expiry}
                            onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-black focus:border-orange-500 focus:outline-none transition-colors"
                            placeholder="MM/YY"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-black text-slate-700 uppercase tracking-[0.1em] mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.cvv}
                            onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-black focus:border-orange-500 focus:outline-none transition-colors"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Form */}
                  {paymentMethod === 'upi' && (
                    <div>
                      <label className="block text-sm font-black text-slate-700 uppercase tracking-[0.1em] mb-2">
                        UPI ID
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.upiId}
                        onChange={(e) => setFormData({...formData, upiId: e.target.value})}
                        className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-black focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="yourname@upi"
                      />
                    </div>
                  )}

                  {/* Net Banking */}
                  {paymentMethod === 'netbanking' && (
                    <div className="text-center py-8">
                      <p className="text-slate-600">Select your bank from the list on the next step</p>
                    </div>
                  )}
                </div>

                {/* Order Summary */}
                <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,#09131f,#14283a)] p-8 text-white shadow-[0_28px_70px_rgba(7,20,32,0.35)]">
                  <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">Order Summary</p>
                      <p className="mt-3 font-['EB_Garamond',Georgia,serif] italic text-[28px] leading-none">
                        Secure your place.
                      </p>
                    </div>
                    <Shield size={18} className="text-[#E8640A]" />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-black uppercase tracking-tight">Total Amount</span>
                    <span className="text-3xl font-black text-orange-500">
                      {plans.find(p => p.id === selectedPlan)?.price}
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-6 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-500"
                  >
                    Process Payment
                  </button>
                  
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield size={16} className="text-green-400" />
                    <span className="text-sm text-slate-400">Your payment information is secure and encrypted</span>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      </div>

      <div
        id="primary-menu"
        className={`primary-menu${isMenuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={isMenuOpen ? 'false' : 'true'}
      >
        <button
          type="button"
          className="primary-menu-scrim"
          aria-label="Close menu"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
        />

        <aside className="primary-menu-panel" aria-label="Site menu">
          <div className="primary-menu-backdrop" aria-hidden="true">
            <img src={heroPoster} alt="" />
            <div className="primary-menu-tint" />
          </div>

          <div className="primary-menu-head">
            <Link
              to="/"
              className="primary-menu-logo"
              aria-label="Luke Coutinho home"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={lcLogo} alt="Luke Coutinho" />
            </Link>

            <button
              className="primary-menu-close"
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <nav className="primary-menu-nav" aria-label="Primary navigation">
            <ul>
              {navigationLinks.map((link, index) => (
                <li
                  key={link.label}
                  style={{ '--menu-delay': `${120 + index * 70}ms` }}
                >
                  <Link to={link.to} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="primary-menu-foot">
            <p>Integrative Lifestyle &amp; Wellness · Mumbai · Worldwide</p>
          </div>
        </aside>
      </div>

      <div
        id="consult-drawer"
        className={`consult-drawer${isConsultOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={isConsultOpen ? 'false' : 'true'}
        aria-label="Book a consultation"
      >
        <button
          type="button"
          className="consult-scrim"
          aria-label="Close booking panel"
          tabIndex={isConsultOpen ? 0 : -1}
          onClick={() => setIsConsultOpen(false)}
        />

        <aside className="consult-panel">
          <header className="consult-head">
            <div>
              <p className="consult-eyebrow">Begin Your Journey</p>
              <h2 className="consult-title">Book a Consultation</h2>
            </div>
            <button
              type="button"
              className="consult-close"
              aria-label="Close"
              onClick={() => setIsConsultOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <p className="consult-lede">
            Share a few details and our team will reach out within 24 hours to compose a wellness journey around your
            goals.
          </p>

          {consultStatus === 'sent' ? (
            <div className="consult-success" role="status">
              <p className="consult-eyebrow">Thank you</p>
              <h3>We have received your request.</h3>
              <p>A wellness concierge will be in touch shortly at the contact details you shared.</p>
              <button
                type="button"
                className="consult-submit is-ghost"
                onClick={() => {
                  setConsultStatus('idle');
                  setIsConsultOpen(false);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <form className="consult-form" onSubmit={handleConsultSubmit}>
              <label className="consult-field">
                <span>Full Name</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>

              <div className="consult-row">
                <label className="consult-field">
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <label className="consult-field">
                  <span>Phone</span>
                  <input type="tel" name="phone" required autoComplete="tel" />
                </label>
              </div>

              <div className="consult-row">
                <label className="consult-field">
                  <span>Country / Region</span>
                  <input type="text" name="country" required autoComplete="country-name" />
                </label>
                <label className="consult-field">
                  <span>Preferred Date</span>
                  <input type="date" name="date" />
                </label>
              </div>

              <label className="consult-field">
                <span>Area of Interest</span>
                <select name="program" defaultValue="">
                  <option value="" disabled>Select a programme</option>
                  <option value="masterclass">Masterclass</option>
                  <option value="signature">Signature Wellness</option>
                  <option value="cancer">Special Cancer Care</option>
                  <option value="gut">Gut Care</option>
                  <option value="pregnancy">Pregnancy Care</option>
                  <option value="other">Something else</option>
                </select>
              </label>

              <label className="consult-field">
                <span>Briefly, what brings you here?</span>
                <textarea name="message" rows="4" />
              </label>

              <button
                type="submit"
                className="consult-submit"
                disabled={consultStatus === 'sending'}
              >
                {consultStatus === 'sending' ? 'Submitting…' : 'Request Consultation'}
              </button>

              <p className="consult-fineprint">
                By submitting, you agree to be contacted by Luke Coutinho&apos;s team regarding your enquiry.
              </p>
            </form>
          )}
        </aside>
      </div>
    </>
  );
};

export default Payment;
