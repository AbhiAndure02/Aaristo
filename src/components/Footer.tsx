import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

interface Services {
    name: string;
    href: string;
}

interface CompanyLink {
    name: string;
    href: string;
}
interface LegalLink {
    name: string;
    href: string;
}
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const services: Services[] = [
        { name: 'Image Management', href: '/services/image-management' },
        { name: 'Life Coaching', href: '/services/life-coaching' },
        { name: 'Past Life Regression', href: '/services/past-life-regression' },
        { name: 'Spiritual Upliftment', href: '/services/spiritual-upliftment' }
    ];

    const companyLinks: CompanyLink[] = [
        { name: 'About Us', href: '/about' },
        { name: 'Workshops', href: '/workshops' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact', href: '/contact' }
    ];

    const legalLinks: LegalLink[] = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Disclaimer', href: '/disclaimer' }
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand with Logo */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative h-32 w-32">
                                <Image
                                    src="/logo.jpg"
                                    alt="Aaristo Consulting & Training"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 128px) 100vw, 128px"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-600 mb-6 text-sm">
                            Transforming lives through mind, body, and soul balance since 2012.
                        </p>
                        <p className="flex items-center text-gray-500 text-sm">
                            <Heart size={14} className="mr-2 text-sky-500" />
                            Always be in your best version
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-600 hover:text-sky-600 text-sm transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-sky-600 text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin size={16} className="text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                                <address className="text-gray-600 text-sm not-italic">
                                    B4, Emirates Hills, Somatne,<br />
                                    Talegaon Dabhade, Mawal<br />
                                    Old Mumbai Pune Highway,<br />
                                    Pune - 410506, Maharashtra
                                </address>
                            </div>
                            <div className="flex items-center">
                                <Phone size={16} className="text-gray-400 mr-2 flex-shrink-0" />
                                <a
                                    href="tel:+919823064999"
                                    className="text-gray-600 text-sm hover:text-sky-600 transition-colors"
                                >
                                    +91 98230 64999
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail size={16} className="text-gray-400 mr-2 flex-shrink-0" />
                                <a
                                    href="mailto:monica@aaristo.com"
                                    className="text-gray-600 text-sm hover:text-sky-600 transition-colors"
                                >
                                    monica@aaristo.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-500 hover:text-sky-600 text-sm transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Aaristo Consulting & Training. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}