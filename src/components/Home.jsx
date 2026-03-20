import React from 'react'
import Hero from './Hero'
import Programs from './Programs'
import Testimonials from './Testimonials'
import Teams from './Teams'
import Questions from './Questions'
import Pillars from './Pillars'
import Explorecourse from './Explorecourse'
import CorporateWellnessPrograms from './CorporateWellnessPrograms'
import CommunitySection from './CommunitySection'

function Home() {

  return (
    <>
      <Hero />
      <Pillars />
      <Programs />
      <Explorecourse />
      <CorporateWellnessPrograms />
      <Testimonials />
      <Teams />
      <CommunitySection />
      <Questions />
    </>
  )
}

export default Home
