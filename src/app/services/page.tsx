'use client';

import { Brain, Heart, Sparkles, Users, Target, Zap, ArrowRight, CheckCircle, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
    const services = [
        {
            icon: <Users className="text-sky-600" size={24} />,
            title: 'Image Management',
            description: 'Master your professional presence through body language, confidence building, and personal style transformation.',
            href: '/image-management',
            features: ['Body Language Awareness', 'Self Confidence Building', 'Personal Shopping Services'],
            color: 'sky',
            popular: true
        },
        {
            icon: <Brain className="text-emerald-600" size={24} />,
            title: 'Life Coaching',
            description: 'NLP-based coaching to overcome past issues, present challenges, and future uncertainties for self-growth.',
            href: '/life-coaching',
            features: ['Past Issue Resolution', 'Present Challenge Support', 'Future Clarity'],
            color: 'emerald'
        },
        {
            icon: <Sparkles className="text-violet-600" size={24} />,
            title: 'Spiritual Upliftment',
            description: 'Practical spirituality without religion - reconnect with your inner self, intuition, and energy balance.',
            href: '/spiritual-upliftment',
            features: ['Cosmic Energy Access', 'Chakra Healing', 'Intuition Development'],
            color: 'violet'
        },
        {
            icon: <Heart className="text-rose-600" size={24} />,
            title: 'Past Life Regression',
            description: 'Explore past experiences to understand and overcome current life patterns, fears, and blockages.',
            href: ' /past-life-regression',
            features: ['Past Life Exploration', 'Pattern Recognition', 'Healing Past Traumas'],
            color: 'rose'
        },

    ];

    const servicePackages = [
        {
            name: 'Individual Session',
            description: 'One-on-one focused session',
            duration: '60-90 minutes',
            price: 'Starting at ₹4,999',
            features: ['Personalized attention', 'Customized approach', 'Immediate application']
        },
        {
            name: 'Transformation Package',
            description: 'Complete 3-session package',
            duration: '3 sessions over 4 weeks',
            price: '₹12,999',
            features: ['Deep transformation', 'Continued support', 'Progress tracking'],
            popular: true
        },
        {
            name: 'Workshop Group',
            description: 'Group learning experience',
            duration: '2-3 hours',
            price: '₹2,999 per person',
            features: ['Interactive learning', 'Group dynamics', 'Network building']
        }
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Initial Consultation',
            description: 'We begin with understanding your needs, challenges, and goals.'
        },
        {
            number: '02',
            title: 'Personalized Plan',
            description: 'Create a customized transformation plan based on your unique situation.'
        },
        {
            number: '03',
            title: 'Transformation Session',
            description: 'Engage in guided sessions with practical exercises and insights.'
        },
        {
            number: '04',
            title: 'Integration & Support',
            description: 'Implement learnings with ongoing guidance and follow-up support.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-sky-50 to-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full mb-6">
                            <Sparkles size={16} className="mr-2" />
                            <span className="font-medium">Holistic Transformation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Our Services
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Comprehensive consulting and training services to help you transform mind, body, and soul for complete personal growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                            >
                                Book Consultation
                                <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link
                                href="/workshops"
                                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-sky-300 hover:bg-sky-50 transition-colors"
                            >
                                View Workshops
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Transformational Services</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Choose from our range of specialized services designed for holistic personal and professional growth.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.href}
                                    className="group block"
                                >
                                    <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:border-sky-200 hover:shadow-lg transition-all">
                                        {service.popular && (
                                            <div className="inline-flex items-center px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium mb-4">
                                                <Star size={12} className="mr-1" />
                                                Most Popular
                                            </div>
                                        )}
                                        <div className="flex items-start mb-4">
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-${service.color}-50`}>
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-600 text-sm">
                                                    <CheckCircle size={14} className="text-green-500 mr-2" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex items-center text-sky-600 font-medium group-hover:text-sky-700">
                                            <span>Learn more</span>
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our 4-Step Process</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A structured approach to ensure meaningful and lasting transformation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {processSteps.map((step, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-xl p-6 border border-gray-200 h-full">
                                        <div className="text-4xl font-bold text-sky-600 mb-4">{step.number}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                            <ArrowRight className="text-gray-300" size={24} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Packages */}




            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Sparkles className="text-sky-600" size={28} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                Ready to Begin Your Transformation?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Take the first step towards the life you want. Book your consultation today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                                >
                                    Book Free Consultation
                                </Link>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-sky-300 hover:bg-sky-50 transition-colors"
                                >
                                    Meet Our Founder
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}