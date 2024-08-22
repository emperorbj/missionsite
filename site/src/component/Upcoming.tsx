
import Program2 from '../assets/program2.jpg'
import Program3 from '../assets/program3.jpg'
import Program4 from '../assets/program4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Upcoming = () => {

    useEffect(() => {
        AOS.init();
    },[])


    return (
        <>
        <div className='flex-col h-[700px] mx-4 md:flex md:flex-row lg:flex-row md:h-[500px] md:mx-1 lg:mx-[40px] my-[60px]'>
            <div className="md:w-[60%] lg:w-[50%] rounded-md md:rounded-md lg:rounded-tl-[50px] lg:rounded-br-[50px] shadow-lg " data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
                <img className='h-[100%] w-[100%] rounded-md md:rounded-md object-cover object-center lg:rounded-tl-[50px] lg:rounded-br-[50px]' src={Program2} alt="" />
            </div>
            <div className='md:w-[40%] lg:w-[50%]' data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-3xl md:text-2xl lg:text-4xl font-bold text-center pt-[50px] my-[10px]'>Program title</h1>
                    <p className='text-xl px-5 md:text-lg lg:text-xl md:px-3 lg:px-[50px] mb-[40px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatur 
                    </p>
                    <button className='bg-yellow-400 border border-black hover:bg-slate-800
                    hover:text-yellow-400 font-semibold text-black  
                    rounded-[7px] shadow-md py-[15px] px-[20px] text-xl w-[55%] md:w-[60%] lg:w-[30%] ml-[50px]'>
                        Register here
                    </button>
                </div>
            </div>
        </div>
        <div className='flex-col mx-4 h-[700px] md:flex lg:flex md:flex-row-reverse md:h-[500px] md:mx-1 lg:mx-[40px] my-[60px]'>
            <div className="md:w-[60%] lg:w-[50%] rounded-md md:rounded-md lg:rounded-tl-[50px] lg:rounded-br-[50px] shadow-lg" data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
                <img className='h-[100%] w-[100%] object-cover object-center rounded-md md:rounded-md ;g:rounded-tl-[50px] lg:rounded-br-[50px]' src={Program3} alt="" />
            </div>
            <div className='md:w-[40%] lg:w-[50%]' data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
            <div className='h-[100%] flex flex-col'>
                    <h1 className='text-3xl md:text-2xl lg:text-4xl font-bold text-center pt-[50px] my-[10px]'>Program title</h1>
                    <p className='text-xl px-5 md:text-lg lg:text-xl md:px-3 lg:px-[50px] mb-[40px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatu
                    </p>
                    <button className='bg-yellow-400 border border-black 
                    hover:bg-slate-800 hover:text-yellow-400 font-semibold 
                    text-black  rounded-[7px] shadow-md py-[15px] 
                    px-[20px] text-xl w-[55%] md:w-[60%] lg:w-[30%] ml-[50px]'>
                        Register here
                    </button>
                </div>
            </div>
        </div>
        <div className='flex-col mx-4 h-[700px] md:flex md:flex-row lg:flex md:h-[500px] md:mx-1 lg:mx-[40px] my-[60px]'>
            <div className="md:w-[60%] lg:w-[50%] rounded-md md:rounded-md lg:rounded-tl-[50px] lg:rounded-br-[50px] shadow-lg " data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
                <img className='h-[100%] w-[100%] object-cover object-center rounded-md md:rounded-md ;g:rounded-tl-[50px] lg:rounded-br-[50px]' src={Program4} alt="" />
            </div>
            <div className='md:w-[40%] lg:w-[50%]' data-aos-delay="400"  data-aos-duration="400" data-aos-offset="250"  data-aos='zoom-in'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-3xl md:text-2xl lg:text-4xl font-bold text-center pt-[50px] my-[10px]'>Program title</h1>
                    <p className='text-xl px-5 md:text-lg lg:text-xl md:px-3 lg:px-[50px] mb-[40px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatur 
                    </p>
                    <button className='bg-yellow-400 border border-black 
                    hover:bg-slate-800 hover:text-yellow-400  
                    rounded-[7px] shadow-md py-[15px] font-semibold text-black 
                    px-[20px] text-xl w-[55%] md:w-[60%] lg:w-[30%] ml-[50px]'>
                        Register here
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Upcoming
