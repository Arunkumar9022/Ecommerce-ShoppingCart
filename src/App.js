import React, { useState } from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Main from "./components/Main";
import data from "./data";
import Product from "./components/Product";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  // const onAdd=(product)=>{
  //   const exist=cartItems.find(x=>x.id===product.id)
  //   if(exist)
  //   {
  //     setCartItems(cartItems.map(x=>x.id===product.id ? {...exist,qty:exist.qty+1}:x))
  //   }
  //   else{
  //     setCartItems([...cartItems,{...products,qty:1}])
  //   }
  // }
  const onAdd = (product) => {
    // Check if the product already exists in the cart
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      // If the product exists, update the quantity for that product in the cart
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      // If the product does not exist, add it to the cart with a quantity of 1
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) => {
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x;
  //       })
  //     );
  //   }
  // };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      // If the quantity is 1, remove the product from the cart
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      // If the quantity is greater than 1, decrease the quantity by 1
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
