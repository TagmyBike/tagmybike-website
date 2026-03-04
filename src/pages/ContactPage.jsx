import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Building2, User, FileText, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const subject = encodeURIComponent(`Contact Request from ${formData.name} - ${formData.company || 'Individual'}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:business@tagmybike.com?subject=${subject}&body=${body}`;
        setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 500);
    };

    const inputStyle = {
        width: '100%', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px',
        color: 'white', fontSize: '0.95rem', outline: 'none', transition: 'all 0.2s ease', fontFamily: 'inherit'
    };

    const contactItems = [
        { icon: Building2, label: t('contactPage.companyName'), value: t('contactPage.companyName') },
        { icon: MapPin, label: t('contactPage.address'), value: <>{t('contactPage.address')}<br />{t('contactPage.city')}<br />{t('contactPage.country')}</> },
        { icon: Phone, label: t('contactPage.phone'), value: '+49 1511 4087414', href: 'tel:+4915114087414' },
        { icon: Mail, label: t('contactPage.email'), value: 'business@tagmybike.com', href: 'mailto:business@tagmybike.com' },
        { icon: User, label: t('contactPage.managingDirector'), value: t('contactPage.directorName') },
        { icon: FileText, label: t('contactPage.registration'), value: <>{t('contactPage.registrationText').split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}</> }
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
            <section className="container">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            display: 'inline-block', padding: '8px 16px',
                            background: 'rgba(198, 255, 59, 0.08)', border: '1px solid rgba(198, 255, 59, 0.2)',
                            borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600',
                            color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px'
                        }}>
                            {t('contactPage.tag')}
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '20px',
                            fontFamily: 'var(--font-display)',
                            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                        }}>
                            {t('contactPage.title')}
                        </h1>
                        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
                            {t('contactPage.subtitle')}
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                        <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '36px' }}>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '24px', color: 'white', fontFamily: 'var(--font-display)' }}>
                                {t('contactPage.formTitle')}
                            </h2>
                            {isSubmitted ? (
                                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                                    <CheckCircle size={44} style={{ color: 'var(--color-primary)', marginBottom: '20px' }} />
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'white' }}>{t('contactPage.successTitle')}</h3>
                                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{t('contactPage.successText')}</p>
                                    <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', company: '', phone: '', message: '' }); }}
                                        style={{ marginTop: '20px', padding: '10px 20px', background: 'transparent', border: '1px solid rgba(198, 255, 59, 0.4)', borderRadius: '8px', color: 'var(--color-primary)', cursor: 'pointer', fontSize: '0.85rem' }}>
                                        {t('contactPage.sendAnother')}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div style={{ display: 'grid', gap: '18px' }}>
                                        {[
                                            { id: 'name', type: 'text', label: t('contactPage.name'), placeholder: t('contactPage.namePlaceholder'), required: true },
                                            { id: 'email', type: 'email', label: t('contactPage.email'), placeholder: t('contactPage.emailPlaceholder'), required: true },
                                            { id: 'company', type: 'text', label: t('contactPage.company'), placeholder: t('contactPage.companyPlaceholder') },
                                            { id: 'phone', type: 'tel', label: t('contactPage.phone'), placeholder: t('contactPage.phonePlaceholder') }
                                        ].map(field => (
                                            <div key={field.id}>
                                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>
                                                    {field.label} {field.required && '*'}
                                                </label>
                                                <input type={field.type} id={field.id} name={field.id} value={formData[field.id]} onChange={handleChange}
                                                    required={field.required} placeholder={field.placeholder} style={inputStyle}
                                                    onFocus={(e) => { e.target.style.borderColor = 'rgba(198, 255, 59, 0.4)'; }}
                                                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }} />
                                            </div>
                                        ))}
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>
                                                {t('contactPage.message')} *
                                            </label>
                                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
                                                placeholder={t('contactPage.messagePlaceholder')} rows={5}
                                                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                                                onFocus={(e) => { e.target.style.borderColor = 'rgba(198, 255, 59, 0.4)'; }}
                                                onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }} />
                                        </div>
                                        <button type="submit" className="btn-primary" disabled={isSubmitting}
                                            style={{ width: '100%', padding: '14px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: isSubmitting ? 0.7 : 1 }}>
                                            <Send size={16} /> {isSubmitting ? t('contactPage.submitting') : t('contactPage.submit')}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '36px' }}>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '24px', color: 'white', fontFamily: 'var(--font-display)' }}>
                                {t('contactPage.infoTitle')}
                            </h2>
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {contactItems.map((item, i) => (
                                    <div key={i} style={{
                                        display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px',
                                        background: 'rgba(255, 255, 255, 0.02)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.04)'
                                    }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '8px',
                                            background: 'rgba(198, 255, 59, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                        }}>
                                            <item.icon size={16} style={{ color: 'var(--color-primary)' }} />
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '500' }}>
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a href={item.href} style={{ fontSize: '0.9rem', color: 'white', fontWeight: '500', textDecoration: 'none' }}>{item.value}</a>
                                            ) : (
                                                <p style={{ fontSize: '0.9rem', color: 'white', fontWeight: '500', lineHeight: 1.5, margin: 0 }}>{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{
                                marginTop: '24px', padding: '18px', background: 'rgba(198, 255, 59, 0.04)',
                                borderRadius: '10px', border: '1px solid rgba(198, 255, 59, 0.12)', textAlign: 'center'
                            }}>
                                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontSize: '0.9rem' }}>{t('contactPage.directContact')}</p>
                                <a href="mailto:business@tagmybike.com" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}>
                                    business@tagmybike.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
