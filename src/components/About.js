"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function Component() {
  const cardStyle = "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-6";

  return (
    <div className="min-h-screen py-12 bg-[#080808] text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Creates smooth entrance one after another
            },
          },
        }}
        className="container mx-auto px-4"
      >
        {/* Animated Heading */}
        <motion.h1
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h1>

        {/* Animated Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Image Card Animation */}
          <motion.div
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`w-full lg:w-1/3 ${cardStyle}`}
          >
            <img
              src="https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148222500.jpg?t=st=1724416181~exp=1724419781~hmac=9a414fbb7a3ec8e62cdb6551e54aaca8f8c87070e8f8c8a3623210744c6c1ac2&w=740"
              alt="About me"
              className="w-full h-[180px] rounded-xl object-cover shadow-lg block md:hidden"
            />
            <img
              src="/about.jpg"
              alt="About"
              className="w-full h-[380px] rounded-xl object-cover shadow-lg hidden md:block"
            />
          </motion.div>

          {/* Text Card Animation */}
          <motion.div
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`w-full lg:w-2/3 ${cardStyle}`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-300">Hey, I'm Shubham</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              I'm from the beautiful hills of Himachal Pradesh, India. Right now, I'm studying Computer Applications (BCA) and I'm really into making websites. I'm learning HTML, CSS, and JavaScript to create cool stuff you can see on websites.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              I love technology and being creative, so coding is perfect for me. I'm always trying to get better at it, paying attention to all the little details to make websites look awesome and easy to use.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              When I'm not coding, I like exploring nature around me. Himachal Pradesh has some amazing places, and it gives me new ideas. Whether I'm hiking in forests or looking at snowy mountains, being in nature helps me relax and think of new ideas for my work.
            </p>
          </motion.div>
        </div>

        {/* Journey Section Animation */}
        <motion.div
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={`mt-12 ${cardStyle}`}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-300">My Journey</h3>
          <p className="text-base md:text-lg leading-relaxed">
            I'm excited about learning more in my studies and getting better at making websites. It's a fun way to use my love for technology to make things people enjoy using. I'm just starting out, but I'm working hard to learn new things every day. I want to make websites that are not just nice to look at, but also easy for people to use. It's amazing how I can take ideas from the beautiful nature around me in Himachal Pradesh and turn them into cool designs on the internet. I'm looking forward to growing more in this field and seeing where this journey takes me!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
