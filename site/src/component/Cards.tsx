import Training from '../assets/training.jpg';
import Prayer from '../assets/prayer (1).jpg';
import Outreach from '../assets/outreach (1).jpg';


const Cards = () => {


    return (
        <section className='flex flex-col'>
            <h1 className='text-2xl font-bold text-center mt-[200px] mb-[50px]'> OUR CORE MISSION AND VISION</h1>
            {/* card container */}
        
            {/* <div className='flex-col gap-5 h-[1000px] md:flex md:flex-row md:gap-10 px-[30px] md:h-[500px]'> */}
                {/* Each card design */}
            <div className=' h-[1600px] px-4 gap-2 md:px-2  grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-5 md:h-[900px] lg:h-[500px]'>
                <div 
                    className='flex flex-col bg-white/20 backdrop-blur-xl h-[460px] border-2 rounded-xl shadow-lg'>
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
        

        
                <div 
                    className='flex flex-col bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg  border-white border-opacity-30 h-[460px] border-2 rounded-xl shadow-lg'>
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
        

        
                <div 
                    className='flex flex-col bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg  border-white border-opacity-30 h-[460px] border-2 rounded-xl shadow-lg'>
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
        
            </div>
        </section>
    )
}

export default Cards
