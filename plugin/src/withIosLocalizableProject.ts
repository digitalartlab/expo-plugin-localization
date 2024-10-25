import { ConfigPlugin, withInfoPlist } from "expo/config-plugins";

/**
 * Adds a Localizable.strings file reference to the Xcode project for each locale. This is necessary for Xcode to recognize the various languages.
 */
export const withIosLocalizableProject: ConfigPlugin<{
  locales: string[];
}> = (config, { locales }) => {
  return withInfoPlist(config, (config) => {
    config.modResults["LOCALES_SUPPORTED"] = locales.join(",");
    config.modResults["CFBundleAllowMixedLocalizations"] = true;
    config.modResults["CFBundleLocalizations"] = locales;
    config.modResults["CFBundleDevelopmentRegion"] = "en";
    return config;
  });
};
