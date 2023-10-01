import React from 'react'

const AnimeCard = ({ imageUrl, score, genres, title }) => {
    return (
        <div className='max-w-xs rounded-lg shadow-md mx-2'>
            <div className="relative">
                {/* Image  */}
                <div>
                    <img src={imageUrl.image_url} alt={title} className="w-full h-[400px] object-cover rounded-lg" />
                </div>
                {/* Score  */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-[#070720] text-center w-[100px] font-bold px-2 py-1 rounded">
                    {score} / 10
                </div>
            </div>

            {/* Genres */}
            <div className="flex justify-center items-center flex-wrap gap-2 p-2">
                {genres.map((genre) => (
                <span
                    key={genre.mal_id}
                    className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-600"
                >
                    {genre.name}
                </span>
                ))}
            </div>

            {/* Title */}
            <div className="p-2 text-center">
                <h2 className="text-xl font-bold text-white uppercase">{title}</h2>
            </div>
        </div>
    )
}

export default AnimeCard