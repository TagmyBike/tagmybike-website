## ADDED Requirements

### Requirement: All visible text uses i18n translation functions
Every user-visible text string in all components SHALL use the `t()` function from react-i18next. No hardcoded strings SHALL appear in JSX.

#### Scenario: TechSpecs uses translations
- **WHEN** the TechSpecs component renders
- **THEN** all text content comes from `t()` calls, not hardcoded strings

#### Scenario: ContactEnterprise uses translations
- **WHEN** the ContactEnterprise component renders
- **THEN** all text content including labels, descriptions, and button text comes from `t()` calls

#### Scenario: Footer uses translations
- **WHEN** the Footer component renders
- **THEN** all text including link labels, copyright, and contact info comes from `t()` calls

### Requirement: Translations stored in separate JSON files
English translations SHALL be in `src/i18n/locales/en.json` and German translations in `src/i18n/locales/de.json`. The i18n configuration file SHALL import these JSON files.

#### Scenario: Locale files exist and are valid JSON
- **WHEN** the application initializes
- **THEN** `src/i18n/locales/en.json` and `src/i18n/locales/de.json` are loaded as translation resources

### Requirement: i18n debug mode disabled
The i18n configuration SHALL have `debug: false` in production.

#### Scenario: No debug output in console
- **WHEN** the application runs
- **THEN** i18n does not output debug messages to the console

### Requirement: Complete translation coverage
Every translation key used in `en.json` SHALL have a corresponding entry in `de.json` and vice versa. No missing keys in either language.

#### Scenario: Language switch shows all content
- **WHEN** a user switches from EN to DE (or vice versa)
- **THEN** all text on the page updates to the selected language with no missing translations
