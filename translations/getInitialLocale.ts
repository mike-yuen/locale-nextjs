import { defaultLocale } from "./config";
import { Locale, isLocale } from "./types";

export function getInitialLocale(): Locale {
  const localSetting = JSON.parse(localStorage.getItem("locale") as string);
  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  const [browserSetting] = navigator.language.split("-");
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
}
