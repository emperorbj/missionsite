

const team = [
    {
        id: 1,
        name: "Mr. Ayorinde Daniel",
        role: "President",
        image: "/profile4.jpg"

    },
    {
        id: 2,
        name: "Oladokun Rachel",
        role: "Head of Communications",
        image: "/profile1.jpg"

    },
    {
        id: 3,
        name: "Adeoba Adejuwon",
        role: "Head of Missions and Outreach",
        image: "/juwon.jpg",

    },
    {
        id: 4,
        name: "Oluchi Favour",
        role: "General Secretary",
        image: "/profile2.jpg"

    },
    {
        id: 5,
        name: "Opatola Bolaji",
        role: "Training Facilitator",
        image: "/bj.jpg"

    },
    {
        id: 6,
        name: "Mrs. Daniel Moyinoluwa",
        role: "Head of Prayer Department",
        image: "/moyin.jpg",

    },
]

const Teams = () => {
    return (
        <div className="bg-white py-24 sm:py-32 mx-3 md:mx-[60px] mt-[20px] rounded-[10px]">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                </p>
            </div>
            <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {team.map((person) => (
                    <li key={person.id}>
                        <div className="flex items-center gap-x-6">
                            <img className="h-20 w-20 rounded-full object-cover " src={person.image} alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-blue-500">{person.role}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default Teams
