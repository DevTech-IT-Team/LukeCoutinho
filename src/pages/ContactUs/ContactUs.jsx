import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
    return (
        <section className="py-24 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* --- DYNAMIC HEADER --- */}
                <div className="relative mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="w-12 h-[1px] bg-orange-500"></span>
                        <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]">Reach Out</span>
                    </motion.div>

                    <h2 className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.8] uppercase">
                        Let's Start <br />
                        <span className="text-orange-400 italic  lowercase font-light">a Conversation</span>
                    </h2>

                    <div className="absolute top-0 right-0 hidden lg:block">
                        <div className="flex flex-col gap-6 items-center">
                            <div className="h-24 w-[1px] bg-gray-100"></div>
                            <div className="flex flex-col gap-4 text-gray-300">
                                <Instagram size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
                                <Linkedin size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
                                <Twitter size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* --- LEFT: MINIMALIST FORM --- */}
                    <div className="lg:col-span-7">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group relative">
                                    <input type="text" required className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-orange-500 transition-colors peer text-slate-900 font-medium" />
                                    <label className="absolute left-0 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-orange-500 peer-valid:-top-4 peer-valid:text-[10px] uppercase font-black tracking-widest">Your Name</label>
                                </div>
                                <div className="group relative">
                                    <input type="email" required className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-orange-500 transition-colors peer text-slate-900 font-medium" />
                                    <label className="absolute left-0 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-orange-500 peer-valid:-top-4 peer-valid:text-[10px] uppercase font-black tracking-widest">Email Address</label>
                                </div>
                            </div>

                            <div className="group relative">
                                <label className="absolute left-0 -top-4 text-[10px] text-orange-500 uppercase font-black tracking-widest">
                                    Mobile Number
                                </label>

                                <PhoneInput
                                    country={"in"} // default country
                                    enableSearch
                                    disableSearchIcon={false}
                                    countryCodeEditable={false}
                                    inputStyle={{
                                        width: "100%",
                                        background: "transparent",
                                        border: "none",
                                        borderBottom: "1px solid #e5e7eb",
                                        borderRadius: "0px",
                                        paddingLeft: "48px",
                                        paddingRight: "12px",
                                        height: "56px",
                                        fontSize: "16px",
                                        color: "#0f172a",
                                        fontWeight: "500"
                                    }}
                                    buttonStyle={{
                                        border: "none",
                                        background: "transparent"
                                    }}
                                    dropdownStyle={{
                                        borderRadius: "16px",
                                        border: "1px solid #eee",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
                                    }}
                                    containerStyle={{ marginTop: "8px" }}
                                />
                            </div>

                            <div className="group relative">
                                <select className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-orange-500 transition-colors peer text-slate-900 font-medium appearance-none">
                                    <option>Wellness Program Inquiry</option>
                                    <option>Corporate Partnership</option>
                                    <option>Career Interest</option>
                                </select>
                                <label className="absolute left-0 -top-4 text-[10px] text-orange-500 uppercase font-black tracking-widest">Service Interest</label>
                            </div>

                            <div className="group relative">
                                <textarea required rows="4" className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-orange-500 transition-colors peer text-slate-900 font-medium resize-none"></textarea>
                                <label className="absolute left-0 top-4 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-orange-500 peer-valid:-top-4 peer-valid:text-[10px] uppercase font-black tracking-widest">Tell us your story</label>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-all shadow-xl shadow-gray-200"
                            >
                                Send Message
                                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20">
                                    <ArrowRight size={14} />
                                </div>
                            </motion.button>
                        </form>
                    </div>

                    {/* --- RIGHT: INFO CARDS --- */}
                    <div className="lg:col-span-5 lg:pl-12 space-y-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 group transition-all"
                        >
                            <Mail className="text-orange-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Digital Correspondence</h4>
                            <p className="text-2xl font-black text-slate-900">info@lukecoutinho.com</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 flex items-center gap-6 shadow-sm">
                                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Us</p>
                                    <p className="font-bold text-slate-900">+91 1800 102 0234</p>
                                </div>
                            </div>

                            <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 flex items-center gap-6 shadow-sm">
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-slate-900">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mumbai HQ</p>
                                    <p className="font-bold text-slate-900">Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Availability Visualizer */}
                        <div className="pt-6 px-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-black text-slate-900 uppercase">Response Time</span>
                                <span className="text-[10px] font-black text-orange-500 uppercase">Avg. 2 Hours</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '85%' }}
                                    className="h-full bg-orange-500 rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;