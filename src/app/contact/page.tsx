'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle, ArrowRight, Send, Instagram, Facebook, Linkedin, Heart, User, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'general',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const services = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'image-management', label: 'Image Management' },
        { value: 'life-coaching', label: 'Life Coaching' },
        { value: 'spiritual-upliftment', label: 'Spiritual Upliftment' },
        { value: 'past-life-regression', label: 'Past Life Regression' },
        { value: 'workshop', label: 'Workshop Booking' },
        { value: 'corporate', label: 'Corporate Training' }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact/send-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    success: true,
                    message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'general',
                    message: ''
                });
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-sky-50 to-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full mb-6">
                            <MessageSquare size={16} className="mr-2" />
                            <span className="font-medium">Get in Touch</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Contact Us
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ready to begin your transformation journey? Reach out to us for personalized guidance and support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                                <p className="text-gray-600 mb-8">
                                    Whether you're looking for personal transformation, corporate training, or just want to learn more about our services, we're here to help.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <MapPin className="text-sky-600 mr-3" size={24} />
                                        Visit Us
                                    </h3>
                                    <address className="text-gray-600 not-italic">
                                        B4, Emirates Hills, Somatne,<br />
                                        Talegaon Dabhade, Mawal<br />
                                        Old Mumbai Pune Highway,<br />
                                        Pune - 410506<br />
                                        Maharashtra, India
                                    </address>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Phone className="text-emerald-600 mr-3" size={24} />
                                        Call Us
                                    </h3>
                                    <a
                                        href="tel:+919823064999"
                                        className="text-gray-600 text-lg hover:text-emerald-600 transition-colors"
                                    >
                                        +91 98230 64999
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Mail className="text-rose-600 mr-3" size={24} />
                                        Email Us
                                    </h3>
                                    <a
                                        href="mailto:monica@aaristo.com"
                                        className="text-gray-600 text-lg hover:text-rose-600 transition-colors"
                                    >
                                        monica@aaristo.com
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Clock className="text-amber-600 mr-3" size={24} />
                                        Office Hours
                                    </h3>
                                    <div className="space-y-2 text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span className="font-medium">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span className="font-medium">By Appointment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://instagram.com/aaristo_consulting"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 rounded-lg hover:bg-pink-100 transition-colors"
                                    >
                                        <Instagram className="text-gray-600" size={20} />
                                    </a>
                                    <a
                                        href="https://facebook.com/aaristo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
                                    >
                                        <Facebook className="text-gray-600" size={20} />
                                    </a>
                                    <a
                                        href="https://linkedin.com/company/aaristo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors"
                                    >
                                        <Linkedin className="text-gray-600" size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

                            {submitStatus && (
                                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'}`}>
                                    <div className="flex items-center">
                                        {submitStatus.success ? (
                                            <CheckCircle className="text-emerald-600 mr-3" size={20} />
                                        ) : (
                                            <div className="text-rose-600 mr-3">⚠️</div>
                                        )}
                                        <p className={submitStatus.success ? 'text-emerald-700' : 'text-rose-700'}>
                                            {submitStatus.message}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Interested In
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                                    >
                                        {services.map((service) => (
                                            <option key={service.value} value={service.value}>
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition resize-none"
                                        placeholder="Tell us about your goals, challenges, or any specific requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 bg-sky-600 text-white rounded-lg font-medium flex items-center justify-center transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-sky-700'}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={20} className="ml-2" />
                                        </>
                                    )}
                                </button>

                                <p className="text-gray-500 text-sm text-center">
                                    We'll respond to your inquiry within 24 hours.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Find Our Location</h2>
                            <p className="text-gray-600">Visit us at our Pune center</p>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <div className="aspect-[21/9] bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <MapPin className="text-sky-600 mx-auto mb-4" size={48} />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Emirates Hills, Pune</h3>
                                    <p className="text-gray-600">
                                        We're conveniently located on Old Mumbai Pune Highway
                                    </p>
                                    <Link
                                        href="https://maps.google.com/?q=B4+Emirates+Hills+Somatne+Talegaon+Dabhade+Pune"
                                        target="_blank"
                                        className="inline-flex items-center mt-4 text-sky-600 hover:text-sky-700 font-medium"
                                    >
                                        Open in Google Maps
                                        <ArrowRight size={16} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Calendar className="text-sky-600" size={28} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                Ready to Schedule Your Session?
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Book a free 30-minute discovery call to discuss your goals and see how we can help.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="https://calendly.com/aaristo/30min"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                                >
                                    Book Discovery Call
                                    <ArrowRight size={20} className="ml-2" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-sky-300 hover:bg-sky-50 transition-colors"
                                >
                                    Explore Our Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}