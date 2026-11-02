import React, { useState } from 'react';
import './App.css';
//import '../../m5-assignment/products'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
//import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from './components/navbar';
import Items from './components/items';



function App() {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <Navbar total={total}/>
      <Items setTotal={setTotal}/>
    </div>
  );
}

export default App;
