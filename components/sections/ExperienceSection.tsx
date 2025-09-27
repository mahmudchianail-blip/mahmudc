import React from 'react';

const values = [
    {
        title: 'Sorgfältig ausgewählt',
        company: 'Qualität, auf die Sie sich verlassen können',
        description: 'Jedes Produkt in unserem Sortiment wird sorgfältig auf Funktion, Design und Alltagstauglichkeit geprüft – damit Sie stets echte Mehrwerte erhalten.',
        tags: ['Funktionalität', 'Design', 'Mehrwert'],
        color: 'text-purple-400'
    },
    {
        title: 'Bester Service',
        company: 'Ihre Zufriedenheit ist unser Antrieb',
        description: '„Blitz Versand! TOP Ware!“ – das sagen unsere Kunden. Wir sind stolz darauf, bei Fragen oder Anliegen meist innerhalb einer Stunde zu antworten und Ihnen zur Seite zu stehen.',
        tags: ['Schnelle Antwort', 'Kundenservice', 'Top-Bewertung'],
        color: 'text-orange-400'
    },
    {
        title: 'Ein Versprechen',
        company: 'Mehr als nur ein Sortiment',
        description: 'Unsere Auswahl ist ein Versprechen an Sie: auf Alltagserleichterung, Stilbewusstsein und faire Preise. Entdecken Sie Produkte, die Ihr Leben besser machen.',
        tags: ['Alltagserleichterung', 'Stil', 'Faire Preise'],
        color: 'text-green-400'
    }
];

const ValueCard: React.FC<{ value: (typeof values)[number] }> = ({ value }) => (
    <div className="relative pl-12 pb-8 border-l border-gray-700">
        <div className="absolute -left-[1.6rem] top-0 w-8 h-8 bg-purple-600 rounded-full border-4 border-[#050816] flex items-center justify-center">
            <span className="text-white text-sm">⭐</span>
        </div>
        <div className="glass-effect p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-1">{value.title}</h3>
            <p className={`${value.color} mb-2 font-semibold`}>{value.company}</p>
            <p className="text-gray-300 mb-4 text-base leading-relaxed">{value.description}</p>
            <div className="flex flex-wrap gap-2">
                {value.tags.map((tag) => (
                    <span key={tag} className="tech-badge px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-300">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const ValuesSection: React.FC = () => {
    return (
        <section id="values" className="section">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-purple-400 mb-4 tracking-wider">WAS UNS AUSMACHT</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Unser Versprechen.</h2>
                </div>
                <div>
                    {values.map((val, index) => (
                        <ValueCard key={index} value={val} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
