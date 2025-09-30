// src/app/art/page.tsx
"use client";

import { Box } from "@chakra-ui/react";
import PhotoGallery from "../../components/PhotoGallery";
import { artGallery } from "@/data/photoGallery";

export default function SkatingPage() {
  return (
    <Box px={8} py={15} mx="auto">
      <PhotoGallery photos={artGallery} />
    </Box>
  );
}
