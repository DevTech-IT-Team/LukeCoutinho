import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Play, 
  MessageCircle, 
  Users, 
  Radio, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  Heart,
  Globe,
  Zap
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

// Assets
import phoneMockup from '../assets/Community/phone_mockup.png';

const CommunitySection = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: <Instagram size={28} />,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      desc: "Daily clinical shots and wellness wisdom.",
      href: "https://www.instagram.com/luke_coutinho/",
    },
    {
      name: "Facebook",
      icon: <Facebook size={28} />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      desc: "In-depth health articles and live sessions.",
      href: "https://www.facebook.com/LukeCoutinhoOfficial",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter size={28} />,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
      desc: "Real-time updates and medical insights.",
      href: "https://x.com/LukeCoutinho17",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={28} />,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      desc: "Professional health strategies and news.",
      href: "https://in.linkedin.com/in/lukecoutinho",
    }
  ];

  const socialGroups = [
    { name: "Intentions & Gratitude Sangha", type: "Facebook Group", icon: <Facebook /> },
    { name: "Luke's Wellness Tribe", type: "Vibrant Community", icon: <Users /> },
    { name: "Struggle to Strength", type: "Instagram Broadcast", icon: <Radio /> },
    { name: "Sangha Healing Circle", type: "WhatsApp Group", icon: <MessageCircle /> },
    { name: "Powerful Prayer Chain", type: "WhatsApp Group", icon: <MessageCircle /> },
    { name: "Luke Coutinho Wellness Channel", type: "WhatsApp Channel", icon: <MessageCircle />, href: "https://www.whatsapp.com/channel/0029VaEPuJ9EawdthbP8cz0K" },
    { name: "Holistic Wellness Sangha", type: "Facebook Group", icon: <Facebook /> }
  ];

  const instagramVideos = [
    { 
      id: 1, 
      thumb: "https://scontent.cdninstagram.com/v/t51.71878-15/654603536_1988888478372615_8816973372632324972_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=OI2-Y3KXyEsQ7kNvwHTqqu3&_nc_oc=Adqa7hcGdaXdaOz7I2z4bRmWB2eWLfJf1QWZmdRG0WdEg3iBmdBK9FX8XLXkBWtmFV8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Xc1wPESKpCwrjsx0wfd88g&_nc_ss=8&oh=00_Afy8En06JfhtLSEJIpUaYjOXk0RrYoksVx6LX9Z62kxCOg&oe=69C1739F", 
      title: "Humming: The Simple Tool for Nitric Oxide",
      link: "https://www.instagram.com/reel/DWAmHZiiLxX/",
    },
    { 
      id: 2, 
      thumb: "https://scontent.cdninstagram.com/v/t51.82787-15/652905235_18570454468008113_5610219742964975329_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=uJF6YdKn_GsQ7kNvwHEZH7u&_nc_oc=Adpk5gWJ6S-ity7KhCKL7k9mkoI41kTlDl3NVr7X9J6ypzTNJ7X1wxuzmxmpR7aE7OY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=CB1UIs5YpTYllslr8T7z7g&_nc_ss=8&oh=00_AfwwABo2ZgznLCOEfRWRIUUHgWZk3hmEIbo-eUDAEabpBg&oe=69C18712", 
      title: "Foundation over Hacks: Fat Loss Truth",
      link: "https://www.instagram.com/reel/DV_NgV0CXB_/",
    },
    { 
      id: 3, 
      thumb: "https://scontent.cdninstagram.com/v/t51.71878-15/653309660_1462816961860923_4753910284143483332_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=3QKoittvNvgQ7kNvwEJG67i&_nc_oc=Ado222USfT_J230DGZ36B-nSG0kDDnuX_Zuap-15MqpQJFiMPIxhf_Yv1q7JZ8AsTI8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=cb4le7YbfxzWfAvSUaJteA&_nc_ss=8&oh=00_AfwLYoqoA4yXn86u_G0-FNM70P2p-fesGODvdLE7lkRbKw&oe=69C1A28B", 
      title: "Loose Skin or Fat? The Full Picture",
      link: "https://www.instagram.com/reel/DWDM6hHCNhZ/",
    },
    { 
      id: 4, 
      thumb: "https://scontent.cdninstagram.com/v/t51.71878-15/652042019_1240075708195450_5061519399606902007_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=i6l-UjDYgHoQ7kNvwHdJAWP&_nc_oc=AdqSzC4oLTUv9KoDBk4pTQKqyFU7H1f_zoi3LEQ7gSPnhiPZRsc-8sOrft8IFZueO9A&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=IRI8qO6ECc34efQ4T5YQbw&_nc_ss=8&oh=00_AfzEnIbOBgjPgw3papN_AdfPhGrVr2HboSL3z_oKIS-rEg&oe=69C199DC", 
      title: "Loneliness: The Silent Healing Enemy",
      link: "https://www.instagram.com/reel/DV-GDw1iEZV/",
    },
    { 
      id: 5, 
      thumb: "https://scontent.cdninstagram.com/v/t51.71878-15/651406469_4244641439089838_9024755210352997167_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=QphQr8CSdUwQ7kNvwH66zG1&_nc_oc=Adq2B5KiGH9SbqV1ESjG2e-_Q_fMzPMteVi7DH93ruDDdq1Tc9LsneZjILM3udDM6-o&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0iYeG8uoI6St0WgS8PsW8Q&_nc_ss=8&oh=00_Afw3YRuBCc_phvc4qBSIoNxp9dbjqBMwqaEJbo5rM_7a5w&oe=69C17195", 
      title: "Extreme Heat: Clinical Hydration Tips",
      link: "https://www.instagram.com/reel/DV2lCQpiMGs/",
    }
  ];

  return (
    <section className="pt-16 pb-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-orange-50/50 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[40%] h-full bg-slate-50/50 blur-[120px] -z-10" />

      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header - Left Aligned & Tighter Spacing */}
        <div className="text-left mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-orange-200 bg-orange-50 text-[10px] font-black uppercase tracking-widest text-orange-600"
          >
            <Sparkles size={14} className="animate-pulse" />
            Vibrant Ecosystem
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-none"
          >
            Join Our <br/> 
            <span className="text-orange-500 italic">Global Community.</span>
          </motion.h2>
        </div>

        {/* Central Component Hub */}
        <div className="relative mb-48 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          
          {/* Left Column Platforms */}
          <div className="flex flex-col gap-12 lg:w-1/4">
            {socialPlatforms.slice(0, 2).map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col lg:items-end items-center text-center lg:text-right space-y-4"
              >
                <div className={`p-4 rounded-3xl ${platform.bgColor} ${platform.color} shadow-2xl transition-all group-hover:bg-orange-600 group-hover:text-white`}>
                  {platform.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-900 transition-colors uppercase">{platform.name}</h4>
                  <p className="text-sm font-medium text-slate-600 max-w-[240px] leading-tight">{platform.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Central PREMIUM Phone */}
          <div className="relative z-10">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Artistic Device Case */}
              <div className="w-[300px] h-[610px] bg-slate-950 rounded-[4rem] p-4 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] border-[14px] border-slate-900 relative overflow-hidden group">
                <img src={phoneMockup} alt="Mockup" className="w-full h-full object-cover grayscale-[0.2] transition-all group-hover:grayscale-0" />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                
                <a href="https://www.instagram.com/reel/DWDM6hHCNhZ/" target="_blank" rel="noopener noreferrer" 
                  className="absolute inset-0 flex items-center justify-center group-hover:bg-orange-500/10 transition-all">
                  <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-[0_0_50px_rgba(249,115,22,0.5)]">
                    <Play fill="currentColor" size={28} className="ml-1" />
                  </div>
                </a>
              </div>
              
              {/* Backglow for the phone */}
              <div className="absolute -inset-10 bg-orange-100 blur-[80px] -z-10 opacity-30"></div>
            </motion.div>
          </div>

          {/* Right Column Platforms */}
          <div className="flex flex-col gap-12 lg:w-1/4">
            {socialPlatforms.slice(2, 4).map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col lg:items-start items-center text-center lg:text-left space-y-4"
              >
                <div className={`p-4 rounded-3xl ${platform.bgColor} ${platform.color} shadow-2xl transition-all group-hover:bg-orange-600 group-hover:text-white`}>
                  {platform.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-slate-900 transition-colors uppercase">{platform.name}</h4>
                  <p className="text-sm font-medium text-slate-600 max-w-[240px] leading-tight">{platform.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Global Groups Scroller - Pure & Light */}
        <div className="mb-48 py-10 border-y border-slate-100">
           <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={'auto'}
            freeMode={true}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5000}
            className="overflow-visible"
          >
            {socialGroups.map((group, idx) => (
              <SwiperSlide key={idx} className="!w-auto">
                <div className="px-10 py-5 rounded-full bg-white border border-slate-200 flex items-center gap-4 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/5 transition-all text-slate-900 cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <span className="text-sm font-bold">{group.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* REELS SECTION - NO WHITE OVERLAY */}
        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-slate-100">
            <div className="text-left space-y-4">
               <div className="text-orange-600 font-black uppercase text-[10px] tracking-[0.4em]">Wisdom in Motion</div>
               <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">Enter the Vault.</h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
               <a href="https://www.instagram.com/luke_coutinho/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-950 text-white font-black rounded-full hover:bg-orange-600 transition-all shadow-xl text-[10px] uppercase tracking-widest">
                 Join the Community
               </a>
               <a href="https://www.whatsapp.com/channel/0029VaEPuJ9EawdthbP8cz0K" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-orange-50 text-orange-600 font-black rounded-full border border-orange-100 hover:bg-orange-600 hover:text-white transition-all text-[10px] uppercase tracking-widest">
                 #WellnessTribe
               </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
            {instagramVideos.map((video, idx) => (
              <motion.a 
                key={idx}
                href={video.link}
                target="_blank"
                whileHover={{ y: -12 }}
                className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden group shadow-2xl bg-slate-100"
              >
                {/* PURE IMAGE - NO FILTER UNLESS HOVERED */}
                <img src={video.thumb} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Minimalist Interaction layer */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all"></div>
                
                {/* Content - Visible on hover or at bottom sparingly */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <div className="translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 shadow-xl">
                        <Play fill="currentColor" size={16} className="ml-0.5" />
                      </div>
                      <h4 className="text-sm font-black text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        {video.title}
                      </h4>
                   </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;
