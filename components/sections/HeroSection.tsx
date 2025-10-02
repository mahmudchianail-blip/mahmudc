import React, { useRef } from 'react';

const productImageUrl = 'https://i.ebayimg.com/images/g/jqwAAeSwr3BoxUBb/s-l1600.webp';

const highlights = [
    'Handverlesene Technik- und Lifestyle-Produkte',
    'Schneller Versand und persönlicher Support',
    'Faire Preise ohne Kompromisse bei der Qualität',
    'Sichere Zahlung über eBay mit Käuferschutz'
];

const stats = [
    { label: 'Zufriedene Kund:innen', value: '1.200+' },
    { label: 'Bewertungen mit 5 ★', value: '4.9 / 5' },
    { label: 'Produkte auf Lager', value: '60+' },
    { label: 'Versand innerhalb', value: '24h' }
];

const assuranceCards = [
    {
        title: 'Schnell bei Ihnen',
        description: 'Bestellungen, die bis 14 Uhr eingehen, verlassen in der Regel noch am selben Tag unser Lager.'
    },
    {
        title: 'Sorgfältig geprüft',
        description: 'Wir testen jedes Produkt persönlich, bevor es in unser Sortiment aufgenommen wird.'
    }
];

const HeroSection: React.FC = () => {
    const heroModelRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        if (!heroModelRef.current) return;
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 40;
        const yPos = (clientY / innerHeight - 0.5) * 40;
        heroModelRef.current.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        if (heroModelRef.current) {
            heroModelRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
        }
    };

    return (
        <section
            id="home"
            className="section relative overflow-hidden pt-32 pb-28"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-25%] right-[-10%] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-500/60 to-orange-400/40 blur-3xl opacity-70" />
                <div className="absolute -left-32 bottom-[-10%] w-[380px] h-[380px] rounded-full bg-purple-500/30 blur-3xl" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
            </div>
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] gap-16 items-center">
                <div className="space-y-10">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400" />
                        Neu kuratierte Fundstücke
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                            Smarte Essentials, die Ihren Alltag leichter machen.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                            Optispar bringt Technik, Zubehör und Lifestyle-Produkte zusammen, die wirklich halten, was sie versprechen – sorgfältig ausgewählt, fair bepreist und sofort lieferbar.
                        </p>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
                        {highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" aria-hidden="true" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://www.ebay.de/str/optisparshop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 hover:shadow-[0_20px_45px_rgba(145,94,255,0.35)] transition-all duration-300 text-center font-semibold"
                        >
                            Shop entdecken
                        </a>
                        <a
                            href="/shop#products"
                            className="px-8 py-3 rounded-full border border-white/20 text-center hover:bg-white/10 transition-colors duration-300 font-semibold"
                        >
                            Sortiment ansehen
                        </a>
                    </div>
                    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <dt className="text-sm text-gray-400">{stat.label}</dt>
                                <dd className="mt-1 text-2xl font-bold text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="space-y-6">
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-br from-purple-500/30 via-transparent to-orange-400/30" />
                        <div
                            ref={heroModelRef}
                            className="relative glass-effect rounded-3xl p-6 lg:p-10 transition-transform duration-200 ease-out min-h-[22rem] flex items-center justify-center"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <img
                                src={productImageUrl}
                                alt="Optispar Displayschutz mit Applikator"
                                className="w-full max-w-md object-contain drop-shadow-[0_35px_45px_rgba(145,94,255,0.35)]"
                                style={{ transform: 'translateZ(55px)' }}
                            />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {assuranceCards.map((card) => (
                            <div key={card.title} className="glass-effect rounded-2xl p-5">
                                <p className="text-sm text-purple-300 uppercase tracking-wide">{card.title}</p>
                                <p className="mt-2 text-sm text-gray-300 leading-relaxed">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
