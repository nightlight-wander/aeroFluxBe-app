import {useContext,createContext, useReducer} from "react";


const AllDataContext=createContext();
const useAllData=()=>useContext(AllDataContext);

const initialStates={
    sortBy:"",
    showSpecificBrand:"",
    showPriceRange:"",
    
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