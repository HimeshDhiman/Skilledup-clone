import React from 'react'
import { ThemeProvider } from '../ui/theme-provider'

const NavPart1 = () => {
  return (
    <div className='flex items-center gap-4'>
        <a href="https://skilledup.tech/" className=' flex items-center gap-2'>
            <img src="https://skilledup.tech/assets/img/logo.png" alt="" />
            <h4 className='font-bold text-lg'></h4>
        </a>
        <a href="#" className='text-muted-foreground hover:text-foreground  text-m' >Cources</a>
        <a href="#" className='text-muted-foreground hover:text-foreground  text-m' >Internship</a>
        <a href="#" className='text-muted-foreground hover:text-foreground  text-m' >For Corporate</a>
    </div>
  )
}

export default NavPart1
