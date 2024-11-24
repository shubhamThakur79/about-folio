"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import resume from "./../../src/resume/Shubham's_Resume.pdf";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AnimatedSphere = () => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#8A2BE2"
        attach="material"
        distort={0.6}
        speed={1.5}
        roughness={0.2}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <div className="relative md:pl-20 min-h-screen mx-auto bg-[#080808]  overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative   bg-transparent m-auto w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-lg transition-transform duration-300 transform scale-105 block md:hidden flex justify-center mt-28 z-10"
      >
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-full w-full object-cover rounded-full transition-transform duration-300 scale-110" 
          src="/logo.png"
          alt="Shubham's Logo"
        />
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent 
                  bg-gradient-to-br from-white to-white opacity-10"></div>
        {/* Dynamic Glowing Effect */}
        <div className="absolute inset-0 rounded-full border-4 border-white opacity-40 
                  transition duration-300 scale-105 animate-pulse"></div>
      </motion.div>

      <div className="relative md:mt-20 m-auto z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen text-white px-4 md:px-8 lg:px-16 py-12">
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-center lg:text-left mb-12 lg:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl  lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r text-white"
          >
            Hi, 👋 I'm Shubham
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl  md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-white to-indigo-700 bg-clip-text text-transparent"
          >
            Frontend Developer
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 text-start"
          >
            As a passionate and skilled frontend developer, I specialize in creating visually appealing and user-friendly web interfaces. With expertise in React.js, I build dynamic and efficient web applications, focusing on performance and scalability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='md:mt-5 mt-10 flex gap-5 flex-wrap justify-around items-center bg-white/10 py-6 rounded-lg  md:w-[70%] md:justify-around'
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="  bg-black text-[#02B51F] font-bold py-4 text-xl border border-white/50 p-6 md:px-8 rounded-xl   hover:bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Get Resume
            </a>
            <a
              href="#projects"


              rel="noopener noreferrer"
              className="  bg-black text-[#02B51F] font-bold py-4 text-xl border border-white/50 p-6 md:px-8  rounded-xl   hover:bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              My Work            </a>
            <a
              href="#contacts"
              rel="noopener noreferrer"
              className="  bg-black text-[#02B51F] font-bold py-4 text-xl border border-white/50 p-6 md:px-8  rounded-xl   hover:bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
             Contact          
               </a>

               <div className='flex gap-3 items-center justify-center  md:gap-10'>
               <a
                href="https://www.linkedin.com/in/shubham-thakur-b511032b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-300 text-4xl hover:text-blue-500 transition duration-300" />
              </a>
              <a
                href="https://github.com/shubhamThakur79"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-4xl hover:text-gray-400 transition duration-300" />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2FShubham20448922"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-blue-400 text-4xl hover:text-blue-600 transition duration-300" />
              </a>
               </div>
          </motion.div>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2">
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px] overflow-hidden shadow-lg transition-transform duration-300 transform scale-105"> {/* Default scaling */}
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="h-full w-full object-cover rounded-full transition-transform duration-300 scale-110" // Default scaling for image
                src="/logo.png"
                alt="Shubham's Logo"
              />
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-full border-5 border-transparent 
                      bg-gradient-to-br     opacity-10"></div>
              {/* Dynamic Glowing Effect */}
              <div className="absolute inset-0 rounded-full border-4 border-white rotate-180 opacity-40 
                      transition duration-300 scale-105 animate-pulse"></div>
            </div>
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Hero;