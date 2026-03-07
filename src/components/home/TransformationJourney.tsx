'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
type Step = {
    number: string;
    phase: string;
    title: string;
    body: string;
    accent: string;        // Tailwind color token suffix  e.g. "sky"
    iconBg: string;        // full Tailwind class for icon bg
    borderColor: string;   // full Tailwind class for left-border
    badgeBg: string;
    badgeText: string;
    dotColor: string;
    svgPath: string;
    path: string;        // single-path SVG icon
};

// ─── Data ────────────────────────────────────────────────────────────────────
const steps: Step[] = [
    {
        number: '01',
        phase: 'The Beginning',
        title: 'Image Management',
        body: 'People often come to us seeking success. We begin by transforming their external presence — helping them show up with confidence, clarity, and impact. How you present yourself to the world sets the stage for everything that follows.',
        accent: 'sky',
        iconBg: 'bg-sky-100',
        borderColor: 'border-sky-400',
        badgeBg: 'bg-sky-100',
        badgeText: 'text-sky-700',
        dotColor: 'bg-sky-400',
        svgPath: 'M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 13c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z',
        path: '/image-management',
    },

    {
        number: '02',
        phase: 'The Realisation',
        title: 'Life Coaching & Mind Training',
        body: 'As they grow, they realise success alone is not enough. They want a calm, issue-free mind and the emotional strength to handle life and leadership. So we train the mind — building resilience, focus, and purpose.',
        accent: 'blue',
        iconBg: 'bg-blue-100',
        borderColor: 'border-blue-400',
        badgeBg: 'bg-blue-100',
        badgeText: 'text-blue-700',
        dotColor: 'bg-blue-400',
        svgPath:
            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93V18h-2v1.93A8.001 8.001 0 0 1 4.07 13H6v-2H4.07A8.001 8.001 0 0 1 11 4.07V6h2V4.07A8.001 8.001 0 0 1 19.93 11H18v2h1.93A8.001 8.001 0 0 1 13 19.93zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
        path: '/life-coaching',
    },
    {
        number: '03',
        phase: 'The Deepening',
        title: 'Spiritual Upliftment',
        body: 'Eventually, they seek something deeper — inner peace and alignment. Through spiritual practices and self-awareness, they connect within. This is where outer achievement and inner stillness finally meet.',
        accent: 'indigo',
        iconBg: 'bg-indigo-100',
        borderColor: 'border-indigo-400',
        badgeBg: 'bg-indigo-100',
        badgeText: 'text-indigo-700',
        dotColor: 'bg-indigo-400',
        svgPath:
            'M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z',
        path: '/spiritual-upliftment',
    },
];

const outcomes = [
    { label: 'A powerful image.', color: 'text-sky-600', dot: 'bg-sky-400' },
    { label: 'A strong mind.', color: 'text-blue-600', dot: 'bg-blue-400' },
    { label: 'A peaceful spirit.', color: 'text-indigo-600', dot: 'bg-indigo-400' },
];

// ─── Hook: intersection observer for reveal animations ────────────────────────
function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

