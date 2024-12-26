import Footer from "@/component/Footer"
import Lottie from 'lottie-react';
import bookUs from '../Chatting.json';
import ReachOut from '../assets/reachOut.webp'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

import { AnimateList } from "@/component/AnimateList";
import { OrbitingCirclesDemo } from "@/component/OrbitingCircle";

interface Card {
    
        id:number,
        image:string,
        title: string,
}


const CardData: Card[] = [

    {
        id: 2,
        image: '/t2.png',
        title: 'Campus Evangelism'
    },
    {
        id: 3,
        image: '/t3.png',
        title: 'Professionals'
    },
    {
        id: 4,
        image: '/t4.png',
        title: 'Institutions'
    }
]



const Events = () => {
    return (
        <>
            <div className="mt-[10px] md:mt-[85px] lg:mt-[95px] flex flex-col lg:flex lg:flex-row  
            gap-5 px-0 md:px-[10] 
            font-myWorkSans py-1 md:py-[10px] 
            rounded-[10px] h-[1100px] md:h-1100px lg:h-[650px] mx-1 md:mx-5 lg:mx-[40px]">
                <div className="md:ml-[20px] h-[50%] w-[100%]  md:h-[60%] md:w-[95%] lg:w-[50%] lg:h-[100%] ">
                    <img className="rounded-[30px] shadow h-[100%] w-[100%] object-cover" src={ReachOut} alt="" />
                </div>
                <div className="h-[50%] w-[95%] md:h-[40%] md:w-[95%] lg:w-[50%] lg:h-[100%] 
                flex flex-col gap-5 
                px-[30px] items-center justify-center relative">
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu 
                            overflow-hidden blur-3xl 
                            sm:top-[-20rem]"
                        aria-hidden="true">

                        <div
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none 
                        -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr 
                        from-green-600 to-green-400 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <h1 className="text-3xl text-sky-400 font-semibold">We are sent to disciple nations</h1>
                    <OrbitingCirclesDemo />

                  

                </div>
            </div>
            <section>
                <div className=" font-myWorkSans">
                    <h1 className='text-center font-myPoppins text-3xl font-bold mt-40 mb-[20px]'>FOCUS GROUPS</h1>
                    <div className="grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 p-4 lg:p-10 mx-14 md:mx-2 lg:mx-[20px]">
                        {CardData.map((card) =>
                        (
                            <Card key={card.id}>
                                <CardHeader>
                                    <img src={card.image} alt="img" />
                                </CardHeader>
                                <CardContent className="text-center font-semibold">
                                    <h2>
                                        {card.title}
                                    </h2>
                                </CardContent>
                                <CardFooter>
                                    
                                </CardFooter>
                            </Card>

                        ))}
                    </div>
                </div>
            </section>
            <div className='items-center flex flex-col md:flex md:flex-row lg:flex 
            lg:flex-row-reverse h-[560px] md:h-[550px] lg:h-[500px] mx-3 lg:mx-[40px] my-[60px]'>
                <div className="hidden md:inline-block w-[80%] h-[50%]  md:h-[60%] md:w-[45%] lg:w-[40%] 
                lg:h-[100%]  rounded-[30px] shadow-lg">
                    <Lottie loop={true} animationData={bookUs} />
                </div>
                <div className='md:w-[50%] lg:w-[60%] '>
                    <AnimateList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Events
