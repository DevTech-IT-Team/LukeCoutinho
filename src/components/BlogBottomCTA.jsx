import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BRAND_CTA } from '../data/brandContent';

export default function BlogBottomCTA() {
  return (
    <section className="bg-[#1A1410] text-[#FDFAF5] border-t border-white/10">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-16 lg:py-20">
        <div className="lc-masthead lc-masthead--stack">
          <div className="lc-masthead-title-col">
            <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A] mb-4">
              Move to action
            </p>
            <h2 className="lc-masthead-title lc-masthead-title--light text-[clamp(32px,4vw,48px)]">
              Ready for the next step?
            </h2>
          </div>
          <div className="lc-masthead-body lc-masthead-body--light max-w-none">
            <p>{BRAND_CTA.consult}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/book-consult"
                className="inline-flex items-center justify-center gap-3 bg-[#E8640A] hover:bg-white hover:text-[#1A1410] text-white px-8 py-4 font-[Arial] text-[10px] uppercase tracking-[0.32em] transition-all"
              >
                Book a consultation
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/learn/learninghub/home"
                className="inline-flex items-center justify-center gap-3 border border-white/25 hover:border-white text-white px-8 py-4 font-[Arial] text-[10px] uppercase tracking-[0.32em] transition-all"
              >
                Explore courses
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
