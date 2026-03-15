import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, Cloud, Award, ArrowRight } from 'lucide-react';

const SolutionOverview = () => {
    const { t } = useTranslation();

    const solutions = [
        { icon: Cpu, iconColor: 'var(--color-primary)', key: 'hardware', title: t('solutionOverview.cards.hardware.title'), description: t('solutionOverview.cards.hardware.desc') },
        { icon: Cloud, iconColor: 'var(--color-accent)', key: 'tracking', title: t('solutionOverview.cards.tracking.title'), description: t('solutionOverview.cards.tracking.desc') },
        { icon: Award, iconColor: 'var(--color-purple)', key: 'recovery', title: t('solutionOverview.cards.recovery.title'), description: t('solutionOverview.cards.recovery.desc') }
    ];

    return (
        <section id="solutions" className="section section-dot-grid">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '16px',
                        fontFamily: 'var(--font-display)', color: 'white'
                    }}>
                        {t('solutionOverview.title')}
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', lineHeight: 1.7 }}>
                        {t('solutionOverview.subtitle')}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '20px' }}>
                    {solutions.map((solution, i) => (
                        <SolutionCard key={i} {...solution} index={i} ctaText={t(`solutionOverview.cta.${solution.key}`)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SolutionCard = ({ icon: Icon, iconColor, title, description, index, ctaText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="glass-panel-enhanced" style={{
            padding: 'clamp(24px, 4vw, 36px)', borderRadius: '16px', position: 'relative', overflow: 'hidden',
            animation: `fadeInUp 0.6s ease-out ${0.1 + index * 0.15}s both`, transition: 'all 0.3s ease',
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
            borderColor: isHovered ? `${iconColor}33` : undefined
        }}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div style={{
                background: 'rgba(255,255,255,0.03)', border: `1px solid ${isHovered ? iconColor + '40' : 'rgba(255,255,255,0.05)'}`,
                width: '64px', height: '64px', borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px', transition: 'all 0.3s ease'
            }}>
                <Icon size={32} color={iconColor} />
            </div>
            <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', marginBottom: '12px', color: 'white', fontFamily: 'var(--font-display)' }}>{title}</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: 1.6, fontSize: '0.95rem' }}>{description}</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                    color: isHovered ? iconColor : 'rgba(255,255,255,0.6)', background: 'none', border: 'none',
                    padding: 0, cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500',
                    display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.3s ease'
                }}>
                {ctaText} <ArrowRight size={14} style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s ease' }} />
            </button>
        </div>
    );
};

export default SolutionOverview;
