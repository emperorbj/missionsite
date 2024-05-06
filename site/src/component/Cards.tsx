import React from 'react';

const Cards = () => {
    return (
        <section className='flex flex-col bg-blue-600'>
            <h1 className='text-2xl font-bold text-center my-[20px]'> OUR CORE MISSION AND VISION</h1>
            {/* card container */}
            <div className='bg-green-400 flex gap-10 px-[30px] pb-[10px] h-[500px]'>
                {/* Each card design */}
                <div className='flex flex-col bg-orange-300 h-[460px]'>
                    <div>
                        <img className='bg-yellow-400 h-[260px]' src="" alt="card-image" />
                    </div>
                    <div>
                        <h1>Training</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur delectus ea qui nihil 
                            praesentium?</p>
                    </div>
                </div>

                <div className='bg-red-300 h-[460px]'>
                    <div>
                        <img className='bg-yellow-400 h-[260px]' src="" alt="card-image" />
                    </div>
                    <div>
                        <h1>Training</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Corrupti labore voluptatem voluptatum adipisci tenetur
                            placeat veniam iusto ducimus repellat blanditiis eveniet, 
                            mollitia error voluptatibus aspernatur delectus ea qui nihil 
                            praesentium?</p>
                    </div>
                </div>

                <div className='bg-purple-500 h-[460px]'>
                    <div>
                        <img className='bg-yellow-400 h-[260px]' src="" alt="card-image" />
                    </div>
                    <div>
                        <h1>Training</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
