import { ConfigPlugin, withXcodeProject } from "expo/config-plugins";

/**
 * Adds a Localizable.strings file reference to the Xcode project for each locale. This is necessary for Xcode to recognize the various languages.
 */
export const withIosLocalizableProject: ConfigPlugin<{
  locales: string[];
}> = (config, { locales }) => {
  return withXcodeProject(config, async (config) => {
    const xcodeProject = config.modResults;
    locales.forEach((locale) => {
      // Add the locale to the project
      // Deduplication is handled by the function
      xcodeProject.addKnownRegion(locale);
    });

    xcodeProject.addPbxGroup("Resources", "Resources");

    const localizationVariantGp = xcodeProject.addLocalizationVariantGroup(
      "Localizable.strings",
    );
    const localizationVariantGpKey = localizationVariantGp.fileRef;

    locales.forEach((locale) => {
      // Create a file reference for each locale
      xcodeProject.addResourceFile(
        `Resources/${locale}.lproj/Localizable.strings`,
        { variantGroup: true },
        localizationVariantGpKey,
      );
    });
    return config;
  });
};
