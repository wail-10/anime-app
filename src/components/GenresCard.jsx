import React from 'react'

const GenresCard = ({ genre }) => {
    return (
        <div className="bg-[#e53637] text-white uppercase rounded-lg shadow-md p-4 mx-2 my-5">
            {/* Content for Genre Card */}
            <h2 className="text-xl font-semibold">{genre}</h2>
            {/* Additional information about the genre */}
        </div>
    )
}

export default GenresCard