// src/app/surfing/page.tsx
"use client";

import { Box, Text, Image, VStack, SimpleGrid } from "@chakra-ui/react";
import { GiWaveCrest } from "react-icons/gi";
import LifestyleHeader from "@/components/LifestyleHeader";

const surfGallery = [
  {
    src: "/images/takeoff1.jpg",
    caption:
      "One of the biggest waves I’d ridden at the time — so stoked this moment got captured",
  },
  {
    src: "/images/senigan.jpg",
    caption: "Indo. Always good to be there",
  },
  {
    src: "/images/production.jpeg",
    caption: "Helping my mate shape his board in the backyard",
  },
  {
    src: "/images/kook.jpg",
    caption: "Hyped to pick up a new board",
  },
  {
    src: "/images/float1.JPG",
    caption: "A fun day on the Northern Beaches",
  },
  {
    src: "/images/beach1.jpg",
    caption: "Just another day at my local — The Bra",
  },
];

export default function SurfingPage() {
  return (
    <Box px={8} py={15} maxW="6xl" mx="auto">
      <LifestyleHeader title="Surfing" quote="" icon={<GiWaveCrest />} />

      <SimpleGrid columns={1} spacing={10}>
        {surfGallery.map((photo, i) => (
          <VStack key={i} spacing={4} align="start">
            <Image
              src={photo.src}
              alt={`Surf photo ${i + 1}`}
              borderRadius="md"
              objectFit="cover"
              w="80%"
              // maxH="500px"
              shadow="md"
            />
            <Text color="gray.900" fontSize="xl">
              {photo.caption}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
