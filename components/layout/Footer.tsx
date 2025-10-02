import React from 'react';

const footerLinks = [
    { label: 'Über uns', href: '/#about' },
    { label: 'Sortiment', href: '/shop#products' },
    { label: 'Kontakt', href: '/#contact' },
    { label: 'Impressum', href: '/#imprint' }
];

const Footer: React.FC = () => {
    return (
        <footer className="glass-effect mt-20 py-10 text-sm">
            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-white font-semibold text-lg">Optispar GbR</p>
                    <p className="text-gray-400">Smarte Essentials & persönlicher Service seit 2021.</p>
                </div>
                <nav className="flex flex-wrap gap-4 text-gray-300">
                    {footerLinks.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <p className="text-gray-500">© {new Date().getFullYear()} Optispar GbR. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
};

export default Footer;
