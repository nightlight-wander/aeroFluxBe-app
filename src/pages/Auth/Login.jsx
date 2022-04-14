import React from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Header } from '../../components/Header/Header';
import "../../styles/spaces.css";
import "../../styles/common.css";
import "./Auth.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Footer } from '../../components/Footer/Footer';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const location=useLocation();
    const {authStates,authDispatch}=useAuth();
    const {login,isLogin}=authStates;
    const loginEmailInput = (e) => {
        authDispatch({type:"POST_EMAIL",payload:e.target.value})
    }
    const loginPasswordInput = (e) => {
        authDispatch({type:"POST_PASS",payload:e.target.value})
    }
    const loginOnSubmit = async (logEmail, logPass) => {
        try {
            const response = await axios.post(`/api/auth/login`, {
                email:logEmail ,
                password:logPass,
            });
            // saving the encodedToken in the localStorage
            if(response.status===200){
                localStorage.setItem("eToken", response.data.encodedToken);
                localStorage.setItem("user",JSON.stringify(response.data.foundUser));
                authDispatch({type:"GET_TOKEN",payload:response.data.encodedToken});
                authDispatch({type:"GET_USER",payload:JSON.stringify(response.data.foundUser)});
                authDispatch({type:"CHECK_LOGIN",payload:!isLogin})
                navigate(location?.state?.from?.pathname||"/product-listing",{replace:true})
            }else{
                navigate("/login")
            }
           
        } catch (error) {
            console.log(error);
        }

    }
    const testUserLogin = () => {
        loginOnSubmit("flyflow@gmail.com","paperplanes12");
    }

    return (
        <div className="loginGrids-wrapper rows3-grid">
            <Header />
            <main className="tab-fullWrapper flex-hCenter ">
                <div className="tab-wrapper">
                    <ul className="tab-list flex-center sp2-pd-t">
                        <li className="sp1-pd-b">Login</li>
                    </ul>
                    <div className="tabContent">
                        <form className="login form flex-col sp4-mg-t" onSubmit={() => loginOnSubmit(login.email, login.password)}>
                            <div className="input-wrapper flex-col ">
                                <label htmlFor="email" className="text-label sp4-mg-lr">
                                    Email<span className="req-feild">*</span>
                                </label>
                                <input id="email" type="email" className="text-input sp4-mg-lr" value={login.email} onChange={() => loginEmailInput()} />

                                <label htmlFor="password" className="text-label sp4-mg-lr ">
                                    Password<span className="req-feild">*</span>
                                </label>
                                <input id="password" type="email" className="text-input sp4-mg-lr" value={login.password} onChange={() => loginPasswordInput()} />
                                <VisibilityIcon className="eye-icon" style={{ fontSize: "2.4rem" }} />
                            </div>
                            <div className="password-wrapper d-flex ">
                                <div className="remeber-box">
                                    <input type="checkbox" name="remember-me" />
                                    Remember Me
                                </div>
                                <div className="forget-box">
                                    <Link to="#" className="link-btn">Forgot Password</Link>
                                </div>
                            </div>
                            <div className="btn-slide button sp-t" onClick={() => testUserLogin()}>Test Creds Login</div>
                            <div className="btn-slide button sp-t">Sign In</div>
                        </form>
                    </div>
                    <div className="sign-link"><Link to="/Signup">Create New Account</Link></div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export { Login };