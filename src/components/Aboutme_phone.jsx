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
           I am a Software Engineer with experience in building scalable automation systems, backend APIs, and AI-driven applications. At Gracenote (Nielsen), I’ve streamlined operations by migrating legacy RPA bots to Python, deploying them on AWS, and developing APIs that improved control and flexibility for business teams. I enjoy solving complex data problems—whether it’s processing unstructured data, optimizing large-scale scripts, or designing intelligent retrieval systems.
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
