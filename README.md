# Expo Plugin Localization

[![npm version](https://badge.fury.io/js/%40digitalartlab%2Fexpo-plugin-localization.svg)](https://badge.fury.io/js/%40digitalartlab%2Fexpo-plugin-localization)
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

Support native iOS language switching in your Expo app.

Expo's [Localization](https://docs.expo.io/versions/latest/sdk/localization/) module is great, but it doesn't support native language switching on iOS through the Settings app. This plugin adds _very basic and slightly hacky_ support for that.

The plugin creates placeholder translation files and references to those files in your Xcode project. Those references are then used by iOS to determine which languages your app supports. When the user changes the language in the Settings app, iOS will then switch the language of your app. The actual translations are handled by you, for example using [i18next](https://www.i18next.com/) and Expo's [Localization](https://docs.expo.io/versions/latest/sdk/localization/) module, outside of this plugin.

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

## Known issues

Xcode spits out a warning about the translation files not being properly linked. It then also automatically _fixes_ that problem. So... good enough for now, I would say?

## Contributing

Contributions are very welcome! Please take a moment to read our [Code of Conduct](https://github.com/digitalartlab/.github/blob/main/CODE_OF_CONDUCT.md) before contributing.

## License

This project is licensed under the [LGPL-3.0 license](LICENSE). This means you can freely use it in your own projects, also commercial ones. However, if you make changes to this specific library, you have to share those changes with the community. We would definitely welcome a pull request!

## Author

Thijmen de Valk ([@thijmendevalk](https://github.com/thijmendevalk))
