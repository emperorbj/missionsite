
import Navbar from "@/component/Navbar"
import Notes from "../assets/notes.png"


const Ebooks = () => {
    return (

        <div>
            <Navbar/>
            <div className="w-full h-[100vh] flex items-center justify-center bg-slate-100">
                
                <div className="w-[300px] h-[450px]">
                    <img className="h-[100%] w-[100%] object-cover" src={Notes} alt="" />
                    <p className="mt-[20px] text-2xl">Oops...Sorry no books yet.</p>
                </div>
            </div>
        </div>
    )
}

export default Ebooks
