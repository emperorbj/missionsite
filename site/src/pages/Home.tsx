import Header from '@/component/Header';
import Cards from '@/component/Cards';
import Banner from '@/assets/banner1.1.jpg';
const Home = () => {
    return (
        <div className='w-full h-screen'>
            <Header/>
            <Cards/>
            <section className='h-[500px] w-full mt-[-15px] relative'>
                <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center', opacity:'0.7'}} src={Banner} alt="banner1" />
                <h1 className='absolute top-[180px] left-[100px] right-[100px] text-5xl font-bold text-white text-center'>Committed to building men to fulfill God's plan for them</h1>
            </section>
            <section className='h-[500px] w-full mt-[-15px] relative'>
                <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center', opacity:'0.7'}} src={Banner} alt="banner1" />
                <h1 className='absolute top-[180px] left-[100px] right-[100px] text-5xl font-bold text-white text-center'>Committed to building men to fulfill God's plan for them</h1>
            </section>
            <section className='h-[500px] w-full mt-[-15px] relative'>
                <img className='h-[100%] w-[100%] rounded-xl' style={{objectFit:'cover', objectPosition:'center', opacity:'0.7'}} src={Banner} alt="banner1" />
                <h1 className='absolute top-[180px] left-[100px] right-[100px] text-5xl font-bold text-white text-center'>Committed to building men to fulfill God's plan for them</h1>
            </section>
        </div>
    )
}

export default Home
