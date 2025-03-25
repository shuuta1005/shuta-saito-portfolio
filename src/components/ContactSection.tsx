// src/components/ContactSection.tsx
"use client";

import { Box, Heading, Text, Link, VStack, Icon } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { GiYinYang } from "react-icons/gi";

export default function ContactSection() {
  return (
    <Box
      as="section"
      id="contact"
      py={16}
      px={4}
      maxW="6xl"
      mx="auto"
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.200"
    >
      <VStack spacing={6}>
        <VStack spacing={2}>
          <Icon as={GiYinYang} boxSize={20} color="teal.500" />
          <Heading size="xl">Contact</Heading>
        </VStack>

        <Text fontSize="lg" color="gray.600">
          Want to connect or work together? Feel free to reach out — I&apos;m
          always happy to chat.
        </Text>

        <Link
          href="mailto:your-email@example.com"
          fontSize="lg"
          color="teal.500"
          _hover={{ textDecoration: "underline", color: "teal.600" }}
        >
          <Icon as={FaEnvelope} mr={2} />
          shutafute26@gmail.com
        </Link>
      </VStack>
    </Box>
  );
}
