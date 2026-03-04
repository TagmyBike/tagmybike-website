## ADDED Requirements

### Requirement: No customizable hardware claims
The website SHALL NOT claim that the hardware is customizable. Product descriptions SHALL state that trackers are pre-built into bell, reflector, or cupholder form factors.

#### Scenario: Accessories section describes fixed form factors
- **WHEN** a user views the Accessories section
- **THEN** the section describes three fixed products (bell tracker, reflector tracker, cupholder tracker) without any "customize" or "configurable hardware" language

### Requirement: App described as non-customizable
The website SHALL state that a companion app exists for tracking but SHALL NOT claim the app is customizable or white-labelable.

#### Scenario: App references are accurate
- **WHEN** a user views any section mentioning the app
- **THEN** the app is described as a companion tracking app without customization claims

### Requirement: No fleet-level customization claims
The website SHALL NOT claim fleet-level customization capabilities.

#### Scenario: CustomBranding section has no fleet customization
- **WHEN** a user views the CustomBrandingSection
- **THEN** there are no claims about fleet-level customization or fleet management customization

### Requirement: Problem section without fleet references
The ProblemSection title SHALL NOT contain "Fleet" or "Flotten". The fleet attrition rate metric SHALL be removed.

#### Scenario: Problem section shows bike theft without fleet context
- **WHEN** a user views the ProblemSection
- **THEN** the title reads "Bike Theft is a Billion Dollar Problem" (without "Fleet")
- **AND** there is no "fleet attrition rate" metric displayed
- **AND** only two metrics are shown (annual loss and avg theft time)

### Requirement: Trackers not described as frame-integrated
The website SHALL clearly communicate that trackers are built into accessories (bell, reflector, cupholder), NOT integrated into the bike frame.

#### Scenario: Solution section describes accessory-based tracking
- **WHEN** a user views the SolutionOverview section
- **THEN** tracker placement is described as being in bell, reflector, or cupholder
- **AND** there is no mention of frame integration

### Requirement: No LTE-M NB-IoT GPS bonding claims
The website SHALL NOT claim LTE-M, NB-IoT, or GPS bonding capabilities. Connectivity SHALL be described generically as "GPS-based tracking".

#### Scenario: Tech content has no false connectivity claims
- **WHEN** a user views any section on the website
- **THEN** there is no mention of LTE-M, NB-IoT, or GPS bonding

### Requirement: No Discovery Dashboard claims
The website SHALL NOT reference a "Discovery Dashboard".

#### Scenario: No dashboard product claims
- **WHEN** a user views the entire website
- **THEN** there is no mention of a "Discovery Dashboard"

### Requirement: TechSpecs replaced with placeholders
The TechSpecs section SHALL NOT display specific false technical values. It SHALL show generic feature highlights or placeholder text.

#### Scenario: TechSpecs shows feature highlights
- **WHEN** a user views the TechSpecs section
- **THEN** no specific battery life, dimensions, sensor lists, or connectivity specs are shown
- **AND** the section shows general product advantages or a "detailed specs coming soon" message

### Requirement: Consistent company name
The company name SHALL be consistently "BOOOST E-Mobility Solutions GmbH" across all pages (Footer, Imprint, Contact, Privacy, Terms).

#### Scenario: Company name matches across all pages
- **WHEN** a user navigates to any page
- **THEN** the company name displayed is "BOOOST E-Mobility Solutions GmbH"

### Requirement: Navbar links map to correct sections
Each navbar link SHALL scroll to the section it describes. Links SHALL match the actual sections present on the landing page.

#### Scenario: Nav links scroll to correct targets
- **WHEN** a user clicks a navbar link
- **THEN** the page scrolls to the corresponding section (not a mismatched section)
