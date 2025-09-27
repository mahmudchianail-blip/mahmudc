import React from 'react';

const services = [
    { title: "Sorgfältig ausgewählt", icon: "🎯", description: "Jedes Produkt wird auf Funktion, Design und Alltagstauglichkeit geprüft.", gradient: "from-blue-500 to-purple-500" },
    { title: "Bester Service", icon: "💬", description: "Wir antworten meist innerhalb einer Stunde auf Ihre Anliegen.", gradient: "from-green-500 to-blue-500" },
    { title: "Faire Preise", icon: "💰", description: "Wir versprechen Alltagserleichterung, Stil und faire Preise.", gradient: "from-orange-500 to-red-500" },
    { title: "Blitzversand", icon: "🚀", description: "Ihre Bestellung schnell und zuverlässig bei Ihnen.", gradient: "from-pink-500 to-purple-500" },
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
    <div className="glass-effect p-6 rounded-2xl text-center group transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer">
        <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
            <span className="text-3xl">{service.icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
    </div>
);

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="section">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-purple-400 mb-4 tracking-wider">WARUM OPTISPAR?</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ihr zuverlässiger Partner.</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Willkommen bei Optispar GbR, Ihrem zuverlässigen Partner für trendige Gadgets, praktisches Zubehör und nachhaltige Lifestyle-Produkte. 
                        Jedes Produkt wird sorgfältig geprüft, um Ihnen echten Mehrwert zu bieten.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;