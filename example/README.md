`expo-plugin-localization` example app
======================================

This is an example app for `expo-plugin-localization`. It shows how to use the plugin and how to configure it.

## Run the example app

You can run the example app in an iOS or Android simulator. Ensure you have the [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) installed, as well as a supported version of Xcode and/or Android Studio.

```bash
  # Run on iOS
  npm run ios

  # Run on Android
  npm run android
```

## Developing the plugin with the example app

The example app provides a nice way to test the plugin while developing. It always uses the most recently built version of the plugin in this repository. So just run `npm run build` and `npm run build plugin` in the root of this repository to build the plugin and the config plugin.

Don't forget to rebuild the native parts of the example app when you change the native code of the plugin. You can do this by running `npx expo prebuild` in the `/example` folder.
