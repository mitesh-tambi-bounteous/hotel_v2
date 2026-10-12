import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staff Admin — Hotel V2",
  description: "Internal staff admin app for managing rooms, bookings, and rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
