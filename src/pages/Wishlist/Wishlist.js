import React from 'react'
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ProductCardLiked} from '../../components/ProductCard/ProductCardLiked';
import { useAllData } from '../../context/AllDataContext';
import "./Wishlist.css";
function Wishlist() {
  const {state:{wishlist}}=useAllData();
  // console.log(wishlist)
  // const {wishlist}=state;
  return (
    <div className="wishlistGrid-wrapper rows3-grid">
      <Header/>
      <main className="wishlist-main cols2-grid-wishlist">
        <section className="wishlist-wrapper">
          {wishlist.map((wishlistItem)=>
          <ProductCardLiked
              wishlistItem={wishlistItem}
              key={wishlistItem._id}
          />
          )}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export {Wishlist};