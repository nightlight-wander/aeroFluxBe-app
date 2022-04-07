import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import "./CartCard.css";
import {useAllData} from "../../context/AllDataContext";


function CartCard({bagItem}) {
    const {state,dispatch}=useAllData();
    const {
        _id,
        name,
        price,
        initialPrice,
        categoryName,
        imageUrl,
        qty
    } = bagItem;
    const isWishlist=state.wishlist.find(item=>item._id===_id)
    
    const calcPercentOff=(initialPrice,price)=>{
        return Math.floor((initialPrice-price)*100/price)
    }
    const moveToWish=()=>{
        if(!isWishlist){
            dispatch({type:"ADD_TO_WISH",payload:bagItem})
            dispatch({type:"REMOVE_FROM_BAG",payload:bagItem})
        }
    }
    const removeBagHandler=()=>{
        dispatch({type:"REMOVE_FROM_BAG",payload:bagItem})
    }
    const decreaseQty=()=>{
        dispatch({type:"DECREASE_QTY",payload:bagItem})
    }
    const increaseQty=()=>{
        dispatch({type:"INCREASE_QTY",payload:bagItem})
    }

  return(
                <div className="product-hz">
                    <div className="product-container-hz">
                        <div className="product-content-hz product-hx">
                            <div className="right-card">
                                <a href="#">
                                    <div className="prod-img-bottom-extra">
                                        <div className="prod-img-box-hz">
                                        <div className="prod-img-hz" style={{height: "170px",width: "200px",maxInlineSize:"100%"}}>
                                            <img src={imageUrl}
                                            style={{height: "170px",width: "200px",maxInlineSize:"100%",objectFit:"contain cover"}}
                                            alt={name}/>
                                        </div>
                                        </div>
                                    </div>
                                    <button className="check-box">
                                        <span className=" check-input"><CheckIcon/>
                                        </span>
                                    </button>
                                </a>
                                <button className="cross-box" onClick={()=>removeBagHandler()}>
                                    <div className="cross">
                                        <span className="cross-icon">×</span>
                                    </div>
                                </button>
                            </div>
                            <div className="left-info">
                                <div className="product-meta-info">
                                    <h3 className="product-type"><a href="#">{name}</a></h3>
                                    <h4 className="product-name"><a href="#">{categoryName}</a></h4>
                                    <div className="product-price">
                                        <span>
                                            <span className="product-discount-price">{price}</span>
                                            <span className="product-strike">{initialPrice}</span>
                                        </span>
                                        <span className="product-discount">{calcPercentOff(initialPrice,price)}%off</span>
                                    </div>
                                    <div className="product-sizeQty">
                                        <div className="product-qty">
                                            <span><button className="plus-btn" onClick={increaseQty}>+</button></span>
                                            <span className="qty">{qty}</span>
                                            <span><button className="minus-btn" onClick={decreaseQty}>-</button></span>    
                                        </div>
                                        {/* <div className="product-baseMsg">
                                            <span className="base-icon tick-icon">&#10003;</span>
                                            <span className="base-msg">Delievery by</span>
                                            <span className="base-time">24 Feb 2030</span>
                                        </div> */}
                                    </div>
                                    <button className="btn btn-grad" onClick={()=>moveToWish()}>
                                      <span className="material-icons material-icons-outlined">favorite</span> MOVE TO WISHLIST
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export {CartCard};