"use client"
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaPhoneVolume, FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"
import { GoArrowUp } from 'react-icons/go';
import toast from 'react-hot-toast';
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6aa8cad-cd66-415b-b7b0-7861a4bd1b4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      {result &&
        <span className='text-center text-xl font-semibold'>{alert(result)}</span>
      }
      <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        className='border  border-neutral-900 md:border-gray-300 justify-center pb-5 flex items-center flex-col mb-10'>

        <h1 className='my-10   text-4xl font-bold '>Get In <span className='text-green-600'>Touch</span></h1>

        <div className='flex  flex-col md:flex-row justify-center w-full bg-black/20  py-10'>
          <div className='md:w-1/2 h-[66vh]    pt-2 w-full flex gap-3 md:gap-0 md:mt-0 mt-[-130px]  md:my-0 justify-center flex-col md:items-center '>
            <div className='w-full flex justify-center md:items-end items-center gap-3 h-1/2'>

              <a className='flex justify-center gap-4 items-center md:text-2xl underline text-xl  text-blue-400' href="mailto:shubhamthakurbh1@gmail.com"><AiOutlineMail className='text-red-500 text-3xl' />  Send Mail</a>
              <br />
              <a className='flex justify-center gap-4 items-center md:text-2xl underline text-xl  text-blue-400' href="tel:7876314359"><FaPhoneVolume className='text-green-600 ' />7876314359</a>
            </div>
            <div className='flex mt-[-100px] h-max  md:items-start md:mt-4 gap-5 w-max m-auto px-5 py-3 text-xl bg-white/10 md:bg-transparent  items-center justify-center'>

              <a href="https://www.linkedin.com/in/shubham-thakur-b511032b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='lg:text-3xl text-blue-800' /></a>
              <a href="https://github.com/shubhamThakur79"> <FaGithub className='lg:text-3xl  text-black' /></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FShubham20448922"><FaTwitter className='text-blue-500 lg:text-3xl ' /></a>
            </div>
          </div>

          {/*  From   */}

          <div class="container  md:w-1/2 w-full md:mt-0 mt-[-250px]">
            <div class="">
              <div class="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <form onSubmit={onSubmit}>
                  <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="name">Your Name</label>
                    <input
                      class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your name"
                      type="text" name="name" required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="email">Your Email</label>
                    <input
                      class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your email"

                      id="email"
                      type="email" name="email" required
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="message"
                    >Your Message</label>
                    <textarea
                      class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      rows="4"
                      placeholder="Enter your message"
                      name="message" required
                      id="message"
                    ></textarea>
                  </div>
                  <button
                    class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                    type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>




        {/* <a className='text-right underline ml-[300px] lg:ml-[990px] mb-[-50px] lg:mb-[-50px] text-3xl p-3 bg-gray-100/60 rounded-[50%] fixed right-0 top-10' href="#"><GoArrowUp />        </a> */}
      </motion.div>

    </>

  )
}

export default Contact
