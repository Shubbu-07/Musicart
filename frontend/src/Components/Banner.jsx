import React from 'react'
import bannerImg from "../Assets/banner-image.png";
import '../Style.css'

const Banner = () => {
  return (
    <section className="banner">
        <div className="banner-content">
          <h1>Grab upto 50% off on Selected headphones</h1>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Banner-Image" />
        </div>
      </section>
  )
}

export default Banner
