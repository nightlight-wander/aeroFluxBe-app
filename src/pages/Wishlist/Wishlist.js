import React from 'react'
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { ProductCardLiked} from '../../components/ProductCard/ProductCardLiked';
import { useAllData } from '../../context/AllDataContext';
import "./Wishlist.css";
function Wishlist() {
  const {state:{wishlist}}=useAllData();
  console.log(wishlist)
  // const {wishlist}=state;
  return (
    <div className="wishlistGrid-wrapper rows3-grid">
      <Header/>
      <main className="wishlist-main cols2-grid-wishlist">
        <section className="wishlist-wrapper">
          {wishlist.map((wishlistItem)=>
          <ProductCardLiked
              imageUrl={wishlistItem.imageUrl}
              wishlistItem={wishlistItem}
              key={wishlistItem._id}
              _id={wishlistItem._id}
              name={wishlistItem.name}
              price={wishlistItem.price}
              initialPrice={wishlistItem.price}
              ratingNo={wishlistItem.ratingNo}
              categoryName={wishlistItem.categoryName}
              stock={wishlistItem.stock}
              reviews={wishlistItem.reviews}
              newProduct={wishlistItem.newProduct}
          />
          )}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export {Wishlist};