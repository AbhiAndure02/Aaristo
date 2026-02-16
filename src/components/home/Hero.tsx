import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <video
                src="/bg.mp4"

                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover opacity-90"

            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-28 pb-20 text-center text-white">
                <div className="max-w-4xl mx-auto">

                    {/* Badge */}
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/30">
                        <Sparkles size={16} className="mr-2 text-sky-300" />
                        <span className="font-medium tracking-wide">
                            Upgrade Your Image
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Rewrite Your Mind,
                        <span className="block text-sky-300">
                            Awaken Your Spirit
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
                        We empower individuals to transform into their highest potential
                        and achieve extraordinary results through integrated mind, body,
                        and soul alignment.
                        <span className="block mt-3 font-semibold text-sky-300">
                            Transformation is not only possible — it is achievable.
                        </span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 rounded-lg font-semibold hover:bg-sky-700 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            Start Your Journey
                            <ArrowRight className="ml-2" size={20} />
                        </Link>

                        <button className="inline-flex items-center justify-center px-8 py-3 border border-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                            <Play className="mr-2" size={20} />
                            Watch Intro
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;


