## ADDED Requirements

### Requirement: Increased section spacing
All main sections SHALL have a minimum vertical padding of 100px to create clear visual separation.

#### Scenario: Sections have generous whitespace
- **WHEN** a user scrolls through the landing page
- **THEN** each section has at least 100px padding top and bottom

### Requirement: Subtle animations
Animations SHALL be refined and professional. The Hero section SHALL have a maximum of 2 floating particles (reduced from 6). Animation durations SHALL not exceed 8 seconds for loops.

#### Scenario: Hero has minimal particle animation
- **WHEN** the Hero section loads
- **THEN** no more than 2 subtle floating particles are visible
- **AND** animations feel smooth and professional, not distracting

### Requirement: Typography hierarchy
Headings SHALL follow a clear size hierarchy: H1 (3rem+), H2 (2rem+), H3 (1.25rem+). Section titles SHALL use the display font (Space Grotesk). Body text SHALL use the primary font (Inter).

#### Scenario: Visual heading hierarchy is clear
- **WHEN** a user views any page
- **THEN** headings are visually distinct and decrease in size from H1 to H3

### Requirement: Consistent card design
All card components SHALL use the same glassmorphism style (glass-panel or glass-panel-enhanced). Hover effects SHALL be consistent across all cards (same translateY, same transition timing).

#### Scenario: Cards have uniform styling
- **WHEN** a user views sections with cards (CustomBranding, Problem, Solution, Accessories)
- **THEN** all cards share the same background treatment, border radius, and hover behavior

### Requirement: Footer alignment corrected
The Footer SHALL use CSS Grid with equal column widths. Footer sub-items within each column SHALL be left-aligned within their column. The overall footer layout SHALL be visually balanced.

#### Scenario: Footer columns are properly aligned
- **WHEN** a user scrolls to the Footer
- **THEN** the three columns (Brand, Legal, Contact) are evenly spaced
- **AND** items within each column are vertically aligned

### Requirement: Professional CTA buttons
Call-to-action buttons SHALL have consistent sizing, clear hover states, and sufficient padding. Primary CTAs SHALL use the lime color. Secondary CTAs SHALL use outline style.

#### Scenario: CTA buttons look professional
- **WHEN** a user views any CTA button
- **THEN** the button has at least 16px vertical and 32px horizontal padding
- **AND** hover state provides clear visual feedback

### Requirement: Mobile responsive layout
All sections SHALL render correctly on mobile viewports (320px - 768px). Cards SHALL stack vertically. Navigation SHALL collapse to hamburger menu.

#### Scenario: Landing page renders on mobile
- **WHEN** a user views the site on a 375px wide viewport
- **THEN** all content is readable, cards stack vertically, no horizontal overflow occurs
