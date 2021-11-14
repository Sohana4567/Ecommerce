import React from 'react';
import '../productdetails/_main.scss';

const ProductImage = ({ productimage }) => {
  return (
    <div className="contain">
      <img src={productimage} alt="images" />
    </div>
  )
}
export default ProductImage;
