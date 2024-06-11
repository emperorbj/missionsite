// import HeaderPix from '../assets/header1.jpg';
import Navbar from './Navbar'
import video from '../assets/video (1).mp4'

const Header = () => {
    return (
        <div className='h-[700px] relative w-full'>
            
            <div className='w-full absolute top-0 left-0 h-full'>
                <video style={{width:'100%', height:'100%', objectFit:'cover'}} src={video} autoPlay muted loop/>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header
