import { Heading, Text, HStack, IconButton, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement, cloneElement } from "react";

type Props = {
  title: string;
  quote?: string;
  icon: ReactElement;
};

export default function LifestyleHeader({ title, quote, icon }: Props) {
  return (
    <Flex
      justify="space-between"
      align="center"
      mb={10}
      backgroundColor="teal.700"
      py={6}
      px={6}
      boxShadow="sm"
      borderBottom="1px"
      borderColor="teal.600"
    >
      <HStack spacing={4} align="center">
        <IconButton
          as={Link}
          href="/"
          icon={cloneElement(icon)}
          aria-label="Back to home"
          variant="ghost"
          color="white"
          fontSize="2xl"
          _hover={{
            transform: "scale(1.1)",
            backgroundColor: "teal.600",
          }}
        />
        <Heading
          size="lg"
          color="teal.50"
          letterSpacing="tight"
          textShadow="1px 1px 2px rgba(0,0,0,0.1)"
        >
          {title}
        </Heading>
      </HStack>

      {quote && (
        <Text
          fontSize="xl"
          color="teal.100"
          fontWeight="medium"
          fontStyle="italic"
          maxW="30%"
          textAlign="right"
          opacity={0.9}
        >
          {quote}
        </Text>
      )}
    </Flex>
  );
}
