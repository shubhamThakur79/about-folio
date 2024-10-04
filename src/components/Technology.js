"use client"
import React from 'react'
import { RiReactjsLine, RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiRedux, SiShadcnui } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10, scale: 0.9 },
  animate: {
    y: [10, -10],
    scale: [0.9, 1],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }
});

const skills = [
  { icon: <IoLogoHtml5 className='text-5xl text-orange-600' />, label: "HTML5" },
  { icon: <DiCss3 className='text-5xl text-blue-600' />, label: "CSS3" },
  { icon: <RiJavascriptFill className='text-5xl text-yellow-500' />, label: "JavaScript" },
  { icon: <RiTailwindCssFill className='text-5xl text-teal-500' />, label: "TailwindCSS" },
  { icon: <RiReactjsLine className='text-5xl text-blue-400' />, label: "ReactJS" },
  { icon: <SiRedux className='text-5xl text-purple-500' />, label: "Redux" },
  { icon: <SiShadcnui className='text-5xl text-green-400' />, label: "ShadCN" },
  { icon: <FaGitAlt className='text-5xl text-red-600' />, label: "Git" },
  { icon: <FaGithub className='text-5xl text-black' />, label: "GitHub" },
];

const Technology = () => {
  return (
    <div className="relative bg-gray-500/10 md:bg-transparent pt-5 pb-28">
      {/* Interactive Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 opacity-30 z-0 animate-pulse"></div>

      <motion.h1
        whileInView={{ opacity: 1, y: 0, rotate: [-5, 0] }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='relative z-10 mt-5 mb-12 text-center text-4xl md:text-5xl text-white font-extrabold'>
        Techno<span className='text-yellow-400'>logies</span>
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-wrap justify-center gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-gray-800/70 backdrop-blur-md rounded-xl flex flex-col items-center justify-center shadow-lg hover:scale-110 transform transition-all duration-300"
          >
            {skill.icon}
            <span className='mt-2 text-white text-sm md:text-base'>{skill.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technology;
