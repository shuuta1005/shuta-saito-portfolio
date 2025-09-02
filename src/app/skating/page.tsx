// src/app/skating/page.tsx
"use client";

import { Box } from "@chakra-ui/react";
import { GiSkateboard } from "react-icons/gi";
import LifestyleHeader from "@/components/LifestyleHeader";
import SurfPhotoGallery from "../surfing/components/SurfPhotoGallery";

const skateGallery = [
  {
    src: "/images/front-slash.png",
    caption: "Frontide grind at Sydenham — one of my favorite bowls.",
  },
  {
    src: "/images/skating/skate2.jpg",
    caption: "Learning to pump higher without pushing. Flow is everything.",
  },
  {
    src: "/images/skating/skate3.jpg",
    caption: "Late afternoon cruise in Tokyo. Smooth concrete and good vibes.",
  },
  {
    src: "/images/skating/skate4.jpg",
    caption: "One of my early sessions. Still figuring things out.",
  },
];

export default function SkatingPage() {
  return (
    <Box px={8} py={15} mx="auto">
      <LifestyleHeader title="Skating" quote="" icon={<GiSkateboard />} />
      <SurfPhotoGallery surfGallery={skateGallery} />
    </Box>
  );
}
