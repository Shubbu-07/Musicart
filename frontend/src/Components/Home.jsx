import React, {useState} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import products from "../Products";
import Searchbar from "./Searchbar";
import ProductFliter from "./ProductFilter";
import ProductList from "./ProductList";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductFliter/>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Home;
