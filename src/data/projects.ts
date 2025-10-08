// src/data/projects.ts

export type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  category?: "Game" | "Full-Stack" | "Frontend" | "Other";
  tech?: string[]; // optional list of technologies
  features?: string[]; // optional short feature highlights
};

export const projects: Project[] = [
  {
    title: "BrahFotos",
    description:
      "BrahFotos is a full-stack e-commerce platform for selling surf photography as digital products. It combines secure auth, tiered cart/checkout logic, an admin gallery upload system, and reliable delivery of purchased photos.",
    image: "/images/brahfotos-cover.jpg",
    github: "https://github.com/shuuta1005/surf-foto-mp-v1",
    live: "https://www.surfphotosjapan.com/",
    category: "Full-Stack",
    tech: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Lucide React",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe (Checkout + Webhooks)",
      "Resend API (email)",
      "Vercel Blob Storage",
      "Sharp",
      "Zod",
    ],
    features: [],
  },
  {
    title: "Online Store (WordPress)",
    description:
      "A custom WordPress site for BrahFotos, built to showcase and sell surf-inspired digital and physical products. The store features responsive pages with category-linked image grids, a custom footer with social links, and WooCommerce integration for product management. Built using the Sydney theme and Elementor, the site is under construction locally with LocalWP.",
    image: "/images/shara-shop.jpg",
    category: "Frontend",
    tech: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "LocalWP",
      "Sydney Theme",
      "CSS",
      "PHP",
    ],
    features: [
      "Responsive landing page with category navigation",
      "Custom footer with Socials section",
      "WooCommerce setup for product pages",
      "Theme customization and layout tweaks",
      "LocalWP development and troubleshooting",
    ],
  },
  {
    title: "Simon Game",
    description: "A memory-based game inspired by the classic Simon game.",
    image: "/images/simon-game.png",
    github: "https://github.com/shuuta1005/simon-game",
    // live: "https://shuuta1005.github.io/simon-game/",
    category: "Game",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interactive memory challenge",
      "Dynamic game logic with increasing difficulty",
      "Clean and responsive UI",
    ],
  },

  {
    title: "Book Note App",
    description:
      "Full-stack book tracker with Google OAuth, CRUD, PostgreSQL, and responsive design.",
    image: "/images/book-note-app.png",
    github: "https://github.com/shuuta1005/book-notes",
    category: "Full-Stack",
    tech: ["Node.js", "Express", "PostgreSQL", "OAuth", "Bootstrap"],
    features: [
      "Google login integration",
      "Add, edit, and delete book notes",
      "Responsive design for all devices",
    ],
  },

  {
    title: "Album Search & Rate",
    description:
      "React + Vite app using Spotify API to search and rate albums.",
    image: "/images/album-search-app.jpeg",
    github: "https://github.com/shuuta1005/musica-list",
    category: "Frontend",
    tech: ["React", "Vite", "Spotify API", "CSS Modules"],
    features: [
      "Search albums directly from Spotify API",
      "Rate albums and save preferences",
      "Fast and lightweight Vite setup",
    ],
  },
];
