import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function TrustAndActionInfinite() {
    const logos = [
        // { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        // { name: "FICCI", url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/FICCI_Logo.png" },
        // { name: "YPO", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/YPO_Logo.png" },
        // { name: "P&G", url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Procter_%26_Gamble_logo.svg" },
        { name: "Cisco", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        // { name: "Mondelēz", url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Mondelez_International_logo.svg" },
        // { name: "Dr. Reddy's", url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Dr._Reddy%27s_Laboratories_Logo.svg" },
        { name: "HP", url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
        // { name: "Abbott", url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Abbott_Laboratories_logo.svg" },
        // { name: "Kotak", url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kotak_Mahindra_Bank_logo.svg" },
        // { name: "Tata Power", url: "https://upload.wikimedia.org/wikipedia/en/5/5b/Tata_Power_Logo.svg" },
        // { name: "MetLife", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/MetLife_logo.svg" },
        // { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { name: "HSBC", url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg" },
        { name: "Bank of America", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg" },
        // { name: "EO", url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Entrepreneurs%27_Organization_Logo.svg" },
        { name: "GE", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg" },
        // { name: "KPMG", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg" },
    ];

    return (
        <div className="antialiased w-full overflow-hidden">

            {/* Injecting CSS Keyframes directly for seamless setup */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-infinite {
                    display: flex;
                    width: max-content;
                    animation: marquee 35s linear infinite;
                }
                .animate-marquee-infinite:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* SECTION 1: Infinite Auto-Scrolling Logo Marquee */}
            <section className="bg-gradient-to-br from-[#f2f8f6] via-[#f7fafc] to-[#f0f4f8] py-16 relative">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-10">
                    <h2 className="text-center text-2xl sm:text-3xl font-serif text-gray-500 font-medium tracking-tight">
                        Trusted by the Best
                    </h2>
                </div>

                {/* Marquee Outer Container with Gradient Masking for Smooth Edge Fading */}
                <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">

                    {/* Running Track (Duplicated arrays guarantee a seamless infinite wrap) */}
                    <div className="animate-marquee-infinite gap-16 pr-16">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="h-12 w-32 flex-shrink-0 flex items-center justify-center filter grayscale opacity-75 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                <img
                                    src={logo.url}
                                    alt={`${logo.name} brand reference logo`}
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* SECTION 2: Premium Dark Editorial Call To Action Banner */}
            <section className="bg-[#15110e] text-white py-24 px-6 lg:px-8 border-t border-orange-950/20">
                <div className="max-w-6xl mx-auto space-y-8">

                    <div className="space-y-4">
                        <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.25em] block">
                            Move To Action
                        </span>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight max-w-4xl leading-[1.1]">
                            Ready for the next step?
                        </h2>

                        <p className="text-gray-400 font-medium text-sm sm:text-base max-w-2xl pt-1">
                            Ready to move to action? Book a consultation with our integrative team.
                        </p>
                    </div>

                    {/* Action Interface Row */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e05e1a] hover:bg-[#c94f12] text-white font-bold text-xs uppercase tracking-widest px-7 py-4.5 transition-colors duration-300 rounded-none outline-none">
                            <span>Book a Consultation</span>
                            <ArrowRight size={14} />
                        </button>

                        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-widest px-7 py-4.5 transition-colors duration-300 rounded-none outline-none">
                            <span>Explore Courses</span>
                            <ArrowRight size={14} className="text-gray-400" />
                        </button>
                    </div>

                </div>
            </section>

        </div>
    );
}