import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const CardCarouselParent = () => {

  const images=[
    {src:"/images/card5.avif" , alt:"img1"},
    {src:"/images/card4.avif" , alt:"img2"},
    {src:"/images/card6.avif" , alt:"img3"}


  ]



  return (
    <div className='m-10'>
      <CardCarousel  images={images}/>
    </div>
  )
}

export default CardCarouselParent
