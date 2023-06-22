import { useFonts } from "expo-font";
import { TamaguiProvider, XStack, YStack, Theme, Input } from "tamagui";
import config from "./tamagui.config";
import { User } from "./src/components/User";
import { ChangeTheme } from "./src/components/ChangeTheme";
import { useState } from "react";
import { Button } from "./src/components/Button";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={isDarkTheme ? "dark" : "light"}>
        <YStack bg={"$background"} f={1} p="$6" pt="$8">
          <XStack jc={"space-between"} ai={"center"}>
            <User />
            <ChangeTheme onCheckedChange={setIsDarkTheme} />
          </XStack>
          <XStack space="$2" ai="center" mt="$8">
            <Input
              flex={1}
              w="$5"
              h="$5"
              placeholder="Buscar..."
              focusStyle={{
                bw: 2,
                boc: "$blue10",
              }}
            />
            <Button background="outline" />
          </XStack>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
