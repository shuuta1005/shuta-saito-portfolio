// src/components/ProjectsSection.tsx
"use client";

import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <Box as="section" id="projects" py={16} px={4} maxW="6xl" mx="auto">
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading size="xl">Projects</Heading>
        <Text color="gray.600" maxW="2xl">
          A list of my projects — from small games to full-stack apps. Each
          project is a small expression of what I love to create.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
