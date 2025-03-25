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

import { GiWaveSurfer, GiSkateboard, GiWorld } from "react-icons/gi";

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
            src="/images/about-me.jpg" // 👈 add your image to /public folder
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
              Hey! I&apos;m Shuta — a web & mobile developer who&apos;s just as
              stoked on clean UI as I am on clean waves. I got into coding
              because I love building things, and I’ve stuck with it because it
              lets me combine creativity, logic, and problem-solving.
            </Text>
            <Text fontSize="lg" color="gray.600">
              When I&apos;m not building apps, you&apos;ll find me at the beach
              surfing, skating bowls, or exploring new places. I try to live
              simply, stay curious, and create things that people genuinely
              enjoy using.
            </Text>
          </VStack>
        </Box>
      </Flex>

      {/* Lifestyle icons */}
      <Box mt={12}>
        <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={8} textAlign="center">
          <VStack
            spacing={2}
            as={Link}
            href="/surfing"
            _hover={{ textDecoration: "none" }}
          >
            <Icon as={GiWaveSurfer} boxSize={10} color="teal.500" />
            <Text fontWeight="semibold" color="gray.700">
              Surfing
            </Text>
          </VStack>

          <VStack
            spacing={2}
            as={Link}
            href="/skating"
            _hover={{ textDecoration: "none" }}
          >
            <Icon as={GiSkateboard} boxSize={10} color="teal.500" />
            <Text fontWeight="semibold" color="gray.700">
              Skating
            </Text>
          </VStack>

          <VStack
            spacing={2}
            as={Link}
            href="/traveling"
            _hover={{ textDecoration: "none" }}
          >
            <Icon as={GiWorld} boxSize={10} color="teal.500" />
            <Text fontWeight="semibold" color="gray.700">
              Traveling
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
