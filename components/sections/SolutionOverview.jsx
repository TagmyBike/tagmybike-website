import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, Signal, LayoutDashboard, ArrowRight } from 'lucide-react';

const SolutionOverview = () => {
    const { t } = useTranslation();

    const solutions = [
        {
            icon: Cpu,
            iconColor: 'var(--color-primary)',
            title: t('solutionOverview.hardware.title', 'Stealth Hardware'),
            description: t('solutionOverview.hardware.description', 'Impossible to detect, impossible to remove. Our trackers integrate seamlessly inside the bike frame.')
        },
        {
            icon: Signal,
            iconColor: '#2F8DFF',
            title: t('solutionOverview.connectivity.title', 'Multi-Layer Connectivity'),
            description: t('solutionOverview.connectivity.description', 'LTE-M, NB-IoT, GPS, and Bluetooth bonding ensure 99.9% uptime even in dense urban canyons.')
        },
        {
            icon: LayoutDashboard,
            iconColor: '#C084FC',
            title: t('solutionOverview.dashboard.title', 'Recovery Dashboard'),
            description: t('solutionOverview.dashboard.description', 'Real-time command center for fleet managers showing live locations, heatmaps, and theft alerts.')
        }
    ];

    return (
        <section id="solutions" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>{t('solutionOverview.title')}</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        {t('solutionOverview.subtitle', 'We combine military-grade hardware with intelligent software to recover assets where others fail.')}
                    </p>
                </div>

                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {solutions.map((solution, index) => (
                        <SolutionCard
                            key={index}
                            {...solution}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SolutionCard = ({ icon: Icon, iconColor, title, description, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="glass-panel-enhanced card-3d"
            style={{
                padding: '32px',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                animation: `fadeInUp 0.6s ease-out ${0.1 + index * 0.15}s both`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '80px',
                height: '80px',
                background: iconColor,
                borderRadius: '50%',
                filter: 'blur(60px)',
                opacity: isHovered ? 0.2 : 0.1,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none'
            }} />

            <div style={{
                background: `rgba(255,255,255,0.03)`,
                border: `1px solid ${isHovered ? iconColor : 'rgba(255,255,255,0.05)'}`,
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                transition: 'all 0.4s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}>
                <Icon
                    size={40}
                    color={iconColor}
                    style={{
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'rotate(5deg)' : 'rotate(0deg)'
                    }}
                />
            </div>
            <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '12px',
                color: 'white',
                transition: 'color 0.3s ease'
            }}>
                {title}
            </h3>
            <p style={{
                color: 'var(--color-text-secondary)',
                marginBottom: '24px',
                lineHeight: 1.6
            }}>
                {description}
            </p>
            <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="nav-link-animated"
                style={{
                    color: isHovered ? iconColor : 'white',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: '500',
                    transition: 'color 0.3s ease',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: 'inherit'
                }}
            >
                Get in touch
                <ArrowRight
                    size={16}
                    style={{
                        transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </button>
        </div>
    );
};

export default SolutionOverview;

