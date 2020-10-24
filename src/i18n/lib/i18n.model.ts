export interface LanguageOption {
  value: string;
  label: string;
}

export interface LanguageConfig {
  storeKey: string;
  defaultLang: string;
  languages: string[];
  languageOptions: LanguageOption[];
}
