import React from 'react';
import { Link } from "react-router-dom";
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
  return (
    <div className="loginGrids-wrapper rows3-grid">
        <Header/>
        <main className="tab-fullWrapper flex-hCenter ">
            <div className="tab-wrapper">
                <ul className="tab-list flex-center sp2-pd-t">
                    <li className="sp1-pd-b">Sign Up</li>
                </ul>
                <div className="tabContent">
                    <form className="login form flex-col sp4-mg-t">
                        <div className="input-wrapper flex-col ">
                            <label htmlFor="email" className="text-label sp4-mg-lr">
                                UserName<span className="req-feild">*</span>
                            </label>
                            <input id="email" type="email" className="text-input sp4-mg-lr"/>

                            <label htmlFor="email" className="text-label sp4-mg-lr">
                                Email<span className="req-feild">*</span>
                            </label>
                            <input id="email" type="email" className="text-input sp4-mg-lr"/>

                            <label htmlFor="password" className="text-label sp4-mg-lr">
                                Password<span className="req-feild">*</span>
                            </label>
                            <input id="password" type="email" className="text-input sp4-mg-lr"/>
                            <VisibilityIcon className="eye-icon1" style={{fontSize:"2.4rem"}}/>

                            <label htmlFor="password" className="text-label sp4-mg-lr">
                                Confirm Password<span className="req-feild">*</span>
                            </label>
                            <input id="password" type="email" className="text-input sp4-mg-lr"/>
                            <VisibilityIcon className="eye-icon2" style={{fontSize:"2.4rem"}}/>
                        </div>

                        <div className="btn-slide button sp-t">Sign Up</div>
                    </form>
                </div>
                <div className="sign-link"><Link to="/Login">Already have an account</Link></div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export {Signup};