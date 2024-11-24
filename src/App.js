import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { GoArrowUp } from 'react-icons/go';
import { motion } from 'framer-motion';


const App = () => {
  return (

    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-600 selection:text-[#fff]'>
        <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>      </div>

        </div>
       

      {/* Main Page start from here */}

      <div className="bg-gray-900 text-white/70 overflow-hidden md:bg-transparent md:text-black">
        <Navbar />
        <Hero />
        <About/>
        <Projects/>
        <Technology/>
        <Contact/>

        <motion.a
      href="#"
      className="fixed right-2 bottom-4 z-30 p-3 bg-gradient-to-r from-blue-400 to-red-500 text-white rounded-full shadow-lg flex items-center justify-center text-xl md:text-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GoArrowUp />
    </motion.a>
      </div>


    </>
  )
}

export default App