import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';

const Teams = () => {
    return (
        <div className="h-[800px] mt-[180px]">
            <div className="py-[30px]">
                <h1 className='text-4xl text-center'>Team Leaders</h1>
            </div>
            <div className=" h-[800px] grid grid-cols-4 pt-[30px] px-[80px]">
                <div className=" rounded-[30px] pt-[20px] w-[300px] h-[370px]">
                    <div className='w-[250px] h-[250px] py-[10px] m-auto rounded-[50%]'>
                        <img className=' rounded-[50%] object-cover w-[100%] h-[100%]' src={person1} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-[30px]'>Full name</h1>
                        <p className='text-center text-[25px]'>title</p>
                    </div>
                </div>
                <div className=" rounded-[30px] pt-[20px] w-[300px] h-[370px]">
                <div className='w-[250px] h-[250px] py-[10px] m-auto rounded-[50%]'>
                        <img className=' rounded-[50%] object-cover w-[100%] h-[100%]' src={person2} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-[30px]'>Full name</h1>
                        <p className='text-center text-[25px]'>title</p>
                    </div>
                </div>
                <div className=" rounded-[30px] pt-[20px] w-[300px] h-[370px]">
                <div className='w-[250px] h-[250px] py-[10px] m-auto rounded-[50%]'>
                        <img className=' rounded-[50%] object-cover w-[100%] h-[100%]' src={person3} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-[30px]'>Full name</h1>
                        <p className='text-center text-[25px]'>title</p>
                    </div>
                </div>
                <div className=" rounded-[30px] pt-[20px] w-[300px] h-[370px]">
                <div className='w-[250px] h-[250px] py-[10px] m-auto rounded-[50%]'>
                        <img className=' rounded-[50%] object-cover w-[100%] h-[100%]' src={person4} alt="" />
                    </div>
                    <div>
                        <h1 className='text-center text-[30px]'>Full name</h1>
                        <p className='text-center text-[25px]'>title</p>
                    </div>
                </div>
                {/* downward team members */}
                <div className='flex  ml-[240px] gap-[70px]'>
                    <div className=" rounded-[30px] pt-[20px] w-[330px] h-[370px]">
                    <div className='w-[250px] h-[250px] py-[10px] m-auto rounded-[50%]'>
                            <img className=' rounded-[50%] object-cover w-[100%] h-[100%]' src={person3} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-[30px]'>Full name</h1>
                            <p className='text-center text-[25px]'>title</p>
                        </div>
                    </div>
                    <div className=" rounded-[30px] pt-[20px] w-[330px] h-[370px]">
                    <div className='w-[250px] h-[250px] py-[10px] m-auto rounded-[50%]'>
                            <img className=' rounded-[50%] object-cover w-[100%] h-[100%]' src={person4} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-[30px]'>Full name</h1>
                            <p className='text-center text-[25px]'>title</p>
                        </div>
                    </div>
                    <div className="  rounded-[30px] pt-[20px] w-[330px] h-[370px]">
                    <div className='w-[250px] h-[250px] py-[10px] m-auto rounded-[50%]'>
                            <img className=' rounded-[50%] object-cover w-[100%] h-[100%]' src={person2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-center text-[30px]'>Full name</h1>
                            <p className='text-center text-[25px]'>title</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Teams
