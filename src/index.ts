import { ConfigPlugin } from "expo/config-plugins";

import { withLocalizableProject } from "./withLocalizableProject";
import { withLocalizableResources } from "./withLocalizableResources";

const withiOSLocalization: ConfigPlugin<{ knownRegions?: string[] }> = (
  config,
  { knownRegions = ["en"] }
) => {
  config = withLocalizableProject(config, { knownRegions });
  config = withLocalizableResources(config, { knownRegions });
  return config;
};

export default withiOSLocalization;
