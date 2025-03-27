// src/components/HeroSection.tsx
"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box
      as="section"
      position="relative"
      h={{ base: "60vh", md: "80vh" }}
      bgImage="url('/surf/surf-2.jpg')" // replace with your image path or URL
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600" // grey/dark overlay
        zIndex={1}
      />

      {/* Text content */}
      <VStack
        position="relative"
        zIndex={2}
        h="100%"
        justify="center"
        textAlign="center"
        spacing={4}
        px={4}
        color="white"
      >
        <Heading fontSize={{ base: "3xl", md: "5xl" }}>
          Hey, I&apos;m Shuta 👋
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} maxW="3xl">
          I&apos;m a web developer who’s passionate about surfing,
          skateboarding, and exploring the world — both online and off. I love
          building meaningful digital experiences that reflect the same
          creativity and flow I chase in everyday life.
        </Text>
      </VStack>
    </Box>
  );
}
