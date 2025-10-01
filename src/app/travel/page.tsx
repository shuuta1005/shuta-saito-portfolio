"use client";

import { Box } from "@chakra-ui/react";
// import { GiWaveCrest } from "react-icons/gi";
// import LifestyleHeader from "@/components/LifestyleHeader";
import PhotoGallery from "../../components/PhotoGallery";
import { travelGallery } from "@/data/photoGallery";

export default function TravelPage() {
  return (
    <Box px={8} py={15} mx="auto">
      {/* <LifestyleHeader title="Surfing" quote="" icon={<GiWaveCrest />} /> */}
      <PhotoGallery photos={travelGallery} />
    </Box>
  );
}
