import { useFonts } from "expo-font";
import { TamaguiProvider, YStack } from "tamagui";
import config from "./tamagui.config";
import { User } from "./src/components/User";
import { SafeAreaView } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView>
        <YStack bg={"$background"} f={1} p="$6" pt="$8">
          <User />
        </YStack>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
