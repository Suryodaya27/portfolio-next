import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

export const metadata = {
  title: "Suryodaya Pandey — Software Engineer",
  description:
    "Full-stack developer building scalable systems, backend APIs, and AI-driven applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} scroll-smooth`}>
      <body className="font-sans">
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
