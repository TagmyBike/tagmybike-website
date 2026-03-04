import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const TechSpecs = () => {
    const { t } = useTranslation();

    const specKeys = ['connectivity', 'battery', 'alarm', 'waterResistance', 'certifications', 'compatibility', 'subscription', 'cloud', 'ota', 'encryption'];

    return (
        <section id="tech" className="section section-dot-grid" style={{ background: '#020305' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '16px',
                        fontFamily: 'var(--font-display)', color: 'white'
                    }}>
                        {t('techSpecs.title')}
                    </h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
                        {t('techSpecs.subtitle')}
                    </p>
                </div>

                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <div style={{
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '16px', overflow: 'hidden'
                    }}>
                        {specKeys.map((key, i) => {
                            const value = t(`techSpecs.specs.${key}.value`);
                            const isTBD = value === 'TBD';
                            return (
                                <div key={key} className="table-row-hover" style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '18px 24px',
                                    borderBottom: i < specKeys.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none'
                                }}>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: '500' }}>
                                        {t(`techSpecs.specs.${key}.label`)}
                                    </span>
                                    <span style={{
                                        fontSize: '0.9rem', fontWeight: '600',
                                        color: isTBD ? 'rgba(255,255,255,0.3)' : 'white',
                                        fontStyle: isTBD ? 'italic' : 'normal'
                                    }}>
                                        {value}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <p style={{
                        fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)',
                        marginTop: '16px', textAlign: 'center', fontStyle: 'italic'
                    }}>
                        {t('techSpecs.disclaimer')}
                    </p>

                    <div style={{ textAlign: 'center', marginTop: '32px' }}>
                        <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                            {t('techSpecs.downloadCta')} <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSpecs;
