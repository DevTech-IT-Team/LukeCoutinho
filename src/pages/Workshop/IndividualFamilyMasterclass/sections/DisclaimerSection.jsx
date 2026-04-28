import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, CircleAlert, MessageCircleMore } from 'lucide-react';

const disclaimerItems = [
  {
    title: 'Acceptance',
    copy: 'By registering for a Masterclass, you agree to these Terms and Conditions.',
  },
  {
    title: 'Refunds',
    copy: 'A full refund applies only for event cancellation or an unresolved access issue caused by us.',
  },
  {
    title: 'Missed Sessions',
    copy: 'These are live events, and recordings are not provided for missed sessions.',
  },
  {
    title: 'Prohibited Uses',
    copy: 'Please do not share your access link or use the content for commercial purposes.',
  },
  {
    title: 'Modification of Terms',
    copy: 'Luke Coutinho Holistic Healing Systems may revise these terms at any time.',
  },
];

function DisclaimerSection({ CtaLink }) {
  return (
    <section className="relative overflow-hidden border-y border-[rgba(26,20,16,0.08)] bg-[#FAF6EE]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,100,10,0.08),transparent_22%)]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="block h-px w-10 bg-[#E8640A]" />
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.4em] text-[#E8640A]">
                Disclaimer
              </p>
            </div>

            <h2 className="mt-8 font-['EB_Garamond',Georgia,serif] italic text-[clamp(38px,5vw,68px)] leading-[0.96]">
              Clear terms.
              <br />
              <span className="text-[rgba(26,20,16,0.45)]">No surprises.</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-[28px] border border-[rgba(232,100,10,0.18)] bg-[#FFF7EE] p-6"
            >
              <div className="flex items-start gap-4">
                <CircleAlert size={18} className="mt-1 text-[#E8640A]" />
                <div>
                  <p className="font-[Arial] text-[11px] uppercase tracking-[0.32em] text-[#E8640A]">Please note</p>
                  <p className="mt-3 font-[Arial] text-[14px] leading-[1.9] text-[rgba(26,20,16,0.72)]">
                    If circumstances beyond our control arise, the upcoming masterclass may be rescheduled. Your
                    registration and payment remain valid, and Team Luke will keep you informed.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid gap-px bg-[rgba(26,20,16,0.08)]">
            {disclaimerItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-[#FDFAF5] p-6 transition-colors duration-500 hover:bg-[#F4EEE4]"
              >
                <p className="font-[Arial] text-[10px] uppercase tracking-[0.34em] text-[#E8640A]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-['EB_Garamond',Georgia,serif] italic text-[30px] leading-[1]">
                  {item.title}
                </h3>
                <p className="mt-3 font-[Arial] text-[13px] leading-[1.8] text-[rgba(26,20,16,0.68)]">
                  {item.copy}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid gap-4 border-t border-[rgba(26,20,16,0.08)] pt-8 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div className="flex flex-col gap-3 font-[Arial] text-[13px] leading-[1.8] text-[rgba(26,20,16,0.72)]">
            <a href="mailto:training@lukecoutinho.com" className="inline-flex items-center gap-3 hover:text-[#E8640A] transition-colors">
              <MessageCircleMore size={16} className="text-[#E8640A]" />
              training@lukecoutinho.com
            </a>
            <a href="mailto:connect@lukecoutinho.com" className="inline-flex items-center gap-3 hover:text-[#E8640A] transition-colors">
              <CalendarDays size={16} className="text-[#E8640A]" />
              connect@lukecoutinho.com
            </a>
          </div>

          <CtaLink variant="dark" className="justify-center lg:justify-self-end">
            Proceed To Payment
          </CtaLink>
        </motion.div>
      </div>
    </section>
  );
}

export default DisclaimerSection;
