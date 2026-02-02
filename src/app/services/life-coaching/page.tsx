'use client';

import { CheckCircle, Brain, Calendar, Clock, Target, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LifeCoaching() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-sky-50 to-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full mb-6">
                            <Brain size={16} className="mr-2" />
                            <span className="font-medium">Transformational Coaching</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Life Coaching
                        </h1>
                        <p className="text-xl text-sky-600 font-medium mb-8">
                            NLP for Self Growth and Happiness
                        </p>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Addressing past, present, and future barriers to unlock your full potential
                        </p>
                    </div>
                </div>
            </section>

            {/* Issues Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Three Types of Issues Preventing Your Growth
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We address the core issues that may be preventing you from achieving your best in any area of life
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Past Issues */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                                        <Calendar className="text-rose-600" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Your Past Issues</h3>
                                </div>
                                <p className="text-gray-600">
                                    There could be any past painful experience that your unconscious mind may be holding. That experience will weaken your confidence, motivation and productivity. It will also cause stress in your mind and diseases in your body.
                                </p>
                            </div>

                            {/* Present Issues */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                                        <Clock className="text-emerald-600" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Your Present Issues</h3>
                                </div>
                                <p className="text-gray-600">
                                    There could be any issue that you may be facing. It may be some financial issue, health issue, relationship issue or anything else that may be preventing you from enjoying your success and happiness.
                                </p>
                            </div>

                            {/* Future Issues */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mr-4">
                                        <Target className="text-violet-600" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Perception of Future as 'Uncertain' or 'Dark'</h3>
                                </div>
                                <p className="text-gray-600">
                                    There could be any issue that you may be facing. It may be some financial issue, health issue, relationship issue or anything else that may be preventing you from enjoying your success and happiness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Benefits</h2>
                            <p className="text-gray-600">Transformative outcomes from our life coaching sessions</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column Benefits */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mr-4">
                                            <Brain className="text-sky-600" size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">State of mind</h3>
                                    </div>
                                    <p className="text-gray-600">Achieve optimal mental states for growth and happiness</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                                            <Users className="text-emerald-600" size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Communication</h3>
                                    </div>
                                    <p className="text-gray-600">Enhance interpersonal and intrapersonal communication skills</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mr-4">
                                            <Target className="text-violet-600" size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Neurological Alignment</h3>
                                    </div>
                                    <p className="text-gray-600">Align your neurological patterns for optimal functioning</p>
                                </div>
                            </div>

                            {/* Right Column Benefits */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                                            <Heart className="text-rose-600" size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Outcomes</h3>
                                    </div>
                                    <p className="text-gray-600">Achieve desired results and transformative outcomes</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                                            <CheckCircle className="text-amber-600" size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Releasing Painful Memories</h3>
                                    </div>
                                    <p className="text-gray-600">Let go of past traumas and emotional baggage</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-gray-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                            <Target className="text-green-600" size={20} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">Fears and Phobias</h3>
                                    </div>
                                    <p className="text-gray-600">Overcome limiting fears and phobias</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sessions Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Sessions</h2>
                            <p className="text-gray-600">Comprehensive coaching sessions for holistic transformation</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column Sessions */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-sky-200 transition-colors">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Rapport</h3>
                                    <p className="text-gray-600">Building deep connection and understanding for effective coaching</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-sky-200 transition-colors">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Relationship with Money and Success</h3>
                                    <p className="text-gray-600">Transform your mindset around wealth and achievement</p>
                                </div>
                            </div>

                            {/* Right Column Sessions */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-sky-200 transition-colors">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Health and Happiness</h3>
                                    <p className="text-gray-600">Cultivate holistic well-being and joyful living</p>
                                </div>

                                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-sky-200 transition-colors">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Relationship with Money and Success</h3>
                                    <p className="text-gray-600">Transform your mindset around wealth and achievement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}

        </div>
    );
}