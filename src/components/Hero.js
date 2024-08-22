"use client"

import React from 'react';
import { delay, motion } from 'framer-motion';

const container = (delay) => ({
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay
        }
    }
});

const Hero = () => {

    return (
        <div className="mt-[90px] lg:px-10 lg:pl-32   pt-[70px] mb-8 h-[95vh] lg:h-[80vh] border-neutral-400  lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full  md:w-1/2 lg:w-1/2">
                    <div className='w-full  pb-3 lg:hidden shadow-lg border-blue-500'>
                        <motion.div initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='border-x border-black mt-[-105px]  bg-gray-200/10 flex justify-center items-center'>
                            <img className='shadow-md  my-[30px] shadow-[#ff0000b0] border-[2px] rounded-[50%] h-48 object-cover  w-48 ' src="/logo.png" alt="" />
                        </motion.div>
                    </div>
                    <div className='flex mb-[336px] flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0.2)}
                            initial="hidden"
                            animate="visible"
                            className="pb-2 mt-10 text-4xl sm:text-4xl md:text-5xl lg:text-6xl mt-[-2px] lg:mt-16  font-medium lg:font-bold tracking-wide"
                        >
                            Hi,👋 I'm Shubham
                        </motion.h1>
                        <motion.span variants={container(0.6)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl'>
                            FrontEnd Developer
                        </motion.span>
                        <motion.p variants={container(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 px-3 lg:p-0 max-w-xl py-6 tracking-tight text-zinc-300/70 font-semibold'>
                            As a passionate and skilled frontend developer, I specialize in creating visually appealing and user-friendly web interfaces. With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life, ensuring seamless and responsive user experiences. My expertise in React.js allows me to build dynamic and efficient web applications, focusing on performance and scalability.
                        </motion.p>
                    </div>
                </div>
                <div className='hidden  lg:block w-full  lg:w-1/2 lg:8 '>
                    <div className=' flex justify-center'>
                        <motion.img initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className='mt-[55px] ml-[240px] shadow-sm  shadow-slate-950 rounded-tr-full rounded-bl-full rounded-br-full rounded-tl-full lg:rounded-br-[150px] lg:rounded-bl-[150px]' src="/logo.png" alt="" />

                    </div>
                </div>
            </div>
            <motion.div initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className='flex  justify-end lg:justify-start lg:mt-[-307px] mt-[-300px] sticky top-0'>
                <a target='_blank' className='lg:py-4 duration-300 lg:text-xl lg:px-8 py-4 px-[70px] m-auto lg:m-0 text-[22px] font-semibold hover:text-black bg-gradient-to-r from-pink-400  text-white rounded hover:bg-red-500 focus:bg-green-400 to-purple-500   bg-transparent' href="/Shubham'sresume.pdf">
                    Get Resume
                </a>
            </motion.div>
       
        </div >
    );
}

export default Hero;
