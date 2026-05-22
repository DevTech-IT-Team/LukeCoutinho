import React from "react";
import Hero from "./Hero";
import FoundationalMedicine from "./FoundationalMedicine";
import DoesCaring from "./DoesCaring";
import Programs from "./Programs";
import PillarsSection from "../../../components/Pillars";
import Testimonials from "./Testimonials";


function Home() {
    return (
        <>
            <Hero />
            <Programs />
            <PillarsSection />
            <section className="relative bg-[#fffaf4] py-20 lg:py-24 text-slate-950">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center space-y-5">
                        <p className="text-orange-600 font-semibold uppercase tracking-[0.32em] text-xs">
                            Foundational Medicine
                        </p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                            The Six Pillars of Healing.
                        </h2>
                        <p className="text-slate-600 text-lg sm:text-xl leading-8">
                            Our six foundational pillars of holistic health form the platform for healing, recovery, and prevention — integrative lifestyle medicine you can move to action on.
                        </p>
                        <p className="text-slate-500 italic font-medium">
                            — Begin with what the body already knows.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
                            <p className="text-orange-600 text-xs uppercase tracking-[0.3em] font-semibold mb-3">01</p>
                            <h3 className="text-xl font-bold text-slate-950 mb-3">Deep Cellular Nutrition.</h3>
                            <p className="text-slate-600 text-sm leading-6">
                                Balanced cellular nutrition suited to your bio-individuality — not a trend, but nourishment that helps every cell thrive.
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
                            <p className="text-orange-600 text-xs uppercase tracking-[0.3em] font-semibold mb-3">02</p>
                            <h3 className="text-xl font-bold text-slate-950 mb-3">Movement.</h3>
                            <p className="text-slate-600 text-sm leading-6">
                                Safe, personalised movement with rest and recovery — strong, agile, and energized without extremes.
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
                            <p className="text-orange-600 text-xs uppercase tracking-[0.3em] font-semibold mb-3">03</p>
                            <h3 className="text-xl font-bold text-slate-950 mb-3">Quality Sleep.</h3>
                            <p className="text-slate-600 text-sm leading-6">
                                Sleep as medicine — rhythm, environment, and habits that let your body repair and rejuvenate.
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
                            <p className="text-orange-600 text-xs uppercase tracking-[0.3em] font-semibold mb-3">04</p>
                            <h3 className="text-xl font-bold text-slate-950 mb-3">Emotional Wellness.</h3>
                            <p className="text-slate-600 text-sm leading-6">
                                Calm within the body — where acceptance, gratitude, and mindful tools help healing begin.
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
                            <p className="text-orange-600 text-xs uppercase tracking-[0.3em] font-semibold mb-3">05</p>
                            <h3 className="text-xl font-bold text-slate-950 mb-3">Spirit.</h3>
                            <p className="text-slate-600 text-sm leading-6">
                                Reconnecting inward through kindness, silence, nature, and what resonates with you — not religion, but your inner self.
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm">
                            <p className="text-orange-600 text-xs uppercase tracking-[0.3em] font-semibold mb-3">06</p>
                            <h3 className="text-xl font-bold text-slate-950 mb-3">Breath.</h3>
                            <p className="text-slate-600 text-sm leading-6">
                                Prana as medicine — conscious breath shifts you toward rest, repair, and parasympathetic healing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FoundationalMedicine />
            <DoesCaring />
            <Testimonials />
        </>
    );
}

export default Home;
