import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guest Web",
  description: "Guest-facing web application for Hotel V2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
