import React from 'react'
import Herocontent from '../atoms/herocontent/Herocontent';
import Navbar from './Navbar';

import "../molecule/_main.scss";
import Cardslider from '../atoms/cardsection/Cardslider';

import Footer from './Footer';
import Button from '../atoms/productbutton/Button';

function Home({ filterItem, catItem, items, setItems, searchVal, searchval }) {
    console.log("search", searchval);

    return (
        <>
            <Navbar searchVal={searchVal} searchval={searchval} />
            <section className="hero-section" id="hero-section">
                <Herocontent />
            </section>
            <section className="card">
                <div className="cardsection">
                    <div className="productscontainer">
                        <div className="productheading">
                            <h1>All Products</h1>
                        </div>
                        <Button catItem={catItem} filterItem={filterItem} setItems={setItems} />

                    </div>
                    <div className="cardcontainer">
                        <Cardslider items={items} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;