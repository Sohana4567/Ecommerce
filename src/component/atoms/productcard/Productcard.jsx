
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Compare from '../compare/Compare';
import '../productcard/_main.scss';


function Productcard({ addCart, items, Comparefunction, setCompare, searchVal, compare }) {

    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-item">
                    {items.filter((val) => {
                        if (searchVal === "") {
                            return val;
                        } else if (val.heading && val.heading.toLowerCase().includes(searchVal.toLowerCase())) {
                            return val
                        }
                    }).map((elem) => {
                        const { id, imagesrc, price, discount, heading } = elem;
                        let disc = parseInt(discount.slice(0, discount.length - 1));
                        let discountedPrice = ((price / 100) * (100 - disc)).toFixed(2);
                        return (

                            <div className="box">
                                <NavLink to={`/products/${id}`}>
                                    <div className="image">
                                        <img src={imagesrc} alt={heading} className="photo" />
                                    </div>

                                    <div className="info">
                                        <h3>{heading}</h3>
                                        <div className="subInfo">
                                            <strong className="price">{discountedPrice}/- <span>{price}/-</span></strong>
                                            <div className="stars">

                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay">
                                        <a href="#" className="fas fa-heart"></a>
                                        <a href="#" className="fas fa-shopping-cart"></a>
                                        <a href="#" className="fas fa-search"></a>
                                    </div>
                                </NavLink>
                                <div className="buttons">
                                    <button className="button" onClick={() => addCart(id)}>Order</button>
                                    <button className="button" onClick={() => Comparefunction(id)}>Compare</button>
                                </div>
                            </div>

                        )
                    })
                    }

                </div>
                <div className="productImage">
                    <Compare compare={compare} setCompare={setCompare} />
                </div>

            </div>
        </>
    )
}
export default Productcard;
