import Image from "next/image";
import MyImage from "@/assets/myImage.jpg";
import { motion } from "framer-motion";
import Profiles from "./Profiles";

export default function AboutMe() {
  return (
    <div className="flex flex-row justify-center items-center mx-36 py-10 scroll-smooth overflow-hidden">
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex flex-col gap-5"
      >
        <div className="text-3xl font-semibold ">About Me</div>
        <div className="text-justify">
          I am a Software Engineer with experience in building scalable automation systems, backend APIs, and AI-driven applications. At Gracenote (Nielsen), I’ve streamlined operations by migrating legacy RPA bots to Python, deploying them on AWS, and developing APIs that improved control and flexibility for business teams. I enjoy solving complex data problems—whether it’s processing unstructured data, optimizing large-scale scripts, or designing intelligent retrieval systems.
        </div>
        <div>
          <span className="font-medium">Location: </span> Mumbai, India.
          <br />
          <span className="font-medium">Email: </span>{" "}
          <a target="_blank" className="underline underline-offset-2">
            pandeysuryodaya@gmail.com{" "}
          </a>
        </div>
        <div >
          <Profiles />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex justify-center "
      >
        <Image
          className="rounded-lg"
          src={MyImage}
          alt="Suryodaya"
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
}
