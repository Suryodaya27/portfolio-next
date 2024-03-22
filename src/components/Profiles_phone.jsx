"use client";

import leetcode from "@/assets/leetcode.svg";
import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const profiles = [
  {
    name: "Linkedin",
    icon_element: <LinkedInLogoIcon />,
    link_element: "https://www.linkedin.com/in/suryodaya27/",
  },
  {
    name: "LeetCode",
    icon_element: <Image src={leetcode} height={15} width={15} />,
    link_element: "https://leetcode.com/suryodaya_27/",
  },
  {
    name: "Github",
    icon_element: <GitHubLogoIcon />,
    link_element: "https://github.com/Suryodaya27",
  },
  {
    name: "Twitter",
    icon_element: <TwitterLogoIcon />,
    link_element: "https://twitter.com/Suryodaya27",
  },
  {
    name: "Instagram",
    icon_element: <InstagramLogoIcon />,
    link_element: "https://instagram.com/suryodaya_27/",
  },
];

export default function Profiles_phone() {
  return (
    <div className=" flex flex-col gap-3 items-center justify-center">
      {profiles.map((profile) => {
        return (
          <>
            <div key={profile.name}>
              <a href={profile.link_element} target="_blank">
                <Card className="w-[300px]">
                  <CardHeader>
                    <CardTitle className="flex gap-3">
                      <div>{profile.icon_element}</div>
                      <div><span>{profile.name}</span></div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
}
