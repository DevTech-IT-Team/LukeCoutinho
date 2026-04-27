import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Facebook, MessageCircle } from 'lucide-react';

// Inline X (Twitter) glyph
const XIcon = ({ size = 13 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.59l-4.7-6.14L4.9 22H2.14l6.97-7.96L2 2h6.76l4.25 5.62L18.244 2Zm-1.16 18.4h1.83L7.06 3.5H5.1l11.984 16.9Z" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: 'Heal',
      links: [
        { label: 'Health Assessment', to: '/assessment' },
        { label: 'Book Consultation', to: '/book-consult' },
        { label: 'Programs', to: '/programs/signature-wellness' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { label: 'Courses', to: '/learn/learninghub/home' },
        { label: 'Podcast', to: '/Podcast/Podcast' },
        { label: 'Recipes', to: '/bharat/dish' },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'Our Approach', to: '/about/approach' },
        { label: 'Story', to: '/about/story' },
        { label: 'Contact', to: '/ContactUs/ContactUs' },
      ],
    },
  ];

  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/luke_coutinho/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/LukeCoutinhoOfficial', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@LukeCoutinho', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lukecoutinho/', label: 'LinkedIn' },
    { icon: XIcon, href: 'https://x.com/LukeCoutinho17', label: 'X' },
    { icon: MessageCircle, href: 'https://www.whatsapp.com/channel/0029VaEPuJ9EawdthbP8cz0K', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#1A1410] text-[#FDFAF5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-10 md:gap-x-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="inline-block">
              <span className="font-['EB_Garamond',Georgia,serif] italic text-[26px] leading-none">
                Luke <span className="text-[#E8640A]">Coutinho</span>
              </span>
            </Link>
            <p className="mt-3 font-[Arial] text-[10px] uppercase tracking-[0.32em] text-white/45">
              Mumbai · Dubai · Worldwide
            </p>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h4 className="font-[Arial] text-[10px] tracking-[0.32em] uppercase text-[#E8640A] mb-4">
                {c.title}
              </h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="font-[Arial] text-[12px] text-white/70 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-[Arial] text-[10px] tracking-[0.32em] uppercase text-[#E8640A] mb-4">
              Follow
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/65 hover:border-[#E8640A] hover:text-[#E8640A] transition-colors"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Base */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-6">
          <p className="font-[Arial] text-[10px] tracking-[0.32em] uppercase text-white/40">
            © {year} Luke Coutinho Wellness · All rights reserved
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-[Arial] text-[10px] tracking-[0.32em] uppercase text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
