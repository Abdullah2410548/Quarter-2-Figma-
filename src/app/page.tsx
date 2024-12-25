import React from 'react'
import Hero from './components/Hero'
import CompanyLogo from './components/Companylogo'
import OurProducts from './components/OurProducts'
import SecondProducts from './components/SecondProducts'
import FeaturedProduct from './components/FeaturedProduct'
import TopCategories from './components/TopCategories'






const Home = () => {
  return (
    <div>
      <Hero />
      <CompanyLogo />
      <FeaturedProduct />
      <TopCategories />
      <SecondProducts/>
      <OurProducts />
      
      
     
    </div>
  )
}

export default Home


