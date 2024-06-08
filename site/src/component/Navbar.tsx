
import { Link } from 'react-router-dom';
import { DropdownMenuDemo } from './DropdownMenuDemo';
import { DropdownTwo } from './DropdownTwo';

const Navbar = () => {
    return (
        <nav className='sticky flex items-center justify-between w-full h-[80px]  bg-transparent  shadow-lg z-30'>
            <Link to='/'>
                <div className='w-[100px]  px-[10px]  mx-10 text-3xl'>
                    logo
                </div>
            </Link>
            <div className='flex gap-[100px] mr-[60px]'>
                <Link to="/" className='hover:border hover:border-input hover:bg-white/20 w-[110px] text-center text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                    < button>Home</ button>
                </Link>
                <Link to="/about" className='hover:border hover:border-input hover:bg-white/20 w-[110px] text-center text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                    < button>About us</ button>
                </Link>
                <Link to="/contact" className='hover:border hover:border-input hover:bg-white/20 w-[110px] text-center text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                    < button>Contact</ button>
                </Link>
                <Link to="/resources">
                    <DropdownTwo/>
                </Link>
                <Link to="/events">
                    <DropdownMenuDemo/>
                </Link>

                
            </div>
        </nav>
    )
}

export default Navbar
