import React from "react";
import '../index.css';

export default function Product(props) {
  const { product,onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} onAdd={onAdd} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
      <button onClick={()=>onAdd(product)} className="btn btn-warning mt-2">Add To Cart</button>
      </div>
    </div>
  );
}
