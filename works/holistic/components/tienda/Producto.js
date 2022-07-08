import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ImageUrlBuilder  from '@sanity/image-url'
import { urlForThumbnail } from 'utils/image'




export const Producto = ({data}) => {


const [srcImg, setSrcImg] = useState(null)

useEffect(() => {

    const imageBuilder = ImageUrlBuilder({
      projectId: 'sj8djt35',
      dataset: 'production'
    })
    
  
    setSrcImg(imageBuilder.image(data.image.asset))

},[data.image])


  return (
    <div key={data.slug} className="w-[400px]  bg-darkAccent-100 cursor-pointer">
    {/* {
      srcImg && <img src={srcImg} alt={data.slug}  />
    } */}
      
    <Image src={urlForThumbnail(data.image)} height={400} width={400} layout="responsive" />




      <div className='bg-lightTitles dark:bg-lightBlack flex py-2 flex-col justify-center text-center'>
        <h3 className='md:text-3xl'>{data.name}</h3>
        <p className='md:text-xl'>${data.price}</p>
      </div>
    </div>
  )
}
