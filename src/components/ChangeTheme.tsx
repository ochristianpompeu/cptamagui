import { Moon, Sun } from "@tamagui/lucide-icons";
import { XStack, Switch, SwitchProps } from "tamagui";

function ChangeTheme({ ...rest }: SwitchProps) {
  return (
    <XStack space="$2" ai="center">
      <Sun size="$2" />
      <Switch bg="$gray6" size="$2" {...rest}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <Moon size="$2" />
    </XStack>
  );
}

export { ChangeTheme };
