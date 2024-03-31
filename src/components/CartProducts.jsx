import React, { useEffect } from "react";

function CartProducts({ cartProducts, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="cartProducts">
      <h1>Cart</h1>
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
      </div>
    </div>
  );
}

export default CartProducts;
