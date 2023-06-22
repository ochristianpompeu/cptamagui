import { Button as TButton, styled } from "tamagui";
import { Search } from "@tamagui/lucide-icons";

const Button = styled(TButton, {
  width: "$5",
  height: "$5",
  icon: Search,
  variants: {
    background: {
      normal: {
        bg: "$blue10",
      },
      outline: {
        borderWidth: "$1",
        borderColor: "$blue10",
      },
    },
  } as const,
  defaultVariants: {
    background: "normal",
  },
});

export {Button}
