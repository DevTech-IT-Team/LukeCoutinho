import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Calendar, Phone, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Success Content */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={48} className="text-white" />
          </div>

          {/* Success Message */}
          <h1 className="text-5xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter mb-6">
            Payment
            <span className="text-green-500"> Successful!</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Thank you for booking your consultation. We've received your payment and will contact you shortly to confirm your appointment details.
          </p>

          {/* Order Details */}
          <div className="bg-white rounded-4xl p-8 shadow-xl mb-8">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6">
              Booking Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Consultation Type</p>
                  <p className="text-lg font-black text-slate-950">Individual Consultation</p>
                </div>
                
                <div>
                  <p className="text-sm font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Amount Paid</p>
                  <p className="text-lg font-black text-slate-950">₹4,999</p>
                </div>
                
                <div>
                  <p className="text-sm font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Transaction ID</p>
                  <p className="text-lg font-black text-slate-950">TXN123456789</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Payment Method</p>
                  <p className="text-lg font-black text-slate-950">Credit Card</p>
                </div>
                
                <div>
                  <p className="text-sm font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Payment Date</p>
                  <p className="text-lg font-black text-slate-950">April 25, 2026</p>
                </div>
                
                <div>
                  <p className="text-sm font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <p className="text-lg font-black text-green-500">Confirmed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-slate-950 text-white rounded-4xl p-8 mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
              What's Next?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Email Confirmation</h3>
                <p className="text-slate-400 text-sm">You'll receive a detailed confirmation email with your booking reference.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Phone Call</h3>
                <p className="text-slate-400 text-sm">Our team will call you within 24 hours to schedule your consultation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Calendar size={32} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Consultation</h3>
                <p className="text-slate-400 text-sm">Attend your personalized consultation at the scheduled time.</p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-orange-50 rounded-4xl p-8">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6">
              Need Help?
            </h2>
            
            <p className="text-slate-600 mb-8">
              If you have any questions about your booking or need to make changes, our support team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+911287433472"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-orange-500 transition-all duration-500"
              >
                <Phone size={20} />
                Call Support
              </a>
              
              <a
                href="mailto:consult@lukecoutinho.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-slate-950 transition-all duration-500"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-12">
            <p className="text-slate-600 mb-4">How was your booking experience?</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Star size={24} className="text-slate-400 hover:text-white" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
