import React from "react";
import Navbar from "./Navbar";
import bannerImg from "../Assets/image_5-removebg-preview 1.png";
import gridViewIcon from "../Assets/grid-view-icon.svg";
import listViewIcon from "../Assets/list-view-icon.svg";

const Home = () => {
  return (
    <div className="container">
      <Navbar />

      <section className="banner">
      <div className="banner-content">
          <h1>Grab upto 50% off on Selected headphones</h1>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="Banner-Image" />
        </div>
      </section>

      <section className="search">
        <input type="text" placeholder="Search by Product Name" />
      </section>
      
      <section className="filters">
        <div className="d-flex">
          <button><img src={gridViewIcon} alt="" /></button>
          <button><img src={listViewIcon} alt="" /></button>
        </div>
        <div className="filter-content">
        <select>
                        <option>Headphone type</option>
                    </select>
                    <select>
                        <option>Company</option>
                    </select>
                    <select>
                        <option>Colour</option>
                    </select>
                    <select>
                        <option>Price</option>
                    </select>
                    <select>
                        <option>Sort by : Featured</option>
                    </select>
        </div>
      </section>
    </div>
  );
};

export default Home;
