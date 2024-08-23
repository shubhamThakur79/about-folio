"use client"
import React from 'react';

import { motion } from 'framer-motion';


const About = () => {
    return (
        <div className=" text-center  h-full w-full bg-gray-600 md:bg-transparent lg:text-lg rounded-md bg-clip-padding backdrop-filter bg-opacity-10 md:border-transparent border-gray-100">

                <motion.h1 whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-10 pt-10 pb-10 text-center text-4xl">
                    <span className='text-fuchsia-600 font-semibold'>A</span>bout <span className="text-neutral-400 md:text-slate-900">Me</span>
                </motion.h1>

                <div className='flex flex-wrap'>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        className='w-full p-2 lg:w-1/2 lg:p-8'
                    >
                        <div>
                            <img className='block md:hidden lg:shadow-3xl mb-10 lg:h-[350px] h-[270px] w-[95%] mt-[-30px] lg:w-auto m-auto lg:mt-[-65px] rounded max-h-[200px] object-cover lg:object-cover shadow-md shadow-slate-950 lg:rounded-tr-full   lg:rounded-tl-full lg:rounded-br-[150px] lg:rounded-bl-[150px]'  src="https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148222500.jpg?t=st=1724416181~exp=1724419781~hmac=9a414fbb7a3ec8e62cdb6551e54aaca8f8c87070e8f8c8a3623210744c6c1ac2&w=740" alt="about me" />

                            <img
                                className='hidden md:block lg:shadow-3xl mb-10 lg:h-[350px] h-[370px] w-[300px] mt-[-30px] lg:w-auto m-auto lg:mt-[-65px] rounded-tr-[100px] rounded-tl-[100px] object-cover lg:object-cover shadow-md shadow-slate-950 lg:rounded-tr-full   lg:rounded-tl-full lg:rounded-br-[150px] lg:rounded-bl-[150px]'
                                src="/about.jpg"
                                alt="About"
                            />
                        </div>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}

                        className="w-full lg:w-1/2">
                        <div className='flex text-start p-3 lg:p-0 justify-center lg:justify-start mt-[-30px]'>
                            <p className='max-w-xl'>
                                Hey, I'm Shubham, and I'm from the beautiful hills of Himachal Pradesh, India. I'm studying Computer Applications (BCA), and right now, I'm really into making websites. I'm learning HTML, CSS, and JavaScript to make cool stuff you can see on the front of websites. I love technology and being creative, so coding is a perfect fit for me. I'm always trying to get better at it, paying attention to all the little details to make websites look awesome and easy to use. When I'm not coding, I like exploring the nature around me. Himachal Pradesh has some amazing places to see, and I find it super inspiring. Whether I'm hiking in the forests or looking at the snowy mountains, being in nature helps me relax and gives me new ideas. I'm excited about my studies and getting better at web development. I think it's a cool way to combine my love for technology with making things that people enjoy using.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

     
    );
}

export default About;
