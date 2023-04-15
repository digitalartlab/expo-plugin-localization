"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLocalizableResources = void 0;
const config_plugins_1 = require("expo/config-plugins");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * Adds the actual Localizable.strings files to the iOS project folder. These files are empty and are only used to satisfy Xcode.
 * This is a dangerous mod because it writes to the file system.
 */
const withLocalizableResources = (config, { knownRegions }) => {
    const RESOURCES = "Resources";
    return (0, config_plugins_1.withDangerousMod)(config, [
        "ios",
        (config) => {
            const projectRootPath = path.join(config.modRequest.platformProjectRoot);
            const destAlreadyExists = fs.existsSync(path.join(projectRootPath, RESOURCES));
            if (!destAlreadyExists) {
                fs.mkdirSync(path.join(projectRootPath, RESOURCES));
            }
            knownRegions.forEach((region) => {
                const destPath = path.join(projectRootPath, RESOURCES, `${region}.lproj`);
                const destAlreadyExists = fs.existsSync(destPath);
                if (!destAlreadyExists) {
                    fs.mkdirSync(destPath);
                }
                fs.writeFileSync(path.join(destPath, "Localizable.strings"), `/* ${region} */`);
            });
            return config;
        },
    ]);
};
exports.withLocalizableResources = withLocalizableResources;
