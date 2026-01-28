import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cog, Users, ShieldCheck, Building2, ChevronRight } from 'lucide-react';

const IndustryGrid = () => {
    const { t } = useTranslation();
    return (
        <section className="section bg-glow">
            <div className="container">
                <h2 className="section-title">{t('industryGrid.title')}</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <IndustryCard
                        icon={<Cog size={32} />}
                        title="E-Bike OEMs"
                        description="Integrate security at the factory level. Increase vehicle value and offer native theft protection."
                    />
                    <IndustryCard
                        icon={<Users size={32} />}
                        title="Shared Mobility"
                        description="Reduce fleet attrition and optimize rebalancing with precise location data."
                    />
                    <IndustryCard
                        icon={<ShieldCheck size={32} />}
                        title="Insurers"
                        description="Lower premiums and payouts by recovering 90% of stolen assets. Data-driven risk assessment."
                    />
                    <IndustryCard
                        icon={<Building2 size={32} />}
                        title="Smart Cities"
                        description="Urban mobility analytics to improve infrastructure and reduce abandoned bikes."
                    />
                </div>
            </div>
        </section>
    );
};

const IndustryCard = ({ icon, title, description }) => (
    <div className="glass-panel card-hover" style={{
        padding: '24px',
        borderRadius: 'var(--radius-card)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }}>
        <div style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>{icon}</div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'white' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-secondary)', flex: 1, marginBottom: '20px' }}>{description}</p>
        <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', padding: '8px' }}>
            <ChevronRight size={20} color="white" />
        </div>
    </div>
);

export default IndustryGrid;
