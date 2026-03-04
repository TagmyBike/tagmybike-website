## Why

Die TagMyBike-Webseite soll als professionelles B2B-Outreach-Tool für Geschäftskunden dienen, enthält aber aktuell zahlreiche falsche technische Claims, gemischte Sprachen (DE/EN durcheinander), eine unübersichtliche Projektstruktur und ein Design das nicht dem Qualitätsanspruch für Enterprise-Kunden entspricht. Eine umfassende Überarbeitung ist nötig, um Glaubwürdigkeit bei B2B-Kunden herzustellen.

## What Changes

- **BREAKING**: Projektstruktur komplett reorganisieren — alle Source-Dateien in `src/` verschieben, i18n-Übersetzungen in separate JSON-Dateien auslagern
- 8 unbenutzte Komponenten entfernen (ApiSection, CaseStudies, FaqSection, IndustryGrid, KPISection, PricingTiers, SecuritySection, TrustSection)
- Falsche technische Claims entfernen: keine anpassbare Hardware, keine anpassbare App, keine Flottenanpassung, kein LTE-M/NB-IoT/GPS-Bonding, kein Discovery Dashboard, keine Rahmenintegration
- ProblemSection: "Fleet"/"Flotten"-Bezug und Fleet Attrition Rate entfernen
- Korrekt kommunizieren: Tracker ist in Klingel, Reflektor oder Cupholder eingebaut
- TechSpecs-Section komplett überarbeiten (alle Werte sind falsch) — durch Platzhalter ersetzen
- Alle Bilder durch CSS-basierte Platzhalter ersetzen
- Sprache vollständig über i18n vereinheitlichen — kein hardcodierter Text mehr
- Footer-Alignment korrigieren
- Navbar-Links auf korrekte Sections mappen
- Firmenname konsistent machen
- Design hochwertiger gestalten: bessere Typografie, mehr Whitespace, subtilere Animationen, professionellere Cards und CTAs

## Capabilities

### New Capabilities
- `project-structure`: Reorganisation der gesamten Projektstruktur in `src/`-basiertes Layout mit klarer Trennung von Komponenten, Seiten, Styles und i18n
- `content-accuracy`: Korrektur aller inhaltlichen Fehler — Entfernung falscher Claims, korrekte Produktbeschreibungen, konsistente Firmendaten
- `i18n-consistency`: Vollständige Internationalisierung aller Texte über i18n t()-Funktionen, separate Locale-Dateien, keine hardcodierten Strings
- `design-premium`: Hochwertiges B2B-Design mit verbesserter Typografie, Spacing, Animationen, Card-Designs und Footer-Layout
- `placeholder-assets`: CSS-basierte Platzhalter für alle Bilder mit professionellem Look

### Modified Capabilities

## Impact

- Alle Import-Pfade ändern sich durch die Strukturreorganisation
- `vite.config.js` muss angepasst werden (neuer Root oder Alias)
- `index.html` Script-Pfad muss aktualisiert werden
- Alle Komponenten werden inhaltlich überarbeitet
- CSS wird umfassend überarbeitet für Premium-Design
- i18n.js wird aufgesplittet in Konfiguration + separate Locale-Dateien
- GitHub Actions Deploy-Workflow sollte weiterhin funktionieren (Vite Build Output bleibt `dist/`)
