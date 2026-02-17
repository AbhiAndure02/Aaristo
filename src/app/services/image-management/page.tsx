'use client';

import { useState } from 'react';
import {
    Users,
    TableConfigIcon,
    ShoppingBag,
    Target,
    CheckCircle,
    ArrowRight,
    Calendar,
    Mail,
    Phone,
    MapPin,
    Zap,
    Sparkles,
    Smile,
    Heart,
    ConciergeBell
} from 'lucide-react';
import Link from 'next/link';

export default function ImageManagementPage() {
    const [activeSession, setActiveSession] = useState(9);

    const sessions = [
        {
            id: 9,
            title: 'Awareness of Body Language',
            icon: <Users className="text-sky-600" size={24} />,
            description: 'In this segment of consultation, the client is guided on how to control their body language and how to read body language signs of other people.',
            benefits: [
                'Understand non-verbal communication cues',
                'Learn to project confidence through posture',
                'Interpret others\' body language accurately',
                'Control nervous habits and gestures',
                'Enhance professional presence'
            ],
            duration: '2-3 hours',
            format: 'One-on-one session'
        },
        {
            id: 10,
            title: 'Self Confidence Building',
            icon: <ConciergeBell className="text-emerald-600" size={24} />,
            description: 'Fortunately there are ways to boost one\'s self esteem even if you feel you are struggling to do so. There are reasons why someone must have low self esteem.',
            benefits: [
                'Identify and overcome limiting beliefs',
                'Develop positive self-talk patterns',
                'Build assertiveness skills',
                'Learn to handle criticism constructively',
                'Cultivate self-acceptance and self-worth'
            ],
            duration: '3-4 hours',
            format: 'Personal coaching session'
        },
        {
            id: 11,
            title: 'Personal Shopping Services',
            icon: <ShoppingBag className="text-violet-600" size={24} />,
            description: 'Once lifestyle, personal style, body shape and color characteristics are identified, the consultant helps to identify the right clothing and accessories to flatter personal characteristics and image.',
            benefits: [
                'Personalized style assessment',
                'Body shape analysis and dressing',
                'Color palette identification',
                'Wardrobe curation and organization',
                'Shopping guidance and recommendations'
            ],
            duration: '4-6 hours',
            format: 'Personal shopping experience'
        }
    ];

    const packages = [
        {
            name: 'Starter Package',
            sessions: ['Session 9 or 10'],
            price: '₹8,999',
            features: ['One session of choice', 'Personal assessment', 'Basic guidebook']
        },
        {
            name: 'Complete Transformation',
            sessions: ['All 3 Sessions'],
            price: '₹24,999',
            features: ['All image management sessions', 'Personal shopping assistance', 'Follow-up support', 'Custom style guide'],
            popular: true
        },
        {
            name: 'Corporate Package',
            sessions: ['Custom Sessions'],
            price: 'Custom Quote',
            features: ['Team workshops', 'Professional image training', 'Bulk session discounts', 'Company-wide assessments']
        }
    ];

    const testimonials = [
        {
            name: 'Rahul Verma',
            role: 'Business Manager',
            content: 'The body language session completely changed how I present in meetings. I feel more confident and authoritative.',
            session: 9
        },
        {
            name: 'Priya Desai',
            role: 'Marketing Executive',
            content: 'Monica helped me build self-confidence I never knew I had. The transformation has been incredible.',
            session: 10
        },
        {
            name: 'Anjali Kapoor',
            role: 'Entrepreneur',
            content: 'The personal shopping service saved me so much time and money. I now have a wardrobe that truly represents me.',
            session: 11
        }
    ];

    return (
        <div className="min-h-screen bg-white mt-10">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-sky-50 to-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full mb-6">
                            <Target size={16} className="mr-2" />
                            <span className="font-medium">Professional Image Management</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Master Your <span className="text-sky-600">Professional Image</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Transform how you present yourself to the world with our comprehensive image management services.
                            From body language to personal style, we help you create a powerful, authentic presence.
                        </p>

                    </div>
                </div>
            </section>

            {/* Sessions Navigation */}
            <section className="py-12 bg-white border-y border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {sessions.map((session) => (
                                <button
                                    key={session.id}
                                    onClick={() => setActiveSession(session.id)}
                                    className={`px-6 py-3 rounded-lg flex items-center justify-center transition-colors ${activeSession === session.id
                                        ? 'bg-sky-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <span className="mr-2">{session.icon}</span>
                                    <span className="font-medium">Session {session.id}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Active Session Details */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {sessions
                            .filter(session => session.id === activeSession)
                            .map((session) => (
                                <div key={session.id} className="grid lg:grid-cols-2 gap-12">
                                    {/* Session Details */}
                                    <div>
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br from-sky-50 to-blue-50">
                                                {session.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-900">{session.title}</h2>
                                                <p className="text-gray-500">Session {session.id}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                            {session.description}
                                        </p>

                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                                <Sparkles size={20} className="mr-2 text-sky-500" />
                                                Key Benefits
                                            </h3>
                                            <ul className="space-y-3">
                                                {session.benefits.map((benefit, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <CheckCircle size={18} className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-600">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="text-sm text-gray-500 mb-1">Duration</div>
                                                <div className="font-medium text-gray-900">{session.duration}</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="text-sm text-gray-500 mb-1">Format</div>
                                                <div className="font-medium text-gray-900">{session.format}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Session Visual */}
                                    <div>
                                        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 h-full">
                                            <div className="mb-6">
                                                <div className="text-6xl font-bold text-sky-600 mb-2">{session.id}</div>
                                                <div className="text-lg text-gray-600">Comprehensive Session</div>
                                            </div>

                                            <div className="space-y-4 mb-8">
                                                <div className="flex items-center">
                                                    <Zap size={20} className="text-amber-500 mr-3" />
                                                    <span className="text-gray-700">Practical exercises and demonstrations</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Smile size={20} className="text-rose-500 mr-3" />
                                                    <span className="text-gray-700">Personalized feedback and guidance</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Heart size={20} className="text-emerald-500 mr-3" />
                                                    <span className="text-gray-700">Supportive and confidential environment</span>
                                                </div>
                                            </div>

                                            <div className="bg-white rounded-xl p-6 border border-gray-200">
                                                <h4 className="font-bold text-gray-900 mb-4">Ready to Transform?</h4>
                                                <p className="text-gray-600 mb-4 text-sm">
                                                    Book this session individually or as part of a complete package
                                                </p>
                                                <button className="w-full py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors">
                                                    Book This Session
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Packages 
            {/* Testimonials */}

            {/* Contact Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Get Personalized Image Consultation</h2>
                                <p className="text-gray-600 mb-8">
                                    Ready to transform your professional image? Contact Monica directly for personalized guidance and booking information.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center mr-4">
                                            <Mail className="text-sky-600" size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Email</div>
                                            <a href="mailto:monica@aaristo.com" className="text-gray-900 font-medium hover:text-sky-600">
                                                monica@aaristo.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mr-4">
                                            <Phone className="text-emerald-600" size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Phone</div>
                                            <a href="tel:+919823064999" className="text-gray-900 font-medium hover:text-emerald-600">
                                                +91 98230 64999
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-4">
                                            <MapPin className="text-amber-600" size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Address</div>
                                            <div className="text-gray-900 font-medium">
                                                19-A Building B, Premier Plaza,<br />
                                                Chinchwad, Pune
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-3">Office Hours</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Monday - Friday</span>
                                            <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Saturday</span>
                                            <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Sunday</span>
                                            <span className="text-gray-900 font-medium">By Appointment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white rounded-xl border border-gray-200 p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule a Consultation</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Session</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition">
                                            <option value="">Select a session</option>
                                            <option value="9">Session 9: Body Language</option>
                                            <option value="10">Session 10: Self Confidence</option>
                                            <option value="11">Session 11: Personal Shopping</option>
                                            <option value="all">Complete Package</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                            placeholder="Tell us about your goals..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors flex items-center justify-center"
                                    >
                                        <Calendar size={20} className="mr-2" />
                                        Schedule Consultation
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps */}

        </div>
    );
}