import React, {useState} from 'react'
import { productos } from './data'
import { Producto } from './Producto'
import { useRouter } from 'next/router'
import Slider from 'react-slick'


export const Productos = ({products}) => {

  const router = useRouter()


  const [cant, setCant] = useState({
    val: false,
    cant: 4
  })

  const handleClick = (slug) => {
    router.push(`/tienda/product/${slug}`)
   
  }

  const handleMas = () => {
    !cant.val ? setCant({val:true, cant:8}) : setCant({val:false, cant:4})
  }


  const settings = {
    
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots:false,
    speed: 8000,
    autoplaySpeed: 0,
    pauseOnHover: true,
    cssEase: "linear",
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
  };
  
  return (
    <>
    {/* <div className='flex justify-center flex-col items-center'>
    <div className='flex flex-wrap gap-5 justify-center'> */}
    {/* slice(0,cant.cant). */}
    <div className='w-full overflow-hidden'>
      <Slider {...settings}>
        {products.map(producto => <div key={producto.id} onClick={() => handleClick(producto.slug)} ><Producto data={producto} /></div>)}
      </Slider>
      </div>
    {/* </div>
      <p onClick={handleMas} className='mt-8 cursor-pointer dark:hover:text-lightTextSecondary transition ease duration-300 text-lg'>{cant.val ? 'Ver menos' : 'Ver más... '}</p>
    </div> */}
    </>
  )
}


