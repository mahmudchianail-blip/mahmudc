import React from 'react';

const imprintDetails = [
    {
        heading: 'Unternehmen',
        entries: ['Optispar GbR', 'Mahmud Chia Nail, Rajab Alhaj']
    },
    {
        heading: 'Adresse',
        entries: ['Wiesenstr. 48', '42105 Wuppertal', 'Deutschland']
    },
    {
        heading: 'Kontakt',
        entries: ['Telefon: +49 176 20729015', 'E-Mail: Optispar@gmail.com']
    },
    {
        heading: 'Steuernummer',
        entries: ['USt-IdNr. DE 450378963', 'Kleinunternehmerregelung (§ 19 UStG) – Ausweis der Umsatzsteuer mit 0 %']
    }
];

const ImprintSection: React.FC = () => {
    return (
        <section id="imprint" className="section relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-purple-500/30 blur-3xl" />
            </div>
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center space-y-4 mb-12">
                    <span className="text-purple-300 text-sm font-semibold tracking-[0.3em] uppercase">Rechtliches</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Impressum & Verkäuferprofil.</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Gesetzliche Angaben nach § 5 TMG sowie Informationen zu unserem Auftritt auf eBay.
                    </p>
                </div>
                <div className="glass-effect rounded-3xl p-8 md:p-10 space-y-8 text-gray-200">
                    <div className="grid gap-6 md:grid-cols-2">
                        {imprintDetails.map((section) => (
                            <div key={section.heading}>
                                <h3 className="text-lg font-semibold text-white">{section.heading}</h3>
                                <ul className="mt-3 space-y-1 text-sm text-gray-300">
                                    {section.entries.map((entry) => (
                                        <li key={entry}>{entry}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-white/10 p-6">
                        <p className="text-sm text-gray-300">
                            eBay-Shop:
                            <a
                                href="https://www.ebay.de/str/optisparshop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-purple-300 hover:text-white transition-colors"
                            >
                                optispar-shop
                            </a>
                        </p>
                        <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
                            Verkäufer mit Top-Bewertung · Exzellenter Kundenservice
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImprintSection;
