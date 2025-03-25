// src/components/Footer.tsx
"use client";

import { Box, Flex, Text, Link, Icon, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.50" py={6} mt={16}>
      <Flex direction="column" align="center" gap={3}>
        <HStack spacing={6}>
          <Link href="https://github.com/shuuta1005" isExternal>
            <Icon as={FaGithub} boxSize={5} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shuta-saito-659b642b3/"
            isExternal
          >
            <Icon as={FaLinkedin} boxSize={5} />
          </Link>
        </HStack>
        <Text fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Shuta Saito — Built with Next.js & Chakra
          UI
        </Text>
      </Flex>
    </Box>
  );
}
