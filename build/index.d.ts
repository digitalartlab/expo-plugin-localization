import { ConfigPlugin } from "expo/config-plugins";
/**
 * Adds references and placeholder files to the Xcode project for each region. This is necessary for iOS to show the language switcher in the Settings app.
 */
declare const withiOSLocalization: ConfigPlugin<{
    knownRegions?: string[];
}>;
export default withiOSLocalization;
