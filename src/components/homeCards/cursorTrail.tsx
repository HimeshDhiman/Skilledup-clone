import React from 'react'
import ImageCursorTrail from '../ui/image-cursortrail'

const cursorTrail = () => {

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",

]
  return (
    <div className="container mx-auto px-4">
  <ImageCursorTrail
    items={images}
    maxNumberOfImages={5}
    distance={25}
    imgClass="sm:w-40 w-28 sm:h-48 h-36"
    className="max-w-4xl rounded-3xl"
  >

    <article className="relative z-50 flex flex-col items-center justify-center ">
            <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
              Some Glimpse of SkilledUp
            </h1>
          </article>
  </ImageCursorTrail>
</div>
  )
}

export default cursorTrail
