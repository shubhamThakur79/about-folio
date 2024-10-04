"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaPhoneVolume, FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6aa8cad-cd66-415b-b7b0-7861a4bd1b4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <>
      {result && (
        <span className="text-center text-xl font-semibold">{alert(result)}</span>
      )}

      {/* Contact Section Container */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 md:px-5"
      >
        {/* Section Title */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0, rotate: [-5, 0] }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 mb-12 text-center text-4xl md:text-5xl text-white font-extrabold"
        >
          Get In <span className="text-yellow-300">Touch</span>
        </motion.h1>

        {/* Contact Info and Social Links */}
        <div className="flex flex-col md:flex-row justify-center w-full py-10 bg-black/40 rounded-lg shadow-lg">

          {/* Contact Info */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="md:w-1/2 flex flex-col justify-center items-center gap-5 py-10"
          >
            <div className="flex gap-6 items-center">
              <a
                className="flex gap-4 items-center text-xl md:text-2xl underline text-yellow-300"
                href="mailto:shubhamthakurbh1@gmail.com"
              >
                <AiOutlineMail className="text-red-500 text-3xl" />
                Send Mail
              </a>
              <a
                className="flex gap-4 items-center text-xl md:text-2xl underline text-yellow-300"
                href="tel:7876314359"
              >
                <FaPhoneVolume className="text-green-400 text-3xl" />
                7876314359
              </a>
            </div>

            <div className="flex gap-5 items-center justify-center">
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

          {/* Contact Form */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="md:w-1/2 w-full flex justify-center items-center"
          >
            <div className="bg-black/10 backdrop-blur-md rounded-lg shadow-lg md:p-8 p-0 w-[95%] md:w-full">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Contact Us</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-200 mb-1" htmlFor="name">Your Name</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 mb-1" htmlFor="email">Your Email</label>
                  <input
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 mb-1" htmlFor="message">Your Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    rows="4"
                    placeholder="Enter your message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className="bg-black text-gray-200 py-10">
        <div className="text-center">
          <p className="text-lg">© 2024 Shubham Thakur. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#projects" className="text-yellow-300 hover:text-yellow-500 transition duration-300">Projects</a>
            <a href="#technologies" className="text-yellow-300 hover:text-yellow-500 transition duration-300">Technologies</a>
            <a href="#contact" className="text-yellow-300 hover:text-yellow-500 transition duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
