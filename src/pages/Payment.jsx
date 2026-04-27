import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Shield, Lock, Check, X, Calendar, User, Mail, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
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
      features: ['One-on-one session', 'Personalized health plan', 'Follow-up support', 'Nutrition guidance']
    },
    {
      id: 'family',
      name: 'Family Wellness',
      price: '₹7,999',
      duration: '90 minutes',
      features: ['Family health assessment', 'Group consultation', 'Customized family plan', 'Ongoing support']
    },
    {
      id: 'corporate',
      name: 'Corporate Program',
      price: 'Custom Quote',
      duration: 'Custom',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/book-consult"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Consultation
            </Link>
            
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-green-500" />
              <span className="text-sm text-slate-600">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Plan Selection */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6">
                Select Plan
              </h2>
              
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-slate-200 bg-white hover:border-orange-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">{plan.duration}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedPlan === plan.id ? 'border-orange-500' : 'border-slate-300'
                      }`}>
                        {selectedPlan === plan.id && <Check size={16} className="text-orange-500" />}
                      </div>
                    </div>
                    
                    <div className="text-2xl font-black text-orange-500 mb-4">
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
              <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6">
                Payment Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight mb-6">
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
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight mb-6">
                    Payment Method
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
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
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
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
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
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
                          className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                            className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                            className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                        className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:border-orange-500 focus:outline-none transition-colors"
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
                <div className="bg-slate-950 text-white rounded-3xl p-8">
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
                  
                  <div className="flex items-center justify-center gap-2 mt-4">
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
  );
};

export default Payment;
