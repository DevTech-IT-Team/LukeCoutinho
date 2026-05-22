import React, { useState } from 'react';
import { CreditCard, Gift, CheckCircle, Sparkles, Mail, MessageSquare } from 'lucide-react';

export default function GiftCard() {
  const [formData, setFormData] = useState({
    amount: '',
    recipientEmail: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const quickAmounts = ['1000', '2500', '5000', '10000'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickAmount = (amount) => {
    setFormData((prev) => ({ ...prev, amount }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Simulate async payment processing
      await new Promise((res) => setTimeout(res, 1800));
      setStatus('sent');
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  return (
    <section className="bg-slate-50 min-h-screen py-16 antialiased flex items-center justify-center pt-28">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center justify-center gap-2">
            Gift a Wellness Experience
          </h1>
          {/* <p className="mt-2 text-orange-50 max-w-md mx-auto text-sm sm:text-base">
            Inspire someone's journey. Choose an amount, add a personal touch, and let them explore our signature programs.
          </p> */}
        </div>

        {status === 'sent' ? (
          /* Success State */
          <div className="p-12 text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-600" size={36} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Gift Card Sent Successfully!</h2>
            <p className="mt-3 text-gray-600">
              An elegant digital voucher worth <span className="font-bold text-gray-900">₹{formData.amount}</span> has been dispatched to <span className="font-semibold text-orange-600">{formData.recipientEmail}</span>.
            </p>
            <button
              onClick={() => { setStatus('idle'); setFormData({ amount: '', recipientEmail: '', message: '' }); }}
              className="mt-8 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition"
            >
              Send Another Gift
            </button>
          </div>
        ) : (
          /* Main Interactive Layout */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

            {/* Left Column: Live Card Preview */}
            <div className="p-8 sm:p-12 bg-slate-50/50 flex flex-col justify-center items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Live Preview</span>

              {/* The Virtual Card */}
              <div className="w-full max-w-sm aspect-[1.58/1] bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-2xl p-6 shadow-lg text-white flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-500"></div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-orange-400 font-bold">Wellness Pass</p>
                    <p className="text-lg font-semibold mt-1 text-slate-200">E-Gift Voucher</p>
                  </div>
                  <Gift className="text-orange-400" size={28} />
                </div>

                <div className="my-auto">
                  <p className="text-xs text-slate-400">Value</p>
                  <p className="text-3xl font-black tracking-tight text-white">
                    ₹{formData.amount ? Number(formData.amount).toLocaleString('en-IN') : '0,000'}
                  </p>
                </div>

                <div className="flex justify-between items-end border-t border-slate-700/50 pt-3">
                  <div className="max-w-[70%]">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider truncate">To</p>
                    <p className="text-xs font-medium text-slate-200 truncate">{formData.recipientEmail || 'recipient@email.com'}</p>
                  </div>
                  <span className="text-[10px] bg-slate-800 border border-slate-700 text-slate-300 px-2 py-1 rounded">Active</span>
                </div>
              </div>

              {formData.message && (
                <div className="mt-4 w-full max-w-sm bg-white border border-gray-200 rounded-xl p-3 shadow-sm text-sm text-gray-600 italic">
                  "{formData.message}"
                </div>
              )}
            </div>

            {/* Right Column: Form Configuration */}
            <form className="p-8 sm:p-12 space-y-6" onSubmit={handleSubmit}>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <CreditCard size={16} className="text-orange-500" /> Select Amount
                </label>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleQuickAmount(amt)}
                      className={`py-2 text-sm font-bold rounded-xl border transition-all ${formData.amount === amt
                        ? 'bg-orange-500 border-orange-500 text-white shadow-sm'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300'
                        }`}
                    >
                      ₹{parseInt(amt).toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-bold text-lg">₹</span>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Custom amount"
                    required
                    min="500"
                    className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-gray-200 focus:border-orange-500 focus:bg-white rounded-xl outline-none text-lg transition-all font-semibold"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>
                <span className="text-xs text-gray-400 mt-1 block">Minimum value of ₹500 required</span>
              </div>

              {/* Recipient Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Mail size={16} className="text-orange-500" /> Recipient Details
                </label>
                <input
                  type="email"
                  name="recipientEmail"
                  placeholder="Enter recipient's email address"
                  required
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all"
                  value={formData.recipientEmail}
                  onChange={handleChange}
                />
              </div>

              {/* Personal Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare size={16} className="text-orange-500" /> Personal Note <span className="text-xs text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write a sweet message to go with the voucher..."
                  rows={3}
                  maxLength={160}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 focus:border-orange-500 focus:bg-white rounded-xl outline-none transition-all resize-none text-sm"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-slate-400 disabled:to-slate-400 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-base mt-4"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Secure Payment…
                  </>
                ) : (
                  `Purchase & Send Voucher`
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}