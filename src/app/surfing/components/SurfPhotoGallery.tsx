import { Box, Text, Image, SimpleGrid, Fade } from "@chakra-ui/react";
import { motion } from "framer-motion";

type PhotoGallery = {
  src: string;
  caption: string;
}[];

export default function SurfPhotoGallery({
  surfGallery,
}: {
  surfGallery: PhotoGallery;
}) {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      spacing={[6, 8, 10]}
      px={[4, 6, 8]}
      maxW="container.xl"
      mx="auto"
    >
      {surfGallery.map((photo, i) => (
        <Fade in key={i}>
          <Box
            as={motion.div}
            whileHover={{ scale: 1.02 }}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            position="relative"
            border="1px solid"
            borderColor="gray.100"
          >
            <Box
              position="relative"
              w="full"
              h="400px" // Fixed height
              display="flex"
              justifyContent="center"
              alignItems="center"
              bg="gray.100"
              overflow="hidden"
            >
              <Image
                src={photo.src}
                alt={`Surf photo ${i + 1}`}
                objectFit="contain"
                maxW="full"
                maxH="full"
                w="auto"
                h="auto"
                transition="transform 0.3s ease"
                _hover={{
                  transform: "scale(1.02)",
                }}
              />
            </Box>
            <Box
              p={[4, 5, 6]}
              bg="gray.50"
              borderTop="1px solid"
              borderColor="gray.100"
            >
              <Text
                color="gray.800"
                fontSize={["md", "lg", "xl"]}
                fontWeight="medium"
                lineHeight="tall"
                textAlign="center"
              >
                {photo.caption}
              </Text>
            </Box>
          </Box>
        </Fade>
      ))}
    </SimpleGrid>
  );
}
