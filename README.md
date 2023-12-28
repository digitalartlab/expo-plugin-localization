# Expo Plugin Localization

[![npm version](https://badge.fury.io/js/%40digitalartlab%2Fexpo-plugin-localization.svg)](https://badge.fury.io/js/%40digitalartlab%2Fexpo-plugin-localization)
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

Per-app language switching on iOS and Android through the Settings app using the OS's native language switching functionalities for your Expo app.

Expo's [Localization](https://docs.expo.io/versions/latest/sdk/localization/) module is great, but it doesn't support native language switching on iOS through the Settings app. That might result in you displaying the wrong language to the user. Ever tried to order plane tickets in Spanish because the app decided you totally spoke it? Yeah, not fun. 

This plugin creates the necessary files and references in your Xcode and Android Studio projects to support native language switching on iOS and Android. It does not handle the actual translations or fetching the locale in your app. You can use any library you want for that, like [i18next](https://www.i18next.com/) for the translation and [expo-localization](https://docs.expo.io/versions/latest/sdk/localization/) for the locale detection.

## Installation

Install the package with the Expo CLI:

```bash
npx expo install @digitalartlab/expo-plugin-localization
```

Then add the plugin to your `app.json`:

```json
{
  "expo": {
    "plugins": ["@digitalartlab/expo-plugin-localization"]
  }
}
```

## Configuration

You provide an array of locales that you want to support. The default value is `["en"]`.

```json
{
  "expo": {
    "plugins": [
      [
        "@digitalartlab/expo-plugin-localization",
        {
          "locales": ["en", "nl"]
        }
      ]
    ]
  }
}
```

### Supported languages
This plugin supports all the two-letter language codes (`nl`, `en`, `es`, etc.) Android and iOS support.

Language codes with region and script affixes (`nl-NL`, `en-GB`, `zh-hans-CN`, etc.) are _not_ supported. This is because Android requires different formatting for language codes in various config files. If you _really_ need this, feel free to open an issue or a pull request.

### Prebuild

If you use [prebuild](https://docs.expo.dev/workflow/prebuild/), you have to use the `--clean` flag every time you change the config of this plugin. This is because the plugin can't reliably purge the old values from the config files. And you don't want a language to linger around. That's like Duolingo reminding you to practise long after you gave up!

Not using prebuild? You're good to go!

## Usage

Expo has a great [Localization guide](https://docs.expo.dev/guides/localization/) that explains how to fetch the user's current locale. This plugin doesn't change that, so you can use the same code. Behind the scenes, the OS sorts the list of locales to match the user's selection in the Settings app. So, if a user's phone is set to Dutch and the app is set to English, the list of locales will be `["en", "nl"]` instead of `["nl", "en"]`.

Basically: do what you'd already do to detect the user's language and just pick the first value you get.

If you want to explicitely get the list of locales you configured, you can use the `getLocales` method. It returns an array of strings with the locales you configured.

```js
import { getLocales } from "@digitalartlab/expo-plugin-localization";

const locales = getLocales();
```

> [!IMPORTANT]
> The `getLocales` method returns the locales in the order you configured them. If you want to get the user's preferred locale (to, you know, actually support locale switching), use the Expo [Localization](https://docs.expo.dev/versions/latest/sdk/localization/) module.

## Contributing

Contributions are very welcome! Please take a moment to read our [Code of Conduct](https://github.com/digitalartlab/.github/blob/main/CODE_OF_CONDUCT.md) before contributing.

## Development on this plugin

Run `npm install` to install the dependencies.

### Structure

This project consists of two parts: an Expo module and a config plugin. They work hand in hand.

First, the config plugin adds the necessary files and references to your Xcode and Android Studio projects to support native language switching. The module then optionally exposes the configured locales to your app, if you don't want to use another module like `expo-localization` for that, or need the exact locales you configured.

All code for the config plugin is in the `/plugin/src` folder. For the module, the code is split between the `/src` folder for the TypeScript code and the `/ios` and `/android` folders for the native code.

The `/example` folder contains a barebones Expo app that you can use to test the plugin.

### Building

To build the module, run `npm run build`. To build the config plugin, run `npm run build plugin`.

### Commit messages

This repo uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to automatically generate changelogs. Please make sure your commit messages follow this format. A Husky pre-commit hook is in place to verify this when you commit.

### Publishing

To publish a new version of the module, first merge the PR automatically created by Release Please. This will bump the version number, update `CHANGELOG.md` and create a new release tag on GitHub. Then, run `npm run publish` to publish the module to NPM. Could this be automated? Yes. Is it? No. Why? ¯\\\_(ツ)\_/¯

## License

This project is licensed under the [LGPL-3.0 license](LICENSE). This means you can freely use it in your own projects, also commercial ones. However, if you make changes to this specific library, you have to share those changes with the community. We would definitely welcome a pull request!

## Author

Thijmen de Valk ([@thijmendevalk](https://github.com/thijmendevalk))
