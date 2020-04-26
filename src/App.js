import React from 'react';
import {Switch, Route}  from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import $ from 'jquery';
import Popper from 'popper.js';*/
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Model from './components/Model'


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/" component={ProductList}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Model/>

    </React.Fragment>
  );
}

export default App;
