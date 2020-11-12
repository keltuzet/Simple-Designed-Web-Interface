import { RU, EN, LANG_STORE_KEY, RU_LABEL, EN_LABEL } from './language.const';

export const I18N_CONFIG = Object.freeze({
  defaultLang: RU,
  languages: [RU, EN],
  languageOptions: [
    { value: RU, label: RU_LABEL },
    { value: EN, label: EN_LABEL },
  ],
  storeKey: LANG_STORE_KEY,
});
