import { Link } from 'react-router-dom';
import { DropdownMenuDemo } from './DropdownMenuDemo';
import { DropdownTwo } from './DropdownTwo';
import { Bars4Icon } from '@heroicons/react/20/solid';
import { useState } from 'react';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false)
    
    return (
        
        <nav>
            
            <div className="relative  top-0 left-0 flex items-center 
            justify-between w-full h-[60px] z-30">
                
                <Link to="/">
                <div className="w-[100px] px-[10px] mx-10 text-3xl">
                    logo
                </div>
                </Link>

                <div className=' block cursor-pointer md:hidden'>
                    <Bars4Icon onClick={()=> setOpenMenu(!openMenu)} width={35} 
                    height={35} style={{marginRight:"20px"}}/>
                </div>
                {openMenu &&
                    <div className=' shadow-sm border border-slate-300 rounded-md mr-1 flex 
                    absolute items-center top-[61px] right-0 flex-col w-[400px] text-xl gap-6  h-[550px]  
                    bg-slate-200 md:hidden'>
                        <Link to="/" className="hover:text-sky-500  w-[110px] text-center 
                        text-[16px] font-bold rounded-lg py-[12px] px-[10px]">
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-sky-500  w-[110px] 
                        text-center text-[16px] font-bold rounded-lg py-[12px] px-[10px]">
                            About us
                        </Link>
                        <Link to="/contact" className="hover:text-sky-500 w-[110px] 
                        text-center text-[16px] font-bold rounded-lg py-[12px] px-[10px]">
                            Contact
                        </Link>
                        
                        <DropdownTwo />
                        
                        
                        <DropdownMenuDemo />
                        
                    </div>
                }
                
                <div className="hidden md:flex lg:gap-[30px] md:gap-2 md:mr-[60px]">
                    
                    <Link to="/" className="hover:text-sky-200 text-primary cursor-pointer  w-[110px] text-center 
                    text-sm font-bold rounded-lg py-[12px] px-[10px]">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-sky-200 text-primary w-[110px] 
                    text-center 
                    text-sm font-bold rounded-lg py-[12px] cursor-pointer px-[10px]">
                        About us
                    </Link>
                    <Link to="/contact" className="hover:text-sky-200 cursor-pointer text-primary w-[110px] text-center 
                    text-sm font-bold rounded-lg py-[12px] px-[10px]">
                        Contact
                    </Link>
                    
                    <DropdownTwo />
                    
                    
                    <DropdownMenuDemo/>
                    
                </div>
                
            </div>
            
        </nav>
    );
};

export default Navbar;

