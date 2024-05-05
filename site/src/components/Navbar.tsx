
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='w-full h-[80px] bg-purple-600'>
            <div>
                logo
            </div>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/about">
                    <button>About us</button>
                </Link>
                <Link to="/contact">
                    <button>Contact us</button>
                </Link>
                <Link to="/resources">
                    <button>Resources</button>
                </Link>
                <Link to="/events">
                    <button>Events</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
