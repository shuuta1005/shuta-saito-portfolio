// src/data/projects.ts
export type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  category?: "Game" | "Full-Stack" | "Frontend" | "Other";
};

export const projects: Project[] = [
  {
    title: "Pig Game",
    description: "A dice game built with vanilla HTML, CSS, and JavaScript.",
    image: "/images/pigGame.jpg",
    github: "https://github.com/shuuta1005/pig-game",
    live: "https://shuuta1005.github.io/pig-game/",
    category: "Game",
  },
  {
    title: "Guess My Number",
    description: "A simple number guessing game using JavaScript logic.",
    image: "/images/guessMyNum.jpg",
    github: "https://github.com/shuuta1005/guess-my-number",
    live: "https://shuuta1005.github.io/guess-my-number/",
    category: "Game",
  },
  {
    title: "Simon Game",
    description: "A memory-based game inspired by the classic Simon game.",
    image: "/images/simon-game.png",
    github: "https://github.com/shuuta1005/simon-game",
    live: "https://shuuta1005.github.io/simon-game/",
    category: "Game",
  },
  {
    title: "Blog App",
    description:
      "Blog app built with Node.js, Express, and EJS. View README for usage.",
    image: "/images/blog-app.png",
    github: "https://github.com/shuuta1005/my-blog-app",
    category: "Full-Stack",
  },
  {
    title: "Book Note App",
    description:
      "Full-stack book tracker with Google OAuth, CRUD, PostgreSQL, and responsive design.",
    image: "/images/book-note-app.png",
    github: "https://github.com/shuuta1005/book-notes",
    category: "Full-Stack",
  },
  {
    title: "Album Search & Rate",
    description:
      "React + Vite app using Spotify API to search and rate albums.",
    image: "/images/album-search-app.jpeg",
    github: "https://github.com/shuuta1005/musica-list",
    category: "Frontend",
  },
  {
    title: "Bra Fotos",
    description: "Still in development... surf photo marketplace project.",
    image: "/images/bra-fotos.jpg",
    github: "https://github.com/shuuta1005/surf-foto-mp-v1",
    live: "https://surf-foto-mp-v1.vercel.app/",
    category: "Full-Stack",
  },
];
