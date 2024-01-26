import * as Linking from "expo-linking";
import { getLocales } from "expo-plugin-localization";
import { Button, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Supported locales:{" "}
        {getLocales()
          .map((locale) => locale)
          .join(", ")}
      </Text>
      <Button title="Open Settings" onPress={() => Linking.openSettings()} />
    </View>
  );
}
