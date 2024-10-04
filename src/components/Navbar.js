"use client"

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed z-50 top-0 left-0 right-0 z-10 w-[100%] m-auto bg-gray-200 shadow-lg"
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo with hover animation */}
        <motion.img
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="h-14 w-14 rounded-full object-cover"
          src="/logo.png"
          alt="Logo"
          transition={{ duration: 0.3 }}
        />

        {/* Social Icons with staggered animation */}
        <motion.div
          className="flex items-center gap-4 text-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <SocialLink
            href="https://www.linkedin.com/in/shubham-thakur-b511032b5"
            icon={FaLinkedin}
            className="text-blue-800"
          />
          <SocialLink
            href="https://github.com/shubhamThakur79"
            icon={FaGithub}
            className="text-black"
          />
          <SocialLink
            href="https://x.com/Shubham20448922"
            icon={FaTwitter}
            className="text-blue-500"
          />
        </motion.div>
      </div>
    </motion.nav>
  );
};

// SocialLink component with hover and tap animations
const SocialLink = ({ href, icon: Icon, className }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.3 }}
  >
    <Icon className={`lg:text-3xl ${className}`} />
  </motion.a>
);

export default Navbar;
