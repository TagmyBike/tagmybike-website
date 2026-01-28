import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import bellTracker from '../../assets/accessories/bell-tracker.png';
import cupHolderTracker from '../../assets/accessories/cup-holder-tracker.png';
import taillightTracker from '../../assets/accessories/taillight-tracker.png';

const Accessories = () => {
    const { t } = useTranslation();

    const accessories = [
        {
            id: 'bell',
            image: bellTracker,
            title: t('accessories.bell.title'),
            specs: t('accessories.bell.specs', { returnObjects: true })
        },
        {
            id: 'cup',
            image: cupHolderTracker,
            title: t('accessories.cup.title'),
            specs: t('accessories.cup.specs', { returnObjects: true })
        },
        {
            id: 'light',
            image: taillightTracker,
            title: t('accessories.light.title'),
            specs: t('accessories.light.specs', { returnObjects: true })
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="section-grid">
                    <div className="col-span-12" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t('accessories.title')}</h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            {t('accessories.subtitle')}
                        </p>
                    </div>

                    {accessories.map((item, index) => (
                        <AccessoryCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AccessoryCard = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="col-span-4 glass-panel-enhanced card-3d"
            style={{
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-card)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                opacity: 1,
                animation: `fadeInUp 0.6s ease-out ${0.1 + index * 0.1}s both`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{
                width: '140px',
                height: '140px',
                marginBottom: 'var(--spacing-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                {/* Glow effect behind image */}
                <div style={{
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    background: 'rgba(198, 255, 59, 0.15)',
                    filter: 'blur(30px)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    zIndex: 0
                }} />
                <img
                    src={item.image}
                    alt={item.title}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        position: 'relative',
                        zIndex: 1,
                        transition: 'transform 0.4s ease',
                        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                    }}
                />
            </div>
            <h3 style={{
                fontSize: '1.25rem',
                marginBottom: 'var(--spacing-sm)',
                color: isHovered ? 'var(--color-primary)' : 'white',
                transition: 'color 0.3s ease'
            }}>
                {item.title}
            </h3>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                textAlign: 'left',
                width: '100%',
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)'
            }}>
                {item.specs.map((spec, i) => (
                    <li key={i} style={{
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--color-primary)',
                            transition: 'transform 0.3s ease'
                        }}>
                            •
                        </span>
                        {spec}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accessories;

