
import firstProgram from '../assets/prayer (1).jpg'
const Upcoming = () => {
    return (
        <>
        <div className='flex h-[500px] mx-[40px]'>
            <div className="w-[50%]">
                <img className='h-[100%] w-[100%] object-cover object-center' src={firstProgram} alt="" />
            </div>
            <div className='w-[50%] bg-gradient-to-l from-slate-100 to-slate-50 rounded-[10px]'>
                <div className='h-[100%] flex flex-col'>
                    <h1 className='text-2xl px-[50px] my-[10px]'>Program title</h1>
                    <p className='text-xl px-[50px] mb-[40px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatur eveniet deserunt iste aliquid deleniti libero 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero 
                    </p>
                    <button className='bg-gradient-to-r from-slate-50 to-sky-200 rounded-[7px] shadow-md py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
                        Register here
                    </button>
                </div>
            </div>
        </div>
        <div className='flex h-[500px] mx-[40px] my-[20px]'>
            <div className="w-[50%]">
                <img className='h-[100%] w-[100%] object-cover object-center' src={firstProgram} alt="" />
            </div>
            <div className='w-[50%] bg-gradient-to-l from-slate-100 to-slate-50 rounded-[10px]'>
            <div className='h-[100%] flex flex-col'>
                    <h1 className='text-2xl px-[50px] my-[10px]'>Program title</h1>
                    <p className='text-xl px-[50px] mb-[40px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero Totam consequatur eveniet deserunt iste aliquid deleniti libero 
                    Totam consequatur eveniet deserunt iste aliquid deleniti libero 
                    </p>
                    <button className='bg-gradient-to-r from-slate-50 to-sky-200 rounded-[7px] shadow-md py-[15px] px-[20px] text-xl w-[30%] ml-[50px]'>
                        Register here
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Upcoming
