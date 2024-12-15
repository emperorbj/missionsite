



import Footer from "@/component/Footer"
import NewsLetters from "@/component/NewsLetters"
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'
import { MarqueeDemo } from "@/component/MarqueeDemo"

import AboutImage from "../assets/aboutUsCMT.jpeg";
import AboutLowerSection from "@/component/AboutLowerSection"
import AboutMiddleDiv from "@/component/AboutMiddleDiv";
import CircularProgress from "@/component/CircularProgress"
import CircularProgressTwo from "@/component/CircularProgressTwo"





const About = () => {

    const [text] = useTypewriter({
        words: ['About', 'Us'],
        loop: true
    })
    return (
        <>

            <div className="mt-[25px] md:mt-[35px] font-myWorkSans 
            flex flex-col-reverse lg:flex-row 
            gap-4  lg:gap-5 px-[10] 
            py-0 rounded-[10px] h-[700px]
            justify-between 
            md:h-[1000px] lg:h-[550px] 
            mx-1 lg:mx-[40px] relative">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu 
                overflow-hidden blur-3xl 
                sm:top-[-20rem]"
                    aria-hidden="true">

                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none 
                    -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr 
                    from-[#ff80b5] to-sky-500 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />

                </div>
                <div className="hidden lg:block absolute z-10 top-[10px] lg:top-[10px]
                    left-[130px]
                    lg:left-[40px] 
                    md:top-[60px] md:left-[200px] ml-0 md:ml-0 
                    lg:w-[250px] border 
                    shadow-lg rounded-full 
                    h-[200px] w-[200px] lg:h-[250px] ">
                    <img className="h-[100%] rounded-full w-[100%] object-cover" src={AboutImage} alt="" />
                </div>
                <div className="hidden absolute bg-slate-600 top-[220px] left-[160px] 
                    ml-0 md:ml-0 lg:block lg:w-72 border
                    shadow-lg 
                    rounded-full h-[170px] w-[170px] md:h-72 ">
                    <img className="h-[100%] rounded-full w-[100%] object-cover" src="/blog5.jpg" alt="" />
                </div>
                <div className="hidden lg:block absolute bg-sky-500 top-[100px] left-[360px] 
                    md:left-[340px]  md:top-[160px] 
                    lg:left-[280px] lg:top-[18px] 
                    ml-0 md:ml-0 border
                    shadow-lg
                    rounded-full 
                    md:rounded-bl-2xl md:rounded-tr-2xl 
                    lg:rounded-full
                    md:h-[260px] md:w-[260px] 
                    h-[240px] w-[240px] 
                    lg:w-[240px] lg:h-[240px]">
                    <img className="h-[100%] rounded-full w-[100%] object-cover" src="/blog57.jpg" alt="" />
                </div>
                <div className="absolute top-[90px] md:top-[450px] lg:top-0 right-0 md:mt-0 w-full lg:w-[50%] 
                flex flex-col gap-5 px-4 md:px-[30px] h-[300px] md:h-[500px] 
                    items-center justify-center">
                    <h1 className="text-3xl text-blue-400 mt-8 md:mt-1 font-semibold"><span className="flex">{" "}{text}</span></h1><Cursor />
                    <p className=" text-center font-myPoppins text-md md:text-xl leading-6 md:leading-8 px-0 md:px-1">Christ Mission Trust is an evangelical, inter-denominational Christian ministry.
                        We seek to present evidence that the Bible is true.
                        We do not require others in the body of Christ with whom we partner to hold
                        certain positions on many of the doctrinal or theological debates that take
                        place within the church. While we do believe that these issues are significant,
                        our primary concerns are with the effects that false ideologies are having on the
                        world and the body of believers (particularly our young people)</p>
                </div>
            </div>
            <div className="flex-col mx-6 md:mx-0 md:flex md:flex-row items-center 
            h-32 my-12 justify-center space-y-4 md:space-y-0 
                md:gap-5">
                <div className=" px-3 py-4 flex items-center justify-center">
                    <CircularProgress />
                    <p className="text-xl md:text-3xl text-sky-700 font-bold">+{" "}Events</p>
                </div>
                <div className=" px-3 py-4 flex items-center justify-center">
                    <CircularProgressTwo />
                    <p className="text-xl md:text-3xl text-sky-800 font-bold">+{" "}Outreaches</p>
                </div>


            </div>
            <div className="flex mt-[300px] md:mt-[180px] items-center justify-center 
            text-3xl font-semibold ">
                <h1>
                    Our{" "}
                    <Typewriter
                        words={['Vision', 'Mission',]}
                        loop={100}
                        cursor
                        cursorStyle=' '
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
            </div>

            <AboutLowerSection />
            <AboutMiddleDiv />
            <div>
                <h1 className="text-3xl font-myWorkSans mt-[90px] text-center">What People Area Saying</h1>
            </div>
            <div className="mb-[40px] mx-3">
                <MarqueeDemo />
                {/* <Testimonial /> */}
            </div>
            <NewsLetters />
            <Footer />
        </>
    )
}
export default About
