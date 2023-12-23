import {
  withInfoPlist,
  withAndroidManifest,
  AndroidConfig,
  ConfigPlugin,
} from "expo/config-plugins";

import { withAndroidLocalizableGradle } from "./withAndroidLocalizableGradle";
import { withAndroidLocalizableManifest } from "./withAndroidLocalizableManifest";
import { withAndroidLocalizableResources } from "./withAndroidLocalizableResources";
import { withIosLocalizableProject } from "./withIosLocalizableProject";
import { withIosLocalizableResources } from "./withIosLocalizableResources";

const withMyApiKey: ConfigPlugin<{ locales?: string[] }> = (
  config,
  { locales = ["en"] },
) => {
  config = withInfoPlist(config, (config) => {
    config.modResults["LOCALES_SUPPORTED"] = locales.join(",");
    return config;
  });

  config = withAndroidManifest(config, (config) => {
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(
      config.modResults,
    );

    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      "LOCALES_SUPPORTED",
      locales.join(","),
    );
    return config;
  });

  config = withIosLocalizableProject(config, { locales });
  config = withIosLocalizableResources(config, { locales });
  config = withAndroidLocalizableGradle(config, { locales });
  config = withAndroidLocalizableManifest(config);
  config = withAndroidLocalizableResources(config, { locales });

  return config;
};

export default withMyApiKey;
