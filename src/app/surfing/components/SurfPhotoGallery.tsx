"use client";

import { Box, Image, Fade } from "@chakra-ui/react";
import { motion } from "framer-motion";

type PhotoGallery = {
  src: string;
}[];

export default function SurfPhotoGallery({
  surfGallery,
}: {
  surfGallery: PhotoGallery;
}) {
  return (
    <Box
      maxW="container.xl"
      mx="auto"
      px={[4, 6, 8]}
      sx={{
        columnCount: [1, 2, 3], // responsive: 1 col mobile, 2 tablet, 3 desktop
        columnGap: "1.5rem",
      }}
    >
      {surfGallery.map((photo, i) => (
        <Fade in key={i}>
          <Box
            as={motion.div}
            mb="1.5rem"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            whileHover={{ scale: 1.03 }}
            sx={{
              breakInside: "avoid", // important: prevents image cuts
            }}
          >
            <Image
              src={photo.src}
              alt={`Surf photo ${i + 1}`}
              w="100%"
              h="auto"
              objectFit="cover"
              transition="transform 0.4s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "xl",
              }}
            />
          </Box>
        </Fade>
      ))}
    </Box>
  );
}
