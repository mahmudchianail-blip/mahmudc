import React, { useState, useEffect, useRef } from 'react';

const roles = ['Trendige Gadgets', 'Praktisches Zubehör', 'Lifestyle-Produkte'];

// FIX: Replaced the product image with a version that has a transparent background for better visual integration.
const productImageUrl = 'https://i.ebayimg.com/images/g/jqwAAeSwr3BoxUBb/s-l1600.webp';

const HeroSection: React.FC = () => {
    const [currentRole, setCurrentRole] = useState(roles[0]);
    const heroModelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: number;

        const type = () => {
            const currentText = roles[roleIndex];
            if (isDeleting) {
                setCurrentRole(currentText.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setCurrentRole(currentText.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                timeoutId = window.setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                timeoutId = window.setTimeout(type, 500);
            } else {
                timeoutId = window.setTimeout(type, isDeleting ? 75 : 150);
            }
        };

        timeoutId = window.setTimeout(type, 1000);
        return () => window.clearTimeout(timeoutId);
    }, []);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        if (!heroModelRef.current) return;
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 40;
        const yPos = (clientY / innerHeight - 0.5) * 40;
        heroModelRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg) scale(1.1)`;
    };

    const handleMouseLeave = () => {
        if (heroModelRef.current) {
            heroModelRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
        }
    };

    return (
        <section
            id="home"
            className="section relative w-full h-screen mx-auto flex items-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-5 h-5 rounded-full bg-purple-500"></div>
                        <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-purple-500 to-transparent"></div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-4">
                        Willkommen bei <span className="gradient-text">Optispar</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-300 mb-6 h-10">
                        {currentRole}
                        <span className="animate-ping">|</span>
                    </p>
                    <p className="text-lg text-gray-300 mb-8 max-w-lg">
                        Ihr zuverlässiger Partner für sorgfältig ausgewählte Produkte, die Ihren Alltag erleichtern und bereichern.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://www.ebay.de/str/optisparshop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
                        >
                            Zum eBay Shop
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 text-center"
                        >
                            Kontakt
                        </a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div
                        ref={heroModelRef}
                        className="relative w-full h-96 transition-transform duration-200 ease-out"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-full opacity-20 bg-[radial-gradient(circle_at_center,_rgba(145,94,255,0.45),_transparent_65%)]"></div>
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={productImageUrl}
                                alt="Optispar Displayschutz mit Applikator"
                                className="w-auto h-auto max-w-xl max-h-96 object-contain animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_25px_25px_rgba(145,94,255,0.25)]"
                                style={{ transform: 'translateZ(50px)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
