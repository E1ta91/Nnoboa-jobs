import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../hero'
import Categories from './categories'
import RecentJobs from './recentJobs'
import Testimonials from './testimonials'
import Member from './member'
import Footer from '../components/footer'










const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Categories/>
        <RecentJobs/>
        <Testimonials/>
        <Member/>
        <Footer/>
     

        





        
        
    
    
    </div>
  )
}

export default Home