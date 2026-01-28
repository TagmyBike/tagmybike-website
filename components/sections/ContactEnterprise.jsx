import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactEnterprise = () => {
    const { i18n } = useTranslation();
    const isGerman = i18n.language === 'de';

    const content = {
        en: {
            title: "Ready to Get Started?",
            subtitle: "Interested in integrating smart tracking into your products? Reach out to our team directly.",
            emailCta: "Send us an Email",
            phoneCta: "Call us"
        },
        de: {
            title: "Bereit loszulegen?",
            subtitle: "Interesse an der Integration von Smart Tracking in Ihre Produkte? Kontaktieren Sie unser Team direkt.",
            emailCta: "E-Mail schreiben",
            phoneCta: "Anrufen"
        }
    };

    const l = content[i18n.language] || content.en;

    return (
        <section id="contact" className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="glass-panel" style={{
                    padding: '60px 40px',
                    borderRadius: '24px',
                    maxWidth: '700px',
                    margin: '0 auto',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    textAlign: 'center'
                }}>
                    {/* Header */}
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        marginBottom: '16px',
                        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        {l.title}
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        maxWidth: '500px',
                        margin: '0 auto 40px',
                        fontSize: '1.1rem',
                        lineHeight: 1.6
                    }}>
                        {l.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        alignItems: 'center',
                        marginBottom: '40px'
                    }}>
                        <a
                            href="mailto:business@tagmybike.com"
                            className="btn-primary btn-glow"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '16px 32px',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                width: 'fit-content'
                            }}
                        >
                            <Mail size={20} />
                            {l.emailCta}
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="tel:+4915114087414"
                            className="btn-outline"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 28px',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                width: 'fit-content'
                            }}
                        >
                            <Phone size={18} />
                            {l.phoneCta}
                        </a>
                    </div>

                    {/* Contact Info Display */}
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '30px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Mail size={18} style={{ color: 'var(--color-primary)' }} />
                            <a
                                href="mailto:business@tagmybike.com"
                                style={{
                                    color: 'rgba(255,255,255,0.7)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                            >
                                business@tagmybike.com
                            </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Phone size={18} style={{ color: 'var(--color-primary)' }} />
                            <a
                                href="tel:+4915114087414"
                                style={{
                                    color: 'rgba(255,255,255,0.7)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                            >
                                +49 1511 4087414
                            </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
                            <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                                Mülheim an der Ruhr, {isGerman ? 'Deutschland' : 'Germany'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactEnterprise;
