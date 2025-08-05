import Navbar from '@/components/Navbar/Navbar'
import { Home } from 'lucide-react'
import React from 'react'
import HeroContent from '@/components/landingPage/heroContent' 
import SpecialCard from '@/components/homeCards/specialCard'
import TextScroll from '@/components/landingPage/textScroll' 
import TemplateCard from '@/components/homeCards/TemplateCard'
import CardCarousel from '@/components/homeCards/cardCarouselParent'
import Marque from '@/components/homeCards/marque'
import CorporateTraining from '@/components/homeCards/CorporateTraining'
import AlumniMarquee from '@/components/homeCards/aluminiMarque'
import Feedback from '@/components/homeCards/Feedback'
import Footer from '@/components/homeCards/footer'



const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent/>
      <TextScroll/>
      <SpecialCard/>
      <TemplateCard/>
      <CardCarousel/>
      <Marque/>
      <CorporateTraining/>
      <AlumniMarquee/>
      <Feedback/>
      <Footer/>

    </div>
  )
}

export default page
