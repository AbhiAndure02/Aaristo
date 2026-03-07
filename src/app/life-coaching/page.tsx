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
                        "Gives you a professional and polished image that commands respect",
                        "Provides professional tools to impress clients and colleagues at every meeting",
                        "Puts others at ease so that business can be conducted smoothly and effectively",
                        "Helps to establish rapport with others more easily and authentically",
                        "Builds confidence and helps create a winning, memorable personal style",
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
                        "Gives you a professional and polished image that commands respect",
                        "Provides professional tools to impress clients and colleagues at every meeting",
                        "Puts others at ease so that business can be conducted smoothly and effectively",
                        "Helps to establish rapport with others more easily and authentically",
                        "Builds confidence and helps create a winning, memorable personal style",
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
                        What utters volumes more than your words? Yes — your body language and your appearance speak before you even open your mouth. The impression you make in the first seven seconds is almost entirely non-verbal.
                    </p>
                    <p>
                        The language spoken by our clothes and our body is understood by everyone across cultures and borders. Let every movement tell a story of grace, confidence, and intentional presence.
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
                        Mastering the art of dining etiquette gives you professional tools to impress clients and colleagues in even the most formal of settings. It puts others at ease so that meaningful conversations and business can unfold naturally.
                    </p>
                    <p>
                        Creates a comfortable, refined dining environment where professional relationships truly flourish — and trust is built one course at a time, with grace and warmth.
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
                        Your wardrobe is your most visible form of self-expression. A thoughtfully curated personal style communicates your values, your ambitions, and your attention to detail — long before a single word is exchanged.
                    </p>
                    <p>
                        We guide you through building a wardrobe that works seamlessly across every context — from boardrooms to galas — ensuring you always step forward with intention, elegance, and effortless confidence.
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
                        Your wardrobe is your most visible form of self-expression. A thoughtfully curated personal style communicates your values, your ambitions, and your attention to detail — long before a single word is exchanged.
                    </p>
                    <p>
                        We guide you through building a wardrobe that works seamlessly across every context — from boardrooms to galas — ensuring you always step forward with intention, elegance, and effortless confidence.
                    </p>
                </>
            ),
            imageSrc: "/coaching/releasing.jpg",
            imageAlt: "Releasing all Limiting Beliefs",
            reverse: true
        }
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
