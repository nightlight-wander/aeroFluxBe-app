import React, { useEffect, useState} from 'react';
import axios from "axios";
import {Header} from '../../components/Header/Header';
import { Filters} from '../../components/Filters/Filters';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import {Footer} from '../../components/Footer/Footer';
import "../../styles/grids.css";
import "./ProductListing.css";
import "../../styles/utils.css";
import {useAllData} from '../../context/AllDataContext';


function ProductListing() {
  const [products,setProducts]=useState([])
  const [category,setCategory]=useState(0)
  useEffect(()=>{
    (async()=>{
      try{
        const {data:products}=await axios.get("/api/products");
        const {data:categories}=await axios.get("/api/categories");
        // console.log(categories.categories)
        // console.log(categories.categories[0].categoryName)
        // console.log(products.products)
        // console.log(products.products[1].categoryName)
        const catProducts=categories.categories.map((category)=>{
          return products.products.filter((product)=>{
            return category.categoryName===product.categoryName
        })
        })
        // const catProducts=products.products.filter((product)=>{
        //   return categories.categories.map((category)=>{
        //     return product.categoryName===category.categoryName
        //   })
        // })
        // console.log(catProducts)
        setProducts(catProducts[category])
        // console.log(products[category])
      }catch(error){
        console.log(error);
      }
    })()
  },[category])

  const {state}=useAllData();
  const {sortBy,showSpecificBrand,showPriceRange}=state;
  const sortProducts=(products,sortBy)=>{
    if(sortBy==="PRICE_LOW_TO_HIGH"){
      return [...products].sort((a,b)=>a["price"]-b["price"])
    }
    if(sortBy==="PRICE_HIGH_TO_LOW"){
      return [...products].sort((a,b)=>b["price"]-a["price"])
    }
    return products;
  };

  const filterByBrand=(sortedProducts,showSpecificBrand)=>{
    if(showSpecificBrand==="ALL"){
      return sortedProducts;
    }else{
      return sortedProducts.filter(({name})=>name.toUpperCase().includes(showSpecificBrand))
    }
    
  }

  const filterByPrice=(filteredProducts,showPriceRange)=>{
    switch(showPriceRange){
      case "RANGE_1":
        return filteredProducts.filter(({price})=>price>=5000 && price<=15000)
      case "RANGE_2":
        return filteredProducts.filter(({price})=>price>=15000 && price<=30000)
      case "RANGE_3":
        return filteredProducts.filter(({price})=>price>=30000 && price<=45000)
      case "RANGE_4":
        return filteredProducts.filter(({price})=>price>=45000 )
      default:
        return filteredProducts;
  }
}

const sortedProductsList=sortProducts(products,sortBy);
const filteredByBrand1=filterByBrand(sortedProductsList,showSpecificBrand);
const filteredByPrice2=filterByPrice(filteredByBrand1,showPriceRange);
 
  return (
      <div className="productGrid-wrapper rows3-grid">
        <Header category={category} setCategory={setCategory}/>
        <main className="products-main cols2-grid">
          <aside className="side-col">
            <Filters/> 
          </aside>
          <section className="content-col">
            {filteredByPrice2.map((prod)=>{
              return <ProductCard singleProd={prod} key={prod._id}/>
            })}
            <div className="changePage flex-center">
                    <button className="page-index">&lt;</button>
                    <button className="page-index">1</button>
                    <button className="page-index">2</button>
                    <button className="page-index">3</button>
                    <button className="page-index">&gt;</button>
            </div>
          </section>
        </main>
        <Footer style={{padding: "4rem 0 4rem 0",
    margin: 0,
    backgroundColor: "var(--pink8bg)",
    color: "var(--yellowGold)",
    fontWeight: 600,
    fontSize: "2rem",
    alignItems: "center",
    paddingRight: "2rem",
    borderTop: "1px solid var(--blackl1)"}}/>
    </div>
  )
}


export {ProductListing};