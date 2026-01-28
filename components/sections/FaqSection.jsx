import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
    const { t } = useTranslation();
    const faqs = [
        { q: "How long does device integration take?", a: "For most OEM partners, we can complete mechanical and firmware integration within 4-6 weeks. API integration can be done in days." },
        { q: "Does the tracker require external power?", a: "No. While it can tap into the e-bike battery for indefinite runtime, it has an internal backup battery lasting up to 5 years in standby." },
        { q: "What countries do you support?", a: "We support over 190 countries via LTE-M and NB-IoT roaming agreements." },
        { q: "Can I use my own fleet software?", a: "Yes. Our REST API is designed to feed data directly into your existing ERP or Fleet Management Systems." },
        { q: "Is the data GDPR compliant?", a: "ABSOLUTELY. All data is stored in EU-based servers with AES-256 encryption. We are fully GDPR and CCPA compliant." },
        { q: "Do you offer physical recovery services?", a: "Yes. We have a network of specialized recovery agents in major European and US cities." }
    ];

    return (
        <section className="section" style={{ background: '#020305' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title">{t('faq.title')}</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqs.map((faq, i) => (
                        <FaqItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '24px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <span style={{ fontSize: '1.2rem', fontWeight: '500', color: 'white' }}>{question}</span>
                {isOpen ? <Minus size={20} color="var(--color-primary)" /> : <Plus size={20} color="var(--color-primary)" />}
            </button>

            <div style={{
                height: isOpen ? 'auto' : '0',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                opacity: isOpen ? 1 : 0,
                paddingBottom: isOpen ? '24px' : '0'
            }}>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{answer}</p>
            </div>
        </div>
    );
};

export default FaqSection;
