import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer style={{
            background: 'linear-gradient(180deg, #020305 0%, #0a0d14 100%)',
            borderTop: '1px solid rgba(198, 255, 59, 0.08)',
            paddingTop: 'clamp(48px, 8vw, 80px)',
            paddingBottom: '32px'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr 1fr',
                    gap: 'clamp(32px, 5vw, 60px)',
                    marginBottom: '60px'
                }} className="footer-grid">
                    <div>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '16px' }}>
                            <img src={logo} alt="TagMyBike" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover' }} />
                            <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'white' }}>TagMyBike</span>
                        </Link>
                        <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '280px', marginBottom: '20px' }}>
                            {t('footer.tagline')}
                        </p>
                        <a href="https://www.linkedin.com/company/tagmybike" target="_blank" rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
                            {t('footer.legal')}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {[
                                { label: t('footer.links.privacy'), to: '/privacy' },
                                { label: t('footer.links.terms'), to: '/terms' },
                                { label: t('footer.links.imprint'), to: '/imprint' }
                            ].map((link, i) => (
                                <Link key={i} to={link.to} style={{
                                    color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s ease'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
                                >{link.label}</Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
                            {t('footer.contact')}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <a href="mailto:business@tagmybike.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}>
                                <Mail size={15} style={{ color: 'var(--color-primary)', opacity: 0.7 }} />
                                business@tagmybike.com
                            </a>
                            <a href="tel:+4915114087414" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}>
                                <Phone size={15} style={{ color: 'var(--color-primary)', opacity: 0.7 }} />
                                +49 1511 4087414
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MapPin size={15} style={{ color: 'var(--color-primary)', opacity: 0.7, flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem' }}>{t('footer.location')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.06)', marginBottom: '24px' }} />

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.8rem' }}>
                        &copy; {new Date().getFullYear()} BOOOST E-Mobility Solutions GmbH. {t('footer.rights')}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
