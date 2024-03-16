import Image from "next/image";
import MyImage from "@/assets/myImage.jpg";
import { motion } from "framer-motion";

export default function Aboutme_phone() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
     className="px-10  flex flex-col-reverse justify-center gap-5">
      <div className=" text-justify flex flex-col gap-3">
        <div className="text-3xl font-semibold">About Me</div>
        <div>
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
          <a target="_blank" className="underline">
            pandeysuryodaya@gmail.com{" "}
          </a>
        </div>
      </div>
      <div className="my-5 mx-auto">
        <Image
          className="rounded-lg"
          src={MyImage}
          alt="Suryodaya"
          width={200}
          height={200}
        />
      </div>
    </motion.div>
  );
}
