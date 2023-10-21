import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Eri Schön",
  description: "Eri Schön - Développeur Front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-slate-900 text-slate-100 max-w-screen-xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
