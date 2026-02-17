'use client';

import { Sparkles, Target, Heart, Brain, Shield, Moon, Sun, Zap, Wind, TargetIcon, Users, ArrowRight, Calendar, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function SpiritualUpliftment() {
    const healingSessions = [
        {
            icon: <Sparkles className="text-violet-600" size={24} />,
            title: 'Access Cosmic Energy',
            benefits: [
                'Raise awareness',
                'Release mental heaviness',
                'Restore energetic balance'
            ]
        },
        {
            icon: <Target className="text-emerald-600" size={24} />,
            title: 'Access Ground Energy',
            benefits: [
                'Feel stable and secure',
                'Reduce anxiety',
                'Stay present and centered'
            ]
        },
        {
            icon: <Heart className="text-rose-600" size={24} />,
            title: 'Chakra Healing',
            benefits: [
                'Removal of energy blocks',
                'Emotional balance',
                'Confidence and self-expression'
            ]
        },
        {
            icon: <Brain className="text-sky-600" size={24} />,
            title: 'Deep Meditation',
            benefits: [
                'Calm the nervous system',
                'Access deeper awareness',
                'Experience inner stillness'
            ],
            note: 'Beginner-friendly'
        },
        {
            icon: <Shield className="text-amber-600" size={24} />,
            title: 'Develop Your Intuition',
            benefits: [
                'Trust your decisions',
                'Reduce self-doubt',
                'Gain clarity in life choices'
            ]
        },
        {
            icon: <Zap className="text-purple-600" size={24} />,
            title: 'Remove Energy Blocks',
            benefits: [
                'Release emotional heaviness',
                'Break repeated life patterns',
                'Overcome feeling stuck or drained'
            ]
        }
    ];

    const forYouIf = [
        'Feel disconnected from yourself',
        'Seek spirituality without religion',
        'Want healing beyond motivation',
        'Desire clarity, balance, and peace'
    ];

    return (
        <div className="min-h-screen bg-white mt-22">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-violet-50 to-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-violet-100 text-violet-700 px-4 py-2 rounded-full mb-6">
                            <Sparkles size={16} className="mr-2" />
                            <span className="font-medium">Practical Spirituality</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Spirituality
                        </h1>
                        <p className="text-xl text-gray-600 mb-4">
                            Finding Yourself Beyond Religion & Rituals
                        </p>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Spirituality is not about religion or rituals. It is about finding yourself—
                            your awareness, balance, and inner truth.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Spirituality Means */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                ✨ What Spirituality Means Here
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Spirituality is about understanding your inner world, releasing emotional and energy blocks,
                                aligning mind, body, and energy, and living with clarity instead of confusion.
                            </p>
                            <div className="text-violet-600 text-xl font-medium">
                                When awareness increases, life becomes lighter.
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">🚫 What This Is NOT</h3>
                                    <ul className="space-y-2">
                                        {[
                                            'Not religion',
                                            'Not rituals',
                                            'Not forced beliefs',
                                            'Not escaping emotions'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <p className="text-gray-700 font-medium">
                                        This is practical spirituality for real life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Spiritual Healing Matters */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                🌱 Why Spiritual Healing Matters
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Many challenges are not mental problems—they are energy blocks caused by suppressed emotions,
                                unresolved experiences, and constant stress and overthinking.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Moon className="text-violet-600 mr-3" size={24} />
                                    Energy Blocks
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        'Suppressed emotions',
                                        'Unresolved experiences',
                                        'Constant stress and overthinking'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-600">
                                            <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Sun className="text-amber-600 mr-3" size={24} />
                                    Spiritual Healing Helps You
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        'Feel grounded and calm',
                                        'Reconnect with yourself',
                                        'Develop emotional balance',
                                        'Trust your intuition'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-600">
                                            <CheckCircle size={16} className="text-emerald-500 mr-3 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spiritual Healing Sessions */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                🌟 Spiritual Healing & Growth Sessions
                            </h2>
                            <p className="text-gray-600">Transformative sessions for holistic spiritual growth</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {healingSessions.map((session, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-violet-200 transition-colors">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br from-gray-50 to-gray-100">
                                            {session.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">{session.title}</h3>
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {session.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start text-gray-600 text-sm">
                                                <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {session.note && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <span className="text-xs text-violet-600 font-medium">{session.note}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                👤 Who This Is For
                            </h2>
                            <p className="text-gray-600 mb-8">
                                This is for you if you want to reconnect with your true self through practical spirituality.
                            </p>
                            <div className="inline-flex items-center bg-violet-100 text-violet-700 px-4 py-2 rounded-full">
                                <Star size={16} className="mr-2" />
                                <span className="font-medium">No prior experience needed</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">This is for you if you:</h3>
                                <ul className="space-y-3">
                                    {forYouIf.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-600">
                                            <CheckCircle size={18} className="text-violet-500 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-100">
                                <div className="flex items-center mb-4">
                                    <Wind className="text-violet-600" size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">🌸 A Gentle Truth</h3>
                                <p className="text-gray-700 mb-4">
                                    You don't need fixing. You need understanding and alignment.
                                </p>
                                <p className="text-gray-700 font-medium">
                                    When energy flows, life starts to flow too.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-100">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <Sparkles className="text-violet-600" size={28} />
                                </div>
                                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                    Begin Your Spiritual Journey
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Book a spiritual healing session and reconnect with your inner self, intuition, and energy.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
                                    >
                                        Book Session Now
                                        <ArrowRight size={20} className="ml-2" />
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-violet-300 hover:bg-violet-50 transition-colors"
                                    >
                                        View All Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}