import React from 'react';
import img1 from '../../../assets/event1.jpg';
import img2 from '../../../assets/event2.jpg';
import img3 from '../../../assets/event3.jpg';

const SERVICES = [
    {
        title: "Kickstart Your Event with Inspiring Holistic Insights from Luke",
        price: "₹ 9,00,000 + Taxes",
        duration: "45 minutes",
        description: "Invite Luke to be the voice of inspiration at your next corporate seminar, summit, or community event. In these 45-minute impactful talks, Luke shares insights into sustainable wellness practices, energizing audiences with actionable strategies for a healthier lifestyle. Ideal for corporate or community gatherings looking to spark positive change and motivate their members.",
        image: img1,
        tag: "Speaking",
        bgText: "INSPIRE"
    },
    {
        title: "Bring Wellness to Your Screen Through Luke's Webinars",
        price: "₹ 3,75,000 + Taxes",
        duration: "45 minutes",
        description: "Luke’s live webinars are a great way to leverage the convenience of online wellness guidance. Perfect for remote teams, organizations and communities, these sessions provide valuable insights into health and wellness with practical advice for immediate lifestyle enhancements. Luke’s approach makes wellness accessible, no matter where you are.",
        image: img2,
        tag: "Digital",
        bgText: "CONNECT"
    },
    {
        title: "Begin Your Journey Towards Better Health with Personalized Workshops",
        price: "On Request",
        duration: "Customized",
        description: "Luke’s hands-on workshop delivers personalized wellness strategies tailored to your team or community. Participants gain practical tools to manage stress, improve well-being, and build lasting healthy habits—empowering meaningful, long-term lifestyle change.",
        image: img3,
        tag: "Workshop",
        bgText: "GROW"
    }
];

const ServicePage = () => {
    return (
        <div className="bg-[#FCFCFC] min-h-screen font-sans overflow-hidden">

          
            {/* SERVICES: Modern Editorial Layout */}
            <section className="max-w-7xl mx-auto py-20 px-6 space-y-48">
                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Visual Block */}
                        <div className="w-full lg:w-3/5 relative group">
                            {/* Background Text Decor */}
                            <span className={`absolute -top-16 ${index % 2 !== 0 ? '-right-10' : '-left-10'} text-9xl font-black text-gray-100/80 z-0 select-none`}>
                                {service.bgText}
                            </span>

                            {/* Main Image Container */}
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-[500px] object-cover"
                                />

                                {/* Floating Meta-info */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl">
                                        <p className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-1">Investment</p>
                                        <p className="text-gray-900 font-bold">{service.price}</p>
                                    </div>
                                    <div className="bg-orange-500 px-6 py-4 rounded-2xl shadow-xl text-white">
                                        <p className="text-xs uppercase tracking-widest opacity-80 font-bold mb-1">Time</p>
                                        <p className="font-bold">{service.duration}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Accent Square */}
                            <div className={`absolute -bottom-6 ${index % 2 !== 0 ? '-left-6' : '-right-6'} w-32 h-32 border-8 border-orange-100 -z-10 rounded-full`}></div>
                        </div>

                        {/* Content Block */}
                        <div className="w-full lg:w-2/5 space-y-8">
                            <div className="inline-block px-4 py-1 rounded-md bg-gray-100 text-gray-500 text-sm font-bold uppercase tracking-widest">
                                {service.tag}
                            </div>

                            <h3 className="text-4xl font-extrabold text-gray-800 leading-[1.1]">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed text-lg border-l-4 border-orange-200 pl-6 italic">
                                {service.description}
                            </p>

                            <div className="pt-4">
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-bold text-orange-500 rounded-full group bg-gradient-to-br from-orange-500 to-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-200">
                                    <span className="relative px-10 py-4 transition-all ease-in duration-75 bg-white rounded-full 
                   group-hover:bg-transparent 
                   group-hover:text-white">
                                        Enquire Now —
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </section>

          
        </div>
    );
};

export default ServicePage;