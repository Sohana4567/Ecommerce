import React, { useState } from 'react'
import product from '../../Product';
import { useParams } from "react-router-dom";

import "../molecule/_main.scss";

import Navbar from "../molecule/Navbar";
import StarRating from '../atoms/starrating/StarRating';
import ProductImage from '../atoms/productdetails/ProductImage';
import SocialIcon from '../atoms/productdetails/SocialIcon';
import Productcontent from '../atoms/productdetails/Productcontent';
import { useHistory } from 'react-router-dom';

const Productdetails = () => {
  const { id } = useParams();
  const history = useHistory();
  
  const productimage = "../../" + product[id - 1].imagesrc;

  const [rating, setRating] = useState(0);

  const Back = () => {
    history.goBack();
}
  const handleChange = (value) => {
    setRating(value);
  }
  let disc = parseInt(product[id - 1].discount.slice(0, product[id - 1].discount.length - 1));
  let discountedPrice = ((product[id - 1].price / 100) * (100 - disc)).toFixed(2);
  return (
    <div>
      <Navbar />
      <button className="fas fa-arrow-left back" onClick={Back}></button>
      <div className="detail-wrap">
    
        <ProductImage productimage={productimage} />
        <div className="text">
          <div className="commontext">
            <StarRating
              count={5}
              size={40}
              value={rating}
              activeColor={'red'}
              inactiveColor={'#ddd'}
              onChange={handleChange} />
            <Productcontent id={id} discountedPrice={discountedPrice} />
            <SocialIcon />
          </div>
        </div>
      </div>


    </div>
  )
}
export default Productdetails;




