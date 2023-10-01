import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CharacterImage from '../components/CharacterImage'

const AnimeDetails = () => {
    const {id} = useParams()
    const [anime, setAnime] = useState(null)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        .then(res => {
            console.log(res.data.data)
            setAnime(res.data.data)
        })
        .catch(err => console.log(err.response.data))
        // Characters
        axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
        .then(res => {
            console.log(res.data.data)
            setCharacters(res.data.data)
        })
        .catch(err => console.log(err.response.data))
    }, [id])

    return (
        <>
            <Navbar />
            <div className='mt-[104px] py-8'>
                <div className='w-4/5 mx-auto'>
                    {anime ? (
                        <>
                        <div className='flex flex-col lg:flex-row justify-between gap-28'>
                            {/* image box */}
                            <div className='w-full lg:w-1/3'>
                                <img src={anime.images.jpg.large_image_url} alt={anime.title} className='rounded mx-auto text-center' />
                            </div>
                            {/* details box */}
                            <div className='w-full lg:w-2/3 p-10'>
                                <h1 className='text-white text-center text-5xl font-bold'>{anime.title}</h1>
                                <p className='text-gray-500 text-2xl text-center font-semibold my-2'>{anime.title_japanese} {anime.episodes && <>({anime.episodes} eps)</>}</p>
                                {/* Genres */}
                                <div className='text-center mt-4'>
                                    {anime.genres.map((genre) => (
                                    <span
                                        key={genre.mal_id}
                                        className='bg-gray-200 px-2 py-1 rounded text-lg text-gray-600 mr-2'
                                        >
                                        {genre.name}
                                    </span>
                                    ))}
                                </div>
                                {/* Story */}
                                <div className='my-4 text-white'>
                                    <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 border-[#e53637] my-3'>Overview</h2>
                                    <p className='text-lg font-normal'>{anime.synopsis}</p>
                                </div>
                                {/* Details */}
                                {/* <p className='text-white'>Score: {anime.score} / 10</p> */}
                                <div className='text-white my-8'>
                                    <ul className='text-xl'>
                                        <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Rank : </span><span className='text-gray-400'>#{anime.rank}</span></li>
                                        <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Score : </span><span className='text-gray-400'>{anime.score} / 10 ( Scored By : {anime.scored_by} )</span></li>
                                        <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Rating : </span><span className='text-gray-400'>{anime.rating}</span></li>
                                        <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Year : </span><span className='text-gray-400'>{anime.year}</span></li>
                                    </ul>
                                </div>
                                {/* Studios */}
                                <div className='my-4 text-white'>
                                    <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 border-[#e53637] my-3'>Studios</h2>
                                    <div className='my-5'>
                                        {anime.studios.map(studio => (
                                            <Link 
                                            key={studio.mal_id} 
                                            to={studio.url}
                                            className='p-3 bg-gray-500 font-semibold rounded'
                                            >
                                                {studio.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Characters */}
                        <div className='my-4'>
                            <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 text-white border-[#e53637] my-3'>top characters</h2>
                                {characters ? (
                                    <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                        {characters.map(character => (                                                        
                                            <CharacterImage
                                                imageUrl={character.character.images.jpg.image_url}
                                                name={character.character.name}
                                                favorites={character.favorites}
                                                key={character.character.mal_id}
                                            />
                                        ))}
                                    </div>
                                ):(
                                    <div className='flex justify-center'>
                                        <InfinitySpin 
                                            width='200'
                                            color="#e53637"
                                        />
                                    </div>
                                )}
                        </div>
                        </>
                    ): (
                        <div className='flex justify-center'>
                            <InfinitySpin 
                                width='200'
                                color="#e53637"
                            />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AnimeDetails