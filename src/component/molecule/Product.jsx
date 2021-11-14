import React, { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './Navbar';
import Button from '../atoms/productbutton/Button';
import '../molecule/_main.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import product from '../../Product';
import Footer from './Footer';


const Productcard = lazy(() => import('../atoms/productcard/Productcard'));

function Product({ items, filterItem, setItems, catItem, searchVal, searchval, Comparefunction, compare, setCompare }) {

  const [num, setnum] = useState([]);
  const addCart = (id) => {
    const check = num.every(item => {
      return item.id !== id
    })
    if (check) {
      const data = product.filter(product => {
        return product.id === id
      })
      setnum([...num, ...data])
    } else {
      toast.error("The product has been added to cart!", {
        position: "top-center"
      });
    }
  }
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('datanum'))
    if (dataCart) setnum(dataCart)
  }, [0])

  useEffect(() => {
    localStorage.setItem('datanum', JSON.stringify(num))
  }, [num])

  return (

    <>
      <Navbar num={num} searchval={searchval} />
      <section >
        <Suspense fallback={<div className="loader">Loading...please wait</div>}>
          <div className="product">
            <div className="productsection">
              <div className="productheading">
                <h1>Latest Product</h1>
                <hr />
              </div>
              <Button catItem={catItem} filterItem={filterItem} setItems={setItems} />
            </div>
            <Productcard searchval={searchval} searchVal={searchVal} addCart={addCart} Comparefunction={Comparefunction} compare={compare} setCompare={setCompare} items={items} filterItem={filterItem} setItems={setItems} catItem={catItem} />
          </div>
          <ToastContainer />

          <Footer />
        </Suspense>
      </section>

    </>
  )
}
export default Product;