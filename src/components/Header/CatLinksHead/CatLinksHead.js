import React from 'react';
import { Link } from "react-router-dom";


function CatLinksHead({category,setCategory}) {
  return (
<nav className="catLinks-head">
    <ul className="d-flex">
        <li className="cat-item" onClick={()=>setCategory(0)}>
            <Link to="/product-listing"
               className="cat-link in-block">FPV-RACING</Link>
        </li>
        <li className="cat-item" onClick={()=>setCategory(1)}>
            <Link to="/product-listing" className="cat-link in-block">FILM-MAKING</Link>
        </li>
        <li className="cat-item" onClick={()=>setCategory(2)}>
            <Link to="/product-listing" className="cat-link in-block">ACCESSORIES</Link>
        </li>
    </ul>
</nav>


  )
}

export {CatLinksHead};