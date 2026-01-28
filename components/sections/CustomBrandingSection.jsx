import React from 'react';
import { useTranslation } from 'react-i18next';
import { Palette, Package, Smartphone, Building2, Rocket, Users, ArrowRight } from 'lucide-react';

const CustomBrandingSection = () => {
    const { t } = useTranslation();

    const features = [
        { icon: <Palette size={24} />, text: t('customization.features.0') },
        { icon: <Package size={24} />, text: t('customization.features.1') },
        { icon: <Smartphone size={24} />, text: t('customization.features.2') },
        { icon: <Building2 size={24} />, text: t('customization.features.3') },
        { icon: <Rocket size={24} />, text: t('customization.features.4') },
        { icon: <Users size={24} />, text: t('customization.features.5') }
    ];

    return (
        <section id="branding" className="section" style={{
            background: 'linear-gradient(180deg, #0a0f14 0%, #020305 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Accent glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(198, 255, 59, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Badge */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '24px'
                }}>
                    <span style={{
                        background: 'linear-gradient(135deg, rgba(198, 255, 59, 0.2), rgba(198, 255, 59, 0.05))',
                        border: '1px solid rgba(198, 255, 59, 0.3)',
                        padding: '8px 20px',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        color: 'var(--color-primary)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        ⭐ B2B White-Label
                    </span>
                </div>

                {/* Title */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        marginBottom: '20px',
                        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        {t('customization.title')}
                    </h2>
                    <p style={{
                        color: 'var(--color-text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontSize: '1.15rem',
                        lineHeight: '1.7'
                    }}>
                        {t('customization.subtitle')}
                    </p>
                </div>

                {/* Features Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    marginBottom: '48px'
                }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-panel card-hover"
                            style={{
                                padding: '24px',
                                borderRadius: 'var(--radius-card)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.06)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgba(198, 255, 59, 0.15), rgba(198, 255, 59, 0.05))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-primary)',
                                flexShrink: 0
                            }}>
                                {feature.icon}
                            </div>
                            <span style={{
                                color: 'white',
                                fontWeight: '500',
                                fontSize: '1rem'
                            }}>
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center' }}>
                    <button
                        className="btn-primary btn-glow"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            fontSize: '1.1rem',
                            padding: '16px 32px'
                        }}
                    >
                        {t('customization.cta')}
                        <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomBrandingSection;
