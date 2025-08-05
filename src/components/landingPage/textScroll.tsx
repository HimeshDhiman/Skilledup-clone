import React from 'react'
import { TextScroll } from '../ui/text-scroll'

const textScroll = () => {
  return (
    <div className='mt-12'>
       <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-6xl md:leading-[5rem]"
      text="Skilled Up "
      default_velocity={5}
    />
    </div>
  )
}

export default textScroll
