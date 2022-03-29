import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './Bag.css';
import {Footer} from '../../components/Footer/Footer'

function Bag(){
    return (
        <div className="cartGrid-wrapper rows3-grid">
            <main className="cart-main cols2-grid-cart">
                <section className="left-cart">
                <div className="location-wrapper flex-vCenter">
                    <div className="location-infoBox">
                        <div className="location-name">Deliver to : <strong>Nisha Lamboria</strong></div>
                        <div className="location-subInfo">Random,Planet-Flying Copter,Universe-MatrixOrigin...</div>
                    </div>
                    <button className="btn btn-outline btn-small sp-mg-lauto">CHANGE ADDRESS</button>
                </div>
                <div className="productActions-wrapper flex-vCenter">
                    <div className="productActions-message">2/2 ITEMS SELECTED</div>
                    <div className="productActions-btn">
                        <button className="noBorder-btn remove-btn">REMOVE</button>
                        <button className="noBorder-btn wishlist-btn">WISHLIST</button>
                    </div>
                </div>
                <div className="product-hz">
                    <div className="product-container-hz">
                        <div className="product-content-hz product-hx">
                            <div className="right-card">
                                <a href="#">
                                    <div className="prod-img-bottom-extra">
                                        <div className="prod-img-box-hz">
                                            <div className="prod-img-hz" style={{height: "170px",width: "190px"}}>
                                                <img src="https://image.shopmoment.com/general/Moment-DJI-CP.FP.00000001.01-DJI-FPV-Combo-01.jpg" style={{height: "170px",width: "190px"}}
                                                alt="drone-img" loading="lazy"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="check-box">
                                        <span className=" check-input"><CheckIcon/>
                                        </span>
                                    </button>
                                </a>
                                <button className="cross-box">
                                    <div className="cross">
                                        <span className="cross-icon">X</span>
                                    </div>
                                </button>
                            </div>
                            <div className="left-info">
                                <div className="product-meta-info">
                                    <h3 className="product-type"><a href="#">FPV DRONE</a></h3>
                                    <h4 className="product-name"><a href="#">DJI-FPV EXTRA INFORMATION</a></h4>
                                    <div className="product-price">
                                        <span>
                                            <span className="product-discount-price">Rs.10,000</span>
                                            <span className="product-strike">Rs.15,000</span>
                                        </span>
                                        <span className="product-discount">(33%OFF)</span>
                                    </div>
                                    <div className="product-sizeQty">
                                        <div className="product-qty">
                                            <span><button className="plus-btn">+</button></span>
                                            <span className="qty">QTY</span>
                                            <span><button className="minus-btn">-</button></span>    
                                        </div>
                                        <div className="product-baseMsg">
                                            <span className="base-icon tick-icon">&#10003;</span>
                                            <span className="base-msg">Delievery by</span>
                                            <span className="base-time">24 Feb 2030</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section className="right-cart">
                <div className="prices-display flex-col">
                    <div className="coupons-wrapper flex-col">
                        <div className="coupons-head">OFFERS AND COUPONS</div>
                        <div className="coupons-apply d-flex">
                            <div className="apply-text">APPLY COUPONS</div>
                            <div className="btn btn-outline btn-small coupons-btn">APPLY</div>
                        </div>

                    </div>
                    <div className="cardsPrice-wrapper">
                        <div className="cardsPrice-heading">PRICE DETAILS(2 ITMES)</div>
                        <div className="cardsPrice-breakUp">
                            <div className="priceSummary-row"><span>TOTAL MRP</span><span>RS. 1000</span></div>
                            <div className="priceSummary-row"><span>DISCOUNT ON MRP</span><span>-RS. 100</span></div>
                            <div className="priceSummary-row"><span>COUPON DISCOUNT</span><span>RS. 1000</span></div>
                            <div className="priceSummary-row"><span>DELIEVERY FEE</span><span>RS. 1000</span></div>
                            <div className="priceTotal-row"><span>TOTAL AMOUNT</span><span>RS. 1000</span></div>
                        </div>
                        <div className="flex-hCenter">
                            <button className="btn btn-primary ">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </section>
            </main>
            <Footer/>
        </div>
    )
}

export {Bag};