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
  Zap,
  MessageSquare
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
      icon: <Instagram size={24} />,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      desc: "Daily clinical shots & wisdom.",
      href: "https://www.instagram.com/luke_coutinho/",
    },
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      desc: "Live sessions & health articles.",
      href: "https://www.facebook.com/LukeCoutinhoOfficial",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
      desc: "Real-time updates & insights.",
      href: "https://x.com/LukeCoutinho17",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      desc: "Professional health strategies.",
      href: "https://in.linkedin.com/in/lukecoutinho",
    }
  ];

  const socialGroups = [
    { name: "Intentions Sangha", icon: <Heart /> },
    { name: "Wellness Tribe", icon: <Users /> },
    { name: "Support Circle", icon: <MessageSquare /> },
    { name: "Healing Sangha", icon: <Zap /> },
    { name: "Prayer Chain", icon: <Sparkles /> },
    { name: "Lifestyle Hub", icon: <Globe /> },
  ];

  const instagramVideos = [
    { id: 1, thumb: "https://scontent.cdninstagram.com/v/t51.71878-15/654603536_1988888478372615_8816973372632324972_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=OI2-Y3KXyEsQ7kNvwHTqqu3&_nc_oc=Adqa7hcGdaXdaOz7I2z4bRmWB2eWLfJf1QWZmdRG0WdEg3iBmdBK9FX8XLXkBWtmFV8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=Xc1wPESKpCwrjsx0wfd88g&_nc_ss=8&oh=00_Afy8En06JfhtLSEJIpUaYjOXk0RrYoksVx6LX9Z62kxCOg&oe=69C1739F", title: "Simple Tool for Nitric Oxide", link: "https://www.instagram.com/reel/DWAmHZiiLxX/" },
    { id: 2, thumb: "https://scontent.cdninstagram.com/v/t51.82787-15/652905235_18570454468008113_5610219742964975329_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=uJF6YdKn_GsQ7kNvwHEZH7u&_nc_oc=Adpk5gWJ6S-ity7KhCKL7k9mkoI41kTlDl3NVr7X9J6ypzTNJ7X1wxuzmxmpR7aE7OY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=CB1UIs5YpTYllslr8T7z7g&_nc_ss=8&oh=00_AfwwABo2ZgznLCOEfRWRIUUHgWZk3hmEIbo-eUDAEabpBg&oe=69C18712", title: "The Fat Loss Truth", link: "https://www.instagram.com/reel/DV_NgV0CXB_/" },
    { id: 3, thumb: "https://scontent.cdninstagram.com/v/t51.71878-15/653309660_1462816961860923_4753910284143483332_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=109&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=3QKoittvNvgQ7kNvwEJG67i&_nc_oc=Ado222USfT_J230DGZ36B-nSG0kDDnuX_Zuap-15MqpQJFiMPIxhf_Yv1q7JZ8AsTI8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=cb4le7YbfxzWfAvSUaJteA&_nc_ss=8&oh=00_AfwLYoqoA4yXn86u_G0-FNM70P2p-fesGODvdLE7lkRbKw&oe=69C1A28B", title: "Loose Skin or Fat?", link: "https://www.instagram.com/reel/DWDM6hHCNhZ/" },
    { id: 4, thumb: "https://scontent.cdninstagram.com/v/t51.71878-15/652042019_1240075708195450_5061519399606902007_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=i6l-UjDYgHoQ7kNvwHdJAWP&_nc_oc=AdqSzC4oLTUv9KoDBk4pTQKqyFU7H1f_zoi3LEQ7gSPnhiPZRsc-8sOrft8IFZueO9A&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=IRI8qO6ECc34efQ4T5YQbw&_nc_ss=8&oh=00_AfzEnIbOBgjPgw3papN_AdfPhGrVr2HboSL3z_oKIS-rEg&oe=69C199DC", title: "The Silent Healing Enemy", link: "https://www.instagram.com/reel/DV-GDw1iEZV/" },
    { id: 5, thumb: "https://scontent.cdninstagram.com/v/t51.71878-15/651406469_4244641439089838_9024755210352997167_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=QphQr8CSdUwQ7kNvwH66zG1&_nc_oc=Adq2B5KiGH9SbqV1ESjG2e-_Q_fMzPMteVi7DH93ruDDdq1Tc9LsneZjILM3udDM6-o&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=0iYeG8uoI6St0WgS8PsW8Q&_nc_ss=8&oh=00_Afw3YRuBCc_phvc4qBSIoNxp9dbjqBMwqaEJbo5rM_7a5w&oe=69C17195", title: "Clinical Hydration Tips", link: "https://www.instagram.com/reel/DV2lCQpiMGs/" }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      
      {/* Immersive Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl space-y-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-slate-50 rounded-full border border-slate-100"
          >
            <Globe size={18} className="text-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Ecosystem Connection</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter"
          >
            Join the Global <br />
            <span className="text-orange-500 italic font-light">Wellness Tribe.</span>
          </motion.h2>
          
          <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            A vibrant ecosystem of healing, wisdom, and collective growth spread across every digital frontier.
          </p>
        </div>

        {/* Central Component Hub */}
        <div className="relative mb-40 flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-40">
          
          {/* Left Column Platforms */}
          <div className="flex flex-col gap-16 lg:w-1/4">
            {socialPlatforms.slice(0, 2).map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                whileHover={{ x: 10 }}
                className="group flex flex-col items-center lg:items-end text-center lg:text-right space-y-4"
              >
                <div className={`w-16 h-16 rounded-3xl ${platform.bgColor} ${platform.color} flex items-center justify-center shadow-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-500`}>
                  {platform.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 group-hover:text-slate-950 transition-colors uppercase">{platform.name}</h4>
                  <p className="text-lg font-bold text-slate-600 leading-tight">{platform.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Device Showcase */}
          <div className="relative">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="w-[320px] h-[650px] bg-slate-950 rounded-[4.5rem] p-4 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.3)] border-[14px] border-slate-900 relative overflow-hidden group">
                <img 
                  src={phoneMockup} 
                  alt="Mockup" 
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-[1s] group-hover:grayscale-0 scale-105" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <a href={instagramVideos[0].link} target="_blank" rel="noopener noreferrer" 
                  className="absolute inset-0 flex items-center justify-center group-hover:bg-orange-500/10 transition-all duration-500">
                  <div className="w-24 h-24 rounded-full bg-orange-500/90 backdrop-blur-md flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition-all">
                    <Play fill="currentColor" size={32} className="ml-1.5" />
                  </div>
                </a>
              </div>
            </motion.div>
            {/* Visual Halo */}
            <div className="absolute -inset-20 bg-orange-500/10 blur-[100px] -z-0 rounded-full" />
          </div>

          {/* Right Column Platforms */}
          <div className="flex flex-col gap-16 lg:w-1/4">
            {socialPlatforms.slice(2, 4).map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                whileHover={{ x: -10 }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
              >
                <div className={`w-16 h-16 rounded-3xl ${platform.bgColor} ${platform.color} flex items-center justify-center shadow-lg group-hover:bg-orange-500 group-hover:text-white transition-all duration-500`}>
                  {platform.icon}
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 group-hover:text-slate-950 transition-colors uppercase">{platform.name}</h4>
                  <p className="text-lg font-bold text-slate-600 leading-tight">{platform.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Global Groups Scroller */}
        <div className="mb-40 py-12 border-y border-slate-100">
           <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={40}
            slidesPerView={'auto'}
            freeMode={true}
            loop={true}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            speed={4000}
            className="overflow-visible"
          >
            {socialGroups.map((group, idx) => (
              <SwiperSlide key={idx} className="!w-auto">
                <div className="group px-12 py-6 rounded-3xl bg-white border border-slate-100 flex items-center gap-6 hover:border-orange-500/50 hover:shadow-2xl transition-all cursor-pointer">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {group.icon}
                  </div>
                  <span className="text-xl font-black text-slate-900 tracking-tight">{group.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Insights Scroller */}
        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="space-y-4">
               <div className="text-orange-500 font-black uppercase text-[10px] tracking-[0.5em]">The Learning Vault</div>
               <h3 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none">Perspective in Motion.</h3>
            </div>
            
            <div className="flex gap-4">
               <a href="https://www.instagram.com/luke_coutinho/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-orange-500 transition-all uppercase tracking-widest text-[10px] flex items-center gap-3">
                 Follow on Instagram <ExternalLink size={16} />
               </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {instagramVideos.map((video, idx) => (
              <motion.a 
                key={idx}
                href={video.link}
                target="_blank"
                whileHover={{ y: -15 }}
                className="relative aspect-[10/16] rounded-[3rem] overflow-hidden group shadow-2xl bg-slate-100"
              >
                <img 
                  src={video.thumb} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-all duration-[1s] group-hover:scale-110" 
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mb-6 shadow-2xl">
                    <Play fill="currentColor" size={20} className="ml-1" />
                  </div>
                  <h4 className="text-xl font-black text-white leading-tight tracking-tight">
                    {video.title}
                  </h4>
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

