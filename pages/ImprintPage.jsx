import React from 'react';
import { useTranslation } from 'react-i18next';

const ImprintPage = () => {
    const { t } = useTranslation();

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <section className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '40px' }}>{t('imprint.title')}</h1>

                    <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                        <p style={{ marginBottom: '24px' }}>
                            <strong>BOOOST E-Mobility Solutions GmbH</strong><br />
                            Großenbaumer Straße 252<br />
                            45479 Mülheim an der Ruhr<br />
                            Deutschland
                        </p>

                        <p style={{ marginBottom: '24px' }}>
                            Tel.: +4915114087414<br />
                            E-Mail: <a href="mailto:business@tagmybike.com" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>business@tagmybike.com</a>
                        </p>

                        <p style={{ marginBottom: '24px' }}>
                            Registergericht: AG Duisburg<br />
                            Geschäftsführer: Peter Cromm
                        </p>

                        <p style={{ marginBottom: '24px' }}>
                            WEEE-Reg.-Nr. DE 62611327
                        </p>

                        <p style={{ marginBottom: '24px' }}>
                            Informationspflichten gemäß §18 Abs. 4 Satz 3 ElektroG:<br />
                            <a href="https://www.bmuv.de/themen/wasser-ressourcen-abfall/kreislaufwirtschaft/statistiken/elektro-und-elektronikaltgeraete" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', wordBreak: 'break-all' }}>https://www.bmuv.de/themen/wasser-ressourcen-abfall/kreislaufwirtschaft/statistiken/elektro-und-elektronikaltgeraete</a>
                        </p>

                        <p style={{ marginBottom: '24px' }}>
                            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                        </p>

                        <p style={{ marginBottom: '24px' }}>
                            <strong>Hinweis gemäß § 36 VSBG:</strong><br />
                            Die BOOOST E-Mobility Solutions GmbH ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>

                        <p style={{ marginTop: '40px', fontSize: '0.9rem', opacity: 0.7 }}>
                            Stand: 03.12.2025, 21:04:08 Uhr
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImprintPage;
