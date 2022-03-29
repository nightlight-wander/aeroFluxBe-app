import React from 'react';
import { Link } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function ActionsHead() {
  return (
    <div className="actions-head flex-vCenter">
    <Link to="/profile" className="user flex-col flex-vCenter">
        <span><PermIdentityOutlinedIcon/> </span>
        <span className="actions-title">Profile</span>
    </Link>
    <Link to="/wishlist" className="wishlist flex-col flex-vCenter">
        <span><FavoriteBorderOutlinedIcon size={24}px/></span>
        <span className="actions-title">Wishlist</span>
    </Link>
    <Link to="/bag" className="bag flex-col flex-vCenter">
        <span><ShoppingBagIcon/> </span>
        <span className="actions-title">Bag</span>
    </Link>
</div>
  )
}

export {ActionsHead}