"use client"
import React from 'react';
import ProjectObj from './ProjectObj'; // Assuming ProjectObj.js is in the same directory
import { FaGithub } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { motion } from "framer-motion"
const Projects = () => {
  return (
    <>
      <div className='border-b mb-[100px] border-zinc-300 bg-[#ffffff1e] mb-10 w-full'>
        <motion.h1 whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.3 }}
          className='my-20 text-center text-4xl '>
          <span className='text-green-600 text-5xl'>P</span>
          <span className='text-red-500'>r</span>
          <span className='text-zinc-900'>o</span>
          <span className='text-fuchsia-500'>j</span>
          <span className='text-sky-500'>e</span>
          <span className='text-rose-800'>c</span>
          <span className='text-lime-500'>t</span>
          <span className='text-rose-400'>s</span>
        </motion.h1>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className='flex flex-wrap justify-center gap-32  '>
          {ProjectObj.map((project, index) => (
            <div key={index} className='flex  lg:h-[350px] bg-green-500 flex-col items-center  w-max rounded overflow-hidden'>
              <motion.div whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.6 }}
                className='h-[250px] w-[300px] lg:h-[300px] flex'>
                <img className='h-[80%] w-full object-cover' src={project.img} alt={project.title} />
              </motion.div>

              <motion.p whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.2 }}
                className=' mt-[-40px] text-xl font-semibold mb-[2px] text-black'>{project.title}</motion.p>
              <motion.div whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='flex mb-[2px] justify-center mt-[0px] lg:mt-[15px] items-center gap-1 w-[300px] '>
                <details
                  className='w-[300px] ' >
                  <summary className='bg-red-500 w-[100px] delay-100 hover:bg-slate-500 hover:text-black flex items-center h-9 px-[10px] rounded gap-2  text-white'>Discription</summary>
                  <p className='bg-zinc-300 absolute w-[300px]'>{project.description}</p>
                </details>
                <button
                  className='transition delay-100 hover:bg-pink-500 hover:text-black flex items-center h-9 px-[10px] rounded gap-2 bg-black text-white'><FaGithub /><a target='_blank' href={project.github}>GitHub</a></button>
                <button
                  className='hover:text-black hover:bg-green-700 delay-100 transition flex items-center h-9 px-[10px] rounded gap-1  text-white bg-sky-600'>< GiClick className='hover:text-red-600 ' /><a target='_blank' href={project.link}>LiveView</a></button>

              </motion.div>

            </div>
          ))}
        </motion.div>
       
      </div>
    </>
  );
}

export default Projects;
