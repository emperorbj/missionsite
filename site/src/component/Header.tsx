import HeaderPix from '../assets/header1.jpg';
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='h-[550px] w-full z-10'>
            <Navbar/>
            <img className='mt-[-80px]' src={HeaderPix} style={{
            height:'100%',
            width:'100%',
            objectPosition:'center',
            objectFit:'cover'}} alt="header background" />
        </div>
    )
}

export default Header
