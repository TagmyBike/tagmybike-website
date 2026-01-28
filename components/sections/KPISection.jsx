import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Battery, ShieldCheck } from 'lucide-react';

const KPISection = () => {
    const { t } = useTranslation();

    const kpis = [
        {
            icon: <Target size={32} color="var(--color-primary)" />,
            value: "98%",
            label: t('kpi.recovery'),
            desc: "Industry leading recovery rate for stolen assets."
        },
        {
            icon: <ShieldCheck size={32} color="var(--color-primary)" />,
            value: "99.9%",
            label: t('kpi.uptime'),
            desc: "Enterprise grade reliability for your fleet."
        },
        {
            icon: <Battery size={32} color="var(--color-primary)" />,
            value: "12+",
            label: t('kpi.battery'),
            desc: "Months of battery life on a single charge."
        }
    ];

    return (
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <div className="section-grid">
                    {kpis.map((kpi, index) => (
                        <div key={index} className="col-span-4 glass-panel card-hover" style={{
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-card)',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 'var(--spacing-sm)'
                        }}>
                            <div style={{
                                background: 'rgba(198, 255, 59, 0.1)',
                                padding: '16px',
                                borderRadius: '50%',
                                marginBottom: '8px'
                            }}>
                                {kpi.icon}
                            </div>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>{kpi.value}</h3>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{kpi.label}</h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{kpi.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KPISection;
