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

const LifeCoaching = () => {
    const sections = [


        {
            title: "Detoxing & cleansing Past",
            subtitle: "Detoxing & cleansing Past",
            description: (
                <ul className="space-y-3">
                    {[
                        "Many people work hard to create a better future, yet often feel stuck, stressed, or emotionally drained. The reason is simple—our past experiences, unresolved emotions, and painful memories continue to influence our thoughts, behavior, and decisions. Detoxing and cleansing the past is a powerful process that helps release emotional baggage, limiting beliefs, and negative patterns that silently hold us back.",
                        "Through guided techniques and self-awareness, this process allows you to let go of old hurts, forgive, heal, and free yourself from the weight of the past. As the emotional clutter clears, you begin to feel lighter, calmer, and more in control of your life. With a cleansed past, you gain clarity, inner peace, and the strength to consciously create the future you truly desire."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-amber-400" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )
            ,
            imageSrc: "/coaching/det.jpg",
            imageAlt: "Detoxing & cleansing Past",

        },
        {
            title: "Forgiving & Inner pacing",
            subtitle: "Forgiving & Inner pacing",
            description: (
                <ul className="space-y-3">
                    {[
                        "Many times, the biggest burden we carry is not the situation itself, but the hurt, anger, and resentment we hold inside. Forgiveness is not about saying that what happened was right; it is about freeing yourself from the emotional weight of the past. When we learn to forgive—others and ourselves—we release negativity that quietly affects our peace, relationships, and overall well-being.",
                        "The journey toward inner peace helps calm the mind, heal emotional wounds, and create a sense of balance within. Through simple and practical techniques, you can also learn how to release day-to-day stress and emotional pressure. As you let go of grudges, guilt, and daily tension, you begin to feel lighter, clearer, and more emotionally strong, allowing you to live with greater clarity, compassion, and peace."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-amber-400" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ),
            imageSrc: "/coaching/forgiving.jpg",
            imageAlt: "Business etiquette illustration",
            reverse: true
        },
        {
            title: "Understanding Life",
            subtitle: "Understanding Life",
            description: (
                <>
                    <p className="mb-5">
                        Many of our struggles arise not because life is difficult, but because we do not fully understand how life works. When we lack clarity about our emotions, relationships, and purpose, we often feel confused, stressed, or overwhelmed by situations around us. Very often people remain stuck in the question, “Why is this happening to me?” and keep searching for answers without finding clarity.
                    </p>
                    <p>
                        In this session, you begin to understand life from a logical and practical perspective. You get clear answers to many of the questions that trouble the mind. Once you understand the reasons behind situations and patterns, you can consciously apply these insights in your daily life. This awareness helps you move from confusion to clarity and live with greater balance, responsibility, and confidence
                    </p>
                </>
            ),
            imageSrc: "/coaching/understand.jpg",
            imageAlt: "Understanding Life",
            reverse: false
        },
        {
            title: "Emotional wellness",
            subtitle: "Emotional wellness",
            description: (
                <>
                    <p className="mb-5">
                        Emotional wellness is the ability to understand, manage, and express your emotions in a healthy and balanced way. In today’s fast-paced life, many people experience stress, anxiety, anger, or emotional exhaustion without fully realizing how deeply it affects their health, relationships, and decision-making.
                    </p>
                    <p>
                        This session helps you become more aware of your emotions and teaches you practical ways to handle them with maturity and calmness. You learn simple techniques to manage everyday stress, respond thoughtfully instead of reacting impulsively, and maintain emotional balance even in challenging situations. As your emotional awareness grows, you develop stronger relationships, clearer thinking, and a greater sense of inner stability, helping you live a more peaceful, confident, and emotionally healthy life.


                    </p>
                </>
            ),
            imageSrc: "/coaching/emotion.jpg",
            imageAlt: "Emotional wellness",
            reverse: true
        },
        {
            title: "Balancing Energies & energy routine",
            subtitle: "Balancing Energies & energy routine",
            description: (
                <>
                    <p className="mb-5">
                        Our daily life demands physical, mental, and emotional energy, yet many people feel constantly tired, overwhelmed, or drained without understanding why. This often happens because our energy is not managed or balanced properly. When energy is scattered through stress, overthinking, or unhealthy routines, it becomes difficult to stay focused, productive, and calm.
                    </p>
                    <p>
                        In this session, you will learn simple daily exercises and practices that support good health and help maintain proper energy flow in the body. These easy techniques can be incorporated into your daily routine to keep your body and mind balanced. When energy flows properly and is used consciously, you feel healthier, more active, and emotionally stable—creating a strong foundation for a balanced and fulfilling life.
                    </p>
                </>
            ),
            imageSrc: "/coaching/balance.jpg",
            imageAlt: "Balancing Energies & energy routine",
            reverse: false
        },
        {
            title: "Releasing all Limiting Beliefs",
            subtitle: "Releasing all Limiting Beliefs",
            description: (
                <>
                    <p className="mb-5">
                        Many times, the biggest barriers in our life are not external circumstances but the limiting beliefs we carry within ourselves. These beliefs are often formed through past experiences, conditioning, or repeated negative thoughts, and they quietly influence how we see ourselves and what we believe we are capable of achieving. Over time, they can create self-doubt, fear, and hesitation that prevent us from reaching our true potential.
                    </p>
                    <p>

                        In this session, you will learn to identify the limiting beliefs that may be holding you back and understand how they were formed. Through simple awareness techniques and guided processes, you can begin to release these beliefs and replace them with more empowering thoughts. As these mental barriers

                    </p>
                </>
            ),
            imageSrc: "/coaching/releasing.jpg",
            imageAlt: "Releasing all Limiting Beliefs",
            reverse: true
        },




        // new life coaching

        {
            title: "Healing Phobias",
            subtitle: "Healing Phobias",
            description: (
                <>
                    <p className="mb-5">
                        Phobias are intense fears that can strongly affect a person’s daily life, confidence, and emotional well-being. These fears may develop from past experiences, childhood memories, or deep subconscious impressions, and often people struggle with them for years without understanding their true cause.
                    </p>
                    <p>

                        In this session, we work on identifying the root of the fear and releasing the emotional intensity connected with it. Using guided techniques and subconscious work, the mind is gently helped to reframe the experience and let go of the fear. In many cases, phobias can be healed or significantly reduced in just one session, allowing you to feel calmer, more confident, and free from the limitations that the fear once created.

                    </p>
                </>
            ),
            imageSrc: "/coaching/rel2easing.jpg",
            imageAlt: "Healing Phobias",
            reverse: false
        },

        {
            title: "Healing Motion Sickness or Sea Sickness",
            subtitle: "Healing Motion Sickness or Sea Sickness",
            description: (
                <>
                    <p className="mb-5">
                        Motion sickness or sea sickness can make travel uncomfortable and stressful for many people. Symptoms such as nausea, dizziness, and uneasiness often occur when the brain receives mixed signals from the body during movement. For some individuals, this discomfort becomes a recurring issue that limits their ability to travel freely and enjoy journeys.
                    </p>
                    <p>

                        In this session, we work with the subconscious mind to completely heal motion sickness so that the body can respond to movement in a calm and balanced way. Through simple guided techniques, the mind learns to process these signals comfortably, allowing you to travel without fear or discomfort. Many people have experienced complete relief through this process, and you can find their experiences shared in the testimonials section.
                    </p>
                </>
            ),
            imageSrc: "/coaching/healing.jpg",
            imageAlt: "Healing Motion Sickness or Sea Sickness",
            reverse: true
        },
        {
            title: "Inner Child Healing",
            subtitle: "Inner Child Healing",
            description: (
                <>
                    <p className="mb-5">
                        Many of our emotional patterns, fears, and reactions are shaped during childhood. Experiences from our early years—whether joyful or painful—can leave deep impressions on the subconscious mind. Sometimes the hurt, rejection, or unmet emotional needs of the “inner child” continue to influence our behavior, relationships, and self-worth even in adulthood.

                    </p>
                    <p>

                        Inner Child Healing is a gentle process that helps you reconnect with that younger part of yourself and understand the emotions that may still be affecting you. Through guided awareness and healing techniques, you can release old pain, offer acceptance, and restore a sense of safety and love within. As this healing takes place, you begin to feel more emotionally free, confident, and balanced, allowing you to respond to life with greater maturity and peace.
                    </p>
                </>
            ),
            imageSrc: "/coaching/heal1ing.jpg",
            imageAlt: "Inner Child Healing",
            reverse: false
        },
        {
            title: "Healing PTSD",
            subtitle: "Healing PTSD",
            description: (
                <>
                    <p className="mb-5">
                        Post-Traumatic Stress Disorder (PTSD) can occur after experiencing or witnessing deeply distressing or traumatic events. Such experiences can leave strong emotional imprints, causing recurring painful memories, anxiety, fear, or emotional distress that continue to affect a person’s daily life and well-being
                    </p>
                    <p>

                        In this session, we work gently with the subconscious mind to release the emotional intensity connected to these traumatic experiences. Through guided techniques and a safe healing process, the person is able to process and let go of the pain associated with these memories. As the emotional charge is released, the individual can completely heal from the painful memories, allowing them to move forward in life with greater calmness, confidence, and inner peace.                    </p>
                </>
            ),
            imageSrc: "/coaching/heal1ing.jpg",
            imageAlt: "Healing PTSD",
            reverse: true
        }, {
            title: "Goal Setting and Attaining",
            subtitle: "Goal Setting and Attaining",
            description: (
                <>
                    <p className="mb-5">
                        Setting goals is important, but achieving them requires the right alignment of thoughts, emotions, and actions. Many people set goals with enthusiasm, yet struggle to follow through because their subconscious mind and inner beliefs are not aligned with those goals.
                    </p>
                    <p>

                        In this session, goals are designed in a way that aligns your intentions with the energy of the universe, allowing supportive opportunities and circumstances to naturally unfold. Once the goals are clearly defined, they are integrated into the subconscious mind through guided techniques so that working toward them becomes more natural, automatic, and effortless. The process works at seven neurological levels, helping to create deep and lasting alignment between your mindset, behavior, and desired outcomes.
                    </p>
                </>
            ),
            imageSrc: "/coaching/goal.jpg",
            imageAlt: "Goal Setting and Attaining",
            reverse: false
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
                        Life Coaching &
                    </h1>
                    <h1 className="text-6xl md:text-7xl font-light italic text-amber-400 mb-8 leading-none tracking-tight">
                        Mind Training
                    </h1>

                    <div className="w-16 h-px mx-auto mb-8 bg-amber-500" />

                    <p className="text-stone-400 max-w-xl text-lg font-light leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque at itaque animi corporis inventore quidem earum iste officia incidunt ratione a alias obcaecati excepturi, assumenda cum voluptate odit saepe culpa praesentium. Porro accusamus dolores, ex praesentium ab adipisci placeat facere? Perferendis iste cum amet omnis assumenda itaque reiciendis natus!
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

export default LifeCoaching



//create the pages for this end
// i can do anything there is nothing in the world that not gonna be doable
