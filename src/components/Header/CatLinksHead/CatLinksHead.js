import React from 'react';
import { Link } from "react-router-dom";
import {useAllData} from "../../../context/AllDataContext";

function CatLinksHead() {
  const{dispatch}=useAllData();
  return (
<nav className="catLinks-head">
    <ul className="d-flex">
        <li className="cat-item" onClick={()=>dispatch({type:"GET_CATEGORIES",payload:0})}>
            <Link to="/product-listing"
               className="cat-link in-block">FPV-RACING</Link>
        </li>
        <li className="cat-item" onClick={()=>dispatch({type:"GET_CATEGORIES",payload:1})}>
            <Link to="/product-listing" className="cat-link in-block">FILM-MAKING</Link>
        </li>
        <li className="cat-item" onClick={()=>dispatch({type:"GET_CATEGORIES",payload:2})}>
            <Link to="/product-listing" className="cat-link in-block">ACCESSORIES</Link>
        </li>
    </ul>
</nav>


  )
}

export {CatLinksHead};