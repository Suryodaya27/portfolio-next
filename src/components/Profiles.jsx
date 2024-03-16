"use client";

import leetcode from "@/assets/leetcode.svg";
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

export default function Profiles() {
  return (
    <div className=" flex flex-col md:flex-row gap-4 my-5">
      {profiles.map((profile) => {
        return (
            <HoverCard>
                <HoverCardTrigger>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%",
                        }}
                    >
                        <div className="p-5 m-3 bg-white rounded-md hover:bg-slate-50 outline-black border-black shadow-md hover:shadow-xl">
                            <a href={profile.link_element} target="_blank">{profile.icon_element}</a>
                        </div>
                    </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="h-[20px] w-fit flex justify-center items-center text-xs font-medium">
                    {profile.name}
                </HoverCardContent>
            </HoverCard>
        );
      })}
      
    </div>
  );
}
