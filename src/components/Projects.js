import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectObj from "../components/ProjectObj";
import { GiClick } from "react-icons/gi";
import { motion } from 'framer-motion';
import { FaCircleChevronLeft, FaCircleChevronRight, FaGithub } from "react-icons/fa6";
import { useState } from "react";

const Projects = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    prevArrow: <FaCircleChevronLeft className="text-3xl ml-10 cursor-pointer text-pink-400" />,
    nextArrow: <FaCircleChevronRight className="text-3xl cursor-pointer mr-10 text-pink-400" />,
  };

  return (
    <div id="projects" className='w-full '> 
      <div className='border-b py-10  bg-[#080808] w-full pb-20'>
      <motion.h1
  whileInView={{ opacity: 1, y: 0, rotate: [-5, 0] }}
  initial={{ opacity: 0, y: -100 }}
  transition={{ duration: 1.5 }}
  className='relative z-10 mt-5 mb-12 text-center text-4xl md:text-5xl text-white font-extrabold'>
  Pro<span className='text-yellow-400'>jects</span>
</motion.h1>

        <div className='relative w-full'>
          <Slider className="md:px-10" ref={setSliderRef} {...settings}>
            {ProjectObj?.map((project, index) => (
              <div key={index} className='px-2'>
                <div className='bg-gradient-to-br from-indigo-700 to-pink-600 shadow-lg rounded-lg p-5'>
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.6 }}
                    className='h-[180px] relative'>
                    <img className='h-full w-full object-cover rounded' src={project?.img} alt={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 rounded"></div>
                    <motion.p
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 1.2 }}
                      className='absolute bottom-2 left-2 text-2xl font-bold text-white w-full'>
                      {project?.title}
                    </motion.p>
                  </motion.div>
                  {project?.tech && (
                    <p className="w-full mt-2 font-semibold ml-2 text-gray-100">
                      {project?.tech}
                    </p>
                  )}
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='md:p-4 p-2 flex gap-1 justify-center w-full'>
                    <details className='mb-3'>
                      <summary className='bg-red-500 w-[100px] duration-300 hover:bg-indigo-500 flex items-center h-9 px-[10px] rounded text-white'>
                        Description
                      </summary>
                      <p className='bg-zinc-800 w-[337px] md:ml-[-15px] absolute h-max top-0 duration-200 text-white/90 px-2 py-2 rounded'>
                        {project.description}
                      </p>
                    </details>
                    <div className='flex gap-2'>
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='duration-300 hover:bg-gray-500 flex items-center h-9 px-[10px] rounded gap-2 bg-black text-white'>
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='duration-300 hover:bg-green-700 flex items-center h-9 px-[10px] rounded gap-1 text-white bg-sky-600'>
                        <GiClick className='hover:text-red-600' /> LiveView
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
