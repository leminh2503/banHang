import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import i18nResource from "../i18n";
import {AsyncStorage} from "react-native";
// import {NativeModules} from "react-native";
// import {isIOS} from "./device";

// const getDeviceLanguage = (): string => {
//   return isIOS()
//     ? NativeModules.SettingsManager.settings.AppleLocale ||
//         NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
//     : NativeModules.I18nManager.localeIdentifier;
// };
//
// const languageDetector: LanguageDetectorModule = {
//   type: "languageDetector",
//   detect: (): string => getDeviceLanguage(),
//   init: (): void => {},
//   cacheUserLanguage: (): void => {},
// };
AsyncStorage.getItem("language").then((lang) => {
  i18next
    // .use(languageDetector)
    .use(initReactI18next)
    .init({
      lng: lang ?? "vi",
      compatibilityJSON: "v3",
      // fallbackLng: language,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      resources: i18nResource,
    });
});
