
import Program2 from '../assets/program2.jpg'
import Program3 from '../assets/program3.jpg'
import Program4 from '../assets/program4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import {motion,Variants} from 'framer-motion'
import {Button} from '@/components/ui/button'

const MotionButton = motion.create(Button);

const buttonVariant:Variants = {
    hover: {
        scale: 1.1,
        boxShadow:'0px 0px 3px rgb(255,255,255)',
        transition: {
            duration: 0.3,
            repeat: Infinity, // Replaces yoyo
            repeatType: "reverse"
        }

    }
}

const Upcoming = () => {

    useEffect(() => {
        AOS.init();
    },[])


    return (
        <>
        <div className='flex-col h-[700px] mx-4 md:flex md:flex-row lg:flex-row 
        md:h-[400px] md:mx-1 lg:mx-[40px] my-[60px]'>
            <div className="md:w-[60%] lg:w-[40%] rounded-md md:rounded-md lg:rounded-md 
            shadow-lg " data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
                <img className='h-[100%] w-[100%] rounded-md md:rounded-md object-cover 
                object-center lg:rounded-md' src={Program2} alt="" />
            </div>
            <div className='md:w-[40%] lg:w-[50%] relative' data-aos-delay="400"  data-aos-duration="400" 
            data-aos-offset="250"  data-aos='zoom-in'>
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu 
                            overflow-hidden blur-3xl 
                            sm:top-[-20rem]"
                        aria-hidden="true">

                        <div
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none 
                        -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr 
                        from-purple-500 to-sky-500 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-3xl md:text-2xl lg:text-3xl font-bold 
                    text-center pt-[50px] my-[10px] font-myPoppins text-sky-400'>Program title</h1>
                    <p className='text-xl px-5 md:text-lg lg:text-xl md:px-3 
                    font-myWorkSans lg:px-[50px] mb-[40px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatur 
                    </p>
                    <div className='flex items-center justify-center'> 
                        <MotionButton className='px-10 py-5'
                        variants={buttonVariant}
                        whileHover="hover"
                        >
                            Join us
                        </MotionButton>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex-col mx-4 h-[700px] md:flex lg:flex md:flex-row-reverse md:h-[400px] md:mx-1 
        lg:mx-[40px] my-[60px]'>
            <div className="md:w-[60%] lg:w-[40%] rounded-md md:rounded-md lg:rounded-md 
            shadow-lg" data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
                <img className='h-[100%] w-[100%] object-cover object-center rounded-md md:rounded-md lg:rounded-md' src={Program3} alt="" />
            </div>
            <div className='md:w-[40%] lg:w-[50%] relative' data-aos-delay="400"  
            data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu 
                            overflow-hidden blur-3xl 
                            sm:top-[-20rem]"
                        aria-hidden="true">

                        <div
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none 
                        -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr 
                        from-sky-600 to-purple-600 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
            <div className='h-[100%] flex flex-col'>
                    <h1 className='text-3xl md:text-2xl lg:text-3xl font-bold 
                    text-center pt-[50px] my-[10px] text-sky-400 font-myPoppins'>Program title</h1>
                    <p className='text-xl px-5 md:text-lg lg:text-xl md:px-3 
                    lg:px-[50px] mb-[40px] font-myWorkSans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatu
                    </p>
                    <div className='flex items-center justify-center'> 
                        <MotionButton className='px-10 py-5'
                        variants={buttonVariant}
                        whileHover="hover"
                        >
                            Join us
                        </MotionButton>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex-col mx-4 h-[700px] md:flex md:flex-row lg:flex md:h-[400px] md:mx-1 lg:mx-[40px] my-[60px]'>
            <div className="md:w-[60%] lg:w-[40%] rounded-md md:rounded-md 
            lg:rounded-md shadow-lg " data-aos-delay="400"  data-aos-duration="400" 
            data-aos-offset="250"  data-aos='zoom-in'>
                <img className='h-[100%] w-[100%] object-cover object-center rounded-md md:rounded-md ;
                lg:rounded-md' src={Program4} alt="" />
            </div>
            <div className='md:w-[40%] lg:w-[50%] relative' data-aos-delay="400"  data-aos-duration="400" 
            data-aos-offset="250"  data-aos='zoom-in'>
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu 
                            overflow-hidden blur-3xl 
                            sm:top-[-20rem]"
                        aria-hidden="true">

                        <div
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none 
                        -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr 
                        from-green-600 to-green-400 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-3xl md:text-2xl lg:text-4xl font-bold 
                    text-center pt-[50px] my-[10px] font-myPoppins text-sky-400'>Program title</h1>
                    <p className='text-xl px-5 md:text-lg lg:text-xl md:px-3 
                    lg:px-[50px] mb-[40px] font-myWorkSans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatur 
                    </p>
                    <div className='flex items-center justify-center'> 
                        <MotionButton className='px-10 py-5'
                        variants={buttonVariant}
                        whileHover="hover"
                        >
                            Join us
                        </MotionButton>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Upcoming
