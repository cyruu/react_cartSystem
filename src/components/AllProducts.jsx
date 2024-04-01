import React, { useEffect } from "react";
import CartProducts from "./CartProducts";

function AllProducts({ allProducts, addToCart, cartProducts, removeFromCart }) {
  function slideCartSection() {
    const cartSection = document.getElementById("cartProducts");
    cartSection.style.transform = "translateX(0%)";
  }
  function removeCartSection() {
    const cartSection = document.getElementById("cartProducts");
    cartSection.style.transform = "translateX(100%)";
  }
  useEffect(() => {
    const burgerButton = document.getElementById("burger-button");
    const closeButton = document.getElementById("close-button");
    burgerButton.addEventListener("click", slideCartSection);
    closeButton.addEventListener("click", removeCartSection);
    return () => {
      burgerButton.removeEventListener("click", slideCartSection);
      closeButton.removeEventListener("click", removeCartSection);
    };
  }, []);
  return (
    <div className="allProducts">
      <div className="product-burger">
        <h1>Products</h1>
        <button
          className="burger"
          id="burger-button"
          style={{ border: "none", background: "none", color: "white" }}
        >
          <i
            className="fa-solid fa-cart-shopping"
            style={{
              fontSize: "1.4rem",
              pointerEvents: "none",
            }}
          ></i>
          {cartProducts.length > 0 ? (
            <span id="cartItems">{cartProducts.length}</span>
          ) : (
            ""
          )}
        </button>
      </div>
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
