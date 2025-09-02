// src/app/surfing/page.tsx
"use client";

import { Box } from "@chakra-ui/react";
import { GiWaveCrest } from "react-icons/gi";
import LifestyleHeader from "@/components/LifestyleHeader";
import SurfPhotoGallery from "./components/SurfPhotoGallery";

const surfGallery = [
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
  {
    src: "/images/southcoast.jpg",
    caption: "South Coast - NSW",
  },
  {
    src: "/images/home.jpeg",
    caption: "At my home break in Japan with my buddy🐶",
  },
  {
    src: "/images/takeoff1.jpg",
    caption:
      "One of the biggest waves I’d ridden at the time — so stoked this moment got captured",
  },
];

export default function SurfingPage() {
  return (
    <Box px={8} py={15} mx="auto">
      <LifestyleHeader title="Surfing" quote="" icon={<GiWaveCrest />} />

      <SurfPhotoGallery surfGallery={surfGallery} />
    </Box>
  );
}
