// src/pages/Learn/Learninghub/Buy.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    BookOpen,
    Clock,
    Star,
    CheckCircle2,
    Shield,
    Zap,
    Users,
    BarChart3,
} from "lucide-react";
import courses from "../../../data/courses";

/* =========================
   LEVEL BADGE COLOR
========================= */
const levelColor = {
    Beginner: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    Intermediate: "bg-blue-500/10 text-blue-600 border-blue-200",
    Advanced: "bg-orange-500/10 text-orange-600 border-orange-200",
};

/* =========================
   BUY PAGE
========================= */
const Buy = () => {
    const { id } = useParams();
    const course = courses.find((c) => c.id === id);
    const [imgError, setImgError] = useState(false);

    /* ---------- not found ---------- */
    if (!course) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-black mb-4">
                    404 — Not Found
                </p>
                <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
                    Course not found
                </h2>
                <p className="text-slate-400 mb-8 max-w-sm">
                    We couldn't locate the course you're looking for. It may have
                    moved or been removed.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white rounded-full px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-orange-400 transition-colors duration-300"
                >
                    <ArrowLeft size={14} />
                    Return Home
                </Link>
            </div>
        );
    }

    /* ---------- render ---------- */
    return (
        <div className="min-h-screen bg-white">

            {/* ── HERO BANNER ── */}
            <div className="relative bg-slate-950 overflow-hidden">

                {/* subtle grid texture */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* orange glow */}
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />

                <div className="relative mx-auto max-w-6xl px-6 lg:px-16 pt-10 pb-16">

                    {/* back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-10"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors duration-300 text-[11px] font-black uppercase tracking-[0.2em]"
                        >
                            <ArrowLeft size={14} />
                            All Courses
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT — text */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* category + level */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-black">
                                    {course.category}
                                </span>
                                <span className="text-slate-600">·</span>
                                <span
                                    className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${levelColor[course.level] ?? "bg-slate-800 text-slate-300 border-slate-700"}`}
                                >
                                    {course.level}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
                                {course.title}
                            </h1>
                            <p className="text-slate-400 text-lg font-medium mb-8 leading-relaxed">
                                {course.subtitle}
                            </p>

                            {/* quick stats */}
                            <div className="flex flex-wrap gap-5">
                                {[
                                    { icon: <BookOpen size={14} />, label: `${course.lessons} Modules` },
                                    { icon: <Clock size={14} />, label: course.duration },
                                    {
                                        icon: <Star size={14} className="fill-orange-400 text-orange-400" />,
                                        label: `${course.rating} Rating`,
                                    },
                                ].map(({ icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2 text-slate-300 text-[11px] font-black uppercase tracking-[0.15em]"
                                    >
                                        <span className="text-orange-500">{icon}</span>
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT — hero image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative rounded-[2rem] overflow-hidden h-72 lg:h-80 shadow-2xl"
                        >
                            {!imgError ? (
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 text-sm">
                                    Image unavailable
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="mx-auto max-w-6xl px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* LEFT col — about + includes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-2 space-y-12"
                >

                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-6 bg-orange-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
                                About This Course
                            </span>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {course.summary}
                        </p>
                    </div>

                    {/* What's Included */}
                    {course.includes?.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-6 bg-orange-500" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
                                    What's Included
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.includes.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="text-orange-500 shrink-0 mt-0.5"
                                        />
                                        <span className="text-sm font-semibold text-slate-700">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Trust signals */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            {
                                icon: <Shield size={20} className="text-orange-500" />,
                                title: "30-Day Guarantee",
                                desc: "Full refund, no questions asked",
                            },
                            {
                                icon: <Zap size={20} className="text-orange-500" />,
                                title: "Instant Access",
                                desc: "Start learning immediately",
                            },
                            {
                                icon: <Users size={20} className="text-orange-500" />,
                                title: "Community",
                                desc: "Private student community",
                            },
                        ].map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-5 flex flex-col gap-2"
                            >
                                {icon}
                                <p className="text-sm font-black text-slate-900">{title}</p>
                                <p className="text-xs text-slate-500 font-medium">{desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT col — sticky pricing card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="lg:col-span-1"
                >
                    <div className="sticky top-8 bg-white rounded-[2rem] border-2 border-slate-100 shadow-[0_20px_80px_rgba(15,23,42,0.08)] overflow-hidden">

                        {/* card image strip */}
                        <div className="relative h-44 overflow-hidden">
                            {!imgError ? (
                                <img
                                    src={course.image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-100" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                        </div>

                        <div className="px-7 pb-8 -mt-2">

                            {/* price */}
                            <div className="mb-1">
                                <span className="text-5xl font-black text-slate-950 tracking-tighter">
                                    {course.price}
                                </span>
                            </div>
                            <p className="text-xs text-slate-400 font-medium mb-6">
                                One-time payment · Lifetime access
                            </p>

                            {/* mini stats */}
                            <div className="flex items-center gap-4 mb-7">
                                <div className="flex items-center gap-1.5">
                                    <Star
                                        size={14}
                                        className="fill-orange-500 text-orange-500"
                                    />
                                    <span className="text-sm font-black text-slate-900">
                                        {course.rating}
                                    </span>
                                </div>
                                <span className="text-slate-200">|</span>
                                <div className="flex items-center gap-1.5">
                                    <BarChart3 size={14} className="text-orange-500" />
                                    <span className="text-sm font-black text-slate-900">
                                        {course.level}
                                    </span>
                                </div>
                                <span className="text-slate-200">|</span>
                                <div className="flex items-center gap-1.5">
                                    <BookOpen size={14} className="text-orange-500" />
                                    <span className="text-sm font-black text-slate-900">
                                        {course.lessons} Modules
                                    </span>
                                </div>
                            </div>

                            {/* CTA */}
                            <Link
                                to="/payment"
                                state={{ courseId: course.id }}
                                className="group w-full py-4 bg-slate-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-orange-500 transition-all duration-500 shadow-xl shadow-slate-900/10 mb-3"
                            >
                                Proceed to Checkout
                            </Link>

                            <p className="text-center text-[10px] text-slate-400 font-medium">
                                🔒 Secure checkout · 30-day money-back guarantee
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Buy;