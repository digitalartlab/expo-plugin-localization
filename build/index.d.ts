import { ConfigPlugin } from "expo/config-plugins";
declare const withiOSLocalization: ConfigPlugin<{
    knownRegions?: string[];
}>;
export default withiOSLocalization;
