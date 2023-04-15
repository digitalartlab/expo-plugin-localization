import { ConfigPlugin, withDangerousMod } from "expo/config-plugins";
import * as fs from "fs";
import * as path from "path";

/**
 * Adds the actual Localizable.strings files to the iOS project folder. These files are empty and are only used to satisfy Xcode.
 * This is a dangerous mod because it writes to the file system.
 */
export const withLocalizableResources: ConfigPlugin<{
  knownRegions: string[];
}> = (config, { knownRegions }) => {
  const RESOURCES = "Resources";

  return withDangerousMod(config, [
    "ios",
    (config) => {
      const projectRootPath = path.join(config.modRequest.platformProjectRoot);
      const destAlreadyExists = fs.existsSync(
        path.join(projectRootPath, RESOURCES)
      );

      if (!destAlreadyExists) {
        fs.mkdirSync(path.join(projectRootPath, RESOURCES));
      }

      knownRegions.forEach((region) => {
        const destPath = path.join(
          projectRootPath,
          RESOURCES,
          `${region}.lproj`
        );

        const destAlreadyExists = fs.existsSync(destPath);

        if (!destAlreadyExists) {
          fs.mkdirSync(destPath);
        }

        fs.writeFileSync(
          path.join(destPath, "Localizable.strings"),
          `/* ${region} */`
        );
      });

      return config;
    },
  ]);
};
