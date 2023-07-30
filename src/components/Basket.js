import React from "react";
import "../index.css";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price + c.qty, 0);

  // const taxPrice = itemPrice * 0.14;
  // const ShippingPrice = itemPrice > 2000 ? 0 : 50;
  // const totalPrice = itemPrice + taxPrice + ShippingPrice;

  const taxPrice = itemPrice * 0.14;
  const ShippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + ShippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 ? <div>Cart is Empty</div> : null}</div>
      {/* Use parentheses to wrap the map function */}
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
            <button className="remove" onClick={() => onRemove(item)}>
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <div>
            <hr></hr>{" "}
            <div className="row">
              <div className="col-2">Item Price</div>
              <div className="col-1 text-right">{itemPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">
                <strong>{taxPrice.toFixed(2)}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                <strong>{ShippingPrice.toFixed(2)}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <button onClick={() => alert("implement Checking")}>
              CheckOut
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
export default Basket;
