import React from 'react'
import { NavLink } from 'react-router-dom';
import '../compare/_main.scss';


const Compare = ({ compare, setCompare }) => {
    const removecard = (id) => {
        compare.forEach((item, index) => {
            if (item.id === id) {
                compare.splice(index, 1);
            }
        })
        setCompare([...compare]);

    }
    const deleteitem = () => {
        setCompare([]);
    }
    return (
        <>
            <div className="Compareproduct">
                {compare.map((elem) => {
                    const { id, imagesrc, heading, price, discount } = elem;
                    let disc = parseInt(discount.slice(0, discount.length - 1));
                    let discountedPrice = ((price / 100) * (100 - disc)).toFixed(2);
                    return (
                        <div className="Imageproduct" id="productstore" key={id}>

                            <figure className="store-item">
                                <img src={imagesrc} alt={heading} className="photo" />
                            </figure>
                            <figcaption>
                                <h4 className="heading" >{heading}</h4>
                                <strong className="price">{discountedPrice}/- <span>{price}/-</span></strong>
                            </figcaption>
                            <button id="CloseButton" onClick={() => removecard(id)} > x </button>
                        </div>
                    )
                })}
            </div>

            <div className="productbutton">
                {compare.length !== 0 ? <div className="comparebutton">
                    <div className="comparecount">
                        <h1>Compare {compare && compare.length > 0 && compare.length}</h1>
                    </div>
                    <div className="clear">
                        <button onClick={deleteitem} className="button">clearAll</button>
                    </div>
                    <div className="compare">
                        <NavLink to='/compare'>
                            <button className="button">Compare</button>
                        </NavLink>
                    </div>
                </div> : <div></div>}
            </div>
        </>
    )
}
export default Compare;