import React, { useState } from 'react';
import Slider from 'react-slick';
import { data } from '../api/data';
import arrow from '../images/arrow.png'
import { Card } from './Card';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import useShop from '../context/cart/ShopContext';

export const Carousel = () => {
  
  const { addToCart } = useShop()
  
  const NextArrow = ({onClick}) => {
      return (
          <div className='arrow next' onClick={onClick}><FaArrowRight /></div>
      )
  }

  const PrevArrow = ({onClick}) => {
      return (
          <div className='arrow prev' onClick={onClick}><FaArrowLeft /></div>
      )
  }



  const settings = {
      focusOnSelect: true,
      className: 'center',

      infinite: true,
      lazyLoad:true,
      speed: 300,
      slidesToShow: 3,
      centerMode:true,
      centerPadding:0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
    <div className='slider'>
        {/* <button  className='slider__arrow__btn'><img src={arrow} alt='' className='slider__left img__arrow' /> </button>
        <Card />
        <button className='slider__arrow__btn'><img src={arrow} alt='' className='slider__right img__arrow' /> </button> */}

        <Slider {...settings}>
            {
                data.map(( card ) => (
                    <div key={card.id}>
                        <Card
                            img={card.img}
                            favorite={card.favorite}
                            title={card.title}
                            price={card.price}
                            />
                            <button className='blueButton' onClick={() => addToCart(card)}> ADD TO CART</button>
                    </div>))
            }

        </Slider>

    </div>
)
};

