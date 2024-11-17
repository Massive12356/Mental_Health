import React from 'react'
import FooterLogo from '../assets/footer-logo.svg'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa6'
import { FaMapMarker } from 'react-icons/fa'
import { fadeIn } from '../utilis/animationVariants'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='md:py-12 py-10 px-5 bg-gray300 md:px-8'>
        <motion.div variants={fadeIn('up',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}}  className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
            <div className='space-y-6 md:mr-14'>
                <div className='flex items-center space-x-2'>
                    <img src={FooterLogo} alt="Footer Logo"  className='w-32 h-auto'/>
                </div>

                <p className='text-para'>At <strong>Mindleap</strong> we provide compassionate, evidence-based care to support your mental well-being. Our licensed professionals are here to help you on your journey to healing in a safe, confidential environment.
</p>
                <div className='flex space-x-4'>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white' ><FaFacebook className='text-xl'/></a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white' ><FaTwitter className='text-xl'/></a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white' ><FaInstagram className='text-xl'/></a>
                    <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white' ><FaLinkedin className='text-xl'/></a>
                </div>
            </div>

            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4' >Quick Links</h3>

                <ul className='space-y-3'>
                    <li>
                        <a href="#home" className='hover:underline text-gray-700'>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='hover:underline text-gray-700'>About</a>
                    </li>
                    <li>
                        <a href="#services" className='hover:underline text-gray-700'>Services</a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:underline text-gray-700'>Contact Us</a>
                    </li>
                </ul>
            </div>

            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4' >Support</h3>

                <ul className='space-y-3'>
                    <li>
                        <a href="#" className='hover:underline text-gray-700'>FAQs</a>
                    </li>
                    <li>
                        <a href="#" className='hover:underline text-gray-700'>Terms of Services</a>
                    </li>
                    <li>
                        <a href="#" className='hover:underline text-gray-700'>Privacy Policies</a>
                    </li>
                    <li>
                        <a href="#" className='hover:underline text-gray-700'>Support Center</a>
                    </li>
                </ul>
            </div>

            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4' >Conact Info</h3>

                <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                        <FaMapMarker className='text-primary'/>
                        <p className='text-gray-700'> 123 Street , city ,Country</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaPhone className='text-primary'/>
                        <p className='text-gray-700'> +123 456 7890</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaEnvelope className='text-primary'/>
                        <p className='text-gray-700'> info@MassivePlus++</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    </div>
  )
}

export default Footer
