"use client";

import { Box } from "@chakra-ui/react";
// import { GiWaveCrest } from "react-icons/gi";
// import LifestyleHeader from "@/components/LifestyleHeader";
import SurfPhotoGallery from "../../components/PhotoGallery";
import { surfGallery } from "@/data/photoGallery";

export default function SurfingPage() {
  return (
    <Box px={8} py={15} mx="auto">
      {/* <LifestyleHeader title="Surfing" quote="" icon={<GiWaveCrest />} /> */}
      <SurfPhotoGallery photos={surfGallery} />
    </Box>
  );
}
