import type { Metadata } from "next";
// import { Sora, Space_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/authContext";

// const sora = Sora({
//   variable: "--font-sora",
//   subsets: ["latin"],
// });

// const spaceMono = Space_Mono({
//   variable: "--font-space-mono",
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

const sora = Inter({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Inter({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aero Service",
  description: "Aviation operations, payroll, and training in one platform.",
  icons: {
    icon: "/RDTC.png",
    apple: "/RDTC.png",
    shortcut: "/RDTC.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${sora.variable} ${spaceMono.variable} antialiased`}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
