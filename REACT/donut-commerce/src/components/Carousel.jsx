import React, { useState } from 'react';
import Slider from 'react-slick';
import { data } from '../api/data';
import arrow from '../images/arrow.png'
import { Card } from './Card';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import useShop from '../context/cart/ShopContext';

export const Carousel = () => {

    // const [selectedIndex, setSelectedIndex] = useState(0);
    // const [selectedCard, setSelectedCard] = useState(x[0]);

    // const selectNewCard = (index, card, next = true) => {
    //     const condition = next ? selectedIndex < x.length : selectedIndex > 0
    //     const nextIndex = 
    //         next ? condition ? selectedIndex + 1 : 0
    //         : condition ? selectedIndex - 1 : x.length - 1
    //     setSelectedCard(x[nextIndex])
    //     setSelectedIndex(nextIndex)
    // }


    // const previous = () => {
    //     selectNewCard(selectedIndex, selectedCard, false)

    // }

    // const next = () => {
    //     selectNewCard(selectedIndex, selectedCard)
    // }

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


    var settings = {
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
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                
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


    const { addToCart } = useShop()



    const handleClick = (card) => {
    
      addToCart(card)

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
                            <button className='blueButton' onClick={() => handleClick(card)} >ADD TO CART</button>
                    </div>))
            }

        </Slider>

    </div>
)
};

