import { ConfigPlugin, withDangerousMod } from "expo/config-plugins";
import * as fs from "fs";
import * as path from "path";

/**
 * Adds the actual Localizable.strings files to the iOS project folder. These files are empty and are only used to satisfy Xcode.
 * This is a dangerous mod because it writes to the file system.
 */
export const withIosLocalizableResources: ConfigPlugin<{
  locales: string[];
}> = (config, { locales }) => {

  return withDangerousMod(config, [
    "ios",
    (config) => {
      const projectRootPath = path.join(config.modRequest.platformProjectRoot);
      const RESOURCES = "Resources";

      const destAlreadyExists = fs.existsSync(
        path.join(projectRootPath, RESOURCES)
      );

      if (!destAlreadyExists) {
        fs.mkdirSync(path.join(projectRootPath, RESOURCES));
      }

      locales.forEach((locale) => {
        const destPath = path.join(
          projectRootPath,
          RESOURCES,
          `${locale}.lproj`
        );

        const destAlreadyExists = fs.existsSync(destPath);

        if (!destAlreadyExists) {
          fs.mkdirSync(destPath);
        }

        fs.writeFileSync(
          path.join(destPath, "Localizable.strings"),
          `/* ${locale} */`
        );
      });

      return config;
    },
  ]);
};
