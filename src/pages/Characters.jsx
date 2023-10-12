import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import { Pagination } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { BsSearch } from 'react-icons/bs'
import axios from 'axios'
import Navbar from '../components/Navbar'
import CharacterCard from '../components/CharacterCard'
import Footer from '../components/Footer'

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "#fff",
        },
        "& li .Mui-selected": {
            backgroundColor: "#e53637"
        },
    }
}));

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [pagination, setPagination] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const classes = useStyles();

    useEffect(() => {
        // axios.get(`https://api.jikan.moe/v4/characters?page=${currentPage}`)
        const pageEndpoint = search ? `https://api.jikan.moe/v4/characters?q=${search}&page=${currentPage}`:`https://api.jikan.moe/v4/characters?page=${currentPage}`
        axios.get(pageEndpoint)
        .then(res => {
            setCharacters(res.data.data)
            setLoading(true)
            setPagination(res.data.pagination)
        })
        .catch(err => console.log(err.response.data))
        .finally(() => {
            setLoading(false);
        })
    }, [pagination, currentPage, search])

    return (
        <>
            <Navbar />
            <div className='mt-[104px] py-8'>
                <div className='w-4/5 mx-auto'>
                    <h2 className="text-white text-3xl font-semibold mb-2 mt-6 pl-4 border-l-8 uppercase border-[#e53637]">All Characters</h2>
                    <div className="relative mt-4 md:ml-4">
                        <input
                            type="text"
                            id="search"
                            placeholder="Search"
                            className="pl-12 pr-4 py-2 w-full rounded-lg bg-white text-[#070720] placeholder:text-[#070720] focus:outline-none focus:ring focus:ring-[#070720]"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <BsSearch className="h-6 w-6 absolute left-2 top-2 text-[#070720]" />
                    </div>
                    {loading ? (
                        <div className='flex justify-center'>
                            <InfinitySpin 
                            width='200'
                            color="#e53637"
                            />
                        </div>
                    ) : (
                        <>
                        {characters.length ? (
                            <div className="container mx-auto mt-8">
                                <div className='grid grid-cols-5 gap-4'>
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
                                <div className='flex justify-center'>
                                    <Pagination 
                                        count={Math.ceil(pagination.items.total / pagination.items.per_page)} 
                                        size='large'
                                        showFirstButton showLastButton
                                        classes={{ ul: classes.ul }}
                                        page={currentPage}
                                        onChange={(event, value) => setCurrentPage(value)}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className='flex justify-center'>
                                <InfinitySpin 
                                    width='200'
                                    color="#e53637"
                                />
                            </div>
                        )}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Characters