"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Project() {
  const projects = [
    {
      id: 0,
      title: "AI Journaling App Backend",
      description:
        "Allows users to log daily entries and receive AI-generated summaries, insights, and goal recommendations.",
      imageSrc: "https://img.icons8.com/?size=100&id=67346&format=png&color=000000",
      liveLink:"",
      githubLink: "https://github.com/Suryodaya27/ai-journal-backend",
    },
    {
      id: 1,
      title: "Prepbuddy - Mcq generator",
      description:
        "Generates mcq on users input data and it is a web-based platform designed to offer users an engaging way to test their knowledge",
      imageSrc: "https://img.icons8.com/?size=80&id=114416&format=png",
      liveLink: "https://prep-buddy-next.vercel.app",
      githubLink: "https://github.com/Suryodaya27/prep-buddy-next",
    },
    {
      id: 2,
      title: "Apna Mart - Online Grocery Store",
      description:
        "Platform for users to Buy groceries online with features such as cart updation and razorpay",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/1261/1261163.png",
      liveLink: "https://youtu.be/-JezvLU1dow",
      githubLink: "https://github.com/Suryodaya27/marketPoint",
    },
    {
      id: 3,
      title: "TrimTrends - Barber booking site",
      description:
        "Platform for users to discover and book appointments at local barbershops.",
      imageSrc: "https://img.icons8.com/?size=1x&id=18370&format=png",
      liveLink: "https://www.youtube.com/watch?v=MQEKdOPNHwI&feature=youtu.be",
      githubLink: "https://github.com/Suryodaya27/barber",
    },
    {
      id: 4,
      title: "Ecommerce website using ReactJs",
      description:
        "You can browse and see Products in this project, add them to your Cart and Wishlist, and update both your cart and wishlist.",
      imageSrc:
        "https://i.pinimg.com/originals/4a/38/7b/4a387bda853bca3782d73234c786a150.png",
      liveLink: "https://ecommerce-thrift-store.netlify.app/",
      githubLink: "https://github.com/Suryodaya27/ecom",
    },
    {
      id: 5,
      title: "NewsApp using ReactJs",
      description:
        "You can browse and see the most recent news for many categories in this project. To retrieve news, the newsapi API was used.",
      imageSrc:
        "https://www.freeiconspng.com/thumbs/news-icon/news-icon-24.png",
      liveLink: "https://youtu.be/idGPBShPa_M",
      githubLink: "https://github.com/Suryodaya27/news",
    },
    {
      id: 6,
      title: "The MovieDB using SveltekitJs",
      description:
        "In this project, the tmdb API was used to retrieve data, and you can utilize the search filter to learn more about any movie.",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/4221/4221419.png",
      liveLink: "https://movie-iota-lilac.vercel.app/",
      githubLink: "https://github.com/Suryodaya27/movie",
    },
    {
      id: 7,
      title: "Notes Maker",
      description: "You can create, edit, and delete notes in this project.",
      imageSrc:
        "https://cdn3d.iconscout.com/3d/premium/thumb/sticky-notes-6292787-5175966.png",
      liveLink: "https://suryodaya27.github.io/MyNotes-Notes-maker/",
      githubLink: "https://github.com/Suryodaya27/MyNotes-Notes-maker",
    },
  ];
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="p-5 ">
      <div className="text-3xl font-semibold text-center my-3">Projects</div>
      <motion.div
        className=" flex flex-wrap justify-center gap-5 pb-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => {
          return (
            <motion.div
              className="w:1/2 md:w-1/4 "
              variants={item}
              key={project.title}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex flex-col gap-4 justify-center">
                    <div className="flex justify-center">
                      <Image src={project.imageSrc} height={40} width={40} />
                    </div>
                    <div>{project.title}</div>
                  </CardTitle>
                  <CardDescription className="h-[60px]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-3 mt-3">
                  <Button size="sm" className="bg-blue-700 hover:bg-blue-950">
                    <a href={project.liveLink} target="_blank">
                      Link
                    </a>
                  </Button>
                  <Button size="sm" variant="destructive">
                    <a href={project.githubLink} target="_blank">
                      Github
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
