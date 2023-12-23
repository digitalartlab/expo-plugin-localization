import { getLocales } from "expo-plugin-localization";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Supported locales:{" "}
        {getLocales()
          .map((locale) => locale)
          .join(", ")}
      </Text>
    </View>
  );
}
