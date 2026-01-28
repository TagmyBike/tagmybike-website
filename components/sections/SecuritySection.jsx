import React from 'react';
import { Shield, Lock, FileCheck, Globe } from 'lucide-react';

const SecuritySection = () => {
    return (
        <section className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
                    <Badge icon={<Shield size={24} />} label="GDPR Compliant" />
                    <Badge icon={<Lock size={24} />} label="AES-256 Encryption" />
                    <Badge icon={<FileCheck size={24} />} label="CE Certified" />
                    <Badge icon={<Globe size={24} />} label="Global Roaming" />
                </div>
            </div>
        </section>
    );
};

const Badge = ({ icon, label }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.8 }}>
        <div style={{ color: 'var(--color-primary)' }}>{icon}</div>
        <span style={{ color: 'white', fontWeight: '600', fontSize: '1.1rem' }}>{label}</span>
    </div>
);

export default SecuritySection;
