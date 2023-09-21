import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenresCard from './GenresCard';

const Carousel = () => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/genres/anime')
        .then(res => {
            setGenres(res.data.data)
        })
        .catch(err => console.log(err.response.data))
    }, [])
    
    var settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {genres.map((genre, index) => (
                <GenresCard key={index} genre={genre.name} />
            ))}
        </Slider>
    )
}

export default Carousel