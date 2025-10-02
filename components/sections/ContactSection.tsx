import React, { useState } from 'react';

const contactMethods = [
    { label: 'E-Mail', value: 'Optispar@gmail.com', icon: '📧', hint: 'Wir melden uns werktags in unter einer Stunde.' },
    { label: 'Telefon', value: '+49 176 20729015', icon: '📞', hint: 'Mo–Fr, 9 – 18 Uhr' },
    { label: 'Standort', value: 'Wuppertal, Deutschland', icon: '📍', hint: 'Versand direkt aus NRW' }
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

        window.setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            window.setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="section relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute right-10 top-20 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />
            </div>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-purple-300 text-sm font-semibold tracking-[0.3em] uppercase">Kontakt</span>
                            <h2 className="text-3xl md:text-4xl font-bold">Wir sind nur eine Nachricht entfernt.</h2>
                            <p className="text-gray-300 leading-relaxed max-w-xl">
                                Haben Sie Fragen zu einem Produkt, einer Bestellung oder wünschen eine persönliche Beratung? Schreiben Sie uns – wir freuen uns, von Ihnen zu hören.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {contactMethods.map((method) => (
                                <div key={method.label} className="glass-effect rounded-2xl p-4 flex items-start gap-4">
                                    <div className="text-2xl">{method.icon}</div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wide text-purple-300">{method.label}</p>
                                        <p className="text-lg font-semibold text-white">{method.value}</p>
                                        <p className="text-sm text-gray-400">{method.hint}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href="https://www.ebay.de/str/optisparshop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-colors"
                        >
                            🛒 Zum eBay-Shop wechseln
                        </a>
                    </div>
                    <div className="glass-effect rounded-3xl p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="contact-input w-full rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/60"
                                        placeholder="Ihr Name"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm text-gray-300">
                                        E-Mail
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="contact-input w-full rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/60"
                                        placeholder="ihre.email@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm text-gray-300">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="contact-input w-full rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500/60"
                                    placeholder="Wie können wir helfen?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="submit-btn w-full rounded-xl py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Wird gesendet…' : 'Nachricht senden'}
                            </button>
                        </form>
                        {status === 'success' && (
                            <div className="mt-6 rounded-2xl bg-green-500/10 px-4 py-3 text-sm text-green-300">
                                Danke für Ihre Nachricht! Wir melden uns in Kürze.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
