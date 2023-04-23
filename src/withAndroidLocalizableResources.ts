import { ConfigPlugin, withDangerousMod } from "expo/config-plugins";
import * as fs from "fs";
import * as path from "path";

/**
 * Create res/xml/locales_config.xml file with selected locales
 *
 * See https://developer.android.com/guide/topics/resources/app-languages#use-localeconfig
 */
export const withAndroidLocalizableResources: ConfigPlugin<{
  locales: string[];
}> = (config, { locales }) => {
  return withDangerousMod(config, [
    "android",
    async (config) => {
      const projectRootPath = path.join(config.modRequest.platformProjectRoot);
      const RESOURCES = "app/src/main/res/xml";

      const destAlreadyExists = fs.existsSync(
        path.join(projectRootPath, RESOURCES)
      );

      if (!destAlreadyExists) {
        fs.mkdirSync(path.join(projectRootPath, RESOURCES), {
          recursive: true,
        });
      }

      const localeStrings = locales
        .map((locale) => `<locale android:name="${locale}" />`)
        .join("\n");

      const xml = `<?xml version="1.0" encoding="utf-8"?>
<locale-config xmlns:android="http://schemas.android.com/apk/res/android">
  ${localeStrings}
</locale-config>`;

      fs.writeFileSync(
        path.join(projectRootPath, RESOURCES, "locales_config.xml"),
        xml
      );

      return config;
    },
  ]);
};
