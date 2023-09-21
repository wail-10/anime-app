import React from 'react'

const CharacterCard = ({ imageUrl, name }) => {
    return (
        <div className="relative max-w-xs">
            <img src={imageUrl.image_url} alt={name} className="w-full max-h-80 rounded-lg" />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">{name}</h3>
            </div>
        </div>
    )
}

export default CharacterCard