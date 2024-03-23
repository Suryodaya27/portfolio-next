import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TriangleRightIcon } from "@radix-ui/react-icons";

export default function Skills_phone() {
  const languages = ["C++", "JavaScript"];
  const frontend = ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"];
  const backend = ["Node.js", "Express", "MySQL", "Prisma"];
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
                    <CardTitle className="text-sm">{language}</CardTitle>
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
                    <CardTitle className="text-sm">{language}</CardTitle>
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
                    <CardTitle className="text-sm">{language}</CardTitle>
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
