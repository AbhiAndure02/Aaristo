import { subtle } from 'crypto';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface SectionProps {
    title: string;
    subtitle?: string;
    description: string | React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    index: number;
}

const InfoSection: React.FC<SectionProps> = ({
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    reverse = false,
    index
}) => {
    const bgColors = [
        'bg-stone-50',
        'bg-amber-50',
        'bg-stone-100',
        'bg-orange-50',
    ]

    const accentColors = [
        'bg-amber-500',
        'bg-orange-400',
        'bg-yellow-600',
        'bg-amber-600',
    ]

    const subtitleColors = [
        'text-amber-600',
        'text-orange-500',
        'text-yellow-700',
        'text-amber-700',
    ]

    const dotColor = [
        'bg-amber-400',
        'bg-orange-400',
        'bg-yellow-500',
        'bg-amber-500',
    ]

    const bgColor = bgColors[index % bgColors.length]
    const accentColor = accentColors[index % accentColors.length]
    const subtitleColor = subtitleColors[index % subtitleColors.length]
    const dot = dotColor[index % dotColor.length]

    return (
        <section
            className="relative overflow-hidden"
            id={title.toLowerCase().replace(/\s+/g, '-')}
        >
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-130`}>

                {/* Image Side */}
                <div className="relative p-2 w-full md:w-1/2 min-h-80 md:min-h-130 overflow-hidden group">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="objectcover transition-transform duration-700 p-2 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-amber-900 opacity-10" />
                    <div className="absolute bottom-6 right-8 text-8xl font-bold text-white opacity-10 select-none">
                        {String(index + 1).padStart(2, '0')}
                    </div>
                </div>

                {/* Text Side */}
                <div className={`relative w-full md:w-1/2 flex items-center ${bgColor}`}>
                    <div className="px-12 py-16 max-w-lg w-full">

                        {/* Accent bar */}
                        <div className={`w-12 h-0.5 mb-6 ${accentColor}`} />

                        {subtitle && (
                            <p className={`text-xs tracking-widest uppercase mb-3 font-semibold ${subtitleColor}`}>
                                {subtitle}
                            </p>
                        )}

                        <h2 className="text-4xl font-light text-stone-800 mb-6 leading-tight tracking-tight">
                            {title}
                        </h2>

                        <div className="text-stone-500 leading-relaxed text-base font-light">
                            {description}
                        </div>


                    </div>
                </div>

            </div>
        </section>
    )
}

const SpiritualUpliftment = () => {
    const sections = [


        {
            title: "Communicating with Self and Aligning Inner and Outer Self ",
            subtitle: "Going inside and communicating with your body",
            description: (
                <ul className="space-y-3">
                    {[
                        "Many times in life, we are so focused on fulfilling external roles and expectations that we lose connection with our own inner voice. When our thoughts, emotions, and actions are not aligned, it can create confusion, stress, and a feeling that something is missing despite outward success.",
                        "This session helps you reconnect with yourself and develop a deeper understanding of your inner thoughts, feelings, and values. By learning how to communicate honestly with yourself, you become more aware of what truly matters to you. As your inner self and outer actions begin to align, you experience greater clarity, authenticity, and confidence. This alignment allows you to live with purpose, make decisions with conviction, and create a life that truly reflects who you are."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-amber-400" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )
            ,
            imageSrc: "/life/inner.png",
            imageAlt: "Inner pacing ",

        },
        {
            title: "Meditation and Understanding Your Personal Frequency",
            subtitle: "Understand your personal frequency and attain it ",
            description: (
                <ul className="space-y-3">
                    {[
                        "Meditation is a powerful practice that helps calm the mind, reduce stress, and bring greater awareness to your thoughts and emotions. In the rush of daily life, our mind is often filled with constant activity, making it difficult to connect with our true self and inner clarity.",
                        "Through meditation, you learn to slow down, observe your thoughts, and develop a deeper connection with your inner self. This process helps you become aware of your personal frequency—your natural state of energy, thoughts, and emotions. When you understand and balance this frequency, you begin to feel more centered, peaceful, and focused. With regular practice, meditation helps you create inner stability, improve emotional well-being, and live with greater awareness and harmony."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-amber-400" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ),
            imageSrc: "/life/meditation.png",
            imageAlt: "Meditation",
            reverse: true
        },
        {
            title: "Experiencing energy",
            subtitle: "We are all energy, understanding and experiencing energy ",
            description: (
                <>
                    <p className="mb-5">
                        We often hear people talk about energy—positive energy, negative energy, or inner energy—but most of the time we do not truly understand what it means or how it actually feels. It remains more like a concept rather than a real experience.                    </p>
                    <p>
                        In this session, you will get the opportunity to directly experience energy in a simple and guided way. Through specific exercises and awareness techniques, you will begin to see, feel, and even hear the subtle expressions of energy within and around you. This experience helps you develop a deeper connection with your own inner state and understand how energy influences your thoughts, emotions, and overall well-being. Once you experience it for yourself, the concept of energy becomes real, meaningful, and easier to understand in daily life.                    </p>
                </>
            ),
            imageSrc: "/life/energy.png",
            imageAlt: "Experiencing energy",
            reverse: false
        },
        {
            title: "Raising self vibrations ",
            subtitle: "We all have vibes if we wish to grow we need to raise our vibrations to the frequency of that level",
            description: (
                <>
                    <p className="mb-5">
                        Our thoughts, emotions, and actions create a certain vibration within us that influences how we feel and how we experience life. When we are stressed, fearful, or negative, our energy feels heavy and low. On the other hand, when we feel positive, calm, and grateful, our vibration naturally rises and we experience more clarity, happiness, and balance.
                    </p>
                    <p>
                        In this session, you will learn how to become aware of your own energy and simple ways to consciously raise your vibrations. Through practical techniques, positive habits, and mindful awareness, you can shift your emotional state and create a more uplifting inner environment. As your vibration rises, you begin to attract better experiences, build healthier relationships, and live with greater peace, positivity, and inner strength.
                    </p>
                </>
            ),
            imageSrc: "/life/rising.png",
            imageAlt: "rising self vibration",
            reverse: true
        },
        {
            title: "Grounding",
            subtitle: "We live in a gravitational field so the more we are grounded the better we can deal with life ",
            description: (
                <>
                    <p className="mb-5">
                        In today’s fast-paced and highly digital world, many people feel mentally scattered, restless, or disconnected from themselves. Grounding is a simple yet powerful practice that helps you reconnect with the Earth’s natural energy, bringing stability, calmness, and balance to your mind and body.

                    </p>
                    <p>
                        Nowadays, many products like grounding mats are available that claim to help with this connection. However, true grounding does not require any equipment. You can ground yourself naturally with simple practices that reconnect you directly with the Earth. All you really need is yourself and your natural connection with the Earth. In this session, you will learn easy techniques to ground yourself, helping you feel more centered, relaxed, and energetically balanced in your daily life.
                    </p>
                </>
            ),
            imageSrc: "/life/grounding.png",
            imageAlt: "Grounding",
            reverse: false
        },
        {
            title: "Accessing Cosmic Energy",
            subtitle: "Unlocks karmic memories",
            description: (
                <>
                    <p className="mb-5">
                        The universe is filled with a vast and powerful source of energy that supports all life. This cosmic energy is always present around us, yet most people are not aware of it or do not know how to consciously connect with it. When we learn to tune ourselves to this universal energy, we can experience a deeper sense of harmony, clarity, and inner strength.

                    </p>
                    <p>
                        In this session, you will learn simple techniques to become aware of and access cosmic energy in a natural and balanced way. By calming the mind and increasing awareness, you can open yourself to this higher source of energy and allow it to flow through you. This connection can help you feel more peaceful, energized, and aligned, supporting both your inner growth and overall well-being
                    </p>
                </>
            ),
            imageSrc: "/life/cosmic.jpg",
            imageAlt: "Cosmic Healing",
            reverse: true
        }, {
            title: "Chakra Meditation and Healing",
            subtitle: "Curated Identity",
            description: (
                <>
                    <p className="mb-5">
                        Our body has natural energy centers known as chakras that influence our physical, emotional, and mental well-being. When these energy centers are balanced and flowing properly, we feel healthy, calm, and emotionally stable. However, stress, negative experiences, and unhealthy habits can block or disturb this energy flow, leading to imbalance in our mind and body.
                    </p>
                    <p>
                        In this session, you will learn about the different chakras and how they affect various aspects of your life. Through guided chakra meditation and simple healing techniques, you can begin to balance and activate these energy centers. As the chakras become aligned and the energy flows freely, you may experience greater clarity, emotional balance, inner peace, and an overall sense of well-being.
                    </p>
                </>
            ),
            imageSrc: "/life/chkra.jpg",
            imageAlt: "Chakra Meditation and Healing",

        },

    ]

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Header */}
            <div className="relative overflow-hidden  min-h-120 flex items-center">

                {/* Decorative blobs */}
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500 opacity-10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-orange-400 opacity-10 blur-3xl" />

                <div className="relative container mx-auto px-6 flex flex-col items-center justify-center text-center py-28 w-full">

                    <p className="text-xs tracking-widest uppercase mb-6 text-amber-400 font-semibold">
                        Elevate Your Presence
                    </p>

                    <h1 className="text-6xl md:text-7xl font-light text-stone-800 mb-2 leading-none tracking-tight">
                        Spiritual
                    </h1>
                    <h1 className="text-6xl md:text-7xl font-light italic text-amber-400 mb-8 leading-none tracking-tight">
                        Upliftment
                    </h1>

                    <div className="w-16 h-px mx-auto mb-8 bg-amber-500" />

                    <p className="text-stone-400 max-w-xl text-lg font-light leading-relaxed">
                        Transform your professional presence with our comprehensive image management solutions — where elegance meets strategy.
                    </p>
                </div>
            </div>

            {/* Sections */}
            <div>
                {sections.map((section, index) => (
                    <InfoSection
                        key={index}
                        index={index}
                        title={section.title}
                        subtitle={section.subtitle}
                        description={section.description}
                        imageSrc={section.imageSrc || ""}
                        imageAlt={section.imageAlt || ""}
                        reverse={section.reverse}
                    />
                ))}
            </div>

            {/* Footer CTA */}
            <div className="py-24 text-center bg-stone-800 relative overflow-hidden">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-500 opacity-5 blur-3xl" />
                <div className="relative">
                    <p className="text-xs tracking-widest uppercase mb-4 text-amber-400 font-semibold">
                        Begin Your Journey
                    </p>
                    <h3 className="text-4xl font-light text-stone-200 mb-8">
                        Ready to redefine your image?
                    </h3>
                    <Link href='/contact' className="px-10 py-4 text-sm tracking-widest uppercase font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-colors duration-300 rounded-sm">
                        Get Started
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SpiritualUpliftment



