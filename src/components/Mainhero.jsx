"use client";

import right_hero from "@/assets/right_hero.png";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TriangleRightIcon } from "@radix-ui/react-icons";

import { easeIn, motion } from "framer-motion";
import Profiles from "@/components/Profiles";
import Profiles_phone from "@/components/Profiles_phone";
import Link from "next/link";

export default function Mainhero() {
  return (
    <div className="flex flex-row md:gap-20 md:my-14 justify-center overflow-hidden">
      <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: easeIn, duration: 1 }}
        className="flex flex-col gap-7 justify-center "
      >
        <div className="mx-10 mt-10 md:mt-0  md:mx-0 text-2xl font-medium">
          Hello there,It&apos;s me 👋
        </div>
        <div className="mx-10 text-4xl md:mx-0 md:text-6xl text-sky-800 font-semibold">
          Suryodaya Pandey
        </div>
        <div className=" mx-10 text-xl md:mx-0 md:text-3xl font-semibold">
          I&apos;m a <span className="text-red-600">Fullstack developer</span>{" "}
          🚀
        </div>
        <div className="mt-3 mx-10 md:mx-0">
          <Link href="/about">
            <Button
              variant="outline"
              className="bg-blue-700  hover:bg-blue-600 hover:text-white text-white shadow-sm"
              size="lg"
            >
              More About Me &nbsp; <TriangleRightIcon />
            </Button>
          </Link>
        </div>
        <div className="hidden md:block">
          <Profiles />
        </div>
        <div className="md:hidden">
          <Profiles_phone />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="hidden md:block"
      >
        <Image src={right_hero} height={450} width={450} />
      </motion.div>
    </div>
  );
}
