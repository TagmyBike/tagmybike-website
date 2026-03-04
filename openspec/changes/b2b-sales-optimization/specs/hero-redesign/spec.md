## ADDED Requirements

### Requirement: Centered hero layout
The Hero section SHALL use a full-width centered text layout instead of a split grid with placeholder visual.

#### Scenario: Hero renders without placeholder
- **WHEN** the landing page loads
- **THEN** the hero displays centered title, subtitle, and CTA buttons without any "Product Visual" box or Bike icon placeholder

### Requirement: Stronger primary CTA
The Hero primary CTA SHALL read "Request a Demo" (EN) / "Demo anfragen" (DE) instead of generic "Get in Touch".

#### Scenario: CTA label differentiation
- **WHEN** user views the hero section
- **THEN** the primary button reads "Request a Demo" and the secondary button reads "View Products"
