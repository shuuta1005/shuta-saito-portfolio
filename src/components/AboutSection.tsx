// src/components/AboutSection.tsx
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";

import {
  GiWaveSurfer,
  GiSkateboard,
  GiWorld,
  GiGooeyEyedSun,
} from "react-icons/gi";

export default function AboutSection() {
  return (
    <Box
      as="section"
      id="about"
      py={16}
      px={4}
      maxW="6xl"
      mx="auto"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={12}>
        {/* Image */}
        <Box flex="1">
          <Image
            src="/images/about-me.jpg" //
            alt="Shuta surfing"
            borderRadius="lg"
            objectFit="cover"
            maxH="400px"
            w="100%"
          />
        </Box>

        {/* Text */}
        <Box flex="1">
          <VStack spacing={4} align="start">
            <Heading size="xl">About Me</Heading>
            <Text fontSize="lg" color="gray.600">
              Hey! I&apos;m Shuta — a web developer who&apos;s just as stoked on
              clean UI as I am on clean waves. I got into coding because I love
              building things, and I’ve stuck with it because it lets me combine
              creativity, logic, and problem-solving.
            </Text>
            <Text fontSize="lg" color="gray.600">
              When I&apos;m not building apps, you&apos;ll find me at the beach
              surfing, skating bowls, or exploring new places. I try to live
              actively, stay curious, and create things that people genuinely
              enjoy using.
            </Text>
          </VStack>
        </Box>
      </Flex>

      {/* Lifestyle icons */}
<Box mt={12}>
  <SimpleGrid
    columns={{ base: 2, sm: 2, md: 4 }} // 👈 ensures 4 across on medium+ screens
    spacing={8}
    textAlign="center"
  >
    {[
      { href: "/surfing", label: "Surf", icon: GiWaveSurfer },
      { href: "/skating", label: "Skate", icon: GiSkateboard },
      { href: "/art", label: "Art", icon: GiGooeyEyedSun },
      { href: "/travel", label: "Travel", icon: GiWorld },
    ].map((item) => (
      <VStack
        key={item.href}
        spacing={2}
        as={Link}
        href={item.href}
        _hover={{ textDecoration: "none" }}
        transition="all 0.3s ease"
      >
        <Icon
          as={item.icon}
          boxSize={12}
          color="gray.800"
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.2) rotate(5deg)",
            color: "red.300",
            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))",
          }}
        />
        <Text
          fontWeight="bold"
          color="gray.800"
          transition="color 0.3s ease"
          _hover={{ color: "red.700" }}
        >
          {item.label}
        </Text>
      </VStack>
    ))}
  </SimpleGrid>
</Box>

    </Box>
  );
}
