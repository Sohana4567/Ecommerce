import React, { useState, useEffect } from 'react';
import './App.css';
import '../src/reset.css';
import "./component/molecule/_main.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import product from './Product';
import Home from './component/molecule/Home';
import Product from './component/molecule/Product';
import Compare from './component/molecule/Compare';
import Productdetails from './component/molecule/Productdetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const allCatValue = [...new Set(product.map((curElem) => curElem.category)), "all"];

function App() {

  const [searchVal, setSearch] = useState("");

  const [items, setItems] = useState(product);
  const [catItem, setCatItems] = useState(allCatValue)
  const filterItem = (categItem) => {
    if (categItem === "all") {
      setItems(product);
      return;
    }
    const updatedItems = product.filter((curElem) => {
      return curElem.category === categItem;
    })
    setItems(updatedItems);
  }


  //compare function
  var comparecheck
  const [compare, setCompare] = useState([]);
  console.log(compare)
  const Comparefunction = (id) => {
    comparecheck = compare.every(item => {
      return item.id !== id

    })

    if (compare.length > 4) {
      toast.error("Limit has already been reached!", {
        position: "top-center"
      });
    } else if (comparecheck) {
      const comparedata = product.filter(product => {
        return product.id === id;
      })
      setCompare([...compare, ...comparedata]);
    } else {
      toast.error("Products Already Present!", {
        position: "top-center"
      });
    }
  }

  useEffect(() => {
    const CompareCart = JSON.parse(localStorage.getItem('CompareCart'))
    if (CompareCart) setCompare(CompareCart)
  }, [0])

  useEffect(() => {
    localStorage.setItem('CompareCart', JSON.stringify(compare))
  }, [compare])

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home items={items} searchVal={searchVal} searchval={setSearch} filterItem={filterItem} items={items} setItems={setItems} catItem={catItem} />
        </Route>
        <Route exact path="/product" component={Product}>
          <Product items={items} searchVal={searchVal} searchval={setSearch} filterItem={filterItem} Comparefunction={Comparefunction} compare={compare} setCompare={setCompare} setItems={setItems} catItem={catItem} />
        </Route>
        <Route exact path="/products/:id" component={Productdetails}>
        </Route>
        <Route exact path="/compare" component={Compare}>
          <Compare compare={compare} />
        </Route>
        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
