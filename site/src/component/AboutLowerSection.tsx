



const AboutLowerSection = () => {
    return (
        <>
            {/* first  */}
            <div className='font-myWorkSans flex flex-col md:flex md:flex-row h-[700px] 
            md:h-[400px] mx-4 md:mx-[4px] lg:mx-[40px] mt-[110px]'>
                <div className="md:w-[55%] lg:w-[50%] rounded-[10px] shadow-md shadow-black">
                    <img className='h-[100%] w-[100%] object-cover object-center rounded-[10px]' src="https://ehr.meditech.com/themes/ehrmeditech/images/about/meditech-staff-working-together-on-whiteboard.jpg" alt="" />
                </div>
                <div className='md:w-[45%] lg:w-[50%] relative'>

                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu 
                        overflow-hidden blur-3xl 
                        sm:top-[-20rem]"
                        aria-hidden="true">

                        <div
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none 
                    -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr 
                    from-[#ff80b5] to-sky-500 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className='h-[100%] flex flex-col'>
                        <h1 className='text-3xl  font-bold text-center pt-3 md:pt-1 lg:pt-[50px] my-[10px]'>Mission driven</h1>
                        <p className='text-lg md:text-lg lg:text-xl md:px-5 lg:px-[50px] mb-[40px]'>
                            MEDITECH wants to help build a world where every patient can access their health information and participate
                            fully in their own care. We think all healthcare organizations can serve their communities quicker and more
                            safely if patients and providers have instant access to records, knowledge, and data.
                            To that end, we set out to create better technologies for secure and cost-effective care, with our scalable

                        </p>
                    </div>
                </div>
            </div>
            {/* second */}
            <div className='font-myWorkSans flex flex-col md:flex md:flex-row-reverse 
            h-[700px] md:h-[400px] mx-4 md:mx-[4px] lg:mx-[40px] mt-[80px]'>
                <div className="md:w-[55%] lg:w-[50%] rounded-[10px]  shadow-md shadow-black">
                    <img className='h-[100%] w-[100%] object-cover object-center rounded-[10px] ' src="https://ehr.meditech.com/themes/ehrmeditech/images/about/two-meditechers-embracing-each-other.jpg" alt="" />
                </div>
                <div className='md:w-[45%] lg:w-[50%] relative'>
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu 
                            overflow-hidden blur-3xl 
                            sm:top-[-20rem]"
                        aria-hidden="true">

                        <div
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none 
                        -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr 
                        from-sky-600 to-green-600 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className='h-[100%] flex flex-col'>
                        <h1 className='text-3xl  font-bold text-center pt-3 md:pt-1 lg:pt-[50px] my-[10px]'>Devoted to all our employees</h1>
                        <p className='text-lg md:text-lg lg:text-xl md:px-5 lg:px-[50px] mb-[40px]'>
                            At MEDITECH we believe there is strength in a diverse workforce, powered
                            by the contributions of people from different backgrounds, perspectives,
                            and life experiences. We are committed to fostering a work environment
                            and culture where all our staff members can reach their fullest potential.
                        </p>
                    </div>
                </div>
            </div>
            

            
        </>
    )
}

export default AboutLowerSection
