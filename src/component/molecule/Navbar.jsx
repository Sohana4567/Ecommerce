import React from 'react'
import Logo from '../atoms/logo/Logo';
import Link from '../atoms/link/Link';

import "../molecule/_main.scss";
import Card  from '../atoms/cardIcon/Card';


function  Navbar({num,searchVal,searchval}) {
   
    console.log("Navbar search",searchval);
    return(
        <>
        <div className="main-nav">
        <Logo/>
        <Link Homepage="Home"  Product="product"/>
        <div className="social-media">
            <Card num={num}  searchVal={searchVal}   searchval={searchval} />
        </div> 
        </div>     
        
        </>
    );
};
export default Navbar;