// ─── Step Card ────────────────────────────────────────────────────────────────
function StepCard({ step, index }: { step: Step; index: number }) {
    const { ref, inView } = useInView();
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`relative transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            {/* Connector line between cards (hidden on last) */}
            {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gray-200 to-transparent z-10" />
            )}

            <div className={`group bg-white rounded-2xl p-7 xl:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1 border-l-4 ${step.borderColor} h-full flex flex-col`}>

                {/* Phase badge + number */}
                <div className="flex items-center justify-between mb-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${step.badgeBg} ${step.badgeText}`}>
                        {step.phase}
                    </span>
                    <span className="text-4xl font-black text-gray-100 select-none leading-none">
                        {step.number}
                    </span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill={
                            step.accent === 'sky'
                                ? '#0ea5e9'
                                : step.accent === 'blue'
                                    ? '#3b82f6'
                                    : '#6366f1'
                        }
                    >
                        <path d={step.svgPath} />
                    </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {step.title}
                </h3>

                {/* Body */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {step.body}
                </p>

                {/* Bottom dot indicator */}
                <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-gray-50">
                    <span className={`w-2 h-2 rounded-full ${step.dotColor}`} />
                    <span className={`w-1.5 h-1.5 rounded-full ${step.dotColor} opacity-50`} />
                    <span className={`w-1 h-1 rounded-full ${step.dotColor} opacity-25`} />
                </div>
                <a href={step.path} className="mt-4 w-full py-3 px-4 text-center bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors duration-200">
                    Explore More
                </a>       </div>
        </div>
    );
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function TransformationJourney() {
    const { ref: headerRef, inView: headerIn } = useInView(0.2);
    const { ref: resultRef, inView: resultIn } = useInView(0.25);

    return (
        <section className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-sky-50/30 overflow-hidden">

            {/* ── Decorative background blobs ── */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-100/40 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-100/30 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/20 blur-3xl" />
                {/* Subtle dot-grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#0ea5e9" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dot-grid)" />
                </svg>
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section header ── */}
                <div
                    ref={headerRef}
                    className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 lg:mb-20 transition-all duration-700 ease-out ${headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    {/* Eyebrow pill */}

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                        Not Just Success —{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
                                True Transformation
                            </span>
                            {/* Underline accent */}
                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" aria-hidden="true" />
                        </span>
                    </h2>

                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                        Every person who walks through our doors begins at a different place.
                        But the journey follows the same powerful arc — outward, inward, and upward.
                    </p>
                </div>

                {/* ── Journey steps: vertical on mobile, 3-col on desktop ── */}
                <div className="relative">
                    {/* Horizontal connector line (desktop only) */}
                    <div
                        aria-hidden="true"
                        className="hidden lg:block absolute top-[6.5rem] left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {steps.map((step, i) => (
                            <StepCard key={i} step={step} index={i} />
                        ))}
                    </div>
                </div>

                {/* ── Flowing narrative connector ── */}
                <div className="mt-16 sm:mt-20 relative">
                    {/* Vertical timeline line (mobile) / hidden on desktop */}
                    <div aria-hidden="true" className="md:hidden absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-sky-200 via-blue-200 to-indigo-200" />

                    <div className="hidden md:flex items-center justify-center gap-3 mb-10 text-sm text-gray-400 font-medium">
                        <span className="flex items-center gap-2">
                            <span className="w-8 h-px bg-sky-300 inline-block" />
                            External Presence
                        </span>
                        <ArrowRight size={14} className="text-gray-300" />
                        <span className="flex items-center gap-2">
                            <span className="w-8 h-px bg-blue-300 inline-block" />
                            Mental Strength
                        </span>
                        <ArrowRight size={14} className="text-gray-300" />
                        <span className="flex items-center gap-2">
                            <span className="w-8 h-px bg-indigo-300 inline-block" />
                            Inner Peace
                        </span>
                    </div>
                </div>

                {/* ── Result card ── */}
                <div
                    ref={resultRef}
                    className={`transition-all duration-700 ease-out delay-200 ${resultIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-3xl overflow-hidden p-8 sm:p-10 lg:p-12">

                        {/* Background shimmer lines */}
                        <div aria-hidden="true" className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
                            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-sky-500 blur-3xl opacity-20" />
                            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-500 blur-3xl opacity-20" />
                        </div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">

                            {/* Left: quote */}
                            <div className="flex-1 min-w-0">
                                <div className="text-sky-400 text-5xl font-black leading-none mb-4 select-none">"</div>
                                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                                    People often come to us seeking success. We begin by transforming their external presence.
                                    As they grow, they realise success alone is not enough.
                                    Eventually, they seek something deeper — inner peace and alignment.
                                </p>

                                {/* The result */}
                                <div className="space-y-3 mb-8">
                                    <p className="text-white/50 text-xs font-semibold tracking-widest uppercase">The Result</p>
                                    {outcomes.map((o, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        >
                                            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${o.dot}`} />
                                            <span className={`text-base sm:text-lg font-bold ${o.color}`}>
                                                {o.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-white font-bold text-lg sm:text-xl">
                                    Not just success —{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                                        but true transformation.
                                    </span>
                                </p>
                            </div>

                            {/* Right: visual summary pillar */}
                            <div className="shrink-0 w-full lg:w-64">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                                    <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">
                                        Your Complete Journey
                                    </p>

                                    {[
                                        { label: 'Image', sub: 'External Confidence', color: 'bg-sky-500', bar: 'w-full' },
                                        { label: 'Mind', sub: 'Inner Resilience', color: 'bg-blue-500', bar: 'w-4/5' },
                                        { label: 'Spirit', sub: 'Deep Peace', color: 'bg-indigo-500', bar: 'w-3/5' },
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-1.5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-white text-sm font-semibold leading-none">{item.label}</p>
                                                    <p className="text-white/40 text-[11px] mt-0.5">{item.sub}</p>
                                                </div>
                                            </div>
                                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <div className={`h-full ${item.color} ${item.bar} rounded-full`} />
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pt-3">
                                        <Link
                                            href="/contact"
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl font-semibold text-sm hover:from-sky-600 hover:to-indigo-600 transition-all duration-200 hover:shadow-lg hover:shadow-sky-900/30 hover:-translate-y-0.5"
                                        >
                                            Begin Your Journey
                                            <ArrowRight size={15} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
