"use client";

import AboutMe from "@/components/Aboutme";
import Aboutme_phone from "@/components/Aboutme_phone";
import Skills from "@/components/Skills";
import Skills_phone from "@/components/Skills_phone";
export default function About() {
  return (
    <>
      <div className="hidden md:block">
        <AboutMe />
      </div>
      <div className="md:hidden">
        <Aboutme_phone />
      </div>
      <div className="hidden md:block">
        <Skills />
      </div>
      <div className="md:hidden">
        <Skills_phone/>
      </div>
    </>
  );
}
