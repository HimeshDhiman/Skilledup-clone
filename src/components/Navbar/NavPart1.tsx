'use client'
import { Bell, CircleEllipsis, Ellipsis, Home, Settings } from 'lucide-react'
import React from 'react'
import { ExpandedTabs } from '../ui/expanded-tabs'

const NavPart1 = () => {


  const tabs = [
    { title: "Home", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" as const },
    { title: "Settings", icon: Settings },
    { title: "More", icon: CircleEllipsis },

  ]


  return (
    <div className='p-6 rounded-2xl shadow-[0_0_20px_#00000033] dark:shadow-[0_0_20px_#ffffff33] flex items-center gap-4'>




        <a href="https://skilledup.tech/" className=' flex items-center gap-2'>
            <img src="https://skilledup.tech/assets/img/logo.png" alt="" />
            <h4 className='font-bold text-lg'></h4>
        </a>
       <ExpandedTabs tabs={tabs} />

        {/* <a href="#" className='text-muted-foreground hover:text-foreground  text-m' >Cources</a>
        <a href="#" className='text-muted-foreground hover:text-foreground  text-m' >Internship</a>
        <a href="#" className='text-muted-foreground hover:text-foreground  text-m' >For Corporate</a> */}
    </div>
  )
}

export default NavPart1
