'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Award, Users, Target, Heart, Sparkles, ArrowRight, Quote, Star, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const [activeStory, setActiveStory] = useState(2012);

    const milestones = [
        { year: 2012, title: 'Journey Begins', description: 'Founded with a vision to transform lives' },
        { year: 2014, title: 'First Workshop', description: 'Conducted first transformational workshop' },
        { year: 2016, title: 'Expansion', description: 'Added corporate training programs' },
        { year: 2018, title: 'Recognition', description: 'Featured in national publications' },
        { year: 2020, title: 'Online Shift', description: 'Successfully transitioned to virtual sessions' },
        { year: 2023, title: '10K+ Clients', description: 'Transformed over 10,000 lives' }
    ];

    const certifications = [
        { title: 'Certified Life Coach', issuer: 'International Coaching Federation' },
        { title: 'Image Consultant', issuer: 'Association of Image Consultants' },
        { title: 'Past Life Regression Therapist', issuer: 'International Association of Therapists' },
        { title: 'Graphology Expert', issuer: 'International Graphology Association' },
        { title: 'NLP Practitioner', issuer: 'American Board of NLP' },
        { title: 'Corporate Trainer', issuer: 'Training Industry Association' }
    ];

    const teamValues = [
        { icon: <Heart className="text-rose-500" />, title: 'Compassion', description: 'We genuinely care about every client' },
        { icon: <Target className="text-sky-500" />, title: 'Excellence', description: 'We strive for the highest quality' },
        { icon: <Users className="text-emerald-500" />, title: 'Community', description: 'We build supportive networks' },
        { icon: <Sparkles className="text-violet-500" />, title: 'Transformation', description: 'We believe in profound change' }
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-sky-50 to-white">
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            About <span className="text-sky-600">Aaristo</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Transforming lives through compassionate consulting, comprehensive training, and holistic healing
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Founder Details */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">Monica Bansal</h2>
                                <p className="text-lg text-gray-600 italic mb-4">
                                    A passionate Image Consultant, Life Coach Trainer, Past Life Regression Therapist and Graphologist
                                </p>
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 mb-4">
                                        Monica believes in helping her clients grow in every aspect of their life. She has designed various programs
                                        to help her clients with any difficulties they might face in their lives.
                                    </p>
                                    <p className="text-gray-600">
                                        Her approach combines scientific methods with spiritual understanding, creating a holistic framework
                                        for personal and professional transformation that addresses mind, body, and soul.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                    <Briefcase size={20} className="mr-2 text-sky-600" />
                                    Contact Monica
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Mail size={18} className="text-gray-400 mr-3" />
                                        <div>
                                            <div className="text-sm text-gray-500">Email</div>
                                            <div className="font-medium">monica@aaristo.com</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone size={18} className="text-gray-400 mr-3" />
                                        <div>
                                            <div className="text-sm text-gray-500">Phone</div>
                                            <div className="font-medium">+91 98230 64999</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin size={18} className="text-gray-400 mr-3" />
                                        <div>
                                            <div className="text-sm text-gray-500">Address</div>
                                            <div className="font-medium">
                                                B4, Emirates Hills, Somatne,<br />
                                                Talegaon Dabhade, Mawal<br />
                                                Old Mumbai Pune Highway,<br />
                                                Pune- 410506<br />
                                                Maharashtra, India                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Founder Image & Stats */}
                        <div className="bg-linear-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
                            <div className="aspect-square max-w-sm mx-auto rounded-xl overflow-hidden mb-6 group shadow-sm hover:shadow-xl transition-shadow duration-500">

                                <div className="relative w-full h-full">
                                    <Image
                                        src="/about.png"
                                        alt="About"
                                        fill
                                        className="object-cover  object-top transition-transform  duration-500 ease-out  group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, 400px"
                                        priority
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
                            <p className="text-gray-600">
                                We started this business in 2012 with a vision to help people grow not just professionally,
                                but also personally and spiritually.
                            </p>
                        </div>

                        {/* Timeline */}

                    </div>
                </div>
            </section>

            {/* Certifications */}



        </div>
    );
}