import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import c from "@/assets/skill_icons/c-.png";
import Image from "next/image";

export default function Skills() {
  const languages = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  ];
  const frontend = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  ];
  const backend = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
  ];
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-10 overflow-y-auto"
    >
      <div className="flex justify-center text-2xl font-medium underline">
        Skills
      </div>
      <div className="flex flex-col mx-40">
        <div className="flex gap-5">
          <span className="flex items-center">
            <TriangleRightIcon />
            Languages:{" "}
          </span>
          <div className="my-3 flex gap-3">
            {languages.map((language) => {
              return (
                <Card key={language}>
                  <CardHeader>
                    <CardTitle>
                      <Image className="shadow-md" src={language} height={40} width={40} />
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5">
          <span className="flex items-center">
            <TriangleRightIcon />
            Frontend:{" "}
          </span>
          <div className="my-3 flex gap-3">
            {frontend.map((language) => {
              return (
                <Card key={language}>
                  <CardHeader>
                    <CardTitle>
                      <Image className="shadow-md" src={language} height={40} width={40} />
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5">
          <span className="flex items-center">
            <TriangleRightIcon />
            Backend:{" "}
          </span>
          <div className="my-3 flex gap-3">
            {backend.map((language) => {
              return (
                <Card key={language}>
                  <CardHeader>
                    <CardTitle>
                      <Image className="shadow-md" src={language} height={40} width={40} />
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
