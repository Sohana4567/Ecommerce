import React from 'react';

import '../cardsection/_maincardslider.scss';
function Cardslider({ items }) {
return (
    <div className="centerdiv">
        {items.map((elem) => {
           
            return(
                <div className="productcontainer" key={elem.id}>
                    <div className="productimage">
                        <figure className="productstore">
                            <img src={elem.imagesrc} alt={elem.heading} className="photo" />
                        </figure>
                      
                    </div>
                
                </div>
            );
        })}

    </div>
)
}
export default Cardslider;