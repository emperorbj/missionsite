import { NavLink,Link } from 'react-router-dom';
import { useState} from 'react';
import { Bars4Icon } from '@heroicons/react/20/solid';
import { DropdownMenuDemo } from './DropdownMenuDemo';
import { DropdownTwo } from './DropdownTwo';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const closeMenu = () => {
        setOpenMenu(false);
      };


    return (

        <nav  className='bg-white/30 backdrop-blur-lg relative md:fixed top-0 left-0 flex items-center justify-between w-full h-[45px] z-30 transition-transform duration-300'>
            <NavLink to='/'>
                <div className='w-[100px]  px-[10px]  mx-10 text-3xl'>
                    logo
                </div>
            </NavLink>
                <div className=' block cursor-pointer md:hidden'>
                    <Bars4Icon onClick={()=>setOpenMenu(!openMenu)} width={25} height={25} 
                    style={{marginRight:"20px"}}/>
                </div>
                {openMenu &&
                    <div className='shadow-sm bg-sky-100 backdrop-blur-xl border border-slate-300 rounded-md mr-1 
                    flex absolute items-center top-[61px] right-0 flex-col w-[160px] 
                    gap-2  h-[500px]  md:hidden'>
                        <Link to="/" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>Home</button>
                        </Link>
                        <Link to="/about" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>About us</button>
                        </Link>
                        <Link to="/contact" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>Contact</button>
                        </Link>
                        
                        <Link to="/whatsapp" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>Join Us</button>
                        </Link>


                        <Link to="/event" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>Global Outreach</button>
                        </Link>
                        <Link to="/blog" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>Blogs</button>
                        </Link>
                        <Link to="/streams" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>Streams</button>
                        </Link>
                        <Link to="/ebooks" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>E-Books</button>
                        </Link>
                        <Link to="/faith-reason" className="w-full hover:bg-sky-300 hover:text-white 
                        text-center text-[12.5px] font-bold rounded-lg py-[12px] px-[10px]"
                        onClick={closeMenu}>
                            <button>Faith And Reason</button>
                        </Link>
                    </div>
                }
                {/* DESKTOP NAV */}
            <div className='hidden md:flex md:gap-4 lg:gap-[100px] md:mr-3 lg:mr-[60px] relative'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lmx-3 g py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800 text-[15px] font-medium rounded-lmx-3 g py-[12px] px-[10px]'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lmx-3 g py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800 font-medium rounded-lmx-3 g py-[12px] px-[10px]'
                    }
                >
                    <button>About us</button>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lmx-3 g py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800  font-medium rounded-lmx-3 g py-[12px] px-[10px]'
                    }
                >
                    Contact
                </NavLink>
                
                <DropdownTwo/>
                <DropdownMenuDemo/>
            </div>
        </nav>


    );
};

export default Navbar;





