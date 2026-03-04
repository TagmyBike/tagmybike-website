## 1. Projektstruktur reorganisieren

- [x] 1.1 `src/` Verzeichnisstruktur erstellen (components/layout, components/sections, pages, i18n/locales, styles, assets)
- [x] 1.2 Alle Quelldateien nach `src/` verschieben (App.jsx, main.jsx, Komponenten, Seiten, CSS)
- [x] 1.3 `index.html` Script-Referenz auf `src/main.jsx` aktualisieren
- [x] 1.4 Unbenutzte Komponenten löschen (ApiSection, CaseStudies, FaqSection, IndustryGrid, KPISection, PricingTiers, SecuritySection, TrustSection)
- [x] 1.5 Alle Import-Pfade in allen Dateien korrigieren
- [x] 1.6 `logo.png` nach `src/assets/` verschieben, Accessory-PNGs entfernen
- [x] 1.7 Build verifizieren (`npm run build` erfolgreich)

## 2. i18n-System überarbeiten

- [x] 2.1 Übersetzungen aus `i18n.js` in `src/i18n/locales/en.json` und `src/i18n/locales/de.json` extrahieren
- [x] 2.2 `src/i18n/index.js` erstellen mit Konfiguration (debug: false, JSON-Import)
- [x] 2.3 Hardcodierte Texte in TechSpecs.jsx durch `t()` Calls ersetzen
- [x] 2.4 Hardcodierte Texte in ContactEnterprise.jsx durch `t()` Calls ersetzen
- [x] 2.5 Hardcodierte Texte in Footer.jsx durch `t()` Calls ersetzen
- [x] 2.6 Alle anderen hardcodierten Strings in Komponenten identifizieren und durch `t()` ersetzen
- [x] 2.7 Übersetzungskeys auf Vollständigkeit prüfen (EN ↔ DE)

## 3. Inhaltliche Korrekturen

- [x] 3.1 ProblemSection: "Fleet"/"Flotten" aus Titel entfernen, Fleet Attrition Rate Metrik entfernen (nur 2 Metriken behalten)
- [x] 3.2 CustomBrandingSection: Claims über anpassbare Hardware, anpassbare App und Flottenanpassung entfernen
- [x] 3.3 SolutionOverview: "Multi-Layer Connectivity" (LTE-M, NB-IoT, GPS) durch generische Beschreibung ersetzen, Rahmenintegration entfernen, Discovery Dashboard entfernen
- [x] 3.4 Accessories: Beschreibungen korrigieren — Tracker fest verbaut in Klingel, Reflektor, Cupholder (keine falsche Specs)
- [x] 3.5 TechSpecs: Alle falschen Spezifikationen entfernen, durch Feature-Highlights/Platzhalter ersetzen
- [x] 3.6 Hero: Falsche Claims entfernen (keine anpassbare Hardware/App/Fleet Claims)
- [x] 3.7 Firmenname konsistent auf "BOOOST E-Mobility Solutions GmbH" in Footer, Contact, Privacy, Terms setzen
- [x] 3.8 Navbar-Links auf korrekte Section-IDs mappen (Solutions → #solutions, Technology → #tech, etc.)

## 4. CSS-Platzhalter für Bilder

- [x] 4.1 Hero-Platzhalter-Komponente erstellen (Glassmorphism + Bike-Icon)
- [x] 4.2 Accessory-Platzhalter erstellen (Bell, Coffee, Lightbulb Icons)
- [x] 4.3 Bild-Referenzen in Hero.jsx durch CSS-Platzhalter ersetzen
- [x] 4.4 Bild-Referenzen in Accessories.jsx durch CSS-Platzhalter ersetzen

## 5. Design-Verbesserungen

- [x] 5.1 Section-Padding auf mindestens 100px erhöhen
- [x] 5.2 Hero-Animationen reduzieren (max 2 Partikel, kürzere Animationsdauer)
- [x] 5.3 Typografie-Hierarchie verbessern (klare H1/H2/H3-Abstufung, Space Grotesk für Titel)
- [x] 5.4 Card-Designs vereinheitlichen (konsistentes Glassmorphism, gleiche Hover-Effekte)
- [x] 5.5 CTA-Buttons professioneller gestalten (mehr Padding, subtilere Hover-Effekte)
- [x] 5.6 Footer-Alignment korrigieren (CSS Grid, gleichmäßige Spalten, korrekte Ausrichtung)
- [x] 5.7 Mobile Responsiveness überprüfen und verbessern
- [x] 5.8 Allgemeine CSS-Bereinigung (ungenutzten CSS-Code entfernen, Variablen konsolidieren)

## 6. Verifizierung

- [x] 6.1 Vollständiger Build-Test (`npm run build`)
- [x] 6.2 Sprachumschaltung testen (alle Texte wechseln korrekt EN ↔ DE)
- [x] 6.3 Alle Links und Navigation testen
- [x] 6.4 Mobile-Ansicht testen
