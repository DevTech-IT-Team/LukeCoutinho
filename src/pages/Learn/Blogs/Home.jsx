import React from 'react'
import Hero from './Hero'
import Popularpicks from './Popularpicks'
import Category from './Category'
import Justin from './Justin'
import WholesomeRecipes from './WholesomeRecipes'
import BlogBottomCTA from '../../../components/BlogBottomCTA'

function Home() {

  return (
    <>
      <Hero />
      <Popularpicks />
      <Category />
      <Justin />
      <WholesomeRecipes />
      <BlogBottomCTA />
    </>
  )
}

export default Home;
