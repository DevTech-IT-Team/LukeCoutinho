import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Search, Globe, User } from 'lucide-react';

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
      title: 'Our World',
      links: [
        { label: 'Our Story', href: '/about/story', desc: 'Journey of Wellness' },
        { label: 'Vision & Mission', href: '/about/vision', desc: 'Our North Star' },
        { label: 'Our Approach', href: '/about/approach', desc: 'Backed by Science' },
        { label: 'CSR Initiatives', href: '/about/team', desc: 'Giving Back' },
        { label: 'Media & Awards', href: '/about/team', desc: 'Global Recognition' },
      ],
    },
    {
      title: 'Programs',
      isMega: true,
      links: [
        { 
          category: 'Individual & Family',
          items: [
            { label: 'Signature Wellness Programs', href: '/programs/signature-wellness', desc: 'Comprehensive Care' },
            { label: 'Special Cancer Care Programs', href: '/programs/cancer-care', desc: 'Integrative Support' },
            { label: 'Gut Care Program', href: '/programs/gut', desc: 'Microbiome Health' },
            { label: 'Pregnancy Care Program', href: '/programs/pregnancy', desc: 'Conscious Parenting' },
            { label: 'Nutrition for Children Program', href: '/programs/children', desc: 'Holistic Growth' },
            { label: 'Hormonal Care Program', href: '/programs/hormonal', desc: 'Balance & Vitality' },
            { label: 'GLP-1 Drug Lifestyle Support', href: '/programs/glp1', desc: 'Medical Optimization' },
          ]
        },
        { 
          category: 'Enterprise & Results',
          items: [
            { label: 'Corporate Wellness Programs', href: '/programs/weight', desc: 'Peak Performance' },
            { label: 'Client Success Stories', href: '/programs/chronic', desc: 'Inspiring Journeys' },
          ]
        }
      ],
    },
    {
      title: 'Workshops',
      links: [
        { label: 'Individual Masterclass', href: '/Workshop/IndividualFamilyMasterclass/Home', desc: 'Deep Dive Sessions' },
        { label: 'Corporate Webinars', href: '/Workshop/CorporateTalks/Home', desc: 'Team Optimization' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Knowledge Hub', href: '/resources', desc: 'Blogs & Downloads' },
        { label: 'Recipe Corner', href: '/learn/RecipeCorner/Home', desc: 'Nutritional Art' },
        { label: 'Learning Hub', href: '/learn/Learninghub/Home', desc: 'Expert Courses' },
      ],
    },
    {
      title: 'Bharat',
      href: '/bharat/dish',
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-sans ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg h-16' : 'bg-white h-20'
      }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-orange-200">
                <span className="text-white font-black text-xl italic">L</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900">
                Luke<span className="text-orange-500">coutinho</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navConfig.map((item) => (
              <div key={item.title} className="relative group">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="flex items-center px-4 py-2 text-[15px] font-bold text-slate-800 hover:text-orange-600 transition-all rounded-full hover:bg-slate-50 outline-none uppercase tracking-tighter"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center px-4 py-2 text-[15px] font-bold text-slate-800 group-hover:text-orange-600 transition-all rounded-full hover:bg-slate-50 outline-none uppercase tracking-tighter">
                      {item.title}
                      <ChevronDown size={14} className="ml-1 opacity-20 transition-transform duration-300 group-hover:rotate-180 group-hover:opacity-100" />
                    </button>

                    {item.isMega ? (
                      /* MEGA MENU - 2 COLUMNS */
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 z-[110] p-8 overflow-hidden">
                        <div className="grid grid-cols-2 gap-10">
                          {item.links.map((col) => (
                            <div key={col.category} className="space-y-6">
                              <div className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] pb-2 border-b border-orange-100">{col.category}</div>
                              <div className="space-y-1">
                                {col.items.map((link) => (
                                  <Link
                                    key={link.label}
                                    to={link.href}
                                    className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-orange-50 transition-all duration-300"
                                  >
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-200 group-hover/item:bg-orange-500 transition-colors shrink-0" />
                                    <div>
                                      <div className="text-[14px] font-bold text-slate-900 group-hover/item:text-orange-600 transition-colors uppercase tracking-tight leading-tight">
                                        {link.label}
                                      </div>
                                      <div className="text-[11px] font-bold text-slate-400 group-hover/item:text-slate-600 transition-colors mt-0.5">
                                        {link.desc}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* STANDARD DROPDOWN */
                      <div className="absolute left-0 mt-2 w-[300px] bg-white border border-slate-100 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 z-[110] p-4 overflow-hidden">
                        <div className="space-y-1">
                          {item.links.map((link) => (
                            <Link
                              key={link.label}
                              to={link.href}
                              className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-orange-50 transition-all duration-300"
                            >
                              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-200 group-hover/item:bg-orange-500 transition-colors shrink-0" />
                              <div>
                                <div className="text-[14px] font-bold text-slate-900 group-hover/item:text-orange-600 transition-colors uppercase tracking-tight leading-tight">
                                  {link.label}
                                </div>
                                <div className="text-[11px] font-bold text-slate-400 group-hover/item:text-slate-600 transition-colors mt-0.5">
                                  {link.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <Link to="/Podcast/Podcast" className="px-4 py-2 text-[15px] font-bold text-slate-800 hover:text-orange-600 transition-all rounded-full hover:bg-slate-50 uppercase tracking-tighter">
              Podcast
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1">
            <div className="hidden sm:flex items-center space-x-0.5 border-r border-slate-100 pr-2 mr-1">
              <button className="p-2 text-slate-600 hover:bg-slate-50 hover:text-orange-500 rounded-xl transition-all" aria-label="Search">
                <Search size={18} />
              </button>
              <button className="p-2 text-slate-600 hover:bg-slate-50 hover:text-orange-500 rounded-xl transition-all" aria-label="Profile">
                <User size={18} />
              </button>
            </div>

            <Link
              to="/ContactUs/ContactUs"
              className="hidden md:flex bg-slate-900 text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-slate-100 active:scale-95 whitespace-nowrap"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="xl:hidden p-2.5 rounded-xl bg-slate-50 text-slate-800 hover:bg-orange-50 hover:text-orange-500 transition-all border border-transparent"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[200] xl:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Content */}
        <div className={`absolute right-0 top-0 h-full w-[85%] sm:w-[400px] bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

          <div className="p-5 flex justify-between items-center border-b border-slate-50">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm italic">L</span>
              </div>
              <span className="font-bold text-slate-900 tracking-tight">Navigation</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-slate-800 transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1.5">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3.5 text-base font-bold text-slate-900 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                Home
              </a>

              {navConfig.map((item, idx) => (
                <div key={item.title} className="mb-1">
                  {item.href ? (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex justify-between items-center w-full px-4 py-3.5 text-base font-bold text-slate-900 hover:bg-slate-50 transition-all rounded-2xl"
                    >
                      {item.title}
                      <ArrowRight size={18} className="text-slate-400" />
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setMobileMenuOpen(mobileMenuOpen === idx ? null : idx)}
                        className={`flex justify-between items-center w-full px-4 py-3.5 text-base font-bold transition-all rounded-2xl ${mobileMenuOpen === idx ? 'bg-orange-50 text-orange-600' : 'text-slate-900 hover:bg-slate-50'
                          }`}
                      >
                        {item.title}
                        <ChevronDown size={18} className={`transition-transform duration-300 ${mobileMenuOpen === idx ? 'rotate-180' : 'text-slate-400'}`} />
                      </button>

                      <div className={`transition-all duration-300 overflow-hidden ${mobileMenuOpen === idx ? 'max-h-[800px] opacity-100 mt-1' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="bg-slate-50/50 rounded-2xl py-1 mx-2">
                          {item.isMega ? (
                            /* MOBILE MEGA MENU */
                            <div className="space-y-4 p-4">
                              {item.links.map(col => (
                                <div key={col.category} className="space-y-2">
                                  <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest pl-2">{col.category}</div>
                                  {col.items.map(link => (
                                    <Link
                                      key={link.label}
                                      to={link.href}
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center px-4 py-3 text-[14px] text-slate-600 font-semibold hover:text-orange-600 transition-colors"
                                    >
                                      <ArrowRight size={14} className="mr-3 text-orange-400 opacity-50" />
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          ) : (
                            item.links.map(link => (
                              <Link
                                key={link.label}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-5 py-3 text-[14px] text-slate-600 font-semibold hover:text-orange-600 transition-colors"
                              >
                                <ArrowRight size={14} className="mr-3 text-orange-400 opacity-50" />
                                {link.label}
                              </Link>
                            ))
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}

              <Link
                to="/Podcast/Podcast"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3.5 text-base font-bold text-slate-900 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                Podcast
              </Link>
            </div>

            <div className="mt-8 px-4 py-6 bg-slate-50 rounded-3xl">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Links</p>
              <div className="grid grid-cols-2 gap-4">
                <a href="/login" className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <User size={20} className="text-orange-500 mb-2" />
                  <span className="text-xs font-bold text-slate-700">Account</span>
                </a>
                <a href="/search" className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <Search size={20} className="text-orange-500 mb-2" />
                  <span className="text-xs font-bold text-slate-700">Search</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-slate-50">
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-4 bg-orange-500 text-white rounded-2xl font-bold shadow-lg shadow-orange-100 hover:bg-slate-900 transition-all active:scale-[0.98]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
