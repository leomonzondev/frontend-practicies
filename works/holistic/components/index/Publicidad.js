import React from 'react'
import Slider from "react-slick";
import { BannerCursos } from './publicidad/BannerCursos';
import { BannerTienda } from './publicidad/BannerTienda';


export const Publicidad = () => {

    const settings = {

        
        infinite: true,
        arrows:false,
        dots: false,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
        cssEase: "linear"
      };

  return (
    <div className='mb-10'>
        <Slider {...settings}>

            <BannerCursos />
            <BannerTienda />

        </Slider>
    </div>
  )
}
