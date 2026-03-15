import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const SocialProof = () => {
    const { t } = useTranslation();

    return (
        <section style={{ padding: '48px 0 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <p style={{
                        fontSize: '0.85rem', color: 'var(--color-text-secondary)',
                        textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '500'
                    }}>
                        {t('socialProof.title')}
                    </p>
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'center', gap: 'clamp(16px, 3vw, 32px)',
                    flexWrap: 'wrap', marginBottom: '24px'
                }}>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} style={{
                            width: 'clamp(100px, 20vw, 140px)', height: '44px',
                            border: '1px dashed rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <span style={{
                                fontSize: '0.75rem', color: 'rgba(255,255,255,0.15)',
                                fontWeight: '500', letterSpacing: '0.05em'
                            }}>
                                LOGO
                            </span>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            background: 'none', border: 'none', color: 'var(--color-text-secondary)',
                            fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex',
                            alignItems: 'center', gap: '6px', padding: '8px 0',
                            transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                        {t('socialProof.partnerCta')} <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
