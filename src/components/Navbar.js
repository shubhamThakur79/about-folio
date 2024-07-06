"use client"

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <motion.nav whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{duration:0.5}}
     className="fixed top-0 left-0 right-0 z-10 w-[100%] m-auto  bg-[#fff]  ">
      <div className="flex  items-center justify-between px-4">
        <img 
        className="h-14 w-14 rounded-full object-cover" src="/logo.png" alt="Logo" />
        <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{duration:1}}
        className="flex items-center gap-4 text-2xl text-white">
         <a href="https://www.linkedin.com/in/shubham-thakur-b511032b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='lg:text-3xl text-blue-800' /></a>
         <a href="https://github.com/shubhamThakur79"> <FaGithub className='lg:text-3xl  text-black' /></a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2FShubham20448922"><FaTwitter className='text-blue-500 lg:text-3xl ' /></a>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
