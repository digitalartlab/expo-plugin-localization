import { ConfigPlugin, withAndroidManifest } from "expo/config-plugins";

/**
 * Add reference to the locales_config.xml file in the AndroidManifest.xml
 */
export const withAndroidLocalizableManifest: ConfigPlugin = (config) => {
  return withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults;
    const applications = androidManifest.manifest.application;
    if (!applications || !applications[0]) {
      throw new Error(
        `Cannot configure localization because the AndroidManifest.xml is missing an <application> tag`,
      );
    }

    applications[0].$["android:localeConfig"] = "@xml/locales_config";
    return config;
  });
};
