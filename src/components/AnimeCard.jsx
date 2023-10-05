import React from 'react'

const AnimeCard = ({ imageUrl, score, title }) => {
    return (
        <div className='max-w-xs rounded-lg shadow-md mx-2'>
            <div className="relative">
                {/* Image  */}
                <div>
                    <img src={imageUrl.image_url} alt={title} className="w-full h-[400px] object-cover rounded-lg" />
                </div>
                {/* Score  */}
                {score && 
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-[#070720] text-center w-[100px] font-bold px-2 py-1 rounded">
                        {score} / 10
                    </div>
                }
            </div>

            {/* Title */}
            <div className="p-2 text-center">
                <h2 className="text-xl font-bold text-white uppercase">{title}</h2>
            </div>
        </div>
    )
}

export default AnimeCard