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
            <div className=" z-10 text-lg text-white p-2 mb-2 ">
                <p className="text-center text-2xl">People walk in confused, stressed, and anxious about life and <br /> appearance—and walk out clear, confident, calm, and powerfully presentable.</p>
            </div>


        </section>
    );
}

export default Hero;