// src/app/skating/page.tsx
"use client";

import { Box } from "@chakra-ui/react";
import PhotoGallery from "../../components/PhotoGallery";
import { skateGallery } from "@/data/photoGallery";

export default function SkatingPage() {
  return (
    <Box px={8} py={15} mx="auto">
      <PhotoGallery photos={skateGallery} />
    </Box>
  );
}
