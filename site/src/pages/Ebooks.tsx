
import Navbar from "@/component/Navbar"
import NotFound from "../File Not Found.json"
import Lottie from "lottie-react"


const Ebooks = () => {
    return (

        <div>
            <Navbar/>
            <div className="w-full h-[100vh] flex items-center justify-center bg-slate-100">
                
                <div className="w-[450px] h-[450px]">
                    <Lottie loop={true} animationData={NotFound}/>
                    <p className="mt-[20px] text-center text-2xl">Oops...Sorry no books yet.</p>
                </div>
            </div>
        </div>
    )
}

export default Ebooks
