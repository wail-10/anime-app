import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner'
import { Pagination } from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import Navbar from '../components/Navbar'
import AnimeCard from '../components/AnimeCard'
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

const Manga = () => {
    const [mangas, setMangas] = useState([])
    const [pagination, setPagination] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        // top animes
        axios.get(`https://api.jikan.moe/v4/manga?page=${currentPage}`)
        .then(res => {
            setMangas(res.data.data)
            setLoading(true)
            setPagination(res.data.pagination)
        })
        .catch(err => console.log(err.response.data))
        .finally(() => {
            setLoading(false);
        })
    }, [pagination, currentPage])

    return (
        <>
            <Navbar />
            <div className='mt-[104px] py-8'>
                <div className='w-4/5 mx-auto'>
                    <h2 className="text-white text-3xl font-semibold mb-2 mt-6 pl-4 border-l-8 uppercase border-[#e53637]">All Mangas</h2>
                    {loading ? (
                        <div className='flex justify-center'>
                            <InfinitySpin 
                            width='200'
                            color="#e53637"
                            />
                        </div>
                    ) : (
                        <>
                            {mangas.length ? (
                            <div className="container mx-auto mt-8">
                                <div className="flex flex-wrap -mx-4">
                                    {mangas.map((manga, index) => (
                                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 my-4">
                                            <Link to={`/manga/${manga.mal_id}`}>
                                                <AnimeCard 
                                                    imageUrl={manga.images.jpg}
                                                    score={manga.score}
                                                    title={manga.title}
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
                            ): (
                                <div className='flex justify-center'>
                                    <InfinitySpin 
                                        width='200'
                                        color="#e53637"
                                    />
                                </div>
                            )}
                        </>
                    )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Manga