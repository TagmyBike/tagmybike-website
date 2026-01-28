import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, TrendingDown, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
    const { t } = useTranslation();

    const caseStudies = [
        {
            category: t('caseStudies.case1.category', 'Shared Mobility'),
            title: t('caseStudies.case1.title', 'How CityRide reduced fleet theft by 80% in London'),
            stat: '80%',
            statLabel: t('caseStudies.case1.statLabel', 'Theft Reduction'),
            gradient: 'linear-gradient(135deg, rgba(198, 255, 59, 0.15) 0%, rgba(47, 141, 255, 0.1) 100%)',
            icon: TrendingDown
        },
        {
            category: t('caseStudies.case2.category', 'OEM Partnership'),
            title: t('caseStudies.case2.title', 'Velosophy now offers native theft insurance at 20% lower premiums'),
            stat: '-20%',
            statLabel: t('caseStudies.case2.statLabel', 'Insurance Costs'),
            gradient: 'linear-gradient(135deg, rgba(47, 141, 255, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)',
            icon: TrendingDown
        }
    ];

    return (
        <section id="case-studies" className="section">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>{t('caseStudies.title')}</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginTop: '12px' }}>
                            {t('caseStudies.subtitle', 'Real results from real partnerships')}
                        </p>
                    </div>
                </div>

                <div className="section-grid">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="col-span-6">
                            <CaseStudyCard {...study} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CaseStudyCard = ({ category, title, stat, statLabel, gradient, icon: Icon, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="glass-panel-enhanced card-hover"
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                animation: `fadeInUp 0.6s ease-out ${0.1 + index * 0.15}s both`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{
                height: '200px',
                background: gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated background pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.3,
                    background: `
                        radial-gradient(circle at 20% 30%, rgba(198, 255, 59, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(47, 141, 255, 0.3) 0%, transparent 50%)
                    `,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.6s ease'
                }} />

                {/* Icon */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.4s ease'
                }}>
                    <Icon size={36} color="var(--color-primary)" />
                </div>
            </div>
            <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                    color: 'var(--color-primary)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    letterSpacing: '0.05em'
                }}>
                    {category}
                </span>
                <h3 style={{
                    fontSize: '1.4rem',
                    color: 'white',
                    marginBottom: '24px',
                    lineHeight: '1.3',
                    transition: 'color 0.3s ease'
                }}>
                    {title}
                </h3>

                <div style={{
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '24px',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '12px'
                }}>
                    <span style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--color-primary)',
                        display: 'block'
                    }}>
                        {stat}
                    </span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{statLabel}</span>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;

