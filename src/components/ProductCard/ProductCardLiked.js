import React from 'react';
import {Link} from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ProductCard.css' ;
import { useAllData } from '../../context/AllDataContext';
import { useAuth } from '../../context/AuthContext';

const calcPercentOff=(initialPrice,price)=>{
    return Math.floor((initialPrice-price)*100/price)
}


function ProductCardLiked({wishlistItem}) {
  const {
    _id,
    name,
    price,
    initialPrice,
    ratingNo,
    categoryName,
    stock,
    imageUrl,
    reviews,
    newProduct
  } = wishlistItem;
  const {state,dispatch}=useAllData();
  const {authStates:{eToken,isLogin}}=useAuth();
  const isBag=state.bag.find(item=>item._id===_id)

  
  const removeWishHandler=()=>{
    if(eToken && isLogin){
        dispatch({type:"REMOVE_FROM_WISH",payload:wishlistItem})
    }
    
  };
  const addBagHandler=()=>{
    if(eToken && isLogin){
        if(!isBag){
            dispatch({type:"ADD_TO_BAG",payload:wishlistItem})
            dispatch({type:"REMOVE_FROM_WISH",payload:wishlistItem})
          }
    }
      
  }
  return (
        <div key={_id} className="product">
                    <div className="product-container">
                        <div className="product-content">
                            <Link to="#">
                                <div className="prod-img-bottom-extra">
                                    <div className="prod-img-box">
                                        <div className="prod-img" style={{height: "170px",width: "200px",maxInlineSize:"100%",objectFit:"contain"}}>
                                            <img src={imageUrl}
                                            style={{height: "170px",width: "200px",maxInlineSize:"100%",objectFit:"contain cover",aspectRatio:"2:1"}}
                                            alt={name}/>
                                        </div>
                                    </div>
                                    {newProduct && <div className="prod-imgTag flex-vCenter">New</div>}
                                    {!stock && <div className="prod-imgTagBlur">OUT OF STOCK</div>}
                                </div>
                            </Link>
                            <div className="product-ratings-container">
                                <span>{ratingNo}</span>
                                <span className="star-icon"> <StarBorderIcon /></span>
                                <span>
                                    <div className="product-count-seprator">|
                                        <span>{reviews}</span>
                                    </div>
                                </span>
                            </div>

                            {/* <button className="like-box" onChange={()=>dispatch({type:"ADD_TO_WISH",payload:singleProd})}>
                                <div className="like">
                                    <FavoriteBorderIcon style={{height: "20px",width: "20px"}}/>
                                </div>
                            </button> */}
                            <button className="cross-box" onClick={()=>removeWishHandler()}>
                                <div className="cross">
                                    <span className="cross-icon">×</span>
                                </div>
                            </button>
                            <div className="product-meta-info">
                                <h3 className="product-type"><Link to="#">{name}</Link></h3>
                                <h4 className="product-name"><Link to="#">{categoryName}</Link></h4>
                                <div className="product-price">
                                    <span>
                                        <span className="product-discount-price">{price}</span>
                                        <span className="product-strike">{initialPrice}</span>
                                    </span>
                                    <span className="product-discount">{calcPercentOff(initialPrice,price)}%off</span>
                                </div>

                            </div>
                        </div>
                        <button className="btn btn-primary btn-icon" onClick={addBagHandler}>
                            <span className="cart-icon"><ShoppingCartOutlinedIcon className="cart-i" style={{fontSize:"2rem"}}/>ADD TO CART</span>
                        </button>
                    </div>
                </div>
  )
}

export {ProductCardLiked};