## ADDED Requirements

### Requirement: CSS variables for off-palette colors
All off-palette colors (#FF4D4D, #C084FC, #FF9F1C) SHALL be defined as CSS custom properties.

#### Scenario: Colors use variables
- **WHEN** inspecting component styles
- **THEN** colors reference var(--color-danger), var(--color-purple), var(--color-warning) instead of hardcoded hex values

### Requirement: Inline styles moved to CSS
Navbar and Footer inline `<style>` tags SHALL be moved to index.css.

#### Scenario: No inline style tags
- **WHEN** inspecting Navbar.jsx and Footer.jsx source
- **THEN** no `<style>` JSX tags exist; responsive rules are in index.css

### Requirement: Reflector icon fix
Accessories reflector card SHALL use Circle/Disc icon instead of Lightbulb.

#### Scenario: Correct icon
- **WHEN** user views the reflector tracker card
- **THEN** the icon is a Circle (disc shape) representing a reflector, not a lightbulb

### Requirement: Footer cleanup
Footer SHALL include LinkedIn link, remove duplicate legal links, and use B2B-focused tagline.

#### Scenario: No duplicate links
- **WHEN** user views the footer
- **THEN** legal links appear only once (in the column), not duplicated in the bottom bar

#### Scenario: LinkedIn link present
- **WHEN** user views the footer
- **THEN** a LinkedIn icon/link is visible in the footer

### Requirement: B2B White-Label pill translation
The "B2B White-Label" pill in CustomBrandingSection SHALL use i18n translation keys.

#### Scenario: German translation
- **WHEN** language is set to German
- **THEN** the pill reads "B2B White-Label" (or appropriate German translation) via t() function

### Requirement: Icon opacity improvement
Accessories icons SHALL have 0.8 opacity at rest instead of 0.6.

#### Scenario: Default icon opacity
- **WHEN** user views accessories cards without hovering
- **THEN** icons display at 0.8 opacity
