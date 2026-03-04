## ADDED Requirements

### Requirement: Source files organized in src directory
All application source files (components, pages, styles, i18n, assets) SHALL be located within a `src/` directory. Root level SHALL only contain `index.html`, config files, and `package.json`.

#### Scenario: Standard project layout
- **WHEN** a developer opens the project
- **THEN** the following structure exists:
  - `src/components/layout/` contains Navbar, Footer, LanguageSwitcher
  - `src/components/sections/` contains Hero, CustomBrandingSection, ProblemSection, SolutionOverview, Accessories, TechSpecs, ContactEnterprise
  - `src/pages/` contains LandingPage, ContactPage, ImprintPage, PrivacyPage, TermsPage
  - `src/i18n/` contains configuration and locale files
  - `src/styles/` contains CSS files
  - `src/assets/` contains static assets
  - `src/App.jsx` and `src/main.jsx` are the app entry points

### Requirement: Unused components removed
All section components not imported in any page SHALL be deleted from the codebase.

#### Scenario: No dead component files
- **WHEN** the project is built
- **THEN** the following files do NOT exist: ApiSection.jsx, CaseStudies.jsx, FaqSection.jsx, IndustryGrid.jsx, KPISection.jsx, PricingTiers.jsx, SecuritySection.jsx, TrustSection.jsx

### Requirement: All imports use correct paths
All import statements SHALL reference the new `src/`-based file paths. The application SHALL build without errors after restructuring.

#### Scenario: Successful build after restructure
- **WHEN** `npm run build` is executed
- **THEN** the build completes without import errors
