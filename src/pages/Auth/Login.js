import React from 'react';
import { Link } from "react-router-dom";
import { Header } from 'components/Header/Header';
import "../../styles/spaces.css";
import "../../styles/common.css";
import "./Auth.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Footer } from 'components/Footer/Footer';

const Login = () => {
  return (
    <div className="loginGrids-wrapper rows3-grid">
        <Header/>
        <main className="tab-fullWrapper flex-hCenter ">
            <div className="tab-wrapper">
                <ul className="tab-list flex-center sp2-pd-t">
                    <li className="sp1-pd-b">Login</li>
                </ul>
                <div className="tabContent">
                    <form className="login form flex-col sp4-mg-t">
                        <div className="input-wrapper flex-col ">
                            <label for="email" className="text-label sp4-mg-lr">
                                Email<span className="req-feild">*</span>
                            </label>
                            <input id="email" type="email" className="text-input sp4-mg-lr"/>

                            <label for="password" className="text-label sp4-mg-lr ">
                                Password<span className="req-feild">*</span>
                            </label>
                            <input id="password" type="email" className="text-input sp4-mg-lr"/>
                            <VisibilityIcon className="eye-icon" style={{fontSize:"2.4rem"}}/>
                        </div>
                        <div className="password-wrapper d-flex ">
                            <div className="remeber-box">
                                <input type="checkbox" name="remember-me"/>
                                Remember Me
                            </div>
                            <div className="forget-box">
                                <Link to="#" className="link-btn">Forgot Password</Link>
                            </div>
                        </div>
                        <div className="btn-slide button sp-t">Sign In</div>
                    </form>
                </div>
                <div className="sign-link"><Link to="/Signup">Create New Account</Link></div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export {Login};