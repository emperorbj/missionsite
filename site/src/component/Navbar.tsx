
import { Link } from 'react-router-dom';
import { DropdownMenuDemo } from './DropdownMenuDemo';
import { DropdownTwo } from './DropdownTwo';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between w-full h-[80px] bg-purple-600 z-30'>
            <div className='bg-red-400 w-[100px]  px-[10px]  mx-10 text-3xl'>
                logo
            </div>
            <div className='bg-blue-600 flex gap-[100px] mr-[60px]'>
                <Link to="/" className='bg-orange-400 w-[110px] text-center text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                    < button>Home</ button>
                </Link>
                <Link to="/about" className='bg-orange-400 w-[110px] text-center text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                    < button>About us</ button>
                </Link>
                <Link to="/contact" className='bg-orange-400 w-[110px] text-center text-lg font-bold rounded-lg py-[12px]  px-[10px] '>
                    < button>Contact us</ button>
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
