

const DaisyCard = ({title,image}) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center justify-center">
                    
                </div>
            </div>
        </div>
    )
}

export default DaisyCard
