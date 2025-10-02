// src/components/ProjectCard.tsx

"use client";

import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  Tag,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  // Decide what the image should link to
  const imageLink = project.live || project.github || null;

  const ImageContent = (
    <Image
      src={project.image}
      alt={project.title}
      objectFit="cover"
      w="100%"
      h="200px"
      transition="transform 0.4s ease"
      _hover={{ transform: "scale(1.05)" }}
      cursor={imageLink ? "pointer" : "default"}
    />
  );

  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      shadow="lg"
      bg="white"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px)",
        shadow: "2xl",
      }}
    >
      {imageLink ? (
        <a
          href={imageLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block" }}
        >
          {ImageContent}
        </a>
      ) : (
        ImageContent
      )}

      <Box p={5}>
        <VStack align="start" spacing={3}>
          <Heading size="md">{project.title}</Heading>
          <Text fontSize="sm" color="gray.600">
            {project.description}
          </Text>

          {/* Tech stack tags */}
          {project.tech && (
            <HStack spacing={2} flexWrap="wrap">
              {project.tech.map((t) => (
                <Tag key={t} colorScheme="blue" variant="subtle">
                  {t}
                </Tag>
              ))}
            </HStack>
          )}

          {/* Features */}
          {project.features && (
            <Stack spacing={1} pl={2}>
              {project.features.map((f, idx) => (
                <Text key={idx} fontSize="sm" color="gray.700">
                  • {f}
                </Text>
              ))}
            </Stack>
          )}

          {/* Links */}
          <HStack spacing={4} pt={2}>
            {project.github && (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="outline"
                colorScheme="gray"
              >
                GitHub
              </Button>
            )}
            {project.live && (
              <Button
                as="a"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                colorScheme="blue"
              >
                Live
              </Button>
            )}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
