import { Link } from 'react-router-dom';
import { DropdownMenuDemo } from './DropdownMenuDemo';
import { DropdownTwo } from './DropdownTwo';

const Navbar = () => {
    return (
        
        <nav>
            
            <div className=" fixed top-0 left-0 flex items-center justify-between w-full h-[60px] bg-white/30 backdrop-blur-lg shadow-lg z-30">
                <Link to="/">
                <div className="w-[100px] px-[10px] mx-10 text-3xl">
                    logo
                </div>
                </Link>
                <div className=" rounded-2xl flex gap-[100px] mr-[60px]">
                    <Link to="/" className="hover:text-yellow-500  w-[110px] text-center text-lg font-bold rounded-lg py-[12px] px-[10px]">
                        <button>Home</button>
                    </Link>
                    <Link to="/about" className="hover:text-yellow-500  w-[110px] text-center text-lg font-bold rounded-lg py-[12px] px-[10px]">
                        <button>About us</button>
                    </Link>
                    <Link to="/contact" className="hover:text-yellow-500 w-[110px] text-center text-lg font-bold rounded-lg py-[12px] px-[10px]">
                        <button>Contact</button>
                    </Link>
                    <Link to="/resources">
                        <DropdownTwo />
                    </Link>
                    <Link to="/events">
                        <DropdownMenuDemo />
                    </Link>
                </div>
                
            </div>
            
        </nav>
    );
};

export default Navbar;
