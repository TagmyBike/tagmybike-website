import React from 'react';
import { useTranslation } from 'react-i18next';

const TrustSection = () => {
    // Placeholder logos using text for now
    const companies = [
        "Metropolis Mobility", "SwiftFleet", "Urban Ride", "SecureCycle",
        "EcoMove", "City Transit", "BikeGuard Insurance", "Velosophy"
    ];

    return (
        <section className="section" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <p style={{
                    textAlign: 'center',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--spacing-lg)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                }}>
                    Trusted by Industry Leaders
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '40px',
                    opacity: 0.7
                }}>
                    {companies.map((company, index) => (
                        <div key={index} style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: 'var(--color-text-secondary)',
                            filter: 'grayscale(100%)',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.filter = 'grayscale(0%)';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.filter = 'grayscale(100%)';
                                e.target.style.color = 'var(--color-text-secondary)';
                            }}
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
