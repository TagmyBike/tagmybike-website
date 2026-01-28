import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Building2, User, FileText, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact Request from ${formData.name} - ${formData.company || 'Individual'}`);
        const body = encodeURIComponent(
            `New Contact Request from TagMyBike Website

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

---
This message was sent via the TagMyBike Contact Form.`
        );

        // Open mailto link - this will open the user's default email client
        const mailtoLink = `mailto:business@tagmybike.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;

        // Show success message after a short delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 500);
    };

    const contactItems = [
        {
            icon: Building2,
            label: 'Company',
            value: 'BOOST BOOOST SE'
        },
        {
            icon: MapPin,
            label: 'Administrative Office',
            value: (
                <>
                    Großenbaumer Str. 252<br />
                    45479 Mülheim an der Ruhr<br />
                    Germany
                </>
            )
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+49 1511 4087414',
            href: 'tel:+4915114087414'
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'business@tagmybike.com',
            href: 'mailto:business@tagmybike.com'
        },
        {
            icon: User,
            label: 'Managing Director',
            value: 'Peter Cromm'
        },
        {
            icon: FileText,
            label: 'Registration',
            value: (
                <>
                    Registry Court: AG Duisburg<br />
                    Registration Number: HRB 37045
                </>
            )
        }
    ];

    const inputStyle = {
        width: '100%',
        padding: '14px 18px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '10px',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        fontSize: '0.9rem',
        fontWeight: '500',
        color: 'var(--color-text-secondary)'
    };

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
            <section className="container">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: 'rgba(198, 255, 59, 0.1)',
                            border: '1px solid rgba(198, 255, 59, 0.3)',
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            color: 'var(--color-primary)',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Contact Sales
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: '700',
                            marginBottom: '20px',
                            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Get in Touch
                        </h1>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.7,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Ready to transform your fleet management? Contact our sales team for a personalized demo and pricing.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '40px'
                    }}>
                        {/* Contact Form */}
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '20px',
                            padding: '35px',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                marginBottom: '25px',
                                color: 'white'
                            }}>
                                Send us a Message
                            </h2>

                            {isSubmitted ? (
                                <div style={{
                                    textAlign: 'center',
                                    padding: '40px 20px'
                                }}>
                                    <CheckCircle size={48} style={{ color: 'var(--color-primary)', marginBottom: '20px' }} />
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'white' }}>
                                        Email Client Opened!
                                    </h3>
                                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                        Please send the email from your email client to complete your request.
                                        We'll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({ name: '', email: '', company: '', phone: '', message: '' });
                                        }}
                                        style={{
                                            marginTop: '20px',
                                            padding: '10px 20px',
                                            background: 'transparent',
                                            border: '1px solid rgba(198, 255, 59, 0.5)',
                                            borderRadius: '8px',
                                            color: 'var(--color-primary)',
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div style={{ display: 'grid', gap: '20px' }}>
                                        {/* Name */}
                                        <div>
                                            <label style={labelStyle} htmlFor="name">Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your full name"
                                                style={inputStyle}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = 'var(--color-primary)';
                                                    e.target.style.background = 'rgba(198, 255, 59, 0.05)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                                }}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label style={labelStyle} htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                                style={inputStyle}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = 'var(--color-primary)';
                                                    e.target.style.background = 'rgba(198, 255, 59, 0.05)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                                }}
                                            />
                                        </div>

                                        {/* Company */}
                                        <div>
                                            <label style={labelStyle} htmlFor="company">Company</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your company name"
                                                style={inputStyle}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = 'var(--color-primary)';
                                                    e.target.style.background = 'rgba(198, 255, 59, 0.05)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                                }}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label style={labelStyle} htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+49 123 456789"
                                                style={inputStyle}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = 'var(--color-primary)';
                                                    e.target.style.background = 'rgba(198, 255, 59, 0.05)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                                }}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label style={labelStyle} htmlFor="message">Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                placeholder="Tell us about your needs..."
                                                rows={5}
                                                style={{
                                                    ...inputStyle,
                                                    resize: 'vertical',
                                                    minHeight: '120px'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = 'var(--color-primary)';
                                                    e.target.style.background = 'rgba(198, 255, 59, 0.05)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                                }}
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="btn-primary btn-glow"
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                padding: '16px',
                                                fontSize: '1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                cursor: isSubmitting ? 'wait' : 'pointer',
                                                opacity: isSubmitting ? 0.7 : 1
                                            }}
                                        >
                                            <Send size={18} />
                                            {isSubmitting ? 'Opening Email...' : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Contact Info Card */}
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '20px',
                            padding: '35px',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                marginBottom: '25px',
                                color: 'white'
                            }}>
                                Contact Information
                            </h2>

                            <div style={{
                                display: 'grid',
                                gap: '20px'
                            }}>
                                {contactItems.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '14px',
                                            padding: '14px',
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(198, 255, 59, 0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(198, 255, 59, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                        }}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(135deg, rgba(198, 255, 59, 0.15), rgba(198, 255, 59, 0.05))',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <item.icon size={18} style={{ color: 'var(--color-primary)' }} />
                                        </div>
                                        <div>
                                            <p style={{
                                                fontSize: '0.8rem',
                                                color: 'var(--color-text-secondary)',
                                                marginBottom: '4px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                fontWeight: '500'
                                            }}>
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    style={{
                                                        fontSize: '0.95rem',
                                                        color: 'white',
                                                        fontWeight: '500',
                                                        textDecoration: 'none',
                                                        transition: 'color 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p style={{
                                                    fontSize: '0.95rem',
                                                    color: 'white',
                                                    fontWeight: '500',
                                                    lineHeight: 1.5,
                                                    margin: 0
                                                }}>
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Direct Contact CTA */}
                            <div style={{
                                marginTop: '30px',
                                padding: '20px',
                                background: 'linear-gradient(135deg, rgba(198, 255, 59, 0.1), rgba(198, 255, 59, 0.02))',
                                borderRadius: '12px',
                                border: '1px solid rgba(198, 255, 59, 0.2)',
                                textAlign: 'center'
                            }}>
                                <p style={{
                                    color: 'white',
                                    marginBottom: '12px',
                                    fontSize: '0.95rem'
                                }}>
                                    Prefer to reach out directly?
                                </p>
                                <a
                                    href="mailto:business@tagmybike.com"
                                    style={{
                                        color: 'var(--color-primary)',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                        fontSize: '1rem'
                                    }}
                                >
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
