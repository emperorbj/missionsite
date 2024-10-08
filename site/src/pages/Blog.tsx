import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"
import NewsLetters from "@/component/NewsLetters"


const Blog = () => {
    return (
        <>
            <Navbar />
            {/* top section */}
            <section className="md:mx-[10px] lg:mx-[45px] font-myFont mt-[65px] md:h-[1600px] 
            lg:h-[720px]">
                <div className=" h-[15%] mb-5 md:mb-0 pt-[20px]">
                    <h1 className="font-playWrite text-2xl font-bold text-center"> Our Blogs</h1>
                </div>
                <div className="md:flex md:flex-col lg:flex lg:flex-row md:h-[100%] lg:h-[85%]">
                    {/* big top story left side */}
                    <div className=" h-[100%] mb-4 md:mb-0 px-5  md:px-5 md:w-full lg:w-[50%] lg:pr-5">
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
                                Although none of my talks deal with the topic of sexuality, I can ...
                            </p>
                            <a className="hover:text-white font-bold" href="https://crossexamined.org/how-to-talk-with-your-teens-about-sex-and-love-from-a-biblical-worldview-interview-with-sean-mcdowell/">
                                <button className="px-[30px] rounded-[5px] py-[10px] bg-sky-500">
                                    Read more
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* top stories container */}
                    <div className="md:w-full lg:w-[50%] flex flex-col px-5 md:px-[20px] lg:px-[15px] 
                    gap-3 md:gap-2 py-[4px]  
                    justify-center h-[100%]">
                        <h1 className="bg-white h-[10%] text-2xl my-3 md:my-0 font-bold"> OUR TOP STORIES</h1>
                        <div className="flex h-[30%]">
                            {/* top stories left and right divs */}
                            <div className="w-[50%] md:w-[65%] flex flex-col justify-center md:gap-2 lg:gap-3 
                            md:px-0 lg:px-[15px] h-[100%]">
                                <a className="hover:text-sky-700" href="https://crossexamined.org/a-compassionate-response-to-alistair-beggs-bad-advice-on-lgbt-weddings/">
                                    <h2 className="text-xl font-bold md:px-5 lg:px-0">
                                        A Compassionate Response to Alistair Begg’s ‘Bad Advice’ on LGBT Weddings
                                    </h2>
                                </a>
                                <div className="flex gap-2">
                                    <p>By Juwon Adeoba</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            {/* image-right-side-top-stories-container */}
                            <div className="w-[50%] md:w-[35%] h-[100%]">
                                <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/06/CE-BLOG-COVER-JUNE-24-30-1080x675.jpg" alt="" />
                            </div>
                        </div>
                        <div className=" flex h-[30%]">
                            <div className="w-[50%] md:w-[65%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                                <a className="hover:text-sky-700" href="https://crossexamined.org/why-the-best-explanation-can-be-a-miracle/">
                                    <h2 className="text-xl font-bold md:px-5 lg:px-0">
                                        Why the Best Explanation Can Be a Miracle
                                    </h2>
                                </a>
                                <div className="flex gap-2">
                                    <p>By Juwon Adeoba</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            <div className="w-[50%] md:w-[35%] h-[100%]">
                                <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/06/CE-BLOG-COVER-JUNE-17-23-1080x675.jpg" alt="" />
                            </div>
                        </div>
                        <div className=" flex h-[30%]">
                            <div className="w-[50%] md:w-[65%] h-[100%] flex flex-col justify-center gap-3 px-[15px]">
                                <a className="hover:text-sky-700" href="https://crossexamined.org/what-philosophy-is-and-why-you-cant-avoid-it/">
                                    <h2 className="text-xl font-bold md:px-5 lg:px-0">
                                        Why the Best Explanation Can Be a Miracle
                                    </h2>
                                </a>
                                <div className="flex gap-2">
                                    <p>By Juwon Adeoba</p>
                                    <p>7th{" "}July,2024</p>
                                </div>
                            </div>
                            <div className="w-[50%] md:w-[35%] h-[100%]">
                                <img className="h-[100%] rounded-[8px] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/05/CE-BLOG-COVER-What-Philosophy-Is-1080x675.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* lower section */}
            <section className="md:mt-40 lg:mt-0">
                <div className=" font-myFont md:mt-40 lg:mt-0">
                    <h1 className='mt-[4rem] md:mt-80 text-center font-playWrite text-3xl 
                    font-bold md:mb-5 lg:mb-0 lg:mt-40'>HERE ARE OUR PAST BLOGS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 
                    lg:gap-10 md:p-5 lg:p-10">
                        <div className="bg-white mx-4 md:mx-0 flex flex-col gap-3 md:w-[270px] 
                        lg:w-[370px] rounded-[8px]">
                            <div className="h-[300px] rounded-t-[8px]">
                                <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://crossexamined.org/wp-content/uploads/2024/05/may24-jun2-1080x675.jpg" alt="" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Why Is God’s Word So Hard To Understand?</h1>
                                <a href="https://crossexamined.org/why-is-gods-word-so-hard-to-understand-2/">
                                <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 md:mx-0 md:w-[270px] lg:w-[370px] rounded-t-[8px] 
                        rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://crossexamined.org/wp-content/uploads/2024/05/Andy-Stanley-blog-1080x675.jpg" alt="" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Andy Stanley’s Unbiblical ‘Affirming’ Stance</h1>
                                
                                <a href="https://crossexamined.org/andy-stanleys-unbiblical-affirming-stance/">
                                <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 md:mx-0 md:w-[270px] lg:w-[370px] rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <img className=' h-[100%] rounded-[8px] w-[100%] object-cover' src="https://crossexamined.org/wp-content/uploads/2024/05/Grief-blog-1080x675.jpg" alt="" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>How Apologetics Helps Through Times of Grief</h1>
                                <a href="https://crossexamined.org/how-apologetics-helps-through-times-of-grief/">
                                <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 md:mx-0 md:w-[270px] lg:w-[370px] rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <img className=' h-[100%] rounded-[8px] w-[100%] object-cover' src="https://crossexamined.org/wp-content/uploads/2024/05/CE-BLOG-COVER-Recommended-Books-1080x675.jpg" alt="" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-center text-xl'>Recommended Books on Historical Apologetics for The Gospels & Acts</h1>
                                <a href="https://crossexamined.org/recommended-books-on-historical-apologetics-for-the-gospels-acts/">
                                <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 md:mx-0 md:w-[270px] lg:w-[370px]  rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <img className='h-[100%] rounded-[8px] w-[100%] object-cover' src="https://crossexamined.org/wp-content/uploads/2024/05/apr22-blog-1080x675.jpg" alt="" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Atheists’ Faith in Science is Misplaced</h1>
                                <a href="https://crossexamined.org/atheists-faith-in-science-is-misplaced-2/">
                                <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                            </div>
                        </div>
                        <div className="mx-4 md:mx-0 md:w-[270px] lg:w-[370px] rounded-[8px] flex flex-col gap-3">
                            <div className="h-[300px]">
                                <img className=' h-[100%] rounded-[8px] w-[100%] object-cover' src="https://crossexamined.org/wp-content/uploads/2024/04/Esther-blog-1080x675.jpg" alt="" />
                            </div>
                            <div className="w-[100%] h-[160px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Evidence for the Book of Esther</h1>
                                <a href="https://crossexamined.org/evidence-for-the-book-of-esther/">
                                <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewsLetters/>
            <Footer/>
        </>
    )
}

export default Blog
