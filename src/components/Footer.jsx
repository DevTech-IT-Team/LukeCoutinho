import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Linkedin, Instagram, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-white text-slate-950 pt-32 pb-12 overflow-hidden relative">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        
        {/* Upper Footer: Newsletter & Brand */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-24 pb-24 border-b border-slate-50">
          <div className="space-y-10">
            <Link to="/" className="flex items-center gap-4 group w-fit">
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center transition-all group-hover:bg-orange-500">
                <span className="text-white font-black text-2xl italic">L</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-black tracking-tighter text-slate-950 group-hover:text-orange-500 transition-colors">
                  Luke<span className="text-orange-500 group-hover:text-slate-950">coutinho</span>
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-1 pr-1 border-r-2 border-slate-100 inline-block">Integrative Lifestyle</span>
              </div>
            </Link>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 leading-[0.9] tracking-tighter">
              From struggle to <span className="text-orange-500 italic">Evolution.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-xl text-slate-500 font-medium max-w-md">Subscribe to our clinical insights and wellness protocols.</p>
            <div className="flex items-center gap-4 p-2 bg-slate-50 rounded-3xl border border-slate-100 focus-within:border-orange-500 transition-all group">
              <input 
                type="email" 
                placeholder="email@protocol.com" 
                className="bg-transparent border-none outline-none px-6 py-4 flex-1 text-slate-950 font-bold placeholder:text-slate-300"
              />
              <button className="bg-slate-950 text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-500 transition-all whitespace-nowrap shadow-xl">
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Middle Footer: Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em]">Practices</h4>
            <ul className="space-y-4">
              {['Signature Wellness', 'Cancer Care', 'Gut Health', 'Hormonal Care', 'Children Growth'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 font-bold hover:text-slate-950 transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em]">Learning</h4>
            <ul className="space-y-4">
              {['Masterclasses', 'Expert Courses', 'Recipe Corner', 'Resource Hub', 'Wisdom Blogs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 font-bold hover:text-slate-950 transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em]">Corporate</h4>
            <ul className="space-y-4">
              {['Wellness Programs', 'Team Seminars', 'Global Keynotes', 'CSR Initiatives', 'Executive Coaching'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 font-bold hover:text-slate-950 transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em]">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Protocol', 'Terms of Care', 'Public Disclosure', 'Program Ethics', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 font-bold hover:text-slate-950 transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em]">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-orange-500 transition-all cursor-pointer">
                 <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-orange-500 shadow-sm transition-all"><Mail size={18} /></div>
                 <div>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Global Support</p>
                   <p className="text-sm font-black text-slate-950">info@lukecoutinho.com</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-orange-500 transition-all cursor-pointer">
                 <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:text-orange-500 shadow-sm transition-all"><Phone size={18} /></div>
                 <div>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Toll Free</p>
                   <p className="text-sm font-black text-slate-950">1800 102 0253</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Footer: Copyright & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-slate-100">
          <div className="flex items-center gap-8">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">&copy; {currentYear} Luke Coutinho Wellness</p>
            <div className="h-4 w-[1px] bg-slate-200 hidden md:block" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Integrative Healthcare Ecosystem</p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all shadow-sm hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;