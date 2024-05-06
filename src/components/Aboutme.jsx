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
          As a full-stack developer, I specialize in crafting innovative
          solutions that seamlessly integrate technology into daily life. My
          passion for problem-solving is evident in my consistent top percentile
          rankings on platforms like LeetCode and Coding Ninjas, with
          achievements including commendable ranks in LeetCode contests and
          solving over 800 LeetCode problems.
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
