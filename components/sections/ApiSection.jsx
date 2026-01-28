import React from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal, Code, Webhook } from 'lucide-react';

const ApiSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section">
            <div className="container">
                <div className="section-grid" style={{ alignItems: 'center' }}>
                    <div className="col-span-6">
                        <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}>
                            <Code size={20} />
                            <span style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t('api.tag')}</span>
                        </div>
                        <h2 className="section-title">{t('api.title')}</h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '40px' }}>
                            Seamlessly ingest fleet data into your existing ERP or fleet management software. Our REST API and Webhooks give you full control.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <Feature
                                icon={<Terminal size={24} color="#C084FC" />}
                                title="REST API"
                                desc="Full CRUD access to devices, fleets, and location history."
                            />
                            <Feature
                                icon={<Webhook size={24} color="#2F8DFF" />}
                                title="Real-time Webhooks"
                                desc="Get notified instantly when a bike moves, crashes, or leaves a geofence."
                            />
                        </div>
                    </div>

                    <div className="col-span-6">
                        <div className="glass-panel" style={{
                            background: '#1E1E1E',
                            padding: '24px',
                            borderRadius: '12px',
                            fontFamily: 'monospace',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            border: '1px solid #333'
                        }}>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></div>
                            </div>
                            <div style={{ color: '#A9B7C6', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                <span style={{ color: '#CC7832' }}>POST</span> /api/v1/devices/<span style={{ color: '#E8BF6A' }}>{'{device_id}'}</span>/locate <br /><br />
                                <span style={{ color: '#FFC66D' }}>HTTP/1.1 200 OK</span><br />
                                <span style={{ color: '#9876AA' }}>Content-Type:</span> application/json<br /><br />
                                <span style={{ color: '#A5C261' }}>{'{'}</span><br />
                                &nbsp;&nbsp;<span style={{ color: '#D0D0FF' }}>"status"</span>: <span style={{ color: '#A5C261' }}>"active"</span>,<br />
                                &nbsp;&nbsp;<span style={{ color: '#D0D0FF' }}>"location"</span>: <span style={{ color: '#A5C261' }}>{'{'}</span><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#D0D0FF' }}>"lat"</span>: <span style={{ color: '#6897BB' }}>52.5200</span>,<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#D0D0FF' }}>"lng"</span>: <span style={{ color: '#6897BB' }}>13.4050</span><br />
                                &nbsp;&nbsp;<span style={{ color: '#A5C261' }}>{'}'}</span>,<br />
                                &nbsp;&nbsp;<span style={{ color: '#D0D0FF' }}>"battery"</span>: <span style={{ color: '#6897BB' }}>87</span><br />
                                <span style={{ color: '#A5C261' }}>{'}'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Feature = ({ icon, title, desc }) => (
    <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ marginTop: '4px' }}>{icon}</div>
        <div>
            <h4 style={{ color: 'white', marginBottom: '4px', fontSize: '1.1rem' }}>{title}</h4>
            <p style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
        </div>
    </div>
);

export default ApiSection;
