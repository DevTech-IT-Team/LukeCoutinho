import React from 'react';
import { ShieldCheck, AlertCircle, Mail, ArrowRight, Info } from 'lucide-react';

const DisclaimerPage = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-16 px-6 font-sans selection:bg-orange-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Disclaimer
          </h1>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            These Terms and Conditions govern your use of the Masterclass platform and your participation in Masterclasses.
          </p>
        </div>

        {/* High-Priority "Please Note" Box */}
        <div className="relative bg-white border border-orange-100 rounded-3xl p-8 md:p-10 mb-16 overflow-hidden">
          {/* Decorative Background Icon */}
          <Info className="absolute -right-8 -top-8 text-orange-200/50" size={200} />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 p-2 rounded-lg">
                <AlertCircle className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Please Note:</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl">
              <p className="font-medium text-gray-900">
                In case of any circumstances beyond our control, the upcoming masterclass may need to be rescheduled.
              </p>
              <p>
                Please be assured that your registration and payment remain fully valid, and the session will definitely take place — if not on the original date, then at a later, more suitable time.
              </p>
              <p>
                We are committed to delivering the full experience you signed up for and will keep you informed of any updates or changes. Thank you for your understanding.
              </p>
              <p className="pt-4 text-orange-600 font-bold tracking-wide uppercase text-sm">
                — Team Luke
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* Section 1 & 2 */}
          <div className="space-y-12">
            <section className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-orange-500 font-black text-xl italic group-hover:not-italic transition-all">01.</span>
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Acceptance</h3>
              </div>
              <p className="text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-6">
                By registering for a Masterclass, you agree to be bound by the following Terms & Conditions.
              </p>
            </section>

            <section className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-orange-500 font-black text-xl italic group-hover:not-italic transition-all">02.</span>
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Refunds</h3>
              </div>
              <div className="border-l-2 border-gray-100 pl-6 space-y-4">
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-1">a) Event Cancellation</h4>
                  <p className="text-gray-500 text-sm">If the scheduled Masterclass event did not take place and you were unable to attend a rescheduled event, you are entitled to a full refund.</p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-1">b) Technical Error</h4>
                  <p className="text-gray-500 text-sm">If a technical error on our end prevented access and we were unable to resolve the issue, you are entitled to a full refund.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Section 3, 4, & 5 */}
          <div className="space-y-12">
            <section className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-orange-500 font-black text-xl italic group-hover:not-italic transition-all">03.</span>
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Missed Sessions</h3>
              </div>
              <p className="text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-6">
                Masterclasses are live events. <span className="text-gray-900 font-semibold underline decoration-orange-300">Recordings will not be provided</span> if you miss the live session.
              </p>
            </section>

            <section className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-orange-500 font-black text-xl italic group-hover:not-italic transition-all">04.</span>
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Prohibited Uses</h3>
              </div>
              <p className="text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-6">
                Please refrain from sharing your access link, or using the content for any commercial purpose.
              </p>
            </section>

            <section className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-orange-500 font-black text-xl italic group-hover:not-italic transition-all">05.</span>
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Modification</h3>
              </div>
              <p className="text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-6 text-sm">
                Luke Coutinho Holistic Healing Systems reserves the right to modify these Terms & Conditions at any time.
              </p>
            </section>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Have Questions?</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="mailto:masterclasses@lukecoutinho.com" className="group flex items-center gap-3 bg-white/10 hover:bg-orange-500 px-6 py-4 rounded-2xl transition-all duration-300 w-full md:w-auto">
                <Mail size={20} className="text-orange-500 group-hover:text-white" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-orange-100">General Support</p>
                  <p className="font-semibold text-sm">masterclasses@lukecoutinho.com</p>
                </div>
              </a>
              <a href="mailto:masterclasses@lukecoutinho.com" className="group flex items-center gap-3 bg-white/10 hover:bg-orange-500 px-6 py-4 rounded-2xl transition-all duration-300 w-full md:w-auto border border-white/5">
                <ShieldCheck size={20} className="text-orange-500 group-hover:text-white" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-orange-100">Corporate & Bulk</p>
                  <p className="font-semibold text-sm">masterclasses@lukecoutinho.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;