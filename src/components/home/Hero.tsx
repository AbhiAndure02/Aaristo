import React from 'react';
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

function Hero() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center text-white">

                    <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
                        <Sparkles size={16} className="mr-2" />
                        <span className="font-medium">Transform Your Life</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Live the Life
                        <span className="text-sky-300 block">You Want</span>
                    </h1>

                    <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
                        We help people transform into their desired life and achieve the desired results
                        through mind, body, and soul balance.
                        <span className="block mt-2 font-semibold text-sky-300">
                            Is this possible? Yes of course! It is.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-all"
                        >
                            Start Your Journey
                            <ArrowRight className="ml-2" size={20} />
                        </Link>

                        <button className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/20 transition-all">
                            <Play className="mr-2" size={20} /> Watch Intro
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
