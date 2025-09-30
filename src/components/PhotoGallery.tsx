//components/PhotoGallery.tsx

"use client";

import { Box, Image, Fade } from "@chakra-ui/react";
import { motion } from "framer-motion";

export type Photo = {
  src: string;
};

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  return (
    <Box
      maxW="container.xl"
      mx="auto"
      px={[4, 6, 8]}
      sx={{
        columnCount: [1, 2, 3], // responsive
        columnGap: "1.5rem",
      }}
    >
      {photos.map((photo, i) => (
        <Fade in key={i}>
          <Box
            as={motion.div}
            mb="1.5rem"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            whileHover={{ scale: 1.03 }}
            sx={{ breakInside: "avoid" }}
          >
            <Image
              src={photo.src}
              alt={`Photo ${i + 1}`}
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
