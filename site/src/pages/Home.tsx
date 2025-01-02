import Header from '@/component/Header';
import Cards from '@/component/Cards';
import Upcoming from '@/component/Upcoming';
import Teams from '@/component/Teams';
import NewsLetters from '@/component/NewsLetters';
// import Sponsors from '@/component/Sponsors';
import Footer from '@/component/Footer';




const Home = () => {
    return (
        <div className='bg-sky-50 w-full'>
            <Header/>
            {/* <Sponsors/> */}
            <Cards/>
            <div
            className='text-center font-bold font-myWorkSans text-xl my-[40px] pt-[50px]'>
                OUR <span className='text-sky-400'>RECENT</span> PROGRAMS
            </div>
            <Upcoming/>
            <Teams/>
            <NewsLetters/>
            <Footer/>

        </div>
    )
}

export default Home
