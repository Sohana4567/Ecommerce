import React from 'react';

import './_main.scss';
import Footericon from '../atoms/Footericon/Footericon';
import Footerbottom from '../atoms/footerbottom/Footerbottom'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footercontent">
                    <h3>Ecommerce products</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem expedita tempora recusandae
                    repudiandae soluta commodi atque itaque vitae quis possimus. Id, eos? Deserunt ullam, officia dolor quo
                necessitatibus esse eveniet!</p>

                    <Footericon />
                </div>
                <Footerbottom />
            </footer>
        </>
    )
}
export default Footer;