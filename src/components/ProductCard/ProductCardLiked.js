import React from 'react';
import './ProductCard.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function ProductCardLiked() {
  return (
    <div className="product">
                    <div className="product-container">
                        <div className="product-content">
                            <a href="#">
                                <div className="prod-img-bottom-extra">
                                    <div className="prod-img-box">
                                        <div className="prod-img" style={{height: "170px",width:"190px"}}>
                                            <img src="https://image.shopmoment.com/general/Moment-DJI-CP.FP.00000001.01-DJI-FPV-Combo-01.jpg" style={{height: "170px",width:"190px"}} alt="drone-img" loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="product-ratings-container">
                                <span>4.5</span>
                                <span className="star-icon"> <StarBorderIcon /></span>
                                <span>
                                    <div className="product-count-seprator">|
                                        <span>3000</span>
                                    </div>
                                </span>
                            </div>
    
                            <button className="cross-box">
                                <div className="cross">
                                    <span className="cross-icon">×</span>
                                </div>
                            </button>
                            <div className="product-meta-info">
                                <h3 className="product-type"><a href="#">FPV DRONE</a></h3>
                                <h4 className="product-name"><a href="#">DJI-FPV</a></h4>
                                <div className="product-price">
                                    <span>
                                        <span className="product-discount-price">Rs.10,000</span>
                                        <span className="product-strike">Rs.15,000</span>
                                    </span>
                                    <span className="product-discount">(33%OFF)</span>
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