import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  const { name, price, seller, ratings, img } = props.product;
  const { addToCartBtn } = props;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price : ${price}</p>
        <p className="product-menufacturer">Manufacturer : {seller}</p>
        <p className="product-rating">Rating : {ratings}</p>
      </div>
      <button
        className="product-button"
        onClick={() => addToCartBtn(props.product)}
      >
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
