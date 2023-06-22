import { Avatar, H4, Text, XStack, YStack } from "tamagui";

function User() {
  return (
    <XStack space="$2" ai={"center"}>
      <Avatar circular size={"$6"}>
        <Avatar.Image src="https://github.com/ochristianpompeu.png" />
        <Avatar.Fallback bc="blue" delayMs={300} />
      </Avatar>
      <YStack>
        <Text color={"$gray10"}>Olá</Text>
        <H4 fontWeight="900" mt="$-2">
          Christian
        </H4>
      </YStack>
    </XStack>
  );
}

export { User };
