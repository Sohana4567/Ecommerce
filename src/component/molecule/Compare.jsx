import React from 'react'
import Navbar from '../molecule/Navbar';
import { useHistory } from 'react-router-dom';
import Compareproduct from '../atoms/compareproduct/Compareproduct';
import '../molecule/_main.scss';
const Compare = ({ compare }) => {
    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    }
    return (
        <>
            <Navbar />
            <button className="fas fa-arrow-left prev" onClick={handleBack}></button>
            <div className="comparecontainer">
                <div className="compareheading">
                    <h1>Compare</h1>
                    <h3><span className="count">{compare && compare.length > 0 && compare.length}</span> Products  in  Comparison</h3>
                    <hr />
                </div>
            </div>
            <section className="Image">
                <Compareproduct compare={compare} />
            </section>
        </>

    )

}
export default Compare;