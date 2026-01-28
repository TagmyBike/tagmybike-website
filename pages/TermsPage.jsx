import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Scale, Shield, FileText, AlertCircle, Globe, Mail } from 'lucide-react';

const TermsPage = () => {
    const { t, i18n } = useTranslation();
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
        title: "Allgemeine Geschäftsbedingungen (AGB)",
        subtitle: "Zuletzt aktualisiert: " + lastUpdated,
        sections: [
            {
                icon: FileText,
                title: "§ 1 Geltungsbereich",
                content: `Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Verträge zwischen der BOOST BOOOST SE, Großenbaumer Str. 252, 45479 Mülheim an der Ruhr, Deutschland (nachfolgend „Anbieter" oder „wir") und dem Kunden (nachfolgend „Kunde" oder „Sie") über die Nutzung der TagMyBike-Dienste, einschließlich der GPS-Tracking-Hardware, Software und zugehöriger Dienstleistungen.

Die AGB gelten ausschließlich. Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur dann Vertragsbestandteil, wenn und soweit wir ihrer Geltung ausdrücklich schriftlich zugestimmt haben.`
            },
            {
                icon: Shield,
                title: "§ 2 Leistungsbeschreibung",
                content: `Der Anbieter erbringt GPS-Tracking-Dienstleistungen für Fahrräder und andere Fahrzeuge. Der Leistungsumfang umfasst:`,
                list: [
                    "Bereitstellung von GPS-Tracking-Hardware",
                    "Zugang zur TagMyBike-Plattform und mobilen Anwendungen",
                    "Echtzeit-Standortverfolgung und Alarmierungsfunktionen",
                    "Unterstützung bei der Wiederbeschaffung gestohlener Fahrzeuge",
                    "API-Zugang für Unternehmenskunden (nach Vereinbarung)"
                ]
            },
            {
                icon: Scale,
                title: "§ 3 Vertragsschluss",
                content: `Der Vertrag kommt durch Bestellung des Kunden und Annahme durch den Anbieter zustande. Die Darstellung der Produkte auf der Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe eines Angebots dar.

Der Kunde gibt durch Abschluss des Bestellvorgangs ein verbindliches Angebot ab. Der Anbieter bestätigt den Eingang der Bestellung unverzüglich per E-Mail. Diese Eingangsbestätigung stellt noch keine Annahme des Angebots dar. Der Vertrag kommt erst durch die Versandbestätigung oder durch Aktivierung des Dienstes zustande.`
            },
            {
                title: "§ 4 Nutzungsrechte und Pflichten",
                content: `Der Kunde erhält ein nicht-ausschließliches, nicht übertragbares Recht zur Nutzung der TagMyBike-Dienste gemäß diesen AGB.

Der Kunde verpflichtet sich:`,
                list: [
                    "Die Dienste nur für rechtmäßige Zwecke zu nutzen",
                    "Seine Zugangsdaten geheim zu halten und vor unbefugtem Zugriff zu schützen",
                    "Den Anbieter unverzüglich über den Verlust von Zugangsdaten zu informieren",
                    "Keine Manipulationen an der Hardware vorzunehmen",
                    "Die Dienste nicht für die Überwachung Dritter ohne deren Einwilligung zu nutzen"
                ]
            },
            {
                title: "§ 5 Preise und Zahlungsbedingungen",
                content: `Es gelten die zum Zeitpunkt der Bestellung auf der Website angegebenen Preise. Alle Preise verstehen sich zuzüglich der jeweils gültigen gesetzlichen Mehrwertsteuer, sofern nicht ausdrücklich anders angegeben.

Für Unternehmenskunden gelten die individuell vereinbarten Zahlungsbedingungen. Sofern nicht anders vereinbart, sind Rechnungen innerhalb von 30 Tagen nach Rechnungsstellung ohne Abzug zu begleichen.

Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in gesetzlicher Höhe zu berechnen.`
            },
            {
                title: "§ 6 Verfügbarkeit und Service Level",
                content: `Der Anbieter bemüht sich um eine Verfügbarkeit der TagMyBike-Plattform von 99,9% im Jahresdurchschnitt. Die Verfügbarkeit bezieht sich auf die Erreichbarkeit der Server und schließt geplante Wartungsarbeiten sowie Umstände außerhalb des Einflussbereichs des Anbieters aus.

Geplante Wartungsarbeiten werden nach Möglichkeit vorab angekündigt und in Zeiten geringer Nutzung durchgeführt.`
            },
            {
                title: "§ 7 Gewährleistung und Haftungsbeschränkung",
                content: `Für die Hardware gelten die gesetzlichen Gewährleistungsrechte. Die Gewährleistungsfrist beträgt für Unternehmer ein Jahr ab Lieferung, für Verbraucher zwei Jahre ab Lieferung.

Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.

Für leicht fahrlässig verursachte Schäden haftet der Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht. In diesem Fall ist die Haftung auf den typischen, vorhersehbaren Schaden begrenzt.

Die Haftung für Datenverlust wird auf den typischen Wiederherstellungsaufwand beschränkt, der bei regelmäßiger und gefahrentsprechender Anfertigung von Sicherungskopien eingetreten wäre.`
            },
            {
                icon: AlertCircle,
                title: "§ 8 Datenschutz",
                content: `Der Anbieter verarbeitet personenbezogene Daten des Kunden nur im Rahmen der geltenden datenschutzrechtlichen Bestimmungen. Einzelheiten zur Datenverarbeitung entnehmen Sie bitte unserer Datenschutzerklärung.

Bei der Nutzung der GPS-Tracking-Dienste werden Standortdaten erhoben und verarbeitet. Der Kunde ist verpflichtet, alle erforderlichen Einwilligungen von betroffenen Personen einzuholen, sofern dies rechtlich erforderlich ist.`
            },
            {
                title: "§ 9 Vertragslaufzeit und Kündigung",
                content: `Der Vertrag wird für die vereinbarte Laufzeit geschlossen. Sofern nicht anders vereinbart, verlängert sich der Vertrag automatisch um den ursprünglichen Zeitraum, wenn er nicht mit einer Frist von 30 Tagen zum Ende der Laufzeit gekündigt wird.

Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

Nach Beendigung des Vertrags wird der Zugang zu den Diensten deaktiviert. Der Kunde hat die Möglichkeit, seine Daten vor Vertragsende zu exportieren.`
            },
            {
                icon: Globe,
                title: "§ 10 Anwendbares Recht und Gerichtsstand",
                content: `Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.

Für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag wird als ausschließlicher Gerichtsstand Duisburg vereinbart, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.`
            },
            {
                title: "§ 11 Schlussbestimmungen",
                content: `Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame Bestimmung wird durch eine wirksame Bestimmung ersetzt, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.

Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses.`
            },
            {
                icon: Mail,
                title: "§ 12 Kontakt",
                content: `BOOST BOOOST SE
Großenbaumer Str. 252
45479 Mülheim an der Ruhr
Deutschland

Telefon: +49 1511 4087414
E-Mail: business@tagmybike.com

Geschäftsführender Direktor: Peter Cromm
Registergericht: AG Duisburg
Registernummer: HRB 37045`
            }
        ]
    } : {
        title: "Terms of Service",
        subtitle: "Last updated: January 28, 2026",
        sections: [
            {
                icon: FileText,
                title: "1. Scope of Application",
                content: `These Terms of Service (hereinafter "Terms") govern all contracts between BOOST BOOOST SE, Großenbaumer Str. 252, 45479 Mülheim an der Ruhr, Germany (hereinafter "Provider" or "we") and the Customer (hereinafter "Customer" or "you") regarding the use of TagMyBike services, including GPS tracking hardware, software, and related services.

These Terms apply exclusively. Any deviating, conflicting, or supplementary general terms and conditions of the Customer shall only become part of the contract if and insofar as we have expressly agreed to their validity in writing.`
            },
            {
                icon: Shield,
                title: "2. Service Description",
                content: `The Provider offers GPS tracking services for bicycles and other vehicles. The scope of services includes:`,
                list: [
                    "Provision of GPS tracking hardware",
                    "Access to the TagMyBike platform and mobile applications",
                    "Real-time location tracking and alerting features",
                    "Support for recovery of stolen vehicles",
                    "API access for enterprise customers (by agreement)"
                ]
            },
            {
                icon: Scale,
                title: "3. Contract Formation",
                content: `The contract is formed upon the Customer's order and acceptance by the Provider. The presentation of products on the website does not constitute a legally binding offer, but rather an invitation to submit an offer.

By completing the order process, the Customer submits a binding offer. The Provider confirms receipt of the order immediately by e-mail. This acknowledgment of receipt does not constitute acceptance of the offer. The contract is only concluded upon shipping confirmation or activation of the service.`
            },
            {
                title: "4. Usage Rights and Obligations",
                content: `The Customer receives a non-exclusive, non-transferable right to use the TagMyBike services in accordance with these Terms.

The Customer agrees to:`,
                list: [
                    "Use the services only for lawful purposes",
                    "Keep access credentials confidential and protect them from unauthorized access",
                    "Inform the Provider immediately of any loss of access credentials",
                    "Not manipulate the hardware",
                    "Not use the services to monitor third parties without their consent"
                ]
            },
            {
                title: "5. Prices and Payment Terms",
                content: `The prices stated on the website at the time of the order apply. All prices are exclusive of applicable statutory VAT unless expressly stated otherwise.

For enterprise customers, individually agreed payment terms apply. Unless otherwise agreed, invoices are due within 30 days of the invoice date without deduction.

In case of late payment, the Provider is entitled to charge default interest at the statutory rate.`
            },
            {
                title: "6. Availability and Service Level",
                content: `The Provider strives for an availability of the TagMyBike platform of 99.9% on an annual average. Availability refers to server accessibility and excludes scheduled maintenance and circumstances beyond the Provider's control.

Scheduled maintenance will be announced in advance where possible and carried out during periods of low usage.`
            },
            {
                title: "7. Warranty and Limitation of Liability",
                content: `The statutory warranty rights apply to the hardware. The warranty period is one year from delivery for businesses and two years from delivery for consumers.

The Provider is fully liable for damages arising from injury to life, body, or health, as well as for damages caused intentionally or through gross negligence.

For damages caused by slight negligence, the Provider is only liable in the event of a breach of a material contractual obligation. In such cases, liability is limited to typical, foreseeable damages.

Liability for data loss is limited to the typical recovery effort that would have occurred with regular and appropriate backup copies.`
            },
            {
                icon: AlertCircle,
                title: "8. Data Protection",
                content: `The Provider processes the Customer's personal data only within the framework of applicable data protection regulations. Please refer to our Privacy Policy for details on data processing.

When using the GPS tracking services, location data is collected and processed. The Customer is obligated to obtain all necessary consents from affected individuals where legally required.`
            },
            {
                title: "9. Contract Term and Termination",
                content: `The contract is concluded for the agreed term. Unless otherwise agreed, the contract is automatically renewed for the original period if it is not terminated with 30 days' notice before the end of the term.

The right to extraordinary termination for good cause remains unaffected.

After termination of the contract, access to the services will be deactivated. The Customer has the opportunity to export their data before the contract ends.`
            },
            {
                icon: Globe,
                title: "10. Applicable Law and Jurisdiction",
                content: `The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods.

For all disputes arising from or in connection with this contract, Duisburg is agreed as the exclusive place of jurisdiction, provided that the Customer is a merchant, a legal entity under public law, or a special fund under public law.`
            },
            {
                title: "11. Final Provisions",
                content: `Should individual provisions of these Terms be or become invalid, this does not affect the validity of the remaining provisions. The invalid provision shall be replaced by a valid provision that comes closest to the economic purpose of the invalid provision.

Amendments and additions to these Terms must be in writing. This also applies to the waiver of this written form requirement.`
            },
            {
                icon: Mail,
                title: "12. Contact",
                content: `BOOST BOOOST SE
Großenbaumer Str. 252
45479 Mülheim an der Ruhr
Germany

Phone: +49 1511 4087414
Email: business@tagmybike.com

Managing Director: Peter Cromm
Registry Court: AG Duisburg
Registration Number: HRB 37045`
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
                            {isGerman ? 'Rechtliches' : 'Legal'}
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;
