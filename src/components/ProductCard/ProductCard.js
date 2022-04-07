import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './ProductCard.css' ;

const calcPercentOff=(initialPrice,price)=>{
    return Math.floor((initialPrice-price)*100/price)
}


function ProductCard({singleProd}) {
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
  } = singleProd;
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

                            <button className="like-box" >
                                <div className="like">
                                    <FavoriteBorderIcon style={{height: "20px",width: "20px"}}/>
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
                    </div>
                </div>
  )
}

export {ProductCard};