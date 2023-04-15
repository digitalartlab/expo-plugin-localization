# Expo Plugin Localization

[![npm version](https://badge.fury.io/js/%40digitalartlab%2Fexpo-plugin-localization.svg)](https://badge.fury.io/js/%40digitalartlab%2Fexpo-plugin-localization)

Support native iOS language switching in your Expo app.

## Motivation

Expo's [Localization](https://docs.expo.io/versions/latest/sdk/localization/) module is great, but it doesn't support native language switching on iOS through the Settings app. This plugin adds _very basic and slightly hacky_ support for that.

## Installation

Install the package with the Expo CLI:

```bash
npx expo install @digitalartlab/expo-plugin-localization
```

## Usage

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

## Known issues

Xcode spits out a warning about the translation files not being properly linked. It then also automatically _fixes_ that problem. So... good enough for now, I would say?

## Contributing

Contributions are very welcome! Please take a moment to read our [Code of Conduct](https://github.com/digitalartlab/.github/blob/main/CODE_OF_CONDUCT.md) before contributing.

## License

This project is licensed under the LGPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Author

- Thijmen de Valk ([@thijmenvdvalk](https://github.com/thijmenvdvalk))