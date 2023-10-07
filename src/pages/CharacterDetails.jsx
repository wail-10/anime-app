import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import Slider from 'react-slick'
import { settings2 } from '../constants'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VoiceActorCard from '../components/VoiceActorCard'

const CharacterDetails = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [images, setImages] = useState([])
    const [voiceActors, setVoiceActors] = useState([])

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/characters/${id}`)
        .then(res => {
            setCharacter(res.data.data)
        })
        .catch(err => console.log(err.response.data))
        // Character Images
        axios.get(`https://api.jikan.moe/v4/characters/${id}/pictures`)
        .then(res => {
            setImages(res.data.data)
        })
        .catch(err => console.log(err.response.data))
        // Voice Actors
        axios.get(`https://api.jikan.moe/v4/characters/${id}/voices`)
        .then(res => {
            setVoiceActors(res.data.data)
        })
        .catch(err => console.log(err.response.data))
    }, [id])
    
    return (
        <>
            <Navbar />
            <div className='mt-[104px] py-8'>
                <div className='w-4/5 mx-auto'>
                    {character ? (
                        <>
                            <div className='flex flex-col lg:flex-row justify-between gap-28'>
                                {/* image box */}
                                <div className='w-full lg:w-1/3'>
                                    <img src={character.images.jpg.image_url} alt={character.name} className='rounded mx-auto text-center' />
                                </div>
                                {/* details box */}
                                <div className='w-full lg:w-2/3 p-10'>
                                    <h1 className='text-white text-center text-5xl font-bold'>{character.name}</h1>
                                    <p className='text-gray-500 text-2xl text-center font-semibold my-2'>{character.name_kanji}</p>
                                    {/* Story */}
                                    <div className='my-4 text-white'>
                                        <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 border-[#e53637] my-3'>about</h2>
                                        <p className='text-lg font-normal'>{character.about}</p>
                                    </div>
                                    {/* Details */}
                                    <div className='text-white my-8'>
                                        <ul className='text-xl'>
                                            <li className='pl-4 border-l-4 border-[#e53637] my-8'><span className='font-bold'>Favorites : </span><span className='text-gray-400'>{character.favorites}</span></li>
                                            {character.nicknames.length > 0 && 
                                                <li className='pl-4 border-l-4 border-[#e53637] my-8'>
                                                    <span className='font-bold'>Nicknames : </span>
                                                    <span className='text-gray-400'>
                                                        {character.nicknames.map((nickname, index) => (
                                                            <p key={index} className='inline'>{nickname+","}</p>
                                                        ))}
                                                    </span>
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Voice Actors */}
                            <div className='my-4'>
                                <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 text-white border-[#e53637] my-3'>voice actors</h2>
                                <Slider {...settings2}>
                                    {voiceActors.map((actor, index) => (
                                        <VoiceActorCard
                                            key={index}
                                            imgUrl={actor.person.images.jpg.image_url}
                                            name={actor.person.name}
                                            language={actor.language}
                                        />
                                    ))}
                                </Slider>
                            </div>
                            {/* Gallery */}
                            <div className='my-4'>
                                <h2 className='text-2xl uppercase font-bold pl-4 border-l-4 text-white border-[#e53637] my-3'>gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {images.map((image, index) => (
                                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                            <img src={image.jpg.image_url} alt={`Image ${index}`} className="w-full h-auto" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
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

export default CharacterDetails