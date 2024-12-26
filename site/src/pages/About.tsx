



import Footer from "@/component/Footer"
import NewsLetters from "@/component/NewsLetters"
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'
import { MarqueeDemo } from "@/component/MarqueeDemo"
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

            <div className="h-screen mt-[25px] font-myWorkSans 
            flex flex-col md:flex-row 
            gap-8 
            py-0">
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
                <div className="w-full md:w-[40%] flex items-center justify-center">
                    <div className="w-64 h-64 md:w-72 md:h-72 rounded-full">
                        <img className="h-[100%] rounded-full w-[100%] object-cover" src="/profile4.jpg" alt="" />
                    </div>
                </div>
               
                <div className="w-full md:w-[60%] 
                flex flex-col gap-3 px-2 md:px-[10px]
                    items-center justify-center">
                    <h1 className="text-3xl text-blue-400 mt-8 md:mt-1 font-semibold"><span className="flex">{" "}{text}</span></h1><Cursor />
                    <p className=" text-start font-myPoppins text-[11.5px] sm:text-[14px] md:text-[14px] lg:text-[18px] leading-5 sm:leading-6 md:leading-8 
                    px-0 md:px-1">
                        Our mission is to engage and equip the body of Christ in fulfilling the Great Commission, a call that remains central to our work. 
                        At CMT, we place a special emphasis on working with students. Our goal is to reach those who have yet to encounter Christ, engage the saved, mobilise them, and provide training to help them become true disciples and effective disciple-makers.
                        For Christian professionals, our focus is to challenge and equip them with a mission-centred perspective. We believe that their professional platforms can serve as powerful tools for advancing the kingdom of God. By integrating their faith into their work, they can enthrone Jesus Christ among the nations and influence the world for His glory. 
                    </p>
                </div>
            </div>
            <div className="h-screen flex-col flex 
            sm:flex-row items-center justify-center space-y-4 md:space-y-0 
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
            <div className="flex md:mt-[180px] items-center justify-center 
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
