import React from 'react';

const productCategories = [
    {
        category: 'Schutz & Hüllen',
        summary: 'Für Smartphones, die jeden Tag mit Ihnen unterwegs sind – robust, glasklar und stilvoll.',
        items: [
            {
                id: 1,
                name: 'Premium Displayschutz mit Applikator',
                description: 'Kristallklarer Schutz für Ihr Smartphone-Display. Einfache, blasenfreie Anbringung dank mitgeliefertem Applikator.',
                price: '14,99 €',
                imageUrl: 'https://i.ebayimg.com/images/g/jqwAAeSwr3BoxUBb/s-l1600.webp',
                ebayUrl: 'https://www.ebay.de/str/optisparshop'
            },
            {
                id: 2,
                name: 'Ultradünne Silikon-Schutzhülle',
                description: 'Flexibler Schutz, der das schlanke Design Ihres Handys bewahrt. Rutschfest und angenehm in der Hand.',
                price: '9,99 €',
                imageUrl: 'https://i.ebayimg.com/images/g/0~MAAOSwJjJhU7q5/s-l1600.jpg',
                ebayUrl: 'https://www.ebay.de/str/optisparshop'
            },
            {
                id: 5,
                name: 'Kamera-Linsenschutz aus gehärtetem Glas',
                description: 'Schützen Sie Ihre Kameralinsen vor Kratzern und Stößen, ohne die Fotoqualität zu beeinträchtigen. 2er-Pack.',
                price: '8,99 €',
                imageUrl: 'https://i.ebayimg.com/images/g/4~AAAOSw~5VjA-eP/s-l1600.jpg',
                ebayUrl: 'https://www.ebay.de/str/optisparshop'
            }
        ]
    },
    {
        category: 'Energie & Audio',
        summary: 'Power für unterwegs und klarer Sound – kabellos, kompakt und jederzeit griffbereit.',
        items: [
            {
                id: 3,
                name: 'Kompakte Powerbank 10.000mAh',
                description: 'Laden Sie Ihre Geräte unterwegs schnell auf. Kompaktes Design, passt in jede Tasche.',
                price: '24,99 €',
                imageUrl: 'https://i.ebayimg.com/images/g/r0gAAOSw3vliY72c/s-l1600.jpg',
                ebayUrl: 'https://www.ebay.de/str/optisparshop'
            },
            {
                id: 4,
                name: 'True Wireless Bluetooth Kopfhörer',
                description: 'Kabellose Freiheit mit kristallklarem Sound und langer Akkulaufzeit. Inklusive Ladecase.',
                price: '39,99 €',
                imageUrl: 'https://i.ebayimg.com/images/g/d8AAAOSwY~VjA-eS/s-l1600.jpg',
                ebayUrl: 'https://www.ebay.de/str/optisparshop'
            },
            {
                id: 6,
                name: 'USB-C Schnellladekabel (2m)',
                description: 'Robustes, nylonummanteltes Ladekabel für schnelles Aufladen und zuverlässige Datenübertragung mit Knickschutz.',
                price: '12,99 €',
                imageUrl: 'https://i.ebayimg.com/images/g/sJIAAOSw7kpiY72d/s-l1600.jpg',
                ebayUrl: 'https://www.ebay.de/str/optisparshop'
            }
        ]
    },
    {
        category: 'Gadgets & Zubehör',
        summary: 'Praktische Begleiter für Arbeit, Reise und Alltag – smart, flexibel und hochwertig verarbeitet.',
        items: [
            {
                id: 7,
                name: 'Magnetische Autohalterung für Lüftungsschlitz',
                description: 'Starker Halt für Ihr Smartphone während der Fahrt. Einfache Installation und 360°-Drehung für optimale Sicht.',
                price: '15,99 €',
                imageUrl: 'https://i.ebayimg.com/images/g/w0sAAOSw~-hjA-eQ/s-l1600.jpg',
                ebayUrl: 'https://www.ebay.de/str/optisparshop'
            },
            {
                id: 8,
                name: 'Ergonomischer Laptop-Ständer, verstellbar',
                description: 'Verbessern Sie Ihre Haltung und kühlen Sie Ihr Gerät mit diesem leichten und faltbaren Aluminium-Ständer.',
                price: '29,99 €',
                imageUrl: 'https://i.ebayimg.com/images/g/vGMAAOSwQ-JjA-eT/s-l1600.jpg',
                ebayUrl: 'https://www.ebay.de/str/optisparshop'
            }
        ]
    }
];

const ProductCard: React.FC<{ product: (typeof productCategories)[number]['items'][number] }> = ({ product }) => (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <div className="relative mb-4 flex items-center justify-center rounded-xl bg-black/30 p-6">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="h-40 w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
        </div>
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white leading-tight">{product.name}</h3>
                <span className="rounded-full bg-gradient-to-r from-purple-600 to-orange-500 px-3 py-1 text-xs font-semibold">
                    {product.price}
                </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed flex-1">{product.description}</p>
            <a
                href={product.ebayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
            >
                Zum Produkt
                <span aria-hidden="true">→</span>
            </a>
        </div>
    </article>
);

const ProductsSection: React.FC = () => {
    return (
        <section id="products" className="section pt-32 md:pt-40">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <span className="text-purple-300 text-sm font-semibold tracking-[0.3em] uppercase">Unser Sortiment</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Kuratierte Highlights aus dem Optispar Shop.</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Entdecken Sie unsere Bestseller – von Displayschutz über Audio bis zu smarten Alltagshelfern. Alle Produkte sind sofort verfügbar und werden sicher über eBay verschickt.
                    </p>
                </div>
                <div className="mt-14 space-y-16">
                    {productCategories.map(({ category, summary, items }) => (
                        <div key={category} className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">{category}</h3>
                                    <p className="mt-2 text-sm text-gray-400 max-w-2xl">{summary}</p>
                                </div>
                                <a
                                    href="https://www.ebay.de/str/optisparshop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
                                >
                                    Alle Artikel ansehen
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((product) => (
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
