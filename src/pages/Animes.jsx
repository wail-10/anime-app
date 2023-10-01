import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import axios from 'axios'
import Navbar from '../components/Navbar'
import AnimeCard from '../components/AnimeCard'
import Footer from '../components/Footer'

const Animes = () => {
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        // top animes
        axios.get('https://api.jikan.moe/v4/anime')
        .then(res => {
            setAnimes(res.data.data)
        })
        .catch(err => console.log(err.response.data))
    }, [])

    return (
        <>
            <Navbar />
            <div className='mt-[104px] py-8'>
                <div className='w-4/5 mx-auto'>
                    <h2 className="text-white text-3xl font-semibold mb-2 mt-6 pl-4 border-l-8 uppercase border-[#e53637]">All Animes</h2>
                    {animes.length ? (
                    <div className="container mx-auto mt-8">
                        <div className="flex flex-wrap -mx-4">
                            {animes.map((anime, index) => (
                                <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 my-4">
                                    <Link to={`/anime/${anime.mal_id}`}>
                                        <AnimeCard 
                                            imageUrl={anime.images.jpg}
                                            score={anime.score}
                                            genres={anime.genres}
                                            title={anime.title}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
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

export default Animes