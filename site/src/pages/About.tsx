import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"
import NewsLetters from "@/component/NewsLetters"
import NumberTickerDemo from "@/component/NumberTickerDemo"
import NumberTickerDemoTwo from "@/component/NumberTickerDemoTwo"
import { PencilSquareIcon } from '@heroicons/react/20/solid'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import { HeartIcon } from '@heroicons/react/20/solid'
import { GlobeEuropeAfricaIcon } from '@heroicons/react/20/solid'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'
import { MarqueeDemo } from "@/component/MarqueeDemo"
import { Subscribe } from "@/component/Subscribe"
import AboutImage from "../assets/aboutUsCMT.jpeg";





const About = () => {

    const [text] = useTypewriter({
        words: ['About', 'Us'],
        loop: true
    })
    return (
        <>
            <Navbar />
                <div className="mt-[25px] md:mt-[85px] font-myWorkSans 
            flex flex-col-reverse lg:flex lg:flex-row 
            gap-4  lg:gap-5 px-[10] 
            py-[10px] rounded-[10px] h-[800px] md:h-[1000px] lg:h-[550px] bg-sky-100 mx-1 lg:mx-[40px]">
                    <div className="ml-0 sm:hidden  md:ml-[20px] w-full lg:w-[50%] h-[500px] ">
                        <img className="rounded-[30px] shadow h-[100%] w-[100%] object-cover" src={AboutImage} alt="" />
                    </div>
                    <div className="w-full lg:w-[50%] flex flex-col gap-5 px-4 md:px-[30px] h-[500px] items-center justify-center">
                        <h1 className="text-3xl text-blue-400 mt-8 md:mt-1 font-semibold"><span className="flex">{" "}{text}</span></h1><Cursor />
                        <p className=" text-center text-lg md:text-xl leading-4 md:leading-8 px-0 md:px-1">Christ Mission Trust is an evangelical, inter-denominational Christian ministry.
                            We seek to present evidence that the Bible is true.
                            We do not require others in the body of Christ with whom we partner to hold
                            certain positions on many of the doctrinal or theological debates that take
                            place within the church. While we do believe that these issues are significant,
                            our primary concerns are with the effects that false ideologies are having on the
                            world and the body of believers (particularly our young people)</p>
                        {/* <button className="text-xl text-black px-[40px] py-[10px]  
                        rounded-md shadow border border-black hover:text-yellow-400 
                        hover:bg-slate-800 bg-yellow-400">Join us</button>*/}
                        <Subscribe/>
                    </div>
                </div>
                <div className="flex-col mx-6 md:mx-0 md:flex md:flex-row items-center h-32 my-24 justify-center space-y-4 md:space-y-0 
                md:gap-5">
                    <div className="border-4 px-3 py-4 rounded-md flex items-center justify-center">
                        <NumberTickerDemo />
                        <p className="text-2xl md:text-3xl text-sky-700 font-bold">+{" "}Events</p>
                    </div>
                    <div className="border-4 px-3 py-4 rounded-md flex items-center justify-center">
                        <NumberTickerDemoTwo />
                        <p className="text-2xl md:text-3xl text-sky-800 font-bold">+{" "}Outreaches</p>
                    </div>


                </div>
                <div className="flex mt-[180px] items-center justify-center text-3xl font-semibold ">
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
                {/* <div className="flex justify-center mt-10 gap-10 py-[10px] w-full h-[400px]"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-2 
            py-[10px]  w-full">
                    <div className="w-[100%] h-full">
                        <div className=" flex items-center justify-center mt-5 ml-5 
                    rounded-full w-14 h-14">
                            <GlobeEuropeAfricaIcon className="text-green-800 w-11 h-11" />
                        </div>
                        <h1 className="text-2xl mt-5 text-sky-600 text-center font-semibold">Empowering Faith, Expanding the Kingdom</h1>
                        <ul className="flex flex-col mt-2 gap-3 mx-[20px]">
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />Equip believers to confidently defend their faith through engaging apologetics training.</li>
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />Share the Gospel message with clarity and compassion, inspiring hearts to turn to Christ.</li>
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />Build vibrant Christian communities around the world, fulfilling the Great Commission</li>
                        </ul>
                    </div>
                    <div className="w-[100%]">
                        <div className=" flex items-center justify-center mt-5 ml-5 rounded-full w-14 h-14">
                            <PencilSquareIcon className="text-blue-800 w-11 h-11" />
                        </div>
                        <h1 className="text-2xl mt-5 text-sky-600 text-center font-medium">Reason & Revelation</h1>
                        <ul className="flex flex-col mt-2 gap-3 mx-[20px]">
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                                Bridge the gap between faith and reason, fostering intellectual engagement with Christianity.
                            </li>
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                                Proclaim the transformative power of Jesus through culturally relevant missions endeavors.
                            </li>
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                                Ignite a movement of passionate Christ-followers, impacting lives for eternity.
                            </li>
                        </ul>
                    </div>
                    <div className="w-[100%]">
                        <div className=" flex items-center justify-center mt-5 ml-5 rounded-full w-14 h-14">
                            <HeartIcon className="text-red-700 w-11 h-11" />
                        </div>
                        <h1 className="text-2xl mt-5 text-sky-600 text-center font-medium">Love. Truth. Transformation</h1>
                        <ul className="flex flex-col mt-2 gap-3 mx-[20px]">
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                                Cultivate a love for God that compels us to share His truth with the world.
                            </li>
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                                Share the Gospel message with clarity and compassion, inspiring hearts to turn to Christ.
                            </li>
                            <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                                Build vibrant Christian communities around the world, fulfilling the Great Commission
                            </li>
                        </ul>
                    </div>
                </div>
                {/* first  */}
                <div className='font-myWorkSans flex flex-col md:flex md:flex-row h-[700px] md:h-[500px] mx-8 md:mx-[4px] lg:mx-[40px] mt-[110px]'>
                    <div className="md:w-[55%] lg:w-[50%] rounded-[10px] shadow-lg">
                        <img className='h-[100%] w-[100%] object-cover object-center rounded-[10px]' src="https://ehr.meditech.com/themes/ehrmeditech/images/about/meditech-staff-working-together-on-whiteboard.jpg" alt="" />
                    </div>
                    <div className='md:w-[45%] lg:w-[50%]'>
                        <div className='h-[100%] flex flex-col'>
                            <h1 className='text-3xl  font-bold text-center pt-3 md:pt-1 lg:pt-[50px] my-[10px]'>Mission driven</h1>
                            <p className='text-lg md:text-lg lg:text-xl md:px-5 lg:px-[50px] mb-[40px]'>
                                MEDITECH wants to help build a world where every patient can access their health information and participate
                                fully in their own care. We think all healthcare organizations can serve their communities quicker and more
                                safely if patients and providers have instant access to records, knowledge, and data.
                                To that end, we set out to create better technologies for secure and cost-effective care, with our scalable

                            </p>
                        </div>
                    </div>
                </div>
                {/* second */}
                <div className='font-myWorkSans flex flex-col md:flex md:flex-row-reverse h-[700px] md:h-[500px] mx-8 md:mx-[4px] lg:mx-[40px] mt-[80px]'>
                    <div className="md:w-[55%] lg:w-[50%]  rounded-[10px] shadow-lg">
                        <img className='h-[100%] w-[100%] object-cover object-center rounded-[10px]' src="https://ehr.meditech.com/themes/ehrmeditech/images/about/two-meditechers-embracing-each-other.jpg" alt="" />
                    </div>
                    <div className='md:w-[45%] lg:w-[50%]'>
                        <div className='h-[100%] flex flex-col'>
                            <h1 className='text-3xl  font-bold text-center pt-3 md:pt-1 lg:pt-[50px] my-[10px]'>Devoted to all our employees</h1>
                            <p className='text-lg md:text-lg lg:text-xl md:px-5 lg:px-[50px] mb-[40px]'>
                                At MEDITECH we believe there is strength in a diverse workforce, powered
                                by the contributions of people from different backgrounds, perspectives,
                                and life experiences. We are committed to fostering a work environment
                                and culture where all our staff members can reach their fullest potential.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-myWorkSans mt-[90px] text-center">What People Area Saying</h1>
                </div>
                <div className="mb-[40px] mx-3">
                    <MarqueeDemo/>
                    {/* <Testimonial /> */}
                </div>
                <NewsLetters />
                <Footer />




            {/* //////////////////////////////////////////////////// */}

        </>
    )
}

export default About
