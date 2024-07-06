"use client"
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <>
      <motion.div whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{duration:1.2}}
    className='border border-neutral-900 justify-center pb-20 flex items-center flex-col mb-10'>
      <h1 className='my-10   text-4xl font-bold '>Get In <span className='text-green-600'>Touch</span></h1>
    

        <a className='flex justify-center gap-4 items-center text-2xl hover:text-blue-800' href="mailto:shubhamthakurbh1@gmail.com"><AiOutlineMail className='text-red-500 text-3xl' />  Send Mail</a>
        <br />
        <a className='flex gap-4 justify-center items-center text-2xl hover:text-blue-800' href="tel:"><FaPhoneVolume className='text-green-600 ' />  7876314359</a>
   
    <a className='text-right underline ml-[370px] lg:ml-[990px] mb-[-50px] lg:mb-[-50px]' href="#">Go To Top</a>
    </motion.div>
    </>
  
  )
}

export default Contact