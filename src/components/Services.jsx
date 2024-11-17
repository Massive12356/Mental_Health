import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import  counselImg from '../assets/service1.webp'
import  counselImg2 from '../assets/service2.webp'
import  counselImg3 from '../assets/service3.webp'
import  counselImg4 from '../assets/service4.webp'
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const Services = () => {
    return (
      <div  id="services"  className="bg-[#f7f8fc]">
        <div className='pt-28 px-4 container mx-auto'>
          <motion.div variants={fadeIn('up',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className='text-center space-y-5'>
            <h2 className='text-2xl  md:text-4xl font-bold font-Secondary text-heroBg'>What Can We Do Together</h2>
            <p className='text-sm text-justify p-3 md:w-2/3 mx-auto md:text-lg'>Every journey to mental wellness is unique, and we are here to walk alongside you. Together, we can identify the challenges you’re facing, create actionable goals, and build strategies that empower you to thrive. Whether it’s enhancing relationships, improving self-confidence, or finding clarity in difficult times, our collaborative approach ensures you’re never alone in your journey toward a better you.</p>
          </motion.div>


          {/* healthcare  services categories */}

          <div className='py-12 md:w-4/5 mx-auto'>

          <Tabs className="md:text-lg">
            <motion.TabList variants={fadeIn('up',0.3)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}}  className=' text-xs md:text-lg  flex flex-wrap justify-between items-center md:gap-8 gap-4 '>
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </motion.TabList>

            <TabPanel >
              <motion.div variants={fadeIn('up',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className="flex flex-col-reverse md:flex-row gap-8 mt-8"> 

              <div className='md:w-1/2 bg-white rounded-lg md:p-10 p-2 font-Secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4 md:text-4xl'>Couple Counseling</h3>
                <p className='mb-8'>At the heart of every strong relationship is understanding, communication, and connection. Our couple counseling sessions provide a safe space for partners to address challenges, foster mutual respect, and strengthen their bond. Whether you're navigating conflicts or seeking to deepen your connection, we’re here to support you in building a healthier, more fulfilling relationship.</p>
                <h4 className=' text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Improved Communication</li>
                  <li>Conflict Resolution Skills</li>
                  <li>Enhanced Emotional Intimacy</li>
                  <li>Understanding Relationships Dynamics</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={counselImg} alt="counselImage" className='w-full h-auto rounded-2xl object-cover' />
              </div>

              </motion.div>
            </TabPanel>

            <TabPanel >
              <motion.div variants={fadeIn('up',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className="flex flex-col md:flex-row gap-8 mt-8"> 

              <div className='md:w-1/2 bg-white rounded-lg md:p-10 p-2 font-Secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4 md:text-4xl'>Parenting Skills</h3>
                <p className='mb-8'>Parenting is a journey filled with challenges and rewards. Our parenting skills programs are designed to empower parents with the tools and strategies needed to nurture confident, emotionally resilient children. Whether you're navigating toddler tantrums or teenage transitions, we provide guidance to help you create a supportive and harmonious family environment.</p>
                <h4 className=' text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Strengthen Parent-Child Relationships</li>
                  <li>Effective Discipline Strategies</li>
                  <li>Understanding Child Development</li>
                  <li>Building Emotional Resilience</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={counselImg2} alt="counselImage" className='w-full h-auto rounded-2xl object-cover' />
              </div>

              </motion.div>
            </TabPanel>

            <TabPanel >
              <motion.div variants={fadeIn('up',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className="flex flex-col md:flex-row gap-8 mt-8"> 

              <div className='md:w-1/2 bg-white rounded-lg md:p-10 p-2 font-Secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4 md:text-4xl'>Feeling Stuck</h3>
                <p className='mb-8'>Do you feel like you’re caught in a cycle of uncertainty, unable to move forward? Feeling stuck can impact your mental well-being, relationships, and overall sense of purpose. Our tailored support sessions help you identify underlying challenges, rediscover your strengths, and create a clear path toward personal growth and fulfillment.</p>
                <h4 className=' text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Clarity and Direction</li>
                  <li>Boosted Confidence</li>
                  <li>Understanding Relationships Dynamics</li>
                  <li>Personal Empowerment</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={counselImg3} alt="counselImage" className='w-full h-auto rounded-2xl object-cover' />
              </div>

              </motion.div>
            </TabPanel>

            <TabPanel >
              <motion.div variants={fadeIn('up',0.2)}  initial='hidden' whileInView={'show'} viewport={{once: false,amount: 0.5}} className="flex flex-col md:flex-row gap-8 mt-8"> 

              <div className='md:w-1/2 bg-white rounded-lg md:p-10 p-2 font-Secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4 md:text-4xl'>Self-Confidence</h3>
                <p className='mb-8'>Self-confidence is the foundation of a fulfilling and empowered life. When you believe in yourself, you can overcome challenges, build meaningful relationships, and achieve your goals. Our programs focus on helping you develop a positive self-image, silence self-doubt, and embrace your unique strengths to live your life with authenticity and assurance.</p>
                <h4 className=' text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Improved Self-Esteem</li>
                  <li>Resilience to Challenges</li>
                  <li>Enhanced Decision-Making</li>
                  <li>Better Relationships</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={counselImg4} alt="counselImage" className='w-full h-auto rounded-2xl object-cover' />
              </div>

              </motion.div>
            </TabPanel>

            
          </Tabs>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;