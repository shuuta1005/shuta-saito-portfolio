import { Heading, Text, HStack, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement, cloneElement } from "react";

type Props = {
  title: string;
  quote?: string;
  icon: ReactElement;
};

export default function LifestyleHeader({ title, quote, icon }: Props) {
  return (
    <HStack
      justify="space-between"
      align="center"
      mb={10}
      backgroundColor="teal.600"
      py={8}
    >
      <HStack spacing={3}>
        <IconButton
          as={Link}
          href="/"
          icon={cloneElement(icon, {})} // ✅ Ensures it's a ReactElement
          aria-label="Back to home"
          variant="ghost"
          color="white"
          fontSize="2xl"
        />
        <Heading size="lg" color="teal.50">
          {title}
        </Heading>
      </HStack>

      {quote && (
        <Text fontSize="xl" color="teal.50" fontStyle="bold">
          {quote}
        </Text>
      )}
    </HStack>
  );
}
