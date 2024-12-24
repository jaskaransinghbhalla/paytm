import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "../provider";

export const metadata: Metadata = {
  title: "Merchant App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
