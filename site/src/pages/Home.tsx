import Header from '@/component/Header';
import Cards from '@/component/Cards';
import Banner from '@/assets/download.jpeg';
const Home = () => {
    return (
        <div className='w-full h-screen'>
            <Header/>
            <Cards/>
            {/* <section className='h-[500px] w-full mt-[4px]'>
                <img className='h-[100%] w-[100%] object-cover' src={Banner} alt="banner1" />
            </section> */}
        </div>
    )
}

export default Home
