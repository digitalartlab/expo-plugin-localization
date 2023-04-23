import { ConfigPlugin, withAppBuildGradle } from 'expo/config-plugins';

const setAndroidGradleLocalization = (
  buildGradle: string,
  locales: string[]
) => {
  const localesString = locales
    .map((locale) => `"${locale}"`)
    .join(', ');
  
  const resourceConfigurationsString = `resourceConfigurations += [${localesString}]`;

  // There's already an exact match for the resourceConfigurations, so no need to add it again
  if (buildGradle.includes(resourceConfigurationsString)) {
    return buildGradle;
  }

  // There's already a resourceConfigurations, but it's not an exact 
  // One day, there might be a cleaner way to do this, but for now, we'll just throw an error and force the user to run expo prebuild --clean
  if (buildGradle.includes('resourceConfigurations')) {
    throw new Error(
      `build.gradle already contains a conflicting resourceConfigurations. Please run expo prebuild with the --clean flag to resolve.`
    )
  }
  
  // Add the resourceConfigurations to the defaultConfig
  // Mind the indentation
  return buildGradle.replace(
    /defaultConfig\s*{/,
    `defaultConfig {
        resourceConfigurations += [${localesString}]`
  );
};

/**
 * Adds the resourceConfigurations with selected locales to the defaultConfig in the build.gradle file
 * See https://developer.android.com/guide/topics/resources/app-languages#gradle-config
 */
export const withAndroidLocalizableGradle: ConfigPlugin<{
  locales: string[];
}> = (config, { locales }) => {
  return withAppBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = setAndroidGradleLocalization(
        config.modResults.contents,
        locales
      );
    } else {
      throw new Error(
        `Cannot configure localization because the build.gradle is not groovy`
      );
    }

    return config;
  }
)};
