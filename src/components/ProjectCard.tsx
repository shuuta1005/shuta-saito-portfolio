// src/components/ProjectCard.tsx
"use client";

import { Box, Image, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      bg="white"
    >
      <Image
        src={project.image}
        alt={project.title}
        objectFit="cover"
        w="100%"
        h="180px"
      />
      <Box p={4}>
        <Heading size="md" mb={2}>
          {project.title}
        </Heading>
        <Text fontSize="sm" mb={4}>
          {project.description}
        </Text>
        <HStack spacing={4}>
          {project.github && (
            <Button
              as="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="outline"
              colorScheme="teal"
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
              colorScheme="teal"
            >
              Live
            </Button>
          )}
        </HStack>
      </Box>
    </Box>
  );
}
