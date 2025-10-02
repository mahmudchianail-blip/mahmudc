import React from 'react';

const pillars = [
    {
        title: 'Handverlesen & geprüft',
        description: 'Wir testen jedes Produkt persönlich und wählen nur Artikel aus, die wir selbst gern nutzen würden.',
        icon: '🧪',
        accent: 'from-purple-500/80 to-purple-400/40'
    },
    {
        title: 'Ehrliche Preise',
        description: 'Faire Konditionen ohne versteckte Kosten. Unsere Kund:innen zahlen nur für echte Qualität.',
        icon: '💶',
        accent: 'from-orange-500/80 to-orange-400/40'
    },
    {
        title: 'Sofort versandbereit',
        description: 'Bestellungen verlassen unser Lager blitzschnell – damit Ihre neuen Favoriten schnell ankommen.',
        icon: '🚀',
        accent: 'from-blue-500/80 to-sky-400/40'
    },
    {
        title: 'Support per Du',
        description: 'Kurze Wege, schnelle Antworten. Wir sind persönlich für Ihre Fragen da – meist innerhalb einer Stunde.',
        icon: '💬',
        accent: 'from-green-500/80 to-emerald-400/40'
    }
];

const coreValues = ['Nachhaltige Auswahl', 'Käuferschutz dank eBay', 'Über 1.200 positive Bewertungen'];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="section relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-40">
                <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/40 to-orange-400/40 blur-3xl" />
            </div>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] items-start">
                    <div className="space-y-6">
                        <span className="text-purple-300 text-sm font-semibold tracking-[0.3em] uppercase">Optispar in Kürze</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Warum Kund:innen uns ihr Vertrauen schenken.
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Optispar GbR steht für sorgsam ausgewählte Technik- und Lifestyle-Produkte, die halten, was sie versprechen. Wir kombinieren ein modernes Sortiment mit persönlichem Service und liefern Inspiration für Ihren Alltag.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {coreValues.map((value) => (
                                <span key={value} className="glass-effect rounded-full px-4 py-2 text-sm text-gray-200">
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {pillars.map((pillar) => (
                            <div key={pillar.title} className="group relative overflow-hidden rounded-2xl border border-white/10 p-6">
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${pillar.accent}`} aria-hidden="true" />
                                <div className="relative space-y-4">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">{pillar.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
