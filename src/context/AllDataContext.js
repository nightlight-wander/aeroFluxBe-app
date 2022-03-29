import {useContext,createContext, useReducer} from "react";


const AllDataContext=createContext();
const useAllData=()=>useContext(AllDataContext);

const initialStates={
    sortBy:"",
    showSpecificBrand:"",
    showPriceRange:"",
    wishlist:[],
};

const reducerFunc=(state,action)=>{
    switch(action.type){
      case "SORT":
        return {...state,
          sortBy:action.payload}
      case "SWITCH_BRAND":
        return {...state,
          showSpecificBrand:action.payload}
      case "SWITCH_PRICE":
        return {...state,
          showPriceRange:action.payload}
      case "CLEAR_ALL":
        return {...state,
          showPriceRange:action.payload,
          sortBy:action.payload,
          showSpecificBrand:action.payload
        }
      case "ADD_TO_WISH":
        let prodIndex=state.wishlist.findIndex((item)=>item._id===action.payload._id);
          return{...state,
            wishlist:prodIndex===-1?[...state.wishlist,{_id:action.payload._id,name:action.payload.name,price:action.payload.price,initialPrice:action.payload.initialPrice,ratingNo:action.payload.ratingNo,categoryName:action.payload.categoryName,stock:action.payload.stock,imageUrl:action.payload.imageUrl,reviews:action.payload.reviews,newProduct:action.payload.newProduct}]:[...state.wishlist]
          }
      default:
        return state;  
    }
  
};

const AllDataProvider=({children})=>{
    const [state,dispatch]=useReducer(reducerFunc,initialStates);
    return(
        <AllDataContext.Provider value={{state,dispatch}}>
            {children}
        </AllDataContext.Provider>
    );
}

export {AllDataProvider,useAllData};