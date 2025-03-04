import Providers from "@/components/Providers/Providers";
import type { Metadata } from "next";
import styles from "./layout.module.css";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Nurazyan Construction",
  // description:
  //   "A2RL set to take place at Yas Marina Circuit in Abu Dhabi. Inaugural league event in Q2 2024 with Autonomous Car Racing.",
  icons: {
    icon: "/icon.png",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${manrope.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
