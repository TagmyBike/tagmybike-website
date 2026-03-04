## ADDED Requirements

### Requirement: Social proof section
A Social Proof section SHALL be displayed between the Hero and CustomBranding sections with placeholder partner logo slots.

#### Scenario: Social proof renders placeholder slots
- **WHEN** the landing page loads
- **THEN** a section with "Trusted by leading manufacturers" heading and 4-5 empty logo placeholder slots is visible below the hero

### Requirement: No invented data
The Social Proof section SHALL NOT contain invented company names, fake logos, or fabricated testimonials.

#### Scenario: No fake content
- **WHEN** inspecting the social proof section
- **THEN** all logo slots show a neutral placeholder pattern (e.g., dashed border box) with no fake company names
