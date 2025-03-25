"use client";

import { Box, Flex, Heading, HStack, Link, Icon } from "@chakra-ui/react";
import { GiWaveCrest } from "react-icons/gi";

export default function Header() {
  return (
    <Box
      as="header"
      bg="blue.700"
      px={8}
      py={6}
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={2}>
          <Icon as={GiWaveCrest} boxSize={10} color="blue.50" />
          <Heading size="lg" fontWeight="bold" color="blue.50">
            Shuta Saito
          </Heading>
        </Flex>

        <HStack spacing={10}>
          <Link
            fontWeight="semibold"
            color="white"
            _hover={{ color: "blue.100" }}
            href="#about"
          >
            About Me
          </Link>
          <Link
            fontWeight="semibold"
            color="white"
            _hover={{ color: "blue.100" }}
            href="#projects"
          >
            Projects
          </Link>
          <Link
            fontWeight="semibold"
            color="white"
            _hover={{ color: "blue.100" }}
            href="#contact"
          >
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
