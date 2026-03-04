## ADDED Requirements

### Requirement: Spec table format with TBD values
TechSpecs section SHALL display specifications in a key-value table format with "TBD" markers for unconfirmed values.

#### Scenario: Specs display as table rows
- **WHEN** user views the specifications section
- **THEN** specs are shown as labeled rows (e.g., "Battery Life: TBD", "Water Resistance: TBD") instead of marketing-style feature cards

### Requirement: Section rename to Specifications
The TechSpecs section title SHALL read "Specifications" (EN) / "Spezifikationen" (DE) instead of "Product Features".

#### Scenario: Section title
- **WHEN** user views the tech section
- **THEN** the heading reads "Specifications"

### Requirement: ProblemSection enhancements
ProblemSection SHALL render the tag pill, display 3 metric cards, and include source citations.

#### Scenario: Tag pill renders
- **WHEN** user views the problem section
- **THEN** a "Billion Dollar Problem" pill tag is visible above the title

#### Scenario: Third metric card
- **WHEN** user views the problem section
- **THEN** three metric cards are displayed including a recovery-related metric marked as "Data pending"
