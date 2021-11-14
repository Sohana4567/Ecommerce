import React from 'react'
import product from '../../../Product';
const Productcontent = ({ id, discountedPrice }) => {
  return (
    <>
      <h1 className="product-title">{product[id - 1].heading}</h1>
      <a href="#" className="product-link">visit store</a>

      <div className="product-detail">
        <h2>About this item:</h2>
        <p className="description">{product[id - 1].description}</p>
        <ul>
          <li>Color: <span>Black</span></li>
          <li>Category: <span>{product[id - 1].category}</span></li>
          <li>Shipping Area: <span>All over the world</span></li>
          <li>Shipping Fee: <span>Free</span></li>
        </ul>
      </div>
      <div className="product-price">
        <p>&#8377;{discountedPrice}<br /><s className="mark">&#8377;{product[id - 1].price}</s>&nbsp;&nbsp;{product[id - 1].discount} off</p>
      </div>
      <button>shop now</button>
    </>
  )
}
export default Productcontent;
