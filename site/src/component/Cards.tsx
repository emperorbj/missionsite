import Training from '../assets/training.jpg';
import Prayer from '../assets/prayer (1).jpg';
import Outreach from '../assets/outreach (1).jpg';
import 'aos/dist/aos.css'
import { Glow, GlowCapture } from '@codaworks/react-glow'
import { useEffect } from 'react';


const Cards = () => {

    useEffect(() => {
        
    },[])

    return (
        <section className='flex flex-col'>
            <h1 className='text-2xl font-bold text-center mt-[200px] mb-[50px]'> OUR CORE MISSION AND VISION</h1>
            {/* card container */}
            <GlowCapture>
            <div className='flex gap-10 px-[30px] h-[500px]'>
                {/* Each card design */}
                <Glow color='blue'>
                <div 
                    className='flex flex-col glow:text-glow/50 glow:bg-sky-400 bg-white/20 backdrop-blur-xl h-[460px] border-2 rounded-xl shadow-lg'>
                    <div className='h-[260px]' >
                        <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}}  src={Training} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-medium'>Training</h1>
                        <p className='px-[20px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur delectus ea qui nihil 
                            praesentium?</p>
                    </div>
                </div>
                </Glow>

                <Glow color='green'>
                <div 
                    className='flex flex-col  glow:text-glow/50 glow:bg-green-400 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg  border-white border-opacity-30 h-[460px] border-2 rounded-xl shadow-lg'>
                    <div className='h-[260px]'>
                        <img className='h-[100%] w-[100%] rounded-xl ' style={{objectFit:'cover', objectPosition:'center'}}  src={Prayer} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-medium'>Prayers</h1>
                        <p className='px-[20px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur delectus ea qui nihil 
                            praesentium?</p>
                    </div>
                </div>
                </Glow>

                <Glow color='purple'>
                <div 
                    className='flex flex-col glow:text-glow/50 glow:bg-pink-400 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg  border-white border-opacity-30 h-[460px] border-2 rounded-xl shadow-lg'>
                    <div className='h-[260px]'>
                        <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}} src={Outreach} alt='' />
                    </div>
                    <div>
                        <h1 className='text-center text-2xl font-medium'>Outreach</h1>
                        <p className='px-[20px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur delectus ea qui nihil 
                            praesentium?</p>
                    </div>
                </div>
                </Glow>
            </div>
            </GlowCapture>
            
        </section>
    )
}

export default Cards
