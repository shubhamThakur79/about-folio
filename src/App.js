import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (

    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-600 selection:text-[#fff]'>
        <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>      </div>

        </div>
       

      {/* Main Page start from here */}

      <div className="overflow-hidden sm:mx-[15px] md:mx-[25px] lg:mx-[60px] xl:mx-[70px]">
        <Navbar />
        <Hero />
        <About/>
        <Technology/>
        <Projects/>
        <Contact/>

      </div>


    </>
  )
}

export default App