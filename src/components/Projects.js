"use client";
import React, { useState, useEffect } from 'react';
import ProjectObj from './ProjectObj'; // Assuming ProjectObj.js is in the same directory
import { FaGithub } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { motion } from "framer-motion";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Projects = () => {
  const [value, setValue] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth * 0.7);
      if (window.innerWidth < 640) {
        setCardWidth(window.innerWidth * 0.9);
      } else {
        setCardWidth(300);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalCards = ProjectObj.length;
  const maxScrollWidth = -cardWidth * (totalCards - Math.floor(containerWidth / cardWidth));

  const handleLeft = () => {
    setValue((prev) => (prev + cardWidth > 0 ? 0 : prev + cardWidth));
  };

  const handleRight = () => {
    setValue((prev) => (prev - cardWidth < maxScrollWidth ? maxScrollWidth : prev - cardWidth));
  };

  return (
    <div className='pt-10 w-full'>
      <div className='border-b border-zinc-300 bg-[#ffffff1e] pb-10 w-full'>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.3 }}
          className='my-20 text-center text-4xl'>
          <span className='text-gray-300 text-5xl'>Pro<span className='text-red-500'>jects</span></span>
        </motion.h1>
        <div className='relative flex items-center justify-between w-full'>
          <FaCircleChevronLeft
            onClick={handleLeft}
            className={`sm:text-6xl text-4xl cursor-pointer mx-1 ${value === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
          <div className='flex  items-center  md:m-auto md:w-[70%] w-[100%]  overflow-hidden  border border-red-800'>
            <motion.div
              animate={{ x: value }}
              transition={{ duration: 0.5 }}
              className='flex justify-center  md:gap-12  duration-600 lg:mx-10 md:m-auto '>
              {ProjectObj.map((project, index) => (
                <div key={index} className='items-center rounded-lg overflow-hidden justify-center   border border-red-800' style={{ width: cardWidth }}>
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.6 }}
                    className='h-[180px] flex relative mb-1 md:w-[300px] w-[180px] ' style={{ width: cardWidth }}>
                    <img className='h-[100%] w-full   object-cover rounded-lg' src={project.img} alt={project.title} />
                    <div className="absolute w-full h-8 bottom-0 bg-gradient-to-b from-transparent to-black/90"></div>
                    <motion.p
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1.2 }}
                      className='absolute bottom-0 ml-2 pb-1 font-bold text-2xl text-white'>
                      {project.title}
                    </motion.p>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='flex mb-[2px] justify-center items-center gap-1' style={{ width: cardWidth }}>
                    <details className='w-full'>
                      <summary className='bg-red-500 w-[100px] delay-100 hover:bg-slate-500 hover:text-black flex items-center h-9 px-[10px] rounded gap-2 text-white'>Description</summary>
                      <p className='bg-zinc-800/40 text-white/90 px-1 absolute' style={{ width: cardWidth }}>{project.description}</p>
                    </details>
                    <button className='transition delay-100 hover:bg-pink-500 hover:text-black flex items-center h-9 px-[10px] rounded gap-2 bg-black text-white'>
                      <FaGithub /><a target='_blank' href={project.github}>GitHub</a>
                    </button>
                    <button className='hover:text-black hover:bg-green-700 delay-100 transition flex items-center h-9 px-[10px] rounded gap-1 text-white bg-sky-600'>
                      <GiClick className='hover:text-red-600' /><a target='_blank' href={project.link}>LiveView</a>
                    </button>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
          <FaCircleChevronRight
            onClick={handleRight}
            className={`sm:text-6xl text-4xl cursor-pointer mx-1  ${value === maxScrollWidth ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
