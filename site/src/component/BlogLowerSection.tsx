import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

const BlogLowerSection = () => {
    return (
        <div>
            <section className="md:mt-40 lg:mt-0">
                <div className=" font-myFont md:mt-40 lg:mt-0">
                    <h1 className='mt-[4rem] md:mt-80 text-center font-playWrite text-3xl 
                    font-bold md:mb-5 lg:mb-0 lg:mt-40'>HERE ARE OUR PAST BLOGS</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 
                    lg:gap-10 md:p-5 lg:p-10">

                            <Card>
                                <CardHeader>
                                    <img src="https://crossexamined.org/wp-content/uploads/2024/05/may24-jun2-1080x675.jpg" alt="img" />
                                </CardHeader>
                                <CardContent className="text-center font-semibold">
                                    <h1 className='font-semibold text-xl'>Why Is God's Word So Hard To Understand?</h1>
                                    <a href="https://crossexamined.org/why-is-gods-word-so-hard-to-understand-2/">
                                        <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                    </a>
                                </CardContent>
                                <CardFooter>
                                    
                                </CardFooter>
                            </Card>

                            
                            <Card>
                                <CardHeader>
                                    <img src="https://crossexamined.org/wp-content/uploads/2024/05/Andy-Stanley-blog-1080x675.jpg" alt="img" />
                                </CardHeader>
                                <CardContent className="text-center font-semibold">
                                    <h1 className='font-semibold text-xl'>Andy Stanley's Unbiblical Affirming Stance</h1>

                                    <a href="https://crossexamined.org/andy-stanleys-unbiblical-affirming-stance/">
                                        <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                    </a>
                                                                    </CardContent>
                                <CardFooter>
                                    
                                </CardFooter>
                            </Card>


                            <Card>
                                <CardHeader>
                                    <img src="https://crossexamined.org/wp-content/uploads/2024/05/Grief-blog-1080x675.jpg" alt="img" />
                                </CardHeader>
                                <CardContent className="text-center font-semibold">
                                <h1 className='font-semibold text-xl'>How Apologetics Helps Through Times of Grief</h1>
                                <a href="https://crossexamined.org/how-apologetics-helps-through-times-of-grief/">
                                    <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                                </CardContent>
                                <CardFooter>
                                    
                                </CardFooter>
                            </Card>


                            <Card>
                                <CardHeader>
                                    <img src="https://crossexamined.org/wp-content/uploads/2024/05/CE-BLOG-COVER-Recommended-Books-1080x675.jpg" alt="img" />
                                </CardHeader>
                                <CardContent className="text-center font-semibold">
                                <h1 className='font-semibold text-center text-xl'>Recommended Books on Historical Apologetics for The Gospels & Acts</h1>
                                <a href="https://crossexamined.org/recommended-books-on-historical-apologetics-for-the-gospels-acts/">
                                    <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                                </CardContent>
                                <CardFooter>
                                    
                                </CardFooter>
                            </Card>


                            <Card>
                                <CardHeader>
                                    <img src="https://crossexamined.org/wp-content/uploads/2024/05/apr22-blog-1080x675.jpg" alt="img" />
                                </CardHeader>
                                <CardContent className="text-center font-semibold">
                                <h1 className='font-semibold text-xl'>Atheists’ Faith in Science is Misplaced</h1>
                                <a href="https://crossexamined.org/atheists-faith-in-science-is-misplaced-2/">
                                    <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                                </CardContent>
                                <CardFooter>
                                    
                                </CardFooter>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <img src="https://crossexamined.org/wp-content/uploads/2024/04/Esther-blog-1080x675.jpg" alt="img" />
                                </CardHeader>
                                <CardContent className="text-center font-semibold">
                                <h1 className='font-semibold text-xl'>Evidence for the Book of Esther</h1>
                                <a href="https://crossexamined.org/evidence-for-the-book-of-esther/">
                                    <button className='px-[35px] rounded-md hover:text-white hover:bg-blue-500 bg-blue-400 py-[10px]'>Read more</button>
                                </a>
                                </CardContent>
                                <CardFooter>
                                    
                                </CardFooter>
                            </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogLowerSection
