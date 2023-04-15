import { ConfigPlugin } from "expo/config-plugins";
/**
 * Adds the actual Localizable.strings files to the iOS project folder. These files are empty and are only used to satisfy Xcode.
 * This is a dangerous mod because it writes to the file system.
 */
export declare const withLocalizableResources: ConfigPlugin<{
    knownRegions: string[];
}>;
