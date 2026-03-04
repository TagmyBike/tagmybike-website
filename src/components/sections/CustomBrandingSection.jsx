import React from 'react';
import { useTranslation } from 'react-i18next';
import { Package, Smartphone, Building2, Rocket, ArrowRight } from 'lucide-react';

const CustomBrandingSection = () => {
    const { t } = useTranslation();

    const features = [
        { icon: <Package size={22} />, text: t('customization.features.0') },
        { icon: <Smartphone size={22} />, text: t('customization.features.1') },
        { icon: <Building2 size={22} />, text: t('customization.features.2') },
        { icon: <Rocket size={22} />, text: t('customization.features.3') }
    ];

    return (
        <section id="branding" className="section" style={{
            background: 'linear-gradient(180deg, #0a0f14 0%, #020305 100%)',
            position: 'relative', overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(198, 255, 59, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <span style={{
                        background: 'rgba(198, 255, 59, 0.08)', border: '1px solid rgba(198, 255, 59, 0.2)',
                        padding: '8px 20px', borderRadius: '100px', fontSize: '0.8rem',
                        color: 'var(--color-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em'
                    }}>
                        {t('customization.pill')}
                    </span>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', fontFamily: 'var(--font-display)',
                        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                    }}>
                        {t('customization.title')}
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {t('customization.subtitle')}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '48px', maxWidth: '900px', margin: '0 auto 48px' }}>
                    {features.map((feature, i) => (
                        <div key={i} className="glass-panel card-hover" style={{
                            padding: '24px', borderRadius: 'var(--radius-card)',
                            display: 'flex', alignItems: 'center', gap: '16px',
                            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)'
                        }}>
                            <div style={{
                                width: '44px', height: '44px', borderRadius: '10px',
                                background: 'linear-gradient(135deg, rgba(198, 255, 59, 0.12), rgba(198, 255, 59, 0.04))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-primary)', flexShrink: 0
                            }}>
                                {feature.icon}
                            </div>
                            <span style={{ color: 'white', fontWeight: '500', fontSize: '0.95rem' }}>{feature.text}</span>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{ padding: '14px 28px', fontSize: '1rem' }}>
                        {t('customization.cta')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomBrandingSection;
