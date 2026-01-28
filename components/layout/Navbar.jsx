import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();

        // If we're on the landing page, scroll directly
        if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            // Navigate to home page with hash
            navigate('/' + '#' + sectionId);
            // After navigation, scroll to section
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    const navLinks = [
        { href: '#branding', sectionId: 'branding', label: t('nav.solutions') },
        { href: '#solutions', sectionId: 'solutions', label: t('nav.tech') },
        { href: '#tech', sectionId: 'tech', label: t('nav.industries', 'Tech Specs') },
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: scrolled ? '12px 0' : '20px 0',
                background: scrolled
                    ? 'rgba(5, 8, 20, 0.95)'
                    : 'rgba(5, 8, 20, 0.85)',
                backdropFilter: 'blur(16px)',
                borderBottom: scrolled
                    ? '1px solid rgba(198, 255, 59, 0.1)'
                    : '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link
                        to="/"
                        style={{
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img
                            src={logo}
                            alt="TagMyBike"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                objectFit: 'cover'
                            }}
                        />
                        <span style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: 'white',
                            letterSpacing: '-0.02em'
                        }}>
                            TagMyBike
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '32px'
                    }} className="desktop-menu">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.sectionId)}
                                className="nav-link-animated"
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: '500',
                                    padding: '8px 0',
                                    cursor: 'pointer'
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <LanguageSwitcher />
                        <Link
                            to="/contact"
                            className="btn-primary btn-glow"
                            style={{
                                padding: '10px 22px',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                textDecoration: 'none'
                            }}
                        >
                            {t('nav.contact')}
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            display: 'none',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '10px',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'rgba(5, 8, 20, 0.98)',
                backdropFilter: 'blur(20px)',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px',
                opacity: mobileMenuOpen ? 1 : 0,
                visibility: mobileMenuOpen ? 'visible' : 'hidden',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.4s ease'
            }}>
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        onClick={(e) => {
                            handleNavClick(e, link.sectionId);
                            setMobileMenuOpen(false);
                        }}
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            opacity: mobileMenuOpen ? 1 : 0,
                            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            transition: `all 0.4s ease ${0.1 + index * 0.05}s`,
                            cursor: 'pointer'
                        }}
                    >
                        {link.label}
                    </a>
                ))}
                <Link
                    to="/contact"
                    className="btn-primary"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                        marginTop: '20px',
                        padding: '14px 32px',
                        fontSize: '1rem',
                        textDecoration: 'none'
                    }}
                >
                    {t('nav.contact')}
                </Link>
            </div>

            <style>{`
                @media (max-width: 968px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-menu-toggle {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;

