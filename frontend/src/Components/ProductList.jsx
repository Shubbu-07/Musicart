import React from "react";
import "../Style.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>

            <div className="d-flex align-items-center justify-content-center">
              <p className="product-price">₹ {product.price.toFixed(2)}</p>
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
