import { ConfigPlugin } from "expo/config-plugins";
/**
 * Adds a Localizable.strings file reference to the Xcode project for each region. This is necessary for Xcode to recognize the various languages.
 */
export declare const withLocalizableProject: ConfigPlugin<{
    knownRegions: string[];
}>;
