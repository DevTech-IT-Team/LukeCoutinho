import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import pastMasterclassImage from '../../../../assets/1st.webp';
import archiveImage from '../../../../assets/neimg.jpg';

const archiveCards = [
  {
    number: '01',
    title: 'Curated learning',
    copy: 'A selective library of sessions that still feel relevant, calm, and useful.',
  },
  {
    number: '02',
    title: 'At your pace',
    copy: 'Return to key ideas when you need perspective, structure, or a reset in direction.',
  },
  {
    number: '03',
    title: 'Practical depth',
    copy: 'Less theory for theory’s sake. More understanding that supports daily choices.',
  },
];

function PastMasterclassesSection() {
  return (
    <section className="relative overflow-hidden bg-[#FDFAF5] text-[#1A1410]">
      <div className="absolute inset-x-0 top-0 h-px bg-[rgba(26,20,16,0.08)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[rgba(26,20,16,0.08)]" />

      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-4">
              <span className="block h-px w-10 bg-[#E8640A]" />
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                Continue Learning
              </p>
            </div>

            <h2 className="mt-8 font-['EB_Garamond',Georgia,serif] italic text-[clamp(40px,5vw,72px)] leading-[0.96]">
              Revisit our
              <br />
              past masterclasses.
            </h2>
          </div>

          <p className="max-w-[520px] font-[Arial] text-[14px] leading-[1.9] text-[rgba(26,20,16,0.64)] lg:justify-self-end lg:text-right">
            Re-enter earlier sessions through a quieter archive of grounded lessons, practical tools, and timeless
            wellness conversations.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[38px] border border-[rgba(26,20,16,0.08)] min-h-[620px]"
          >
            <img
              src={pastMasterclassImage}
              alt="Past masterclasses archive"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,6,0.08),rgba(8,7,6,0.24)_36%,rgba(8,7,6,0.92))]" />
            <div className="absolute inset-y-0 left-8 w-px bg-white/15" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <div className="max-w-[420px]">
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">Archive Feature</p>
                <p className="mt-4 font-['EB_Garamond',Georgia,serif] italic text-[clamp(36px,4.1vw,56px)] leading-[0.96] text-white">
                  Learn beyond the live date.
                </p>
                <p className="mt-5 font-[Arial] text-[13px] leading-[1.85] text-white/72">
                  Explore masterclasses that continue to guide consistency long after the original session ends.
                </p>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[30px] border border-[rgba(26,20,16,0.08)] min-h-[220px]"
            >
              <img src={archiveImage} alt="Archive editorial" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.18),rgba(12,10,8,0.82))]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">Editorial Archive</p>
                <p className="mt-3 font-['EB_Garamond',Georgia,serif] italic text-[30px] leading-[1] text-white">
                  A quieter way to continue learning.
                </p>
              </div>
            </motion.div>

            {archiveCards.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, delay: 0.14 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group border border-[rgba(26,20,16,0.08)] bg-[#FAF6EE] p-6 transition-all duration-700 hover:-translate-y-1 hover:bg-[#F4EEE4] lg:p-7"
              >
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">{item.number}</p>
                <h3 className="mt-5 font-[Arial] text-[18px] uppercase tracking-[0.14em] text-[#1A1410]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[28ch] font-[Arial] text-[13px] leading-[1.8] text-[rgba(26,20,16,0.62)]">
                  {item.copy}
                </p>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2"
            >
              <Link
                to="/Workshop/IndividualFamilyMasterclass/PastMasterclass"
                className="group inline-flex items-center gap-3 font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#1A1410] border-b border-[#1A1410]/50 pb-2 hover:text-[#E8640A] hover:border-[#E8640A] transition-colors"
              >
                <span>Browse Past Masterclasses</span>
                <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PastMasterclassesSection;
