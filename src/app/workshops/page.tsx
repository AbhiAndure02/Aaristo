"use client";
import React, { useState } from 'react';
import {
    Target,
    Users,
    Brain,
    Shield,
    TrendingUp,
    Sparkles,
    ArrowRight,
    CheckCircle,
    Clock,
    Calendar,
    UserCheck,
    Award,
    Zap,
    Heart,
    Star,
    Leaf,
    Eye
} from 'lucide-react';

const Workshops = () => {
    const [activeSection, setActiveSection] = useState('approach');

    const offerings = [
        {
            title: "Leadership Presence Intensive",
            duration: "2 Days",
            audience: "Senior Leaders & Executives",
            focus: ["Executive Image Management", "Strategic Communication", "High-Stakes Presence"],
            icon: <Award className="w-6 h-6" />
        },
        {
            title: "Stress Resilience Workshop",
            duration: "1 Day",
            audience: "Managers & Teams",
            focus: ["Emotional Regulation", "Burnout Prevention", "Mindful Leadership"],
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "Professional Image Mastery",
            duration: "Half Day",
            audience: "All Levels",
            focus: ["Personal Branding", "Non-verbal Communication", "Executive Poise"],
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Team Alignment Program",
            duration: "Custom",
            audience: "Leadership Teams",
            focus: ["Goal Synchronization", "Collective Resilience", "Cohesive Performance"],
            icon: <Users className="w-6 h-6" />
        }
    ];

    const benefits = [
        {
            icon: <Brain className="w-8 h-8 text-purple-600" />,
            title: "Clarity of Mind",
            description: "Develop mental clarity and focus for strategic decision-making"
        },
        {
            icon: <Heart className="w-8 h-8 text-red-600" />,
            title: "Emotional Balance",
            description: "Master emotional regulation for composed leadership"
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-600" />,
            title: "Sustainable Performance",
            description: "Maintain peak performance without burnout"
        },
        {
            icon: <Eye className="w-8 h-8 text-blue-600" />,
            title: "Presence & Impact",
            description: "Command attention and inspire confidence"
        },
        {
            icon: <Leaf className="w-8 h-8 text-green-600" />,
            title: "Resilience Building",
            description: "Develop tools to navigate high-pressure environments"
        },
        {
            icon: <Star className="w-8 h-8 text-orange-600" />,
            title: "Professional Refinement",
            description: "Elevate personal and professional image"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mt-22">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-700 font-medium text-sm">Strategic Inner Refinement</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Refined leadership
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            begins from within
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                        I partner with corporates and leadership teams to build composed, resilient, and
                        high-impact professionals who lead with clarity, presence, and emotional intelligence.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Left Column - Problem Statement */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl">
                                    <Target className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">The Performance Challenge</h2>
                            </div>

                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                In today's fast-paced corporate landscape, performance alone is not enough.
                                Sustainable success requires inner stability, stress resilience, conscious goal alignment,
                                and a refined professional image that inspires trust and authority.
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                                <p className="text-gray-800 font-medium italic">
                                    "This is not motivational training. It is strategic inner refinement for measurable performance."
                                </p>
                            </div>
                        </div>

                        {/* Methodology Section */}
                        <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl">
                                    <Brain className="w-6 h-6 text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Integrated Approach</h2>
                            </div>

                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                My work integrates executive image management, emotional regulation, stress mastery,
                                grounding techniques, and mindset refinement to support leaders and employees in
                                performing at their best—without burnout.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Executive Image Management",
                                    "Emotional Regulation",
                                    "Stress Mastery",
                                    "Grounding Techniques",
                                    "Mindset Refinement",
                                    "Communication Impact"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Focus Areas */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 text-white shadow-xl">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <TrendingUp className="w-6 h-6" />
                                Organisational Impact
                            </h3>

                            <p className="text-blue-100 mb-6">
                                Through structured workshops, leadership sessions, and customised corporate interventions,
                                I help organisations build calm, focused, and accountable teams.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Develop confident, credible leadership presence",
                                    "Strengthen stress resilience and emotional balance",
                                    "Align personal goals with organisational objectives",
                                    "Enhance professional image and communication impact"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                        </div>
                                        <span className="text-blue-100 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits Preview */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
                            <div className="space-y-3">
                                {benefits.slice(0, 3).map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="p-2 bg-gradient-to-br from-gray-50 to-white rounded-lg">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                                            <p className="text-sm text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Workshop Offerings */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Structured Programs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tailored workshops designed to address specific leadership and team development needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {offerings.map((workshop, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="mb-4">
                                    <div className="inline-flex p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mb-4">
                                        {workshop.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {workshop.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {workshop.audience}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    {workshop.focus.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity group-hover:shadow-md">
                                    Explore Program
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full Benefits Grid */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Measurable Outcomes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Because when people are aligned within, organisations perform at their peak
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 group hover:shadow-xl">
                                <div className="mb-4">
                                    <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-white to-gray-50 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Impact Level:</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-2 h-2 bg-blue-400 rounded-full mx-0.5" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}


                {/* Philosophy Section */}
                <div className="mt-16 text-center max-w-4xl mx-auto">
                    <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                        <div className="bg-white px-6 py-2 rounded-full">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
                                Our Philosophy
                            </span>
                        </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        Performance through inner alignment
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Sustainable leadership excellence isn't about doing more—it's about being more.
                        More composed under pressure, more resilient in uncertainty, more aligned with purpose.
                        We bridge the gap between professional demands and personal sustainability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Workshops;