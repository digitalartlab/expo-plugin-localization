import { ConfigPlugin } from "expo/config-plugins";

import { withIosLocalizableProject } from "./withIosLocalizableProject";
import { withIosLocalizableResources } from "./withIosLocalizableResources";
import { withAndroidLocalizableGradle } from "./withAndroidLocalizableGradle";
import { withAndroidLocalizableManifest } from "./withAndroidLocalizableManifest";
import { withAndroidLocalizableResources } from "./withAndroidLocalizableResources";

/**
 * Adds references and placeholder files to the Xcode project for each locale. This is necessary for iOS to show the language switcher in the Settings app.
 */
const withLocalization: ConfigPlugin<{ locales?: string[] }> = (
  config,
  { locales = ["en"] }
) => {
  config = withIosLocalizableProject(config, { locales });
  config = withIosLocalizableResources(config, { locales });
  config = withAndroidLocalizableGradle(config, { locales });
  config = withAndroidLocalizableManifest(config);
  config = withAndroidLocalizableResources(config, { locales });
  return config;
};

export default withLocalization;
