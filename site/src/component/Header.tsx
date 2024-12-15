
import video from '../assets/video (1).mp4'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence,Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'


const MotionButton = motion.create(Button);

const buttonVariant: Variants = {
    hover: {
        scale: 1.1,
        boxShadow: '0px 0px 3px rgb(255,255,255)',
        transition: {
            duration: 0.3,
            repeat: Infinity, // Replaces yoyo
            repeatType: "reverse"
        }

    }
}

const Header = () => {

    return (
        <section className='min-h-screen bg-gradient-to-l from-slate-200 to-green-200 w-full'>
            {/* <Navbar /> */}
            <div className=' h-[600px] px-3 md:px-14 gap-[80px] md:gap-0 md:justify-between 
            flex items-center  
            flex-col-reverse md:flex-row-reverse'>
                <div className='md:h-[440px] shadow-lg rounded-lg'>
                    <video className='h-full w-full rounded-md shadow-lg md:rounded-tl-3xl 
                    md:rounded-br-3xl object-cover' src={video} autoPlay muted loop />
                </div>

                <div className='flex items-center justify-center'>
                    <div className=''>
                        <motion.div
                            initial={{ y: -250 }}
                            animate={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                            <AnimatePresence>
                                <>
                                    <h1 className='text-3xl md:text-5xl font-bold'>Welcome to Our Site</h1>
                                    <p className='mt-4 text-xl'>Your Success Begins Here</p>
                                </>
                            </AnimatePresence>

                        </motion.div>


                        <motion.div
                            initial={{ y: '100vw' }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1.0 }}
                            className='flex items-center justify-center md:justify-start'>
                            <Link to="/contact">
                                <MotionButton className='px-10 py-5'
                                    variants={buttonVariant}
                                    whileHover="hover"
                                >
                                    Join us
                                </MotionButton>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
