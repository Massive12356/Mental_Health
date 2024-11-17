import React from 'react'
import packages from '../../public/pricingData';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const Pricing = () => {

  const handleScrollToContact =() => {
    const targetElement = document.getElementById('contact')
    if(targetElement){
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior:'smooth',
      })
    }
  }
    return (
      <div id="pricing" className="bg-[#f7f8fc] pt-32 mb-4 ">
        <div className='container mx-auto px-8'>
          <motion.div variants={fadeIn('up',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className='text-center mb-12'>
            <h2 className=' text-2xl  md:text-4xl font-bold font-Secondary mb-3'>Perfect for Small & Large Brands</h2>
            <p className=' text-justify md:text-lg mb-12 md:w-2/3 m-auto'>Mental wellness is essential for everyone—from individuals and small businesses to large organizations. We offer flexible packages designed to support your unique needs, helping you foster resilience, productivity, and overall well-being at every level.</p>
          </motion.div>

           {/* packages */}
          <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8'>
            {
              packages.map((pkg, index) => (
                <motion.div variants={fadeIn('right',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg '>
                  <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
                  <hr className='w-24 border text-primary border-primary'/>
                  <p className='text-3xl font-bold mb-4'>{pkg.price} <span className='text-lg font-normal'>/monthly</span></p>
                  <p className='text-lg mb-4'>{pkg.description}</p>
                  <ul className='list-disc list-inside space-y-2 mb-5'>
                    {
                      pkg.features.map((feature, idx) => (
                        <li key={idx} >{feature}</li>
                      ))
                    }
                  </ul>
                  <button className='bg-primary text-white px-4 py-2 rounded'>Get Started</button>
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    );
  };

export default Pricing
