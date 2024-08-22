//import HeaderPix from '../assets/header1.jpg';
import Navbar from './Navbar'
import video from '../assets/video (1).mp4'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='h-[750px] relative w-full'>
            <div className=' h-[90%] w-full absolute top-0 left-0 md:h-full'>
                <video style={{width:'100%', height:'100%', objectFit:'cover'}} src={video} autoPlay muted loop/>
            </div>
            <Navbar/>
            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <div className='text-center text-white'>
                    <h1 className='text-5xl font-bold'>Welcome to Our Site</h1>
                    <p className='mt-4 text-xl'>Your Success Begins Here</p>
                    <Link to="/contact">
                    <button className='text-[20px] font-bold mt-[30px] rounded-[10px] 
                    py-[14px] px-[60px] border-black border bg-yellow-400 
                    hover:bg-slate-800 hover:text-yellow-400 '>Join us</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
