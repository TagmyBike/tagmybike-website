import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, Clock, Shield } from 'lucide-react';

const ProblemSection = () => {
    const { t } = useTranslation();

    return (
        <section className="section" style={{ background: '#020305', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url(/images/bike-theft.jpg)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: 0.12, pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, #020305 0%, transparent 40%, transparent 60%, #020305 100%)',
                pointerEvents: 'none'
            }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-grid" style={{ alignItems: 'center' }}>
                    <div className="col-span-4">
                        <span style={{
                            display: 'inline-block', padding: '6px 14px',
                            background: 'rgba(255, 77, 77, 0.08)', border: '1px solid rgba(255, 77, 77, 0.2)',
                            borderRadius: 'var(--radius-pill)', fontSize: '0.75rem',
                            color: 'var(--color-danger)', fontWeight: '600', textTransform: 'uppercase',
                            letterSpacing: '0.1em', marginBottom: '16px'
                        }}>
                            {t('problem.tag')}
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '16px', color: 'white',
                            fontFamily: 'var(--font-display)', lineHeight: 1.2
                        }}>
                            {t('problem.title')}<br />
                            <span style={{ color: 'var(--color-danger)' }}>{t('problem.highlight')}</span>
                        </h2>
                    </div>
                    <div className="col-span-8">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                            <MetricCard
                                icon={<AlertTriangle size={28} color="var(--color-danger)" />}
                                value={t('problem.metrics.loss.value')}
                                label={t('problem.metrics.loss.label')}
                            />
                            <MetricCard
                                icon={<Clock size={28} color="var(--color-warning)" />}
                                value={t('problem.metrics.time.value')}
                                label={t('problem.metrics.time.label')}
                            />
                            <MetricCard
                                icon={<Shield size={28} color="var(--color-purple)" />}
                                value={t('problem.metrics.recovery.value')}
                                label={t('problem.metrics.recovery.label')}
                            />
                        </div>
                        <p style={{
                            fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)',
                            marginTop: '16px', textAlign: 'right', fontStyle: 'italic'
                        }}>
                            {t('problem.source')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MetricCard = ({ icon, value, label }) => (
    <div className="glass-panel card-hover" style={{
        padding: '24px', borderRadius: 'var(--radius-card)',
        textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'
    }}>
        <div style={{ marginBottom: '4px' }}>{icon}</div>
        <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'white', fontFamily: 'var(--font-display)' }}>{value}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{label}</div>
    </div>
);

export default ProblemSection;
