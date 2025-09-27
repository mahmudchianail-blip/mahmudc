import React from 'react';

const ImprintSection: React.FC = () => {
    return (
        <section id="imprint" className="section">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-purple-400 mb-4 tracking-wider">RECHTLICHE ANGABEN</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Impressum.</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Angaben gemäß § 5 TMG und unternehmerische Informationen.
                    </p>
                </div>

                <div className="glass-effect rounded-2xl p-8 space-y-6 text-gray-300">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Unternehmensname</h3>
                        <p>Optispar GbR</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Geschäftsführung</h3>
                        <p>Mahmud Chia Nail, Rajab Alhaj</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Adresse</h3>
                        <p>Wiesenstr. 48, 42105, Wuppertal, Germany</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Kontakt</h3>
                        <p><strong>Telefon:</strong> +49 17620729015</p>
                        <p><strong>E-Mail:</strong> Optispar@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Umsatzsteuer-Identifikationsnummer</h3>
                        <p>USt-IdNr. DE 450378963</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Wichtiger Hinweis</h3>
                        <p>Wir arbeiten nach der Kleinunternehmerregelung (§ 19 UStG). Die Umsatzsteuer wird auf der Rechnung mit 0 % ausgewiesen.</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Verkäuferprofil</h3>
                        <p>
                            <a href="https://www.ebay.de/str/optisparshop" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white transition-colors">
                                optispar-shop auf eBay
                            </a>
                            <span className="ml-2 text-sm bg-green-500/20 text-green-300 px-2 py-1 rounded">Verkäufer mit Top-Bewertung</span>
                        </p>
                        <p className="mt-1 text-sm">Bietet stets einen hervorragenden Kundenservice.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImprintSection;