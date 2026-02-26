'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type NavItem = {
    id: number;
    label: string;
    href?: string;
    dropdownOnly?: boolean;
    hasDropdown?: boolean;
    dropdownItems?: { label: string; href: string }[];
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();
    const isHome = pathname === '/';
    const isTransparent = isHome && !scrolled;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Lock body scroll when drawer open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    // Close drawer on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setMobileDropdown(null);
    }, [pathname]);

    const navItems: NavItem[] = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'About Us', href: '/about' },
        {
            id: 3,
            label: 'Services',
            dropdownOnly: true,   // ← clicking label opens dropdown only, no /services navigation
            hasDropdown: true,
            dropdownItems: [
                { label: 'Image Management', href: '/services/image-management' },
                { label: 'Life Coaching', href: '/services/life-coaching' },
                { label: 'Past Life Regression', href: '/services/past-life-regression' },
                { label: 'Spiritual Upliftment', href: '/services/spiritual-upliftment' },
            ],
        },
        { id: 4, label: 'Workshops', href: '/workshops' },
        { id: 5, label: 'Testimonials', href: '/testimonials' },
        { id: 6, label: 'Gallery', href: '/gallery' },
    ];

    const desktopLinkCls = isTransparent
        ? 'text-white/90 hover:text-white hover:bg-white/15'
        : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50';

    return (
        <>
            {/* ══════════════════════════════════════
                HEADER BAR
            ══════════════════════════════════════ */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-5 ${isTransparent
                    ? 'bg-transparent'
                    : scrolled
                        ? 'bg-white shadow-md shadow-sky-100/60'
                        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
                    }`}
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-[70px] lg:h-20">

                        {/* ── Logo ── */}
                        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                            <div className={`relative w-12 h-12 sm:w-10 sm:h-10 overflow-hidden shadow-sm ring-1 transition-all duration-200 shrink-0 ${isTransparent
                                ? 'ring-white/40 group-hover:ring-white/70'
                                : 'ring-sky-100 group-hover:ring-sky-300'
                                }`}>
                                <Image
                                    src="/logo.jpg"
                                    alt="Aaristo Consulting & Training"
                                    fill
                                    className="object-cover"
                                    sizes="60px"
                                    priority
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const p = e.currentTarget.parentElement;
                                        if (p) p.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></div>`;
                                    }}
                                />
                            </div>
                            <div>
                                <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold leading-none tracking-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Aaristo
                                </h1>
                                <p className={`text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.15em] uppercase mt-0.5 transition-colors duration-300 ${isTransparent ? 'text-white/60' : 'text-sky-500'
                                    }`}>
                                    Consulting & Training
                                </p>
                            </div>
                        </Link>

                        {/* ── Desktop Navigation ── */}
                        <nav ref={dropdownRef} className="hidden lg:flex items-center gap-0.5 xl:gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {/* Services → button only, no href navigation */}
                                    {item.dropdownOnly ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveDropdown(
                                                    activeDropdown === item.label ? null : item.label
                                                )
                                            }
                                            className={`flex items-center gap-1 font-medium px-3 py-2 rounded-lg transition-all duration-200 text-sm ${desktopLinkCls}`}
                                            aria-haspopup="true"
                                            aria-expanded={activeDropdown === item.label}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={13}
                                                className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href!}
                                            className={`flex items-center gap-1 font-medium px-3 py-2 rounded-lg transition-all duration-200 text-sm ${desktopLinkCls}`}
                                        >
                                            {item.label}
                                        </Link>
                                    )}

                                    {/* Dropdown panel */}
                                    {item.hasDropdown && (
                                        <div
                                            className={`absolute top-full left-0 mt-1.5 bg-white rounded-xl shadow-xl shadow-sky-100/50 border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === item.label
                                                ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                                                : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                                                }`}
                                            style={{ minWidth: '210px' }}
                                        >
                                            {item.dropdownItems?.map((sub, i) => (
                                                <Link
                                                    key={i}
                                                    href={sub.href}
                                                    onClick={() => setActiveDropdown(null)}
                                                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-colors group/sub"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover/sub:bg-sky-500 transition-colors shrink-0" />
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* ── Desktop CTA ── */}
                        <div className="hidden lg:flex items-center shrink-0">
                            <Link
                                href="/contact"
                                className={`flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap ${isTransparent
                                    ? 'bg-white text-sky-600 shadow-md shadow-black/10 hover:bg-sky-50'
                                    : 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-200 hover:from-sky-600 hover:to-blue-700 hover:shadow-sky-300'
                                    }`}
                            >
                                <Sparkles size={14} />
                                Book Session
                            </Link>
                        </div>

                        {/* ── Mobile Hamburger ── */}
                        <button
                            type="button"
                            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 shrink-0 ${isTransparent
                                ? 'text-white hover:bg-white/15'
                                : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                                }`}
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open navigation menu"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ══════════════════════════════════════
                MOBILE DRAWER
            ══════════════════════════════════════ */}

            {/* Backdrop */}
            <div
                aria-hidden="true"
                className={`fixed inset-0 z-[60] bg-gray-900/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className={`fixed top-0 right-0 z-[70] h-full w-[min(300px,85vw)] sm:w-[340px] bg-white shadow-2xl shadow-gray-900/20 flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-4 sm:py-5 border-b border-gray-100 bg-gradient-to-r from-sky-50 to-blue-50 shrink-0">
                    <Link
                        href="/"
                        className="flex items-center gap-2.5"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-2 ring-sky-200 shrink-0">
                            <Image
                                src="/logo.jpg"
                                alt="Aaristo logo"
                                fill
                                className="object-cover"
                                sizes="36px"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const p = e.currentTarget.parentElement;
                                    if (p) p.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg></div>`;
                                }}
                            />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900 leading-none">Aaristo</p>
                            <p className="text-[10px] text-sky-500 font-semibold tracking-widest uppercase mt-0.5">
                                Consulting & Training
                            </p>
                        </div>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-sm text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                        aria-label="Close menu"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Drawer nav */}
                <nav className="flex-1 overflow-y-auto px-3 sm:px-4 py-4 space-y-0.5">
                    {navItems.map((item) => (
                        <div key={item.id}>
                            {item.hasDropdown ? (
                                <>
                                    {/* Services: button only, accordion toggle */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMobileDropdown(
                                                mobileDropdown === item.label ? null : item.label
                                            )
                                        }
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 text-sm"
                                        aria-expanded={mobileDropdown === item.label}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={15}
                                            className={`text-sky-400 transition-transform duration-200 ${mobileDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Accordion content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-200 ${mobileDropdown === item.label
                                            ? 'max-h-72 opacity-100'
                                            : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="ml-3 border-l-2 border-sky-100 pl-3 py-1.5 space-y-0.5">
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
                                </>
                            ) : (
                                <Link
                                    href={item.href!}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Drawer footer */}
                <div className="shrink-0 px-4 sm:px-5 py-4 sm:py-5 border-t border-gray-100 space-y-3 bg-gray-50/60">
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-bold text-sm shadow-md shadow-sky-200 hover:from-sky-600 hover:to-blue-700 transition-all duration-200"
                    >
                        <Sparkles size={15} />
                        Book a Session
                    </Link>

                    <div className="flex items-center justify-center gap-5">
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