import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactEnterprise = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section section-glow-accent">
            <div className="container">
                <div className="glass-panel" style={{
                    padding: '64px 48px', borderRadius: '20px', maxWidth: '680px', margin: '0 auto',
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', marginBottom: '16px', fontFamily: 'var(--font-display)',
                        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                    }}>
                        {t('contactEnterprise.title')}
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '460px', margin: '0 auto 40px', fontSize: '1.05rem', lineHeight: 1.6 }}>
                        {t('contactEnterprise.subtitle')}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', marginBottom: '40px' }}>
                        <a href="mailto:business@tagmybike.com" className="btn-primary" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '16px 32px', fontSize: '1.05rem', textDecoration: 'none'
                        }}>
                            <Mail size={18} /> {t('contactEnterprise.emailCta')} <ArrowRight size={16} />
                        </a>
                        <a href="tel:+4915114087414" className="btn-outline" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '14px 28px', fontSize: '0.95rem', textDecoration: 'none'
                        }}>
                            <Phone size={16} /> {t('contactEnterprise.phoneCta')}
                        </a>
                    </div>

                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '28px',
                        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '28px'
                    }}>
                        {[
                            { icon: <Mail size={16} />, text: 'business@tagmybike.com', href: 'mailto:business@tagmybike.com' },
                            { icon: <Phone size={16} />, text: '+49 1511 4087414', href: 'tel:+4915114087414' },
                            { icon: <MapPin size={16} />, text: t('footer.location') }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ color: 'var(--color-primary)', opacity: 0.7 }}>{item.icon}</span>
                                {item.href ? (
                                    <a href={item.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                                        {item.text}
                                    </a>
                                ) : (
                                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{item.text}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactEnterprise;
