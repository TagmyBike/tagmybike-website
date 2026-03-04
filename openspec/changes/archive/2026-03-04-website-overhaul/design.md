## Context

TagMyBike ist eine Vite+React Single-Page-Application für B2B-Outreach. Die aktuelle Codebasis hat Source-Dateien im Root-Verzeichnis verstreut, enthält 8 unbenutzte Komponenten, hardcodierte Texte trotz i18n-Setup, falsche technische Claims und ein Design das nicht dem B2B-Enterprise-Standard entspricht. Die Seite wird via GitHub Pages auf tagmybike.com deployt.

Aktuelle Sections auf der Landing Page: Hero → CustomBranding → Problem → SolutionOverview → Accessories → TechSpecs → ContactEnterprise

## Goals / Non-Goals

**Goals:**
- Projektstruktur in `src/`-basiertes Layout reorganisieren für Wartbarkeit
- Alle inhaltlich falschen Claims entfernen und durch korrekte Produktinformationen ersetzen
- 100% i18n-Abdeckung — kein hardcodierter Text in Komponenten
- Hochwertiges, professionelles B2B-Design
- Bilder durch CSS-Platzhalter ersetzen bis echte Assets vorliegen
- Footer-Alignment und Navbar-Links korrigieren

**Non-Goals:**
- Kein Backend/API — Contact bleibt mailto-basiert
- Keine neuen Seiten oder Routes hinzufügen
- Keine neuen Drittanbieter-Bibliotheken (außer ggf. Google Fonts)
- Kein CMS oder dynamischer Content
- Keine SEO-Optimierung über das Bestehende hinaus

## Decisions

### 1. Projektstruktur: Alles nach `src/`

Alle Source-Dateien werden nach `src/` verschoben. Vite wird mit `root: '.'` beibehalten, aber `index.html` referenziert `/src/main.jsx`.

**Struktur:**
```
src/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
      LanguageSwitcher.jsx
    sections/
      Hero.jsx
      CustomBrandingSection.jsx
      ProblemSection.jsx
      SolutionOverview.jsx
      Accessories.jsx
      TechSpecs.jsx
      ContactEnterprise.jsx
  pages/
    LandingPage.jsx
    ContactPage.jsx
    ImprintPage.jsx
    PrivacyPage.jsx
    TermsPage.jsx
  i18n/
    index.js
    locales/
      en.json
      de.json
  styles/
    index.css
  assets/
    logo.png
  App.jsx
  main.jsx
```

**Rationale:** Standard-React-Konvention, klare Trennung, einfacher zu navigieren. Die 8 unbenutzten Komponenten werden gelöscht statt migriert.

### 2. i18n: Separate JSON-Dateien

Übersetzungen werden aus dem monolithischen `i18n.js` (960 Zeilen) in `en.json` und `de.json` extrahiert. `i18n/index.js` enthält nur die Konfiguration.

**Rationale:** Übersichtlicher, einfacher zu pflegen, ermöglicht zukünftige Locale-Erweiterung.

### 3. Inhaltliche Korrekturen

Folgende Claims werden entfernt/korrigiert:
- **Hardware:** "Customizable hardware" → Tracker ist fertig verbaut in Klingel, Reflektor oder Cupholder
- **App:** Existiert, ist aber nicht anpassbar → "Companion App für Tracking" ohne Customization-Claims
- **Flotte:** Keine Flottenanpassung, keine Fleet Attrition Rate, kein "Fleet" im Problem-Titel
- **Konnektivität:** Kein LTE-M, NB-IoT, GPS-Bonding → durch generische Beschreibung ersetzen ("GPS-basiertes Tracking")
- **Dashboard:** Kein Discovery Dashboard → entfernen
- **TechSpecs:** Alle Werte sind falsch → Section durch generische Platzhalter ersetzen ("Specifications coming soon" / Feature-Highlights statt konkrete Werte)
- **Firmenname:** Konsistent "BOOOST E-Mobility Solutions GmbH" verwenden (aus Impressum)

### 4. Design-Ansatz: Evolution statt Revolution

Das bestehende Dark-Theme mit Lime-Akzent wird beibehalten, aber verfeinert:
- Mehr Whitespace zwischen Sections (min. 100px padding)
- Subtilere Animationen (kürzere Dauer, weniger Partikel)
- Cleaner Card-Designs mit konsistentem Glassmorphism
- Bessere Typografie-Hierarchie (klare H1→H3-Abstufung)
- Footer: CSS Grid mit gleichmäßiger Spaltenbreite und korrektem Alignment
- Navbar: Links korrekt zu den tatsächlichen Section-IDs mappen

### 5. Platzhalter-Bilder: CSS-basiert

Statt externer Placeholder-Services werden CSS-basierte Platzhalter mit Lucide-Icons erstellt. Jeder Platzhalter hat:
- Glassmorphism-Hintergrund
- Passendes Lucide-Icon (Bike, Bell, Coffee, Lightbulb)
- Dezenten Gradient-Border

**Rationale:** Keine externen Abhängigkeiten, konsistent mit dem Design-System, funktioniert offline.

## Risks / Trade-offs

- [Alle Import-Pfade brechen] → Systematisches Suchen/Ersetzen, danach Build-Verifizierung
- [TechSpecs ohne konkrete Werte wirkt dünn] → Durch Feature-Highlights und Vorteile ersetzen statt leere Section
- [i18n-Aufspaltung kann Keys brechen] → Automatisierter Test: `npm run build` nach Migration
- [Platzhalter-Bilder könnten unprofessionell wirken] → Hochwertiges CSS-Design mit Icons, klar als "Coming soon" gekennzeichnet
