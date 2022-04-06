import React from 'react';
import { useAllData } from '../../context/AllDataContext';
import './Filters.css';


function Filters() {

  const {state,dispatch}=useAllData();
  const {sortBy,showSpecificBrand,showPriceRange}=state;

  return (
    
    <div className="filters-form flex-col">
    <div className="filters-header filters-margins">
        <span className="filters-title">FILTERS</span>
        <span className="filters-clearAll" onClick={()=>dispatch({type:"CLEAR_ALL",payload:""})}>CLEAR ALL</span>
    </div>
   
    <div className="filters-margins filtersCheck-wrapper">
        <span className="filters-childHeader">PRICE</span>
        <ul className="filters-childList">
            <li><input className="checkInput" type="checkbox" value="Below Rs.5000" checked={showPriceRange&&showPriceRange==="RANGE_1"} onChange={()=>dispatch({type:"SWITCH_PRICE",payload:"RANGE_1"})}/>Rs. 5000 to 15000</li>
            <li><input className="checkInput" type="checkbox" value="Rs.5000 to Rs.5000" checked={showPriceRange&&showPriceRange==="RANGE_2"} onChange={()=>dispatch({type:"SWITCH_PRICE",payload:"RANGE_2"})}/>Rs. 15000 to 30000
            </li>
            <li><input className="checkInput" type="checkbox" value="Rs.5000 to Rs.5000" checked={showPriceRange&&showPriceRange==="RANGE_3"} onChange={()=>dispatch({type:"SWITCH_PRICE",payload:"RANGE_3"})}/>Rs. 30000 to 45000
            </li>
            <li><input className="checkInput" type="checkbox" value="Above 15000" checked={showPriceRange&&showPriceRange==="RANGE_4"} onChange={()=>dispatch({type:"SWITCH_PRICE",payload:"RANGE_4"})}/>Above 45000</li>
        </ul>
    </div>

    <div className="filters-margins filtersCheck-wrapper">
        <span className="filters-childHeader">BRAND</span>
        <ul className="filters-childList">
            <li><input className="checkInput" type="checkbox" value="i-Flight" checked={showSpecificBrand&&showSpecificBrand==="IFLIGHT"} onChange={()=>dispatch({type:"SWITCH_BRAND",payload:"IFLIGHT"})}/>i-Flight</li>
            <li><input className="checkInput" type="checkbox" value="DJI" checked={showSpecificBrand&&showSpecificBrand==="DJI"} onChange={()=>dispatch({type:"SWITCH_BRAND",payload:"DJI"})}/>DJI</li>
            <li><input className="checkInput" type="checkbox" value="Walkera" checked={showSpecificBrand&&showSpecificBrand==="WALKERA"} onChange={()=>dispatch({type:"SWITCH_BRAND",payload:"WALKERA"})}/>Walkera</li>
            <li><input className="checkInput" type="checkbox" value="Flywoo" checked={showSpecificBrand&&showSpecificBrand==="FLYWOO"} onChange={()=>dispatch({type:"SWITCH_BRAND",payload:"FLYWOO"})}/>Flywoo</li>
            <li><input className="checkInput" type="checkbox" value="Other" checked={showSpecificBrand&&showSpecificBrand==="ALL"} onChange={()=>dispatch({type:"SWITCH_BRAND",payload:"ALL"})}/>All</li>
        </ul>
    </div>

    <div className="filters-margins filtersCheck-wrapper">
        <span className="filters-childHeader">SORT BY</span>
        <ul className="filters-childList">
        <li><input className="radioInput" type="radio" name="sort" value="Price-low-to-high" checked={sortBy && sortBy==="PRICE_LOW_TO_HIGH"} onChange={()=>dispatch({type:"SORT",payload:"PRICE_LOW_TO_HIGH"})}/>Low to High</li>
        <li><input className="radioInput" type="radio" name="sort" value="Price-high-to-low" checked={sortBy && sortBy==="PRICE_HIGH_TO_LOW"} onChange={()=>dispatch({type:"SORT",payload:"PRICE_HIGH_TO_LOW"})}/>High To Low</li>
        </ul>
    </div>
</div>
  )
}

export {Filters};