import React from 'react';
import { Link } from "react-router-dom";
import droneLogo from '../../../assets/drone-logo-new-removebg-preview.png';

function LogoHead() {
  return (
        <div className="logo-head flex-vCenter">
            <Link to="/"><img className="logo-img" src={droneLogo} alt="drone-logo"></img></Link>
            <Link to="/" className="logo-name">AEROFLUX-BEE</Link>
        </div>
  )
}

export {LogoHead};