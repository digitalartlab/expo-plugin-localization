import ExpoPluginLocalizationModule from "./ExpoPluginLocalizationModule";

export function getLocales(): string[] {
  const localesString: string = ExpoPluginLocalizationModule.getLocales();
  const locales = localesString.split(",");

  return locales;
}
