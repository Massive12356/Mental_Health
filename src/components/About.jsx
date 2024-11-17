import { useState } from "react";
import thumnailImg from '../assets/video-thumbnail.webp'
import { FaPlay } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay =() =>{
    setIsVideoPlaying(true);
  }

  const handleCloseVideo = () =>{
    setIsVideoPlaying(false);
  }
    return (
      <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
        <div className="container mx-auto">
          <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* left-side */}
            <motion.div variants={fadeIn('right',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className="md:w-1/2 w-full mb-8 md:mb-0">
            {
              !isVideoPlaying ? (
                <div className="relative">
                  <img src={thumnailImg} alt="video thumbnail" className="w-full md:h-[446px] h-auto rounded-lg" />
                  <button  onClick={handleVideoPlay}  className="absolute top-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"><FaPlay className="size-11 text-white"/></button>
                </div>
              ) : (null)
            }
            </motion.div>

            {/* right-side */}
            <motion.div variants={fadeIn('left',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className="md:w-1/2 w-full">
            <h1 className=' text-xl  md:text-3xl font-Secondary font-bold mb-4  leading-snug'>Individual Consult and Therapy</h1>
            <p className='md:text-lg mb-12 md:pr-8'> We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our new mindful guide on how to meditate.</p>

            <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
            <a href="#contact" className=' flex gap-1 items-center'> <span>Get Started</span> <FaCircleArrowRight /></a>
            </button>
            </motion.div>
        </div>


        {
          isVideoPlaying && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
               <div className="relative w-full h-full flex items-center justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ga-MniJxQz8?si=2ifV9oWK1ZJ9JBhN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-lg"></iframe>
              <button onClick={handleCloseVideo} className="absolute top-9 right-10 border border-red-800 rounded p-3 text-white text-2xl cursor-pointer">
              <GrClose className="w-10" />
              </button>
            </div>
            </div>
          )
        }


      </div>

      </div>
    )
  }
  
  export default About;
