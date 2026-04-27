import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Clock, Calendar, User, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookConsult = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-18"
          >
            {/* <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
             */}
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Book a
              <span className="text-orange-500"> Consultation</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take the first step towards optimal health and wellness. Our expert team is ready to guide you on your personalized journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Consultation Options */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Individual Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-4xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <User className="text-orange-500 group-hover:text-white" size={32} />
            </div>
            
            <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-4">
              Individual Consult
            </h3>
            <p className="text-slate-600 mb-6">
              One-on-one personalized consultation with our wellness experts tailored to your specific health goals.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-500">
                <Clock size={18} className="text-orange-500" />
                <span className="text-sm">60 minutes session</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Phone size={18} className="text-orange-500" />
                <span className="text-sm">Video or In-person</span>
              </div>
            </div>
            
            <Link
              to="/payment"
              className="block w-full py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-500 text-center"
            >
              Book Now
            </Link>
          </motion.div>

          {/* Family Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-4xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <MessageSquare className="text-orange-500 group-hover:text-white" size={32} />
            </div>
            
            <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-4">
              Family Wellness
            </h3>
            <p className="text-slate-600 mb-6">
              Comprehensive family health planning with strategies for all age groups and health concerns.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-500">
                <Clock size={18} className="text-orange-500" />
                <span className="text-sm">90 minutes session</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Phone size={18} className="text-orange-500" />
                <span className="text-sm">Video or In-person</span>
              </div>
            </div>
            
            <Link
              to="/payment"
              className="block w-full py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-500 text-center"
            >
              Book Now
            </Link>
          </motion.div>

          {/* Corporate Wellness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-4xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
              <Calendar className="text-orange-500 group-hover:text-white" size={32} />
            </div>
            
            <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-4">
              Corporate Program
            </h3>
            <p className="text-slate-600 mb-6">
              Customized corporate wellness solutions to enhance employee health and productivity.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-500">
                <Clock size={18} className="text-orange-500" />
                <span className="text-sm">Custom duration</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Phone size={18} className="text-orange-500" />
                <span className="text-sm">On-site or Virtual</span>
              </div>
            </div>
            
            <Link
              to="/payment"
              className="block w-full py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-500 text-center"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
              Need Help?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Our team is here to assist you with any questions about our consultation services.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Call Us</h3>
                <p className="text-slate-400">+91 128743 3472</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Email Us</h3>
                <p className="text-slate-400">consult@lukecoutinho.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2">Office Hours</h3>
                <p className="text-slate-400">Mon - Sat: 9AM - 6PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookConsult;
