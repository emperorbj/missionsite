import Navbar from "@/component/Navbar"


const FaithReason = () => {
    const slides = [
        {
            url: '/person1.jpg'
        },
        {
            url: '/person3.jpg'
        },
        {
            url: '/team3.jpg'
        }
]
    return (
        <>
            <Navbar/>
            <section>
                <div className="mt-[85px] py-[10px] rounded-[10px] h-[550px] bg-slate-200 mx-[60px] relative">
                    <div className="w-full h-full bg-center bg-cover duration-500">

                    </div>
                </div>
            </section>
        </>
    ) 
}

export default FaithReason
