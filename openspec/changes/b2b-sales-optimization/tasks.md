## Tasks

### 1. CSS: Add off-palette color variables
- [ ] Add `--color-danger: #FF4D4D`, `--color-purple: #C084FC`, `--color-warning: #FF9F1C` to `:root` in index.css
- **Files:** src/styles/index.css

### 2. CSS: Move inline styles to index.css
- [ ] Move Navbar responsive `<style>` rules to index.css
- [ ] Move Footer responsive `<style>` rules to index.css
- [ ] Remove `<style>` JSX tags from both components
- **Files:** src/styles/index.css, src/components/layout/Navbar.jsx, src/components/layout/Footer.jsx

### 3. i18n: Update nav labels and CTAs
- [ ] EN: Change nav labels to "Products", "Solutions", "Specs"; change nav.contact to "Contact Sales"
- [ ] DE: Change nav labels to "Produkte", "Lösungen", "Spezifikationen"; change nav.contact to "Vertrieb kontaktieren"
- [ ] EN: Change hero.cta to "Request a Demo", hero.secondaryCta to "View Solutions"
- [ ] DE: Change hero.cta to "Demo anfragen", hero.secondaryCta to "Lösungen ansehen"
- [ ] Add customization.pill key: EN "B2B White-Label", DE "B2B White-Label"
- **Files:** src/i18n/locales/en.json, src/i18n/locales/de.json

### 4. i18n: Add social proof translations
- [ ] EN: Add socialProof.title, socialProof.subtitle, socialProof.partnerCta keys
- [ ] DE: Add matching German translations
- **Files:** src/i18n/locales/en.json, src/i18n/locales/de.json

### 5. i18n: Update problem section translations
- [ ] EN: Add problem.metrics.recovery with value "—" and label "Recovery rate — data pending"
- [ ] EN: Add problem.source key for citation
- [ ] DE: Add matching German translations
- **Files:** src/i18n/locales/en.json, src/i18n/locales/de.json

### 6. i18n: Update techSpecs to Specifications format
- [ ] EN: Rename techSpecs.title to "Specifications", update subtitle
- [ ] EN: Change feature descriptions to "TBD" spec values
- [ ] DE: Mirror changes in German
- **Files:** src/i18n/locales/en.json, src/i18n/locales/de.json

### 7. i18n: Update accessories with specs and CTA
- [ ] EN: Add short spec line per accessory (bell.spec, cup.spec, light.spec) with TBD values
- [ ] EN: Add accessories.cta "Request Sample"
- [ ] DE: Add matching German translations
- **Files:** src/i18n/locales/en.json, src/i18n/locales/de.json

### 8. i18n: Update contactEnterprise and footer
- [ ] EN: Change contactEnterprise.title to "Get a Quote"
- [ ] EN: Change footer.tagline to B2B-focused tagline
- [ ] DE: Mirror changes
- **Files:** src/i18n/locales/en.json, src/i18n/locales/de.json

### 9. i18n: Update SolutionOverview differentiation
- [ ] EN: Add solutionOverview.subtitle, change card descriptions to platform focus
- [ ] EN: Differentiate CTAs per card
- [ ] DE: Mirror changes
- **Files:** src/i18n/locales/en.json, src/i18n/locales/de.json

### 10. Navbar: Fix link mappings
- [ ] Change navLinks sectionIds: Products → accessories, Solutions → solutions, Specs → tech
- [ ] Update nav label keys to match new labels
- [ ] Remove inline `<style>` tag (moved to CSS in task 2)
- **Files:** src/components/layout/Navbar.jsx

### 11. Hero: Redesign to centered layout
- [ ] Remove split grid (col-span-6 + col-span-6)
- [ ] Remove placeholder visual box with Bike icon
- [ ] Center all content with max-width constraint
- [ ] Update CTA button text via i18n keys
- **Files:** src/components/sections/Hero.jsx

### 12. Create SocialProof component
- [ ] Create new component with "Trusted by" heading
- [ ] Add 4-5 dashed-border placeholder logo slots (no fake names)
- [ ] Add "Become a Partner" CTA
- **Files:** src/components/sections/SocialProof.jsx (new)

### 13. LandingPage: Add SocialProof import
- [ ] Import SocialProof component
- [ ] Place between Hero and CustomBrandingSection
- **Files:** src/pages/LandingPage.jsx

### 14. ProblemSection: Add tag pill and 3rd metric
- [ ] Render problem.tag as pill above title
- [ ] Add 3rd metric card (recovery, with Shield icon, "—" value)
- [ ] Add source citation text below metrics
- [ ] Use CSS variable colors instead of hardcoded hex
- **Files:** src/components/sections/ProblemSection.jsx

### 15. Accessories: Fix icon, add specs, add CTA
- [ ] Replace Lightbulb with Circle for reflector
- [ ] Add spec line below description per card
- [ ] Add "Request Sample" CTA button below cards
- [ ] Change icon opacity from 0.6 to 0.8 at rest
- **Files:** src/components/sections/Accessories.jsx

### 16. SolutionOverview: Differentiate as platform overview
- [ ] Update card content to focus on platform capabilities (not hardware repeat)
- [ ] Use CSS variable for purple color instead of hardcoded
- [ ] Differentiate card CTAs
- **Files:** src/components/sections/SolutionOverview.jsx

### 17. TechSpecs: Convert to spec table format
- [ ] Replace feature cards with key-value spec rows
- [ ] Add TBD markers for unconfirmed values
- [ ] Add "Specifications subject to final production" disclaimer
- **Files:** src/components/sections/TechSpecs.jsx

### 18. ContactEnterprise: Update CTA
- [ ] Change title to "Get a Quote" via i18n
- [ ] Update subtitle to be more sales-focused
- **Files:** src/components/sections/ContactEnterprise.jsx

### 19. Footer: Cleanup and LinkedIn
- [ ] Remove duplicate legal links from bottom bar
- [ ] Add LinkedIn icon/link
- [ ] Update tagline to B2B-focused via i18n
- [ ] Remove inline `<style>` tag (moved to CSS in task 2)
- **Files:** src/components/layout/Footer.jsx

### 20. CustomBrandingSection: Translate pill
- [ ] Replace hardcoded "B2B White-Label" with t('customization.pill')
- **Files:** src/components/sections/CustomBrandingSection.jsx
