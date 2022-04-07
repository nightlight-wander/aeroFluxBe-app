import React from 'react';
import './Bag.css';
import {Footer} from '../../components/Footer/Footer';
import {Header} from '../../components/Header/Header'
import {CartCard} from '../../components/CartCard/CartCard';
import { useAllData } from '../../context/AllDataContext';

function Bag(){
    const {state:{bag}}=useAllData();
    const bagItemsCount=bag.length;
    const itemsPrice=bag.reduce((curTotal,curItem)=>curItem.initialPrice+curTotal,0)
    const discountedPrice=bag.reduce((curTotal,curItem)=>(curItem.initialPrice-curItem.price)+curTotal,0)
    const totalPrice=itemsPrice-discountedPrice;
    return (
        <div className="cartGrid-wrapper rows3-grid">
            <Header/>
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
                {bag.map((bagItem)=>
                  <CartCard
                    bagItem={bagItem}
                    key={bagItem._id}
                  />
                )}
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
                        <div className="cardsPrice-heading">{`PRICE DETAILS(${bagItemsCount} ITMES)`}</div>
                        <div className="cardsPrice-breakUp">
                            <div className="priceSummary-row"><span>TOTAL MRP</span><span>{itemsPrice}</span></div>
                            <div className="priceSummary-row"><span>DISCOUNT ON MRP</span><span>{discountedPrice}</span></div>
                            {/* <div className="priceSummary-row"><span>COUPON DISCOUNT</span><span>RS. 1000</span></div> */}
                            <div className="priceSummary-row"><span>DELIEVERY FEE</span><span>FREE</span></div>
                            <div className="priceTotal-row"><span>TOTAL AMOUNT</span><span>{totalPrice}</span></div>
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