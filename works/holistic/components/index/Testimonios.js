import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";


import random1 from '../../assets/images/random1.jpg'
import random2 from '../../assets/images/random2.jpg'
import random3 from '../../assets/images/random3.jpg'
import { testimonios } from '../tienda/data';
import { TestimonioPersona } from './TestimonioPersona';


export const Testimonios = () => {

  const settings = {
    focusOnSelect: true,

    dots:true,
    infinite: true,
    lazyLoad:true,
    speed: 300,
    slidesToShow: 3,
    // appendDots: dots => (
    //   <div>
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div>
    //     <div className='bg-lightAccent-100 h-5 rounded-full hover:bg-purpleAccent focus:bg-darkAccent-200' />
    //   </div>
    // ),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
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

}





  return (
    <div className='md:pb-40'>
      <h1 className='text-6xl md:text-9xl font-bold text-lightTitles dark:text-darkTitles mb-20 select-none'>Testimonios</h1>
        
        <Slider {...settings} className="md:px-48 md:flex md:justify-center md:items-center md:pt-10 " >

          {
            testimonios && testimonios.map(testimonio => <div key={testimonio.id}><TestimonioPersona testimonio={testimonio}  /> </div>)
          }
          {
            testimonios && testimonios.map(testimonio => <div key={testimonio.id}><TestimonioPersona testimonio={testimonio}  /> </div>)
          }

        </Slider>
    </div>
  )
}
