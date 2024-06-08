// import HeaderPix from '../assets/header1.jpg';
import Navbar from './Navbar'
import video from '../assets/video.mp4'

const Header = () => {
    return (
        <div className='h-[700px] w-full z-10'>
            <Navbar/>

            <div className='w-full h-[600px]'>
                <video style={{width:'100%', height:'100%', objectFit:'cover'}} src={video} autoPlay muted loop/>
            </div>
            
        </div>
    )
}

export default Header
