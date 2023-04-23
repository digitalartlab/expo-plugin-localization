# Expo Plugin Localization

[![npm version](https://badge.fury.io/js/%40digitalartlab%2Fexpo-plugin-localization.svg)](https://badge.fury.io/js/%40digitalartlab%2Fexpo-plugin-localization)
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

This plugin adds support for per-app language switching on iOS and Android through the Settings app using the OS's native language switching functionalities.

Expo's [Localization](https://docs.expo.io/versions/latest/sdk/localization/) module is great, but it doesn't support native language switching on iOS through the Settings app. That might result in you displaying the wrong language to the user. This plugin taps into the native language switching functionalities of iOS and Android to give control back to the user for the language of your app.

This plugin creates the necessary files and references in your Xcode and Android Studio projects to support native language switching on iOS and Android. It does not handle the actual translations. You can use any library you want for that, for example [i18next](https://www.i18next.com/) and Expo's [Localization](https://docs.expo.io/versions/latest/sdk/localization/) module.

## Installation

Install the package with the Expo CLI:

```bash
npx expo install @digitalartlab/expo-plugin-localization
```

The Expo CLI automatically adds the plugin to your `app.json` file. You can also add it manually:

```json
{
  "expo": {
    "plugins": ["@digitalartlab/expo-plugin-localization"]
  }
}
```

## Configuration

You provide an array of locales that you want to support. The plugin will add those values to the Xcode projects. The default value is `["en"]`.

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

## Usage

Expo's [Localization](https://docs.expo.io/versions/latest/sdk/localization/) module returns a sorted list of locales, as preferred by the user. This plugin lets the user change the language in the Settings app, which will then change the order of the locales. So, if a user's phone is set to Dutch and the app is set to English, the list of locales will be `["en", "nl"]` instead of `["nl", "en"]`.

Basically: do what you'd already do to detect the user's language and just pick the first value Expo gives you.

### Supported languages
This plugin supports all the two-letter language codes (`nl`, `en`, `es`, etc.) Android and iOS support.

Language codes with region and script affixes (`nl-NL`, `en-GB`, `zh-hans-CN`, etc.) are _not_ supported. This is because Android requires different formatting for language codes in various config files. If you _really_ need this, feel free to open an issue or a pull request.

### Prebuild

If you use [prebuild](https://docs.expo.dev/workflow/prebuild/), you have to use the `--clean` flag every time you change the config of this plugin. This is because the plugin can't reliably purge the old values from the config files. And you don't want a language to linger around. That's like Duolingo reminding you to practise long after you gave up!

Not using prebuild? You're good to go!

## Contributing

Contributions are very welcome! Please take a moment to read our [Code of Conduct](https://github.com/digitalartlab/.github/blob/main/CODE_OF_CONDUCT.md) before contributing.

## Development

Run `yarn` to install the dependencies. This repo doesn't include an example Expo app, so you'll have to create one yourself. You can install a test build of this plugin in there by running `yarn pack` in this repo and `npm install <path>` in the example repo.

## License

This project is licensed under the [LGPL-3.0 license](LICENSE). This means you can freely use it in your own projects, also commercial ones. However, if you make changes to this specific library, you have to share those changes with the community. We would definitely welcome a pull request!

## Author

Thijmen de Valk ([@thijmendevalk](https://github.com/thijmendevalk))
