"use client";

import leetcode from "@/assets/leetcode.svg";
import instagram from "@/assets/instagram.svg";
import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { easeIn, motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const profiles = [
  {
    name: "Linkedin",
    icon_element: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        height={25} width={25}
      />
    ),
    link_element: "https://www.linkedin.com/in/suryodaya27/",
  },
  {
    name: "LeetCode",
    icon_element: <Image src={leetcode} height={25} width={25} />,
    link_element: "https://leetcode.com/suryodaya_27/",
  },
  {
    name: "Github",
    icon_element: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        height={25} width={25}
      />
    ),
    link_element: "https://github.com/Suryodaya27",
  },
  {
    name: "Twitter",
    icon_element: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
        height={25} width={25}
      />
    ),
    link_element: "https://twitter.com/Suryodaya27",
  },
  {
    name: "Instagram",
    icon_element: <Image src={instagram} height={25} width={25} />,
    link_element: "https://instagram.com/suryodaya_27/",
  },
];

export default function Profiles() {
  return (
    <div className=" flex flex-col md:flex-row gap-4 my-5">
      {profiles.map((profile) => {
        return (
          <HoverCard key={profile.name}>
            <HoverCardTrigger>
              <motion.div
                className=" mr-5"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                  borderRadius: "100%",
                }}
              >
                <div className="p-4 bg-white rounded-md hover:bg-slate-50 outline-black border-black shadow-md hover:shadow-xl">
                  <a href={profile.link_element} target="_blank">
                    {profile.icon_element}
                  </a>
                </div>
              </motion.div>
            </HoverCardTrigger>
            {/* <HoverCardContent className="h-[20px] w-fit flex justify-center items-center text-xs font-medium">
              {profile.name}
            </HoverCardContent> */}
          </HoverCard>
        );
      })}
    </div>
  );
}
