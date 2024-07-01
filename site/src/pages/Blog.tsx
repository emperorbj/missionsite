import Navbar from "@/component/Navbar"


const Blog = () => {
    return (
        <>
            <Navbar/>
            <section className="mx-[45px] mt-[65px] bg-red-400 h-[690px]">
                <div className="bg-purple-600 h-[15%]">
                    <h1></h1>
                </div>
                <div className="bg-blue-500 flex h-[85%]">
                    {/* big top story right side */}
                    <div className="bg-green-500 h-[100%] w-[50%] pr-5">
                        {/* image container */}
                        <div className="h-[57%] bg-yellow-400">
                            <img className="h-[100%] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/06/june24-blog-cover-1080x675.jpg" alt="" />
                        </div>
                        {/* description container */}
                        <div className="h-[43%] pl-[10px] flex flex-col gap-3 bg-slate-400">
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
                            <a href="https://crossexamined.org/how-to-talk-with-your-teens-about-sex-and-love-from-a-biblical-worldview-interview-with-sean-mcdowell/">
                                <button className="px-[30px] py-[10px] bg-sky-500">
                                    Read more
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* top stories container */}
                    <div className="w-[50%] flex flex-col px-[15px] gap-2 py-[4px]  justify-center bg-green-700 h-[100%]">
                        <h1 className="bg-white h-[10%]"></h1>
                        <div className="bg-red-400 flex h-[30%]">
                            {/* top stories left and right divs */}
                            <div className="w-[65%] h-[100%] bg-purple-950">

                            </div>
                            {/* image-right-side-top-stories-container */}
                            <div className="w-[35%] h-[100%] bg-pink-600">
                                <img className="h-[100%] w-[100%] object-cover" src="https://crossexamined.org/wp-content/uploads/2024/06/CE-BLOG-COVER-JUNE-24-30-1080x675.jpg" alt="" />
                            </div>
                        </div>
                        <div className="bg-red-600 flex h-[30%]">
                            <div className="w-[65%] h-[100%] bg-purple-950">

                            </div>
                            <div className="w-[35%] h-[100%] bg-pink-600">

                            </div>
                        </div>
                        <div className="bg-red-800 h-[30%]">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
