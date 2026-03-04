## Why

Die TagMyBike-Webseite hat durch die erste Überarbeitung eine solide Grundstruktur, enthält aber noch zahlreiche Schwächen die B2B-Käufer abschrecken: ein unfertiger Hero-Platzhalter, falsch gemappte Navigation, fehlender Social Proof, generische CTAs ohne Sales-Differenzierung, keine echten Spezifikationen, und Design-Inkonsistenzen. Diese Optimierung soll die Seite auf das Niveau einer professionellen B2B-Sales-Seite heben.

## What Changes

- Hero-Section redesignen: "Product Visual" Platzhalter entfernen, zentriertes Layout mit stärkerem CTA
- Social Proof Section unter dem Hero einfügen (Platzhalter-Partnerlogos)
- Navbar-Links korrekt benennen und mappen (Products → #accessories, Solutions → #solutions, Specs → #tech)
- CTAs im gesamten Funnel differenzieren ("Request a Demo" oben, "Get a Quote" / "Request Sample" unten)
- ProblemSection: Tag-Pill rendern, 3. Metrik hinzufügen, Quellenangaben
- Accessories: Reflector-Icon fixen, kurze Specs pro Karte, CTA hinzufügen
- SolutionOverview als Plattform-Überblick differenzieren (nicht Hardware-Wiederholung)
- TechSpecs: Konkrete Platzhalter-Spezifikationen mit "TBD" statt leerer Marketing-Phrasen
- Footer: LinkedIn-Link, doppelte Legal-Links entfernen, B2B-Tagline
- CSS: Off-Palette-Farben als Variablen, inline `<style>` Tags nach CSS verschieben
- i18n: "B2B White-Label" Pill übersetzen, deutsche CTAs schärfen

## Capabilities

### New Capabilities
- `hero-redesign`: Professionelles Hero-Layout ohne Platzhalter-Text, zentriert oder mit abstraktem Visual
- `social-proof`: Neue Social-Proof-Section mit Platzhalter-Partnerlogos und Trust-Signalen
- `b2b-cta-funnel`: Differenzierte CTAs über den gesamten Sales-Funnel (Demo → Quote → Sample)
- `nav-accuracy`: Korrekte Navbar-Bezeichnungen und Section-Mappings
- `specs-enhancement`: Echte Spezifikations-Tabelle mit konkreten (TBD-)Werten statt Marketing-Phrasen
- `design-polish`: CSS-Variablen für alle Farben, inline Styles nach CSS, Icon-Fixes, Footer-Cleanup

### Modified Capabilities

## Impact

- Hero.jsx komplett neu geschrieben
- Neue SocialProof.jsx Komponente erstellt
- Navbar.jsx Nav-Links und Labels geändert
- ProblemSection.jsx erweitert (Pill + 3. Metrik)
- SolutionOverview.jsx inhaltlich differenziert
- Accessories.jsx mit Specs, Icon-Fix und CTA erweitert
- TechSpecs.jsx mit Tabellen-Format und TBD-Werten
- Footer.jsx bereinigt (LinkedIn, keine Duplikate)
- index.css erweitert (neue Variablen, responsive Styles aus inline Tags)
- en.json und de.json mit neuen/geänderten Keys
- LandingPage.jsx importiert neue SocialProof-Komponente
