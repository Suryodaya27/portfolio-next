import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function Skills() {
  const languages = ["C++", "JavaScript"];
  const frontend = ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"];
  const backend = ["Node.js", "Express", "MySQL", "Prisma"];
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
                <Card>
                  <CardHeader>
                    <CardTitle>{language}</CardTitle>
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
                <Card>
                  <CardHeader>
                    <CardTitle>{language}</CardTitle>
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
                <Card>
                  <CardHeader>
                    <CardTitle>{language}</CardTitle>
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
