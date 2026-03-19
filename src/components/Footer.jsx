import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-900 pt-12 md:pt-16 pb-8 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold max-w-md leading-tight text-slate-900">
            Sign up for our newsletter and move from <span className="text-orange-500">struggle to strength.</span>
          </h2>
          
          {/* Responsive Input Container */}
          <div className="flex w-full lg:w-auto gap-2 items-center border-b-2 border-slate-200 focus-within:border-orange-500 transition-colors pb-1">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-none outline-none py-2 w-full lg:w-64 placeholder:text-slate-400 text-slate-900 text-sm md:text-base"
            />
            <button className="text-orange-500 hover:text-orange-700 font-bold text-xs md:text-sm uppercase tracking-widest px-2 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-slate-200 mb-12" />

        {/* Links Grid - Optimized for Mobile (1 column), Tablet (2), and Desktop (4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 mb-12">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-tighter border-l-2 border-orange-500 pl-3">About</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Luke</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Luke’s Wellness Programs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Corporate Wellness Programs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Book a Consult</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Talks and Webinars by Luke</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Shop</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-tighter border-l-2 border-orange-500 pl-3">Resources</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Recipe Corner</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Books by Luke</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Awards & Media</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5 text-sm uppercase tracking-tighter border-l-2 border-orange-500 pl-3">Legal</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Public Disclosure</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Programs Terms</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-8 lg:space-y-6">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">Email Us</p>
              <a href="mailto:info@lukecoutinho.com" className="text-slate-900 font-semibold hover:text-orange-500 transition-colors text-sm break-all">
                info@lukecoutinho.com
              </a>
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">Toll Free</p>
              <p className="text-slate-900 font-semibold text-sm">1800 102 0253</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[Facebook, Twitter, Youtube, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2.5 border border-slate-200 rounded-full text-slate-400 hover:border-orange-500 hover:text-orange-500 transition-all bg-white shadow-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center md:text-left">
            © 2026 Luke Coutinho. All Rights Reserved.
          </p>
          {/* <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <a href="#" className="hover:text-orange-500">Sitemap</a>
             <a href="#" className="hover:text-orange-500">Privacy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;