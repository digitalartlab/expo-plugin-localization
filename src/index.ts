import { ConfigPlugin } from "expo/config-plugins";

import { withLocalizableProject } from "./withLocalizableProject";
import { withLocalizableResources } from "./withLocalizableResources";

/**
 * Adds references and placeholder files to the Xcode project for each region. This is necessary for iOS to show the language switcher in the Settings app.
 */
const withiOSLocalization: ConfigPlugin<{ knownRegions?: string[] }> = (
  config,
  { knownRegions = ["en"] }
) => {
  config = withLocalizableProject(config, { knownRegions });
  config = withLocalizableResources(config, { knownRegions });
  return config;
};

export default withiOSLocalization;
