
import Forms from "../component/Forms"
import Footer from "@/component/Footer"
import Lottie from 'lottie-react'
import Mail from '../third.json'
import { useEffect } from "react"

const Contact = () => {


    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section>
            {/* <Navbar /> */}
            <div className="flex flex-col-reverse lg:flex lg:flex-row gap-4 mt-[85px] lg:w-full h-full">
                <Forms />
                <div className=" md:items-center md:justify-center lg:gap-4 flex flex-row lg:flex 
            lg:flex-col justify-center 
            lg:justify-center items-center lg:items-center w-full lg:w-[49%]">
                    <div className="rounded-[20px] h-[55%] w-[55%] md:h-[60%] md:w-[60%] lg:h-[80%] lg:w-[80%]">
                        {/* <img className="rounded-tr-[70px] rounded-bl-[70px] shadow  h-[100%] w-[100%] object-cover" src={Cross} alt="" /> */}
                        <Lottie loop={true} animationData={Mail} />
                    </div>
                    {/* <div className="hidden md:flex md:flex-col lg:flex lg:flex-row items-center 
                lg:justify-center lg:mt-[130px] 
                h-[40%] lg:h-[20%]">
                </div> */}
                </div>
            </div>
            <div className="w-full  h-[730px]">
                <div className="w-[40%]">

                </div>

                <div className="calendly-inline-widget" data-url="https://calendly.com/cwaku96/30min" style={{ minWidth: "400px", height: "700px" }}></div>
                {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}

            </div>
            <Footer />
        </section>
    )
}

export default Contact
