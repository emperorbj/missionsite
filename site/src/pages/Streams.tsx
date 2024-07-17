import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"
import ReactPlayer from 'react-player'

const Streams = () => {
    return (
        <>
            <Navbar/>
            <section className="mx-[45px] font-myFont mt-[65px]  h-[520px]">
                <div className=" h-[15%] pt-[20px]">
                    <h1 className="font-playWrite text-2xl font-bold text-center"> Our Video streams</h1>
                </div>
                <div className=" flex h-[85%]">
                    {/* big top story right side */}
                    <div className=" h-[100%] w-[50%] pr-5">
                        {/* image container */}
                        <div className="h-[100%]">
                            <ReactPlayer className="object-cover" width={600} height={430}  url="https://www.youtube.com/watch?v=S7WBEJJlYWU"/>
                        </div>
                        {/* description container */}
                    </div>
                    {/* top stories container */}
                    <div className="w-[50%] flex flex-col px-[15px] gap-2 py-[4px]  justify-center h-[100%]">
                        <h1 className="bg-white h-[10%] text-2xl font-bold"> Our Top Videos</h1>
                        <div className=" flex h-[45%]">
                            {/* top stories left and right divs */}
                            <div className="w-[65%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                                    <h2 className="text-xl font-bold">
                                        Errors in the building
                                    </h2>
                                <div className="flex gap-2">
                                    <p>@CMT</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            {/* image-right-side-top-stories-container */}
                            <div className="w-[50%] h-[100%]">
                                <ReactPlayer className="object-cover" width={300} height={190}  url="https://www.youtube.com/watch?v=DB18or8bJ10" />
                            </div>
                        </div>
                        <div className=" flex h-[45%]">
                            <div className="w-[65%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                                    <h2 className="text-xl font-bold">
                                        Answering the Stephen Hawkins
                                    </h2>
                                <div className="flex gap-2">
                                    <p>@CMT</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            <div className="w-[50%] h-[100%]">
                                <ReactPlayer className="object-cover" width={300} height={190}  url="https://www.youtube.com/watch?v=1tVO0-zYAvE" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" font-myFont">
                    <h1 className='text-center font-playWrite text-3xl font-bold mt-40'>CHECK OUT OUR RECENT VIDEOS</h1>
                    <div className="grid grid-cols-3 gap-10 p-10">
                        <div className=" w-[470px] border-[2px] shadow-md hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <ReactPlayer className='object-cover' width={450} height={350}  url="https://www.youtube.com/watch?v=ozQ768oUQ4c"/>
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>How do i introduce apologetics<br/>
                                to my church
                                </h1>
                                
                            </div>
                        </div>
                        <div className=" w-[470px] border-[2px] shadow-md hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <ReactPlayer className='object-cover' width={450} height={350}  url="https://www.youtube.com/watch?v=VShB2Y6A5Kc"/>
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Why would God make me a lesbian</h1>
                            </div>
                        </div>
                        <div className=" w-[470px] border-[2px] shadow-md hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <ReactPlayer className='object-cover' width={450} height={350}  url="https://www.youtube.com/watch?v=vEwB7GrvdXI" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Why is the evil if God exists?</h1>
                            </div>
                        </div>
                        <div className=" w-[470px] border-[2px] shadow-md hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <ReactPlayer className='object-cover' width={450} height={350}  url="https://www.youtube.com/watch?v=6Jd6aHz9BrQ" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Is meaning possible without God?</h1>
                            </div>
                        </div>
                        <div className=" w-[470px] border-[2px] shadow-md hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <ReactPlayer className='object-cover' width={450} height={350}  url="https://www.youtube.com/watch?v=u9ELpG9T0h0" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>William craig on Evolution</h1>
                            </div>
                        </div>
                        <div className=" w-[470px] border-[2px] shadow-md hover:bg-slate-50 rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <ReactPlayer className='object-cover' width={450} height={350} url="https://www.youtube.com/watch?v=BGMwWQO_NzY" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
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
