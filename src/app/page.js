import Mainhero from "@/components/Mainhero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suryodaya Pandey",
  url: "https://suryodaya.vercel.app",
  email: "pandeysuryodaya@gmail.com",
  jobTitle: "Member of Technical Staff",
  worksFor: {
    "@type": "Organization",
    name: "Nielsen (Gracenote)",
    url: "https://www.nielsen.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/suryodaya27/",
    "https://github.com/Suryodaya27",
    "https://leetcode.com/suryodaya_27/",
    "https://twitter.com/Suryodaya27",
  ],
  knowsAbout: [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Backend Development",
    "AI Applications",
    "Automation",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Mainhero />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}
