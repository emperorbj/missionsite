

const NewsLetters = () => {
    return (
        <div className=" mt-20 mx-4 border border-primary rounded-md flex items-center h-[350px] justify-center bg-transparent backdrop-filter backdrop-blur-md shadow-lg">
            <div>
                <h1 className="text-4xl mb-[20px] text-primary font-semibold">Subscribe to Our Newsletter</h1>
                <div className="flex gap-2">
                    <input className="w-[80%] rounded-[5px] text-center" type="email" placeholder="Enter your email address" />
                    <button className="py-[10px] shadow-xl text-lg hover:bg-gradient-to-r from-green-500 to-sky-500 text-white font-semibold rounded-[5px] px-10 bg-sky-600">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetters