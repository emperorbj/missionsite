import Training from '../assets/training.jpg';
import Prayer from '../assets/prayer (1).jpg';
import Outreach from '../assets/outreach (1).jpg';
import { motion } from 'framer-motion';




const Cards = () => {


    return (
        <section
            className='flex flex-col'>
            <div className='py-20'>
                <motion.h1
                    className='text-2xl font-bold text-center font-myWorkSans'>
                    OUR CORE<span className='text-sky-400'> MISSION</span> AND<span className='text-sky-400'>VISION</span>
                </motion.h1>
            </div>
            {/* card container */}

            {/* <div className='flex-col gap-5 h-[1000px] md:flex md:flex-row md:gap-10 px-[30px] md:h-[500px]'> */}
            {/* Each card design */}
            <div
                className='mx-1 md:mx-6 h-[1600px] px-2 gap-2 md:px-2  grid-cols-1 grid md:grid-cols-2 
            lg:grid-cols-3 lg:gap-6 md:gap-5 md:h-[900px] lg:h-[500px]'>

                <motion.div
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 3px rgb(255,255,255)',
                        transition: {
                            duration: 0.3,
                            repeat: Infinity, // Replaces yoyo
                            repeatType: "reverse"
                        }
                    }}

                    className='relative flex flex-col h-[260px] 
                    rounded-xl bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg'>

                    <div className='px-3 py-3 absolute -top-6 left-20
                        rounded-md bg-sky-300 '>
                        <h1 className='text-center text-xl font-bold text-white'>Training</h1>
                    </div>
                    <div className='h-[260px]' >
                        <img className='h-[100%] w-[100%] rounded-xl' style={{ objectFit: 'cover', objectPosition: 'center' }} src={Training} alt="" />
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 3px rgb(255,255,255)',
                        transition: {
                            duration: 0.3,
                            repeat: Infinity, // Replaces yoyo
                            repeatType: "reverse"
                        }
                    }}

                    className='relative flex flex-col h-[260px] 
                    rounded-xl bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg z-10'>

                    <div className='px-3 py-3 absolute -top-6 left-20
                        rounded-md bg-green-300 '>
                        <h1 className='text-center text-xl font-bold text-white'>Outreach</h1>
                    </div>
                    <div className='h-[260px]' >
                        <img className='h-[100%] w-[100%] rounded-xl'
                            style={{ objectFit: 'cover', objectPosition: 'center' }} src={Outreach} alt="" />
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0px 0px 3px rgb(255,255,255)',
                        transition: {
                            duration: 0.3,
                            repeat: Infinity, // Replaces yoyo
                            repeatType: "reverse"
                        }
                    }}

                    className='relative flex flex-col h-[260px] 
                    rounded-xl bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg z-10'>

                    <div className='px-3 py-3 absolute -top-6 left-20
                        rounded-md bg-purple-300 '>
                        <h1 className='text-center text-xl font-bold text-white'>Prayer</h1>
                    </div>
                    <div className='h-[260px]' >
                        <img className='h-[100%] w-[100%] rounded-xl'
                            style={{ objectFit: 'cover', objectPosition: 'center' }} src={Prayer} alt="" />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Cards
