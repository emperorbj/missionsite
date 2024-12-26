import { NavLink,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Bars4Icon } from '@heroicons/react/20/solid';
import { DropdownMenuDemo } from './DropdownMenuDemo';
import { DropdownTwo } from './DropdownTwo';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)


    return (
        // className=' relative md:fixed text-[16px] top-0 left-0 flex items-center 
        // justify-between w-full h-[65px] bg-transparent z-30'

        <nav  className={`shadow-sm relative md:fixed top-0 left-0 flex items-center justify-between w-full h-[65px] bg-white z-30 transition-transform duration-300`}>
            <NavLink to='/'>
                <div className='w-[100px]  px-[10px]  mx-10 text-3xl'>
                    logo
                </div>
            </NavLink>
                <div className=' block cursor-pointer md:hidden'>
                    <Bars4Icon onClick={()=> setOpenMenu(!openMenu)} width={35} height={35} 
                    style={{marginRight:"20px"}}/>
                </div>
                {openMenu &&
                    <div className=' shadow-sm border border-slate-300 rounded-md mr-1 
                    flex absolute items-center top-[61px] right-0 flex-col w-[400px] 
                    text-[18px] gap-2  h-[580px]  bg-slate-200 md:hidden'>
                        <Link to="/" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Home</button>
                        </Link>
                        <Link to="/about" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>About us</button>
                        </Link>
                        <Link to="/contact" className="hover:text-sky-500 w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Contact</button>
                        </Link>
                        
                        <Link to="/whatsapp" className="hover:text-sky-500 w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Join Us</button>
                        </Link>


                        <Link to="/event" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Global Outreach</button>
                        </Link>
                        <Link to="/blog" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Blogs</button>
                        </Link>
                        <Link to="/streams" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Streams</button>
                        </Link>
                        <Link to="/ebooks" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>E-Books</button>
                        </Link>
                        <Link to="/faith-reason" className="hover:text-sky-500  w-[110px] 
                        text-center text-[17.4px] font-bold rounded-lg py-[12px] px-[10px]">
                            <button>Faith And Reason</button>
                        </Link>
                    </div>
                }
                {/* DESKTOP NAV */}
            <div className='hidden md:flex md:gap-4 lg:gap-[100px] md:mr-3 lg:mr-[60px] relative'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800 text-[15px] font-medium rounded-lg py-[12px] px-[10px]'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800 font-medium rounded-lg py-[12px] px-[10px]'
                    }
                >
                    <button>About us</button>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'text-sky-500 hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center font-medium rounded-lg py-[12px] px-[10px]' : 'hover:text-sky-500 md:w-[100px] lg:w-[110px] text-center text-slate-800  font-medium rounded-lg py-[12px] px-[10px]'
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

