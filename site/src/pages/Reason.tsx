import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"



const Reason = () => {
    return (
        <div>
            <Navbar />
            {/* <div className="mt-[70px] ml-[90px] w-[85%]  bg-purple-600 h-[70vh]">
            
            </div> */}
            <div className='h-[630px]  rounded-[10px] shadow-md mt-[70px] relative ml-[35px] w-[95%]'>
                <div className='w-full bg-slate-500 rounded-[10px]  absolute top-0 left-0 h-full'>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} src="" alt="" />
                </div>
                <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                    <div className='text-center text-white'>
                        <p className='mt-4 text-xl'>Your Success Begins Here</p>
                        <button className='text-[20px] font-bold mt-[30px] rounded-[50px] py-[10px] px-[40px] border-black border bg-yellow-400 hover:bg-slate-800 hover:text-yellow-400 '>Join us</button>
                    </div>
                </div>
            </div>

            <section className="mx-[45px] bg-slate-100 rounded-[15px] font-myFont mt-[65px]  h-[720px]">
                <div className=" h-[15%] pt-[20px]">
                    <h1 className="font-playWrite text-2xl font-bold text-center"> Recent events</h1>
                </div>
                <div className=" flex h-[85%]">
                    {/* big top story right side */}
                    <div className=" h-[100%] w-[50%] pr-5">
                        {/* image container */}
                        <div className="h-[57%]">
                            <img className="h-[100%] rounded-[4px] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/06/june24-blog-cover-1080x675.jpg" alt="" />
                        </div>
                        {/* description container */}
                        <div className="h-[43%] pl-[10px] flex flex-col gap-3">
                            <h1 className="text-center mt-5 font-bold text-2xl">
                                How to Talk with Your Teens about Sex and Love from a Biblical Worldview:
                                Interview with Sean McDowell
                            </h1>
                            <div className="flex gap-5">
                                <p>By Juwon Adeoba</p>
                                <p>7th{" "}July,2024</p>
                            </div>
                            <p>
                                Over the last several years, I’ve spoken on the subject of apologetics to many groups of parents at churches and conferences.
                            </p>
                            <a className="hover:text-white font-bold" href="https://crossexamined.org/how-to-talk-with-your-teens-about-sex-and-love-from-a-biblical-worldview-interview-with-sean-mcdowell/">
                                <button className="px-[30px] mb-[20px] rounded-[50px] border border-black hover:bg-slate-800 hover:text-yellow-400 text-black py-[10px] bg-yellow-400">
                                    watch here
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* top stories container */}
                    <div className="w-[50%] flex flex-col px-[15px] gap-2 py-[4px]  justify-center h-[100%]">
                        <h1 className="bg-slate-100 h-[10%] text-2xl font-bold"> OUR TOP STORIES</h1>
                        <div className=" flex h-[30%]">
                            {/* top stories left and right divs */}
                            <div className="w-[65%] flex flex-col justify-center gap-3 px-[15px] h-[100%]">
                                <a className="hover:text-sky-700" href="https://crossexamined.org/a-compassionate-response-to-alistair-beggs-bad-advice-on-lgbt-weddings/">
                                    <h2 className="text-xl font-bold">
                                        A Compassionate Response to Alistair Begg’s ‘Bad Advice’ on LGBT Weddings
                                    </h2>
                                </a>
                                <div className="flex gap-2">
                                    <p>By Juwon Adeoba</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            {/* image-right-side-top-stories-container */}
                            <div className="w-[35%] h-[100%]">
                                <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/06/CE-BLOG-COVER-JUNE-24-30-1080x675.jpg" alt="" />
                            </div>
                        </div>
                        <div className=" flex h-[30%]">
                            <div className="w-[65%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                                <a className="hover:text-sky-700" href="https://crossexamined.org/why-the-best-explanation-can-be-a-miracle/">
                                    <h2 className="text-xl font-bold">
                                        Why the Best Explanation Can Be a Miracle
                                    </h2>
                                </a>
                                <div className="flex gap-2">
                                    <p>By Juwon Adeoba</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            <div className="w-[35%] h-[100%]">
                                <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/06/CE-BLOG-COVER-JUNE-17-23-1080x675.jpg" alt="" />
                            </div>
                        </div>
                        <div className=" flex h-[30%]">
                            <div className="w-[65%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                                <a className="hover:text-sky-700" href="https://crossexamined.org/what-philosophy-is-and-why-you-cant-avoid-it/">
                                    <h2 className="text-xl font-bold">
                                        Why the Best Explanation Can Be a Miracle
                                    </h2>
                                </a>
                                <div className="flex gap-2">
                                    <p>By Juwon Adeoba</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            <div className="w-[35%] h-[100%]">
                                <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/05/CE-BLOG-COVER-What-Philosophy-Is-1080x675.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-[620px] w-full mt-[50px] flex items-center justify-center bg-slate-500">
                <div className="h-[98%] flex gap-10 w-[90%] bg-red-500">
                    <div className="h-[100%] w-[33%] bg-blue-500">
                        <div className=" h-[45%] flex items-center justify-center bg-purple-500">
                            <div className="w-[280px] h-[280px] rounded-full bg-green-600">

                            </div>
                        </div>
                    </div>
                    <div className="h-[100%] w-[33%] bg-blue-500">
                        <div className=" h-[45%] flex items-center justify-center bg-purple-500">
                            <div className="w-[280px] h-[280px] rounded-full bg-green-600">

                            </div>
                        </div>
                    </div>
                    <div className="h-[100%] w-[33%] bg-blue-500">
                        <div className=" h-[45%] flex items-center justify-center bg-purple-500">
                            <div className="w-[280px] h-[280px] rounded-full bg-green-600">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-[40px]">
                <Footer/>
            </div>
        </div>
    )
}

export default Reason
