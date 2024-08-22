import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"
import Lottie from 'lottie-react';
import bookUs from '../Chatting.json';
import ReachOut from '../assets/reachOut.webp'

const Events = () => {
    return (
        <>
            <Navbar/>
            <div className="mt-[10px] md:mt-[85px] lg:mt-[95px] flex flex-col lg:flex lg:flex-row  
            gap-5 px-0 md:px-[10] 
            font-myWorkSans py-1 md:py-[10px] 
            rounded-[10px] h-[900px] md:h-1100px lg:h-[650px] bg-slate-200 mx-1 md:mx-5 lg:mx-[40px]">
                <div className="md:ml-[20px] h-[50%] w-[100%]  md:h-[60%] md:w-[95%] lg:w-[50%] lg:h-[100%] ">
                    <img className="rounded-[30px] shadow h-[100%] w-[100%] object-cover" src={ReachOut} alt="" />
                </div>
                <div className="h-[50%] w-[95%] md:h-[40%] md:w-[95%] lg:w-[50%] lg:h-[100%] flex flex-col gap-5 
                px-[30px] items-center justify-center">
                    <h1 className="text-3xl text-sky-400 font-semibold">We are sent to disciple nations</h1>
                    <p className="md:text-lg lg:text-xl leading-5 md:leading-9">
                    We do not require others in the body of Christ with whom we partner to hold 
                    certain positions on many of the doctrinal or theological debates that take 
                    place within the church. While we do believe that these issues are significant, 
                    our primary concerns are with the effects that false ideologies are having on the
                    world and the body of believers (particularly our young people)</p>
                    <button className="text-xl text-black px-[40px] border border-black hover:text-yellow-400 hover:bg-slate-800 py-[10px] rounded-md shadow  bg-yellow-400">Join us</button>
                </div>
            </div>
            <section>
                <div className=" font-myWorkSans">
                    <h1 className='text-center font-myPoppins text-3xl font-bold mt-40 mb-[20px]'>FOCUS GROUPS</h1>
                    <div className="grid bg-slate-200 rounded-[30px] grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 p-4 lg:p-10 md:mx-2 lg:mx-[20px] mb-[20px]">
                        <div className="md:w-[360px] lg:w-[450px] h-[360px]rounded-[8px] flex flex-col gap-3">
                            <div className="h-[320px] shadow-md rounded-[8px]">
                                <img alt="" className='h-full w-full object-cover' src="https://www.msureporter.com/wp-content/uploads/2019/09/evangelism.jpg"/>
                            </div>
                            <div className="w-[100%] h-[100px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>
                                    Campus Outreaches
                                </h1>
                                
                            </div>
                        </div>
                        <div className="md:w-[360px] lg:w-[450px] h-[360px]  rounded-[8px] flex flex-col gap-3">
                            <div className="h-[320px] shadow-md rounded-[8px]">
                                <img alt="" className='object-cover h-full w-full' src="https://globalconference.ca/wp-content/uploads/2023/07/What-Is-a-Church-Conference.png" />
                            </div>
                            <div className="w-[100%] h-[100px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>
                                    Church Seminars
                                </h1>
                            </div>
                        </div>
                        <div className="md:w-[360px] lg:w-[450px] h-[360px] rounded-[8px] flex flex-col gap-3">
                            <div className="h-[320px] shadow-md rounded-[8px]">
                                <img alt="" className='h-full w-full object-cover' src="https://gocic.org/wp-content/uploads/2019/12/sr_437818-1.jpg"/>
                            </div>
                            <div className="w-[100%] h-[100px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>
                                    Village Outreach
                                </h1>
                            </div>
                        </div>
                        <div className="md:w-[360px] lg:w-[450px] h-[360px] rounded-[8px] flex 
                        flex-col gap-3">
                            <div className="h-[320px] shadow-md rounded-[8px]">
                            <img alt="" className='h-full w-full object-cover' src="https://thecophq.org/wp-content/uploads/2022/12/Youth-Ministry-Launches-Nationwide-Teens-Evangelism-Drive-2000x1125.jpg"/>
                            </div>
                            <div className="w-[100%] h-[100px] flex gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>
                                    High School Outreach
                                </h1>
                            </div>
                        </div>
                        <div className="md:w-[360px] lg:w-[450px] h-[360px] rounded-[8px] 
                        flex flex-col gap-3">
                            <div className="h-[320px] shadow-md rounded-[8px]">
                                <img alt="" className='h-full w-full object-cover' src="https://www.pushingjesusagenda.org/images/jux_gallery/str0004.jpg"/>
                            </div>
                            <div className="w-[100%] h-[100px] flex  gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Street Evangelism</h1>
                            </div>
                        </div>
                        <div className="md:w-[360px] lg:w-[450px] h-[360px] rounded-[8px] flex flex-col gap-3">
                            <div className="h-[320px] shadow-md rounded-[8px]">
                                <img alt="" className='w-full h-full object-cover' src="https://www.churchrelevance.com/wp-content/uploads/2019/09/Church-Conference.jpg"/>
                            </div>
                            <div className="w-[100%] h-[100px] flex flex-col gap-5 items-center justify-center">
                                <h1 className='font-semibold text-xl'>Missionary Summits</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='items-center flex flex-col md:flex md:flex-row lg:flex 
            lg:flex-row-reverse h-[560px] md:h-[550px] lg:h-[500px] mx-3 lg:mx-[40px] my-[60px]'>
                <div className="w-[80%] h-[50%]  md:h-[60%] md:w-[45%] lg:w-[40%] 
                lg:h-[100%]  rounded-[30px] shadow-lg">
                    <Lottie loop={true} animationData={bookUs}/>
                </div>
                <div className='md:w-[50%] lg:w-[60%] '>
                    <div className=' lg:h-[100%] my-3 flex flex-col'>
                            <p className='text-xl px-[50px] mb-[40px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatu
                            </p>
                            <button className='bg-yellow-400 border border-black hover:bg-slate-800 
                            hover:text-yellow-400 font-semibold text-black  
                            rounded-[7px] shadow-md py-[15px] px-[20px] text-xl w-[50%] md:w-[30%] ml-[50px]'>
                                Register here
                            </button>
                        </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Events
