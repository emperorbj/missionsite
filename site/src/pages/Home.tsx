import Header from '@/component/Header';
import Cards from '@/component/Cards';
import Upcoming from '@/component/Upcoming';
import Teams from '@/component/Teams';
import NewsLetters from '@/component/NewsLetters';
import Sponsors from '@/component/Sponsors';
import Footer from '@/component/Footer';

const Home = () => {
    return (
        <div className=' w-full'>
            <Header/>
            <Cards/>
            <div className='text-center font-semibold text-xl my-[40px] pt-[50px]'>
                OUR UPCOMING PROGRAMS
            </div>
            <Upcoming/>
            <Teams/>
            <NewsLetters/>
            <Sponsors/>
            <Footer/>

        </div>
    )
}

export default Home
