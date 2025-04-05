import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import FeaturedProducts from '../components/featuredProducts'
import Footer from '../components/Footer'
const home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedProducts />
            <Footer/>
        </>
  )
}

export default home