import React from 'react'
import { PencilSquareIcon,HeartIcon,
    CheckBadgeIcon,
    GlobeEuropeAfricaIcon 
} from '@heroicons/react/20/solid'

const AboutMiddleDiv = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 my-32 gap-2 
            py-[10px]  w-full">
                <div className="w-[100%] h-full rounded-md shadow-md border border-blue-300">
                    <div className=" flex items-center justify-center mt-5 ml-5 
                    rounded-full w-14 h-14">
                        <GlobeEuropeAfricaIcon className="text-green-800 w-11 h-11" />
                    </div>
                    <h1 className="text-2xl mt-5 text-sky-600 text-center font-semibold">Empowering Faith, Expanding the Kingdom</h1>
                    <ul className="flex flex-col mt-2 gap-3 mx-[20px]">
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />Equip believers to confidently defend their faith through engaging apologetics training.</li>
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />Share the Gospel message with clarity and compassion, inspiring hearts to turn to Christ.</li>
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />Build vibrant Christian communities around the world, fulfilling the Great Commission</li>
                    </ul>
                </div>
                <div className="w-[100%] rounded-md shadow-md border border-blue-300">
                    <div className=" flex items-center justify-center mt-5 ml-5 rounded-full w-14 h-14">
                        <PencilSquareIcon className="text-blue-800 w-11 h-11" />
                    </div>
                    <h1 className="text-2xl mt-5 text-sky-600 text-center font-medium">Reason & Revelation</h1>
                    <ul className="flex flex-col mt-2 gap-3 mx-[20px]">
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                            Bridge the gap between faith and reason, fostering intellectual engagement with Christianity.
                        </li>
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                            Proclaim the transformative power of Jesus through culturally relevant missions endeavors.
                        </li>
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                            Ignite a movement of passionate Christ-followers, impacting lives for eternity.
                        </li>
                    </ul>
                </div>
                <div className="w-[100%] rounded-md shadow-md border border-blue-300">
                    <div className=" flex items-center justify-center mt-5 ml-5 rounded-full w-14 h-14">
                        <HeartIcon className="text-red-700 w-11 h-11" />
                    </div>
                    <h1 className="text-2xl mt-5 text-sky-600 text-center font-medium">Love. Truth. Transformation</h1>
                    <ul className="flex flex-col mt-2 gap-3 mx-[20px]">
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                            Cultivate a love for God that compels us to share His truth with the world.
                        </li>
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                            Share the Gospel message with clarity and compassion, inspiring hearts to turn to Christ.
                        </li>
                        <li className="flex gap-2 text-lg font-medium"><CheckBadgeIcon className="w-9 h-9  text-sky-500" />
                            Build vibrant Christian communities around the world, fulfilling the Great Commission
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMiddleDiv
