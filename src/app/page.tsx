'use client';

import { useState } from 'react';
import { ArrowRight, Heart, Brain, User, Sparkles, Target, CheckCircle, Play, Quote, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import InstagramReel from '@/components/InstagramReel';
import Hero from "@/components/home/Hero";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'mind' | 'body' | 'soul'>('mind');



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
    <Hero />
      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Mind • Body • Soul
            </h2>
            <p className="text-gray-600">
              Human being can be defined as mind body and soul. Balance and synergy between these three is the recipe for a happy life.
            </p>
          </div>

          {/* Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-gray-100 p-1">
                {[
                  { id: 'mind', label: 'Mind', icon: Brain },
                  { id: 'body', label: 'Body', icon: User },
                  { id: 'soul', label: 'Soul', icon: Heart }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-6 py-3 rounded-md flex items-center transition-colors ${activeTab === tab.id ? 'bg-white shadow-sm' : 'hover:bg-gray-50'}`}
                    >
                      <Icon size={18} className={`mr-2 ${activeTab === tab.id ? 'text-sky-600' : 'text-gray-400'}`} />
                      <span className={`font-medium ${activeTab === tab.id ? 'text-sky-700' : 'text-gray-600'}`}>
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              {activeTab === 'mind' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mr-4">
                        <Brain className="text-sky-600" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Mind Transformation</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Live your life powerfully and the way you want. You can get whatever you want, the way you want and whenever you want.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Get rid of limiting beliefs',
                        'Reprogram your mind for success',
                        'Transform mindset patterns',
                        'Enhance communication quality'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services/mind" className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700">
                      Know more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-6 border border-sky-100">
                    <h4 className="font-bold text-gray-900 mb-3">Key Benefits:</h4>
                    <div className="space-y-3">
                      {[
                        'Overcome self-doubt and fear',
                        'Develop positive thinking patterns',
                        'Improve decision-making skills',
                        'Enhance focus and concentration'
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'body' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                        <User className="text-emerald-600" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Body Presentation</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      First impression is the last impression. Good self presentation opens up all opportunities for success.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { value: '80%', label: 'Visual Communication' },
                        { value: '7 sec', label: 'First Impression' },
                        { value: '55%', label: 'Non-verbal Cues' },
                        { value: '93%', label: 'Impact' }
                      ].map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-lg font-bold text-emerald-600">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link href="/services/body" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700">
                      Know more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                    <h4 className="font-bold text-gray-900 mb-3">What We Cover:</h4>
                    <div className="space-y-3">
                      {[
                        'Professional etiquette',
                        'Confidence building',
                        'Effective body language',
                        'Perfect dressing and grooming'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'soul' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mr-4">
                        <Heart className="text-violet-600" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Soul Healing</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Past life regression helps you understand correlations in your current life, overcome fears, and heal from past traumas.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {[
                        'Relive past experiences safely',
                        'Understand life challenges',
                        'Overcome fears and blockades',
                        'Achieve soul-level peace'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/services/soul" className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700">
                      Know more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                  <div className="bg-violet-50 rounded-lg p-6 border border-violet-100">
                    <Quote className="text-violet-400 mb-4" size={24} />
                    <p className="text-gray-600 italic">
                      "The soul can retrieve experiences that have been gathered as a different physical person and share these soul memories in the here and now."
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Latest Reels
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <InstagramReel url="https://www.instagram.com/p/DUIWxdujKtg/" />
            <InstagramReel url="https://www.instagram.com/p/DUIWxdujKtg/" />
            <InstagramReel url="https://www.instagram.com/p/DT-Ux6WjJGb/" />
          </div>
        </div>
      </section>





      {/* CTA Section */}

    </div>
  );
}