'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navItems = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'About Us', href: '/about' },
        {
            id: 3,
            label: 'Services',
            href: '/services',
            hasDropdown: true,
            dropdownItems: [
                { label: 'Image Management', href: '/services/image-management' },
                { label: 'Life Coaching', href: '/services/life-coaching' },
                { label: 'Past Life Regression', href: '/services/past-life-regression' },
                { label: 'Spiritual Upliftment', href: '/services/spiritual-upliftment' }
            ]
        },
        { id: 4, label: 'Workshops', href: '/workshops' },
        { id: 5, label: 'Testimonials', href: '/testimonials' },
        { id: 6, label: 'Gallery', href: '/gallery' },
        { id: 7, label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="flex items-center">
                            <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                                {/* Logo Image */}
                                <Image
                                    src="/logo.jpg"
                                    alt="Aaristo Consulting & Training Logo"
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                    priority
                                    onError={(e) => {
                                        // Fallback to icon if image fails to load
                                        e.currentTarget.style.display = 'none';
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `
                                                <div class="w-10 h-10 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                                    </svg>
                                                </div>
                                            `;
                                        }
                                    }}
                                />

                                {/* Fallback Icon */}
                                <div className="hidden">
                                    <Heart className="text-sky-600" size={24} />
                                </div>
                            </div>
                            <div className="ml-3">
                                <h1 className="text-2xl font-semibold text-gray-900">
                                    Aaristo
                                </h1>
                                <p className="text-sm text-gray-500">Consulting & Training</p>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-sky-600 font-medium py-2 transition-colors"
                                >
                                    {item.label}
                                    {item.hasDropdown && <ChevronDown size={14} className="ml-1 inline" />}
                                </Link>

                                {item.hasDropdown && (
                                    <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                        {item.dropdownItems?.map((dropdownItem, index) => (
                                            <Link
                                                key={index}
                                                href={dropdownItem.href}
                                                className="block px-4 py-2.5 text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <Phone size={16} />
                            <span className="text-sm">+91 98230 64999</span>
                        </div>
                        <Link
                            href="/contact"
                            className="px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                        >
                            Book Session
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600 hover:text-sky-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden pb-6 border-t border-gray-100 mt-2">
                        <div className="flex flex-col gap-4 space-y-1 pt-4">
                            {navItems.map((item) => (
                                <div key={item.id}>
                                    {item.hasDropdown ? (
                                        <div className="mb-2">
                                            <div className="text-gray-700 font-medium py-3 px-4">
                                                {item.label}
                                            </div>
                                            <div className="ml-4 space-y-1">
                                                {item.dropdownItems?.map((dropdownItem, index) => (
                                                    <Link
                                                        key={index}
                                                        href={dropdownItem.href}
                                                        className="block py-2 px-4 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {dropdownItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-gray-700 hover:text-sky-600 hover:bg-sky-50 py-3 px-4 rounded-lg transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 px-4 space-y-3">
                                <div className="flex items-center text-gray-600">
                                    <Phone size={16} className="mr-2" />
                                    <span>+91 98230 64999</span>
                                </div>
                                <Link
                                    href="/contact"
                                    className="block w-full py-3 bg-sky-600 text-white rounded-lg font-medium text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Book Session
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}