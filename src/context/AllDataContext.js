import {useContext,createContext, useReducer} from "react";


const AllDataContext=createContext();
const useAllData=()=>useContext(AllDataContext);

const initialStates={
    sortBy:"",
    showSpecificBrand:"",
    showPriceRange:"",
    wishlist:[],
    bag:[]
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
          return{...state,
            wishlist:[...state.wishlist,action.payload]
          }
      case "REMOVE_FROM_WISH":
        return {...state,
          wishlist:[...state.wishlist.filter(wishlistProd=>wishlistProd._id!==action.payload._id)]
        }
      case "ADD_TO_BAG":
        return {...state,
          bag:[...state.bag,{...(action.payload),qty:1}]
        }
      case "REMOVE_FROM_BAG":
        return {...state,
          bag:[...state.bag.filter(bagProd=>bagProd._id!==action.payload._id)]
      }
      case "INCREASE_QTY":
      return {...state,
      bag:[...state.bag.map(item=>item._id===action.payload._id?{...item,qty:item.qty+1}:{...item})]
      }
      case "DECREASE_QTY":
      return {...state,
      bag:[...state.bag.map(item=>(item._id===action.payload._id&&item.qty>1)?{...item,qty:item.qty-1}:{...item,qty:1})]
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