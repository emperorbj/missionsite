import BlogLowerSection from "@/component/BlogLowerSection"
import Footer from "@/component/Footer"
import NewsLetters from "@/component/NewsLetters"


const Blog = () => {
    return (
        <>
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
            <BlogLowerSection/>
            <NewsLetters/>
            <Footer/>
        </>
    )
}

export default Blog
