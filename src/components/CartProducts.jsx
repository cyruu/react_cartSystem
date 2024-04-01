import React from "react";

function CartProducts({ cartProducts, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="cartProducts" id="cartProducts">
      <div className="product-burger">
        <h1>Cart</h1>
        <button
          className="burger"
          id="close-button"
          style={{ border: "none", background: "none", color: "white" }}
        >
          <i
            className="fa-solid fa-xmark"
            style={{
              fontSize: "1.4rem",
              pointerEvents: "none",
            }}
          ></i>
        </button>
      </div>
      {cartProducts.length != 0 ? (
        <div className="showPrice">
          <b>Total:</b> Rs.
          {cartProducts.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)}
        </div>
      ) : (
        ""
      )}
      <div className="cartProductContainer">
        {cartProducts.length != 0 ? (
          cartProducts.map((product) => {
            return (
              <div key={product.id} className="cartProduct">
                <div className="imagetitle">
                  <img src={product.thumbnail} alt="" />
                  <p className="cartTitle">{product.title}</p>
                </div>
                <p className="cartPrice">Rs.{product.price}</p>
                <div className="cartQuantity">
                  <button onClick={() => decreaseQuantity(product.id)}>
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button onClick={() => increaseQuantity(product.id)}>
                    +
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Empty cart</p>
        )}
        {cartProducts.length != 0 ? (
          <button id="confirm-buy">Order now</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CartProducts;
