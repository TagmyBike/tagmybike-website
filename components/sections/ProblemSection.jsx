import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, Clock, TrendingUp } from 'lucide-react';


const ProblemSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section" style={{ background: '#020305' }}>
            <div className="container">
                <div className="section-grid" style={{ alignItems: 'center' }}>
                    <div className="col-span-5">
                        <h2 className="text-glow" style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'white' }}>
                            Bike Theft is a<br />
                            <span style={{ color: 'var(--color-alert, #FF4D4D)' }}>{t('problem.tag')}</span>
                        </h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
                            For fleet operators and insurers, asset loss isn't just an inconvenience—it's an existential threat to profitability.
                        </p>
                    </div>
                    <div className="col-span-7">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                            <MetricCard
                                icon={<AlertTriangle size={32} color="#FF4D4D" />}
                                value="£500M+"
                                label="Annual Loss in UK & EU"
                            />
                            <MetricCard
                                icon={<Clock size={32} color="#FF9F1C" />}
                                value="< 60s"
                                label="Average Time to Steal"
                            />
                            <MetricCard
                                icon={<TrendingUp size={32} color="var(--color-primary)" />}
                                value="7-15%"
                                label="Fleet Attrition Rate"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MetricCard = ({ icon, value, label }) => (
    <div className="glass-panel card-hover" style={{
        padding: '24px',
        borderRadius: 'var(--radius-card)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
    }}>
        <div style={{ marginBottom: '8px' }}>{icon}</div>
        <div style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>{value}</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{label}</div>
    </div>
);

export default ProblemSection;
