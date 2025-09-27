import React from 'react';

const promises = [
    {
        title: 'Sorgfalt in jedem Paket',
        description:
            'Wir kuratieren unser Sortiment mit Blick auf Langlebigkeit, Design und praktische Nutzung. Nur Produkte, die überzeugen, schaffen es in den Shop.',
        icon: '🎯'
    },
    {
        title: 'Service mit persönlicher Note',
        description:
            'Sie erreichen uns schnell und unkompliziert. Bei Anliegen reagieren wir in der Regel innerhalb einer Stunde und finden eine Lösung, die passt.',
        icon: '🤝'
    },
    {
        title: 'Faire Konditionen',
        description:
            'Transparente Preise, zuverlässiger Versand und Käuferschutz über eBay – damit jede Bestellung ein gutes Gefühl hinterlässt.',
        icon: '🛡️'
    }
];

const testimonial = {
    quote:
        '„Superschneller Versand, top Qualität und ein wirklich freundlicher Kontakt. Ich bestelle jederzeit wieder bei Optispar!“',
    author: 'eBay Käuferbewertung (Mai 2024)'
};

const ValuesSection: React.FC = () => {
    return (
        <section id="values" className="section relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-10 top-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
            </div>
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-purple-300 text-sm font-semibold tracking-[0.3em] uppercase">Unser Versprechen</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Was Sie bei Optispar erwarten dürfen.</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Wir denken Versandhandel neu: persönlich, transparent und mit Fokus auf Produkte, die wirklich Freude machen.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {promises.map((promise) => (
                        <div key={promise.title} className="glass-effect rounded-2xl p-6 text-left">
                            <div className="text-3xl mb-4">{promise.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{promise.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">{promise.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 glass-effect rounded-3xl p-8 md:p-10">
                    <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">{testimonial.quote}</p>
                    <p className="mt-4 text-sm text-gray-400">{testimonial.author}</p>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
