import React from 'react';
import { Header } from '../../components/Header/Header';
import { Filters } from '../../components/Filters/Filters';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Footer } from '../../components/Footer/Footer';
import "../../styles/grids.css";
import "./ProductListing.css";
import "../../styles/utils.css";
import { useAllData } from '../../context/AllDataContext';
import { FetchProdsCats } from '../../utilities/fetchProdsCats';
import { sortProducts, filterByBrand, filterByPrice } from '../../utilities/filterFuncs'

function ProductListing() {
  const { state } = useAllData();
  FetchProdsCats();
  const { products, sortBy, showSpecificBrand, showPriceRange } = state;
 
  const sortedProductsList = sortProducts([...products], sortBy);
  const filteredByBrand1 = filterByBrand([...sortedProductsList], showSpecificBrand);
  const filteredByPrice2 = filterByPrice([...filteredByBrand1], showPriceRange);
  
  return (
    <div className="productGrid-wrapper rows3-grid">
      <Header />
      <main className="products-main cols2-grid">
        <aside className="side-col">
          <Filters />
        </aside>
        <section className="content-col">
          {filteredByPrice2.map((prod) => {
            return <ProductCard singleProd={prod} key={prod._id} />
          })}
        </section>
      </main>
      <Footer style={{
        padding: "4rem 0 4rem 0",
        margin: 0,
        backgroundColor: "var(--pink8bg)",
        color: "var(--yellowGold)",
        fontWeight: 600,
        fontSize: "2rem",
        alignItems: "center",
        paddingRight: "2rem",
        borderTop: "1px solid var(--blackl1)"
      }} />
    </div>
  )
}


export { ProductListing };