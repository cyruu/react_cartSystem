import React from "react";
import CartProducts from "./CartProducts";

function AllProducts({ allProducts, addToCart, cartProducts, removeFromCart }) {
  return (
    <div className="allProducts">
      <h1>Products</h1>
      <div className="allProductsContainer">
        {allProducts.map((product) => {
          return (
            <div key={product.id} className="allProduct">
              <img src={product.thumbnail} alt="" width={"50px"} />
              <p className="title">{product.title}</p>
              <p className="price">Rs. {product.price}</p>
              <div className="button">
                {!cartProducts.some((cproduct) => cproduct.id == product.id) ? (
                  <button className="btn" onClick={() => addToCart(product.id)}>
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="btn remove"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
