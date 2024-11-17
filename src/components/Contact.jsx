import { div } from 'framer-motion/client';
import React, {useState} from 'react'
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaGlobe } from 'react-icons/fa6';
import { fadeIn } from '../utilis/animationVariants';
import { motion } from 'framer-motion';

const Contact = () => {
    // Defining useStates to capture data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false)

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            country,
            message
        }

        // console.log(data)

        if(!data) {
            alert ("please fill all fields")
            return;
        }
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setName('')
        setEmail('')
        setPhone('')
        setCountry('')
        setMessage('')
        // Reset form
    }

  return (
    <div className='bg-heroBg flex items-center justify-center md:py-28 py-6 px-3 md:px-8 ' id='contact'>
        <div className='container mx-auto'>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 '>
                {/* left side */}
                <motion.div variants={fadeIn('right',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className='space-y-8'>
                    <h2 className='text-3xl text-center md:text-4xl font-bold font-Secondary mb-4 text-white'>Schedule Appointment</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>

                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                            <FaUser className='text-primary' />
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>24 Hours Services</h3>
                                <p>Whether it's day or night, we're here for you with round-the-clock availability to meet your needs.</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                            <FaEnvelope className='text-primary' />
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>Expert Therapist</h3>
                                <p>Our team consists of experienced professionals committed to providing the highest quality care.</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                            <FaPhoneAlt className='text-primary' />
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>High Quality Care</h3>
                                <p>We are dedicated to delivering personalized treatment that focuses on your well-being and recovery.</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                            <FaGlobe className='text-primary' />
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                                <p>With years of experience and a reputation for excellence, we are your trusted partner in health worldwide.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* right side */}
                <motion.div  variants={fadeIn('left',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className=' space-y-8 md:p-8 bg-white shadow-xl  p-3 rounded-md'>
                    <h3 className='text-2xl font-bold mb-4'>Book Appointment</h3>
                    <form onSubmit={handleSubmit} className='space-y-8 '>

                        <div className='flex sm:flex-row flex-col gap-4'>
                            <input   value={name}  onChange={e => setName(e.target.value)} type="text" placeholder='Full Name' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow caret-primary' required />
                            <input   value={email}  onChange={e => setEmail(e.target.value)}   type="email" placeholder='Email Address' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow caret-primary'  required/>
                        </div>

                        <div className='flex sm:flex-row flex-col gap-4'>
                            <input  value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow caret-primary' required />
                            <input  value={country}   onChange={e => setCountry(e.target.value)}  type="text" placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow caret-primary' required />
                        </div>

                        <textarea value={message}  onChange={e => setMessage(e.target.value)}   rows='6' placeholder='Write your Message.........' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow caret-primary  resize-none' required></textarea>

                        <button type='submit' className='w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80'>Send Message</button>

                    </form>
                </motion.div>
            </div>
        </div>
        {
            showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 p-4'>
                    <div className='bg-white p-8 rounded-md shadow-lg md:w-1/4 '>
                        <h2 className='text-2xl font-bold mb-4'>Thank you!!</h2>
                        <p >Thank you, <strong className="font-bold"> {name} </strong> , for submiting your query</p>
                        <button onClick={closeModal} className='mt-4 px-4 py-2 bg-primary text-white rounded-md'> Close</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Contact