import React from 'react'

const CharacterCard = ({ imageUrl, name, favorites }) => {
    return (
        <div className="relative max-w-xs mx-2">
            <div className="w-full h-80 relative">
                <img
                    src={imageUrl.image_url}
                    alt={name}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">{name}</h3>
                <span className="text-white text-sm mt-1">Favorites: {favorites}</span>
            </div>
        </div>
    )
}

export default CharacterCard