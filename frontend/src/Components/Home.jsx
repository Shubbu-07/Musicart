import React from 'react'
import Navbar from './Navbar'
import bannerImg from '../Assets/image_5-removebg-preview 1.png'

const Home = () => {
  return (
    <div className='container'>
      <Navbar />

      <div className='banner'>
        <div className="banner-content">
        <h1>Grab upto 50% off on Selected headphones</h1>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Banner-Image" />
        </div>
      </div>
    </div>
  )
}

export default Home