import React from 'react';

const productCategories = [
    {
        category: "Schutz & Hüllen",
        items: [
            {
                id: 1,
                name: "Premium Displayschutz mit Applikator",
                description: "Kristallklarer Schutz für Ihr Smartphone-Display. Einfache, blasenfreie Anbringung dank mitgeliefertem Applikator.",
                price: "14,99 €",
                imageUrl: "https://i.ebayimg.com/images/g/jqwAAeSwr3BoxUBb/s-l1600.webp",
                ebayUrl: "https://www.ebay.de/str/optisparshop"
            },
            {
                id: 2,
                name: "Ultradünne Silikon-Schutzhülle",
                description: "Flexibler und robuster Schutz, der das schlanke Design Ihres Handys bewahrt. Rutschfest und angenehm in der Hand.",
                price: "9,99 €",
                imageUrl: "https://i.ebayimg.com/images/g/0~MAAOSwJjJhU7q5/s-l1600.jpg",
                ebayUrl: "https://www.ebay.de/str/optisparshop"
            },
            {
                id: 5,
                name: "Kamera-Linsenschutz aus gehärtetem Glas",
                description: "Schützen Sie Ihre Kameralinsen vor Kratzern und Stößen, ohne die Fotoqualität zu beeinträchtigen. 2er-Pack.",
                price: "8,99 €",
                imageUrl: "https://i.ebayimg.com/images/g/4~AAAOSw~5VjA-eP/s-l1600.jpg",
                ebayUrl: "https://www.ebay.de/str/optisparshop"
            }
        ]
    },
    {
        category: "Energie & Audio",
        items: [
             {
                id: 3,
                name: "Kompakte Powerbank 10.000mAh",
                description: "Laden Sie Ihre Geräte unterwegs schnell und sicher auf. Kompaktes Design, passt in jede Tasche.",
                price: "24,99 €",
                imageUrl: "https://i.ebayimg.com/images/g/r0gAAOSw3vliY72c/s-l1600.jpg",
                ebayUrl: "https://www.ebay.de/str/optisparshop"
            },
            {
                id: 4,
                name: "True Wireless Bluetooth Kopfhörer",
                description: "Genießen Sie kabellose Freiheit mit kristallklarem Sound und langer Akkulaufzeit. Inklusive Ladecase.",
                price: "39,99 €",
                imageUrl: "https://i.ebayimg.com/images/g/d8AAAOSwY~VjA-eS/s-l1600.jpg",
                ebayUrl: "https://www.ebay.de/str/optisparshop"
            },
            {
                id: 6,
                name: "USB-C Schnellladekabel (2m)",
                description: "Robustes, nylonummanteltes Ladekabel für schnelles Aufladen und zuverlässige Datenübertragung. Mit Knickschutz.",
                price: "12,99 €",
                imageUrl: "https://i.ebayimg.com/images/g/sJIAAOSw7kpiY72d/s-l1600.jpg",
                ebayUrl: "https://www.ebay.de/str/optisparshop"
            }
        ]
    },
    {
        category: "Gadgets & Zubehör",
        items: [
            {
                id: 7,
                name: "Magnetische Autohalterung für Lüftungsschlitz",
                description: "Starker Halt für Ihr Smartphone während der Fahrt. Einfache Installation und 360-Grad-Drehung für optimale Sicht.",
                price: "15,99 €",
                imageUrl: "https://i.ebayimg.com/images/g/w0sAAOSw~-hjA-eQ/s-l1600.jpg",
                ebayUrl: "https://www.ebay.de/str/optisparshop"
            },
            {
                id: 8,
                name: "Ergonomischer Laptop-Ständer, verstellbar",
                description: "Verbessern Sie Ihre Haltung und kühlen Sie Ihr Gerät mit diesem leichten und faltbaren Aluminium-Ständer.",
                price: "29,99 €",
                imageUrl: "https://i.ebayimg.com/images/g/vGMAAOSwQ-JjA-eT/s-l1600.jpg",
                ebayUrl: "https://www.ebay.de/str/optisparshop"
            }
        ]
    }
];

const ProductCard: React.FC<{ product: typeof productCategories[0]['items'][0] }> = ({ product }) => (
    <div className="glass-effect rounded-2xl p-5 flex flex-col h-full group overflow-hidden">
        <div className="relative w-full h-56 bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-auto h-auto max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>
            <div className="flex justify-between items-center mt-auto">
                <p className="text-2xl font-bold gradient-text">{product.price}</p>
                <a 
                    href={product.ebayUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center text-sm font-semibold"
                >
                    Auf eBay ansehen
                </a>
            </div>
        </div>
    </div>
);


const ProductsSection: React.FC = () => {
    return (
        <section id="products" className="section pt-32 md:pt-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-purple-400 mb-4 tracking-wider">UNSER SORTIMENT</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Willkommen im Shop.</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Wir bieten eine sorgfältig kuratierte Auswahl an Gadgets und Zubehör, die Ihren Alltag bereichern.
                    </p>
                </div>
                <div className="space-y-16">
                    {productCategories.map(({ category, items }) => (
                        <div key={category}>
                            <h3 className="text-3xl font-bold mb-8 text-white border-l-4 border-purple-500 pl-4">
                                {category}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {items.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;