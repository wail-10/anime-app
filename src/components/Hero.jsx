import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import NarutoBanner from '../assets/naruto.jpg'
import OnepieceBanner from '../assets/onepiece.jpg'
import HunterBanner from '../assets/hunter.webp'

const Hero = () => {
    return (
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
        <img src={HunterBanner} alt="hero img" className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={NarutoBanner} alt="hero img" className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={OnepieceBanner} alt="hero img" className='w-full' />
        </SwiperSlide>
      </Swiper>
    )
}

export default Hero