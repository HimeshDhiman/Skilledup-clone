'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import WrapButton from '../ui/wrap-button'
import ImageRippleDemo from '@/components/homeCards/ImageRippleDemo'



const CorporateTraining = () => {
  return (
    // <div className="w-full py-12 px-4 text-center flex f">
    //   <h2 className="text-2xl font-bold">Elevate Corporate Training</h2>

    //   <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
    //     <ul className="space-y-3 text-sm">
    //       <li>📈 Industry-Aligned Training For Growth</li>
    //       <li>🎯 Tailored Programs To Meet Industry Needs</li>
    //       <li>🖥️ In-Person, Virtual, And Pre-Recorded Options</li>
    //       <li>📅 Flexible Learning To Fit Your Schedule</li>
    //       <li>⚙️ Easy Learning For Both Tech & Non-Tech</li>
    //     </ul>

      
    //   </div>
    //    <div>
    //     <img className='' src="/images/logo.jpg" alt="" />
    //    </div>

    //  <WrapButton className='mt-5'>
    //     Request a free Demo
    //  </WrapButton>
    // </div>
    

<>
<h2 className=" text-center text-3xl  font-bold my-10">Elevate Corporate Training</h2>

<div className='w-full h-120 py-12 px-8 text-center      flex flex-basis:50% justify-between '>
     <div className='flex '>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
         <ul className="space-y-8 text-lg">
           <li>📈 Industry-Aligned Training For Growth</li>

           <li>🎯 Tailored Programs To Meet Industry Needs</li>
           <li>🖥️ In-Person, Virtual, And Pre-Recorded Options</li>
           <li>📅 Flexible Learning To Fit Your Schedule</li>
           <li>⚙️ Easy Learning For Both Tech & Non-Tech</li>
         </ul>

         <WrapButton className='mt-5'>
         Request a free Demo
      </WrapButton>

      
    </div>
     </div>



     <div>
      <img className='' src="/images/logo.jpg" alt="" />  
     </div>
</div>

</>
  )
}

export default CorporateTraining
