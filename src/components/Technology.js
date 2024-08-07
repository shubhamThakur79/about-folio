"use client"
import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { animate, motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})


const Technology = () => {
  return (
    <>
      <div className="mt-[-70px] bg-gray-500/10 pb-14 ">
      <div className='lg:pt-6'>

        <motion.h1 whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{duration:1.5}}
          className='my-20 text-center text-4xl text-red-500 font-semibold'>Techno<span className='text-white/70'>logies</span></motion.h1>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4 bg-gray-200/10  rounded-lg lg:w-max h-max m-auto py-10">
          <motion.div variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-neutral-800 p-4 text-center'>
            <IoLogoHtml5 className='text-7xl text-sky-600' />
            HTML5
          </motion.div>
          <motion.div variants={iconVariants(3)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-neutral-800 p-4 text-center'>
            <DiCss3 className='text-7xl text-red-500' />
            Css3
          </motion.div>
          <motion.div variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-neutral-800 p-4'>
            <RiTailwindCssFill className='text-7xl text-blue-600 text-center' />
            Tailwind Css
          </motion.div>
          <motion.div variants={iconVariants(4)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-neutral-800 p-4'>
            < RiJavascriptFill className='text-7xl text-amber-600 text-center' />
            JavaScript
          </motion.div>
          <motion.div variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-blue-600 text-center' />
            ReactJS
          </motion.div>
        </motion.div>
      </div>
      </div>

    </>

  )
}

export default Technology