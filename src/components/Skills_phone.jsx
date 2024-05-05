import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
export default function Skills_phone() {
  const languages = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
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
  ];
  return (
    <div>
      <div className="text-center mt-10 text-xl underline"> Skills</div>
      <div className="py-5 mx-10 flex flex-col gap-4">
        <div className="pb-5">
          <div className="flex gap-1 items-center font-medium text-lg">
            <TriangleRightIcon />
            Languages:
          </div>
          <div className="flex flex-wrap gap-2">
            {languages.map((language) => {
              return (
                <Card className="flex justify-center" key={language}>
                  <CardHeader>
                    <CardTitle className="text-sm">
                      <Image
                        className="shadow-md"
                        src={language}
                        height={40}
                        width={40}
                      />
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex gap-1 items-center font-medium text-lg">
            <TriangleRightIcon />
            Frontend technologies:
          </div>
          <div className="flex flex-wrap gap-2">
            {frontend.map((language) => {
              return (
                <Card className="flex justify-center" key={language}>
                  <CardHeader>
                    <CardTitle className="text-sm">
                      <Image
                        className="shadow-md"
                        src={language}
                        height={40}
                        width={40}
                      />
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex gap-1 items-center font-medium text-lg">
            <TriangleRightIcon />
            Backend technologies:
          </div>
          <div className="flex flex-wrap gap-2">
            {backend.map((language) => {
              return (
                <Card className="flex justify-center" key={language}>
                  <CardHeader>
                    <CardTitle className="text-sm">
                      <Image
                        className="shadow-md"
                        src={language}
                        height={40}
                        width={40}
                      />
                    </CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
