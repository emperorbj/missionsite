// import HeaderPix from '../assets/header1.jpg';
import Navbar from './Navbar'
import video from '../assets/video (1).mp4'

const Header = () => {
    return (
        <div className='h-[750px] relative w-full'>
            <div className='w-full absolute top-0 left-0 h-full'>
                <video style={{width:'100%', height:'100%', objectFit:'cover'}} src={video} autoPlay muted loop/>
            </div>
            <Navbar/>
            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                <div className='text-center text-white'>
                    <h1 className='text-5xl font-bold'>Welcome to Our Site</h1>
                    <p className='mt-4 text-xl'>Your Success Begins Here</p>
                    <button className='text-[20px] font-bold mt-[30px] rounded-[10px] py-[14px] px-[60px] bg-sky-400 hover:bg-gradient-to-r from-green-500 to-sky-500 '>Join us</button>
                </div>
            </div>
        </div>
    )
}

export default Header
