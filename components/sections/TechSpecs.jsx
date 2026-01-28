import React from 'react';
import { useTranslation } from 'react-i18next';
import { Battery, Wifi, Maximize, Droplets, Activity, Zap, Shield } from 'lucide-react';

const TechSpecs = () => {
    const { t } = useTranslation();

    const specs = [
        { icon: Battery, label: 'Battery Life', value: 'Up to 5 years (Standard Mode) / 2 years (Recovery Mode)' },
        { icon: Wifi, label: 'Connectivity', value: 'LTE-M / NB-IoT / GSM / GPS / Bluetooth 5.0' },
        { icon: Maximize, label: 'Dimensions', value: '120mm x 25mm x 12mm (Fits standard downtubes)' },
        { icon: Droplets, label: 'Water Resistance', value: 'IP67 Rated (Dust & Immersion protection)' },
        { icon: Activity, label: 'Sensors', value: 'Accelerometer, Gyroscope, Temperature, Motion' },
        { icon: Zap, label: 'Charging', value: 'Inductive Charging or Direct E-Bike Battery Tap' },
        { icon: Shield, label: 'Security', value: 'AES-256 Encrypted Data Transmission' },
    ];

    return (
        <section id="tech" className="section" style={{ background: '#020305' }}>
            <div className="container">
                <div className="section-grid">
                    <div className="col-span-12" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        <h2 className="section-title" style={{ marginBottom: '16px' }}>{t('techSpecs.title')}</h2>
                        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Enterprise-grade hardware built for reliability and security
                        </p>
                    </div>
                </div>

                <div className="glass-panel-enhanced" style={{ padding: '0', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <tbody>
                            {specs.map((spec, index) => (
                                <SpecRow
                                    key={index}
                                    icon={spec.icon}
                                    label={spec.label}
                                    value={spec.value}
                                    isLast={index === specs.length - 1}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

const SpecRow = ({ icon: Icon, label, value, isLast }) => (
    <tr
        className="table-row-hover"
        style={{
            borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.05)',
            cursor: 'default'
        }}
    >
        <td style={{
            padding: '24px',
            color: 'var(--color-text-secondary)',
            width: '35%',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        }}>
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(198, 255, 59, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
            }}>
                <Icon size={20} color="var(--color-primary)" />
            </div>
            {label}
        </td>
        <td style={{ padding: '24px', color: 'white', fontWeight: '500' }}>{value}</td>
    </tr>
);

export default TechSpecs;

