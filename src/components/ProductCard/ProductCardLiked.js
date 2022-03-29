import React, {useState} from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ProductCard.css' ;

const calcPercentOff=(initialPrice,price)=>{
    return Math.floor((initialPrice-price)*100/price)
}


function ProductCardLiked({wishlistItem}) {
//   const[click,setClick]=useState(false)
//   const styles={
//       like:{
//           backgroundColor:click?"black":""
//       }
//   }
//   const likeHandler=()=>{
//       return setClick(true);
//   }
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
  return (
        <div key={_id} className="product">
                    <div className="product-container">
                        <div className="product-content">
                            <a href="#">
                                <div className="prod-img-bottom-extra">
                                    <div className="prod-img-box">
                                        <div className="prod-img" style={{height: "170px",width: "200px",maxInlineSize:"100%",objectFit:"contain"}}>
                                            <img src={imageUrl}
                                            style={{height: "170px",width: "200px",maxInlineSize:"100%",objectFit:"contain cover",aspectRatio:"2:1"}}
                                            alt={name}/>
                                        </div>
                                    </div>
                                    {newProduct && <div className="prod-imgTag">New</div>}
                                    {!stock && <div className="prod-imgTagBlur">OUT OF STOCK</div>}
                                </div>
                            </a>
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
                            <button className="cross-box">
                                <div class="cross">
                                    <span className="cross-icon">×</span>
                                </div>
                            </button>
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

                            </div>
                        </div>
                        <button className="btn btn-primary btn-icon">
                            <span className="cart-icon"><ShoppingCartOutlinedIcon style={{fontSize:"2rem"}}/>ADD TO CART</span>
                        </button>
                    </div>
                </div>
  )
}

export {ProductCardLiked};