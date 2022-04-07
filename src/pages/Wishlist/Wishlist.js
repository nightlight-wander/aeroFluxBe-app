import React from 'react'
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ProductCardLiked} from '../../components/ProductCard/ProductCardLiked';
import "./Wishlist.css";
function Wishlist() {
  return (
    <div className="wishlistGrid-wrapper rows3-grid">
      <Header/>
      <main className="wishlist-main cols2-grid-wishlist">
        <section className="wishlist-wrapper">
          <ProductCardLiked/>
          <ProductCardLiked/>
          <ProductCardLiked/>
          <ProductCardLiked/>
          <ProductCardLiked/>
          <ProductCardLiked/>
          <ProductCardLiked/>
          <ProductCardLiked/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export {Wishlist};