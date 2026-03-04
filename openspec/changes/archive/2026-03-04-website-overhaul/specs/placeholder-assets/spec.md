## ADDED Requirements

### Requirement: Hero image replaced with CSS placeholder
The Hero section SHALL display a CSS-based placeholder instead of `hero-visual.png`. The placeholder SHALL use a glassmorphism background with a Lucide Bike icon and subtle gradient border.

#### Scenario: Hero displays CSS placeholder
- **WHEN** the Hero section renders
- **THEN** a styled CSS placeholder with a Bike icon is displayed instead of a PNG image
- **AND** the placeholder fits the overall dark theme with lime accents

### Requirement: Accessory images replaced with CSS placeholders
Each accessory card (bell, cupholder, taillight) SHALL display a CSS-based placeholder with an appropriate Lucide icon instead of PNG product images.

#### Scenario: Accessories show icon placeholders
- **WHEN** the Accessories section renders
- **THEN** each of the three product cards shows a CSS placeholder with an icon (Bell, Coffee, Lightbulb)
- **AND** placeholders have consistent sizing and styling across all three cards

### Requirement: Placeholders use consistent styling
All CSS placeholders SHALL share the same base styling: glassmorphism background, rounded corners matching `--radius-card`, centered icon, and a subtle gradient border using the design system colors.

#### Scenario: Placeholder visual consistency
- **WHEN** multiple placeholders are visible on the page
- **THEN** they share the same background treatment, border style, and icon sizing
