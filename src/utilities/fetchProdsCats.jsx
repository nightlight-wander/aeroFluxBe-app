import axios from "axios";
import {useEffect} from 'react';
import { useAllData } from "../context/AllDataContext";

const FetchProdsCats = () => {
    const { state, dispatch } = useAllData();
    useEffect(() => {
        (async () => {
            try {
                const { data: products } = await axios.get("/api/products");
                const { data: categories } = await axios.get("/api/categories");
                const catProducts = categories.categories.map((category) => {
                    return products.products.filter((product) => {
                        return category.categoryName === product.categoryName
                    })
                })
                dispatch({ type: "GET_PRODUCTS", payload: catProducts[state.category] })
            } catch (error) {
                console.log(error);
            }
        })()
    }, [state.category,dispatch])
    
}

export { FetchProdsCats }