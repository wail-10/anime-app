import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { settings2 } from '../constants'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CharacterCard from '../components/CharacterCard'
import AnimeCard from '../components/AnimeCard'

const MangaDetails = () => {
    const { id } = useParams()
    const [manga, setManga] = useState(null)
    const [characters, setCharacters] = useState([])
    const [recommendations, setRecommendations] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/manga/${id}`)
        .then(res => {
            setManga(res.data.data)
        })
        .catch(err => console.log(err.response.data))
        // Characters
        axios.get(`https://api.jikan.moe/v4/manga/${id}/characters`)
        .then(res => {
            setCharacters(res.data.data)
        })
        .catch(err => console.log(err.response.data))
        // Recommendations
        axios.get(`https://api.jikan.moe/v4/manga/${id}/recommendations`)
        .then(res => {
            setRecommendations(res.data.data)
        })
        .catch(err => console.log(err.response.data))
    }, [id])

    return (
        <>
            <Navbar />
            <div className='mt-[104px] py-8'>
                <div className='w-4/5 mx-auto'>
                    {manga ? (
                        <>
                            <div className='flex flex-col lg:flex-row justify-between gap-28'>
                                {/* image box */}
                                <div className='w-full lg:w-1/3'>
                                    <img src={manga.images.jpg.large_image_url} alt={manga.title} className='rounded mx-auto text-center' />
                                </div>
                                {/* details box */}
                                <div className='w-full lg:w-2/3 p-10'>
                                    <h1 className='text-white text-center text-5xl font-bold'>{manga.title}</h1>
                                    <p className='text-gray-500 text-2xl text-center font-semibold my-2'>{manga.title_japanese} {manga.chapters && <>({anime.chapters} eps)</>}</p>
                                    {/* Genres */}
                                    <div className='text-center mt-4'>
                                        {manga.genres.map((genre) => (
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
                                        <p className='text-lg font-normal'>{manga.synopsis}</p>
                                    </div>
                                    {/* Details */}
                                    <div className='text-white my-8'>
                                        <ul className='text-xl'>
                                            <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Rank : </span><span className='text-gray-400'>#{manga.rank}</span></li>
                                            <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Score : </span><span className='text-gray-400'>{manga.score} / 10 ( Scored By : {manga.scored_by} )</span></li>
                                            <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Rating : </span><span className='text-gray-400'>{manga.rating}</span></li>
                                            <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Year : </span><span className='text-gray-400'>{manga.year}</span></li>
                                        </ul>
                                    </div>
                                    {/* Authors */}
                                    <div className='my-4 text-white'>
                                        <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 border-[#e53637] my-3'>Authors</h2>
                                        <div className='my-5'>
                                            {manga.authors.map(author => (
                                                <Link 
                                                key={author.mal_id} 
                                                to={author.url}
                                                className='p-3 bg-gray-500 font-semibold rounded mx-2'
                                                >
                                                    {author.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Characters */}
                            <div className='my-4'>
                                <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 text-white border-[#e53637] my-3'>characters</h2>
                                    {characters ? (
                                        <Slider {...settings2}>
                                            {characters.map((character, index) => (
                                                <Link to={`/characters/${character.character.mal_id}`} key={index} className='mt-8'>
                                                    <CharacterCard
                                                        imageUrl={character.character.images.jpg}
                                                        name={character.character.name}
                                                    />
                                                </Link>
                                            ))}
                                        </Slider>
                                    ):(
                                        <div className='flex justify-center'>
                                            <InfinitySpin 
                                                width='200'
                                                color="#e53637"
                                            />
                                        </div>
                                    )}
                            </div>
                            {/* Recommendations */}
                            <div className='my-4'>
                                <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 text-white border-[#e53637] my-3'>recommendations</h2>
                                {recommendations ? (
                                        <Slider {...settings2}>
                                            {recommendations.map((recommendation, index) => (
                                                <Link to={`/anime/${recommendation.entry.mal_id}`} key={index} className='mt-8'>
                                                    <AnimeCard
                                                        imageUrl={recommendation.entry.images.jpg}
                                                        title={recommendation.entry.title}
                                                    />
                                                </Link>
                                            ))}
                                        </Slider>
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
                    ):(
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

export default MangaDetails