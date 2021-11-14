import React, { useEffect } from 'react'
import '../cardIcon/_maincard.scss';
import Search from '../search/Search';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
var $;
$ = require("jquery");
$(() => {
    console.log("jqury")
})

function Card({ num, searchVal, searchval }) {
    useEffect(() => {
        console.log("Card", searchval);

    }, [])
    const navOpen = () => {
        $('.menu-link').toggleClass('active');
    }

    return (
        <>
            <ul className="right">
                <li>

                    <div className="inputarea">
                        <Search searchval={searchval} searchVal={searchVal} />
                    </div>
                </li>
                <li>
                    <div className="cart-value">
                        <div className="cart-wrap">

                            <BsFillCartCheckFill />
                        </div>
                        <div className="card-length">
                            {num && num.length > 0 && num.length}
                        </div>
                    </div>
                </li>
                <li>
                    <div className="hamburger-menu" onClick={navOpen}>
                        <a href="#">
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </li>

            </ul>




        </>
    )
}
export default Card;