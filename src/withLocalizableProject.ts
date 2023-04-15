import { ConfigPlugin, withXcodeProject } from "expo/config-plugins";

/**
 * Adds a Localizable.strings file reference to the Xcode project for each region. This is necessary for Xcode to recognize the various languages.
 */
export const withLocalizableProject: ConfigPlugin<{
  knownRegions: string[];
}> = (config, { knownRegions }) => {
  return withXcodeProject(config, async (config) => {
    const xcodeProject = config.modResults;
    knownRegions.forEach((region) => {
      // Add the region to the project
      // Deduplication is handled by the function
      xcodeProject.addKnownRegion(region);
    });

    xcodeProject.addPbxGroup("Resources", "Resources");

    const localizationVariantGp = xcodeProject.addLocalizationVariantGroup(
      "Localizable.strings"
    );
    const localizationVariantGpKey = localizationVariantGp.fileRef;

    knownRegions.forEach((region) => {
      // Create a file reference for each region
      xcodeProject.addResourceFile(
        `Resources/${region}.lproj/Localizable.strings`,
        { variantGroup: true },
        localizationVariantGpKey
      );
    });
    return config;
  });
};
