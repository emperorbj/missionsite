import Header from '@/component/Header';
import Cards from '@/component/Cards';
import Upcoming from '@/component/Upcoming';
const Home = () => {
    return (
        <div className='w-full h-screen'>
            <Header/>
            <Cards/>
            <Upcoming/>
        </div>
    )
}

export default Home
