import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight } from 'lucide-react';

const PricingTiers = () => {
    const { t } = useTranslation();

    const pricingPlans = [
        {
            title: t('pricing.oem.title', 'OEM Integration'),
            subtitle: t('pricing.oem.subtitle', 'For Manufacturers'),
            features: [
                t('pricing.oem.feature1', 'Factory-line installation'),
                t('pricing.oem.feature2', 'Custom Firmware'),
                t('pricing.oem.feature3', 'API Integration'),
                t('pricing.oem.feature4', 'White-label Options')
            ],
            cta: t('pricing.oem.cta', 'Contact Sales'),
            highlight: false
        },
        {
            title: t('pricing.fleet.title', 'Fleet Subscription'),
            subtitle: t('pricing.fleet.subtitle', 'For Shared Mobility'),
            features: [
                t('pricing.fleet.feature1', 'Per-Active-Bike Pricing'),
                t('pricing.fleet.feature2', 'Full Dashboard Access'),
                t('pricing.fleet.feature3', 'Recovery Team Support'),
                t('pricing.fleet.feature4', '24/7 SLA')
            ],
            cta: t('pricing.fleet.cta', 'Request Quote'),
            highlight: true
        },
        {
            title: t('pricing.insurance.title', 'Insurance Partner'),
            subtitle: t('pricing.insurance.subtitle', 'For Insurers'),
            features: [
                t('pricing.insurance.feature1', 'Risk Analytics'),
                t('pricing.insurance.feature2', 'Claims Verification'),
                t('pricing.insurance.feature3', 'Recovery Services'),
                t('pricing.insurance.feature4', 'Premium Sharing Model')
            ],
            cta: t('pricing.insurance.cta', 'Partner With Us'),
            highlight: false
        }
    ];

    return (
        <section id="pricing" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>{t('pricing.title')}</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        {t('pricing.subtitle', 'Flexible pricing models designed for your business needs')}
                    </p>
                </div>

                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {pricingPlans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            {...plan}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricingCard = ({ title, subtitle, features, cta, highlight, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`glass-panel-enhanced ${highlight ? '' : 'card-3d'}`}
            style={{
                padding: '40px',
                borderRadius: '20px',
                border: highlight
                    ? '2px solid var(--color-primary)'
                    : '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                animation: `fadeInUp 0.6s ease-out ${0.1 + index * 0.1}s both`,
                background: highlight
                    ? 'linear-gradient(145deg, rgba(30, 35, 45, 0.98), rgba(10, 15, 20, 0.98))'
                    : undefined,
                boxShadow: highlight
                    ? '0 0 40px rgba(198, 255, 59, 0.15), 0 20px 60px rgba(0,0,0,0.3)'
                    : undefined,
                transform: highlight && isHovered ? 'translateY(-8px)' : undefined,
                transition: 'transform 0.4s ease, box-shadow 0.4s ease'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {highlight && (
                <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, var(--color-primary), #a8e000)',
                    color: 'black',
                    padding: '6px 20px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 15px rgba(198, 255, 59, 0.3)'
                }}>
                    Most Popular
                </div>
            )}

            <h3 style={{
                fontSize: '1.75rem',
                color: 'white',
                marginBottom: '4px',
                marginTop: highlight ? '8px' : 0
            }}>
                {title}
            </h3>
            <p style={{
                color: 'var(--color-text-secondary)',
                marginBottom: '32px',
                fontSize: '0.95rem'
            }}>
                {subtitle}
            </p>

            <ul style={{ listStyle: 'none', marginBottom: '40px', flex: 1 }}>
                {features.map((feat, i) => (
                    <li
                        key={i}
                        style={{
                            display: 'flex',
                            gap: '12px',
                            marginBottom: '16px',
                            color: '#D1D5DB',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            background: highlight
                                ? 'rgba(198, 255, 59, 0.15)'
                                : 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            <Check size={14} color={highlight ? "var(--color-primary)" : "var(--color-text-secondary)"} />
                        </div>
                        {feat}
                    </li>
                ))}
            </ul>

            <button
                className={`${highlight ? "btn-primary btn-glow" : "btn-outline"}`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '14px 24px'
                }}
            >
                {cta}
                <ArrowRight size={18} />
            </button>
        </div>
    );
};

export default PricingTiers;

