import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Database, Eye, Lock, Globe, Mail, Users, Clock, Settings, AlertTriangle } from 'lucide-react';

const PrivacyPage = () => {
    const { i18n } = useTranslation();
    const isGerman = i18n.language === 'de';

    const lastUpdated = "28. Januar 2026";

    const sectionStyle = {
        marginBottom: '40px'
    };

    const headingStyle = {
        fontSize: '1.3rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    };

    const paragraphStyle = {
        color: 'var(--color-text-secondary)',
        lineHeight: 1.8,
        marginBottom: '16px'
    };

    const listStyle = {
        color: 'var(--color-text-secondary)',
        lineHeight: 1.8,
        paddingLeft: '24px',
        marginBottom: '16px'
    };

    const content = isGerman ? {
        title: "Datenschutzerklärung",
        subtitle: "Zuletzt aktualisiert: " + lastUpdated,
        sections: [
            {
                icon: Shield,
                title: "1. Verantwortlicher",
                content: `Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:

BOOST BOOOST SE
Großenbaumer Str. 252
45479 Mülheim an der Ruhr
Deutschland

Telefon: +49 1511 4087414
E-Mail: business@tagmybike.com
Geschäftsführender Direktor: Peter Cromm

Für Datenschutzanfragen wenden Sie sich bitte an: privacy@tagmybike.com`
            },
            {
                icon: Database,
                title: "2. Erhebung und Verarbeitung personenbezogener Daten",
                content: `Wir erheben und verarbeiten personenbezogene Daten in folgenden Fällen:`,
                list: [
                    "Beim Besuch unserer Website (technische Daten, IP-Adresse, Zugriffszeit)",
                    "Bei der Registrierung eines Benutzerkontos (Name, E-Mail, Unternehmensdaten)",
                    "Bei der Nutzung unserer GPS-Tracking-Dienste (Standortdaten, Geräteinformationen)",
                    "Bei der Kontaktaufnahme über Formulare oder E-Mail",
                    "Bei Abschluss eines Vertrags (Rechnungs- und Zahlungsdaten)"
                ],
                additionalContent: `Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a (Einwilligung), lit. b (Vertragserfüllung), lit. c (rechtliche Verpflichtung) oder lit. f (berechtigte Interessen) DSGVO.`
            },
            {
                icon: Eye,
                title: "3. GPS- und Standortdaten",
                content: `Bei der Nutzung unserer TagMyBike-Dienste werden GPS-Standortdaten der mit Trackern ausgestatteten Fahrzeuge erhoben und verarbeitet. Diese Daten umfassen:`,
                list: [
                    "GPS-Koordinaten (Längen- und Breitengrad)",
                    "Zeitstempel der Standortübermittlung",
                    "Bewegungshistorie und Routendaten",
                    "Gerätestatus und Batterieinformationen"
                ],
                additionalContent: `Diese Daten werden verarbeitet, um die vertraglichen Tracking- und Wiederbeschaffungsdienste zu erbringen. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).

Für Unternehmenskunden: Sie sind als Verantwortlicher für die Einhaltung der datenschutzrechtlichen Vorgaben gegenüber Ihren Mitarbeitern oder Nutzern verantwortlich, insbesondere für die Einholung erforderlicher Einwilligungen.`
            },
            {
                icon: Users,
                title: "4. Weitergabe von Daten an Dritte",
                content: `Wir geben Ihre personenbezogenen Daten nur in folgenden Fällen an Dritte weiter:`,
                list: [
                    "Zur Vertragserfüllung erforderliche Dienstleister (z.B. Hosting, Zahlungsabwicklung)",
                    "Bei gesetzlicher Verpflichtung oder behördlicher Anordnung",
                    "Zur Durchsetzung unserer Rechte oder zum Schutz vor Missbrauch",
                    "Im Rahmen von Unternehmenstransaktionen (Fusion, Übernahme)"
                ],
                additionalContent: `Alle Auftragsverarbeiter sind vertraglich zur Einhaltung der DSGVO verpflichtet.`
            },
            {
                icon: Globe,
                title: "5. Internationale Datenübermittlung",
                content: `Wir verarbeiten Ihre Daten grundsätzlich innerhalb der Europäischen Union. Soweit eine Übermittlung in Drittländer erfolgt, stellen wir durch geeignete Garantien (Standardvertragsklauseln, Angemessenheitsbeschlüsse) ein angemessenes Datenschutzniveau sicher.`
            },
            {
                icon: Clock,
                title: "6. Speicherdauer",
                content: `Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist:`,
                list: [
                    "Vertragsdaten: Für die Dauer des Vertragsverhältnisses und darüber hinaus gemäß gesetzlicher Aufbewahrungsfristen (in der Regel 6-10 Jahre)",
                    "Standortdaten: Entsprechend der vertraglichen Vereinbarung, standardmäßig 12 Monate",
                    "Kontaktdaten: Bis zur Erledigung der Anfrage oder Widerruf",
                    "Website-Logdaten: Maximal 7 Tage"
                ]
            },
            {
                icon: Lock,
                title: "7. Ihre Rechte nach der DSGVO",
                content: `Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:`,
                list: [
                    "Auskunftsrecht (Art. 15 DSGVO): Recht auf Bestätigung und Auskunft über verarbeitete Daten",
                    "Berichtigungsrecht (Art. 16 DSGVO): Recht auf Berichtigung unrichtiger Daten",
                    "Recht auf Löschung (Art. 17 DSGVO): Recht auf Löschung unter bestimmten Voraussetzungen",
                    "Recht auf Einschränkung (Art. 18 DSGVO): Recht auf Einschränkung der Verarbeitung",
                    "Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Recht auf Erhalt der Daten in maschinenlesbarem Format",
                    "Widerspruchsrecht (Art. 21 DSGVO): Recht auf Widerspruch gegen bestimmte Verarbeitungen",
                    "Widerrufsrecht (Art. 7 Abs. 3 DSGVO): Recht auf jederzeitigen Widerruf einer Einwilligung"
                ],
                additionalContent: `Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: privacy@tagmybike.com`
            },
            {
                icon: AlertTriangle,
                title: "8. Beschwerderecht",
                content: `Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:

Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
Kavalleriestraße 2-4
40213 Düsseldorf
Telefon: +49 211 38424-0
E-Mail: poststelle@ldi.nrw.de`
            },
            {
                icon: Settings,
                title: "9. Cookies und Tracking-Technologien",
                content: `Unsere Website verwendet Cookies und ähnliche Technologien:`,
                list: [
                    "Technisch notwendige Cookies: Für die Grundfunktionen der Website",
                    "Analyse-Cookies: Zur Verbesserung unseres Angebots (nur mit Einwilligung)",
                    "Marketing-Cookies: Für personalisierte Werbung (nur mit Einwilligung)"
                ],
                additionalContent: `Sie können Ihre Cookie-Einstellungen jederzeit über unseren Cookie-Banner anpassen oder in Ihren Browser-Einstellungen Cookies deaktivieren.`
            },
            {
                title: "10. Datensicherheit",
                content: `Wir setzen umfangreiche technische und organisatorische Maßnahmen zum Schutz Ihrer Daten ein:`,
                list: [
                    "SSL/TLS-Verschlüsselung für alle Datenübertragungen",
                    "Verschlüsselte Speicherung sensibler Daten",
                    "Regelmäßige Sicherheitsaudits und Updates",
                    "Zugriffsbeschränkungen nach dem Need-to-know-Prinzip",
                    "Physische Sicherheit unserer Serverinfrastruktur"
                ]
            },
            {
                title: "11. Minderjährige",
                content: `Unsere Dienste richten sich an Unternehmen und erwachsene Nutzer. Wir erheben nicht wissentlich personenbezogene Daten von Kindern unter 16 Jahren. Falls wir Kenntnis davon erlangen, werden solche Daten unverzüglich gelöscht.`
            },
            {
                icon: Mail,
                title: "12. Kontakt und Änderungen",
                content: `Bei Fragen zum Datenschutz erreichen Sie uns unter:

E-Mail: privacy@tagmybike.com
Telefon: +49 1511 4087414

Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte rechtliche Anforderungen oder Änderungen unserer Dienste anzupassen. Die aktuelle Version ist stets auf unserer Website abrufbar.`
            }
        ]
    } : {
        title: "Privacy Policy",
        subtitle: "Last updated: January 28, 2026",
        sections: [
            {
                icon: Shield,
                title: "1. Data Controller",
                content: `The data controller within the meaning of the General Data Protection Regulation (GDPR) is:

BOOST BOOOST SE
Großenbaumer Str. 252
45479 Mülheim an der Ruhr
Germany

Phone: +49 1511 4087414
Email: business@tagmybike.com
Managing Director: Peter Cromm

For data protection inquiries, please contact: privacy@tagmybike.com`
            },
            {
                icon: Database,
                title: "2. Collection and Processing of Personal Data",
                content: `We collect and process personal data in the following cases:`,
                list: [
                    "When visiting our website (technical data, IP address, access time)",
                    "When registering a user account (name, email, company data)",
                    "When using our GPS tracking services (location data, device information)",
                    "When contacting us via forms or email",
                    "When concluding a contract (billing and payment data)"
                ],
                additionalContent: `Processing is based on Art. 6(1)(a) (consent), Art. 6(1)(b) (contract performance), Art. 6(1)(c) (legal obligation), or Art. 6(1)(f) (legitimate interests) GDPR.`
            },
            {
                icon: Eye,
                title: "3. GPS and Location Data",
                content: `When using our TagMyBike services, GPS location data of vehicles equipped with trackers is collected and processed. This data includes:`,
                list: [
                    "GPS coordinates (latitude and longitude)",
                    "Timestamps of location transmissions",
                    "Movement history and route data",
                    "Device status and battery information"
                ],
                additionalContent: `This data is processed to provide the contractual tracking and recovery services. The legal basis is Art. 6(1)(b) GDPR (contract performance).

For enterprise customers: As data controllers, you are responsible for compliance with data protection regulations towards your employees or users, particularly for obtaining necessary consents.`
            },
            {
                icon: Users,
                title: "4. Data Sharing with Third Parties",
                content: `We only share your personal data with third parties in the following cases:`,
                list: [
                    "Service providers necessary for contract fulfillment (e.g., hosting, payment processing)",
                    "In case of legal obligation or official order",
                    "To enforce our rights or protect against misuse",
                    "In the context of corporate transactions (merger, acquisition)"
                ],
                additionalContent: `All processors are contractually obligated to comply with GDPR.`
            },
            {
                icon: Globe,
                title: "5. International Data Transfers",
                content: `We generally process your data within the European Union. If a transfer to third countries occurs, we ensure an adequate level of data protection through appropriate safeguards (Standard Contractual Clauses, adequacy decisions).`
            },
            {
                icon: Clock,
                title: "6. Data Retention",
                content: `We store your personal data only for as long as necessary for the respective purposes:`,
                list: [
                    "Contract data: For the duration of the contractual relationship and beyond according to statutory retention periods (usually 6-10 years)",
                    "Location data: According to contractual agreement, 12 months by default",
                    "Contact data: Until the request is resolved or revoked",
                    "Website log data: Maximum 7 days"
                ]
            },
            {
                icon: Lock,
                title: "7. Your Rights Under GDPR",
                content: `You have the following rights regarding your personal data:`,
                list: [
                    "Right of access (Art. 15 GDPR): Right to confirmation and information about processed data",
                    "Right to rectification (Art. 16 GDPR): Right to correct inaccurate data",
                    "Right to erasure (Art. 17 GDPR): Right to deletion under certain conditions",
                    "Right to restriction (Art. 18 GDPR): Right to restrict processing",
                    "Right to data portability (Art. 20 GDPR): Right to receive data in machine-readable format",
                    "Right to object (Art. 21 GDPR): Right to object to certain processing",
                    "Right to withdraw consent (Art. 7(3) GDPR): Right to withdraw consent at any time"
                ],
                additionalContent: `To exercise your rights, please contact: privacy@tagmybike.com`
            },
            {
                icon: AlertTriangle,
                title: "8. Right to Lodge a Complaint",
                content: `You have the right to lodge a complaint with a data protection supervisory authority about the processing of your personal data. The supervisory authority responsible for us is:

State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia
Kavalleriestraße 2-4
40213 Düsseldorf, Germany
Phone: +49 211 38424-0
Email: poststelle@ldi.nrw.de`
            },
            {
                icon: Settings,
                title: "9. Cookies and Tracking Technologies",
                content: `Our website uses cookies and similar technologies:`,
                list: [
                    "Technically necessary cookies: For basic website functions",
                    "Analytics cookies: To improve our services (only with consent)",
                    "Marketing cookies: For personalized advertising (only with consent)"
                ],
                additionalContent: `You can adjust your cookie settings at any time via our cookie banner or disable cookies in your browser settings.`
            },
            {
                title: "10. Data Security",
                content: `We implement comprehensive technical and organizational measures to protect your data:`,
                list: [
                    "SSL/TLS encryption for all data transfers",
                    "Encrypted storage of sensitive data",
                    "Regular security audits and updates",
                    "Access restrictions based on need-to-know principle",
                    "Physical security of our server infrastructure"
                ]
            },
            {
                title: "11. Minors",
                content: `Our services are intended for businesses and adult users. We do not knowingly collect personal data from children under 16. If we become aware of such data, it will be deleted immediately.`
            },
            {
                icon: Mail,
                title: "12. Contact and Changes",
                content: `For data protection questions, please contact us at:

Email: privacy@tagmybike.com
Phone: +49 1511 4087414

We reserve the right to adapt this Privacy Policy as needed to comply with changed legal requirements or changes to our services. The current version is always available on our website.`
            }
        ]
    };

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh' }}>
            <section className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
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
                            {isGerman ? 'Datenschutz' : 'Privacy'}
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            fontWeight: '700',
                            marginBottom: '16px',
                            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {content.title}
                        </h1>
                        <p style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.95rem'
                        }}>
                            {content.subtitle}
                        </p>
                    </div>

                    {/* GDPR Badge */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '40px'
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '12px 20px',
                            background: 'rgba(198, 255, 59, 0.1)',
                            border: '1px solid rgba(198, 255, 59, 0.3)',
                            borderRadius: '12px'
                        }}>
                            <Shield size={20} style={{ color: 'var(--color-primary)' }} />
                            <span style={{ color: 'white', fontWeight: '600' }}>
                                {isGerman ? 'DSGVO-konform' : 'GDPR Compliant'}
                            </span>
                        </div>
                    </div>

                    {/* Content Card */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '20px',
                        padding: '40px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        {content.sections.map((section, index) => (
                            <div key={index} style={sectionStyle}>
                                <h2 style={headingStyle}>
                                    {section.icon && <section.icon size={20} style={{ color: 'var(--color-primary)' }} />}
                                    {section.title}
                                </h2>
                                <p style={{
                                    ...paragraphStyle,
                                    whiteSpace: 'pre-line'
                                }}>
                                    {section.content}
                                </p>
                                {section.list && (
                                    <ul style={listStyle}>
                                        {section.list.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {section.additionalContent && (
                                    <p style={{
                                        ...paragraphStyle,
                                        whiteSpace: 'pre-line'
                                    }}>
                                        {section.additionalContent}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
