import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { settings1, settings2 } from '../constants'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import AnimeCard from '../components/AnimeCard'
import CharacterCard from '../components/CharacterCard'
import Footer from '../components/Footer'

const Home = () => {

    const [animes, setAnimes] = useState([])
    const [mangas, setMangas] = useState([])
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        // top animes
        axios.get('https://api.jikan.moe/v4/top/anime')
        .then(res => {
            setAnimes(res.data.data)
        })
        .catch(err => console.log(err.response.data))

        // top mangas
        axios.get('https://api.jikan.moe/v4/top/manga')
        .then(res => {
            setMangas(res.data.data)
        })
        .catch(err => console.log(err.response.data))
        
        // top characters
        axios.get('https://api.jikan.moe/v4/top/characters')
        .then(res => {
            setCharacters(res.data.data)
        })
        .catch(err => console.log(err.response.data))
    }, [])

    return (
        <>
            <Navbar />
            <div className='mt-[104px] py-8'>
                <div className='w-4/5 mx-auto'>
                    <Hero />
                    {/* <h2 className="text-white text-3xl font-semibold mb-2 mt-6 pl-4 border-l-8 uppercase border-[#e53637]">Anime Genres</h2> */}
                    {/* <Carousel /> */}
                    {/* Top Animes */}
                    <h2 className="text-white text-3xl font-semibold mb-2 mt-6 pl-4 border-l-8 uppercase border-[#e53637]">Top Animes</h2>
                    {animes.length ? (
                    // <div className="container mx-auto mt-8">
                    //     <div className="flex flex-wrap -mx-4">
                    //         {animes.map((anime, index) => (
                    //             <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 my-4">
                                    // <Link to={`/anime/${anime.mal_id}`}>
                                    //     <AnimeCard 
                                    //         imageUrl={anime.images.jpg}
                                    //         score={anime.score}
                                    //         genres={anime.genres}
                                    //         title={anime.title}
                                    //     />
                                    // </Link>
                    //             </div>
                    //         ))}
                    //     </div>
                    // </div>
                    <Slider {...settings1}>
                        {animes.map((anime, index) => (
                            <Link to={`/anime/${anime.mal_id}`} key={index} className='mt-8'>
                                <AnimeCard 
                                    imageUrl={anime.images.jpg}
                                    score={anime.score}
                                    genres={anime.genres}
                                    title={anime.title}
                                />
                            </Link>
                        ))}
                    </Slider>
                    ): (
                        <div className='flex justify-center'>
                            <InfinitySpin 
                                width='200'
                                color="#e53637"
                            />
                        </div>
                    )}
                    {/* Top Manga */}
                    <h2 className="text-white text-3xl font-semibold mb-2 mt-6 pl-4 border-l-8 uppercase border-[#e53637]">Top Mangas</h2>
                    {mangas.length ? (
                        // <div className="container mx-auto mt-8">
                        //     <div className="flex flex-wrap -mx-4">
                        //         {mangas.map((manga, index) => (
                        //             <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 my-4">
                        //                 <Link to={`/mangas/${manga.mal_id}`}>
                        //                     <AnimeCard 
                        //                         imageUrl={manga.images.jpg}
                        //                         score={manga.score}
                        //                         genres={manga.genres}
                        //                         title={manga.title}
                        //                         id={manga.mal_id}
                        //                     />
                        //                 </Link>
                        //             </div>
                        //         ))}
                        //     </div>
                        // </div>
                        <Slider {...settings1}>
                            {mangas.map((manga, index) => (
                                <Link to={`/mangas/${manga.mal_id}`} key={index} className='mt-8'>
                                    <AnimeCard 
                                        imageUrl={manga.images.jpg}
                                        score={manga.score}
                                        genres={manga.genres}
                                        title={manga.title}
                                    />
                                </Link>
                            ))}
                        </Slider>
                    ) : (
                        <div className='flex justify-center'>
                            <InfinitySpin 
                                width='200'
                                color="#e53637"
                            />
                        </div>
                    )}
                    {/* Top Characters */}
                    <h2 className="text-white text-3xl font-semibold mb-2 mt-6 pl-4 border-l-8 uppercase border-[#e53637]">Top Characters</h2>
                    {characters.length ? (
                        // <div className="container mx-auto mt-8 flex flex-wrap justify-center">
                        //     {characters.map((character, index) => (
                        //         <div key={index} className="m-4">
                        //             <Link to={`/characters/${character.mal_id}`}>
                        //                 <CharacterCard
                        //                     imageUrl={character.images.jpg}
                        //                     name={character.name}
                        //                 />
                        //             </Link>
                        //         </div>
                        //     ))}
                        // </div>
                        <Slider {...settings2}>
                            {characters.map((character, index) => (
                                <Link to={`/characters/${character.mal_id}`} key={index} className='mt-8'>
                                    <CharacterCard
                                        imageUrl={character.images.jpg}
                                        name={character.name}
                                    />
                                </Link>
                            ))}
                        </Slider>
                    ) : (
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

export default Home