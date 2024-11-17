import React from 'react'
import testimonials from '../../public/testimonials'
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';  

const Testimonials = () => {
    return (
      <div id="testimonial" className="bg-[#f7f8fc] py-12">
        <div className='container mx-auto'>
        <motion.div variants={fadeIn('up',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className='text-center mb-12'>
            <h2 className='text-2xl md:text-4xl font-bold font-Secondary mb-3'>What Our Clients Say</h2>
            <p className=' p-2 md:text-lg mb-12 md:w-1/2 m-auto'>Hear from some of our satisfied clients about how our services have positively impacted their lives and well-being. </p>
          </motion.div>

          <div className='flex flex-col p-5 md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
            {
              testimonials.map((testimonial, index)=> (
                <motion.div variants={fadeIn('left',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                  <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                  <FaQuoteLeft className=' size-9 md:size-12 text-primary'/>
                  </div>

                  <div className='flex flex-col space-y-3 mb-4'>
                    <p className='md:text-lg mb-2'>{testimonial.review}</p>
  
                  <div className='flex items-center gap-4'>
                    <img src={testimonial.image} alt="review" className='size-16 rounded-full object-cover' />
                   <div>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-gray-600'>{testimonial.location}</p>
                    </div>
                 </div>
                 </div>
               </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    );
  };

export default Testimonials
