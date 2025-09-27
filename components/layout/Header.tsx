import React, { useState, useEffect } from 'react';

const navLinks = [
    { id: 'home', title: 'Home', href: '/' },
    { id: 'products', title: 'Shop', href: '/shop' }
];

interface HeaderProps {
    navigate: (href: string) => void;
    pathname: string;
}

const Header: React.FC<HeaderProps> = ({ navigate, pathname }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Abgeleiteter Zustand: Bestimmt den aktiven Link basierend auf dem Prop
    const activeId = pathname.startsWith('/shop') ? 'products' : 'home';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialer Check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();

        if (href === `${window.location.pathname}${window.location.hash}`) {
            setMenuOpen(false);
            return;
        }

        navigate(href);
        setMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
                scrolled ? 'glass-effect' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center relative">
                <a href="/" onClick={(event) => handleLinkClick(event, '/')} className="flex items-center gap-2 cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center font-bold text-lg">
                        O
                    </div>
                    <span className="text-xl font-bold">Optispar</span>
                </a>

                <div className="hidden md:flex gap-8 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(event) => handleLinkClick(event, link.href)}
                            className={`relative font-medium transition-colors duration-300 ${
                                activeId === link.id ? 'text-white' : 'text-gray-400'
                            } hover:text-white`}
                        >
                            {link.title}
                            {activeId === link.id && <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-purple-500" />}
                        </a>
                    ))}
                </div>

                <button onClick={() => setMenuOpen((prev) => !prev)} className="md:hidden z-50" aria-label="Navigation umschalten">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        ></path>
                    </svg>
                </button>
            </div>

            <div
                className={`md:hidden fixed top-0 right-0 w-2/3 h-full glass-effect p-6 transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col gap-6 mt-20">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(event) => handleLinkClick(event, link.href)}
                            className={`text-lg ${activeId === link.id ? 'text-purple-400' : 'text-white'}`}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;
