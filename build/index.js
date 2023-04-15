"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withLocalizableProject_1 = require("./withLocalizableProject");
const withLocalizableResources_1 = require("./withLocalizableResources");
/**
 * Adds references and placeholder files to the Xcode project for each region. This is necessary for iOS to show the language switcher in the Settings app.
 */
const withiOSLocalization = (config, { knownRegions = ["en"] }) => {
    config = (0, withLocalizableProject_1.withLocalizableProject)(config, { knownRegions });
    config = (0, withLocalizableResources_1.withLocalizableResources)(config, { knownRegions });
    return config;
};
exports.default = withiOSLocalization;
