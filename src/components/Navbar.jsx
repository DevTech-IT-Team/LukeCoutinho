import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ShieldCheck } from 'lucide-react';
import logo from "../assets/LClogoo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navConfig = [
    {
      title: 'Programs',
      isMega: true,
      links: [
        { 
          category: 'Individual & Family',
          items: [
            { label: 'Signature Wellness', href: '/programs/signature-wellness', desc: 'Comprehensive Care' },
            { label: 'Special Cancer Care', href: '/programs/cancer-care', desc: 'Integrative Support' },
            { label: 'Gut Care Program', href: '/programs/gut', desc: 'Microbiome Health' },
            { label: 'Pregnancy Care', href: '/programs/pregnancy', desc: 'Conscious Parenting' },
            { label: 'Hormonal Care', href: '/programs/hormonal', desc: 'Balance & Vitality' },
          ]
        },
        { 
          category: 'Enterprise',
          items: [
            { label: 'Corporate Wellness', href: '/programs/weight', desc: 'Peak Performance' },
            { label: 'Client Success', href: '/programs/chronic', desc: 'Inspiring Journeys' },
          ]
        }
      ],
    },
    {
      title: 'Masterclass',
      href: '/masterclass',
    },
    {
      title: 'Workshops',
      links: [
        { label: 'Masterclasses', href: '/masterclass', desc: 'Deep Dive Sessions' },
        { label: 'Corporate Talks', href: '/Workshop/CorporateTalks/Home', desc: 'Team Optimization' },
      ],
    },
    {
      title: 'Podcast',
      href: '/Podcast/Podcast',
    },
    {
      title: 'Resources',
      links: [
        { label: 'Knowledge Hub', href: '/resources', desc: 'Blogs & Downloads' },
        { label: 'Recipe Corner', href: '/learn/RecipeCorner/Home', desc: 'Nutritional Art' },
        { label: 'Learning Hub', href: '/learn/learninghub/home', desc: 'Expert Courses' },
      ],
    },
    {
      title: 'Bharat',
      href: '/bharat/dish',
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 transition-all duration-700 ${
      scrolled 
      ? 'bg-white/80 backdrop-blur-3xl shadow-2xl shadow-slate-900/5 h-20 border-b border-slate-100' 
      : 'bg-white h-24 border-b border-slate-100/60'
    }`}>
      <div className="max-w-375 mx-auto px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Logo Identity */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center gap-4 group">
              <img 
                src={logo} 
                alt="Luke Coutinho" 
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation Ecosystem */}
          <div className="hidden xl:flex items-center space-x-2">
            {navConfig.map((item) => (
              <div key={item.title} className="relative group/nav py-4">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="flex items-center px-5 py-2 text-[11px] font-black text-slate-950 hover:text-orange-500 transition-all duration-300 rounded-full hover:bg-slate-50 uppercase tracking-[0.2em] relative group"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center px-5 py-2 text-[11px] font-black text-slate-950 group-hover/nav:text-orange-500 transition-all duration-300 rounded-full group-hover/nav:bg-slate-50 uppercase tracking-[0.2em]">
                      {item.title}
                      <ChevronDown size={14} className="ml-1 opacity-30 group-hover/nav:opacity-100 transition-all duration-500 group-hover/nav:rotate-180" />
                    </button>

                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-500 transform group-hover/nav:translate-y-0 translate-y-4 z-110">
                      {item.isMega ? (
                        <div className="w-160 bg-white rounded-[3.5rem] border border-slate-100 p-12 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] overflow-hidden">
                          <div className="grid grid-cols-2 gap-12 relative z-10">
                            {item.links.map((col) => (
                              <div key={col.category} className="space-y-8">
                                <div className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] pb-4 border-b border-orange-100/30">{col.category}</div>
                                <div className="space-y-3">
                                  {col.items.map((link) => (
                                    <Link
                                      key={link.label}
                                      to={link.href}
                                      className="group/item flex items-start gap-4 p-4 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500"
                                    >
                                      <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-orange-500 group-hover/item:text-white transition-all">
                                         <ShieldCheck size={18} />
                                      </div>
                                      <div>
                                        <div className="text-[14px] font-black text-slate-950 uppercase tracking-tight group-hover/item:text-orange-500 transition-colors">
                                          {link.label}
                                        </div>
                                        <div className="text-[11px] font-medium text-slate-400 group-hover/item:text-slate-600 transition-colors">
                                          {link.desc}
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
                        </div>
                      ) : (
                        <div className="w-[320px] bg-white rounded-[3rem] border border-slate-100 p-6 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] overflow-hidden">
                          <div className="space-y-2">
                            {item.links.map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                className="group/item flex items-center gap-4 p-4 rounded-2xl hover:bg-white transition-all duration-300"
                              >
                                <div className="w-2 h-2 rounded-full bg-orange-200 group-hover/item:bg-orange-500 transition-all scale-100 group-hover/item:scale-125" />
                                <div>
                                  <div className="text-[13px] font-black text-slate-950 uppercase tracking-tight group-hover/item:text-orange-500 transition-colors">
                                    {link.label}
                                  </div>
                                  <div className="text-[10px] font-medium text-slate-400 transition-colors">
                                    {link.desc}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Action Ecosystem */}
          <div className="flex items-center space-x-4">
            <Link
              to="/book-consult"
              className="hidden lg:flex px-10 py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500"
            >
              Book a Consult
            </Link>
            <a
              href="https://www.lmsathena.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex px-10 py-4 bg-orange-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500"
            >
              Login
            </a>

            {/* Mobile Interface Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="xl:hidden w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-500"
              aria-label="Open Navigation"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* IMMERSIVE MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 xl:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] sm:w-112.5 bg-white flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <div className="p-8 flex justify-between items-center border-b border-slate-50">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 group">
                  <img src={logo} alt="Luke Coutinho" className="h-10 w-auto object-contain" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-slate-50 text-slate-400 hover:text-slate-950 transition-all"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-10 space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl font-black text-slate-950 hover:text-orange-500 transition-colors uppercase tracking-tighter"
                >
                  Home
                </Link>

                {navConfig.map((item, idx) => (
                  <div key={item.title} className="space-y-4">
                    {item.href ? (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-4xl font-black text-slate-950 hover:text-orange-500 transition-colors uppercase tracking-tighter"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <div className="space-y-4">
                        <button
                          onClick={() => setMobileMenuOpen(mobileMenuOpen === idx ? null : idx)}
                          className="flex justify-between items-center w-full text-4xl font-black text-slate-950 uppercase tracking-tighter group"
                        >
                          <span className={mobileMenuOpen === idx ? 'text-orange-500' : 'group-hover:text-orange-500'}>{item.title}</span>
                          <ChevronDown size={32} className={`transition-transform duration-500 ${mobileMenuOpen === idx ? 'rotate-180 text-orange-500' : 'text-slate-300'}`} />
                        </button>

                        <div className={`transition-all duration-700 overflow-hidden ${mobileMenuOpen === idx ? 'max-h-250 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="space-y-6 pl-6 py-6 border-l-4 border-orange-500/20">
                            {item.isMega ? (
                              item.links.map(col => (
                                <div key={col.category} className="space-y-4">
                                  <div className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">{col.category}</div>
                                  {col.items.map(link => (
                                    <Link
                                      key={link.label}
                                      to={link.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block text-2xl font-black text-slate-500 hover:text-slate-950 transition-colors uppercase tracking-tight"
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              ))
                            ) : (
                              item.links.map(link => (
                                <Link
                                  key={link.label}
                                  to={link.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-2xl font-black text-slate-500 hover:text-slate-950 transition-colors uppercase tracking-tight"
                                >
                                  {link.label}
                                </Link>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-8 space-y-4 bg-slate-50">
                <Link
                  to="/book-consult"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-6 bg-slate-950 text-white rounded-4xl font-black uppercase tracking-[0.3em] hover:bg-orange-500 transition-all shadow-2xl"
                >
                  Book a Consult
                </Link>
                <a
                  href="https://www.lmsathena.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-6 bg-orange-500 text-white rounded-4xl font-black uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-2xl"
                >
                  Login
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

