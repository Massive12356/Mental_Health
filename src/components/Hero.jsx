import React from 'react'
import heroImg from '../assets/hero.webp'
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:p-8 p-3 overflow-y-hidden gap-12 h-full'>
        {/* left side */}
        <motion.div  variants={fadeIn('down',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}}   className='w-full  md:w-1/2'>
        <h1 className=' text-2xl md:text-5xl font-Secondary font-bold mb-4 md:w-2/2 leading-snug'>Start Your Journey to Mental Wellness</h1>
        <p className='text-1 md:text-lg mb-12 md:pr-8'> We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our new mindful guide on how to meditate.</p>

        <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
          <a href="#contact" className=' flex gap-1 items-center'> <span>Get Started</span> <FaCircleArrowRight /></a>
        </button>
        </motion.div>



        {/* right side */}
        <motion.div variants={fadeIn('left',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}}  className='md:w-1/2 h-full'>
        <img src={heroImg} alt=" hero image"  className='w-60 md:w-full object-cover'/>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
