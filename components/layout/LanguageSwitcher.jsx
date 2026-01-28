import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'var(--color-text-primary)',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
            }}
            className="lang-switcher"
        >
            <span style={{ opacity: i18n.language === 'en' ? 1 : 0.5 }}>EN</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ opacity: i18n.language === 'de' ? 1 : 0.5 }}>DE</span>
        </button>
    );
};

export default LanguageSwitcher;
