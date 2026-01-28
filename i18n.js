import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        solutions: "Solutions",
                        tech: "Technology",
                        roi: "ROI",
                        industries: "Industries",
                        contact: "Contact Sales"
                    },
                    hero: {
                        title: "Smart Tracking.\nYour Brand.",
                        subtitle: "Invisible GPS trackers ready for your brand. Perfect for bike manufacturers, retailers, supermarket chains, sports equipment sellers, and any business looking to offer theft protection at scale. Fully customizable hardware and app experience.",
                        cta: "Get in Touch",
                        secondaryCta: "View Products",
                        segments: {
                            manufacturers: {
                                label: "Manufacturers",
                                title: "For Manufacturers",
                                bullets: [
                                    "Embed theft protection and tracking into every bike at the factory",
                                    "Offer premium connected models without redesigning the frame",
                                    "Create new subscription revenue with connected services"
                                ],
                                cta: "See manufacturer use case"
                            },
                            fleets: {
                                label: "Fleets and Leasing",
                                title: "For Fleets and Leasing",
                                bullets: [
                                    "Reduce theft and losses with instant location data",
                                    "Recover missing bikes and document incidents for claims",
                                    "Monitor usage, health and status of every unit in one place"
                                ],
                                cta: "See fleet dashboard"
                            },
                            insurers: {
                                label: "Insurers",
                                title: "For Insurers",
                                bullets: [
                                    "Lower claim ratios with verifiable tracking data",
                                    "Automate incident reports and recovery workflows",
                                    "Build new insurance products around connected bikes"
                                ],
                                cta: "See insurance benefits"
                            },
                            shared: {
                                label: "Shared Mobility",
                                title: "For Shared Mobility Operators",
                                bullets: [
                                    "Track every bike or scooter across cities in real time",
                                    "Detect misuse and abandoned vehicles instantly",
                                    "Integrate with existing dispatch and operations tools"
                                ],
                                cta: "See shared mobility features"
                            },
                            cities: {
                                label: "Cities and Corporates",
                                title: "For Cities and Corporate Programs",
                                bullets: [
                                    "Secure public and corporate bike programs",
                                    "Gain anonymised insights on usage and routes",
                                    "Support safer and more reliable urban mobility"
                                ],
                                cta: "See city and corporate case"
                            }
                        }
                    },
                    kpi: {
                        recovery: "Recovery Rate",
                        uptime: "Uptime SLA",
                        battery: "Battery Life"
                    },
                    solutions: {
                        title: "Enterprise-grade <0>security</0> <1>solutions</1>",
                        oem: {
                            title: "For OEMs",
                            p1: "Factory integrated installation",
                            p2: "Custom branding & housing",
                            p3: "Global connectivity included"
                        },
                        fleets: {
                            title: "For Fleet Operators",
                            p1: "Real-time fleet visibility",
                            p2: "Automated theft alerts",
                            p3: "Maintenance scheduling"
                        },
                        cities: {
                            title: "For Cities",
                            p1: "Compliance data sharing",
                            p2: "Parking zone enforcement",
                            p3: "Sustainable mobility insights"
                        }
                    },
                    tech: {
                        title: "Smart Tracking, Reinvented",
                        subtitle: "Discover the perfect blend of technology, design, and reliability. Our Smart Tags offer real-time tracking, long-lasting batteries, and a sleek design – tailored for modern fleets.",
                        features: {
                            gps: { title: "Real-time Tracking", desc: "High precision GPS & Bluetooth tracking." },
                            battery: { title: "Long Battery Life", desc: "Up to 1 year battery life (replaceable)." },
                            durability: { title: "Weather Resistant", desc: "IP67 Water and dust resistant." },
                            integration: { title: "Seamless Integration", desc: "Works with iOS and Android." }
                        },
                        nativeApps: "Native applications and pairing experience for both iOS and Android devices.",
                        appStore: "Available on App Store",
                        googlePlay: "Available on Google Play"
                    },
                    roi: {
                        title: "Data and <1>ROI</1>",
                        marketChart: "Smart bike GPS tracker market growth",
                        microChart: "Micro mobility market growth",
                        withoutTracking: "Without Tracking",
                        withTracking: "With Integrated Tracking",
                        listWithout: [
                            "Very low recovery rate",
                            "Higher insurance premiums",
                            "Fleet utilization < 70%"
                        ],
                        listWith: [
                            "2-10x better recovery rates",
                            "Negotiate better insurance terms",
                            "Higher fleet utilization & asset life"
                        ],
                        roiExample: "<strong>ROI Example:</strong> If a fleet of 1,000 high value bikes loses 10% annually to theft, and the average loss per bike is $600-$700, then TagMyBike only needs to prevent a fraction of those incidents to pay for itself."
                    },
                    industries: {
                        title: "Built for your sector",
                        oem: {
                            title: "Bike Manufacturers (OEM)",
                            pain: "Need differentiation and premium features.",
                            benefits: ["Integrated production process", "Higher resale value", "Brand protection"],
                            data: "E-Bike segment drives 63% of industry growth"
                        },
                        cargo: {
                            title: "Cargo & Last Mile Fleets",
                            pain: "Theft and vandalism account for 12-18% of operating expenses.",
                            benefits: ["Real-time asset visibility", "Reduced insurance premiums", "Operational efficiency"],
                            data: "12-18% op-ex from vandalism & theft"
                        },
                        shared: {
                            title: "Shared Mobility Operators",
                            pain: "High churn and asset loss in public spaces.",
                            benefits: ["Geofencing alerts", "Battery monitoring", "Recovery support"],
                            data: "Avg. asset life < 18 months without tracking"
                        },
                        insurers: {
                            title: "Insurers & Leasing",
                            pain: "Rising claim costs threaten business models.",
                            benefits: ["Data-driven risk assessment", "Lower loss ratios", "Stolen bike recovery"],
                            data: "Avg. claim cost: €720"
                        },
                        cities: {
                            title: "City Governments",
                            pain: "Need data to justify infrastructure investments.",
                            benefits: ["Heatmaps of usage", "Theft hotspot analysis", "Public safety improvement"],
                            data: "Data-driven infrastructure planning"
                        }
                    },
                    productShowcase: {
                        title: "Smart Tracking, Reinvented.",
                        desc: "Discover the perfect blend of technology, design, and reliability. Our Smart Tags offer real-time tracking, long-lasting batteries, and a sleek, minimalistic design – tailored for modern life and business opportunities.",
                        features: [
                            "Real-time tracking with Bluetooth precision",
                            "Battery life up to 1 year (replaceable)",
                            "Water and dust resistant",
                            "Works with iOS and Android",
                            "Fully customizable for your brand"
                        ],
                        cta: "Learn More"
                    },
                    productDeepDive: {
                        section1: {
                            title: "Precision Engineering for\nModern Fleets",
                            subtitle: "Built to withstand the rigors of daily use while providing granular data insights. From last-mile delivery to shared mobility, our hardware scales with your needs.",
                            cta: "View Technical Specs"
                        },
                        section2: {
                            title: "Seamless Integration",
                            desc: "Our API-first approach ensures that tracking data flows directly into your existing fleet management software.",
                            featuresTitle: "Developer Friendly",
                            featuresDesc: "Webhooks, REST API, and SDKs available.",
                            features: [
                                "99.9% Uptime SLA",
                                "End-to-end encryption",
                                "GDPR Compliant"
                            ]
                        }
                    },
                    accessories: {
                        title: "Hardware Ecosystem",
                        subtitle: "Seamlessly integrated tracking for every asset.",
                        bell: {
                            title: "Bike Bell Tracker (MA-T01)",
                            specs: [
                                "Induction Mode: Bluetooth",
                                "Material: Stainless Steel",
                                "Battery: 210mAh (12 months standby)",
                                "Alarm: 60-80dB"
                            ]
                        },
                        cup: {
                            title: "Cup Holder Tracker (MA-T03)",
                            specs: [
                                "Induction Mode: Bluetooth",
                                "Material: Stainless Steel",
                                "Battery: 210mAh (12 months standby)",
                                "Alarm: 60-80dB"
                            ]
                        },
                        light: {
                            title: "Taillight Tracker (MA-T02)",
                            specs: [
                                "Induction Mode: Bluetooth",
                                "Material: ABS",
                                "Battery: 210mAh (12 months standby)",
                                "Alarm: 60-80dB"
                            ]
                        }
                    },
                    customization: {
                        title: "Your Brand. Your Smart Tag.",
                        subtitle: "Offer cutting-edge smart tracking under your own brand – without the R&D hassle. Customize everything: the device, the packaging, even the display name on smartphones.",
                        features: [
                            "Custom logo & colors on device",
                            "Fully branded packaging",
                            "Brand name visible during pairing",
                            "Corporate and retail tailored designs",
                            "Fast onboarding & licensing",
                            "Fleet-level customization"
                        ],
                        cta: "Start Customizing"
                    },
                    dashboard: {
                        title: "Complete fleet <0/> <1>visibility</1>",
                        desc: "Manage thousands of assets from a single pane of glass. Real-time tracking, theft hotspots, and automated alerts.",
                        features: [
                            "Live map of all bikes",
                            "Heatmaps of theft hotspots",
                            "API access & webhooks",
                            "Admin roles & audit logs"
                        ],
                        pairing: "TagMyBike pairs with both iOS and Android phones for end user pairing, alerts and bike location.",
                        compatible: "iOS & Android Compatible"
                    },
                    compliance: {
                        title: "Compliance and trust",
                        desc: "TagMyBike meets all European security and data protection standards for commercial fleets.",
                        gdpr: { title: "GDPR Compliant", desc: "Data minimization & privacy first." },
                        secure: { title: "Secure Storage", desc: "Encrypted data at rest and in transit." },
                        cert: { title: "Certified", desc: "CE and industry standard certifications." }
                    },
                    results: {
                        title: "Field results and pilots",
                        q1: { text: "European cargo fleet reduced theft rate from double digits to significantly lower levels after deploying embedded trackers.", author: "Operations Director", role: "Logistics Fleet" },
                        q2: { text: "Insurance premiums dropped by 15% after demonstrating recovery capabilities with TagMyBike.", author: "Fleet Manager", role: "E-Bike Rental" },
                        q3: { text: "The API integration was seamless. We had our custom dashboard running in under a week.", author: "CTO", role: "Shared Mobility Startup" }
                    },
                    cta: {
                        title: "Ready to secure your fleet?",
                        subtitle: "Join the leading OEMs and fleet operators trusting TagMyBike.",
                        btn: "Contact Sales"
                    },
                    footer: {
                        rights: "All rights reserved.",
                        product: "Product",
                        company: "Company",
                        legal: "Legal",
                        tagline: "Enterprise-grade tracking solutions for modern fleets.",
                        links: {
                            features: "Features",
                            specs: "Specifications",
                            pricing: "Pricing",
                            about: "About Us",
                            careers: "Careers",
                            contact: "Contact",
                            privacy: "Privacy Policy",
                            terms: "Terms of Service",
                            imprint: "Imprint"
                        }
                    },
                    about: {
                        title: "About <0>TagMyBike</0>",
                        mission: "We are on a mission to secure the future of micromobility. By combining cutting-edge hardware with intelligent software, we help fleets, cities, and manufacturers protect their assets.",
                        team: {
                            title: "Our Team",
                            desc: "Founded by a team of engineers and cycling enthusiasts in Berlin, we understand the challenges of modern fleet management firsthand."
                        },
                        values: {
                            title: "Our Mission",
                            desc: "To eliminate bike theft and enable sustainable urban mobility through reliable, invisible, and smart tracking technology."
                        },
                        global: {
                            title: "Global Reach",
                            desc: "Trusted by leading OEMs and fleet operators across Europe and North America. We are scaling rapidly to meet global demand."
                        },
                        story: {
                            title: "Our Story",
                            desc: "It started with a simple problem: expensive e-bikes were disappearing, and existing trackers were too bulky or easy to remove. We set out to build something better. A tracker that is invisible to thieves, integrated into the bike's design, and powered by a battery that lasts for years. Today, TagMyBike is the standard for enterprise fleet security."
                        }
                    },
                    careers: {
                        title: "Join the <0>Revolution</0>",
                        subtitle: "We're building the future of fleet security. If you're passionate about mobility, technology, and making a real impact, we want to hear from you.",
                        openPositions: "Open Positions",
                        apply: "Apply Now",
                        noFit: "Don't see a perfect fit? We are always looking for talent.",
                        speculative: "Send us a speculative application →",
                        positions: {
                            backend: "Senior Backend Engineer",
                            designer: "Product Designer (UI/UX)",
                            sales: "Enterprise Sales Manager"
                        },
                        departments: {
                            engineering: "Engineering",
                            design: "Design",
                            sales: "Sales"
                        },
                        types: {
                            fulltime: "Full-time"
                        },
                        locations: {
                            berlin: "Berlin",
                            remote: "Remote (EU)",
                            berlinRemote: "Berlin / Remote"
                        }
                    },
                    contact: {
                        title: "Get in <0>Touch</0>",
                        subtitle: "Ready to secure your fleet? Our team is here to help you find the perfect solution for your needs.",
                        info: {
                            title: "Contact Information",
                            email: { title: "Email Us", desc: "Sales & Support" },
                            phone: { title: "Call Us", desc: "Mon-Fri from 9am to 6pm CET" },
                            visit: { title: "Visit Us", desc: "HQ Berlin" }
                        },
                        form: {
                            title: "Send us a message",
                            firstName: "First Name",
                            lastName: "Last Name",
                            email: "Work Email",
                            company: "Company Name",
                            message: "Message",
                            submit: "Send Message",
                            placeholders: {
                                firstName: "John",
                                lastName: "Doe",
                                email: "john@company.com",
                                company: "Company Ltd.",
                                message: "How can we help you?"
                            }
                        }
                    },
                    imprint: {
                        title: "Imprint",
                        tmg: "Information according to § 5 TMG",
                        represented: "Represented by",
                        contact: "Contact",
                        register: "Register Entry",
                        vat: "VAT ID",
                        registerText: "Entry in the Handelsregister.\nRegistering court: Amtsgericht Charlottenburg\nRegistration number: HRB 123456",
                        vatText: "Sales tax identification number according to §27 a Umsatzsteuergesetz:\nDE 123 456 789"
                    },
                    privacy: {
                        title: "Privacy Policy",
                        lastUpdated: "Last updated: December 2025",
                        intro: {
                            title: "1. Introduction",
                            text: "TagMyBike (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services."
                        },
                        collection: {
                            title: "2. Data Collection",
                            text: "We collect information that you provide directly to us, such as when you create an account, request customer support, or contact us for inquiries. This may include:",
                            list: [
                                "Contact information (name, email address, phone number)",
                                "Company details (for enterprise accounts)",
                                "Device telemetry data (for tracking services)"
                            ]
                        },
                        usage: {
                            title: "3. Data Usage",
                            text: "We use the collected data to provide, maintain, and improve our services, to process transactions, and to communicate with you. We do not sell your personal data to third parties."
                        },
                        security: {
                            title: "4. Security",
                            text: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction."
                        },
                        contact: {
                            title: "5. Contact Us",
                            text: "If you have any questions about this Privacy Policy, please contact us at privacy@tagmybike.com."
                        }
                    },
                    terms: {
                        title: "Terms of Service",
                        lastUpdated: "Last updated: December 2025",
                        agreement: {
                            title: "1. Agreement to Terms",
                            text: "By accessing or using TagMyBike's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service."
                        },
                        license: {
                            title: "2. Use License",
                            text: "Permission is granted to temporarily download one copy of the materials (information or software) on TagMyBike's website for personal, non-commercial transitory viewing only."
                        },
                        availability: {
                            title: "3. Service Availability",
                            text: "We strive to ensure high availability of our tracking services but do not guarantee 100% uptime. We reserve the right to modify or discontinue the service at any time without notice."
                        },
                        liability: {
                            title: "4. Limitation of Liability",
                            text: "In no event shall TagMyBike or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TagMyBike's website."
                        },
                        governing: {
                            title: "5. Governing Law",
                            text: "These terms and conditions are governed by and construed in accordance with the laws of Germany and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
                        }
                    },
                    badges: {
                        iosAndroid: "iOS & Android",
                        enterprise: "Enterprise Ready"
                    },
                    calculator: {
                        fleetSize: "Fleet Size",
                        bikeValue: "Avg. Bike Value (€)",
                        theftRate: "Annual Theft Rate (%)",
                        savings: "Potential Annual Savings",
                        download: "Download Report",
                        bikes: "bikes"
                    },
                    api: {
                        tag: "Developer First",
                        title: "Built for Integration",
                        contentType: "Content-Type:"
                    },
                    contactEnterprise: {
                        title: "Ready to secure your fleet?",
                        subtitle: "Get a custom quote or schedule a technical demo with our engineering team.",
                        firstName: "First Name",
                        lastName: "Last Name",
                        email: "Work Email",
                        company: "Company Name",
                        fleetSize: "Fleet Size",
                        industry: "Industry",
                        message: "Anything else?",
                        submit: "Request Demo",
                        options: {
                            shared: "Shared Mobility",
                            insurance: "Insurance",
                            city: "City / Government",
                            retail: "Retail / OEM"
                        }
                    },
                    caseStudies: {
                        title: "Proven Results"
                    },
                    problem: {
                        tag: "Billion Dollar Problem"
                    },
                    faq: {
                        title: "Frequent Questions"
                    },
                    solutionOverview: {
                        title: "End-to-End Recovery Platform"
                    },
                    pricing: {
                        title: "Flexible Partnership Models"
                    },
                    industryGrid: {
                        title: "Tailored for Your Industry"
                    },
                    techSpecs: {
                        title: "Technical Specifications"
                    }
                }
            },
            de: {
                translation: {
                    nav: {
                        solutions: "Lösungen",
                        tech: "Technologie",
                        roi: "ROI",
                        industries: "Branchen",
                        contact: "Kontakt"
                    },
                    hero: {
                        title: "Smart Tracking.\nIhre Marke.",
                        subtitle: "Unsichtbare GPS-Tracker für Ihre Marke. Perfekt für Fahrradhersteller, Einzelhändler, Supermarktketten, Sportartikelhändler und jedes Unternehmen, das Diebstahlschutz im großen Stil anbieten möchte. Vollständig anpassbare Hardware und App-Erfahrung.",
                        cta: "Kontakt aufnehmen",
                        secondaryCta: "Produkte ansehen",
                        segments: {
                            manufacturers: {
                                label: "Hersteller",
                                title: "Für Hersteller",
                                bullets: [
                                    "Diebstahlschutz und Tracking ab Werk in jedes Fahrrad integrieren",
                                    "Premium-vernetzte Modelle anbieten, ohne den Rahmen neu zu gestalten",
                                    "Neue Abo-Einnahmen mit vernetzten Diensten generieren"
                                ],
                                cta: "Hersteller-Use-Case ansehen"
                            },
                            fleets: {
                                label: "Flotten und Leasing",
                                title: "Für Flotten und Leasing",
                                bullets: [
                                    "Diebstahl und Verluste mit sofortigen Standortdaten reduzieren",
                                    "Vermisste Fahrräder wiederfinden und Vorfälle für Ansprüche dokumentieren",
                                    "Nutzung, Gesundheit und Status jeder Einheit an einem Ort überwachen"
                                ],
                                cta: "Flotten-Dashboard ansehen"
                            },
                            insurers: {
                                label: "Versicherer",
                                title: "Für Versicherer",
                                bullets: [
                                    "Schadenquoten mit überprüfbaren Tracking-Daten senken",
                                    "Vorfallsberichte und Wiederbeschaffungs-Workflows automatisieren",
                                    "Neue Versicherungsprodukte rund um vernetzte Fahrräder entwickeln"
                                ],
                                cta: "Versicherungsvorteile ansehen"
                            },
                            shared: {
                                label: "Shared Mobility",
                                title: "Für Shared Mobility Betreiber",
                                bullets: [
                                    "Jedes Fahrrad oder jeden Roller städteübergreifend in Echtzeit verfolgen",
                                    "Missbrauch und verlassene Fahrzeuge sofort erkennen",
                                    "In bestehende Dispositions- und Betriebstools integrieren"
                                ],
                                cta: "Shared-Mobility-Funktionen ansehen"
                            },
                            cities: {
                                label: "Städte und Unternehmen",
                                title: "Für Städte und Unternehmensprogramme",
                                bullets: [
                                    "Öffentliche und betriebliche Fahrradprogramme sichern",
                                    "Anonymisierte Einblicke in Nutzung und Routen gewinnen",
                                    "Sicherere und zuverlässigere urbane Mobilität unterstützen"
                                ],
                                cta: "Stadt- und Unternehmens-Case ansehen"
                            }
                        }
                    },
                    kpi: {
                        recovery: "Wiederbeschaffungsrate",
                        uptime: "Verfügbarkeit SLA",
                        battery: "Akkulaufzeit"
                    },
                    solutions: {
                        title: "Sicherheitslösungen für <0>Unternehmen</0>",
                        oem: {
                            title: "Für OEMs",
                            p1: "Werkseitig integrierte Installation",
                            p2: "Individuelles Branding & Gehäuse",
                            p3: "Globale Konnektivität inklusive"
                        },
                        fleets: {
                            title: "Für Flottenbetreiber",
                            p1: "Echtzeit-Flottensichtbarkeit",
                            p2: "Automatische Diebstahlwarnungen",
                            p3: "Wartungsplanung"
                        },
                        cities: {
                            title: "Für Städte",
                            p1: "Datenaustausch zur Compliance",
                            p2: "Parkzonenüberwachung",
                            p3: "Einblicke in nachhaltige Mobilität"
                        }
                    },
                    tech: {
                        title: "Intelligentes Tracking, neu erfunden",
                        subtitle: "Entdecken Sie die perfekte Mischung aus Technologie, Design und Zuverlässigkeit. Unsere Smart Tags bieten Echtzeit-Tracking, langlebige Batterien und ein schlankes Design – maßgeschneidert für moderne Flotten.",
                        features: {
                            gps: { title: "Echtzeit-Tracking", desc: "Hochpräzises GPS & Bluetooth-Tracking." },
                            battery: { title: "Lange Batterielaufzeit", desc: "Bis zu 1 Jahr Batterielaufzeit (austauschbar)." },
                            durability: { title: "Wetterbeständig", desc: "IP67 Wasser- und staubgeschützt." },
                            integration: { title: "Nahtlose Integration", desc: "Funktioniert mit iOS und Android." }
                        },
                        nativeApps: "Native Anwendungen und Kopplungserfahrung für iOS- und Android-Geräte.",
                        appStore: "Erhältlich im App Store",
                        googlePlay: "Erhältlich bei Google Play"
                    },
                    roi: {
                        title: "Daten und <1>ROI</1>",
                        marketChart: "Wachstum des Marktes für intelligente Fahrrad-GPS-Tracker",
                        microChart: "Wachstum des Mikromobilitätsmarktes",
                        withoutTracking: "Ohne Tracking",
                        withTracking: "Mit integriertem Tracking",
                        listWithout: [
                            "Sehr niedrige Wiederbeschaffungsrate",
                            "Höhere Versicherungsprämien",
                            "Flottenauslastung < 70%"
                        ],
                        listWith: [
                            "2-10x bessere Wiederbeschaffungsraten",
                            "Bessere Versicherungskonditionen aushandeln",
                            "Höhere Flottenauslastung & Lebensdauer"
                        ],
                        roiExample: "<strong>ROI-Beispiel:</strong> Wenn eine Flotte von 1.000 hochwertigen Fahrrädern jährlich 10% durch Diebstahl verliert und der durchschnittliche Verlust pro Fahrrad 600-700 € beträgt, muss TagMyBike nur einen Bruchteil dieser Vorfälle verhindern, um sich selbst zu bezahlen."
                    },
                    industries: {
                        title: "Gebaut für Ihre Branche",
                        oem: {
                            title: "Fahrradhersteller (OEM)",
                            pain: "Benötigen Differenzierung und Premium-Funktionen.",
                            benefits: ["Integrierter Produktionsprozess", "Höherer Wiederverkaufswert", "Markenschutz"],
                            data: "E-Bike-Segment treibt 63% des Branchenwachstums an"
                        },
                        cargo: {
                            title: "Fracht- & Last-Mile-Flotten",
                            pain: "Diebstahl und Vandalismus machen 12-18% der Betriebskosten aus.",
                            benefits: ["Echtzeit-Asset-Sichtbarkeit", "Reduzierte Versicherungsprämien", "Betriebseffizienz"],
                            data: "12-18% OpEx durch Vandalismus & Diebstahl"
                        },
                        shared: {
                            title: "Shared Mobility Betreiber",
                            pain: "Hohe Fluktuation und Asset-Verlust im öffentlichen Raum.",
                            benefits: ["Geofencing-Warnungen", "Batterieüberwachung", "Wiederbeschaffungsunterstützung"],
                            data: "Durchschn. Asset-Lebensdauer < 18 Monate ohne Tracking"
                        },
                        insurers: {
                            title: "Versicherer & Leasing",
                            pain: "Steigende Schadenkosten bedrohen Geschäftsmodelle.",
                            benefits: ["Datengetriebene Risikobewertung", "Niedrigere Schadenquoten", "Wiederbeschaffung gestohlener Fahrräder"],
                            data: "Durchschn. Schadenkosten: 720 €"
                        },
                        cities: {
                            title: "Stadtverwaltungen",
                            pain: "Benötigen Daten zur Rechtfertigung von Infrastrukturinvestitionen.",
                            benefits: ["Nutzungs-Heatmaps", "Analyse von Diebstahl-Hotspots", "Verbesserung der öffentlichen Sicherheit"],
                            data: "Datengetriebene Infrastrukturplanung"
                        }
                    },
                    productShowcase: {
                        title: "Intelligentes Tracking, neu erfunden.",
                        desc: "Entdecken Sie die perfekte Mischung aus Technologie, Design und Zuverlässigkeit. Unsere Smart Tags bieten Echtzeit-Tracking, langlebige Batterien und ein schlankes, minimalistisches Design – maßgeschneidert für das moderne Leben und Geschäftsmöglichkeiten.",
                        features: [
                            "Echtzeit-Tracking mit Bluetooth-Präzision",
                            "Batterielaufzeit bis zu 1 Jahr (austauschbar)",
                            "Wasser- und staubgeschützt",
                            "Funktioniert mit iOS und Android",
                            "Vollständig anpassbar für Ihre Marke"
                        ],
                        cta: "Mehr erfahren"
                    },
                    productDeepDive: {
                        section1: {
                            title: "Präzisionstechnik für\nmoderne Flotten",
                            subtitle: "Gebaut, um den Anforderungen des täglichen Gebrauchs standzuhalten und gleichzeitig granulare Dateneinblicke zu liefern. Von der Last-Mile-Zustellung bis zur Shared Mobility – unsere Hardware wächst mit Ihren Anforderungen.",
                            cta: "Technische Daten ansehen"
                        },
                        section2: {
                            title: "Nahtlose Integration",
                            desc: "Unser API-First-Ansatz stellt sicher, dass Tracking-Daten direkt in Ihre bestehende Flottenmanagement-Software fließen.",
                            featuresTitle: "Entwicklerfreundlich",
                            featuresDesc: "Webhooks, REST API und SDKs verfügbar.",
                            features: [
                                "99,9% Verfügbarkeit SLA",
                                "End-to-End-Verschlüsselung",
                                "DSGVO-konform"
                            ]
                        }
                    },
                    accessories: {
                        title: "Hardware-Ökosystem",
                        subtitle: "Nahtlos integriertes Tracking für jedes Asset.",
                        bell: {
                            title: "Fahrradklingel-Tracker (MA-T01)",
                            specs: [
                                "Induktionsmodus: Bluetooth",
                                "Material: Edelstahl",
                                "Batterie: 210mAh (12 Monate Standby)",
                                "Alarm: 60-80dB"
                            ]
                        },
                        cup: {
                            title: "Getränkehalter-Tracker (MA-T03)",
                            specs: [
                                "Induktionsmodus: Bluetooth",
                                "Material: Edelstahl",
                                "Batterie: 210mAh (12 Monate Standby)",
                                "Alarm: 60-80dB"
                            ]
                        },
                        light: {
                            title: "Rücklicht-Tracker (MA-T02)",
                            specs: [
                                "Induktionsmodus: Bluetooth",
                                "Material: ABS",
                                "Batterie: 210mAh (12 Monate Standby)",
                                "Alarm: 60-80dB"
                            ]
                        }
                    },
                    customization: {
                        title: "Ihre Marke. Ihr Smart Tag.",
                        subtitle: "Bieten Sie hochmodernes Smart Tracking unter Ihrer eigenen Marke an – ohne den F&E-Aufwand. Passen Sie alles an: das Gerät, die Verpackung, sogar den Anzeigenamen auf Smartphones.",
                        features: [
                            "Individuelles Logo & Farben auf dem Gerät",
                            "Vollständig gebrandete Verpackung",
                            "Markenname während der Kopplung sichtbar",
                            "Auf Unternehmen und Einzelhandel zugeschnittene Designs",
                            "Schnelles Onboarding & Lizenzierung",
                            "Anpassung auf Flottenebene"
                        ],
                        cta: "Anpassung starten"
                    },
                    dashboard: {
                        title: "Vollständige Flotten-<0/> <1>Sichtbarkeit</1>",
                        desc: "Verwalten Sie Tausende von Assets über eine einzige Oberfläche. Echtzeit-Tracking, Diebstahl-Hotspots und automatisierte Warnungen.",
                        features: [
                            "Live-Karte aller Fahrräder",
                            "Heatmaps von Diebstahl-Hotspots",
                            "API-Zugriff & Webhooks",
                            "Admin-Rollen & Audit-Logs"
                        ],
                        pairing: "TagMyBike koppelt sich sowohl mit iOS- als auch mit Android-Telefonen für Endbenutzer-Kopplung, Warnungen und Fahrradstandort.",
                        compatible: "iOS & Android Kompatibel"
                    },
                    compliance: {
                        title: "Compliance und Vertrauen",
                        desc: "TagMyBike erfüllt alle europäischen Sicherheits- und Datenschutzstandards für kommerzielle Flotten.",
                        gdpr: { title: "DSGVO-konform", desc: "Datenminimierung & Privatsphäre zuerst." },
                        secure: { title: "Sichere Speicherung", desc: "Verschlüsselte Daten im Ruhezustand und bei der Übertragung." },
                        cert: { title: "Zertifiziert", desc: "CE- und Industriestandard-Zertifizierungen." }
                    },
                    results: {
                        title: "Feldergebnisse und Piloten",
                        q1: { text: "Eine europäische Frachtflotte reduzierte die Diebstahlrate nach dem Einsatz eingebetteter Tracker von zweistelligen Werten auf ein deutlich niedrigeres Niveau.", author: "Betriebsleiter", role: "Logistikflotte" },
                        q2: { text: "Versicherungsprämien sanken um 15%, nachdem die Wiederbeschaffungsfähigkeiten mit TagMyBike nachgewiesen wurden.", author: "Flottenmanager", role: "E-Bike-Verleih" },
                        q3: { text: "Die API-Integration war nahtlos. Wir hatten unser individuelles Dashboard in weniger als einer Woche am Laufen.", author: "CTO", role: "Shared Mobility Startup" }
                    },
                    cta: {
                        title: "Bereit, Ihre Flotte zu sichern?",
                        subtitle: "Schließen Sie sich den führenden OEMs und Flottenbetreibern an, die TagMyBike vertrauen.",
                        btn: "Vertrieb kontaktieren"
                    },
                    footer: {
                        rights: "Alle Rechte vorbehalten.",
                        product: "Produkt",
                        company: "Unternehmen",
                        legal: "Rechtliches",
                        tagline: "Tracking-Lösungen für moderne Flotten auf Enterprise-Niveau.",
                        links: {
                            features: "Funktionen",
                            specs: "Spezifikationen",
                            pricing: "Preise",
                            about: "Über uns",
                            careers: "Karriere",
                            contact: "Kontakt",
                            privacy: "Datenschutzerklärung",
                            terms: "Nutzungsbedingungen",
                            imprint: "Impressum"
                        }
                    },
                    about: {
                        title: "Über <0>TagMyBike</0>",
                        mission: "Wir haben es uns zur Aufgabe gemacht, die Zukunft der Mikromobilität zu sichern. Durch die Kombination von modernster Hardware mit intelligenter Software helfen wir Flotten, Städten und Herstellern, ihre Vermögenswerte zu schützen.",
                        team: {
                            title: "Unser Team",
                            desc: "Gegründet von einem Team aus Ingenieuren und Radsportbegeisterten in Berlin, verstehen wir die Herausforderungen des modernen Flottenmanagements aus erster Hand."
                        },
                        values: {
                            title: "Unsere Mission",
                            desc: "Fahrraddiebstahl eliminieren und nachhaltige urbane Mobilität durch zuverlässige, unsichtbare und intelligente Tracking-Technologie ermöglichen."
                        },
                        global: {
                            title: "Globale Reichweite",
                            desc: "Vertraut von führenden OEMs und Flottenbetreibern in Europa und Nordamerika. Wir skalieren schnell, um die globale Nachfrage zu decken."
                        },
                        story: {
                            title: "Unsere Geschichte",
                            desc: "Es begann mit einem einfachen Problem: Teure E-Bikes verschwanden, und bestehende Tracker waren zu klobig oder leicht zu entfernen. Wir machten uns daran, etwas Besseres zu bauen. Einen Tracker, der für Diebe unsichtbar ist, in das Design des Fahrrads integriert ist und von einer Batterie betrieben wird, die jahrelang hält. Heute ist TagMyBike der Standard für die Sicherheit von Unternehmensflotten."
                        }
                    },
                    careers: {
                        title: "Werden Sie Teil der <0>Revolution</0>",
                        subtitle: "Wir bauen die Zukunft der Flottensicherheit. Wenn Sie leidenschaftlich für Mobilität, Technologie und echte Veränderungen sind, wollen wir von Ihnen hören.",
                        openPositions: "Offene Stellen",
                        apply: "Jetzt bewerben",
                        noFit: "Kein passendes Angebot dabei? Wir suchen immer nach Talenten.",
                        speculative: "Senden Sie uns eine Initiativbewerbung →",
                        positions: {
                            backend: "Senior Backend Engineer",
                            designer: "Product Designer (UI/UX)",
                            sales: "Enterprise Sales Manager"
                        },
                        departments: {
                            engineering: "Engineering",
                            design: "Design",
                            sales: "Vertrieb"
                        },
                        types: {
                            fulltime: "Vollzeit"
                        },
                        locations: {
                            berlin: "Berlin",
                            remote: "Remote (EU)",
                            berlinRemote: "Berlin / Remote"
                        }
                    },
                    contact: {
                        title: "Kontaktieren Sie <0>uns</0>",
                        subtitle: "Bereit, Ihre Flotte zu sichern? Unser Team hilft Ihnen gerne, die perfekte Lösung für Ihre Bedürfnisse zu finden.",
                        info: {
                            title: "Kontaktinformationen",
                            email: { title: "E-Mail", desc: "Vertrieb & Support" },
                            phone: { title: "Anrufen", desc: "Mo-Fr von 9 bis 18 Uhr MEZ" },
                            visit: { title: "Besuchen Sie uns", desc: "HQ Berlin" }
                        },
                        form: {
                            title: "Senden Sie uns eine Nachricht",
                            firstName: "Vorname",
                            lastName: "Nachname",
                            email: "Arbeits-E-Mail",
                            company: "Firmenname",
                            message: "Nachricht",
                            submit: "Nachricht senden",
                            placeholders: {
                                firstName: "Max",
                                lastName: "Mustermann",
                                email: "max@firma.de",
                                company: "Musterfirma GmbH",
                                message: "Wie können wir Ihnen helfen?"
                            }
                        }
                    },
                    imprint: {
                        title: "Impressum",
                        tmg: "Angaben gemäß § 5 TMG",
                        represented: "Vertreten durch",
                        contact: "Kontakt",
                        register: "Registereintrag",
                        vat: "Umsatzsteuer-ID",
                        registerText: "Eintragung im Handelsregister.\nRegistergericht: Amtsgericht Charlottenburg\nRegisternummer: HRB 123456",
                        vatText: "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:\nDE 123 456 789"
                    },
                    api: {
                        tag: "Entwickler zuerst",
                        title: "Gebaut für Integration",
                        contentType: "Content-Type:"
                    },
                    contactEnterprise: {
                        title: "Bereit, Ihre Flotte zu sichern?",
                        subtitle: "Fordern Sie ein individuelles Angebot an oder vereinbaren Sie eine technische Demo mit unserem Ingenieurteam.",
                        firstName: "Vorname",
                        lastName: "Nachname",
                        email: "Geschäftliche E-Mail",
                        company: "Firmenname",
                        fleetSize: "Flottengröße",
                        industry: "Branche",
                        message: "Sonstiges?",
                        submit: "Demo anfordern",
                        options: {
                            shared: "Shared Mobility",
                            insurance: "Versicherung",
                            city: "Stadt / Regierung",
                            retail: "Einzelhandel / OEM"
                        }
                    },
                    caseStudies: {
                        title: "Bewiesene Ergebnisse"
                    },
                    problem: {
                        tag: "Milliarden-Dollar-Problem"
                    },
                    faq: {
                        title: "Häufige Fragen"
                    },
                    solutionOverview: {
                        title: "End-to-End Wiederbeschaffungsplattform"
                    },
                    pricing: {
                        title: "Flexible Partnerschaftsmodelle"
                    },
                    industryGrid: {
                        title: "Maßgeschneidert für Ihre Branche"
                    },
                    techSpecs: {
                        title: "Technische Spezifikationen"
                    },
                    privacy: {
                        title: "Datenschutzerklärung",
                        lastUpdated: "Zuletzt aktualisiert: Dezember 2025",
                        intro: {
                            title: "1. Einführung",
                            text: "TagMyBike (\"wir\", \"unser\" oder \"uns\") verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen."
                        },
                        collection: {
                            title: "2. Datenerfassung",
                            text: "Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z. B. wenn Sie ein Konto erstellen, Kundensupport anfordern oder uns für Anfragen kontaktieren. Dies kann beinhalten:",
                            list: [
                                "Kontaktinformationen (Name, E-Mail-Adresse, Telefonnummer)",
                                "Firmendetails (für Unternehmenskonten)",
                                "Gerätetelemetriedaten (für Tracking-Dienste)"
                            ]
                        },
                        usage: {
                            title: "3. Datennutzung",
                            text: "Wir verwenden die gesammelten Daten, um unsere Dienste bereitzustellen, zu warten und zu verbessern, Transaktionen zu verarbeiten und mit Ihnen zu kommunizieren. Wir verkaufen Ihre persönlichen Daten nicht an Dritte."
                        },
                        security: {
                            title: "4. Sicherheit",
                            text: "Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Ihre persönlichen Daten vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen."
                        },
                        contact: {
                            title: "5. Kontaktieren Sie uns",
                            text: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter privacy@tagmybike.com."
                        }
                    },
                    terms: {
                        title: "Nutzungsbedingungen",
                        lastUpdated: "Zuletzt aktualisiert: Dezember 2025",
                        agreement: {
                            title: "1. Zustimmung zu den Bedingungen",
                            text: "Durch den Zugriff auf oder die Nutzung der Dienste von TagMyBike erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie mit einem Teil der Bedingungen nicht einverstanden sind, dürfen Sie nicht auf den Dienst zugreifen."
                        },
                        license: {
                            title: "2. Nutzungslizenz",
                            text: "Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien (Informationen oder Software) auf der Website von TagMyBike nur für die persönliche, nicht-kommerzielle, vorübergehende Ansicht herunterzuladen."
                        },
                        availability: {
                            title: "3. Dienstverfügbarkeit",
                            text: "Wir bemühen uns um eine hohe Verfügbarkeit unserer Tracking-Dienste, garantieren jedoch keine 100%ige Verfügbarkeit. Wir behalten uns das Recht vor, den Dienst jederzeit ohne Vorankündigung zu ändern oder einzustellen."
                        },
                        liability: {
                            title: "4. Haftungsbeschränkung",
                            text: "In keinem Fall haften TagMyBike oder seine Lieferanten für Schäden (einschließlich, ohne Einschränkung, Schäden durch Daten- oder Gewinnverlust oder aufgrund von Betriebsunterbrechungen), die aus der Nutzung oder der Unmöglichkeit der Nutzung der Materialien auf der Website von TagMyBike entstehen."
                        },
                        governing: {
                            title: "5. Geltendes Recht",
                            text: "Diese Bedingungen unterliegen den Gesetzen von Deutschland und werden in Übereinstimmung mit diesen ausgelegt, und Sie unterwerfen sich unwiderruflich der ausschließlichen Zuständigkeit der Gerichte in diesem Staat oder Ort."
                        }
                    },
                    badges: {
                        iosAndroid: "iOS & Android",
                        enterprise: "Enterprise Ready"
                    },
                    calculator: {
                        fleetSize: "Flottengröße",
                        bikeValue: "Durchschn. Fahrradwert (€)",
                        theftRate: "Jährliche Diebstahlrate (%)",
                        savings: "Potenzielle jährliche Einsparungen",
                        download: "Bericht herunterladen",
                        bikes: "Fahrräder"
                    }
                }
            }
        }
    });

export default i18n;
