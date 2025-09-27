import React, { useState } from 'react';

const contactDetails = [
    { type: 'Email', value: 'Optispar@gmail.com', icon: '📧', color: 'bg-purple-500' },
    { type: 'Standort', value: 'Wuppertal, Deutschland', icon: '📍', color: 'bg-orange-500' },
    { type: 'Antwortzeit', value: 'Innerhalb 1 Stunde', icon: '💬', color: 'bg-green-500' }
];

const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setStatus('sending');
        // Simulate form submission
        window.setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            window.setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="section">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        <p className="text-purple-400 mb-4 tracking-wider">KONTAKT AUFNEHMEN</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Haben Sie Fragen?</h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Haben Sie eine Frage zu einem Produkt oder Ihrer Bestellung? Schreiben Sie uns eine Nachricht und wir melden uns so schnell wie möglich bei Ihnen!
                        </p>
                        <div className="space-y-4 mb-8">
                            {contactDetails.map((detail) => (
                                <div key={detail.type} className="flex items-center gap-4">
                                    <div className={`w-12 h-12 ${detail.color} bg-opacity-20 rounded-full flex items-center justify-center`}>
                                        <span className="text-xl">{detail.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">{detail.type}</p>
                                        <p className="text-white font-medium">{detail.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://www.ebay.de/str/optisparshop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 text-2xl"
                                aria-label="eBay Shop besuchen"
                            >
                                🛒
                            </a>
                            <p className="self-center text-gray-300">Besuchen Sie unseren Shop auf eBay</p>
                        </div>
                    </div>

                    <div className="glass-effect p-8 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="contact-input w-full px-4 py-3 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                                    placeholder="Ihr Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="contact-input w-full px-4 py-3 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                                    placeholder="ihre.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="contact-input w-full px-4 py-3 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                                    placeholder="Ihre Frage oder Ihr Anliegen..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="submit-btn w-full py-3 rounded-lg font-bold text-white disabled:opacity-50"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Senden...' : 'Nachricht senden'}
                            </button>
                        </form>
                        {status === 'success' && <div className="mt-4 text-center text-green-400">Nachricht erfolgreich gesendet! ✅</div>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
