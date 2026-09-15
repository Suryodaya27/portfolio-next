import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import PageReveal from "@/components/PageReveal";
import SceneBackground from "@/components/SceneBackground";
import MusicPlayer from "@/components/MusicPlayer";
import { MusicProvider } from "@/components/MusicContext";
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
  metadataBase: new URL("https://suryodaya.vercel.app"),
  title: {
    default: "Suryodaya Pandey — Software Engineer",
    template: "%s | Suryodaya Pandey",
  },
  description:
    "Software Engineer at Nielsen (Gracenote) building scalable automation systems, backend APIs, and AI-driven applications. Based in Mumbai, India.",
  keywords: [
    "Suryodaya Pandey",
    "software engineer",
    "full stack developer",
    "backend developer",
    "Nielsen",
    "Gracenote",
    "Mumbai",
    "React",
    "Next.js",
    "Python",
    "AWS",
    "AI applications",
  ],
  authors: [{ name: "Suryodaya Pandey" }],
  creator: "Suryodaya Pandey",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://suryodaya.vercel.app",
    siteName: "Suryodaya Pandey",
    title: "Suryodaya Pandey — Software Engineer",
    description:
      "Software Engineer at Nielsen (Gracenote) building scalable automation systems, backend APIs, and AI-driven applications.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Suryodaya Pandey — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryodaya Pandey — Software Engineer",
    description:
      "Building scalable systems, backend APIs, and AI-driven applications at Nielsen.",
    creator: "@Suryodaya27",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} scroll-smooth`}>
      <body className="font-sans">
        <MusicProvider>
          <PageReveal />
          <SceneBackground />
          <CursorGlow />
          <Navbar />
          <main className="mx-auto max-w-4xl px-6 pb-24">{children}</main>
          <Footer />
          <MusicPlayer />
        </MusicProvider>
      </body>
    </html>
  );
}
