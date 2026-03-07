import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-end justify-center overflow-hidden">

            {/* Background Video - Optimized for all devices */}
            <video
                src="/bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.9)' }}
            />

            {/* Dark Gradient Overlay - More subtle */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content — positioned at bottom with clean spacing */}
            <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-20 text-center text-white">
                <div className="max-w-4xl mx-auto">

                    {/* Badge - Subtle and elegant */}

                    {/* Heading - Clean typography */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Rewrite Your Mind,
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
                            Awaken Your Spirit
                        </span>
                    </h1>

                    {/* Optional subtle CTA button */}

                </div>
            </div>
        </section>
    );
}

export default Hero;