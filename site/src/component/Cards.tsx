import Training from '../assets/training.jpg';
import Prayer from '../assets/prayer.jpg';
import Outreach from '../assets/outreach.jpg';

const Cards = () => {
    return (
        <section className='flex flex-col'>
            <h1 className='text-2xl font-bold text-center my-[20px]'> OUR CORE MISSION AND VISION</h1>
            {/* card container */}
            <div className='flex gap-10 px-[30px] h-[500px]'>
                {/* Each card design */}
                <div className='flex flex-col h-[460px] border-2 bg-slate-100 rounded-xl shadow-lg' style={{transition:'1s',}}>
                    <div className='h-[260px]' >
                        <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}}  src={Training} alt="card-image" />
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

                <div className='flex flex-col h-[460px] border-2 bg-slate-100 rounded-xl shadow-lg' style={{transition:'1s',}}>
                    <div className='h-[260px]'>
                        <img className='h-[100%] w-[100%] rounded-xl ' style={{objectFit:'cover', objectPosition:'center'}}  src={Prayer} alt="card-image" />
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

                <div className='flex flex-col h-[460px] border-2 bg-slate-100 rounded-xl shadow-lg' style={{transition:'1s',}}>
                    <div className='h-[260px]'>
                        <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center'}} src={Outreach} alt="card-image" />
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
