import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Accessories = () => {
    const { t } = useTranslation();

    const accessories = [
        { id: 'bell', image: '/images/bell.png', title: t('accessories.bell.title'), desc: t('accessories.bell.desc'), spec: t('accessories.bell.spec') },
        { id: 'cup', image: '/images/bottleholder.png', title: t('accessories.cup.title'), desc: t('accessories.cup.desc'), spec: t('accessories.cup.spec') },
        { id: 'light', image: '/images/taillight.png', title: t('accessories.light.title'), desc: t('accessories.light.desc'), spec: t('accessories.light.spec') }
    ];

    return (
        <section className="section section-glow-accent" id="accessories">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '16px',
                        fontFamily: 'var(--font-display)', color: 'white'
                    }}>
                        {t('accessories.title')}
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
                        {t('accessories.subtitle')}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
                    {accessories.map((item, i) => (
                        <AccessoryCard key={item.id} item={item} index={i} />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ padding: '14px 28px', fontSize: '1rem' }}>
                        {t('accessories.sampleCta')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
        </section>
    );
};

const AccessoryCard = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="glass-panel-enhanced" style={{
            padding: '40px 32px', borderRadius: '16px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            animation: `fadeInUp 0.6s ease-out ${0.1 + index * 0.1}s both`,
            transition: 'all 0.3s ease',
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
        }}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div style={{
                width: '160px', height: '160px', marginBottom: '24px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '20px', position: 'relative',
                background: 'linear-gradient(145deg, rgba(20, 20, 25, 0.95), rgba(5, 5, 10, 0.98))',
                border: `1px solid ${isHovered ? 'rgba(198, 255, 59, 0.2)' : 'rgba(255,255,255,0.05)'}`,
                transition: 'all 0.3s ease', overflow: 'hidden'
            }}>
                <img
                    src={item.image}
                    alt={item.title}
                    style={{
                        width: '85%', height: '85%', objectFit: 'contain',
                        opacity: isHovered ? 1 : 0.9,
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />
            </div>
            <h3 style={{
                fontSize: '1.2rem', marginBottom: '12px', fontFamily: 'var(--font-display)',
                color: isHovered ? 'var(--color-primary)' : 'white', transition: 'color 0.3s ease'
            }}>
                {item.title}
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '12px' }}>
                {item.desc}
            </p>
            <p style={{
                fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)',
                fontFamily: 'var(--font-primary)', letterSpacing: '0.02em'
            }}>
                {item.spec}
            </p>
        </div>
    );
};

export default Accessories;
