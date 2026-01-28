import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
    const { i18n } = useTranslation();
    const isGerman = i18n.language === 'de';

    const linkStyle = {
        color: 'rgba(255, 255, 255, 0.6)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        display: 'block'
    };

    const headingStyle = {
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '20px'
    };

    const legalLinks = [
        { label: isGerman ? 'Datenschutzerklärung' : 'Privacy Policy', to: '/privacy' },
        { label: isGerman ? 'AGB' : 'Terms of Service', to: '/terms' },
        { label: isGerman ? 'Impressum' : 'Imprint', to: '/imprint' }
    ];

    return (
        <footer style={{
            background: 'linear-gradient(180deg, #020305 0%, #0a0d14 100%)',
            borderTop: '1px solid rgba(198, 255, 59, 0.1)',
            paddingTop: '60px',
            paddingBottom: '30px'
        }}>
            <div className="container">
                {/* Main Footer Grid - Simplified */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    {/* Brand Column */}
                    <div style={{ maxWidth: '300px' }}>
                        <Link to="/" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            textDecoration: 'none',
                            marginBottom: '16px'
                        }}>
                            <img
                                src={logo}
                                alt="TagMyBike"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '8px',
                                    objectFit: 'cover'
                                }}
                            />
                            <span style={{
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                color: 'white'
                            }}>
                                TagMyBike
                            </span>
                        </Link>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: '0.9rem',
                            lineHeight: 1.7
                        }}>
                            {isGerman
                                ? 'Enterprise-Tracking-Lösungen für moderne Geschäftskunden.'
                                : 'Enterprise tracking solutions for modern businesses.'}
                        </p>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 style={headingStyle}>{isGerman ? 'Rechtliches' : 'Legal'}</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        style={linkStyle}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--color-primary)';
                                            e.currentTarget.style.transform = 'translateX(4px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={headingStyle}>{isGerman ? 'Kontakt' : 'Contact'}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <a
                                href="mailto:business@tagmybike.com"
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', ...linkStyle, fontSize: '0.85rem' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                            >
                                <Mail size={16} style={{ color: 'var(--color-primary)' }} />
                                business@tagmybike.com
                            </a>
                            <a
                                href="tel:+4915114087414"
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', ...linkStyle, fontSize: '0.85rem' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                            >
                                <Phone size={16} style={{ color: 'var(--color-primary)' }} />
                                +49 1511 4087414
                            </a>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                <MapPin size={16} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                                    Mülheim an der Ruhr, {isGerman ? 'Deutschland' : 'Germany'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{
                    height: '1px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    marginBottom: '24px'
                }} />

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px'
                }}>
                    <div style={{
                        color: 'rgba(255, 255, 255, 0.4)',
                        fontSize: '0.8rem'
                    }}>
                        © {new Date().getFullYear()} BOOST BOOOST SE
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        fontSize: '0.8rem'
                    }}>
                        <Link
                            to="/privacy"
                            style={{ color: 'rgba(255, 255, 255, 0.4)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
                        >
                            {isGerman ? 'Datenschutz' : 'Privacy'}
                        </Link>
                        <Link
                            to="/terms"
                            style={{ color: 'rgba(255, 255, 255, 0.4)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
                        >
                            {isGerman ? 'AGB' : 'Terms'}
                        </Link>
                        <Link
                            to="/imprint"
                            style={{ color: 'rgba(255, 255, 255, 0.4)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'}
                        >
                            {isGerman ? 'Impressum' : 'Imprint'}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
