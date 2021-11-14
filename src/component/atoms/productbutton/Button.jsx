import React from 'react';

import '../productbutton/_main.scss';


function Button({ catItem, filterItem }) {


    return (
        <div className="menu-tab">
            {
                catItem.map((curElem, index) => {
                    return <button className="btn btn1" key={index} onClick={() => filterItem(curElem)}>{curElem}</button>
                })
            }

        </div>
    )
}
export default Button;