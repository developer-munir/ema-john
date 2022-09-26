import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setShopProducts(data))
    }, [])
    const addToCartBtn = (product) => {
        // console.log(product)
      const newCart = [...cart, product];
      setCart(newCart);
    }
    return (
      <div className="shop-container">
        <div className="shop-item-container">
          {shopProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCartBtn={addToCartBtn}
            ></Product>
          ))}
        </div>
        <div className="shop-summary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Shop;