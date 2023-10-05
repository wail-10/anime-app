import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import axios from 'axios'
import Navbar from '../components/Navbar'
import CharacterCard from '../components/CharacterCard'
import Footer from '../components/Footer'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/characters')
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
                <h2 className="text-white text-3xl font-semibold mb-2 mt-6 pl-4 border-l-8 uppercase border-[#e53637]">All Characters</h2>
                    {characters.length ? (
                        <div className="container mx-auto mt-8 flex flex-wrap justify-center">
                            {characters.map((character, index) => (
                                <div key={index} className="m-4">
                                    <Link to={`/characters/${character.mal_id}`}>
                                        <CharacterCard
                                            imageUrl={character.images.jpg}
                                            name={character.name}
                                            favorites={character.favorites}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
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

export default Characters