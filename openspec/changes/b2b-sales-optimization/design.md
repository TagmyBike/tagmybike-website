## Context

Die TagMyBike-Webseite hat eine solide Grundstruktur (React + Vite, i18next, Lucide Icons), enthält aber B2B-Conversion-Schwächen: unfertige Hero-Platzhalter, falsche Nav-Mappings, fehlender Social Proof, generische CTAs, keine echten Specs, und Design-Inkonsistenzen. Wichtige Einschränkung: Keine erfundenen Daten oder Testimonials.

## Goals / Non-Goals

**Goals:**
- Hero-Section professionell ohne "Product Visual" Platzhalter
- Social Proof Section mit leeren Platzhalter-Slots (keine erfundenen Logos/Namen)
- Korrekte Navigation (Products → #accessories, Solutions → #solutions, Specs → #tech)
- Differenzierte CTAs im Sales-Funnel (Request Demo → Get Quote → Request Sample)
- ProblemSection mit Tag-Pill, 3. Metrik, Quellenangaben
- Accessories mit korrektem Reflector-Icon, Kurzspecs, CTA
- SolutionOverview als Plattform-Überblick differenziert
- TechSpecs als echte Spec-Tabelle mit TBD-Markierungen
- Footer: LinkedIn, keine Duplikate, B2B-Tagline
- CSS: Off-Palette-Farben als Variablen, inline Styles nach CSS
- i18n: Alle hardcodierten Strings übersetzen

**Non-Goals:**
- Keine erfundenen Testimonials oder Kundennamen
- Keine falschen Metriken oder Statistiken
- Keine neuen Seiten oder Routing-Änderungen
- Keine Backend-Integration

## Decisions

1. **Hero-Redesign: Zentriertes Text-Layout statt Platzhalter-Visual**
   - Rationale: Ein "Product Visual" Box mit Bike-Icon wirkt unprofessionell. Zentrierter Text mit starkem Gradient und CTA-Buttons ist konversionsoptimaler und braucht keine echten Produktfotos.
   - Alternativen: Split-Layout beibehalten → verworfen, da ohne echtes Visual der rechte Bereich leer wirkt.

2. **Social Proof: Generische Platzhalter-Slots statt Fake-Logos**
   - Rationale: User hat explizit gesagt: keine erfundenen Daten. Daher: "Trusted by leading manufacturers" + 4-5 leere Logo-Platzhalter mit "Your Logo Here" Pattern.
   - Alternativen: Section komplett weglassen → verworfen, da Social Proof strukturell wichtig für B2B.

3. **TechSpecs: Spec-Tabelle mit TBD statt Marketing-Phrasen**
   - Rationale: B2B-Käufer erwarten konkrete Specs. TBD-Markierung ist ehrlicher als vage Phrasen.
   - Format: Key-Value Rows (Spec Name → Value/TBD).

4. **ProblemSection 3. Metrik: Recovery-Rate mit "Data pending" Markierung**
   - Rationale: 3 Metriken sehen visuell besser aus als 2, aber Wert muss als "coming soon" markiert sein, da keine echten Daten vorliegen.

5. **Off-Palette Farben als CSS-Variablen**
   - `--color-danger: #FF4D4D` (ProblemSection)
   - `--color-purple: #C084FC` (SolutionOverview)
   - `--color-warning: #FF9F1C` (ProblemSection)

6. **Inline `<style>` Tags → CSS-Datei**
   - Navbar und Footer inline Styles nach index.css verschieben für bessere Wartbarkeit.

## Risks / Trade-offs

- [Social Proof ohne Logos wirkt leer] → Mitigation: Dezentes "Partner with us" CTA und professionelles Platzhalter-Design
- [TBD-Specs könnten unfertig wirken] → Mitigation: "Specifications subject to final production" Disclaimer
- [3. Metrik ohne echte Daten] → Mitigation: Shield-Icon + "Data pending" statt konkretem Wert
