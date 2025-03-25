"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Icon,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GiWaveCrest } from "react-icons/gi";
import NextLink from "next/link";

export default function Header() {
  const showNavLinks = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      as="header"
      px={8}
      py={6}
      shadow="lg"
      position="sticky"
      top={0}
      zIndex={10}
      borderBottom="1px"
      borderColor="blue.100"
      backgroundColor="teal.800"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="container.xl"
        mx="auto"
      >
        <Flex align="center" gap={4}>
          <Tooltip label="Shuta Saito's Portfolio" hasArrow>
            <Icon
              as={GiWaveCrest}
              boxSize={10}
              color="blue.100"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
              transition="all 0.3s ease"
              _hover={{
                transform: "rotate(10deg) scale(1.1)",
                color: "blue.50",
              }}
            />
          </Tooltip>
          <Heading
            size="lg"
            fontWeight="bold"
            color="blue.50"
            letterSpacing="tight"
            textShadow="1px 1px 2px rgba(0,0,0,0.2)"
          >
            Shuta Saito
          </Heading>
        </Flex>

        {showNavLinks && (
          <HStack spacing={10}>
            {[
              { href: "#about", label: "About Me" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                as={NextLink}
                href={item.href}
                fontWeight="semibold"
                color="whiteAlpha.900"
                position="relative"
                _hover={{
                  color: "blue.100",
                  textDecoration: "none",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bg: "blue.100",
                  transition: "width 0.3s ease",
                }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
        )}
      </Flex>
    </Box>
  );
}
