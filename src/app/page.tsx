"use client";

import { projectsData, skillData } from "@/lib/types";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="flex items-center justify-center min-h-[60vh] space-x-10">
          {/* <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale: 1}} transition={{type:"tween", duration: 0.2,}}>
            <Image src= "/userimage.jpg" alt="" width={192} height={192} quality={95} className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl" />
          </motion.div> */}
          <div className="space-y-10">
            <h1 className="text-white lg:text-6xl font-bold">
              Nice to meet you! 
              <br /><span className="lg:text-5xl">{"I am BOHAN HUANG."}</span>
            </h1>
            <Link href={"mailto:bohanhuang07@gmail.com"} className="inline-block text-white font-bold text-2xl">
              <div>
                <h1 className="text-2xl font-bold">Contact Me</h1>
                <div className="w-full h-2 bg-[#6c3dff] rounded-full "></div>
                <div className="w-full h-2 bg-white rounded-full translate-x-2"></div>
              </div>
            </Link>
          </div>
          <div>
            <div className="w-72 h-72 space-y-3">
              <div className="flex gap-3 translate-x-8">
                <motion.div className="w-32 h-32 rounded-xl bg-[#5429d9]"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%"
                }}></motion.div>
                <motion.div className="w-32 h-32 rounded-2xl bg-black"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{
                  scale: 0.8,
                  rotate: 180,
                  borderRadius: "100%"
                }}></motion.div>

              </div>
              <div className="flex gap-3 translate-x-">
                <motion.div className="w-32 h-32 rounded-xl bg-white" whileHover={{rotate: 180, scaleY: 0.9}}></motion.div>
                <motion.div className="w-32 h-32 rounded-2xl bg-[#a186f5]"
                whileHover={{ scale: 0.8, rotate: 90 }}
                whileTap={{
                  scale: 1,
                  rotate: 180,
                  borderRadius: "100%"
                }}></motion.div>
                <motion.div className="w-12 h-32 rounded-2xl bg-[#94a3b8]"
                whileHover={{scaleY: 0.6}}></motion.div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <motion.section className="mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{opacity:0, y:100}} animate={{opacity:1, y: 0}} transition={{delay:0.175}} id="about">
        <h2 className="text-3xl font-medium capitalize mb-8">About Me</h2>
        <p className="mb-3">
          Hello! Welcome to my page. My name is BOHAN HUANG. I am a 1st master student now and trying to become a software engineer.
        </p>
        <p>
          My experience contains application(frontend and backend), deep learning mainly about computer vision, and learning ROS when I was a undergraduate student. Browse this website to learn more! 
        </p>
      </motion.section>

      <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40" initial={{opacity:0, y:100}} animate={{opacity:1, y: 0}} transition={{delay:0.175}} id="projects">
        <h2 className="text-3xl font-medium capitalize mb-8">Projects</h2>
        <div>
           {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
           ))}
        </div>
      </motion.section>
      <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40" initial={{opacity:0, y:100}} animate={{opacity:1, y: 0}} transition={{delay:0.175}} id="skills">
        <h2 className="text-3xl font-medium capitalize mb-8 ">Skills</h2>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-white">
              {
                skillData.map((skill, index) => (
                  <motion.li className="bg-[#6454f5] border border-white rounded-xl py-3 px-5 shadow-lg" key={index} 
                  initial={{opacity: 0, y:100}} whileInView={{opacity:1, y: 0, transition: {delay: index * 0.05}}} viewport={{once: true}} >
                    {skill}
                  </motion.li>
                ))
              }
            </ul>
      </motion.section>
    </main>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({title, description, tags, imageUrl}: ProjectProps) {
  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] mb-3 sm:mb-8 last:mb-0">

      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full gap-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li className="bg-[#578feb] px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full text-white" key={index}>{tag}</li>
          ))}
        </ul>
      </div>

      <Image src={imageUrl} alt="" width={200} height={400} quality={95} className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"/>
    </section>
  )
}