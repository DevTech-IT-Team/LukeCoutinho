import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://www.whatsapp.com/channel/0029VaEPuJ9EawdthbP8cz0K';

export default function CommunityStrip() {
  return (
    <section className="bg-[#FDFAF5] border-y border-[rgba(26,20,16,0.08)]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 lg:px-16 py-14 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-left">
          <div className="flex gap-5 items-start max-w-[560px]">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8640A]/10 text-[#E8640A]">
              <MessageCircle size={22} strokeWidth={1.5} />
            </span>
            <div>
              <p className="font-[Arial] text-[10px] uppercase tracking-[0.35em] text-[#E8640A] mb-2">
                Join our community
              </p>
              <h2 className="font-['EB_Garamond',Georgia,serif] italic text-[clamp(24px,3vw,32px)] leading-[1.1] text-[#1A1410] mb-2">
                Stay connected on WhatsApp
              </h2>
              <p className="font-[Arial] text-[14px] leading-[1.8] text-[rgba(26,20,16,0.62)] m-0">
                Insights, reminders, and encouragement — one tap to join our channel.
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#1A1410] hover:bg-[#E8640A] text-white px-8 py-4 font-[Arial] text-[10px] uppercase tracking-[0.32em] transition-all shrink-0"
          >
            Join community
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
