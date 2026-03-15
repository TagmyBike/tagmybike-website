import React from 'react';
import { useTranslation } from 'react-i18next';

const ImprintPage = () => {
    const { t } = useTranslation();

    return (
        <div style={{ paddingTop: 'clamp(90px, 12vw, 120px)', paddingBottom: 'clamp(48px, 8vw, 80px)' }}>
            <section className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: 'clamp(24px, 5vw, 40px)', fontFamily: 'var(--font-display)' }}>{t('imprint.title')}</h1>
                    <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                        <p style={{ marginBottom: '24px' }}>
                            <strong style={{ color: 'white' }}>BOOOST E-Mobility Solutions GmbH</strong><br />
                            Gro&szlig;enbaumer Stra&szlig;e 252<br />
                            45479 M&uuml;lheim an der Ruhr<br />
                            Deutschland
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            Tel.: +4915114087414<br />
                            E-Mail: <a href="mailto:business@tagmybike.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>business@tagmybike.com</a>
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            Registergericht: AG Duisburg<br />
                            Gesch&auml;ftsf&uuml;hrer: Peter Cromm
                        </p>
                        <p style={{ marginBottom: '24px' }}>WEEE-Reg.-Nr. DE 62611327</p>
                        <p style={{ marginBottom: '24px' }}>
                            Informationspflichten gem&auml;&szlig; &sect;18 Abs. 4 Satz 3 ElektroG:<br />
                            <a href="https://www.bmuv.de/themen/wasser-ressourcen-abfall/kreislaufwirtschaft/statistiken/elektro-und-elektronikaltgeraete" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', wordBreak: 'break-all' }}>
                                https://www.bmuv.de/themen/wasser-ressourcen-abfall/kreislaufwirtschaft/statistiken/elektro-und-elektronikaltgeraete
                            </a>
                        </p>
                        <p style={{ marginBottom: '24px' }}>
                            <strong style={{ color: 'white' }}>Hinweis gem&auml;&szlig; &sect; 36 VSBG:</strong><br />
                            Die BOOOST E-Mobility Solutions GmbH ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                        <p style={{ marginTop: '40px', fontSize: '0.85rem', opacity: 0.5 }}>Stand: 03.12.2025</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImprintPage;
