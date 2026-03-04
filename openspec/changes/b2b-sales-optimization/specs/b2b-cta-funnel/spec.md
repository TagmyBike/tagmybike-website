## ADDED Requirements

### Requirement: Differentiated CTAs across funnel
CTAs SHALL be differentiated by position in the sales funnel: "Request a Demo" (top), "Get a Quote" / "Request Sample" (bottom sections).

#### Scenario: Hero CTA
- **WHEN** user views the hero
- **THEN** primary CTA reads "Request a Demo"

#### Scenario: Accessories CTA
- **WHEN** user views the accessories section
- **THEN** a "Request Sample" CTA button appears below the product cards

#### Scenario: Contact section CTA
- **WHEN** user views the contact enterprise section
- **THEN** primary CTA reads "Get a Quote" instead of generic "Ready to Get Started?"

### Requirement: German nav CTA
The German navigation CTA SHALL read "Vertrieb kontaktieren" instead of generic "Kontakt".

#### Scenario: German nav label
- **WHEN** language is set to German
- **THEN** the nav CTA button reads "Vertrieb kontaktieren"
