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
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            navigate('/#' + sectionId);
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const navLinks = [
        { sectionId: 'accessories', label: t('nav.products') },
        { sectionId: 'solutions', label: t('nav.solutions') },
        { sectionId: 'tech', label: t('nav.specs') },
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
                background: scrolled ? 'rgba(5, 8, 20, 0.95)' : 'rgba(5, 8, 20, 0.8)',
                backdropFilter: 'blur(20px)',
                borderBottom: scrolled ? '1px solid rgba(198, 255, 59, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
                transition: 'all 0.3s ease',
                boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img src={logo} alt="TagMyBike" style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'cover' }} />
                        <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white', letterSpacing: '-0.02em' }}>TagMyBike</span>
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-menu">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={`#${link.sectionId}`}
                                onClick={(e) => handleNavClick(e, link.sectionId)}
                                className="nav-link-animated"
                                style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', padding: '8px 0', cursor: 'pointer' }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <LanguageSwitcher />
                        <Link to="/contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                            {t('nav.contact')}
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ display: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', cursor: 'pointer', padding: '10px', borderRadius: '8px' }}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                background: 'rgba(5, 8, 20, 0.98)', backdropFilter: 'blur(20px)', zIndex: 999,
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px',
                opacity: mobileMenuOpen ? 1 : 0, visibility: mobileMenuOpen ? 'visible' : 'hidden',
                transition: 'all 0.4s ease'
            }}>
                {navLinks.map((link, i) => (
                    <a key={i} href={`#${link.sectionId}`}
                        onClick={(e) => { handleNavClick(e, link.sectionId); setMobileMenuOpen(false); }}
                        style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: '600', cursor: 'pointer' }}
                    >{link.label}</a>
                ))}
                <LanguageSwitcher />
                <Link to="/contact" className="btn-primary" onClick={() => setMobileMenuOpen(false)}
                    style={{ marginTop: '20px', padding: '14px 32px', fontSize: '1rem', textDecoration: 'none' }}>
                    {t('nav.contact')}
                </Link>
            </div>
        </>
    );
};

export default Navbar;
