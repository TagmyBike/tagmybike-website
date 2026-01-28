import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Shield, Smartphone, Zap } from 'lucide-react';
import heroVisual from '../../assets/hero-visual.png';

// Animated counter component
const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const numTarget = parseFloat(target);

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(numTarget * easeOut);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isVisible, target, duration]);

    const display = target.includes('.')
        ? count.toFixed(1)
        : Math.floor(count);

    return <span ref={ref}>{display}{suffix}</span>;
};

// Floating particles component
const FloatingParticles = () => {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1
        }}>
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: `${8 + i * 4}px`,
                        height: `${8 + i * 4}px`,
                        borderRadius: '50%',
                        background: `rgba(198, 255, 59, ${0.05 + i * 0.02})`,
                        left: `${10 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        animation: `floatEnhanced ${6 + i * 2}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`
                    }}
                />
            ))}
        </div>
    );
};

const Hero = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="snap-section hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Animated gradient background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 30% 20%, rgba(198, 255, 59, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(47, 141, 255, 0.06) 0%, transparent 50%)',
                animation: 'gradientShift 15s ease infinite',
                backgroundSize: '200% 200%',
                zIndex: 0
            }} />

            <FloatingParticles />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-grid">
                    <div className="col-span-6 hero-content">
                        <div style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                        }}>
                            <div className="platform-pill" style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                            }}>
                                <span className="platform-badge">
                                    <Smartphone size={16} />
                                    {t('badges.iosAndroid')}
                                </span>
                                <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.2)' }}></div>
                                <span className="platform-badge">
                                    <Shield size={16} />
                                    {t('badges.enterprise')}
                                </span>
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                marginTop: 'var(--spacing-lg)',
                                marginBottom: 'var(--spacing-md)',
                                lineHeight: 1.1,
                                background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
                            }}>
                                {t('hero.title').split('\n').map((line, i) => (
                                    <span key={i} style={{ display: 'block' }}>{line}</span>
                                ))}
                            </h1>

                            <p style={{
                                fontSize: '1.25rem',
                                color: 'var(--color-text-secondary)',
                                maxWidth: '540px',
                                marginBottom: 'var(--spacing-xl)',
                                lineHeight: 1.6,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
                            }}>
                                {t('hero.subtitle')}
                            </p>

                            <div style={{
                                display: 'flex',
                                gap: 'var(--spacing-md)',
                                flexWrap: 'wrap',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s'
                            }}>
                                <button
                                    className="btn-primary btn-glow"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    style={{
                                        animation: isVisible ? 'glowPulse 3s ease-in-out infinite' : 'none',
                                        animationDelay: '1s'
                                    }}
                                >
                                    {t('hero.cta')}
                                    <ChevronRight size={20} style={{ marginLeft: '8px' }} />
                                </button>
                                <button
                                    className="btn-outline"
                                    onClick={() => document.getElementById('branding')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    {t('hero.secondaryCta')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-6 hero-visual">
                        <div className="hero-image-container bg-glow" style={{
                            animation: 'floatEnhanced 6s ease-in-out infinite'
                        }}>
                            <img
                                src={heroVisual}
                                alt="TagMyBike Platform"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                                    transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

