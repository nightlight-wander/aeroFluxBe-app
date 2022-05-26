import { useContext, createContext, useReducer } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const authInitialStates = {
    login: {
        email: "",
        password: ""
    },
    eToken: localStorage.getItem("eToken")||"",
    user: JSON.parse(localStorage.getItem("user"))||{},
    isLogin: false
};


const reducerFuncAuth = (state, action) => {
    switch (action.type) {
        case "POST_EMAIL":
            return {
                ...state,
                login: { ...state.login, email: action.payload }
            }
        case "POST_PASS":
            return {
                ...state,
                login: { ...state.login, password: action.payload }
            }
        case "GET_TOKEN":
            return {
                ...state,
                eToken: action.payload
            }
        case "GET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "CHECK_LOGIN":
            return {
                ...state,
                isLogin: action.payload
            }
        default:
            return state;
    }
}

const AuthProvider = ({ children }) => {
    const [authStates, authDispatch] = useReducer(reducerFuncAuth, authInitialStates);
    return (
        <AuthContext.Provider value={{ authStates, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth };