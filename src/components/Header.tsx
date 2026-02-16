'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, Heart, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

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
    ];

    return (
        <>
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-md shadow-sky-100/60'
                    : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-18 sm:h-20">

                        {/* Logo */}
                        <Link href="/" className="flex items-center group shrink-0">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm ring-1 ring-sky-100 group-hover:ring-sky-300 transition-all duration-200">
                                <Image
                                    src="/logo.jpg"
                                    alt="Aaristo Consulting & Training Logo"
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                    priority
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `
                                                <div class="w-full h-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                                    </svg>
                                                </div>
                                            `;
                                        }
                                    }}
                                />
                            </div>
                            <div className="ml-3">
                                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                                    Aaristo
                                </h1>
                                <p className="text-[11px] sm:text-xs text-sky-500 font-medium tracking-widest uppercase">
                                    Consulting & Training
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-gray-600 hover:text-sky-600 font-medium px-3 py-2 rounded-lg hover:bg-sky-50 transition-all duration-200 text-sm"
                                    >
                                        {item.label}
                                        {item.hasDropdown && (
                                            <ChevronDown
                                                size={13}
                                                className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </Link>

                                    {item.hasDropdown && (
                                        <div
                                            className={`absolute top-full left-0 mt-2 w-58 bg-white rounded-xl shadow-xl shadow-sky-100/50 border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === item.label
                                                ? 'opacity-100 visible translate-y-0'
                                                : 'opacity-0 invisible -translate-y-1'
                                                }`}
                                            style={{ minWidth: '220px' }}
                                        >
                                            {item.dropdownItems?.map((dropdownItem, index) => (
                                                <Link
                                                    key={index}
                                                    href={dropdownItem.href}
                                                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors group"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-sky-500 transition-colors shrink-0" />
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold text-sm hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-md shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-0.5"
                            >
                                <Sparkles size={14} />
                                Book Session
                            </Link>
                        </div>

                        {/* Mobile/Tablet Hamburger */}
                        <button
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── RIGHT-SIDE DRAWER OVERLAY + PANEL ── */}

            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[60] bg-gray-900/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <aside
                className={`fixed top-0 right-0 z-[70] h-full w-[300px] sm:w-[340px] bg-white shadow-2xl shadow-gray-900/20 flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100 bg-gradient-to-r from-sky-50 to-blue-50 shrink-0">
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-2 ring-sky-200 shrink-0">
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                fill
                                className="object-cover"
                                sizes="36px"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) {
                                        parent.innerHTML = `
                                            <div class="w-full h-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                                </svg>
                                            </div>
                                        `;
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-900 leading-none">Aaristo</p>
                            <p className="text-[10px] text-sky-500 font-semibold tracking-widest uppercase mt-0.5">Consulting & Training</p>
                        </div>
                    </Link>

                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-sm text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                        aria-label="Close menu"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Drawer Nav Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
                    {navItems.map((item, i) => (
                        <div key={item.id}>
                            {item.hasDropdown ? (
                                <div>
                                    <button
                                        onClick={() =>
                                            setMobileDropdown(
                                                mobileDropdown === item.label ? null : item.label
                                            )
                                        }
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 text-sm"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={15}
                                            className={`text-sky-400 transition-transform duration-200 ${mobileDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Accordion sub-items */}
                                    <div
                                        className={`overflow-hidden transition-all duration-200 ${mobileDropdown === item.label
                                            ? 'max-h-60 opacity-100'
                                            : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="ml-3 border-l-2 border-sky-100 pl-3 mt-1 mb-2 space-y-0.5">
                                            {item.dropdownItems?.map((sub, j) => (
                                                <Link
                                                    key={j}
                                                    href={sub.href}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                                                >
                                                    <ChevronRight size={12} className="text-sky-300 shrink-0" />
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Drawer Footer / CTA */}
                <div className="shrink-0 px-5 py-5 border-t border-gray-100 space-y-3 bg-gray-50/60">
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold text-sm shadow-md shadow-sky-200 hover:from-sky-600 hover:to-blue-700 transition-all duration-200"
                    >
                        <Sparkles size={15} />
                        Book a Session
                    </Link>
                    <div className="flex items-center justify-center gap-5 pt-1">
                        <a
                            href="tel:+1234567890"
                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-sky-600 transition-colors"
                        >
                            <Phone size={13} />
                            Call Us
                        </a>
                        <span className="w-px h-4 bg-gray-200" />
                        <a
                            href="mailto:info@aaristo.com"
                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-sky-600 transition-colors"
                        >
                            <Mail size={13} />
                            Email Us
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}