import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"
import ReactPlayer from 'react-player'

const Streams = () => {
    return (
        <>
            <Navbar/>
            <section className="mx-[0px] md:mx-[45px] font-myFont mt-[65px] h-[1599px] md:h-[1000px] lg:h-[520px]">
                <div className="md:h-[10%] lg:h-[15%] pt-[20px]">
                    <h1 className="font-myPoppins text-2xl my-4 font-bold text-center"> Our Video streams</h1>
                </div>
                <div className="h-[30%] flex-col md:flex-col lg:flex lg:flex-row
                md:h-[45%] lg:h-[85%]">
                    {/* big top story right side */}
                    <div className="w-full h-[100%] md:h-[100%] md:w-full 
                    lg:w-[50%] md:pr-5">
                        {/* image container */}
                        <div className="h-[100%]">
                            <ReactPlayer className="object-cover"
                            width="100%" height="100%"  url="https://www.youtube.com/watch?v=S7WBEJJlYWU"/>
                        </div>
                        {/* description container */}
                    </div>
                    {/* top stories container */}
                    <div className="w-full md:w-full lg:w-[50%] md:flex flex flex-col 
                    px-[15px] gap-2 py-1 md:py-[4px]  
                    justify-center h-[1050px] md:h-[100%]">
                        <h1 className="bg-white h-[5%] md:h-[10%] text-2xl font-bold mt-1 md:mt-4"> Our Top Videos</h1>
                        <div className="flex flex-col h-[100%] md:flex md:flex-row md:h-[45%]">
                            {/* top stories left and right divs */}
                            <div className="md:mt-16 lg:mt-0 w-[100%] md:w-[50%] lg:w-[55%] 
                            h-[30%] md:h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                                    <h2 className="text-xl font-bold">
                                        Errors in the building
                                    </h2>
                                <div className="flex gap-2">
                                    <p>@CMT</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            {/* image-right-side-top-stories-container */}
                            <div className="w-[100%] h-[70%] md:w-[50%] md:h-[250px] lg:w-[45%] lg:h-[100%]">
                                <ReactPlayer className="object-cover" width="100%" height="100%"  
                                url="https://www.youtube.com/watch?v=DB18or8bJ10"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex  h-[100%] md:flex-row md:h-[45%]">
                            <div className="w-[100%] md:mt-16 lg:mt-0 md:w-[50%] lg:w-[55%] 
                            h-[30%] md:h-[100%] 
                            flex flex-col justify-center gap-3 px-[15px]">
                                    <h2 className="text-xl font-bold">
                                        Answering the Stephen Hawkins
                                    </h2>
                                <div className="flex gap-2">
                                    <p>@CMT</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            <div className="w-[100%] h-[70%] md:w-[50%] md:h-[250px] lg:w-[45%] lg:h-[100%]">
                                <ReactPlayer className="object-cover"
                                width="100%" height="100%"  url="https://www.youtube.com/watch?v=1tVO0-zYAvE" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-2">
                <div className=" font-myFont">
                    <h1 className='text-center font-myWorkSans text-3xl font-bold mt-5 md:mt-40'>CHECK OUT OUR RECENT VIDEOS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 
                    lg:gap-10 p-5 lg:p-10">
                        <div className=" w-[323px] sm:w-[570px] md:w-[360px] lg:w-[470px] border-[2px] shadow-md 
                        hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[380px]">
                                <ReactPlayer className='object-cover' 
                                width="100%" height="100%"  url="https://www.youtube.com/watch?v=6Jd6aHz9BrQ"
                                />
                            </div>
                            <div className="w-[100%] h-[70px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Is meaning possible without God?</h1>
                            </div>
                        </div>
                        <div className="w-[323px] sm:w-[570px] md:w-[360px] lg:w-[470px] border-[2px] shadow-md 
                        hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[380px]">
                                <ReactPlayer className='object-cover' width="100%" height="100%"  
                                url="https://www.youtube.com/watch?v=u9ELpG9T0h0" />
                            </div>
                            <div className="w-[100%] h-[70px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>William craig on Evolution</h1>
                            </div>
                        </div>
                        <div className="w-[323px] sm:w-[570px] md:w-[360px] lg:w-[470px] border-[2px] shadow-md 
                        hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[380px]">
                                <ReactPlayer className='object-cover' width="100%" height="100%" 
                                url="https://www.youtube.com/watch?v=BGMwWQO_NzY" />
                            </div>
                            <div className="w-[100%] h-[70px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Cause and Effect</h1>
                            </div>
                        </div>
                        <div className="w-[323px] sm:w-[570px] md:w-[360px] lg:w-[470px] border-[2px] shadow-md 
                        hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[380px]">
                                <ReactPlayer className='object-cover' width="100%" height="100%"  
                                url="https://www.youtube.com/watch?v=6Jd6aHz9BrQ" />
                            </div>
                            <div className="w-[100%] h-[70px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Is meaning possible without God?</h1>
                            </div>
                        </div>
                        <div className="w-[323px] sm:w-[570px] md:w-[360px] lg:w-[470px] border-[2px] shadow-md 
                        hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[380px]">
                                <ReactPlayer className='object-cover' width="100%" height="100%" 
                                url="https://www.youtube.com/watch?v=u9ELpG9T0h0" />
                            </div>
                            <div className="w-[100%] h-[70px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>William craig on Evolution</h1>
                            </div>
                        </div>
                        <div className="w-[323px] sm:w-[570px] md:w-[360px] lg:w-[470px] border-[2px] shadow-md 
                        hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[380px]">
                                <ReactPlayer className='object-cover' width="100%" height="100%" 
                                url="https://www.youtube.com/watch?v=BGMwWQO_NzY" />
                            </div>
                            <div className="w-[100%] h-[70px] flex flex-col gap-1 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Cause and Effect</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Streams
