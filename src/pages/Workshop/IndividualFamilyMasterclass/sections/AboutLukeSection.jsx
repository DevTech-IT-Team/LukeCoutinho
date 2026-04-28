import React from 'react';
import { motion } from 'framer-motion';
import audienceImage from '../../../../assets/team.avif';
import detailImage from '../../../../assets/imluke.png';

function AboutLukeSection({ CtaLink }) {
  return (
    <section className="relative overflow-hidden bg-[#1A1410] text-[#FDFAF5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%),radial-gradient(circle_at_70%_30%,rgba(232,100,10,0.08),transparent_38%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-6 md:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[36px] border border-white/10 min-h-[560px]"
            >
              <img src={audienceImage} alt="Luke Coutinho and team" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.74))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/30 px-4 py-2 font-[Arial] text-[10px] uppercase tracking-[0.32em] text-[#E8640A] backdrop-blur-md">
                Wellness Champion | Fit India Movement
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.article
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border border-white/10 bg-white/[0.05] p-6 lg:p-7"
              >
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">14+ years</p>
                <h3 className="mt-5 font-['EB_Garamond',Georgia,serif] italic text-[34px] leading-[0.98] text-white">
                  A practice rooted in fundamentals.
                </h3>
                <p className="mt-4 font-[Arial] text-[13px] leading-[1.8] text-white/68">
                  Lifestyle as foundational medicine, taught through simplicity, clarity, and long-term consistency.
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[30px] border border-white/10 min-h-[220px]"
              >
                <img src={detailImage} alt="Luke Coutinho portrait" className="absolute inset-0 h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,6,0.16),rgba(10,8,6,0.88))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">Luke Quote</p>
                  <blockquote className="mt-5 max-w-[16ch] font-['EB_Garamond',Georgia,serif] italic text-[28px] leading-[1.08] text-white">
                    “Cancer care demands compassion, lifestyle precision, and consistency.”
                  </blockquote>
                </div>
              </motion.article>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center lg:pt-6"
          >
            <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A]">About Luke Coutinho</p>
            <h2 className="mt-5 font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,4.6vw,64px)] leading-[0.98] text-white">
              Foundational medicine,
              <br />
              taught with purpose.
            </h2>

            <p className="mt-7 max-w-[620px] font-[Arial] text-[14px] leading-[1.9] text-white/72">
              Luke has spent 14+ years practising lifestyle as foundational medicine and has led national missions
              focused on obesity, diabetes, preventive health, and wellness education.
            </p>

            <p className="mt-5 max-w-[620px] font-[Arial] text-[14px] leading-[1.9] text-white/72">
              Through school menu programs, cancer support initiatives, books, Bharat Lifestyle &amp; Tips, and global
              outreach, his work continues to make wellness practical and accessible.
            </p>

            <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-3">
              {[
                'Wellness Champion for Fit India',
                'Public health and lifestyle educator',
                'Root-cause, lifestyle-first philosophy',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.65, delay: 0.14 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/[0.04] p-5"
                >
                  <p className="font-[Arial] text-[10px] uppercase tracking-[0.28em] text-white/58">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <CtaLink>Join Through Payment</CtaLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutLukeSection;
