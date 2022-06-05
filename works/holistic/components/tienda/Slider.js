import React from 'react'
import banner from 'assets/images/banner1.jpg'
import Image from 'next/image'


export const Slider = () => {
  return (
    <div className='w-full h-[700px] flex relative overflow-hidden bg-darkTitles'>
   
        <Image src={banner} alt="banner" width={1000} height={1200} layout="fill"  />


    </div>
  )
}
