import React, { useEffect, useRef, useState } from 'react'
import { useObserver } from './hooks/useObserver'
import './imgComponent.css'


export const ImgComponent = ({ image, isLast, nextPage }) => {

    const [imageUrl, setImageUrl] = useState('')

    const [isVisible, setIsVisible] = useState(false)

    const imgRef = useRef()

    const entry = useObserver(imgRef)
    const animatedEntry = useObserver(imgRef)

    useEffect(() => {
        if(!entry) return
        if(isLast && entry.isIntersecting) {
            setIsVisible()
            console.log('last viewed')
            nextPage()
        }
        if (entry.isIntersecting) {
            setImageUrl(entry.target.dataset.src)
        }

    },[entry, isLast])

    useEffect(() => {
        if (animatedEntry?.isIntersecting) {
            setIsVisible(true)
        }

    },[animatedEntry])

    const classImg = `image ${isVisible}`


  return (
    <div  style={{ minHeight: 100 }}>
        <img 
            className={`image ${isVisible ? 'show' : '' } `}
            ref={imgRef}
            src={imageUrl}
            data-src={`${image.download_url}.jpg`}
            alt={image.author}
            width="200"
        />
    </div>
  )
}
