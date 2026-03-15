import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="snap-section hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url(/images/bike-theft.jpg)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: 0.15, zIndex: 0
            }} />
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(5,8,20,0.4) 0%, rgba(5,8,20,0.7) 50%, #050814 100%)',
                zIndex: 0
            }} />

            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
                {[0, 1].map((i) => (
                    <div key={i} style={{
                        position: 'absolute', width: `${10 + i * 6}px`, height: `${10 + i * 6}px`,
                        borderRadius: '50%', background: `rgba(198, 255, 59, ${0.04 + i * 0.02})`,
                        left: `${20 + i * 50}%`, top: `${30 + i * 20}%`,
                        animation: `floatEnhanced ${8 + i * 4}s ease-in-out infinite`, animationDelay: `${i * 2}s`
                    }} />
                ))}
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{
                        opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '16px',
                                opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                            }}>
                                <img src="/images/apple-find-my.png" alt="Works with Apple Find My" style={{ height: 'clamp(28px, 4vw, 36px)', borderRadius: '6px' }} />
                                <img src="/images/works-with-android.jpeg" alt="Works with Android" style={{ height: 'clamp(28px, 4vw, 36px)', borderRadius: '6px' }} />
                            </div>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginTop: '32px', marginBottom: '24px',
                            lineHeight: 1.1, fontFamily: 'var(--font-display)',
                            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
                        }}>
                            {t('hero.title').split('\n').map((line, i) => (
                                <span key={i} style={{ display: 'block' }}>{line}</span>
                            ))}
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--color-text-secondary)', maxWidth: '560px',
                            margin: '0 auto clamp(28px, 5vw, 40px)', lineHeight: 1.7,
                            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
                        }}>
                            {t('hero.subtitle')}
                        </p>

                        <div style={{
                            display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center',
                            opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s'
                        }}>
                            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                style={{ padding: '14px 32px', fontSize: '1rem' }}>
                                {t('hero.cta')} <ChevronRight size={18} style={{ marginLeft: '6px' }} />
                            </button>
                            <button className="btn-outline" onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                                style={{ padding: '14px 28px', fontSize: '1rem' }}>
                                {t('hero.secondaryCta')}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
