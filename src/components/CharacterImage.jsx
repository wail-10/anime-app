import React, {useState, useEffect} from 'react'

const CharacterImage = ({ imageUrl, name, favorites }) => {
    return (
        <div className="bg-white border rounded-lg shadow-md p-4 w-64">
            <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">Favorites: {favorites}</p>
        </div>
    )
}

export default CharacterImage