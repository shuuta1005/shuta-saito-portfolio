// src/app/layout.tsx
import { Providers } from "@/lib/providers";
import { ReactNode } from "react";

export const metadata = {
  title: "Shuta Saito Portfolio",
  description: "Built with Next.js and Chakra UI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
