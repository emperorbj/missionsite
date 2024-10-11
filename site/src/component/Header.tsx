//import HeaderPix from '../assets/header1.jpg';
import Navbar from './Navbar'
import video from '../assets/video (1).mp4'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'


const MotionButton = motion.create(Button);

const buttonVariant = {
    hover: {
        //scale: [1.1,1,1.1,1,1.1,1,1.1,1,1.1,],
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
    const [showTitle, setShowTitle] = useState(true)

    setTimeout(() => {
        setShowTitle(false)
    }, 5000)
    return (
        <div className='h-[650px] relative w-full'>

            <div className=' h-full w-full absolute top-0 left-0 md:h-full'>
                <video style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={video} autoPlay muted loop />
            </div>

            <Navbar />

            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <div className='text-center text-white'>
                    <motion.div
                        initial={{ y: -250 }}
                        animate={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                        <AnimatePresence>
                            {showTitle && (
                                <>
                                    <motion.h1
                                        exit={{ y: -400 }}
                                        className='text-5xl font-bold'>Welcome to Our Site</motion.h1>
                                    <motion.p
                                        exit={{ y: -400 }}
                                        className='mt-4 text-xl'>Your Success Begins Here</motion.p>
                                </>)}
                        </AnimatePresence>

                    </motion.div>


                    <motion.div
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1.0 }}>
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
    )
}

export default Header
