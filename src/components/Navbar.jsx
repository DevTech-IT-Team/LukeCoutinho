import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/LClogoo.png';

const navConfig = [
	{ title: 'Programs', href: '/programs/signature-wellness' },
	{ title: 'Workshops', href: '/Workshop/IndividualFamilyMasterclass/Home' },
	{ title: 'Podcast', href: '/Podcast/Podcast' },
	{ title: 'Resources', href: '/learn/learninghub/home' },
	{ title: 'Bharat', href: '/bharat/dish' },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();
	// Pages with dark hero — render the bar transparent over them at the top.
	const darkHeroPaths = ['/payment', '/payment-success'];
	const isDarkHero =
		darkHeroPaths.includes(location.pathname) || location.pathname.startsWith('/course/');
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);
	// Close drawer on route change
	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);
	const overDark = isDarkHero && !scrolled;
	const barBg = scrolled
		? 'bg-[#FDFAF5]/92 backdrop-blur-xl border-b border-[rgba(26,20,16,0.08)]'
		: overDark
		? 'bg-transparent border-b border-transparent'
		: 'bg-[#FDFAF5] border-b border-[rgba(26,20,16,0.06)]';
	const inkText = overDark ? 'text-white' : 'text-[#1A1410]';
	const mutedText = overDark ? 'text-white/60' : 'text-[rgba(26,20,16,0.55)]';
	const hoverInk = 'hover:text-[#E8640A]';
	return (
			<nav
			       className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${barBg} ${
				       scrolled ? 'h-[72px]' : 'h-[88px]'
			       }`}
		       >
			       <div className="mx-auto max-w-[1440px] h-full px-6 md:px-10 lg:px-14">
				       <div className="flex items-center justify-between h-full gap-10">
					       {/* ============ LOGO ============ */}
					       <Link to="/" className="shrink-0 flex items-center gap-3 group">
						       <img
							       src={logo}
							       alt="Luke Coutinho"
							       className={`w-auto transition-all duration-500 ${
								       scrolled ? 'h-10' : 'h-12'
							       } ${overDark ? 'invert brightness-200' : ''}`}
						       />
					       </Link>
					       {/* ============ DESKTOP NAV ============ */}
					       <ul className="hidden xl:flex items-center gap-1">
						       {navConfig.map((item) => (
							       <li key={item.title} className="relative">
								       <Link
									       to={item.href}
									       className={`group relative inline-flex items-center px-4 py-7 font-[Arial] text-[10px] uppercase tracking-[0.32em] ${inkText} ${hoverInk} transition-colors duration-500`}
								       >
									       {item.title}
									       <span className="pointer-events-none absolute left-4 right-4 bottom-5 h-px bg-[#E8640A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
								       </Link>
							       </li>
						       ))}
					       </ul>
					       {/* ============ ACTIONS ============ */}
					       <div className="flex items-center gap-3 shrink-0">
						       <Link
							       to="/book-consult"
							       className={`hidden lg:inline-flex items-center font-[Arial] text-[10px] uppercase tracking-[0.32em] py-2 ${mutedText} ${hoverInk} transition-colors duration-500`}
						       >
							       Book a Consult
						       </Link>
						       <a
							       href="https://www.lmsathena.com/login"
							       target="_blank"
							       rel="noopener noreferrer"
							       className={`hidden lg:inline-flex items-center gap-2 px-6 py-3 font-[Arial] text-[10px] uppercase tracking-[0.32em] text-white transition-all duration-500 ${
								       overDark
									       ? 'bg-[#E8640A] hover:bg-white hover:text-[#1A1410]'
									       : 'bg-[#1A1410] hover:bg-[#E8640A]'
							       }`}
						       >
							       Member Login
							       <ArrowUpRight size={12} strokeWidth={1.5} />
						       </a>
						       {/* Mobile toggle */}
						       <button
							       type="button"
							       onClick={() => setIsOpen(true)}
							       aria-label="Open navigation"
							       className={`xl:hidden inline-flex items-center justify-center w-11 h-11 border ${
								       overDark
									       ? 'border-white/30 text-white hover:bg-white hover:text-[#1A1410]'
									       : 'border-[rgba(26,20,16,0.15)] text-[#1A1410] hover:bg-[#1A1410] hover:text-white'
							       } transition-colors duration-500`}
						       >
							       <Menu size={18} strokeWidth={1.5} />
						       </button>
					       </div>
				       </div>
			       </div>
			       {/* ============ MOBILE DRAWER ============ */}
			       <AnimatePresence>
				       {isOpen && (
					       <motion.div
						       initial={{ opacity: 0 }}
						       animate={{ opacity: 1 }}
						       exit={{ opacity: 0 }}
						       className="fixed inset-0 z-[200] xl:hidden"
					       >
						       <div
							       className="absolute inset-0 bg-[#1A1410]/70 backdrop-blur-sm"
							       onClick={() => setIsOpen(false)}
						       />
						       <motion.aside
							       initial={{ x: '100%' }}
							       animate={{ x: 0 }}
							       exit={{ x: '100%' }}
							       transition={{ type: 'tween', duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
							       className="absolute right-0 top-0 h-full w-[88%] sm:w-[440px] bg-[#FDFAF5] flex flex-col"
						       >
							       <div className="flex items-center justify-between px-7 h-[88px] border-b border-[rgba(26,20,16,0.08)]">
								       <Link to="/" onClick={() => setIsOpen(false)}>
									       <img src={logo} alt="Luke Coutinho" className="h-9 w-auto" />
								       </Link>
								       <button
									       type="button"
									       onClick={() => setIsOpen(false)}
									       aria-label="Close navigation"
									       className="w-11 h-11 border border-[rgba(26,20,16,0.15)] inline-flex items-center justify-center text-[#1A1410] hover:bg-[#1A1410] hover:text-white transition-colors duration-500"
								       >
									       <X size={18} strokeWidth={1.5} />
								       </button>
							       </div>
							       <div className="flex-1 overflow-y-auto px-7 py-10">
								       <div className="flex items-center gap-3 mb-8">
									       <span className="block w-6 h-px bg-[#E8640A]" />
									       <p className="font-[Arial] text-[9px] uppercase tracking-[0.4em] text-[#E8640A]">
										       Menu
									       </p>
								       </div>
								       <ul className="divide-y divide-[rgba(26,20,16,0.08)]">
									       <li>
										       <Link
											       to="/"
											       onClick={() => setIsOpen(false)}
											       className="flex items-center justify-between py-5 font-['EB_Garamond',Georgia,serif] italic text-[28px] leading-none text-[#1A1410] hover:text-[#E8640A] transition-colors"
										       >
											       Home
											       <ArrowUpRight size={16} strokeWidth={1.25} />
										       </Link>
									       </li>
									       {navConfig.map((item) => (
										       <li key={item.title}>
											       <Link
												       to={item.href}
												       onClick={() => setIsOpen(false)}
												       className="flex items-center justify-between py-5 font-['EB_Garamond',Georgia,serif] italic text-[28px] leading-none text-[#1A1410] hover:text-[#E8640A] transition-colors"
											       >
												       {item.title}
												       <ArrowUpRight size={16} strokeWidth={1.25} />
											       </Link>
										       </li>
									       ))}
								       </ul>
							       </div>
							       <div className="p-7 border-t border-[rgba(26,20,16,0.08)] bg-[#FAF6EE] space-y-3">
								       <Link
									       to="/book-consult"
									       onClick={() => setIsOpen(false)}
									       className="group w-full inline-flex items-center justify-between bg-[#1A1410] text-white px-6 py-4 font-[Arial] text-[10px] uppercase tracking-[0.32em] hover:bg-[#E8640A] transition-colors duration-500"
								       >
									       Book a Consult
									       <ArrowUpRight
										       size={14}
										       strokeWidth={1.5}
										       className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-500"
									       />
								       </Link>
								       <a
									       href="https://www.lmsathena.com/login"
									       target="_blank"
									       rel="noopener noreferrer"
									       onClick={() => setIsOpen(false)}
									       className="w-full inline-flex items-center justify-between border border-[rgba(26,20,16,0.15)] text-[#1A1410] px-6 py-4 font-[Arial] text-[10px] uppercase tracking-[0.32em] hover:bg-[#1A1410] hover:text-white transition-colors duration-500"
								       >
									       Member Login
									       <ArrowUpRight size={14} strokeWidth={1.5} />
								       </a>
							       </div>
						       </motion.aside>
					       </motion.div>
				       )}
			       </AnimatePresence>
		       </nav>
		);
	};

	export default Navbar;